(function () {
  "use strict";

  const h = React.createElement;
  const page = document.body.dataset.page || "home";
  const pages = [
    ["home", "index.html", "Home"],
    ["about", "about.html", "About"],
    ["projects", "projects.html", "Projects"],
    ["skills", "skills.html", "Skills"],
    ["certificates", "certificates.html", "Certificates"],
    ["resume", "resume.html", "Resume"],
    ["contact", "contact.html", "Contact"],
  ];

  const projects = [
    {
      number: "01", title: "Exam Quiz Portal", category: "Education platform",
      description: "A complete browser-based quiz management portal for students and administrators, designed for practice, assessment and result tracking.",
      features: ["Registration & login", "Randomized timed quizzes", "Class 1-6 question sets", "Analytics & leaderboard", "PDF results & certificates", "Light and dark modes"],
      stack: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Netlify"],
      download: "downloads/exam-quiz-portal.zip", visual: "exam",
    },
    {
      number: "02", title: "Nexora Business Dashboard", category: "Business management suite",
      description: "A responsive eight-page business workspace for customers, leads, projects, tasks, activities, reports and team settings.",
      features: ["Live dashboard analytics", "Customer & lead management", "Project and task workflows", "Excel-ready CSV reports", "n8n configuration", "Responsive navigation"],
      stack: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "n8n"],
      download: "downloads/nexora-business-dashboard.zip", visual: "dashboard",
    },
    {
      number: "03", title: "Prathmesh Chat", category: "React communication application",
      description: "A responsive frontend chat experience built with React, featuring realistic conversations, account screens and persistent browser preferences.",
      features: ["Sign in & registration", "Searchable conversations", "Working message sending", "Contacts & profile pages", "Light and dark themes", "Mobile responsive chat"],
      stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite", "LocalStorage"],
      download: "downloads/prathmesh-chat-react-js.zip", visual: "chat",
    },
  ];

  function A(props) {
    return h("a", props, props.children);
  }

  function Header() {
    const [open, setOpen] = React.useState(false);
    return h("header", { className: "site-header" },
      h(A, { href: "index.html", className: "brand", "aria-label": "Prathmesh Dake home" }, h("span", null, "P"), "D"),
      h("button", { className: "menu-button", "aria-label": "Toggle navigation", "aria-expanded": open, onClick: () => setOpen(!open) },
        h("span"), h("span"), h("span")),
      h("nav", { className: open ? "site-nav open" : "site-nav", "aria-label": "Main navigation" },
        pages.map(([id, href, label]) => h(A, { key: id, href, className: page === id ? "active" : "" }, label))),
      h(A, { href: "contact.html", className: "header-cta" }, "Let's talk ", h("span", null, "↗"))
    );
  }

  function Footer() {
    return h("footer", { className: "site-footer" },
      h("div", null,
        h(A, { href: "index.html", className: "brand small" }, h("span", null, "P"), "D"),
        h("p", null, "Building thoughtful digital experiences with clean code and practical automation.")),
      h("div", { className: "footer-links" },
        h(A, { href: "projects.html" }, "Projects"),
        h(A, { href: "certificates.html" }, "Certificates"),
        h(A, { href: "resume.html" }, "Resume"),
        h(A, { href: "https://linkedin.com/in/prathmeshdake8889", target: "_blank", rel: "noreferrer" }, "LinkedIn"),
        h(A, { href: "https://github.com/prathmesh8889", target: "_blank", rel: "noreferrer" }, "GitHub"),
        h(A, { href: "mailto:prathmeshdake8889@gmail.com" }, "prathmeshdake8889@gmail.com")),
      h("p", { className: "copyright" }, "© 2026 Prathmesh Dake. All rights reserved.")
    );
  }

  function PageHero({ eyebrow, title, accent, text }) {
    return h("section", { className: "page-hero section-shell" },
      h("p", { className: "eyebrow" }, eyebrow),
      h("h1", null, title, h("br"), h("span", null, accent)),
      h("p", null, text));
  }

  function Home() {
    const highlightItems = [["03", "Featured projects"], ["12+", "Working pages built"], ["01", "Full-stack certification"]];
    const projectCards = projects.map(function (p) {
      const visualClass = p.visual === "exam" ? "exam-visual" : p.visual === "dashboard" ? "dashboard-visual" : "chat-visual";
      const visualLetter = p.visual === "exam" ? "Q" : p.visual === "dashboard" ? "N" : "C";
      return h("article", { className: "project-card", key: p.title },
        h("div", { className: "project-number" }, p.number),
        h("div", { className: "project-visual " + visualClass }, h("span", null, visualLetter), h("b", null, p.title)),
        h("p", null, p.category),
        h("h3", null, p.description),
        h(A, { href: "projects.html" }, "Explore project ", h("span", null, "→")));
    });
    return h("main", null,
      h("section", { className: "hero" },
        h("div", { className: "hero-grid", "aria-hidden": "true" }),
        h("div", { className: "hero-copy" },
          h("p", { className: "eyebrow" }, "Hello, I'm"),
          h("h1", null, "Prathmesh ", h("span", null, "Dake")),
          h("h2", null, "Frontend Developer ", h("i", null, "·"), " Java Full Stack ", h("i", null, "·"), " AI Automation"),
          h("p", { className: "hero-intro" }, "I build clean, responsive digital experiences and smart workflows that turn ideas into practical products."),
          h("div", { className: "hero-actions" },
            h(A, { href: "projects.html", className: "button primary" }, "View my work ", h("span", null, "→")),
            h(A, { href: "downloads/prathmesh-dake-resume-2026.pdf", className: "button secondary", target: "_blank" }, "View resume ", h("span", null, "↗"))),
          h("div", { className: "availability" }, h("span"), " Available for new opportunities"),
          h("div", { className: "hero-socials" },
            h(A, { href: "mailto:prathmeshdake8889@gmail.com" }, "Gmail"),
            h(A, { href: "https://linkedin.com/in/prathmeshdake8889", target: "_blank" }, "LinkedIn"),
            h(A, { href: "https://github.com/prathmesh8889", target: "_blank" }, "GitHub"))),
        h("div", { className: "portrait-wrap" },
          h("div", { className: "portrait-orbit orbit-one" }),
          h("div", { className: "portrait-orbit orbit-two" }),
          h("div", { className: "portrait-glow" }),
          h("img", { src: "assets/prathmesh-dake.jpeg", alt: "Prathmesh Dake in professional business attire", width: "1000", height: "1100" }),
          h("div", { className: "portrait-tag" }, h("span", null, "PD"), " Based in India"))),
      h("section", { className: "home-highlights" },
        highlightItems.map(function (item) {
          return h("article", { key: item[1] }, h("strong", null, item[0]), h("span", null, item[1]));
        })),
      h("section", { className: "home-feature section-shell" },
        h("div", { className: "section-heading" },
          h("p", { className: "eyebrow" }, "Selected work"),
          h("h2", null, "Digital products built to ", h("span", null, "work."))),
        h("div", { className: "featured-grid" }, projectCards)),
      h("section", { className: "cta-band section-shell" },
        h("p", { className: "eyebrow" }, "Have a project in mind?"),
        h("h2", null, "Let's build something ", h("span", null, "remarkable.")),
        h(A, { href: "contact.html", className: "button primary" }, "Start a conversation ↗")));
  }

  function About() {
    return h("main", { className: "inner-page" },
      h(PageHero, { eyebrow: "About me", title: "Curious by nature.", accent: "Practical by design.", text: "I enjoy turning real requirements into clear, responsive and useful web experiences." }),
      h("section", { className: "about-grid section-shell" },
        h("div", { className: "about-photo" }, h("img", { src: "assets/prathmesh-dake.jpeg", alt: "Portrait of Prathmesh Dake" }), h("span", { className: "photo-index" }, "01 / PROFILE")),
        h("div", { className: "about-copy" },
          h("p", { className: "lead" }, "I'm Prathmesh Pravin Dake, a frontend developer and Java Full Stack certified learner based in Pune, India."),
          h("p", null, "My work focuses on responsive interfaces, useful interactions and organized code. I build with HTML, CSS, JavaScript and React, while expanding my knowledge of Java full-stack development and AI automation."),
          h("div", { className: "principles" },
            [["01", "Clarity first", "Interfaces should explain themselves."], ["02", "Built responsive", "Every experience should work across screens."], ["03", "Keep improving", "Each project is a chance to learn."]].map(x =>
              h("article", { key: x[0] }, h("span", null, x[0]), h("h3", null, x[1]), h("p", null, x[2])))),
          h(A, { href: "contact.html", className: "text-link" }, "Work with me →"))));
  }

  function Projects() {
    return h("main", { className: "inner-page" },
      h(PageHero, { eyebrow: "Selected projects", title: "Ideas shaped into", accent: "working products.", text: "Three detailed frontend builds focused on real workflows, responsive design and practical user experiences." }),
      h("section", { className: "projects-list section-shell" }, projects.map(p =>
        h("article", { className: "project-detail", key: p.title },
          h("div", { className: "detail-visual " + p.visual }, h("span", { className: "detail-number" }, p.number),
            h("div", { className: "screen-mockup" }, h("div", { className: "screen-bar" }, h("i"), h("i"), h("i")), h("div", { className: "screen-content" }, h("b", null, p.title), h("span"), h("span"), h("span")))),
          h("div", { className: "detail-copy" }, h("p", { className: "project-category" }, p.category), h("h2", null, p.title), h("p", null, p.description),
            h("h3", null, "Key features"), h("ul", null, p.features.map(f => h("li", { key: f }, f))),
            h("div", { className: "tech-row" }, p.stack.map(s => h("span", { key: s }, s))),
            h(A, { href: p.download, className: "button primary", download: true }, "Download project ↓"))))));
  }

  const skillGroups = [
    ["01", "Frontend", [["HTML5", 92], ["CSS3", 88], ["JavaScript", 84], ["React.js", 80]]],
    ["02", "Full Stack", [["Java", 76], ["Spring Boot", 68], ["MySQL", 72], ["Git & GitHub", 78]]],
    ["03", "Workflow", [["Responsive Design", 90], ["Netlify", 84], ["n8n Automation", 70], ["AI Automation", 72]]],
  ];

  function Skills() {
    const groups = skillGroups.map(function (group) {
      const rows = group[2].map(function (skill) {
        return h("div", { className: "skill-item", key: skill[0] },
          h("div", null, h("strong", null, skill[0]), h("span", null, skill[1] + "%")),
          h("div", { className: "skill-track" }, h("i", { style: { width: skill[1] + "%" } })));
      });
      return h("article", { className: "skill-group", key: group[1] },
        h("span", { className: "skill-index" }, group[0]),
        h("h2", null, group[1]),
        h("div", { className: "skill-list" }, rows));
    });
    return h("main", { className: "inner-page" },
      h(PageHero, { eyebrow: "Capabilities", title: "Tools I use to turn", accent: "ideas into interfaces.", text: "A practical toolkit covering frontend development, Java full-stack foundations, deployment and automation." }),
      h("section", { className: "skills-grid section-shell" }, groups),
      h("section", { className: "learning-band section-shell" }, h("p", { className: "eyebrow" }, "Currently growing"), h("h2", null, "Java full-stack development and smarter AI automation workflows.")));
  }

  function Certificates() {
    return h("main", { className: "inner-page" },
      h(PageHero, { eyebrow: "Credentials", title: "Learning verified.", accent: "Progress documented.", text: "Professional learning that strengthens my ability to build complete web solutions." }),
      h("section", { className: "certificate-wrap section-shell" },
        h("div", { className: "certificate-preview" }, h("div", { className: "certificate-brand" }, "Spoken Tutorial", h("small", null, "developed at IIT Bombay")), h("p", null, "CERTIFICATE"), h("h2", null, "OF ACHIEVEMENT"), h("span", null, "This is to certify that"), h("h3", null, "Prathmesh Pravin Dake"), h("strong", null, "JAVA FULL STACK")),
        h("div", { className: "certificate-copy" }, h("p", { className: "eyebrow" }, "Certificate 01"), h("h2", null, "Java Full Stack"), h("p", null, "Certificate of Achievement issued by SevenMentor for completion of the Java Full Stack course."),
          h("dl", null, [["Credential holder", "Prathmesh Pravin Dake"], ["Issue date", "May 26, 2026"], ["Credential ID", "Prat1456"], ["Organization", "SevenMentor"]].map(x => h("div", { key: x[0] }, h("dt", null, x[0]), h("dd", null, x[1])))),
          h(A, { className: "button primary", href: "downloads/prathmesh-dake-java-full-stack-certificate.pdf", target: "_blank" }, "View certificate ↗"),
          h(A, { className: "button secondary", href: "downloads/prathmesh-dake-java-full-stack-certificate.pdf", download: true }, "Download PDF ↓"))));
  }

  function Resume() {
    const tags = ["Java", "JavaScript", "HTML5", "CSS3", "Bootstrap", "React.js", "Spring Boot", "JDBC", "Servlets", "MySQL", "Git & GitHub"];
    return h("main", { className: "inner-page" },
      h("section", { className: "page-hero section-shell" }, h("p", { className: "eyebrow" }, "Professional resume"), h("h1", null, "Experience, education", h("br"), h("span", null, "& technical strengths.")), h("p", null, "Aspiring Frontend and Full-Stack Java Developer with hands-on experience building responsive applications."),
        h("div", { className: "resume-actions" }, h(A, { className: "button primary", href: "downloads/prathmesh-dake-resume-2026.pdf", target: "_blank" }, "View PDF ↗"), h(A, { className: "button secondary", href: "downloads/prathmesh-dake-resume-2026.pdf", download: true }, "Download resume ↓"))),
      h("section", { className: "resume-grid section-shell" },
        h("aside", { className: "resume-sidebar" },
          h("article", null, h("p", { className: "eyebrow" }, "Contact"), h(A, { href: "mailto:prathmeshdake8889@gmail.com" }, "prathmeshdake8889@gmail.com"), h(A, { href: "tel:+919011251456" }, "+91 9011251456"), h("span", null, "Pune, Maharashtra, India")),
          h("article", null, h("p", { className: "eyebrow" }, "Profiles"), h(A, { href: "https://linkedin.com/in/prathmeshdake8889", target: "_blank" }, "LinkedIn ↗"), h(A, { href: "https://github.com/prathmesh8889", target: "_blank" }, "GitHub ↗")),
          h("article", null, h("p", { className: "eyebrow" }, "Technical toolkit"), h("div", { className: "resume-tags" }, tags.map(t => h("span", { key: t }, t))))),
        h("div", { className: "resume-content" },
          h("article", null, h("span", { className: "resume-index" }, "01"), h("div", null, h("p", { className: "eyebrow" }, "Education"), h("h2", null, "Bachelor of Computer Applications"), h("p", null, "Gopikabai Sitaram Gawande College, Umarkhed"), h("p", null, "Sant Gadge Baba Amravati University · Expected graduation 2025"))),
          h("article", null, h("span", { className: "resume-index" }, "02"), h("div", null, h("p", { className: "eyebrow" }, "Strengths"), h("h2", null, "Problem solving · Team collaboration · Communication"), h("p", null, "Quick learning and time management support a dependable approach to development work."))))));
  }

  function Contact() {
    const [sent, setSent] = React.useState(false);
    function submit(e) {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      location.href = "mailto:prathmeshdake8889@gmail.com?subject=" + encodeURIComponent("Portfolio enquiry from " + data.get("name")) + "&body=" + encodeURIComponent("Name: " + data.get("name") + "\nEmail: " + data.get("email") + "\n\n" + data.get("message"));
      setSent(true);
    }
    return h("main", { className: "inner-page" },
      h(PageHero, { eyebrow: "Contact", title: "Let's create something", accent: "useful together.", text: "Have an opportunity, project or idea? Send a message and let's start the conversation." }),
      h("section", { className: "contact-grid section-shell" },
        h("div", { className: "contact-details" }, h("p", { className: "eyebrow" }, "Get in touch"), h("h2", null, "I'm available for frontend projects and entry-level development opportunities."), h(A, { href: "mailto:prathmeshdake8889@gmail.com" }, "prathmeshdake8889@gmail.com ↗"),
          h("div", { className: "social-buttons" }, h(A, { href: "https://linkedin.com/in/prathmeshdake8889", target: "_blank" }, "LinkedIn ↗"), h(A, { href: "https://github.com/prathmesh8889", target: "_blank" }, "GitHub ↗"), h(A, { href: "downloads/prathmesh-dake-resume-2026.pdf", target: "_blank" }, "Resume ↗"))),
        h("form", { className: "contact-form", onSubmit: submit },
          h("label", null, "Name", h("input", { name: "name", required: true, placeholder: "Your name" })),
          h("label", null, "Email", h("input", { name: "email", type: "email", required: true, placeholder: "you@example.com" })),
          h("label", null, "Message", h("textarea", { name: "message", rows: 6, required: true, placeholder: "Tell me about your project or opportunity..." })),
          h("button", { className: "button primary", type: "submit" }, "Send message →"),
          sent && h("p", { className: "form-note" }, "Your email app is opening with this message ready to send."))));
  }

  const components = { home: Home, about: About, projects: Projects, skills: Skills, certificates: Certificates, resume: Resume, contact: Contact };
  function App() {
    const Content = components[page] || Home;
    return h(React.Fragment, null, h(Header), h(Content), h(Footer));
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
}());
