import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTaskSchema } from "../schemas/createTask.schema";
import type { CreateTaskDto } from "../types/create-task.dto";
import { PRIORITE, STATUT_TACHE } from "../types/task";

interface Props {
  onSubmit: (data: CreateTaskDto) => Promise<any>;
  onCancel: () => void;
}

export default function AddTaskForm({ onSubmit, onCancel }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
     setValue,
    reset,
  } = useForm<CreateTaskDto>({
    resolver: yupResolver(createTaskSchema),
    defaultValues: {
      priorite: PRIORITE.MOYENNE,
      statut: STATUT_TACHE.EN_ATTENTE,
      niveauUrgence: 3,
    },
  });

  const submit = async (data: CreateTaskDto) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      
      {/* TITRE */}
      <div className="space-y-1">
            <label className="text-sm font-medium">
                Titre<span className="text-red-500">*</span>
            </label>

          <input
              {...register("titre")}
              placeholder="Nom de la tâche"
              className={`
                w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                border
                ${errors.titre ? "border-red-500" : "border-gray-300"}
                focus:outline-none
                focus:ring-2
                ${errors.titre ? "focus:ring-red-500" : "focus:ring-blue-500"}
                focus:border-transparent
                transition
              `}
          />

          {/* MESSAGE D’ERREUR */}
          {errors.titre && (
          <p className="text-red-500 text-sm">
            {errors.titre.message}
          </p>
          )}
      </div>

      {/* DESCTIPTION */}
      <div>
        <label className="text-sm font-medium">
                Description
        </label>
        
        <textarea
            {...register("description")}
            placeholder="Description détaillée de la tâche"
            className={`
              w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
              border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              focus:border-transparent
              transition
            `}
        />

      </div>
      <div className="flex space-x-4 items-center">
        {/* Statut */}
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium mb-1">Statut</label>
          <select
            {...register("statut")}
            className="
              w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
              border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              focus:border-transparent
              transition"
          >
            {Object.values(STATUT_TACHE).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Priorité */}
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium mb-1">Priorité</label>
          <select
            {...register("priorite")}
            className="
            w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
            border border-gray-300
            focus:outline-none
            focus:ring-2 focus:ring-blue-500
            focus:border-transparent
            transition"
          >
            {Object.values(PRIORITE).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex space-x-4 items-center">
            {/* DATE DEBUT */}
            <div>
              <label className="text-sm font-medium">
                Date début
              </label>
              <input
                type="datetime-local"
                {...register("dateDebut")}
                className={`
                  w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                  border border-gray-300
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                  focus:border-transparent
                  transition
                `}
              />
            </div>
            {/* DATE FIN */}
            <div>
              <label className="text-sm font-medium">
                Date limit
              </label>
              <input
                type="datetime-local"
                {...register("dateFin")}
                className={`
                  w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                  border border-gray-300
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                  focus:border-transparent
                  transition
                `}
              />
              {errors.dateFin && (
                <p className="text-red-500 text-sm">
                  {errors.dateFin.message}
                </p>
              )}
            </div>
      </div>
      <div>
        
        <label className="text-sm font-medium">
                Catégorie
        </label>
        <input
           {...register("categorie")}
           placeholder="  Catégorie (ex: Travail, Personnel)"
           className={`
              w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
              border border-gray-300
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              focus:border-transparent
              transition
            `}
        />
      </div>
      
      <div className="flex space-x-4 items-start">
        {/* TAG */}
        <div className="w-3/4 flex flex-col">
          <label className="text-sm font-medium mb-1">Tag</label>
          <input
            placeholder="Tags (séparés par des virgules)"
            className="
              w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-transparent
              transition
              "
            onChange={(e) =>
              setValue(
                "tags",
                e.target.value
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean)
              )
            }
          />
        </div>
        {/* URGENCE */}
        <div className="w-1/3 flex flex-col">
          <label className="text-sm font-medium mb-1">Niveau d'urgence</label>
          <input
            type="number"
            {...register("niveauUrgence")}
            min={1}
            max={5}
            className="
              w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-transparent
              transition
              "
          />
          {errors.niveauUrgence && (
            <p className="text-red-500 text-sm">{errors.niveauUrgence.message}</p>
          )}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg border"
        >
          Annuler
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            bg-blue-500 text-white font-semibold py-1.5 px-8 rounded
            hover:bg-blue-600
            focus:outline-none focus:ring-2 focus:ring-blue-400
            disabled:opacity-50 disabled:cursor-not-allowed
            transition
          `}
        >
          {isSubmitting ? "Création..." : "Créer"}
        </button>
      </div>
    </form>
  );
}
