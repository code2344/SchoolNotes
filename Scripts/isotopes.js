function getIsotopes(isotopeNumbers, abundances) {
  const isotopeMap = new Map();
  // Filter out any accidentally entered empty lines
  const isotopeAbundances = abundances.split('\n').filter(Boolean);
  const numberArray = isotopeNumbers.split('\n').filter(Boolean);

  numberArray.forEach((number, index) => {
    const numAsFloat = parseFloat(number);
    const abundanceAsFloat = parseFloat(isotopeAbundances[index]);
    isotopeMap.set(numAsFloat, abundanceAsFloat);
  });
  const count = isotopeMap.size;
  return { isotopeMap, count };
}

function formatIsotopes(isotopeMap) {
  return Array.from(isotopeMap.entries())
    .map(([isotope, abundance]) => `(${isotope} \\times{} ${abundance})`)
    .join(' + ');
}

function generateEquation(isotopeMap) {
  const elementTimes = formatIsotopes(isotopeMap);

  const step2Terms = Array.from(isotopeMap.entries())
      .map(([isotope, abundance]) => parseFloat((isotope * abundance).toFixed(4)))
      .join(' + ');

  let totalSum = 0;
  isotopeMap.forEach((abundance, isotope) => {
    totalSum += isotope * abundance;
  });

  const cleanSum = parseFloat(totalSum.toFixed(4));
  const finalResult = parseFloat((cleanSum / 100).toFixed(4));

  return `$$\\text{A}_{r} = \\frac{${elementTimes}}{100} = \\frac{${step2Terms}}{100} = \\frac{${cleanSum}}{100} = ${finalResult}$$`;
}


// The main function that Templater calls must be exported here
module.exports = async function (tp) {
  // 1. Gather inputs via Templater prompts
  // Note: 'Amount of isotopes' can be left out if the user just pastes lines into the multiline prompts
  const isotopeNumbers = await tp.system.prompt('Enter isotope numbers, one per line', null, false, true);
  const abundances = await tp.system.prompt('Enter abundances, one per line', null, false, true);

  if (!isotopeNumbers || !abundances) {
    return "⚠️ Error: Missing isotope numbers or abundances.";
  }

  // 2. Process data
  const { isotopeMap } = getIsotopes(isotopeNumbers, abundances);

  // 3. Return the generated LaTeX string directly into your note
  return generateEquation(isotopeMap);
};
