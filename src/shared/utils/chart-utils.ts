
export function randomDataProvider(): string[] {
  const dataProvider = [];
  
  // Generate random data
  for (let year = 1950; year <= 2005; ++year) {
    dataProvider.push({
      year: year.toString(),
      value: Math.floor(Math.random() * 100) - 50
    });
  }
  
  return dataProvider;
}

export function generateAreaChartData() {
  let chartData = [];
  // current date
  let firstDate = new Date();
  // now set 500 minutes back
  firstDate.setMinutes(firstDate.getDate() - 1000);
  
  // and generate 500 data items
  let visits = 500;
  for (let i = 0; i < 500; i++) {
    let newDate = new Date(firstDate);
    // each time we add one minute
    newDate.setMinutes(newDate.getMinutes() + i);
    // some random number
    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    // add data item to the array
    chartData.push({
      date: newDate,
      visits: visits
    });
  }
  return chartData;
}
