import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "Logistics",
    label: "Logistics",
    color: "bg-blue-100",
  textClr: "text-blue-800"
  },
  {
    value: "Demand-Planning",
    label: "Demand Planning",
    color: "bg-green-100",
    textClr: "text-green-800"
  },
  {
    value: "Inventory",
    label: "Inventory",
    color: "bg-rose-100",
    textClr: "text-rose-800"
  },
];

export const statuses = [
  {
    value: "progress",
    label: "Stock Out",
    icon: StopwatchIcon,
    fill: "fill-rose-500",
    color: "bg-rose-100",
    textClr: "text-rose-800",
  },
  {
    value: "done",
    label: "Excess Stock",
    icon: CheckCircledIcon,
    fill: "fill-blue-500",
    color: "bg-blue-100",
    textClr: "text-blue-800",
  },
 
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]
