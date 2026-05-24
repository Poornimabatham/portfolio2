import React from "react";
import "../index.css";

const EmployeeMockup = () => (
  <div className="w-full h-32 rounded-md mb-3 overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a5f, #0f2027)" }}>
    {/* Top bar */}
    <div className="flex items-center justify-between px-3 py-1" style={{ backgroundColor: "#1a56db" }}>
      <span style={{ color: "white", fontSize: "0.6rem", fontWeight: "700", letterSpacing: "1px" }}>👥 EMS Dashboard</span>
      <div className="flex gap-1">
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#f87171" }}></div>
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#fbbf24" }}></div>
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#34d399" }}></div>
      </div>
    </div>
    {/* Stats row */}
    <div className="flex gap-2 px-3 pt-2">
      {[{ label: "Employees", val: "124", color: "#3b82f6" }, { label: "Active", val: "98", color: "#10b981" }, { label: "Leave", val: "12", color: "#f59e0b" }].map((s) => (
        <div key={s.label} className="flex-1 rounded p-1 text-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          <div style={{ color: s.color, fontSize: "0.75rem", fontWeight: "800" }}>{s.val}</div>
          <div style={{ color: "#9ca3af", fontSize: "0.45rem" }}>{s.label}</div>
        </div>
      ))}
    </div>
    {/* Employee rows */}
    <div className="px-3 pt-2 flex flex-col gap-1">
      {["Alice Johnson", "Bob Smith"].map((name) => (
        <div key={name} className="flex items-center gap-2">
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "0.4rem", color: "white" }}>{name[0]}</span>
          </div>
          <div style={{ flex: 1, height: 4, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.1)" }}></div>
          <div style={{ width: 28, height: 8, borderRadius: 4, backgroundColor: "#1a56db", fontSize: "0.35rem", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>Active</div>
        </div>
      ))}
    </div>
  </div>
);

const ExpenseMockup = () => (
  <div className="w-full h-32 rounded-md mb-3 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2027, #1a1a2e)" }}>
    {/* Top bar */}
    <div className="flex items-center justify-between px-3 py-1" style={{ backgroundColor: "#7c3aed" }}>
      <span style={{ color: "white", fontSize: "0.6rem", fontWeight: "700", letterSpacing: "1px" }}>💰 Expense Tracker</span>
      <div className="flex gap-1">
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#f87171" }}></div>
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#fbbf24" }}></div>
        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#34d399" }}></div>
      </div>
    </div>
    {/* Stats row */}
    <div className="flex gap-2 px-3 pt-2">
      {[{ label: "Total", val: "₹24k", color: "#a78bfa" }, { label: "Income", val: "₹40k", color: "#34d399" }, { label: "Spent", val: "₹16k", color: "#f87171" }].map((s) => (
        <div key={s.label} className="flex-1 rounded p-1 text-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          <div style={{ color: s.color, fontSize: "0.75rem", fontWeight: "800" }}>{s.val}</div>
          <div style={{ color: "#9ca3af", fontSize: "0.45rem" }}>{s.label}</div>
        </div>
      ))}
    </div>
    {/* Expense bars */}
    <div className="px-3 pt-2 flex flex-col gap-1">
      {[{ name: "Food", pct: "70%", color: "#f87171" }, { name: "Travel", pct: "45%", color: "#fbbf24" }].map((e) => (
        <div key={e.name} className="flex items-center gap-2">
          <span style={{ color: "#9ca3af", fontSize: "0.45rem", width: 24 }}>{e.name}</span>
          <div style={{ flex: 1, height: 5, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.1)" }}>
            <div style={{ width: e.pct, height: "100%", borderRadius: 4, backgroundColor: e.color }}></div>
          </div>
          <span style={{ color: "white", fontSize: "0.45rem" }}>{e.pct}</span>
        </div>
      ))}
    </div>
  </div>
);

const projectCards = [
  {
    id: 1,
    bg: "bg-black",
    content: <img src="https://newportal.ubiattendance.com/assets/img/newlogo.png" alt="Attendance App" className="w-full h-32 object-contain rounded-md mb-3" />,
    label: "Attendance App",
    labelColor: "text-white",
    link: null,
  },
  {
    id: 2,
    bg: "bg-white",
    content: <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e4767b1a6b30def91044e5976532fd5e/ubihrm.png" alt="HRM Website" className="w-full h-32 object-contain rounded-md mb-3" />,
    label: "Human Resource Management Website",
    labelColor: "text-black",
    link: null,
  },
  {
    id: 3,
    bg: "bg-black",
    content: (
      <div className="w-full h-32 flex items-center justify-center rounded-md mb-3">
        <div style={{ border: "3px solid #e6a817", padding: "8px 16px" }}>
          <span style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px" }}>
            OTO<span style={{ color: "#e6a817" }}>LINK</span>
          </span>
        </div>
      </div>
    ),
    label: "OtoLink Project",
    labelColor: "text-white",
    link: null,
  },
  {
    id: 4,
    bg: "bg-black",
    content: (
      <div className="w-full h-32 flex items-center justify-center rounded-md mb-3" style={{ backgroundColor: "#0e8fd4" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="26,4 48,46 4,46" fill="none" stroke="white" strokeWidth="4" />
            <polygon points="26,18 38,40 14,40" fill="#0e8fd4" stroke="white" strokeWidth="3" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: "1.3rem", fontWeight: "800", letterSpacing: "2px", lineHeight: 1.1 }}>ASIA BANKS</span>
            <span style={{ color: "white", fontSize: "0.55rem", letterSpacing: "1px" }}>UNIQUE BANKING SOLUTIONS</span>
          </div>
        </div>
      </div>
    ),
    label: "Asia Banks Website",
    labelColor: "text-white",
    link: null,
  },
  {
    id: 5,
    bg: "bg-gray-900",
    content: <EmployeeMockup />,
    label: "Employee Management System",
    labelColor: "text-white",
    link: "https://employee-managamentfronten-git-c80ed3-poornima-bathams-projects.vercel.app/login",
  },
  {
    id: 6,
    bg: "bg-gray-900",
    content: <ExpenseMockup />,
    label: "Expense Tracker",
    labelColor: "text-white",
    link: "https://expense-tracker-frontend-sigma-red.vercel.app/expenses",
  },
];

const Projects = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-center bg-gray-100 p-2 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 mb-6 tag-line bottom-border">
        <h1 className="text-2xl">Projects</h1>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex gap-6 carousel-track">
          {[...projectCards, ...projectCards].map((project, index) => (
            <div key={index} className={`${project.bg} min-w-[260px] sm:min-w-[300px] p-4 rounded-xl shadow-md flex-shrink-0 flex flex-col`}>
              {project.content}
              <p className={`text-sm text-center font-medium ${project.labelColor} mb-2`}>{project.label}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto text-center text-xs bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg transition-colors duration-200"
                >
                  View Live →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
