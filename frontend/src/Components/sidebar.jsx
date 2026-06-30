import React from "react";
import {
  LayoutDashboard,
  Box,
  Wrench,
  Clock,
  BarChart3,
  Bell,
  LogOut,
} from "lucide-react";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "components", label: "Components", icon: Box },
  { key: "tools", label: "Tools", icon: Wrench },
  { key: "history", label: "History", icon: Clock },
  { key: "reports", label: "Reports", icon: BarChart3 },
  { key: "notifications", label: "Notifications", icon: Bell },
];

const ErsLogo = ({ size = 42 }) => (
  <div className="shrink-0 rounded-md bg-yellow-400 flex items-center justify-center" style={{ width: size, height: size }}>
    <span className="font-black text-black tracking-tight" style={{ fontSize: size * 0.45, lineHeight: 1 }}>EH</span>
  </div>
);

const Sidebar = ({ active = "notifications" }) => {
  return (
    <aside className="w-64 h-full bg-[#0b0a0d] border-r border-[#3f3f46]/20 flex flex-col justify-between p-4 shrink-0 select-none">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-3 px-2 py-1">
          <ErsLogo />
          <div>
            <h1 className="text-white font-bold text-sm leading-tight">ERS Hive</h1>
            <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Inventory</p>
          </div>
        </div>

        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#facc15] text-black shadow-md shadow-[#facc15]/10"

                    : "text-gray-400 hover:bg-[#facc15]/10 hover:text-[#facc15]"
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="px-2 py-2 border-t border-zinc-900">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
