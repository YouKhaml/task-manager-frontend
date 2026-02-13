import { useForm } from "react-hook-form";
import {  type Task } from "../types/task";
import { useEffect } from "react";

interface Props {
  task : Task
  onCancel: () => void;
}

export default function ViewTaskForm({ task, onCancel }: Props) {
  const {
    register,
    reset,
  } = useForm<Task>();

  if (!task) return null;
  useEffect(() => {
    reset({
      ...task,
      
    });
  }, [task, reset]);


 
const isReadOnly = true;
  return (
    <form  className="space-y-4">
      
      {/* TITRE */}
      <div className="space-y-1">
            <label className="text-sm font-medium mb-1">
                Titre
            </label>

          <input
              {...register("titre")}
              readOnly={isReadOnly}
             className="
                  w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                  border border-gray-300
                  cursor-not-allowed
                "
              />
      </div>

      {/* DESCTIPTION */}
      <div>
        <label className="text-sm font-medium mb-1">
                Description
        </label>
        
        <textarea
            {...register("description")}
            readOnly={isReadOnly}
            className="
                  w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                  border border-gray-300
                  cursor-not-allowed
                "
        />
        

      </div>
      <div className="flex space-x-4 items-center">
        {/* Statut */}
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium mb-1">Statut</label>
          <input
            {...register("statut")}
            readOnly={isReadOnly}
            className="
              w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
              border border-gray-300
              cursor-not-allowed"
              
          />
            
        </div>

        {/* Priorité */}
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium mb-1">Priorité</label>
          <input
            {...register("priorite")}
            className="
            w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
            border border-gray-300
            cursor-not-allowed"
            disabled
          />
            
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
                readOnly={isReadOnly}
                className="
                  w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                  border border-gray-300
                  cursor-not-allowed
                "
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
                readOnly={isReadOnly}
                className="
                  w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                  border border-gray-300
                  cursor-not-allowed
                "
              />
              
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
              readOnly={isReadOnly}
              placeholder="  Catégorie (ex: Travail, Personnel)"
              className="
                  w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                  border border-gray-300
                  cursor-not-allowed
                "
            />
        </div>
        
        {/* URGENCE */}
        <div className="w-1/3 flex flex-col">
          <label className="text-sm font-medium mb-1">Niveau d'urgence</label>
          <input
            type="number"
            {...register("niveauUrgence")}
            readOnly={isReadOnly}
            className="
                  w-full rounded-md bg-gray-100 px-3 py-1.5 text-sm
                  border border-gray-300
                  cursor-not-allowed
                "
          />
          
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
      </div>
    </form>
  );
}
