import { useCallback } from 'react'

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MarkerType,
} from 'reactflow'

import 'reactflow/dist/base.css'


import CustomNode from '~/components/flow/CustomNodeTail'

const nodeTypes = {
  custom: CustomNode,
}

const initNodes = [
  {
    id: '1',
    type: 'custom',
    data: {
      name: 'Stock outs/lost sales at relevant last mile point of the supply chain the Re-distributor',
      job: '31%',
      percentage: '100%',
    },
    position: { x: 0, y: 200 },
    sourcePosition: 'right',
  },
  {
    id: '2',
    type: 'custom',
    data: {
      name: 'Stocks available at Distribution Center,but stocked out at the Re-Distribution - Poor replenishment (regional distribution)',
      job: 'Designer',
      percentage: '55%',
    },

    position: { x: 350, y: -150 },
    targetPosition: 'left',
    sourcePosition: 'right',
  },
  {
    id: '3',
    type: 'custom',
    data: {
      name: 'No stock available at the Distribution Centre',
      job: 'Developer',
      percentage: '45%',
    },
    position: { x: 350, y: 450 },
  },
  {
    id: '4',
    type: 'custom',
    data: {
      name: 'Sold less than forecast',
      job: 'Developer',
      percentage: '35%',
    },
    position: { x: 700, y: 225 },
  },
  {
    id: '5',
    type: 'custom',
    data: {
      name: 'SKU not planned for sales/sold more than forecast - Poor demand planning',
      job: 'Developer',
      percentage: '10%',
    },
    position: { x: 700, y: 625 },
  },
  {
    id: '6',
    type: 'custom',
    data: {
      name: 'Adequate or over Produced',
      job: 'Developer',
      percentage: '12%',
    },
    position: { x: 1100, y: 100 },
  },
  {
    id: '7',
    type: 'custom',
    data: { name: 'Under Produced', job: 'Developer', percentage: '23%' },
    position: { x: 1100, y: 325 },
  },
  {
    id: '8',
    type: 'custom',
    data: { name: 'Forecast Accuracy', job: 'Developer', percentage: '4%' },
    position: { x: 1000, y: 650 },
  },
  {
    id: '9',
    type: 'custom',
    data: {
      name: 'Poor replenishment (regional distribution)',
      job: 'Developer',
      percentage: '1%',
    },
    position: { x: 1500, y: -400 },
  },
  {
    id: '10',
    type: 'custom',
    data: {
      name: 'Poor production scheduling at plants',
      job: 'Developer',
      percentage: '4%',
    },
    position: { x: 1500, y: -200 },
  },
  {
    id: '11',
    type: 'custom',
    data: {
      name: 'Poor dispatch planning from plants to DC',
      job: 'Developer',
      sourcePosition: 'right',
      percentage: '9%',
    },
    position: { x: 1500, y: 10 },
  },
  {
    id: '12',
    type: 'custom',
    data: {
      name: 'Poor dispatch plan compilance at plants',
      job: 'Developer',
      percentage: '8%',
    },
    position: { x: 1500, y: 200 },
  },
  {
    id: '13',
    type: 'custom',
    data: {
      name: 'Low production execution at plants',
      job: 'Low plants',
      percentage: '7%',
    },
    position: { x: 1500, y: 400 },
  },
  {
    id: '14',
    type: 'custom',
    data: {
      name: 'Low production plan/capacity at plants',
      job: 'plants',
      percentage: '6%',
    },
    position: { x: 1500, y: 600 },
  },
]

const initEdges = [
  {
    id: 'e1-1',
    source: '1',
    target: '2',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    // type: 'step',
  },
  {
    id: 'e1-2',
    source: '1',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    // type: 'step',
  },
  {
    id: 'e1-3',
    source: '3',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    // type: 'step',
  },
  {
    id: 'e1-4',
    source: '3',
    target: '5',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    // type: 'step',
  },
  {
    id: 'e1-5',
    source: '4',
    target: '6',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    // type: 'step',
  },
  {
    id: 'e1-5',
    source: '4',
    target: '7',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e1-6',
    source: '5',
    target: '8',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
   
  },
  {
    id: 'e1-7',
    source: '6',
    target: '9',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
   
  },
  {
    id: 'e1-8',
    source: '6',
    target: '10',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
   
  },
  {
    id: 'e1-9',
    source: '6',
    target: '11',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
 
  },
  {
    id: 'e1-10',
    source: '7',
    target: '12',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
   
  },
  {
    id: 'e1-11',
    source: '7',
    target: '13',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  
  },
  {
    id: 'e1-12',
    source: '7',
    target: '14',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
   
  },
]
export default function FlowChart () {
  const [nodes, onNodesChange] = useNodesState(initNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      className="bg-teal-50"
    >
      <Controls />
    </ReactFlow>
  )
}
