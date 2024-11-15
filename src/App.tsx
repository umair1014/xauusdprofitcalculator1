import React from 'react';
import { Calculator } from './components/Calculator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { CTAPopup } from './components/CTAPopup';
import { LiveChart } from './components/LiveChart';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Calculator />
        <LiveChart />
        <Content />
      </main>
      <Footer />
      <CTAPopup />
    </div>
  );
}

export default App;