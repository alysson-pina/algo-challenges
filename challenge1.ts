function numberOfArrays(differences: number[], lower: number, upper: number): number {
  let minPossible = lower;
  let maxPossible = upper;

  let accForMin = minPossible;
  let accForMax = maxPossible;

  for (let i = 0; i < differences.length; i += 1) {
    accForMin += differences[i];
    accForMax += differences[i];

    if (accForMin < lower) {
        // lower bound violated
        let overflow = accForMin - lower;
        accForMin = lower;
        minPossible = minPossible - overflow;
      }

      if (accForMax > upper) {
        // upper bound violated
        let overflow = accForMax - upper;   
        accForMax = upper;
        maxPossible = maxPossible - overflow;
      }

      if (accForMin > upper || accForMax < lower) {
        break;
      }
  }

  const numSequences = maxPossible - minPossible;

  return numSequences >= 0 ? numSequences + 1 : 0;
};
