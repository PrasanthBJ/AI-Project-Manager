import { useState } from "react";
import AuthForm from "./Components/AuthForm";
import RoleSelection from "./Components/RoleSelection";
import AppLayout from "./Components/AppLayout";

import StudentDashboard from "./Dashboards/StudentDashboard";
import ManagerDashboard from "./Dashboards/ManagerDashboard";
import MemberDashboard from "./Dashboards/MemberDashboard";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // simulate login
    const [role, setRole] = useState(null);

    // Step 1: Login
    if (!isLoggedIn) {
        return <AuthForm />;
    }

    // Step 2: Role selection
    if (!role) {
        return <RoleSelection onSelectRole={setRole} />;
    }

    // Step 3: Role-based dashboard selection
    const renderDashboard = () => {
        switch (role) {
            case "Student":
                return <StudentDashboard />;
            case "Project Manager":
                return <ManagerDashboard />;
            case "Team Member":
                return <MemberDashboard />;
            default:
                return null;
        }
    };

    // Step 4: Main App UI
    return (
        <AppLayout role={role}>
            {renderDashboard()}
        </AppLayout>
    );
}

export default App;
