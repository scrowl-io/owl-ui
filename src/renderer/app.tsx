import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import * as Home from './pages/Home/index'

export default function App() {
    return (
        <Router basename="/">
            <Routes>
                <Route path={Home.route} element={<Home.Page />} />
            </Routes>
        </Router>
    )
}