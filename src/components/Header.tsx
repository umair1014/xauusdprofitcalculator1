import React from 'react';
import { Coins } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-gray-900">XAUUSD Profit Calculator</h1>
          </div>
        </div>
      </div>
    </header>
  );
}