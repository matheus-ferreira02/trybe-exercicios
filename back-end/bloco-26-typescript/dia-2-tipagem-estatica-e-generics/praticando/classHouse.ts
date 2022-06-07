enum Metric {
  Meters = 'Meters',
  Kilometers = 'Kilometers'
}

interface House {
  size: number,
  metric: Metric,
  location: string,
}

class House {
  constructor(size: number, metric: Metric, location: string) {
    this.size = size,
    this.metric = metric,
    this.location = location
  }
};
