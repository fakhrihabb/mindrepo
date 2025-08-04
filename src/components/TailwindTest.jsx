export default function TailwindTest() {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Tailwind CSS Test</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded backdrop-blur-sm">
          <h3 className="font-semibold">Responsive Design</h3>
          <p className="text-sm">This grid adapts to screen size</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded backdrop-blur-sm">
          <h3 className="font-semibold">Beautiful Gradients</h3>
          <p className="text-sm">CSS gradients made easy</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded backdrop-blur-sm">
          <h3 className="font-semibold">Utility Classes</h3>
          <p className="text-sm">No custom CSS needed</p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-green-500 rounded-lg">
        <p className="font-semibold">✅ Tailwind CSS is working perfectly!</p>
      </div>
    </div>
  )
}