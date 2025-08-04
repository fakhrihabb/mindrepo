import { useCallback } from 'react'
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'React Flow Test' },
    style: { background: '#f3f4f6', border: '2px solid #10b981', borderRadius: '8px' }
  },
  {
    id: '2',
    position: { x: 0, y: 100 },
    data: { label: 'Drag me around!' },
    style: { background: '#ddd6fe', border: '2px solid #8b5cf6', borderRadius: '8px' }
  },
  {
    id: '3',
    position: { x: 200, y: 50 },
    data: { label: 'Connect nodes' },
    style: { background: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px' }
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
]

export default function ReactFlowTest() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  )

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">React Flow Test</h2>
      <div style={{ width: '100%', height: '400px' }} className="border-2 border-gray-300 rounded-lg">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      <p className="mt-4 text-green-600 font-semibold">✅ React Flow is working! Try dragging nodes and connecting them.</p>
    </div>
  )
}