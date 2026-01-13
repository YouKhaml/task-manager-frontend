import { Bell } from "lucide-react";



export default function Header() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* Actions */}
      <div className="ml-260 flex items-center gap-4">
        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        {/* Utilisateur */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <span className="text-sm font-medium text-gray-700">
            Jean Dupont
          </span>
        </div>
      </div>
    </header>
  );
}
