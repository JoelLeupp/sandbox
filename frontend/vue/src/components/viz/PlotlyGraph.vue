<template>
  <div :id="id" ref="el"></div>
</template>

<script setup lang="js">
import { ref, watch, toRaw, onMounted, onBeforeUnmount } from 'vue'
import Plotly from 'plotly.js-strict-dist-min'
import { debounce } from 'quasar'
import { plotlyMethods } from 'src/components/viz/Plotly_methods.ts'
import { plotlyEvents, plotlyEmits } from 'src/components/viz/Plotly_events.ts'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  layout: {
    type: Object,
    required: true
  },
  config: {
    type: Object,
    required: false,
    default: null
  },
  id: {
    type: String,
    required: false,
    default: null
  }
})

const enableDebugLog = false

const logDebug = enableDebugLog
  ? function () {
      const args = []
      for (const a of arguments) args.push(a)
      console.log(...['VTPlotly:'].concat(args))
    }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  : () => {} // no-op

// defineExpose(exposed)
const exposed = {}
const el = ref(null)

let eventsRegistered = false
let resizeObserver = null
let state = {}
let size = { width: -1, height: -1 }

function onWindowResize() {
  logDebug('window.resize')
  debouncedHandleResize()
}

function onDivResize() {
  logDebug('ResizeObserver')
  debouncedHandleResize()
}

const debouncedHandleResize = debounce(handleResize, 100)

function handleResize() {
  logDebug('handleResize')

  let width = el.value.clientWidth
  let height = el.value.clientHeight

  if (width != size.width || height != size.height) {
    logDebug(`handleResize - size changed from ${size.width}x${size.height} to ${width}x${height}`)

    Plotly.relayout(el.value, {
      width: el.value.clientWidth,
      height: el.value.clientHeight
    })

    saveSizeState()
  }
}

function saveSizeState() {
  size = { width: el.value.clientWidth, height: el.value.clientHeight }
}

function renderPlot(data, layout, config) {
  logDebug('renderPlot')

  // save state of plot
  state = { data, layout, config }
  state.revision = config.revision

  // update Plotly DOM
  // clone state because plotly modifies the data objects
  let stateClone = JSON.parse(JSON.stringify(state))
  Plotly.react(el.value, stateClone)

  // register all Plotly native event handler (once!)
  if (!eventsRegistered) {
    events.forEach(evt => {
      el.value.on(evt.completeName, evt.handler)
    })
    eventsRegistered = true
  }

  saveSizeState()
}

onMounted(() => {
  // DOM element resize watcher
  resizeObserver = new ResizeObserver(onDivResize)
  resizeObserver.observe(el.value)

  // window resize watcher
  window.addEventListener('resize', onWindowResize)

  // watch property changes and update plot
  watch(
    () => [props.data, props.layout, props.config],
    ([data, layout, config]) => {
      // logDebug("watch triggered")

      // // check if plot needs to be re-rendered
      // let doRender =
      //   data !== state.data ||
      //   layout !== state.layout ||
      //   config !== state.config ||
      //   (config && config.revision != state.revision)

      // if (doRender) {
      // console.log(toRaw(props.data))
      // console.log(data)
      logDebug('RENDERING PLOT')
      renderPlot(toRaw(data), toRaw(layout), toRaw(config))
    },
    { immediate: true } // , deep: true
  )
})

onBeforeUnmount(() => {
  logDebug('onBeforeUnmount')

  // unwatch window resize event
  window.removeEventListener('resize', onWindowResize)

  // destroy ResizeObserver
  resizeObserver.disconnect()
  resizeObserver = null

  // clean-up Plotly DOM elements
  Plotly.purge(el.value)

  // unregister all Plotly event handler
  events.forEach(evt => {
    el.value.removeEventListener(evt.completeName, evt.handler)
  })

  el.value = null
})

// expose all Plotly.js methods
const funcs = plotlyMethods.reduce((all, functionName) => {
  all[functionName] = (...args) => {
    return Plotly[functionName].apply(Plotly, [el.value, ...args])
  }
  return all
}, {})

Object.assign(exposed, funcs)

// register all Plotly.js events
const emit = defineEmits(plotlyEmits)

const events = plotlyEvents.map(evt => ({
  completeName: evt[1],
  handler: (...args) => {
    // emit native vue.js event
    emit.apply(this, [evt[0], ...args])
  }
}))

defineExpose(exposed)
</script>
