import { Routes, Route } from 'react-router-dom'

// Import your new layout and page components
import RootLayout from './components/layout/RootLayout'
import Home from './components/Home'
import About from './components/About'
import ReactFlowTest from './components/ReactFlowTest'

function App() {
  return (
    <Routes>
      {/* All routes inside here will share the RootLayout */}
      <Route path="/" element={<RootLayout />}>
        {/* The "index" route is the default for the parent path "/" */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="flow" element={<ReactFlowTest />} />
      </Route>
    </Routes>
  )
}

export default App