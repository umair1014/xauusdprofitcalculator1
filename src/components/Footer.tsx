import React from 'react';
import { Coins } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Coins className="h-6 w-6 text-yellow-500" />
            <span className="text-lg font-semibold">XAUUSD Calculator</span>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} XAUUSD Profit Calculator. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}