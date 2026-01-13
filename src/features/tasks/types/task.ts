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
  EN_ATTENTE: "EN_ATTENTE",
  EN_COURS: "EN_COURS",
  TERMINEE: "TERMINEE",
  ANNULEE: "ANNULEE",
  BLOQUEE: "BLOQUEE",
} as const;

export type StatutTache = typeof STATUT_TACHE[keyof typeof STATUT_TACHE];

export interface Task {
  id: number;
  titre: string;
  description?: string;

  dateDebut?: string;
  dateFin: string;

  priorite: Priorite;
  statut: StatutTache;

  categorie?: string;
  tags: string[];

  niveauUrgence: number;
  dateDerniereModification: string;
}
