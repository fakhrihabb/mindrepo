export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About MindRepo</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-4">
          This is a test page demonstrating that React Router is working correctly. 
          This page showcases routing functionality with clean URLs and navigation.
        </p>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-800 mb-3">Technologies Used:</h2>
          <ul className="space-y-2 text-indigo-700">
            <li>✅ <strong>React</strong> - UI Library</li>
            <li>✅ <strong>React Router</strong> - Client-side routing</li>
            <li>✅ <strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
            <li>✅ <strong>React Flow</strong> - Node-based UIs</li>
            <li>✅ <strong>Supabase</strong> - Backend as a Service</li>
            <li>✅ <strong>Vite</strong> - Build tool</li>
          </ul>
        </div>
      </div>
    </div>
  )
}