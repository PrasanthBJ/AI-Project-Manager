const ManagerDashboard = () => {
    return (
        <div className="space-y-10">

            {/* Header */}
            <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                    Project overview
                </h2>
                <p className="text-lg text-gray-500 mt-1">
                    Monitor progress and risks across projects
                </p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Stat title="Active Projects" value="4" />
                <Stat title="Total Tasks" value="36" />
                <Stat title="At Risk Tasks" value="3" highlight />
                <Stat title="Completed This Month" value="18" />
            </section>

            {/* Insights */}
            <section className="bg-white border rounded-xl">
                <SectionHeader title="Insights & attention" />

                <div className="px-6 py-4 space-y-4">
                    <Insight text="2 tasks are close to missing deadlines" />
                    <Insight text="Design phase delayed in Project Alpha" />
                    <Insight text="Team workload uneven across members" />
                </div>
            </section>
        </div>
    );
};

const Stat = ({ title, value, highlight }) => (
    <div className="bg-white border rounded-xl p-6">
        <p className="text-lg text-gray-500">{title}</p>
        <p
            className={`text-3xl font-semibold mt-2 ${
                highlight ? "text-blue-600" : "text-gray-900"
            }`}
        >
            {value}
        </p>
    </div>
);

const SectionHeader = ({ title }) => (
    <div className="px-6 py-4 border-b">
        <h3 className="text-xl font-medium">{title}</h3>
    </div>
);

const Insight = ({ text }) => (
    <div className="text-lg text-gray-700">
        • {text}
    </div>
);

export default ManagerDashboard;
