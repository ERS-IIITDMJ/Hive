import {useState} from 'react';
import {Search ,Menu ,X} from 'lucide-react';
import SideBar from '/sidebar.jsx';
import SearchBar from '/searchBar.jsx';

const tools = [
  {
    id: 1,
    name: "Soldering Iron Kit",
    description: "Temperature controlled soldering station with accessories",
    image: solderingIron,
    available: 8,
    status: "AVAILABLE",
  },
  {
    id: 2,
    name: "Digital Multimeter",
    description: "Auto-ranging multimeter for voltage, current, resistance measurement",
    image: multimeter,
    available: 15,
    status: "AVAILABLE",
  },
  {
    id: 3,
    name: "Oscilloscope",
    description: "Digital storage oscilloscope, 100MHz bandwidth",
    image: oscilloscope,
    available: 4,
    status: "LIMITED",
  },
  {
    id: 4,
    name: "3D Printer",
    description: "FDM 3D printer with 220x220x250mm build volume",
    image: printer3d,
    available: 3,
    status: "LIMITED",
  },
  {
    id: 5,
    name: "Wire Stripper",
    description: "Automatic wire stripping tool for various gauges",
    image: wireStripper,
    available: 12,
    status: "AVAILABLE",
  },
  {
    id: 6,
    name: "Power Supply",
    description: "Adjustable DC bench power supply, 0-30V, 0-10A",
    image: powerSupply,
    available: 10,
    status: "AVAILABLE",
  },
  {
    id: 7,
    name: "esp32",
    description: "Low-cost, low-power system-on-chip (SoC) with integrated Wi-Fi and Bluetooth",
    image: "https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32d_0.png",
    available: 15,
    status: "AVAILABLE",
},
{
    id: 8,
    name: "L298N motor driver",
    description: "Dual H-Bridge motor driver for controlling DC motors and stepper motors",
    image: "https://components101.com/sites/default/files/component_pin/L298N-Motor-Driver-Module-Pinout.png",
    available: 8,
    status: "AVAILABLE",
},
];

function StatusBadge({ status }) {
  const isAvailable = status === "AVAILABLE";
  return (
    <span
      className={`rounded px-2 py-1 text-[10px] font-bold tracking-wider font-mono ${
        isAvailable
          ? "bg-[#064E3B] text-[#34D399]"
          : "bg-[#78350F] text-[#F59E0B]"
      }`}
    >
      {status}
    </span>
  );
}



function ToolsPage() {
  return (
    <>



    </>
  )
}
export default ToolsPage