import React, { Component } from 'react';

interface State {
  temperature: number;
  scale: 'C' | 'F';
}

class TemperatureConverter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      temperature: 0,
      scale: 'C',
    };
  }

  handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ temperature: parseFloat(e.target.value) });
  };

  handleScaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ scale: e.target.value as 'C' | 'F' });
  };

  convertTemperature = (temperature: number, scale: 'C' | 'F') => {
    if (scale === 'C') {
      return ((temperature * 9) / 5 + 32).toFixed(2);
    } else {
      return (((temperature - 32) * 5) / 9).toFixed(2);
    }
  };

  render() {
    const { temperature, scale } = this.state;
    const convertedTemp = this.convertTemperature(temperature, scale);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Temperature Converter</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Temperature:</label>
            <input
              type="number"
              value={temperature}
              onChange={this.handleTemperatureChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Scale:</label>
            <select
              value={scale}
              onChange={this.handleScaleChange}
              className="w-full px-4 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-500"
            >
              <option value="C">Celsius</option>
              <option value="F">Fahrenheit</option>
            </select>
          </div>

          <p className="text-lg font-semibold text-gray-600">
            Converted Temperature: {convertedTemp} {scale === 'C' ? 'Fahrenheit' : 'Celsius'}
          </p>
        </div>
      </div>
    );
  }
}

export default TemperatureConverter;
