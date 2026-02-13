import type { StatutTache, Priorite } from "../features/tasks/types/task";


export const STATUT_LABELS: Record<StatutTache, string> = {
  A_FAIRE: "À faire",
  EN_COURS: "En cours",
  TERMINEE: "Terminée",
  
};

export const PRIORITE_LABELS: Record<Priorite, string> = {
  FAIBLE: "Faible",
  MOYENNE: "Moyenne",
  ELEVEE: "Élevée",
  CRITIQUE: "Critique",
};


