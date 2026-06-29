import {useState} from 'react';
import { Search , Menu , X } from 'lucide-react';
import SideBar from './sidebar';
import SearchBar from './searchBar';

//I am using the same data set as the tools one as this is just a temporary provision
const components =[
   {
    id: 1,
    name: "Soldering Iron Kit",
    description: "Temperature controlled soldering station with accessories",
    image: null ,
    available: 8,
    status: "AVAILABLE",
  },
  {
    id: 2,
    name: "Digital Multimeter",
    description: "Auto-ranging multimeter for voltage, current, resistance measurement",
    image: null,
    available: 15,
    status: "AVAILABLE",
  },
  {
    id: 3,
    name: "Oscilloscope",
    description: "Digital storage oscilloscope, 100MHz bandwidth",
    image: null,
    available: 4,
    status: "LIMITED",
  },
  {
    id: 4,
    name: "3D Printer",
    description: "FDM 3D printer with 220x220x250mm build volume",
    image: null,
    available: 3,
    status: "LIMITED",
  },
  {
    id: 5,
    name: "Wire Stripper",
    description: "Automatic wire stripping tool for various gauges",
    image: null,
    available: 12,
    status: "AVAILABLE",
  },
  {
    id: 6,
    name: "Power Supply",
    description: "Adjustable DC bench power supply, 0-30V, 0-10A",
    image: null,
    available: 10,
    status: "AVAILABLE",
  },
  {
    id: 7,
    name: "esp32",
    description: "Low-cost, low-power system-on-chip (SoC) with integrated Wi-Fi and Bluetooth",
    image: null,
    available: 15,
    status: "AVAILABLE",
},
{
    id: 8,
    name: "L298N motor driver",
    description: "Dual H-Bridge motor driver for controlling DC motors and stepper motors",
    image: null,
    available: 8,
    status: "AVAILABLE",
},

]

function componentPage() {
  return (
    <>

    </>

  )
}
export default componentPage;