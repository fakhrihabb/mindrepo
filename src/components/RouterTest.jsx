import { Link, useLocation } from 'react-router-dom'

export default function RouterTest() {
  const location = useLocation()
  
  return (
    <div className="p-6 bg-blue-50 rounded-lg">
      <h2 className="text-xl font-bold text-blue-800 mb-4">React Router Test</h2>
      <p className="mb-4">Current path: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{location.pathname}</span></p>
      <div className="space-x-4">
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Home
        </Link>
        <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          About
        </Link>
        <Link to="/flow" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Flow
        </Link>
      </div>
      <p className="mt-4 text-green-600">✅ React Router is working!</p>
    </div>
  )
}