import { NavLink } from "react-router-dom";


const menuItems = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Mes tâches",
    path: "/tasks",
  },
  {
    label: "Paramètres",
    path: "/settings",
  },
];

export default function Sidebar(){
    return(
    <aside className="w-64 bg-white border-r flex flex-col">
      {/* Logo */}
        <div className="px-6 py-5 border-b">
            <h1 className="text-xl font-bold text-blue-600">
              TaskFlow
            </h1>
            <p className="text-xs text-gray-500">
                Gestion de tâches
            </p>
        </div>

      {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-1">
            {menuItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `block px-3 py-2 rounded-lg text-sm font-medium transition
                        ${
                            isActive
                            ? "bg-green-100 text-green-700"
                            : "text-gray-600 hover:bg-gray-100"
                        }`
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>

      {/* Footer utilisateur */}
      <div className="px-4 py-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">
              Jean Dupont
            </p>
            <p className="text-xs text-gray-500">
              Utilisateur
            </p>
          </div>
        </div>
      </div>
    </aside>
    )
}