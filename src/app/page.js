
const expertise = [
  {
    number: "01",
    title: "Product Engineering",
    description:
      "Transforming business ideas into practical digital products, from initial planning and architecture to development and deployment.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Full Stack Development",
    description:
      "Building modern web applications, responsive interfaces, backend services, REST APIs, and scalable database-driven platforms.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "SaaS & Business Platforms",
    description:
      "Developing SaaS products, ERP and CRM solutions, business dashboards, and intelligent management applications.",
    icon: "▦",
  },
  {
    number: "04",
    title: "AI & Automation",
    description:
      "Exploring AI-powered applications, intelligent workflows, business automation, and emerging artificial intelligence technologies.",
    icon: "✧",
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Working with cloud platforms, application hosting, deployment pipelines, storage solutions, and production environments.",
    icon: "☁",
  },
  {
    number: "06",
    title: "Technology Strategy",
    description:
      "Connecting technology decisions with business objectives, product requirements, user experience, and long-term scalability.",
    icon: "↗",
  },
];

const technologies = [
  {
    category: "Frontend Development",
    description: "Creating modern and responsive digital experiences.",
    items: ["JavaScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    description: "Building application logic and reliable APIs.",
    items: ["Node.js", "Java", "Spring Boot", "REST APIs", "Spring Security"],
  },
  {
    category: "Database & Storage",
    description: "Managing application data and cloud storage.",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Drizzle ORM",
      "Supabase",
      "Cloudflare R2",
    ],
  },
  {
    category: "Cloud & Development Tools",
    description: "Developing, managing, and deploying applications.",
    items: ["AWS", "Vercel", "Git", "GitHub", "Docker", "Coolify"],
  },
];

const projects = [
  {
    number: "01",
    name: "BrandSync",
    category: "SaaS · Marketing Technology",
    description:
      "A business-focused SaaS platform designed to simplify digital marketing and online presence management. Its product capabilities include Google review automation, AI-assisted marketing, digital business cards, website building, brand posts, and WhatsApp automation.",
    tags: ["Next.js", "React", "PostgreSQL", "AI", "Cloud"],
    accent: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    name: "MoveMaha",
    category: "Mobility · Digital Platforms",
    description:
      "A mobility platform initiative focused on connecting administrators, business partners, and drivers through structured operations, role-based access, and digital management workflows.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Drizzle ORM"],
    accent: "from-violet-500 to-blue-400",
  },
  {
    number: "03",
    name: "Business Management Systems",
    category: "ERP · CRM · Business Automation",
    description:
      "Building business-oriented applications with administrative dashboards, employee management, task distribution, customer records, reporting, and workflow automation.",
    tags: ["React", "Next.js", "Java", "APIs", "Database"],
    accent: "from-cyan-500 to-teal-400",
  },
];

const interests = [
  "Artificial Intelligence",
  "Generative AI",
  "Large Language Models",
  "AI Agents",
  "Machine Learning",
  "Emerging Web Technologies",
  "Cloud Computing",
  "SaaS Innovation",
  "Process Automation",
  "Data Engineering",
  "Developer Tools",
  "Startup Ecosystems",
  "Software Architecture",
  "Open-Source Technology",
];

