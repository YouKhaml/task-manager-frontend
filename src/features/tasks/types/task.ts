// 🔹 Priorité métier
export const PRIORITE = {
  FAIBLE: "FAIBLE",
  MOYENNE: "MOYENNE",
  ELEVEE: "ELEVEE",
  CRITIQUE: "CRITIQUE",
} as const;

export type Priorite = typeof PRIORITE[keyof typeof PRIORITE];

// 🔹 Statut métier
export const STATUT_TACHE = {
  A_FAIRE: "A_FAIRE",
  EN_COURS: "EN_COURS",
  TERMINEE: "TERMINEE",
   
} as const;

export type StatutTache = typeof STATUT_TACHE[keyof typeof STATUT_TACHE];

export interface Task {
  id: string;
  titre: string;
  description?: string;

  dateDebut?: string;
  dateFin: string;

  priorite: Priorite;
  statut: StatutTache;

  categorie?: string;
  

  niveauUrgence: number;
  dateDerniereModification: string;

  enRetard?: boolean;
}
