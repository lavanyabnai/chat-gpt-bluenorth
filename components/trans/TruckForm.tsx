import React, { useState, useEffect } from 'react'
import {
  TruckIcon,
  MapIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline'
import { useParams, Form } from '@remix-run/react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { FaTrainSubway, FaTruck } from 'react-icons/fa6'
import { RiShipFill } from 'react-icons/ri'
import AdminInput from '~/components/snop/admin-form'
import TruckInput from '~/components/snop/truck-form'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Command, CommandGroup, CommandItem } from '~/components/ui/command'
import { Checkbox } from '~/components/ui/checkbox'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { kpiService_m } from '~/data/truckData'
import { cn } from '~/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import LaneMap from '../network/LaneMap'
import CleanSheet from './CleanSheet'
const stats = [
  { name: 'Cost per Unit (USD/Unit)', stat: '2,279' },
  { name: 'Cost per Trip Margin', stat: '136,744' },
  { name: 'Cost per km', stat: '41' },
]

const frameworks = [
  {
    value: 'next.js',
    label: 'Kolkata',
  },
  {
    value: 'sveltekit',
    label: 'Chennai',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]
const countries = [
  {
    name: 'Afghanistan',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg',

    states: [
      {
        name: 'Herat',

        cities: [
          { name: 'Air', latitude: 34.333, longitude: 62.2 },
          { name: 'Rail', latitude: 34.517, longitude: 69.183 },
          { name: 'Ship', latitude: 36.7, longitude: 67.1 },
        ],
      },
      {
        name: 'Kabul',
        cities: [
          { name: 'Ship', latitude: 34.333, longitude: 62.2 },
          { name: 'Rail', latitude: 34.517, longitude: 69.183 },
          { name: 'Air', latitude: 36.7, longitude: 67.1 },
        ],
      },
      {
        name: 'Mazar-e Sharif',

        cities: [
          { name: 'Herat', latitude: 34.333, longitude: 62.2 },
          { name: 'Kabul', latitude: 34.517, longitude: 69.183 },
          { name: 'Mazar-e Sharif', latitude: 36.7, longitude: 67.1 },
        ],
      },
    ],
  },
  {
    name: 'india',
    svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    states: [
      {
        name: 'Punjab',
        cities: [
          { name: 'Abohar', latitude: 30.1424, longitude: 74.1999 },
          { name: 'Amritsar', latitude: 31.583, longitude: 74.883 },
        ],
      },
      {
        name: 'Maharashtra',
        cities: [
          { name: 'Achalpur', latitude: 21.264, longitude: 77.511 },
          { name: 'Ahmednagar', latitude: 19.0946, longitude: 74.745 },
          { name: 'Akola', latitude: 25.267, longitude: 74.883 },
          { name: 'Amravati', latitude: 20.933, longitude: 77.75 },
        ],
      },
      {
        name: 'Gujarat',
        cities: [
          { name: 'Achhod', latitude: 21.961, longitude: 72.8317 },
          { name: 'Ahmedabad', latitude: 23.033, longitude: 72.617 },
          { name: 'Amreli', latitude: 21.5991, longitude: 71.2157 },
          { name: 'Anand', latitude: 22.5569, longitude: 72.9492 },
        ],
      },
      {
        name: 'Tripura',
        cities: [{ name: 'Agartala', latitude: 23.82, longitude: 91.28 }],
      },
      {
        name: 'Uttar Pradesh',
        cities: [
          { name: 'Agra', latitude: 27.183, longitude: 78.017 },
          { name: 'Aligarh', latitude: 27.8922, longitude: 78.072 },
          { name: 'Allahabad', latitude: 25.4512, longitude: 81.8265 },
          { name: 'Amethi', latitude: 26.7565, longitude: 81.1569 },
        ],
      },
      {
        name: 'Mizoram',
        cities: [{ name: 'Aizwal', latitude: 23.7339, longitude: 92.7168 }],
      },
      {
        name: 'Rajasthan',
        cities: [
          { name: 'Ajmer', latitude: 26.4565, longitude: 74.6377 },
          { name: 'Alwar', latitude: 27.5618, longitude: 76.6119 },
        ],
      },
      {
        name: 'Haryana',
        cities: [{ name: 'Ambala', latitude: 30.35, longitude: 76.833 }],
      },
    ],
  },
  {
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    statesdes: [
      {
        name: 'Chaoyang',
        citiesdes: [
          { name: 'Air', latitude: 23.283, longitude: 116.583 },
          { name: 'Rail', latitude: 23.283, longitude: 116.583 },
          { name: 'Ship', latitude: 23.283, longitude: 116.583 },
        ],
      },
      {
        name: 'Chengde',
        citiesdes: [
          { name: 'Air', latitude: 40.758, longitude: 118.156 },
          { name: 'Rail', latitude: 40.758, longitude: 118.156 },
          { name: 'Ship', latitude: 40.758, longitude: 118.156 },
        ],
      },
      {
        name: 'Chengdu',
        citiesdes: [
          { name: 'Air', latitude: 30.667, longitude: 104.067 },
          { name: 'Rail', latitude: 30.667, longitude: 104.067 },
          { name: 'Ship', latitude: 30.667, longitude: 104.067 },
        ],
      },
      {
        name: 'Chenzhou',
        citiesdes: [
          { name: 'Air', latitude: 25.8, longitude: 113.033 },
          { name: 'Rail', latitude: 25.8, longitude: 113.033 },
          { name: 'Ship', latitude: 25.8, longitude: 113.033 },
        ],
      },
      {
        name: 'Chifeng',
        citiesdes: [
          { name: 'Air', latitude: 42.268, longitude: 118.964 },
          { name: 'Rail', latitude: 42.268, longitude: 118.964 },
          { name: 'Ship', latitude: 42.268, longitude: 118.964 },
        ],
      },
      {
        name: 'Chongqing',
        citiesdes: [
          { name: 'Air', latitude: 29.55, longitude: 106.532 },
          { name: 'Rail', latitude: 29.55, longitude: 106.532 },
          { name: 'Ship', latitude: 29.55, longitude: 106.532 },
        ],
      },
      {
        name: 'Chuxiong',
        citiesdes: [
          { name: 'Air', latitude: 25.033, longitude: 101.55 },
          { name: 'Rail', latitude: 25.033, longitude: 101.55 },
          { name: 'Ship', latitude: 25.033, longitude: 101.55 },
        ],
      },
      {
        name: 'Dali',
        citiesdes: [
          { name: 'Air', latitude: 29.428, longitude: 121.313 },
          { name: 'Rail', latitude: 29.428, longitude: 121.313 },
          { name: 'Ship', latitude: 29.428, longitude: 121.313 },
        ],
      },
      {
        name: 'Dalian',
        citiesdes: [
          { name: 'Air', latitude: 38.917, longitude: 121.65 },
          { name: 'Rail', latitude: 38.917, longitude: 121.65 },
          { name: 'Ship', latitude: 38.917, longitude: 121.65 },
        ],
      },
      {
        name: 'Dandong',
        citiesdes: [
          { name: 'Air', latitude: 26.979, longitude: 108.909 },
          { name: 'Rail', latitude: 26.979, longitude: 108.909 },
          { name: 'Ship', latitude: 26.979, longitude: 108.909 },
        ],
      },
      {
        name: 'Danxian',
        citiesdes: [
          { name: 'Air', latitude: 19.517, longitude: 109.55 },
          { name: 'Rail', latitude: 19.517, longitude: 109.55 },
          { name: 'Ship', latitude: 19.517, longitude: 109.55 },
        ],
      },
      {
        name: 'Daqing',
        citiesdes: [
          { name: 'Air', latitude: 46.583, longitude: 125 },
          { name: 'Rail', latitude: 46.583, longitude: 125 },
          { name: 'Ship', latitude: 46.583, longitude: 125 },
        ],
      },
      {
        name: 'Darlag',
        citiesdes: [
          { name: 'Air', latitude: 33.8, longitude: 99.867 },
          { name: 'Rail', latitude: 33.8, longitude: 99.867 },
          { name: 'Ship', latitude: 33.8, longitude: 99.867 },
        ],
      },
      {
        name: 'Dawu',
        citiesdes: [
          { name: 'Air', latitude: 31, longitude: 101.15 },
          { name: 'Rail', latitude: 31, longitude: 101.15 },
          { name: 'Ship', latitude: 31, longitude: 101.15 },
        ],
      },
      {
        name: 'Delingha',
        citiesdes: [
          { name: 'Air', latitude: 37.383, longitude: 97.383 },
          { name: 'Rail', latitude: 37.383, longitude: 97.383 },
          { name: 'Ship', latitude: 37.383, longitude: 97.383 },
        ],
      },
      {
        name: 'Dengqen',
        citiesdes: [
          { name: 'Air', latitude: 31.533, longitude: 95.433 },
          { name: 'Rail', latitude: 31.533, longitude: 95.433 },
          { name: 'Ship', latitude: 31.533, longitude: 95.433 },
        ],
      },
    ],
  },
]

const destination = [
  {
    name: 'Afghanistan',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg',

    statesdes: [
      {
        name: 'Herat',

        citiesdes: [
          { name: 'Air', latitude: 34.333, longitude: 62.2 },
          { name: 'Rail', latitude: 34.517, longitude: 69.183 },
          { name: 'Ship', latitude: 36.7, longitude: 67.1 },
        ],
      },
      {
        name: 'Kabul',
        citiesdes: [
          { name: 'Ship', latitude: 34.333, longitude: 62.2 },
          { name: 'Rail', latitude: 34.517, longitude: 69.183 },
          { name: 'Air', latitude: 36.7, longitude: 67.1 },
        ],
      },
      {
        name: 'Mazar-e Sharif',

        citiesdes: [
          { name: 'Herat', latitude: 34.333, longitude: 62.2 },
          { name: 'Kabul', latitude: 34.517, longitude: 69.183 },
          { name: 'Mazar-e Sharif', latitude: 36.7, longitude: 67.1 },
        ],
      },
    ],
  },
  {
    name: 'India',
    svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    statesdes: [
      {
        name: 'Guwahati',
        citiesdes: [
          { name: 'Air', latitude: 26.1805, longitude: 91.7577 },
          { name: 'Rail', latitude: 26.1805, longitude: 91.7577 },
          { name: 'Ship', latitude: 26.1805, longitude: 91.7577 },
        ],
      },
      {
        name: 'Gwalior',
        citiesdes: [
          { name: 'Air', latitude: 26.2163, longitude: 78.1772 },
          { name: 'Rail', latitude: 26.2163, longitude: 78.1772 },
          { name: 'Ship', latitude: 26.2163, longitude: 78.1772 },
        ],
      },
      {
        name: 'Haldia',
        citiesdes: [
          { name: 'Air', latitude: 22.0331, longitude: 88.0603 },
          { name: 'Rail', latitude: 22.0331, longitude: 88.0603 },
          { name: 'Ship', latitude: 22.0331, longitude: 88.0603 },
        ],
      },
      {
        name: 'Haldwani',
        citiesdes: [
          { name: 'Air', latitude: 29.223, longitude: 79.511 },
          { name: 'Rail', latitude: 29.223, longitude: 79.511 },
          { name: 'Ship', latitude: 29.223, longitude: 79.511 },
        ],
      },
      {
        name: 'Halisahar',
        citiesdes: [
          { name: 'Air', latitude: 22.9489, longitude: 88.4171 },
          { name: 'Rail', latitude: 22.9489, longitude: 88.4171 },
          { name: 'Ship', latitude: 22.9489, longitude: 88.4171 },
        ],
      },
      {
        name: 'Hamirpur',
        citiesdes: [
          { name: 'Air', latitude: 31.6845, longitude: 76.5229 },
          { name: 'Rail', latitude: 31.6845, longitude: 76.5229 },
          { name: 'Ship', latitude: 31.6845, longitude: 76.5229 },
        ],
      },
      {
        name: 'Hansi',
        citiesdes: [
          { name: 'Air', latitude: 29.098, longitude: 75.9646 },
          { name: 'Rail', latitude: 29.098, longitude: 75.9646 },
          { name: 'Ship', latitude: 29.098, longitude: 75.9646 },
        ],
      },
      {
        name: 'Hanumangarh',
        citiesdes: [
          { name: 'Air', latitude: 29.623, longitude: 74.2919 },
          { name: 'Rail', latitude: 29.623, longitude: 74.2919 },
          { name: 'Ship', latitude: 29.623, longitude: 74.2919 },
        ],
      },
      {
        name: 'Harda',
        citiesdes: [
          { name: 'Air', latitude: 22.3409, longitude: 77.0922 },
          { name: 'Rail', latitude: 22.3409, longitude: 77.0922 },
          { name: 'Ship', latitude: 22.3409, longitude: 77.0922 },
        ],
      },
      {
        name: 'Hardoi',
        citiesdes: [
          { name: 'Air', latitude: 27.3954, longitude: 80.1267 },
          { name: 'Rail', latitude: 27.3954, longitude: 80.1267 },
          { name: 'Ship', latitude: 27.3954, longitude: 80.1267 },
        ],
      },
    ],
  },
  {
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    statesdes: [
      {
        name: 'Chaoyang',
        citiesdes: [
          { name: 'Air', latitude: 23.283, longitude: 116.583 },
          { name: 'Rail', latitude: 23.283, longitude: 116.583 },
          { name: 'Ship', latitude: 23.283, longitude: 116.583 },
        ],
      },
      {
        name: 'Chengde',
        citiesdes: [
          { name: 'Air', latitude: 40.758, longitude: 118.156 },
          { name: 'Rail', latitude: 40.758, longitude: 118.156 },
          { name: 'Ship', latitude: 40.758, longitude: 118.156 },
        ],
      },
      {
        name: 'Chengdu',
        citiesdes: [
          { name: 'Air', latitude: 30.667, longitude: 104.067 },
          { name: 'Rail', latitude: 30.667, longitude: 104.067 },
          { name: 'Ship', latitude: 30.667, longitude: 104.067 },
        ],
      },
      {
        name: 'Chenzhou',
        citiesdes: [
          { name: 'Air', latitude: 25.8, longitude: 113.033 },
          { name: 'Rail', latitude: 25.8, longitude: 113.033 },
          { name: 'Ship', latitude: 25.8, longitude: 113.033 },
        ],
      },
      {
        name: 'Chifeng',
        citiesdes: [
          { name: 'Air', latitude: 42.268, longitude: 118.964 },
          { name: 'Rail', latitude: 42.268, longitude: 118.964 },
          { name: 'Ship', latitude: 42.268, longitude: 118.964 },
        ],
      },
      {
        name: 'Chongqing',
        citiesdes: [
          { name: 'Air', latitude: 29.55, longitude: 106.532 },
          { name: 'Rail', latitude: 29.55, longitude: 106.532 },
          { name: 'Ship', latitude: 29.55, longitude: 106.532 },
        ],
      },
      {
        name: 'Chuxiong',
        citiesdes: [
          { name: 'Air', latitude: 25.033, longitude: 101.55 },
          { name: 'Rail', latitude: 25.033, longitude: 101.55 },
          { name: 'Ship', latitude: 25.033, longitude: 101.55 },
        ],
      },
      {
        name: 'Dali',
        citiesdes: [
          { name: 'Air', latitude: 29.428, longitude: 121.313 },
          { name: 'Rail', latitude: 29.428, longitude: 121.313 },
          { name: 'Ship', latitude: 29.428, longitude: 121.313 },
        ],
      },
      {
        name: 'Dalian',
        citiesdes: [
          { name: 'Air', latitude: 38.917, longitude: 121.65 },
          { name: 'Rail', latitude: 38.917, longitude: 121.65 },
          { name: 'Ship', latitude: 38.917, longitude: 121.65 },
        ],
      },
      {
        name: 'Dandong',
        citiesdes: [
          { name: 'Air', latitude: 26.979, longitude: 108.909 },
          { name: 'Rail', latitude: 26.979, longitude: 108.909 },
          { name: 'Ship', latitude: 26.979, longitude: 108.909 },
        ],
      },
      {
        name: 'Danxian',
        citiesdes: [
          { name: 'Air', latitude: 19.517, longitude: 109.55 },
          { name: 'Rail', latitude: 19.517, longitude: 109.55 },
          { name: 'Ship', latitude: 19.517, longitude: 109.55 },
        ],
      },
      {
        name: 'Daqing',
        citiesdes: [
          { name: 'Air', latitude: 46.583, longitude: 125 },
          { name: 'Rail', latitude: 46.583, longitude: 125 },
          { name: 'Ship', latitude: 46.583, longitude: 125 },
        ],
      },
      {
        name: 'Darlag',
        citiesdes: [
          { name: 'Air', latitude: 33.8, longitude: 99.867 },
          { name: 'Rail', latitude: 33.8, longitude: 99.867 },
          { name: 'Ship', latitude: 33.8, longitude: 99.867 },
        ],
      },
      {
        name: 'Dawu',
        citiesdes: [
          { name: 'Air', latitude: 31, longitude: 101.15 },
          { name: 'Rail', latitude: 31, longitude: 101.15 },
          { name: 'Ship', latitude: 31, longitude: 101.15 },
        ],
      },
      {
        name: 'Delingha',
        citiesdes: [
          { name: 'Air', latitude: 37.383, longitude: 97.383 },
          { name: 'Rail', latitude: 37.383, longitude: 97.383 },
          { name: 'Ship', latitude: 37.383, longitude: 97.383 },
        ],
      },
      {
        name: 'Dengqen',
        citiesdes: [
          { name: 'Air', latitude: 31.533, longitude: 95.433 },
          { name: 'Rail', latitude: 31.533, longitude: 95.433 },
          { name: 'Ship', latitude: 31.533, longitude: 95.433 },
        ],
      },
    ],
  },
  {
    name: 'Japan',
    svg: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    statesdes: [
      {
        name: 'Choshi',
        citiesdes: [
          { name: 'Air', latitude: 35.733, longitude: 140.833 },
          { name: 'Rail', latitude: 35.733, longitude: 140.833 },
          { name: 'Ship', latitude: 35.733, longitude: 140.833 },
        ],
      },
      {
        name: 'Ebetsu',
        citiesdes: [
          { name: 'Air', latitude: 43.117, longitude: 141.567 },
          { name: 'Rail', latitude: 43.117, longitude: 141.567 },
          { name: 'Ship', latitude: 43.117, longitude: 141.567 },
        ],
      },
      {
        name: 'Fuji',
        citiesdes: [
          { name: 'Air', latitude: 43.817, longitude: 144.783 },
          { name: 'Rail', latitude: 43.817, longitude: 144.783 },
          { name: 'Ship', latitude: 43.817, longitude: 144.783 },
        ],
      },
      {
        name: 'Fujinomiya',
        citiesdes: [
          { name: 'Air', latitude: 35.217, longitude: 138.617 },
          { name: 'Rail', latitude: 35.217, longitude: 138.617 },
          { name: 'Ship', latitude: 35.217, longitude: 138.617 },
        ],
      },
      {
        name: 'Fujisawa',
        citiesdes: [
          { name: 'Air', latitude: 35.35, longitude: 139.483 },
          { name: 'Rail', latitude: 35.35, longitude: 139.483 },
          { name: 'Ship', latitude: 35.35, longitude: 139.483 },
        ],
      },
    ],
  },
]
const origin = [
  {
    id: 1,
    name: 'United States',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  {
    id: 2,
    name: 'Canada',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
  },
  {
    id: 3,
    name: 'United Kingdom',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
  {
    id: 4,
    name: 'Australia',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
  },
  {
    id: 5,
    name: 'Germany',
    svg: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
  },
  // {
  //   id: 6,
  //   name: 'France',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
  // },
  // {
  //   id: 7,
  //   name: 'Italy',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
  // },
  // {
  //   id: 8,
  //   name: 'Spain',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
  // },
  // {
  //   id: 9,
  //   name: 'Japan',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
  // },
  // {
  //   id: 10,
  //   name: 'Brazil',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
  // },
  // {
  //   id: 11,
  //   name: 'South Korea',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
  // },
  // {
  //   id: 12,
  //   name: 'Russia',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
  // },
  // {
  //   id: 13,
  //   name: 'India',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  // },
  {
    id: 14,
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
  },
  // {
  //   id: 15,
  //   name: 'Mexico',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
  // },
  // {
  //   id: 16,
  //   name: 'Argentina',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
  // },
  // {
  //   id: 17,
  //   name: 'Netherlands',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
  // },
  // {
  //   id: 18,
  //   name: 'Switzerland',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
  // },
  // {
  //   id: 19,
  //   name: 'Sweden',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
  // },
  // {
  //   id: 20,
  //   name: 'Norway',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
  // },
]

const des = [
  {
    id: 1,
    name: 'United States',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  {
    id: 2,
    name: 'Canada',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
  },
  {
    id: 3,
    name: 'United Kingdom',
    svg: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
  {
    id: 4,
    name: 'Australia',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
  },
  {
    id: 5,
    name: 'Germany',
    svg: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
  },
  // {
  //   id: 6,
  //   name: 'France',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
  // },
  // {
  //   id: 7,
  //   name: 'Italy',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
  // },
  // {
  //   id: 8,
  //   name: 'Spain',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
  // },
  // {
  //   id: 9,
  //   name: 'Japan',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
  // },
  // {
  //   id: 10,
  //   name: 'Brazil',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
  // },
  // {
  //   id: 11,
  //   name: 'South Korea',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
  // },
  // {
  //   id: 12,
  //   name: 'Russia',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
  // },
  {
    id: 13,
    name: 'India',
    svg: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  },
  {
    id: 14,
    name: 'China',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
  },
  // {
  //   id: 15,
  //   name: 'Mexico',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
  // },
  // {
  //   id: 16,
  //   name: 'Argentina',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
  // },
  // {
  //   id: 17,
  //   name: 'Netherlands',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
  // },
  // {
  //   id: 18,
  //   name: 'Switzerland',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
  // },
  // {
  //   id: 19,
  //   name: 'Sweden',
  //   svg: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
  // },
  // {
  //   id: 20,
  //   name: 'Norway',
  //   svg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
  // },
]
function DemoContainer({
  // eslint-disable-next-line react/prop-types
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  )
}

export default function TruckForm({ truckData }) {
  const params = useParams()
  const [tyopen, settyOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [selectedAccount, setSelectedAccount] = useState(origin[0].name)
  const [selectedAccountdes, setSelectedAccountdes] = useState(des[0].name)

  const [selectedCountry, setSelectedCountry] = useState(countries[0].name)
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [isCollapsed, setIsCollapsed] = useState(false)
  useEffect(() => {
    // Set initial default values
    const defaultCountryName = 'India'
    const defaultCountry = countries.find(
      (country) => country.name === defaultCountryName
    )

    if (defaultCountry) {
      setSelectedCountry(defaultCountry.name)
      setStates(defaultCountry.states)
      if (defaultCountry.states.length > 0) {
        setSelectedState(defaultCountry.states[0].name)
        setCities(defaultCountry.states[0].cities)
        if (defaultCountry.states[0].cities.length > 0) {
          setSelectedCity(defaultCountry.states[0].cities[0].name)
        }
      }
    }
  }, [])

  const handleCountryChange = (value) => {
    setSelectedCountry(value)
    const country = countries.find((country) => country.name === value)
    if (country) {
      setStates(country.states)
      if (country.states.length > 0) {
        setSelectedState(country.states[0].name)
        setCities(country.states[0].cities)
        if (country.states[0].cities.length > 0) {
          setSelectedCity(country.states[0].cities[0].name)
        }
      } else {
        setSelectedState('')
        setCities([])
        setSelectedCity('')
      }
    } else {
      setStates([])
      setSelectedState('')
      setCities([])
      setSelectedCity('')
    }
  }

  const handleStateChange = (value) => {
    setSelectedState(value)
    const state = states.find((state) => state.name === value)
    if (state) {
      setCities(state.cities)
      if (state.cities.length > 0) {
        setSelectedCity(state.cities[0].name)
      } else {
        setSelectedCity('')
      }
    } else {
      setCities([])
      setSelectedCity('')
    }
  }

  const handleCityChange = (value) => {
    setSelectedCity(value)
  }

  const [selectedCountrydes, setselectedCountrydes] = useState('')
  const [selectedStatedes, setselectedStatedes] = useState('')
  const [selectedCitydes, setselectedCitydes] = useState('')
  const [statesdes, setstatesdes] = useState([])
  const [citiesdes, setcitiesdes] = useState([])
  const [isCollapseddes, setisCollapseddes] = useState(false)
  useEffect(() => {
    // Set initial default values
    const defaultCountryName = 'India'
    const defaultCountry = destination.find(
      (country) => country.name === defaultCountryName
    )

    if (defaultCountry) {
      setselectedCountrydes(defaultCountry.name)
      setstatesdes(defaultCountry.statesdes)
      if (defaultCountry.statesdes.length > 0) {
        setselectedStatedes(defaultCountry.statesdes[0].name)
        setcitiesdes(defaultCountry.statesdes[0].citiesdes)
        if (defaultCountry.statesdes[0].citiesdes.length > 0) {
          setselectedCitydes(defaultCountry.statesdes[0].citiesdes[0].name)
        }
      }
    }
  }, [])

  const handleCountryChangedes = (value) => {
    setselectedCountrydes(value)
    const country = destination.find((country) => country.name === value)
    if (country) {
      setstatesdes(country.statesdes)
      if (country.statesdes.length > 0) {
        setselectedStatedes(country.statesdes[0].name)
        setcitiesdes(country.statesdes[0].citiesdes)
        if (country.statesdes[0].citiesdes.length > 0) {
          setselectedCitydes(country.statesdes[0].citiesdes[0].name)
        }
      } else {
        setselectedStatedes('')
        setcitiesdes([])
        setselectedCitydes('')
      }
    } else {
      setstatesdes([])
      setselectedStatedes('')
      setcitiesdes([])
      setselectedCitydes('')
    }
  }

  const handleStateChangedes = (value) => {
    setselectedStatedes(value)
    const state = statesdes.find((state) => state.name === value)
    if (state) {
      setcitiesdes(state.citiesdes)
      if (state.citiesdes.length > 0) {
        setselectedCitydes(state.citiesdes[0].name)
      } else {
        setselectedCitydes('')
      }
    } else {
      setcitiesdes([])
      setselectedCitydes('')
    }
  }

  const handleCityChangedes = (value) => {
    setselectedCitydes(value)
  }
  return (
    <div className="m-2">
      <Form method="post">
        <Tabs defaultValue="Overall" className=" m-4 space-y-4">
          <TabsList className="">
            <TabsTrigger value="Overall">Overall</TabsTrigger>
            <TabsTrigger value="Parameters">Parameters</TabsTrigger>
            <TabsTrigger value="Ocean">Ocean</TabsTrigger>
            <TabsTrigger value="Last">Last Mile</TabsTrigger>
            <TabsTrigger value="Clean">CleanSheet Parameters</TabsTrigger>
          </TabsList>
          <TabsContent value="Overall" className="w-full">
            <div className="border rounded-lg flex">
              <div className="m-4">
                <CardTitle className="space-y-1 flex items-center text-blue-900">
                  <span className="text-xl ">Origin</span>
                </CardTitle>
                <div className="border-b" />
                <div className=" mt-2 flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <Select
                      value={selectedCountry}
                      defaultValue={selectedCountry}
                      onValueChange={handleCountryChange}
                    >
                      <SelectTrigger
                        className={cn(
                          'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                          isCollapsed &&
                            'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                        )}
                        aria-label="Select account"
                      >
                        <SelectValue placeholder="Select a country">
                          <img
                            src={
                              countries.find(
                                (country) => country.name === selectedCountry
                              )?.svg
                            }
                            width="30"
                            height="16"
                            alt="Flag"
                          />
                          <span className={cn('ml-2', isCollapsed && 'hidden')}>
                            {selectedCountry || 'Select a country'}
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.name} value={country.name}>
                            <div className="flex items-center gap-3">
                              <img
                                src={country.svg}
                                width="30"
                                height="16"
                                alt="Flag"
                              />
                              {country.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Select
                      value={selectedState}
                      onValueChange={handleStateChange}
                    >
                      <SelectTrigger className="w-[120px] mt-2">
                        <SelectValue>{selectedState || 'State'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state.name} value={state.name}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select
                      value={selectedCity}
                      onValueChange={handleCityChange}
                    >
                      <SelectTrigger className="w-[120px] mt-2">
                        <SelectValue>{selectedCity || 'City'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city, index) => (
                          <SelectItem key={index} value={city.name}>
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <span className="border-l my-4" />
              <div className="m-4">
                <CardTitle className="space-y-1 flex items-center text-blue-900">
                  {/* <TruckIcon className="h-8 w-8 mr-2" /> */}
                  <span className="text-xl ">Destination</span>
                </CardTitle>
                <div className="border-b" />

                <div className="mt-2 flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <Select
                      value={selectedCountrydes}
                      defaultValue={selectedCountrydes}
                      onValueChange={handleCountryChangedes}
                    >
                      <SelectTrigger
                        className={cn(
                          'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                          isCollapsed &&
                            'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                        )}
                        aria-label="Select account"
                      >
                        <SelectValue placeholder="Select a country">
                          <img
                            src={
                              destination.find(
                                (country) => country.name === selectedCountrydes
                              )?.svg
                            }
                            width="30"
                            height="16"
                            alt="Flag"
                          />
                          <span
                            className={cn('ml-2', isCollapseddes && 'hidden')}
                          >
                            {selectedCountrydes || 'Select a country'}
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {destination &&
                          destination.map((country) => (
                            <SelectItem key={country.name} value={country.name}>
                              <div className="flex items-center gap-3">
                                <img
                                  src={country.svg}
                                  width="30"
                                  height="16"
                                  alt="Flag"
                                />
                                {country.name}
                              </div>
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Select
                      value={selectedStatedes}
                      onValueChange={handleStateChangedes}
                    >
                      <SelectTrigger className="w-[120px] mt-2">
                        <SelectValue>{selectedStatedes || 'State'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {statesdes &&
                          statesdes.map((state) => (
                            <SelectItem key={state.name} value={state.name}>
                              {state.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select
                      value={selectedCitydes}
                      onValueChange={handleCityChangedes}
                    >
                      <SelectTrigger className="w-[120px] mt-2">
                        <SelectValue>{selectedCitydes || 'City'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {citiesdes &&
                          citiesdes.map((city, index) => (
                            <SelectItem key={index} value={city.name}>
                              {city.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <span className="border-l my-4" />
              <div className="m-4">
                <CardTitle className="space-y-1 flex items-center text-blue-900">
                  {/* <TruckIcon className="h-8 w-8 mr-2" /> */}
                  <span className="text-xl ">Types of Goods</span>
                </CardTitle>
                <div className="border-b" />

                <div className="mt-2 flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Select>
                      <SelectTrigger className="w-[260px]">
                        <SelectValue placeholder="Container / Pallets Shipment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Container">
                          Container / Pallets Shipment
                        </SelectItem>
                        <SelectItem value="Bulk">Bulk Shipment</SelectItem>
                        <SelectItem value="Liquid">Liquid Shipment</SelectItem>
                        <SelectItem value="Temperature">
                          Temperature Controlled Shipment
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <span className="border-l my-4" />
              <div className="m-4">
                <CardTitle className="space-y-1 flex items-center text-blue-900">
                  {/* <TruckIcon className="h-8 w-8 mr-2" /> */}
                  <span className="text-xl ">Parameters</span>
                </CardTitle>
                <div className="border-b" />

                <div className="mt-2 flex items-center space-x-6">
                  <div className=" items-center flex space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        FTL
                      </label>
                    </div>
                  </div>
                  <div className="items-top flex items-center space-x-2">
                    <Checkbox id="terms2" />

                    <label
                      htmlFor="terms2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      LTL
                    </label>
                    <Input
                      className="mx-2 text-blue-900 w-[150px] "
                      name="customer"
                      defaultValue="0.00"
                    />
                    <label
                      htmlFor="terms2"
                      className="text-sm text-blue-900 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      % of Truck / Container load
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 py-4">
              <div>
                <LaneMap />
                {/* <iframe
                  width="1000"
                  height="650"
                  allow="fullscreen"
                  src="https://cloud.anylogic.com/assets/embed?modelId=6c822278-59ca-4829-aa1b-1810b7f1a698"
                  title="AnyLogic Model"
                ></iframe> */}
              </div>

              <div>
                <DemoContainer>
                  <Card className="shadow-lg text-blue-900">
                    <CardHeader className="space-y-1">
                      <CardTitle className="flex items-center">
                        <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                        <span className="text-2xl">Cleansheet Summary</span>
                      </CardTitle>

                      <div className="border-b" />
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {stats.map((item) => (
                          <div
                            key={item.name}
                            className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                          >
                            <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                              {item.stat}
                            </dd>
                            <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                              {item.name}
                            </dt>
                          </div>
                        ))}
                      </dl>

                      <ul className="grid grid-cols-1 gap-2 mt-2">
                        {kpiService_m.map((kpi) => (
                          <li
                            key={kpi.Name}
                            className="col-span-1 flex flex-col divide-y divide-white"
                          >
                            <div className="relative flex flex-1 flex-col p-2">
                              <div className="flex items-baseline gap-2">
                                <h3 className="text-base font-medium text-gray-900">
                                  {kpi.Name}
                                </h3>
                              </div>
                              <div className="mt-2">{kpi.container}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Parameters" className="w-full">
            <div className="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2">
              <div className="border rounded-lg">
                <div className=" m-4 flex space-x-4">
                  <CardTitle className="space-y-1 flex items-center text-blue-900">
                    <span className="text-xl ">Origin</span>
                  </CardTitle>
                  <div className=" mt-2 flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                      <Select
                        defaultValue={selectedAccount}
                        onValueChange={setSelectedAccount}
                      >
                        <SelectTrigger
                          className={cn(
                            'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                            isCollapsed &&
                              'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                          )}
                          aria-label="Select account"
                        >
                          <SelectValue placeholder="Select an account">
                            <img
                              src={
                                origin.find(
                                  (account) => account.name === selectedAccount
                                )?.svg
                              }
                              width="30"
                              height="16"
                              alt="Flag"
                            />
                            <span
                              className={cn('ml-2', isCollapsed && 'hidden')}
                            >
                              {
                                origin.find(
                                  (account) => account.name === selectedAccount
                                )?.name
                              }
                            </span>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {origin.map((account) => (
                            <SelectItem key={account.name} value={account.name}>
                              <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                                <img
                                  src={account.svg}
                                  width="30"
                                  height="16"
                                  alt="Flag"
                                />
                                {/* {account.svg} */}
                                {account.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Rail">
                            <div className="items-center flex space-x-2">
                              <FaTrainSubway className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Rail
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ship">
                            <div className="items-center flex space-x-2">
                              <RiShipFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Ship
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Port" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Rail">
                            <div className="items-center flex space-x-2">
                              <FaTrainSubway className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Rail
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ship">
                            <div className="items-center flex space-x-2">
                              <RiShipFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Ship
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="mx-4 border-b" />
                <div className="items-start justify-center  grid grid-cols-1 lg:grid-cols-2 ">
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Region
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="Asia_Pacific"
                          name="Asia_Pacific"
                          defaultValue={'Asia Pacific'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Currency
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Select>
                          <SelectTrigger className="w-[185px]">
                            <SelectValue placeholder="Container / Pallets Shipment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Container">
                              Container / Pallets Shipment
                            </SelectItem>
                            <SelectItem value="Bulk">Bulk Shipment</SelectItem>
                            <SelectItem value="Liquid">
                              Liquid Shipment
                            </SelectItem>
                            <SelectItem value="Temperature">
                              Temperature Controlled Shipment
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance measure
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="km"
                          defaultValue={'km'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Road toll
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'0.5'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Toll proportion
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'20%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance to hub (pickup)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance to hub (delivery)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Loading/unloading base duration
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Loading/unloading ramp duration
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Backhaul (% of main haul distance)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                    </CardContent>
                  </DemoContainer>
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Min. backhaul distance
                        </Label>
                        <Input
                          id="Asia_Pacific"
                          name="Asia_Pacific"
                          defaultValue={'30%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>

                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Max. backhaul distance
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="km"
                          defaultValue={'30%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Truck utilization on line haul in LTL
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Max backhaul discount
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Labor cost
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'150000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Fuel price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'9.14'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Semi-trailer purchasing price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'2,50,000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Refrigerator truck purchasing price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'2,50,000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Maximum speed
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'65'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Average speed
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'55'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                    </CardContent>
                  </DemoContainer>
                </div>
              </div>

              <div className="border rounded-lg">
                <div className=" m-4 flex space-x-4">
                  <CardTitle className="space-y-1 flex items-center text-blue-900">
                    <span className="text-xl ">Destination</span>
                  </CardTitle>
                  <div className=" mt-2 flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                      <Select
                        defaultValue={selectedAccountdes}
                        onValueChange={setSelectedAccountdes}
                      >
                        <SelectTrigger
                          className={cn(
                            'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                            isCollapsed &&
                              'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                          )}
                          aria-label="Select account"
                        >
                          <SelectValue placeholder="Select an account">
                            <img
                              src={
                                des.find(
                                  (account) =>
                                    account.name === selectedAccountdes
                                )?.svg
                              }
                              width="30"
                              height="16"
                              alt="Flag"
                            />
                            <span
                              className={cn('ml-2', isCollapsed && 'hidden')}
                            >
                              {
                                des.find(
                                  (account) =>
                                    account.name === selectedAccountdes
                                )?.name
                              }
                            </span>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {des.map((account) => (
                            <SelectItem key={account.name} value={account.name}>
                              <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                                <img
                                  src={account.svg}
                                  width="30"
                                  height="16"
                                  alt="Flag"
                                />
                                {/* {account.svg} */}
                                {account.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="City" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Rail">
                            <div className="items-center flex space-x-2">
                              <FaTrainSubway className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Rail
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ship">
                            <div className="items-center flex space-x-2">
                              <RiShipFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Ship
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Port" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Air">
                            {' '}
                            <div className="items-center flex space-x-2">
                              <PiAirplaneTiltFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Air
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Rail">
                            <div className="items-center flex space-x-2">
                              <FaTrainSubway className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Rail
                              </label>
                            </div>
                          </SelectItem>
                          <SelectItem value="Ship">
                            <div className="items-center flex space-x-2">
                              <RiShipFill className="h-5 w-5" />

                              <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Ship
                              </label>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="mx-4 border-b" />
                <div className="items-start justify-center  grid grid-cols-1 lg:grid-cols-2 ">
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Region
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="Asia_Pacific"
                          name="Asia_Pacific"
                          defaultValue={'Asia Pacific'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Currency
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Select>
                          <SelectTrigger className="w-[185px]">
                            <SelectValue placeholder="Container / Pallets Shipment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Container">
                              Container / Pallets Shipment
                            </SelectItem>
                            <SelectItem value="Bulk">Bulk Shipment</SelectItem>
                            <SelectItem value="Liquid">
                              Liquid Shipment
                            </SelectItem>
                            <SelectItem value="Temperature">
                              Temperature Controlled Shipment
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance measure
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="km"
                          defaultValue={'km'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Road toll
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'0.5'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Toll proportion
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'20%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance to hub (pickup)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Distance to hub (delivery)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Loading/unloading base duration
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Loading/unloading ramp duration
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Backhaul (% of main haul distance)
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                    </CardContent>
                  </DemoContainer>
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="Asia_Pacific">
                          Min. backhaul distance
                        </Label>
                        <Input
                          id="Asia_Pacific"
                          name="Asia_Pacific"
                          defaultValue={'30%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>

                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Max. backhaul distance
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="km"
                          defaultValue={'30%'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Truck utilization on line haul in LTL
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Max backhaul discount
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={''}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Labor cost
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'150000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Fuel price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'9.14'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Semi-trailer purchasing price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'2,50,000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Refrigerator truck purchasing price
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'2,50,000'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Maximum speed
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'65'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-1">
                        <Label className="text-lg" htmlFor="km">
                          Average speed
                          <p className="text-gray-400 text-sm"></p>
                        </Label>
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'55'}
                          className="text-lg text-gray-500 text-center"
                        />
                      </div>
                    </CardContent>
                  </DemoContainer>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Ocean" className="w-full">
            <div className="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <div className="items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2">
                  <DemoContainer>
                    <Card className="  text-blue-900">
                      <CardHeader className="space-y-1 ">
                        <CardTitle className="flex items-center">
                          <TruckIcon className="h-8 w-8 mr-2" />
                          <span className="text-2xl">Truck Parameters</span>
                        </CardTitle>

                        <div className="border-b" />
                      </CardHeader>

                      <CardContent className="grid gap-10 mb-2">
                        <div className="grid grid-cols-2 items-center gap-1">
                          <div className="text-xl text-blue-900 font-semibold ">
                            Truck Type
                          </div>
                          <div>
                            <Popover open={tyopen} onOpenChange={settyOpen}>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={tyopen}
                                  className=" w-[155px] justify-between text-xl "
                                >
                                  {value
                                    ? frameworks.find(
                                        (framework) => framework.value === value
                                      )?.label
                                    : 'Kolkata'}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                <Command>
                                  <CommandGroup>
                                    {frameworks.map((framework) => (
                                      <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                          setValue(
                                            currentValue === value
                                              ? ''
                                              : currentValue
                                          )
                                          settyOpen(false)
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            'mr-2 h-4 w-4',
                                            value === framework.value
                                              ? 'opacity-100'
                                              : 'opacity-0'
                                          )}
                                        />
                                        {framework.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>

                        <TruckInput truck={truckData} />
                      </CardContent>
                    </Card>
                  </DemoContainer>
                  <DemoContainer>
                    <Card className=" text-blue-900">
                      <CardHeader className="space-y-1">
                        <CardTitle className="flex items-center">
                          <MapIcon className="h-8 w-8 mr-2" />
                          <span className="text-2xl">
                            {' '}
                            Route Admin Expenses
                          </span>
                        </CardTitle>

                        <div className="border-b" />
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <AdminInput admin={truckData} />
                      </CardContent>
                    </Card>
                  </DemoContainer>
                </div>
                <div className="flex justify-end  pt-6 rounded-lg">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-lg">
                    {params.bkt ? 'Submitting' : 'Submit'}
                  </Button>
                </div>
              </div>

              <div>
                <DemoContainer>
                  <Card className="shadow-lg text-blue-900">
                    <CardHeader className="space-y-1">
                      <CardTitle className="flex items-center">
                        <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                        <span className="text-2xl">Cleansheet Summary</span>
                      </CardTitle>

                      <div className="border-b" />
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {stats.map((item) => (
                          <div
                            key={item.name}
                            className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                          >
                            <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                              {item.stat}
                            </dd>
                            <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                              {item.name}
                            </dt>
                          </div>
                        ))}
                      </dl>

                      <ul className="grid grid-cols-1 gap-2 mt-2">
                        {kpiService_m.map((kpi) => (
                          <li
                            key={kpi.Name}
                            className="col-span-1 flex flex-col divide-y divide-white"
                          >
                            <div className="relative flex flex-1 flex-col p-2">
                              <div className="flex items-baseline gap-2">
                                <h3 className="text-base font-medium text-gray-900">
                                  {kpi.Name}
                                </h3>
                              </div>
                              <div className="mt-2">{kpi.container}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Last" className="w-full">
            <div className="items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <div className="items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2">
                  <DemoContainer>
                    <Card className="  text-blue-900">
                      <CardHeader className="space-y-1 ">
                        <CardTitle className="flex items-center">
                          <TruckIcon className="h-8 w-8 mr-2" />
                          <span className="text-2xl">Truck Parameters</span>
                        </CardTitle>

                        <div className="border-b" />
                      </CardHeader>

                      <CardContent className="grid gap-10 mb-2">
                        <div className="grid grid-cols-2 items-center gap-1">
                          <div className="text-xl text-blue-900 font-semibold ">
                            Truck Type
                          </div>
                          <div>
                            <Popover open={tyopen} onOpenChange={settyOpen}>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={tyopen}
                                  className=" w-[155px] justify-between text-xl "
                                >
                                  {value
                                    ? frameworks.find(
                                        (framework) => framework.value === value
                                      )?.label
                                    : 'Multi-Axle'}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-[200px] p-0">
                                <Command>
                                  <CommandGroup>
                                    {frameworks.map((framework) => (
                                      <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                          setValue(
                                            currentValue === value
                                              ? ''
                                              : currentValue
                                          )
                                          settyOpen(false)
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            'mr-2 h-4 w-4',
                                            value === framework.value
                                              ? 'opacity-100'
                                              : 'opacity-0'
                                          )}
                                        />
                                        {framework.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>

                        <TruckInput truck={truckData} />
                      </CardContent>
                    </Card>
                  </DemoContainer>
                  <DemoContainer>
                    <Card className=" text-blue-900">
                      <CardHeader className="space-y-1">
                        <CardTitle className="flex items-center">
                          <MapIcon className="h-8 w-8 mr-2" />
                          <span className="text-2xl">
                            {' '}
                            Route Admin Expenses
                          </span>
                        </CardTitle>

                        <div className="border-b" />
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <AdminInput admin={truckData} />
                      </CardContent>
                    </Card>
                  </DemoContainer>
                </div>
                <div className="flex justify-end  pt-6 rounded-lg">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-lg">
                    {params.bkt ? 'Submitting' : 'Submit'}
                  </Button>
                </div>
              </div>

              <div>
                <DemoContainer>
                  <Card className="shadow-lg text-blue-900">
                    <CardHeader className="space-y-1">
                      <CardTitle className="flex items-center">
                        <PresentationChartLineIcon className="h-8 w-8 mr-2" />
                        <span className="text-2xl">Cleansheet Summary</span>
                      </CardTitle>

                      <div className="border-b" />
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {stats.map((item) => (
                          <div
                            key={item.name}
                            className="rounded-2xl bg-gray-100 border px-4 py-5 shadow"
                          >
                            <dd className="flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900">
                              {item.stat}
                            </dd>
                            <dt className="mt-2 flex justify-center truncate text-sm font-medium text-gray-500">
                              {item.name}
                            </dt>
                          </div>
                        ))}
                      </dl>

                      <ul className="grid grid-cols-1 gap-2 mt-2">
                        {kpiService_m.map((kpi) => (
                          <li
                            key={kpi.Name}
                            className="col-span-1 flex flex-col divide-y divide-white"
                          >
                            <div className="relative flex flex-1 flex-col p-2">
                              <div className="flex items-baseline gap-2">
                                <h3 className="text-base font-medium text-gray-900">
                                  {kpi.Name}
                                </h3>
                              </div>
                              <div className="mt-2">{kpi.container}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </DemoContainer>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Clean" className="w-full">
            <div className="items-start justify-center gap-6 rounded-lg md:grid grid-cols-1">
              <div className="border rounded-lg bg-white">
                <div className="m-4 flex space-x-4 justify-between">
                  <div className="flex space-x-4">
                    <CardTitle className="space-y-1 flex items-center text-blue-900 text-xl ">
                      Transport CleanSheet
                    </CardTitle>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CardTitle className=" text-blue-900 text-xl">
                      Country
                    </CardTitle>
                    <div className="mt-2 flex items-center space-x-6">
                      <div className="flex items-center space-x-4">
                        <Select
                          defaultValue={selectedAccount}
                          onValueChange={setSelectedAccount}
                        >
                          <SelectTrigger
                            className={cn(
                              'flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 w-[180px]',
                              isCollapsed &&
                                'flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden'
                            )}
                            aria-label="Select account"
                          >
                            <SelectValue placeholder="Select an account">
                              <img
                                src={
                                  origin.find(
                                    (account) =>
                                      account.name === selectedAccount
                                  )?.svg
                                }
                                width="30"
                                height="16"
                                alt="Flag"
                              />
                              <span
                                className={cn('ml-2', isCollapsed && 'hidden')}
                              >
                                {
                                  origin.find(
                                    (account) =>
                                      account.name === selectedAccount
                                  )?.name
                                }
                              </span>
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {origin.map((account) => (
                              <SelectItem
                                key={account.name}
                                value={account.name}
                              >
                                <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                                  <img
                                    src={account.svg}
                                    width="30"
                                    height="16"
                                    alt="Flag"
                                  />
                                  {/* {account.svg} */}
                                  {account.name}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className=" m-4 flex space-x-4">
                      <CardTitle className="space-y-1 flex items-center text-blue-900">
                        <span className="text-xl ">Currency</span>
                      </CardTitle>
                      <div className="mt-2 flex items-center space-x-6">
                        <Input
                          id="km"
                          name="0.5"
                          defaultValue={'0.5'}
                          className="text-lg text-gray-500 text-center w-[120px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-4 border-b" />
                <div className="items-start justify-center  grid grid-cols-1 ">
                  <DemoContainer className="text-blue-900">
                    <CardContent className="mt-4 grid gap-6">
                      <CleanSheet />
                    </CardContent>
                  </DemoContainer>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Form>
    </div>
  )
}