import { Routes, Route } from 'react-router-dom'

import RootLayout from './components/layout/RootLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} />
    </Routes>
  )
}

export default App