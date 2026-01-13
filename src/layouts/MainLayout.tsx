import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";



export default function MainLayout(){

    return(
        <div className="flex h-screen bg-gray-50">
           {/* Sidebar */}
            <Sidebar />

           {/* Main content */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <Header />

                {/* Page content */}
                    

                        <Outlet />
                    
            </div>
        </div>
    );
}