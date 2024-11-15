import React from 'react';
import { TrendingUp, Shield, Brain, Target, Clock, BarChart } from 'lucide-react';

export function Content() {
  return (
    <div className="prose max-w-none">
      <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">XAUUSD Profit Calculator: Your Smart Gold Trading Companion</h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Make informed gold trading decisions with our professional XAUUSD calculator. Perfect for both novice and experienced traders, this tool helps you calculate potential profits and manage risks effectively.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-semibold">What is XAUUSD Trading?</h2>
          </div>
          <p className="text-gray-700">
            XAUUSD represents gold trading against the US dollar. Our calculator simplifies complex calculations, helping you make data-driven trading decisions in the volatile gold market.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-semibold">Risk Management</h2>
          </div>
          <p className="text-gray-700">
            Protect your investment by calculating potential profits and losses before executing trades. Our tool helps you maintain responsible position sizes and leverage levels.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6">Key Features of Our Calculator</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4">
            <Brain className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Calculations</h3>
            <p className="text-gray-600">Instant and accurate profit/loss calculations for both buy and sell positions</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Target className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Precision Trading</h3>
            <p className="text-gray-600">Fine-tune your position sizes and leverage for optimal trading outcomes</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Clock className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Results</h3>
            <p className="text-gray-600">Get immediate feedback on your potential trading scenarios</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Expert Trading Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">For Beginners</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Start with small position sizes</li>
                <li>• Use stop-loss orders consistently</li>
                <li>• Practice with a demo account first</li>
                <li>• Learn to read basic gold price charts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">For Advanced Traders</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Implement proper risk-reward ratios</li>
                <li>• Monitor key economic indicators</li>
                <li>• Use multiple timeframe analysis</li>
                <li>• Consider correlation with other markets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What is XAUUSD in trading?",
              a: "XAUUSD is the symbol representing gold priced in US dollars. XAU is the international code for gold, while USD represents the US dollar."
            },
            {
              q: "How accurate is the profit calculator?",
              a: "Our calculator provides precise calculations based on your input data, considering factors like lot size, entry/exit prices, and leverage."
            },
            {
              q: "What's the standard lot size for gold?",
              a: "One standard lot in gold trading equals 100 troy ounces. Our calculator automatically factors this in for accurate profit/loss calculations."
            },
            {
              q: "How does leverage affect my trades?",
              a: "Leverage multiplies both potential profits and losses. For example, 1:100 leverage means you can control $100 worth of gold for every $1 in your account."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-12">
        <div className="flex items-center mb-6">
          <BarChart className="w-8 h-8 text-yellow-500 mr-4" />
          <h2 className="text-2xl font-bold text-yellow-800">Ready to Start Trading?</h2>
        </div>
        <p className="text-yellow-700 mb-6">
          Get professional guidance and expert trading signals to enhance your gold trading journey. Our team of experienced traders is ready to help you succeed.
        </p>
        <a
          href="https://freegoldsignal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
        >
          Get Expert Trading Support
        </a>
      </section>
    </div>
  );
}