import { ReactNode } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
     return (
          <div className="min-h-screen flex bg-gray-950 text-white">
               <aside className="w-64 border-r border-gray-800 bg-gray-900 p-4">
                    <DashboardSidebar />
               </aside>
               <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
     );
}
