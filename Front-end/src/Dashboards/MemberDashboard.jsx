const MemberDashboard = () => {
    return (
        <div className="space-y-10">

            {/* Header */}
            <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                    Your assigned work
                </h2>
                <p className="text-lg text-gray-500 mt-1">
                    Stay aligned with your responsibilities
                </p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Stat title="Assigned Tasks" value="10" />
                <Stat title="In Progress" value="4" />
                <Stat title="Pending Review" value="2" />
                <Stat title="Completed" value="30" />
            </section>

            {/* Activity */}
            <section className="bg-white border rounded-xl">
                <SectionHeader title="Recent activity" />

                <ul className="divide-y">
                    <ActivityItem text="Updated task: API integration" />
                    <ActivityItem text="Marked task as completed" />
                    <ActivityItem text="Commented on UI review" />
                </ul>
            </section>
        </div>
    );
};

const Stat = ({ title, value }) => (
    <div className="bg-white border rounded-xl p-6">
        <p className="text-lg text-gray-500">{title}</p>
        <p className="text-3xl font-semibold mt-2 text-gray-900">
            {value}
        </p>
    </div>
);

const SectionHeader = ({ title }) => (
    <div className="px-6 py-4 border-b">
        <h3 className="text-xl font-medium">{title}</h3>
    </div>
);

const ActivityItem = ({ text }) => (
    <li className="px-6 py-4 text-lg text-gray-700">
        {text}
    </li>
);

export default MemberDashboard;
