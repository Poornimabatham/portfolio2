import { useState } from "react";
import React from "react";
import "../index.css";
const INITIAL_COUNT = 3; // how many projects to show first
const EmployeeMockup = () => (
  <div
    className="w-full h-32 rounded-md mb-3 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #1e3a5f, #0f2027)" }}
  >
    <div
      className="flex items-center justify-between px-3 py-1"
      style={{ backgroundColor: "#1a56db" }}
    >
      <span
        style={{
          color: "white",
          fontSize: "0.6rem",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        👥 EMS Dashboard
      </span>
      <div className="flex gap-1">
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#f87171",
          }}
        ></div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#fbbf24",
          }}
        ></div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#34d399",
          }}
        ></div>
      </div>
    </div>
    <div className="flex gap-2 px-3 pt-2">
      {[
        { label: "Employees", val: "124", color: "#3b82f6" },
        { label: "Active", val: "98", color: "#10b981" },
        { label: "Leave", val: "12", color: "#f59e0b" },
      ].map((s) => (
        <div
          key={s.label}
          className="flex-1 rounded p-1 text-center"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            style={{ color: s.color, fontSize: "0.75rem", fontWeight: "800" }}
          >
            {s.val}
          </div>
          <div style={{ color: "#9ca3af", fontSize: "0.45rem" }}>{s.label}</div>
        </div>
      ))}
    </div>
    <div className="px-3 pt-2 flex flex-col gap-1">
      {["Alice Johnson", "Bob Smith"].map((name) => (
        <div key={name} className="flex items-center gap-2">
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "0.4rem", color: "white" }}>
              {name[0]}
            </span>
          </div>
          <div
            style={{
              flex: 1,
              height: 4,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          ></div>
          <div
            style={{
              width: 28,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#1a56db",
              fontSize: "0.35rem",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Active
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ExpenseMockup = () => (
  <div
    className="w-full h-32 rounded-md mb-3 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0f2027, #1a1a2e)" }}
  >
    <div
      className="flex items-center justify-between px-3 py-1"
      style={{ backgroundColor: "#7c3aed" }}
    >
      <span
        style={{
          color: "white",
          fontSize: "0.6rem",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        💰 Expense Tracker
      </span>
      <div className="flex gap-1">
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#f87171",
          }}
        ></div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#fbbf24",
          }}
        ></div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#34d399",
          }}
        ></div>
      </div>
    </div>
    <div className="flex gap-2 px-3 pt-2">
      {[
        { label: "Total", val: "₹24k", color: "#a78bfa" },
        { label: "Income", val: "₹40k", color: "#34d399" },
        { label: "Spent", val: "₹16k", color: "#f87171" },
      ].map((s) => (
        <div
          key={s.label}
          className="flex-1 rounded p-1 text-center"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            style={{ color: s.color, fontSize: "0.75rem", fontWeight: "800" }}
          >
            {s.val}
          </div>
          <div style={{ color: "#9ca3af", fontSize: "0.45rem" }}>{s.label}</div>
        </div>
      ))}
    </div>
    <div className="px-3 pt-2 flex flex-col gap-1">
      {[
        { name: "Food", pct: "70%", color: "#f87171" },
        { name: "Travel", pct: "45%", color: "#fbbf24" },
      ].map((e) => (
        <div key={e.name} className="flex items-center gap-2">
          <span style={{ color: "#9ca3af", fontSize: "0.45rem", width: 24 }}>
            {e.name}
          </span>
          <div
            style={{
              flex: 1,
              height: 5,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                width: e.pct,
                height: "100%",
                borderRadius: 4,
                backgroundColor: e.color,
              }}
            ></div>
          </div>
          <span style={{ color: "white", fontSize: "0.45rem" }}>{e.pct}</span>
        </div>
      ))}
    </div>
  </div>
);