const leadership = [
  {
    title: "Vision & Direction",
    description:
      "Defining clear technology goals and creating a direction for product development and business innovation.",
  },
  {
    title: "Product Thinking",
    description:
      "Understanding customer needs, identifying real-world challenges, and developing solutions with practical value.",
  },
  {
    title: "Team Collaboration",
    description:
      "Encouraging knowledge sharing, collaboration, technical learning, and a culture of continuous improvement.",
  },
  {
    title: "Innovation & Execution",
    description:
      "Exploring new opportunities and converting promising ideas into structured and achievable development plans.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-blue-700">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">

          <a href="#home" className="flex shrink-0 items-center gap-3">
           

            <div>
              <p className="text-sm font-extrabold tracking-wide text-slate-900">
                ONKAR CHARATE
              </p>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                CEO · Oktacon Softwares
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] font-medium text-slate-600 lg:flex">
            <a href="#about" className="transition hover:text-blue-600">About</a>
            <a href="#expertise" className="transition hover:text-blue-600">Expertise</a>
            <a href="#technology" className="transition hover:text-blue-600">Technology</a>
            <a href="#projects" className="transition hover:text-blue-600">Projects</a>
            <a href="#interests" className="transition hover:text-blue-600">Interests</a>
          </nav>

          <a
            href="https://oktacon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/15 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-5 sm:text-sm"
          >
            Oktacon <ArrowIcon />
          </a>
        </div>

        <div className="overflow-x-auto border-t border-slate-100 lg:hidden">
          <nav className="flex min-w-max gap-6 px-5 py-2.5 text-xs font-medium text-slate-600 sm:px-8">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#technology">Technology</a>
            <a href="#projects">Projects</a>
            <a href="#interests">Interests</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="scroll-mt-24 relative py-6"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-100/50 blur-[100px]" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-6 sm:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">

            <div>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                <span className="text-xs font-bold tracking-wide text-blue-700">
                  CEO AT OKTACON SOFTWARES
                </span>
              </div>

              <p className="mb-3 text-lg font-medium text-slate-500">
                Hello, I'm
              </p>

              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[82px]">
                Onkar
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Charate.
                </span>
              </h1>

              <h2 className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-slate-800 sm:text-2xl">
                Technology Enthusiast. Software Engineer. Entrepreneur.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
                I am passionate about technology, software innovation, and
                building digital products that solve real-world problems.
                As the CEO of Oktacon Softwares, I focus on turning ideas into
                meaningful digital solutions through modern software
                engineering, intelligent automation, and product thinking.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Explore My Journey <span>↓</span>
                </a>

                <a
                  href="https://oktacon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-700"
                >
                  Company Website <ArrowIcon />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-slate-200 pt-6 text-[11px] font-bold uppercase tracking-[0.17em] text-slate-400">
                <span>Technology</span>
                <span className="text-blue-500">●</span>
                <span>Innovation</span>
                <span className="text-blue-500">●</span>
                <span>Entrepreneurship</span>
              </div>
            </div>

            {/* PROFILE CARD */}
            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-200/70 to-indigo-100/60 blur-2xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">

                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-700">
                    Personal Profile
                  </span>
                  <span className="text-sm font-bold text-slate-300">OC.</span>
                </div>

                <div className="mx-auto mt-7 flex h-48 w-48 items-center justify-center overflow-hidden rounded-[26px] border-4 border-blue-50 bg-slate-100 shadow-lg shadow-blue-100 sm:h-56 sm:w-56">
                  <img
                    src="oc.png"
                    alt="Onkar Charate"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-7 text-center">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Onkar Charate
                  </h3>
                  <p className="mt-2 text-sm font-medium text-blue-600">
                    CEO · Oktacon Softwares
                  </p>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                    Exploring technology, building products, and creating
                    opportunities through innovation.
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Position
                    </p>
                    <p className="mt-1.5 text-sm font-bold text-slate-800">
                      CEO
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Company
                    </p>
                    <p className="mt-1.5 text-sm font-bold text-slate-800">
                      Oktacon
                    </p>
                  </div>
                </div>

                <a
                  href="https://oktacon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
                >
                  <span>Discover Oktacon Softwares</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 border-y border-slate-200 bg-white py-6">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          <div>
            <SectionHeading
              eyebrow="01 / About Me"
              title="Driven by curiosity. Focused on creating."
              description="A journey shaped by technology, continuous learning, and the desire to build meaningful solutions."
            />

            <div className="hidden h-1 w-20 rounded-full bg-blue-600 lg:block" />
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              I am <strong className="font-bold text-slate-900">Onkar Charate</strong>,
              a technology enthusiast, software professional, and the CEO of{" "}
              <a
                href="https://oktacon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                Oktacon Softwares
              </a>.
              My interests lie at the intersection of software engineering,
              emerging technologies, product development, and business
              innovation.
            </p>

            <p>
              I enjoy understanding how technology can simplify business
              operations, improve user experiences, and create new
              opportunities. From application architecture and frontend
              development to backend engineering, databases, and deployment,
              I enjoy exploring the complete software development lifecycle.
            </p>

            <p>
              I believe that good technology starts with understanding the
              actual problem. Choosing the right tools, building reliable
              solutions, and continuously improving the product are central
              to how I approach software development.
            </p>

            <p>
              Beyond day-to-day development, I enjoy exploring artificial
              intelligence, automation, new frameworks, cloud technologies,
              and emerging ideas that may influence the future of software.
            </p>

            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/50">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                  My Approach · 01
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Think Beyond Code
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Understand people, business challenges, and practical
                  outcomes before selecting technology.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/50">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                  My Approach · 02
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Build for the Future
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Create solutions that are useful today and adaptable to
                  future business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="scroll-mt-24 py-6">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">

          <SectionHeading
            eyebrow="02 / Expertise"
            title="Where technology meets real-world solutions."
            description="My professional interests span software engineering, digital product development, modern application architecture, and technology-driven business solutions."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold tracking-widest text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="scroll-mt-24 border-y border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">

          <SectionHeading
            eyebrow="03 / Technology Stack"
            title="The technologies behind modern software."
            description="A selection of technologies, frameworks, platforms, and development tools I work with or actively explore."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {technologies.map((group, index) => (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {group.category}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-400">
            This technology list reflects areas of professional work and
            exploration; it is not intended as a certification or proficiency
            ranking.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 py-6">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">

          <SectionHeading
            eyebrow="04 / Projects & Product Initiatives"
            title="Ideas shaped into digital experiences."
            description="Selected product initiatives and business application areas that reflect my interest in solving problems through software and technology."
          />

          <div className="space-y-4">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="grid lg:grid-cols-[9px_1fr]">
                  <div className={`bg-gradient-to-b ${project.accent}`} />

                  <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[120px_1fr] lg:gap-8">
                    <div className="flex items-start justify-between lg:block">
                      <span className="text-4xl font-black tracking-tight text-blue-100">
                        {project.number}
                      </span>
                      <span className="text-xl text-slate-300 transition group-hover:text-blue-600 lg:hidden">
                        ↗
                      </span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-blue-600">
                          {project.category}
                        </p>
                        <span className="hidden text-xl text-slate-300 transition group-hover:text-blue-600 lg:block">
                          ↗
                        </span>
                      </div>

                      <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 transition group-hover:text-blue-700 sm:text-3xl">
                        {project.name}
                      </h3>

                      <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-500 sm:text-base">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-400">
            These descriptions represent selected product initiatives and
            areas of focus. They should not be interpreted as claims that
            every product is publicly launched.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="border-y border-slate-200 bg-white py-6">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">

          <div>
            <SectionHeading
              eyebrow="05 / Leadership & Entrepreneurship"
              title="Building beyond technology."
              description="Being involved in technology and entrepreneurship means looking beyond code. I am interested in product strategy, team development, customer understanding, and creating sustainable technology solutions."
            />

            <a
              href="https://oktacon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Discover Oktacon Softwares <ArrowIcon />
            </a>
          </div>

          <div className="space-y-3">
            {leadership.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-extrabold text-blue-700 shadow-sm">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section id="interests" className="scroll-mt-24 py-6">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">

          <SectionHeading
            eyebrow="06 / Interests & Future Technology"
            title="Always curious about what comes next."
            description="Technology never stands still. I enjoy following emerging innovations, experimenting with new ideas, and understanding how the next generation of technologies can shape businesses and everyday life."
          />

          <div className="flex flex-wrap gap-2.5">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {interest}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Learn",
                number: "01",
                description:
                  "Stay curious, follow technology developments, and continuously expand knowledge.",
              },
              {
                title: "Experiment",
                number: "02",
                description:
                  "Explore new tools and transform interesting ideas into prototypes and practical experiments.",
              },
              {
                title: "Innovate",
                number: "03",
                description:
                  "Find meaningful ways to apply technology to products, business operations, and user experiences.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-sm font-extrabold text-blue-200">
                    {item.number}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-7 py-14 text-center shadow-xl shadow-blue-200/60 sm:px-14 sm:py-16">

            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-50">
                Let's Connect
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Have an idea?
                <br />
                Let's build something meaningful.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-blue-100 sm:text-base">
                Interested in technology, software products, business
                innovation, or collaboration? Explore Oktacon Softwares
                and discover how technology can help turn ideas into
                practical digital solutions.
              </p>

              <a
                href="https://oktacon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Visit Oktacon Softwares <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">

          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xs font-black text-white">
              OC
            </div>
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                ONKAR CHARATE
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                CEO · Oktacon Softwares
              </p>
            </div>
          </a>

          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-500">
            <a href="#home" className="transition hover:text-blue-600">Home</a>
            <a href="#about" className="transition hover:text-blue-600">About</a>
            <a href="#projects" className="transition hover:text-blue-600">Projects</a>
            <a href="#contact" className="transition hover:text-blue-600">Contact</a>
            <a
              href="https://oktacon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-600"
            >
              Oktacon.com ↗
            </a>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Onkar Charate. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
