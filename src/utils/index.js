// mean, median and mode methods excepts 2 arguments
// one is the data and the other one is the property in the data
export const mean = (data , property) => {
  const mean = data.reduce((accumulator, item) => accumulator + Number(item[property]), 0);

  return (mean / data.length).toFixed(3);
}

export const median = (data , property) => {
  const sortedData = [...data].sort(function(a, b) {
    return Number(a[property]) - Number(b[property]);
  });

  const half = Math.floor(sortedData.length / 2);

  const median = (sortedData.length % 2
    ? sortedData[half][property]
    : (sortedData[half - 1][property] + sortedData[half][property]) / 2
  );

  return median.toFixed(3);
}

export const mode = (data , property) => {
  const frequencyTable = {};

  data.forEach(element => frequencyTable[element[property]] = frequencyTable[element[property]] + 1 || 1);

  let modes = [];
  let maximumFrequency = 0;

  for(const key in frequencyTable) {
    if(frequencyTable[key] > maximumFrequency) {
      modes = key;
      maximumFrequency = frequencyTable[key];
    } else if(frequencyTable === maximumFrequency) {
      modes.push(key);
    }
  }

  if(modes.length === Object.keys(frequencyTable).length) {
    modes = []
  }

  return Number(modes).toFixed(3);
}

// helper method to structure data class wise
export const groupDataByClass = data => {
  return data.reduce(function (r, a) {
    r[a.Alcohol] = r[a.Alcohol] || [];
    r[a.Alcohol].push(a);
    return r;
  }, Object.create(null));
}

// helper method to create new gamma property
export const createGammaProperty = data => {
  for(const item of data) {
    item.Gamma = Number(((item.Ash * item.Hue) / item.Magnesium).toFixed(3));
    console.log(item.Gamma)
  }
}
