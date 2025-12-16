import { useState } from "react";

const RoleSelection = ({ onSelectRole }) => {
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-3xl w-full text-center px-6">

                <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
                    Choose your role
                </h1>
                <p className="text-lg text-gray-500 mb-10">
                    This helps personalize your workspace
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {["Student", "Project Manager", "Team Member"].map((role) => (
                        <div
                            key={role}
                            onClick={() => setSelectedRole(role)}
                            className={`border rounded-xl p-6 cursor-pointer transition ${
                                selectedRole === role
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200 hover:border-blue-400"
                            }`}
                        >
                            <h2 className="text-xl font-medium">{role}</h2>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => onSelectRole(selectedRole)}
                    disabled={!selectedRole}
                    className={`mt-10 px-8 py-3 rounded-lg text-lg ${
                        selectedRole
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default RoleSelection;
