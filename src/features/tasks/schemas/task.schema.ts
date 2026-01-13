import * as yup from "yup";
import { PRIORITE, STATUT_TACHE, type Task } from "../types/task";


export const taskSchema: yup.ObjectSchema<Task> = yup.object({
  titre: yup
    .string()
    .required("Le titre est obligatoire")
    .min(3, "Minimum 3 caractères"),

  description: yup
    .string()
    .max(500, "Description trop longue")
    .optional(),

  priorite: yup
    .mixed()
    .oneOf(Object.values(PRIORITE))
    .required(),

  statut: yup
    .mixed()
    .oneOf(Object.values(STATUT_TACHE))
    .required(),

  dateDebut: yup
    .string()
    .nullable()
    .optional(),

  dateFin: yup
    .string()
    .nullable()
    .optional()
    .test(
      "date-fin-apres-debut",
      "La date de fin doit être après la date de début",
      function (value) {
        const { dateDebut } = this.parent;
        if (!value || !dateDebut) return true;
        return new Date(value) >= new Date(dateDebut);
      }
    ),

  categorie: yup
    .string()
    .max(50, "Catégorie trop longue")
    .optional(),

  tags: yup
    .array()
    .of(yup.string().max(20))
    .optional(),

  niveauUrgence: yup
    .number()
    .required()
    .min(1)
    .max(5),
});

