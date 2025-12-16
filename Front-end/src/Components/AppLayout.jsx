const AppLayout = ({ children, role }) => {
    return (
        <div className="min-h-screen flex bg-gray-50">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r hidden lg:block">
                <div className="px-6 py-5 text-2xl font-semibold text-blue-600">
                    AI Project Manager
                </div>

                <nav className="px-4 space-y-2 text-lg">
                    <NavItem label="Dashboard" />
                    <NavItem label="Projects" />
                    <NavItem label="Tasks" />
                    {role === "Project Manager" && <NavItem label="AI Insights" />}
                    <NavItem label="Profile" />
                </nav>
            </aside>

            {/* Main */}
            <main className="flex-1 p-8 lg:p-12">
                {children}
            </main>
        </div>
    );
};

const NavItem = ({ label }) => (
    <div className="px-4 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-blue-50 hover:text-blue-600">
        {label}
    </div>
);

export default AppLayout;
