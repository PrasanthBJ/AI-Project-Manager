const StudentDashboard = () => {
    return (
        <div className="space-y-10">

            {/* Header */}
            <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                    Your work overview
                </h2>
                <p className="text-lg text-gray-500 mt-1">
                    Focus on what needs attention today
                </p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Stat title="Active Tasks" value="8" />
                <Stat title="Due Today" value="2" highlight />
                <Stat title="Completed This Week" value="5" />
                <Stat title="Projects Involved" value="3" />
            </section>

            {/* Tasks */}
            <section className="bg-white border rounded-xl">
                <SectionHeader title="Upcoming tasks" />

                <ul className="divide-y">
                    <TaskItem title="Prepare project report" due="Today" />
                    <TaskItem title="Fix UI bugs" due="Tomorrow" />
                    <TaskItem title="Team sync notes" due="In 3 days" />
                </ul>
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

const TaskItem = ({ title, due }) => (
    <li className="px-6 py-4 flex justify-between">
        <span className="text-lg">{title}</span>
        <span className="text-gray-500">{due}</span>
    </li>
);

export default StudentDashboard;
