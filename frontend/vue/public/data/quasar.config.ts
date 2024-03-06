/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')
const path = require('path')

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      // fix: true,
      // include: [],
      // exclude: [],
      // rawOptions: {},
      warnings: true,
      errors: true
    },

    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: ['i18n', 'axios', 'utils', 'icons', 'numbro'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: ['app.scss', 'highlightjs.scss', 'portfoliomodelling.scss'],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: ['material-icons'],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16'
      },

      vueRouterMode: 'hash', // available values: 'hash', 'history'
      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,

      // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup

      // publicPath: '/',
      // analyze: true,
      // env: {},
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir

      // extendViteConf (viteConf) {},
      // viteVuePluginOptions: {},

      extendViteConf(viteConf, { isServer, isClient }) {
        // avoid absolute path in compiled index.html for assets
        viteConf.base = ''
      },

      vitePlugins: [
        [
          '@intlify/vite-plugin-vue-i18n',
          {
            // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
            // compositionOnly: false,

            // if you want to use named tokens in your Vue I18n messages, such as 'Hello {name}',
            // you need to set `runtimeOnly: false`
            // runtimeOnly: false,

            // you need to set i18n resource including paths !
            include: path.resolve(__dirname, './src/i18n/**')
          }
        ]
      ]
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    devServer: {
      https: false,
      port: 9000,
      open: false // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
    framework: {
      config: {
        notify: {
          position: 'top-right',
          progress: true,
          timeout: 2500,
          textColor: 'white',
          actions: [{ icon: 'close', color: 'white', dense: true }]
        },
        loading: {
          delay: 200,
          spinner: 'QSpinner',
          spinnerColor: 'white',
          spinnerSize: 80
        }
      },

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QEditor',
        'QToolbar',
        'QBtn',
        'QBtnDropdown',
        'QBtnGroup',
        'QFile',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QInnerLoading',
        'QItemLabel',
        'QTooltip',
        'QInput',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QDialog',
        'QForm',
        'QFooter',
        'QScrollArea',
        'QImg',
        'QTabs',
        'QTab',
        'QRouteTab',
        'QTabPanels',
        'QTabPanel',
        'QFab',
        'QFabAction',
        'QPageSticky',
        'QSeparator',
        'QBar',
        'QSpace',
        'QSelect',
        'QRadio',
        'QTime',
        'QDate',
        'QPopupProxy',
        'QTable',
        'QTh',
        'QTr',
        'QTd',
        'QCheckbox',
        'QToggle',
        'QSlider',
        'QRange',
        'QSpinner',
        'QBadge',
        'QMenu'
      ],
      directives: ['ClosePopup'],

      // Quasar plugins
      plugins: ['Notify', 'Dialog', 'Loading']
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: []

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#sourcefiles
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },
  }
})
