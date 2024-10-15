'use client';
import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';

import { PrinterIcon } from '@heroicons/react/24/outline';
import {
  FilePlusIcon,
  Pencil2Icon,
  TrashIcon,
  DownloadIcon
} from '@radix-ui/react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls
} from '@xyflow/react';

import '@xyflow/react/dist/base.css';

import CustomNode from '@/components/flow/CustomNodeTail';

export enum MarkerType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed'
}

export function Icontooltip() {
  return (
    <div className="m-2 space-x-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-indigo-100 ">
              <FilePlusIcon className="text-indigo-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>New</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-purple-100">
              <Pencil2Icon className="text-purple-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-red-100">
              <TrashIcon className="text-red-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-yellow-100">
              <PrinterIcon className="text-yellow-800 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Print</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="bg-green-100">
              <DownloadIcon className="text-green-700 w-6 h-6 " />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
const nodeTypes = {
  custom: CustomNode
};

const initNodes = [
  {
    id: '1',
    type: 'custom',
    data: {
      name: 'Stock outs/lost sales at relevant last mile point of the supply chain the Re-distributor',
      job: '31%',
      percentage: '100%',
      bgColor: 'bg-blue-500'
    },
    position: { x: -120, y: 200 },
    sourcePosition: 'right'
  },
  {
    id: '2',
    type: 'custom',
    data: {
      name: 'Stocks available at Distribution Center,but stocked out at the Re-Distribution - Poor replenishment (regional distribution)',
      job: 'Designer',
      percentage: '55%',
      bgColor: 'bg-red-500'
    },

    position: { x: 350, y: -150 },
    targetPosition: 'left',
    sourcePosition: 'right'
  },
  {
    id: '3',
    type: 'custom',
    data: {
      name: 'No stock available at the Distribution Centre',
      job: 'Developer',
      percentage: '45%',
      bgColor: 'bg-blue-500'
    },
    position: { x: 350, y: 450 }
  },
  {
    id: '4',
    type: 'custom',
    data: {
      name: 'Sold less than forecast',
      job: 'Developer',
      percentage: '35%',
      bgColor: 'bg-red-500'
    },
    position: { x: 800, y: 225 }
  },
  {
    id: '5',
    type: 'custom',
    data: {
      name: 'SKU not planned for sales/sold more than forecast - Poor demand planning',
      job: 'Developer',
      percentage: '10%',
      bgColor: 'bg-blue-500'
    },
    position: { x: 800, y: 625 }
  },
  {
    id: '6',
    type: 'custom',
    data: {
      name: 'Adequate or over Produced',
      job: 'Developer',
      percentage: '12%',
      bgColor: 'bg-blue-500'
    },
    position: { x: 1250, y: 100 }
  },
  {
    id: '7',
    type: 'custom',
    data: {
      name: 'Under Produced',
      job: 'Developer',
      percentage: '23%',
      bgColor: 'bg-blue-500'
    },
    position: { x: 1250, y: 325 }
  },
  // {
  //   id: '8',
  //   type: 'custom',
  //   data: {
  //     name: 'Forecast Accuracy',
  //     job: 'Developer',
  //     percentage: '4%',
  //   },
  //   position: { x: 1200, y: 650 },
  // },
  {
    id: '9',
    type: 'custom',
    data: {
      name: 'Poor replenishment (regional distribution)',
      job: 'Developer',
      percentage: '1%',
      bgColor: 'bg-blue-500'
    },
    position: { x: 1800, y: -400 }
  },
  {
    id: '10',
    type: 'custom',
    data: {
      name: 'Poor production scheduling at plants',
      job: 'Developer',
      percentage: '4%',
      bgColor: 'bg-blue-500'
    },
    position: { x: 1800, y: -200 }
  },
  {
    id: '11',
    type: 'custom',
    data: {
      name: 'Poor dispatch planning from plants to DC',
      job: 'Developer',
      sourcePosition: 'right',
      percentage: '9%',
      bgColor: 'bg-red-500'
    },
    position: { x: 1800, y: 10 }
  },
  {
    id: '12',
    type: 'custom',
    data: {
      name: 'Poor dispatch plan compilance at plants',
      job: 'Developer',
      percentage: '8%',
      bgColor: 'bg-red-500'
    },
    position: { x: 1800, y: 200 }
  },
  {
    id: '13',
    type: 'custom',
    data: {
      name: 'Low production execution at plants',
      job: 'Low plants',
      percentage: '7%',
      bgColor: 'bg-red-500'
    },
    position: { x: 1800, y: 400 }
  },
  {
    id: '14',
    type: 'custom',
    data: {
      name: 'Low production plan/capacity at plants',
      job: 'plants',
      percentage: '6%',
      bgColor: 'bg-red-500'
    },
    position: { x: 1800, y: 600 }
  }
];

const initEdges = [
  {
    id: 'e1-1',
    source: '1',
    target: '2',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
    // type: 'step',
  },
  {
    id: 'e1-2',
    source: '1',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
    // type: 'step',
  },
  {
    id: 'e1-3',
    source: '3',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
    // type: 'step',
  },
  {
    id: 'e1-4',
    source: '3',
    target: '5',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
    // type: 'step',
  },
  {
    id: 'e1-5',
    source: '4',
    target: '6',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
    // type: 'step',
  },
  {
    id: 'e1-6',
    source: '4',
    target: '7',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
  },
  {
    id: 'e1-7',
    source: '5',
    target: '8',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
  },
  {
    id: 'e1-8',
    source: '6',
    target: '9',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
  },
  {
    id: 'e1-9',
    source: '6',
    target: '10',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
  },
  {
    id: 'e1-10',
    source: '6',
    target: '11',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
  },
  {
    id: 'e1-11',
    source: '7',
    target: '12',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
  },
  {
    id: 'e1-12',
    source: '7',
    target: '13',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
  },
  {
    id: 'e1-13',
    source: '7',
    target: '14',
    markerEnd: {
      type: MarkerType.ArrowClosed
    },
    animated: true
  }
];

export default function Flowchart() {
 const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
 const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  return (
    <>
      <div className="m-4">
        <div className="w-100 my-2 flex  justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            Availability Analytics
          </h2>

          <div className="flex items-center justify-end"></div>
        </div>

        <div className="flex items-center justify-center  rounded-t-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
          <div className=" flex items-center w-full justify-between bg-sky-50  border rounded-t-lg text-2xl text-blue-900 font-bold">
            <div className="p-2">Root Cause Analysis</div>
            <Icontooltip />
          </div>
        </div>

        <div className="border  rounded-lg">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
      
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            className="bg-white w-full h-[630px] flex justify-start items-center"
          ></ReactFlow>
        </div>
      </div>
    </>
  );
}
