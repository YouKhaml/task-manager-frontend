import { useForm,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PRIORITE, STATUT_TACHE, type Task } from "../types/task";
import { taskSchema } from "../schemas/task.schema";
import { useEffect } from "react";

interface Props {
  taskId: string;
  task: Task;
  onSubmit: (id:string,data: Partial<Task>) => Promise<any>;
  onCancel: () => void;
}

export default function UpdateTaskForm({taskId,task, onSubmit, onCancel }: Props) {
  console.log(task);
  const toDateTimeLocal = (date?: string) => {
  if (!date) return "";
  return new Date(date).toISOString().slice(0, 16);
};

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
     setValue,
     watch,
     control,
    reset,
  } = useForm<Task>({
    resolver: yupResolver(taskSchema),    
  });

  useEffect(() => {
  if (!task) return;

  reset({
    titre: task.titre,
    description: task.description,
    statut: task.statut,
    priorite: task.priorite,
    dateDebut: toDateTimeLocal(task.dateDebut),
    dateFin: toDateTimeLocal(task.dateFin),
    categorie: task.categorie,
    niveauUrgence: task.niveauUrgence,
    
  });
}, [task, reset]);


  const submit = async (data: Partial<Task>) => {
    await onSubmit(taskId,data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      
      {/* TITRE */}
      <div className="space-y-1">
            <label className="text-sm font-medium mb-1">
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
        <label className="text-sm font-medium mb-1">
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
              <label className="text-sm font-medium mb-1">
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
              <label className="text-sm font-medium mb-1">
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
     
      
      <div className="flex space-x-4 items-start">
        {/* Catégorie */}
         <div className="flex flex-col w-2/3">
        
        <label className="text-sm font-medium mb-1">
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
          {isSubmitting ? "Mise à jour..." : "Mettre à jour"}
        </button>
      </div>
    </form>
  );
}
