export const plotlyEvents: string[][] = [
  // https://github.com/plotly/react-plotly.js#event-handler-props
  // emit, Plotly native event
  ['plotlyAfterExport', 'plotly_afterexport'],
  ['plotlyAfterPlot', 'plotly_afterplot'],
  ['plotlyAnimated', 'plotly_animated'],
  ['plotlyAnimatingFrame', 'plotly_animatingframe'],
  ['plotlyAnimationInterrupted', 'plotly_animationinterrupted'],
  ['plotlyAutoSize', 'plotly_autosize'],
  ['plotlyBeforeExport', 'plotly_beforeexport'],
  ['plotlyBeforeHover', 'plotly_beforehover'],
  ['plotlyButtonClicked', 'plotly_buttonclicked'],
  ['plotlyClick', 'plotly_click'],
  ['plotlyClickAnnotation', 'plotly_clickannotation'],
  ['plotlyDeselect', 'plotly_deselect'],
  ['plotlyDoubleClick', 'plotly_doubleclick'],
  ['plotlyFramework', 'plotly_framework'],
  ['plotlyHover', 'plotly_hover'],
  ['plotlyLegendClick', 'plotly_legendclick'],
  ['plotlyLegendDoubleClick', 'plotly_legenddoubleclick'],
  ['plotlyRelayout', 'plotly_relayout'],
  ['plotlyRelayouting', 'plotly_relayouting'],
  ['plotlyRestyle', 'plotly_restyle'],
  ['plotlyRedraw', 'plotly_redraw'],
  ['plotlySelected', 'plotly_selected'],
  ['plotlySelecting', 'plotly_selecting'],
  ['plotlySliderChange', 'plotly_sliderchange'],
  ['plotlySliderEnd', 'plotly_sliderend'],
  ['plotlySliderStart', 'plotly_sliderstart'],
  ['plotlySunburstClick', 'plotly_sunburstclick'],
  ['plotlyTransitioning', 'plotly_transitioning'],
  ['plotlyTransitionInterrupted', 'plotly_transitioninterrupted'],
  ['plotlyUnhover', 'plotly_unhover'],
  ['plotlyTreemapClick', 'plotly_treemapclick'],
  ['plotlyWebGlContextLost', 'plotly_webglcontextlost'],
];

export const plotlyNativeEvents: string[] = plotlyEvents.map((x) => x[1]);

export const plotlyEmits: string[] = plotlyEvents.map((x) => x[0]);
