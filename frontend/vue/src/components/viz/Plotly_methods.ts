const methods: string[][] = [
  ['react'],
  ['restyle'],
  ['relayout'],
  ['update'],
  ['validate'],
  ['makeTemplate'],
  ['validateTemplate'],
  ['addTraces'],
  ['deleteTraces'],
  ['moveTraces'],
  ['extendTraces'],
  ['prependTraces'],
  ['addFrames'],
  ['animate'],
  ['purge'],
  ['toImage'],
  ['downloadImage'],
];

export const plotlyMethods: string[] = methods.map((x) => x[0]);
