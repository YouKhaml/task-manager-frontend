import { PRIORITE, STATUT_TACHE } from "../features/tasks/types/task";


/* ===== STATUT ===== */
export const STATUT_COLORS: Record<string, string> = {
  [STATUT_TACHE.A_FAIRE]: "bg-gray-100 text-gray-700",
  [STATUT_TACHE.EN_COURS]: "bg-blue-100 text-blue-700",
  [STATUT_TACHE.TERMINEE]: "bg-green-100 text-green-700",
  
  
};

/* ===== PRIORITÉ ===== */
export const PRIORITE_COLORS: Record<string, string> = {
  [PRIORITE.FAIBLE]: "bg-green-100 text-green-700",
  [PRIORITE.MOYENNE]: "bg-yellow-100 text-yellow-700",
  [PRIORITE.ELEVEE]: "bg-orange-100 text-orange-700",
  [PRIORITE.CRITIQUE]: "bg-red-100 text-red-700",
  
};