const SocialCarouselMockup = () => (
  <div
    className="w-full h-32 rounded-md mb-3 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}
  >
    <div
      className="flex items-center justify-between px-3 py-1"
      style={{ backgroundColor: "#e1306c" }}
    >
      <span
        style={{
          color: "white",
          fontSize: "0.6rem",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        📸 Socially
      </span>
      <div className="flex gap-1">
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#f87171",
          }}
        ></div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#fbbf24",
          }}
        ></div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#34d399",
          }}
        ></div>
      </div>
    </div>
    <div className="flex gap-2 px-3 pt-2">
      {[
        { label: "Posts", val: "128", color: "#e1306c" },
        { label: "Followers", val: "4.2k", color: "#a78bfa" },
        { label: "Likes", val: "9.8k", color: "#f87171" },
      ].map((s) => (
        <div
          key={s.label}
          className="flex-1 rounded p-1 text-center"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            style={{ color: s.color, fontSize: "0.75rem", fontWeight: "800" }}
          >
            {s.val}
          </div>
          <div style={{ color: "#9ca3af", fontSize: "0.45rem" }}>{s.label}</div>
        </div>
      ))}
    </div>
    <div className="px-3 pt-2 flex gap-2">
      {["#e1306c", "#a78bfa", "#34d399", "#fbbf24"].map((color, i) => (
        <div
          key={i}
          style={{
            width: 36,
            height: 36,
            borderRadius: 6,
            backgroundColor: color,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  </div>
);

const SmartLearningMockup = () => (
  <div
    className="w-full h-32 rounded-md mb-3 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0f2027, #1a3a2e)" }}
  >
    <div
      className="flex items-center justify-between px-3 py-1"
      style={{ backgroundColor: "#16a34a" }}
    >
      <span
        style={{
          color: "white",
          fontSize: "0.6rem",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        🎓 Smart Learning
      </span>
      <div className="flex gap-1">
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#f87171",
          }}
        ></div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#fbbf24",
          }}
        ></div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#34d399",
          }}
        ></div>
      </div>
    </div>
    <div className="flex gap-2 px-3 pt-2">
      {[
        { label: "Courses", val: "24", color: "#34d399" },
        { label: "Students", val: "1.2k", color: "#60a5fa" },
        { label: "Lessons", val: "180", color: "#fbbf24" },
      ].map((s) => (
        <div
          key={s.label}
          className="flex-1 rounded p-1 text-center"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            style={{ color: s.color, fontSize: "0.75rem", fontWeight: "800" }}
          >
            {s.val}
          </div>
          <div style={{ color: "#9ca3af", fontSize: "0.45rem" }}>{s.label}</div>
        </div>
      ))}
    </div>
    <div className="px-3 pt-2 flex flex-col gap-1">
      {[
        { name: "React", pct: "85%", color: "#60a5fa" },
        { name: "Node", pct: "60%", color: "#34d399" },
      ].map((e) => (
        <div key={e.name} className="flex items-center gap-2">
          <span style={{ color: "#9ca3af", fontSize: "0.45rem", width: 24 }}>
            {e.name}
          </span>
          <div
            style={{
              flex: 1,
              height: 5,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                width: e.pct,
                height: "100%",
                borderRadius: 4,
                backgroundColor: e.color,
              }}
            ></div>
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
    title: "Attendance App",
    category: "WORKFORCE MANAGEMENT",
    description:
      "An employee attendance management application designed to simplify daily attendance tracking and employee operations.",
    features: [
      "Employee attendance management",
      "Daily attendance tracking",
      "Employee dashboard",
      "Attendance reporting",
    ],
    tech: ["Angular", "Node.js", "MySQL"],
    content: (
      <img
        src="https://newportal.ubiattendance.com/assets/img/newlogo.png"
        alt="Attendance App"
        className="project-image"
      />
    ),
    link: null,
    github: null,
  },
  {
    id: 2,
    title: "Human Resource Management",
    category: "HR MANAGEMENT",
    description:
      "A human resource management platform that helps organizations manage employee information and HR-related workflows.",
    features: [
      "Employee management",
      "Leave management",
      "HR workflows",
      "Employee records",
    ],
    tech: ["Angular", "Node.js", "MySQL"],
    content: (
      <img
        src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e4767b1a6b30def91044e5976532fd5e/ubihrm.png"
        alt="HRM Website"
        className="project-image"
      />
    ),
    link: null,
    github: null,
  },
  {
    id: 3,
    title: "OtoLink Project",
    category: "AUTOMOTIVE PLATFORM",
    description:
      "An automotive platform designed to provide digital solutions for vehicle-related business operations.",
    features: [
      "Multi-panel architecture",
      "Role-based access",
      "Business management",
      "Multiple user roles",
    ],
    tech: ["Angular", "Node.js", "TypeScript", "PostgreSQL"],
    content: (
      <div className="otolink-preview">
        <span>
          OTO<span>LINK</span>
        </span>
      </div>
    ),
    link: null,
    github: null,
  },
  {
    id: 4,
    title: "Asia Banks Website",
    category: "BANKING SOLUTION",
    description:
      "A banking solution designed to support secure financial operations and payment management.",
    features: [
      "Banking management",
      "Payment gateway integration",
      "Admin dashboard",
      "Transaction monitoring",
    ],
    tech: ["Node.js", "Express.js", "MySQL", "REST API"],
    content: (
      <div className="asia-preview">
        <span>△</span>
        <div>
          <strong>ASIA BANKS</strong>
          <small>UNIQUE BANKING SOLUTIONS</small>
        </div>
      </div>
    ),
    link: null,
    github: null,
  },
  {
    id: 5,
    title: "Employee Management System",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A full-stack employee management system that helps manage employee information, user access, and organizational activities.",
    features: [
      "Employee CRUD operations",
      "Authentication and authorization",
      "Role-based access",
      "Admin dashboard",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    content: <EmployeeMockup />,
    link: "https://employee-managamentfronten-git-c80ed3-poornima-bathams-projects.vercel.app/login",
    github: null,
  },
  {
    id: 6,
    title: "Expense Tracker",
    category: "FINANCE MANAGEMENT",
    description:
      "An expense tracking application to manage personal finances, monitor income, and understand spending patterns.",
    features: [
      "Income and expense tracking",
      "Expense categorization",
      "Financial dashboard",
      "Spending overview",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    content: <ExpenseMockup />,
    link: "https://expense-tracker-frontend-sigma-red.vercel.app/expenses",
    github: null,
  },
  {
    id: 7,
    title: "Social Carousel App",
    category: "SOCIAL MEDIA TOOL",
    description:
      "A social media carousel application designed to create engaging visual content for social platforms.",
    features: [
      "Carousel content creation",
      "Visual content management",
      "Social media layouts",
      "Interactive interface",
    ],
    tech: ["React.js", "JavaScript", "CSS"],
    content: <SocialCarouselMockup />,
    link: "https://socially-approved-carosel-frontend.vercel.app/",
    github: null,
  },
  {
    id: 8,
    title: "Smart Learning Adventure",
    category: "EDUCATION PLATFORM",
    description:
      "An interactive learning platform designed to make digital education more engaging and accessible.",
    features: [
      "Course management",
      "Learning dashboard",
      "Student progress",
      "Interactive lessons",
    ],
    tech: ["React.js", "Node.js", "JavaScript"],
    content: <SmartLearningMockup />,
    link: "https://smart-learning-adventure.onrender.com",
    github: null,
  },

  {
    id: 9,
    title: "School Management System",
    category: "EDUCATION MANAGEMENT",
    description:
      "A full-stack school management platform designed to simplify school operations, student records, teacher management, classes, attendance, and fee management.",
    features: [
      "Student and teacher management",
      "Class and attendance management",
      "Fee management dashboard",
      "Role-based authentication",
      "Student search and filtering",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    content: (
      <img
        src="images/school.png"
        alt="HRM Website"
        className="project-image"
      />
    ),
    link: "https://schoolmanagemntsystems.onrender.com/login",
    github: null,
  },
  {
    id: 10,
    title: "Razorpay Payment Integration",
    category: "PAYMENT GATEWAY",
    description:
      "A payment integration project demonstrating online payment processing using Razorpay, providing a smooth payment experience.",
    features: [
      "Razorpay payment integration",
      "Online payment processing",
      "Payment status handling",
      "Frontend and backend integration",
      "Payment verification",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Razorpay API"],
    content: (
      <img
        src="images/razorpay.png"
        alt="HRM Website"
        className="project-image"
      />
    ),
    link: "https://razorpay-frontend-dybs.onrender.com/",
    github: null,
  },
  {
    id: 11,
    title: "Mental Fatigue Detection App",
    category: "MENTAL WELLNESS",
    description:
      "A web application focused on mental fatigue assessment and providing an interactive user experience.",
    features: [
      "Interactive user interface",
      "Mental fatigue assessment",
      "User-friendly experience",
      "Fatigue-related insights",
    ],
    tech: ["React.js", "JavaScript", "CSS"],
    content: (
      <img
        src="images/mentalfatigueapp.png"
        alt="HRM Website"
        className="project-image"
      />
    ),
    link: "https://mental-fatigue-app.vercel.app/",
    github: null,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projectCards
    : projectCards.slice(0, INITIAL_COUNT);
  const handleToggle = () => {
    // When closing, scroll back to the top of the section
    if (showAll) {
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };
  return (
    <section className="projects-section" id="projects">
      <div className=" p-2 max-w-6xl mx-auto">
        <h1
          className="flex items-center
           justify-center bg-gray-100
         p-2 rounded-xl shadow-md
          hover:shadow-2xl transition-shadow duration-300
          text-2xl mb-8 tag-line bottom-border"
        >
          Projects
        </h1>
      
      </div>

      <div className="projects-list">
        {visibleProjects.map((project, index) => (
          <article
            className={`project-row ${
              index % 2 !== 0 ? "reverse-project" : ""
            }`}
            key={project.id}
          >
            {/* LEFT SIDE - PROJECT DETAILS */}
            <div className="project-details">
              <span className="project-category">{project.category}</span>

              <h2>{project.title}</h2>

              <p className="project-description">{project.description}</p>

              <h4>Key Features</h4>

              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>
                    <span>✦</span> {feature}
                  </li>
                ))}
              </ul>

              <h4>Technologies Used</h4>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn primary-btn"
                  >
                    View Live Project ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn secondary-btn"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT SIDE - PROJECT IMAGE */}
            <div className="project-visual">
              <div className="project-browser">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="browser-title">{project.title}</span>

                  <span className="browser-menu">•••</span>
                </div>

                <div className="project-preview">{project.content}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* Show the button only if there are more than 3 projects */}
      {projectCards.length > INITIAL_COUNT && (
        <div className="view-more-wrapper">
          <button className="view-more-btn text-align-center" onClick={handleToggle}>
            {showAll ? "View Less Projects" : "View More Projects"}
            <span className={`view-more-arrow ${showAll ? "up" : ""}`}>↓</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
