import { useState } from 'react'
import './App.css'
import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import RefProps from './components/RefProps'
import ThemeToggler from './components/ThemeToggler'
import Navigation from './components/Navigation'

function AppContent() {
  const isDark = true;
  // const { isDark } = useTheme();
  return (
    <div
      className={`min-h-screen bg-gray-800 ${
        isDark ? "bg-gray-900" : "bg-purple-400"
      }`}
    >
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React
          </p>
          <div
            className={`mt-4 inline-block px-6 py-2 rounded-full ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <span className="font-semibold">
              Built with Bun + Vite + React + Tailwind CSS
            </span>
          </div>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {

  return (
    <>
      <AppContent/>
    </>
  )
}

export default App
