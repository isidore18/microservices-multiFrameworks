import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div>
        <StylesProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route exact path="pricing" element={<Pricing />} />
                </Routes>
            </Router>
        </StylesProvider>
    </div>
  )
}
