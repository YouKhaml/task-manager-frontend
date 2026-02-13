import {Routes , Route} from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import TaskPage from "../features/tasks/pages/TaskPage";
import NotFound from "../pages/NotFound";
import DashboardPage from "../features/dashboard/pages/DashboardPage";

export default function AppRoutes(){

    return(
       <Routes>
          {/* Routes publiques */}
          <Route path="/login" element={<Login/>}   />
          {/* Routes protégées */}
          <Route element={<MainLayout/>}>
             <Route index  element={<DashboardPage/>}  />
             <Route  path="/tasks" element={<TaskPage/>}   />
             <Route  path="/dashboard" element={<DashboardPage/>} />
             {/* autres routes */}
             <Route path="*" element={<NotFound />} />
          </Route>
       </Routes>

    );
}