import {
  Clock,
  PlayCircle,
  CheckCircle,
  Ban,
} from "lucide-react";
import type { STATUT_TACHE } from "../features/tasks/types/task";


export const STATUT_ICONS: Record<
  keyof typeof STATUT_TACHE,
  { icon: any; className: string }
> = {
  A_FAIRE: {
    icon: Clock,
    className: "text-gray-400",
  },
  EN_COURS: {
    icon: PlayCircle,
    className: "text-blue-600",
  },
  TERMINEE: {
    icon: CheckCircle,
    className: "text-green-600",
  },
  
  
};
