import { PRIORITE, STATUT_TACHE } from "../types/task";

export const PRIORITE_LABELS = {
  [PRIORITE.FAIBLE]: "Faible",
  [PRIORITE.MOYENNE]: "Moyenne",
  [PRIORITE.ELEVEE]: "Élevée",
  [PRIORITE.CRITIQUE]: "Critique",
};

export const STATUT_LABELS = {
  [STATUT_TACHE.EN_ATTENTE]: "En attente",
  [STATUT_TACHE.EN_COURS]: "En cours",
  [STATUT_TACHE.TERMINEE]: "Terminée",
  [STATUT_TACHE.ANNULEE]: "Annulée",
  [STATUT_TACHE.BLOQUEE]: "Bloquée",
};
