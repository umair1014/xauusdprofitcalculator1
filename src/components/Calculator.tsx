import React, { useState } from 'react';
import { Calculator as CalcIcon, RotateCcw, TrendingUp, TrendingDown } from 'lucide-react';

interface CalculatorState {
  lotSize: string;
  entryPrice: string;
  exitPrice: string;
  leverage: string;
  position: 'buy' | 'sell';
}

const initialState: CalculatorState = {
  lotSize: '',
  entryPrice: '',
  exitPrice: '',
  leverage: '100',
  position: 'buy'
};

export function Calculator() {
  const [state, setState] = useState<CalculatorState>(initialState);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const lots = parseFloat(state.lotSize);
    const entry = parseFloat(state.entryPrice);
    const exit = parseFloat(state.exitPrice);
    const lev = parseFloat(state.leverage);

    if (!lots || !entry || !exit || !lev) {
      alert('Please fill in all fields with valid numbers');
      return;
    }

    // XAUUSD standard lot size is 100 oz
    const contractSize = 100;
    const priceDiff = state.position === 'buy' ? exit - entry : entry - exit;
    const profit = (priceDiff * contractSize * lots);
    setResult(profit);
  };

  const handleReset = () => {
    setState(initialState);
    setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="space-y-6">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setState(s => ({ ...s, position: 'buy' }))}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              state.position === 'buy'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Buy
          </button>
          <button
            onClick={() => setState(s => ({ ...s, position: 'sell' }))}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              state.position === 'sell'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <TrendingDown className="w-5 h-5 mr-2" />
            Sell
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lot Size
            </label>
            <input
              type="number"
              step="0.01"
              value={state.lotSize}
              onChange={(e) => setState({ ...state, lotSize: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter lot size"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Entry Price
            </label>
            <input
              type="number"
              step="0.01"
              value={state.entryPrice}
              onChange={(e) => setState({ ...state, entryPrice: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter entry price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Exit Price
            </label>
            <input
              type="number"
              step="0.01"
              value={state.exitPrice}
              onChange={(e) => setState({ ...state, exitPrice: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter exit price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Leverage
            </label>
            <input
              type="number"
              value={state.leverage}
              onChange={(e) => setState({ ...state, leverage: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter leverage"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCalculate}
            className="flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <CalcIcon className="w-5 h-5 mr-2" />
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="flex items-center px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </button>
        </div>

        {result !== null && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-center">
              Profit/Loss: {' '}
              <span className={result >= 0 ? 'text-green-600' : 'text-red-600'}>
                ${result.toFixed(2)}
              </span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}