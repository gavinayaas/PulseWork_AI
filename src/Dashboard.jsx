import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [eventName, setEventName] = useState("");

  const menuItems = [
    "Dashboard",
    "Projects",
    "My Tasks",
    "Calendar",
    "Timeline",
    "Team",
    "Reports",
    "Settings",
  ];

  const projects = [
    {
      name: "Website Redesign",
      category: "Design",
      status: "Active",
      progress: 78,
    },
    {
      name: "AI Integration",
      category: "Development",
      status: "In Progress",
      progress: 54,
    },
    {
      name: "Database Setup",
      category: "Backend",
      status: "On Hold",
      progress: 32,
    },
    {
      name: "Security Testing",
      category: "Security",
      status: "Active",
      progress: 86,
    },
  ];

  const activities = [
    {
      person: "Alex Morgan",
      action: "completed",
      task: "Homepage Design",
      time: "10 minutes ago",
    },
    {
      person: "Jade Sterling",
      action: "created",
      task: "AI Integration",
      time: "1 hour ago",
    },
    {
      person: "Ryan Cole",
      action: "updated",
      task: "Database Setup",
      time: "3 hours ago",
    },
  ];

  const chartValues = [35, 65, 48, 82, 56, 72, 45, 90, 62, 78];

  const dateKey = (date) =>
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const addEvent = () => {
    if (!eventName.trim()) return;

    const key = dateKey(selectedDate);

    setEvents((previous) => ({
      ...previous,
      [key]: [...(previous[key] || []), eventName.trim()],
    }));

    setEventName("");
  };

  const changeMonth = (amount) => {
    setMonth(new Date(month.getFullYear(), month.getMonth() + amount, 1));
  };

  const renderCalendarDays = () => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const totalDays = new Date(year, monthIndex + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= totalDays; i++) days.push(i);

    return (
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="py-3 text-center text-xs font-semibold text-purple-200"
          >
            {day}
          </div>
        ))}

        {days.map((day, index) => {
          if (!day) return <div key={`empty-${index}`} />;

          const date = new Date(year, monthIndex, day);
          const isSelected = dateKey(date) === dateKey(selectedDate);
          const isToday = dateKey(date) === dateKey(new Date());
          const hasEvents = Boolean(events[dateKey(date)]?.length);

          return (
            <button
              key={day}
              onClick={() => setSelectedDate(date)}
              className={`relative min-h-12 rounded-xl text-sm transition ${
                isSelected
                  ? "bg-gradient-to-r from-pink-300 to-purple-300 font-bold text-[#321c38]"
                  : isToday
                    ? "border border-pink-300 text-pink-200"
                    : "bg-white/5 text-slate-200 hover:bg-purple-400/20"
              }`}
            >
              {day}
              {hasEvents && (
                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-pink-300" />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  const handleLogout = () => navigate("/auth");

  const cardClass =
    "rounded-2xl border border-pink-100/10 bg-white/[0.07] p-6 shadow-xl backdrop-blur-xl";

  const renderOverview = () => (
    <>
      {/* Welcome Banner */}
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-pink-200/20 bg-gradient-to-r from-[#704078] via-[#75456d] to-[#a65c83] p-8 shadow-xl">
        <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-pink-200/20 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-pink-100">
              Your workspace
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Welcome Back!
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">
              Organize your projects, manage your tasks and make every day
              productive.
            </p>
          </div>

          <button
            onClick={() => navigate("/create-task")}
            className="rounded-xl bg-gradient-to-r from-[#f0c1df] to-[#d9b4f0] px-7 py-4 font-bold text-[#38213b] shadow-lg transition hover:-translate-y-1"
          >
            + Create New Task
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-8">
        <div className="mb-5">
          <h3 className="text-xl font-bold">Systems Overview</h3>
          <p className="mt-1 text-sm text-purple-100/60">
            Your workspace activity at a glance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[
            [
              "Total Tasks",
              "0",
              "All assigned tasks",
              "from-purple-300 to-indigo-300",
            ],
            [
              "In Progress",
              "0",
              "Currently working",
              "from-pink-300 to-rose-300",
            ],
            [
              "Completed",
              "0",
              "Successfully finished",
              "from-emerald-300 to-teal-300",
            ],
            [
              "Pending",
              "0",
              "Waiting to start",
              "from-orange-300 to-amber-300",
            ],
          ].map(([title, value, description, gradient]) => (
            <div
              key={title}
              className={`${cardClass} transition hover:-translate-y-1 hover:bg-white/10`}
            >
              <div
                className={`mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r ${gradient}`}
              />
              <p className="text-sm text-purple-100/70">{title}</p>
              <h3 className="mt-2 text-4xl font-bold">{value}</h3>
              <p className="mt-2 text-xs text-purple-100/50">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activity and Mastery */}
      <section className="mb-8 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className={`${cardClass} xl:col-span-2`}>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Operational Flux</h3>
              <p className="mt-1 text-xs text-purple-100/60">
                Workspace activity overview
              </p>
            </div>
            <span className="rounded-lg bg-pink-200/10 px-3 py-2 text-xs text-pink-200">
              Weekly
            </span>
          </div>

          <div className="flex h-56 items-end gap-3 rounded-xl bg-black/10 px-4 pt-5">
            {chartValues.map((value, index) => (
              <div key={index} className="flex h-full flex-1 items-end">
                <div
                  className={`w-full rounded-t-md bg-gradient-to-t ${
                    index % 2 === 0
                      ? "from-purple-500 to-purple-200"
                      : "from-pink-500 to-pink-200"
                  } opacity-80 transition hover:opacity-100`}
                  style={{ height: `${value}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between text-xs text-purple-100/50">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>

        <div
          className={`${cardClass} flex flex-col items-center justify-center`}
        >
          <h3 className="text-lg font-bold">Task Mastery</h3>
          <p className="mt-1 text-xs text-purple-100/60">Completion overview</p>

          <div
            className="my-8 flex h-40 w-40 items-center justify-center rounded-full"
            style={{
              background:
                "conic-gradient(#e8a9d0 0deg 274deg, #ffffff18 274deg 360deg)",
            }}
          >
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#573d58]">
              <span className="text-4xl font-bold">76%</span>
              <span className="text-[10px] uppercase tracking-widest text-pink-200">
                Progress
              </span>
            </div>
          </div>

          <p className="text-center text-xs text-purple-100/60">
            Sample progress display. Live task progress will be connected later.
          </p>
        </div>
      </section>

      {/* Projects and Activity */}
      <section className="mb-8 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className={`${cardClass} xl:col-span-2`}>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Active Projects</h3>
              <p className="mt-1 text-xs text-purple-100/60">
                Your ongoing projects
              </p>
            </div>
            <button
              onClick={() => setActiveTab("Projects")}
              className="text-sm font-semibold text-pink-200 hover:text-white"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-white/10 bg-black/10 p-5 transition hover:border-pink-200/30"
              >
                <div className="mb-4 flex justify-between">
                  <span className="text-xs text-purple-100/60">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold text-pink-200">
                    {project.status}
                  </span>
                </div>
                <h4 className="font-bold">{project.name}</h4>
                <div className="mt-5 flex justify-between text-xs">
                  <span className="text-purple-100/60">Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-300 to-pink-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={cardClass}>
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <p className="mt-1 text-xs text-purple-100/60">
            Latest workspace updates
          </p>

          <div className="mt-7 space-y-7">
            {activities.map((activity) => (
              <div key={activity.person} className="flex gap-3">
                <div className="h-3 w-3 shrink-0 rounded-full bg-gradient-to-r from-purple-300 to-pink-300" />
                <div>
                  <p className="text-sm font-semibold">{activity.person}</p>
                  <p className="mt-1 text-xs leading-5 text-purple-100/60">
                    {activity.action}{" "}
                    <span className="text-pink-200">{activity.task}</span>
                  </p>
                  <p className="mt-2 text-[10px] text-purple-100/40">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kanban */}
      <section className={cardClass}>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold">Kanban Stream</h3>
            <p className="mt-1 text-xs text-purple-100/60">
              Organize tasks by status
            </p>
          </div>
          <button
            onClick={() => navigate("/create-task")}
            className="rounded-lg border border-pink-200/30 px-4 py-2 text-xs font-semibold text-pink-200 hover:bg-pink-200/10"
          >
            + Add Task
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {["To Do", "In Progress", "Completed"].map((status) => (
            <div
              key={status}
              className="rounded-xl border border-white/10 bg-black/10 p-5"
            >
              <h4 className="font-bold">{status}</h4>
              <div className="mt-5 rounded-lg border border-dashed border-white/15 py-7 text-center text-xs text-purple-100/50">
                No tasks yet
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderCalendar = () => (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <section className={`${cardClass} xl:col-span-2`}>
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold">Calendar</h2>
            <p className="mt-1 text-sm text-purple-100/60">
              Your monthly schedule
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => changeMonth(-1)}
              className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10"
            >
              Previous
            </button>
            <button
              onClick={() => changeMonth(1)}
              className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/10"
            >
              Next
            </button>
          </div>
        </div>

        <h3 className="mb-5 text-center text-xl font-bold text-pink-200">
          {month.toLocaleString("default", { month: "long", year: "numeric" })}
        </h3>
        {renderCalendarDays()}
      </section>

      <section className={cardClass}>
        <p className="text-sm text-pink-200">Selected Date</p>
        <h3 className="mt-2 text-2xl font-bold">
          {selectedDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h3>

        <div className="my-6 border-t border-white/10" />
        <h4 className="mb-4 font-semibold">Scheduled Events</h4>

        {(events[dateKey(selectedDate)] || []).length === 0 ? (
          <p className="text-sm text-purple-100/60">No events for this date.</p>
        ) : (
          events[dateKey(selectedDate)].map((event, index) => (
            <p
              key={index}
              className="mb-2 rounded-lg bg-purple-300/10 p-3 text-sm"
            >
              {event}
            </p>
          ))
        )}

        <input
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addEvent()}
          placeholder="Enter event name"
          className="mt-6 w-full rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-sm outline-none placeholder:text-purple-100/40 focus:border-pink-200/50"
        />
        <button
          onClick={addEvent}
          className="mt-3 w-full rounded-xl bg-gradient-to-r from-purple-400 to-pink-300 py-3 font-bold text-[#38213b]"
        >
          + Add Event
        </button>
      </section>
    </div>
  );

  const renderOtherPage = () => (
    <section className={cardClass}>
      <p className="text-xs font-bold uppercase tracking-widest text-pink-200">
        Pulsework AI Workspace
      </p>
      <h2 className="mt-3 text-3xl font-bold">{activeTab}</h2>
      <p className="mt-3 text-sm text-purple-100/60">
        Your {activeTab.toLowerCase()} workspace is ready for implementation.
      </p>

      {activeTab === "Projects" && (
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-white/10 bg-black/10 p-5"
            >
              <h3 className="font-bold">{project.name}</h3>
              <p className="mt-2 text-xs text-purple-100/60">
                {project.category}
              </p>
              <p className="mt-4 text-sm text-pink-200">
                {project.progress}% complete
              </p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setActiveTab("Dashboard")}
        className="mt-7 rounded-xl bg-gradient-to-r from-purple-400 to-pink-300 px-5 py-3 font-bold text-[#38213b]"
      >
        Back to Dashboard
      </button>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#28142d] via-[#38213b] to-[#482b47] text-white lg:flex">
      {/* Sidebar */}
      <aside className="flex w-full flex-col border-b border-white/10 bg-[#2b1930]/80 p-5 backdrop-blur-xl lg:fixed lg:inset-y-0 lg:w-64 lg:border-b-0 lg:border-r">
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-extrabold">
            Pulsework <span className="text-pink-200">AI</span>
          </h1>
          <p className="mt-1 text-[10px] uppercase tracking-[3px] text-purple-100/50">
            Your intelligent workspace
          </p>
        </div>

        <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[2px] text-purple-100/40">
          Workspace
        </p>

        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:flex lg:flex-col">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                activeTab === item
                  ? "bg-gradient-to-r from-[#b36ac5] to-[#d88bb9] font-bold text-[#351d39] shadow-lg"
                  : "text-purple-100/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="mt-8 hidden rounded-2xl border border-pink-200/15 bg-gradient-to-br from-purple-400/15 to-pink-300/10 p-4 lg:block">
          <p className="font-bold">Stay productive!</p>
          <p className="mt-2 text-xs leading-5 text-purple-100/60">
            Plan your work and make progress every day.
          </p>
          <button
            onClick={() => navigate("/create-task")}
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-300 to-pink-200 py-2 text-sm font-bold text-[#351d39]"
          >
            Add a Task
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="mt-5 rounded-xl px-4 py-3 text-left text-sm font-semibold text-pink-200 hover:bg-pink-200/10 lg:mt-auto"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="min-w-0 flex-1 px-5 py-6 sm:px-8 lg:ml-64 lg:px-9">
        <header className="mb-9 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="w-full max-w-md">
            <input
              type="search"
              placeholder="Search your workspace..."
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-purple-100/40 focus:border-pink-200/50"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-purple-100/60 sm:block">
              Personal Workspace
            </span>
            <div className="h-10 w-10 rounded-full border-2 border-pink-200/60 bg-gradient-to-br from-purple-300 to-pink-200" />
          </div>
        </header>

        <div className="mb-8">
          <p className="text-xs font-semibold text-pink-200">
            Workspace / {activeTab}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold">
            {activeTab === "Dashboard" ? "Systems Overview" : activeTab}
          </h1>
        </div>

        {activeTab === "Dashboard"
          ? renderOverview()
          : activeTab === "Calendar"
            ? renderCalendar()
            : renderOtherPage()}

        <footer className="mt-10 border-t border-white/10 py-6 text-center text-xs text-purple-100/40">
          Pulsework AI · Your intelligent workspace
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
