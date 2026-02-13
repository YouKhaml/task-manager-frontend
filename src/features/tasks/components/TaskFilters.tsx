import { Search } from "lucide-react";

interface Props {
  search: string;
  statut: string;
  priorite: string;
  onSearchChange: (v: string) => void;
  onStatutChange: (v: string) => void;
  onPrioriteChange: (v: string) => void;
}

export default function TaskFilters({
  search,
  statut,
  priorite,
  onSearchChange,
  onStatutChange,
  onPrioriteChange,
}: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium">
        <Search size={16} /> Filtres et recherche
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Rechercher une tâche..."
          className="
            w-full rounded-md bg-gray-100 px-3 py-2 text-sm
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />

        {/* STATUT */}
        <select
          value={statut}
          onChange={(e) => onStatutChange(e.target.value)}
          className="
            w-full rounded-md bg-gray-100 px-3 py-2 text-sm
            border border-gray-300
          "
        >
          <option value="">Tous les statuts</option>
          <option value="A_FAIRE">À faire</option>
          <option value="EN_COURS">En cours</option>
          <option value="TERMINEE">Terminée</option>
        </select>

        {/* PRIORITE */}
        <select
          value={priorite}
          onChange={(e) => onPrioriteChange(e.target.value)}
          className="
            w-full rounded-md bg-gray-100 px-3 py-2 text-sm
            border border-gray-300
          "
        >
          <option value="">Toutes priorités</option>
          <option value="FAIBLE">Faible</option>
          <option value="MOYENNE">Moyenne</option>
          <option value="ELEVEE">Elevee</option>
          <option value="CRITIQUE">Critique</option>
        </select>
      </div>
    </div>
  );
}
