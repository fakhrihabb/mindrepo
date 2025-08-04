import SupabaseTest from './SupabaseTest'
import TailwindTest from './TailwindTest'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">MindRepo</h1>
        <p className="text-gray-600">Testing React Router, Tailwind CSS, React Flow, and Supabase</p>
      </div>
      <SupabaseTest />
      <TailwindTest />
    </div>
  )
}