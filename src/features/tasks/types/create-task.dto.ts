import type { Priorite, StatutTache } from "./task";


export interface CreateTaskDto {
  titre: string;
  description?: string;

  priorite: Priorite;
  statut: StatutTache;

  dateDebut?: string;
  dateFin?: string;

  categorie?: string;
  tags?: string[];

  niveauUrgence: number;
}
