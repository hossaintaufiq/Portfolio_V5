export type Glyph =
  | "globe"
  | "users"
  | "image"
  | "zap"
  | "calendar"
  | "mail"
  | "card"
  | "shield"
  | "building"
  | "key"
  | "package"
  | "factory"
  | "receipt"
  | "chart"
  | "template"
  | "sparkles"
  | "mic"
  | "volume"
  | "audio"
  | "book"
  | "terminal"
  | "landmark"
  | "database"
  | "layers";

export type ArchZone = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  /** The outermost boundary, drawn lighter and behind the others. */
  outer?: boolean;
};

export type ArchNode = {
  id: string;
  x: number;
  y: number;
  title: string;
  sub?: string;
  /** Technology name resolved to a brand logo. */
  icon?: string;
  /** Fallback glyph for parts that are not a brand. */
  glyph?: Glyph;
  /** Shown when the node is selected. */
  desc: string;
  w?: number;
  h?: number;
};

export type ArchEdge = {
  from: string;
  to: string;
  d: string;
  label?: { x: number; y: number; text: string };
  /** Dashed supporting link: configuration or storage, with no moving data. */
  quiet?: boolean;
  /** Set false on edges that merge into another edge's arrowhead. */
  arrow?: boolean;
};

export type Architecture = {
  label: string;
  caption: string;
  viewBox: string;
  zones: ArchZone[];
  nodes: ArchNode[];
  edges: ArchEdge[];
};

export const NODE_W = 156;
export const NODE_H = 54;

// Column x positions shared by all three sketches.
const C1 = 20;
const C2 = 208;
const C3 = 396;
const C4 = 584;
const C5 = 772;
const C6 = 960;

export const ARCHITECTURES: Record<string, Architecture> = {
  /* ------------------------------------------------------------------ */
  "softlligence-cloud": {
    label:
      "Architecture of the Softlligence Manufacturing Cloud. Four Next.js apps, for steel mills, garments, inventory and local businesses, all call one Express API on AWS. Each request passes a tenant resolver, authentication and an RBAC guard, then reaches the inventory, manufacturing, commercial and reporting modules. Module reads go through a Redis cache before Prisma and a tenant-isolated PostgreSQL database. Files and exports are stored in Cloudflare R2 object storage. Industry templates configure the modules, and an AI layer is ready to receive data from reporting.",
    caption:
      "Four apps, one backend. Every request is scoped to a tenant and checked against a role before any module runs, reads are served from Redis, and files live in Cloudflare R2. Hover a part to see what it does.",
    viewBox: "0 0 980 540",
    zones: [
      { x: 188, y: 20, w: 762, h: 400, label: "Hosted on AWS", outer: true },
      { x: C1 - 10, y: 56, w: 176, h: 336, label: "Next.js apps" },
      { x: C2 - 10, y: 56, w: 176, h: 336, label: "API and security" },
      { x: C3 - 10, y: 56, w: 176, h: 336, label: "Domain modules" },
      { x: C4 - 10, y: 56, w: 176, h: 336, label: "Platform services" },
      { x: C5 - 10, y: 132, w: 176, h: 182, label: "Data layer" },
      { x: C5 - 10, y: 436, w: 176, h: 84, label: "Cloudflare" },
    ],
    nodes: [
      { id: "steel", x: C1, y: 88, title: "Steel mill", sub: "Next.js app", icon: "Next.js", desc: "The steel mill app. Its own interface and workflows, served by the shared backend." },
      { id: "garments", x: C1, y: 168, title: "Garments", sub: "Next.js app", icon: "Next.js", desc: "The garments app, built for production floors and merchandising teams." },
      { id: "invapp", x: C1, y: 248, title: "Inventory", sub: "Next.js app", icon: "Next.js", desc: "The inventory app for stock, locations and movements." },
      { id: "local", x: C1, y: 328, title: "Local business", sub: "Next.js app", icon: "Next.js", desc: "The fourth app, for local businesses. Users see only the modules their role allows." },
      { id: "api", x: C2, y: 88, title: "Express API", sub: "Node.js, TypeScript", icon: "Express", desc: "One typed API serves all four apps and every tenant, so rules live in one place." },
      { id: "tenant", x: C2, y: 168, title: "Tenant resolver", sub: "Scopes every request", glyph: "building", desc: "Works out which tenant a request belongs to and scopes everything after it to that tenant." },
      { id: "auth", x: C2, y: 248, title: "Authentication", sub: "Sign-in and sessions", glyph: "key", desc: "Verifies who is calling before any business logic runs." },
      { id: "rbac", x: C2, y: 328, title: "RBAC guard", sub: "Permissions per role", glyph: "shield", desc: "Checks the caller's role against the action. Access is denied by default." },
      { id: "inv", x: C3, y: 88, title: "Inventory", sub: "Stock and movements", glyph: "package", desc: "Tracks materials and finished goods across locations." },
      { id: "mfg", x: C3, y: 168, title: "Manufacturing", sub: "Production runs", glyph: "factory", desc: "Plans and records production for each industry sector the tenant works in." },
      { id: "com", x: C3, y: 248, title: "Commercial", sub: "Sales and purchasing", glyph: "receipt", desc: "Handles the commercial side of operations: orders, purchasing and billing." },
      { id: "rep", x: C3, y: 328, title: "Reporting", sub: "Dashboards, exports", glyph: "chart", desc: "Turns operational data into dashboards and exports for managers." },
      { id: "tpl", x: C4, y: 88, title: "Templates", sub: "Reusable per sector", glyph: "template", desc: "A reusable industry-template framework. A new manufacturing sector is configuration, not a rebuild." },
      { id: "cache", x: C4, y: 168, title: "Redis cache", sub: "Read-through caching", icon: "Redis", desc: "Hot reads such as dashboards and lookups are served from memory, keyed per tenant. Only a miss reaches the database." },
      { id: "ai", x: C4, y: 328, title: "AI layer", sub: "Ready for models", glyph: "sparkles", desc: "Reporting data is structured so models can be added without reworking the platform." },
      { id: "orm", x: C5, y: 168, title: "Prisma ORM", sub: "Typed queries", icon: "Prisma", desc: "Typed queries mean a schema change shows up as a compile error, not a production bug." },
      { id: "db", x: C5, y: 248, title: "PostgreSQL", sub: "Tenant-isolated", icon: "PostgreSQL", desc: "One database with strict tenant isolation, so one customer's data can never appear in another's." },
      { id: "r2", x: C5, y: 458, title: "Object storage", sub: "Cloudflare R2", icon: "Cloudflare", desc: "Documents, attachments and exported reports are stored as objects in Cloudflare R2, away from the database." },
    ],
    edges: [
      { from: "steel", to: "api", d: "M176 115 H208" },
      { from: "garments", to: "api", d: "M176 195 H192 V115 H208", arrow: false },
      { from: "invapp", to: "api", d: "M176 275 H192 V115 H208", arrow: false },
      { from: "local", to: "api", d: "M176 355 H192 V115 H208", arrow: false },
      { from: "api", to: "tenant", d: "M286 142 V168" },
      { from: "tenant", to: "auth", d: "M286 222 V248" },
      { from: "auth", to: "rbac", d: "M286 302 V328" },
      { from: "rbac", to: "inv", d: "M364 355 H380 V115 H396", arrow: false },
      { from: "rbac", to: "mfg", d: "M364 355 H380 V195 H396", arrow: false },
      { from: "rbac", to: "com", d: "M364 355 H380 V275 H396", arrow: false },
      { from: "rbac", to: "rep", d: "M364 355 H396" },
      { from: "inv", to: "cache", d: "M552 115 H568 V195", arrow: false },
      { from: "com", to: "cache", d: "M552 275 H568 V195", arrow: false },
      { from: "rep", to: "cache", d: "M552 355 H568 V195", arrow: false },
      { from: "mfg", to: "cache", d: "M552 195 H584" },
      { from: "cache", to: "orm", d: "M740 195 H772" },
      { from: "orm", to: "db", d: "M850 222 V248", label: { x: 858, y: 240, text: "SQL" } },
      { from: "rep", to: "r2", d: "M568 355 V485 H772", label: { x: 640, y: 477, text: "files" } },
      { from: "tpl", to: "mfg", d: "M700 88 V46 H500 V88", quiet: true, label: { x: 560, y: 40, text: "configures" } },
      { from: "rep", to: "ai", d: "M474 382 V404 H662 V382", quiet: true, label: { x: 520, y: 398, text: "feeds" } },
    ],
  },

  /* ------------------------------------------------------------------ */
  "shorborno-cloud": {
    label:
      "High-level system design of Shorborno Cloud, a multi-tenant school management SaaS. Visitors and school users reach Cloudflare, which provides the CDN, DNS and security and serves files from R2 object storage. Behind it, on AWS, a Laravel website and a Laravel school application send requests to an API gateway. A tenant resolver scopes each request to one school, and an identity and RBAC service checks the role. Requests then reach five microservices: academics, attendance, fees and payments, reports and notifications. The services share a relational database scoped by school, and notifications use cache and queues.",
    caption:
      "Cloudflare filters and caches at the edge. On AWS, every request is scoped to one school and checked against a role before any microservice runs. Hover a part to see what it does.",
    viewBox: "0 0 1150 510",
    zones: [
      { x: C3 - 18, y: 20, w: 752, h: 470, label: "Hosted on AWS", outer: true },
      { x: C1 - 10, y: 56, w: 176, h: 246, label: "People" },
      { x: C2 - 10, y: 132, w: 176, h: 340, label: "Cloudflare" },
      { x: C3 - 10, y: 56, w: 176, h: 256, label: "Laravel apps (PHP)" },
      { x: C4 - 10, y: 56, w: 176, h: 256, label: "Gateway and security" },
      { x: C5 - 10, y: 56, w: 176, h: 416, label: "Microservices" },
      { x: C6 - 10, y: 216, w: 176, h: 260, label: "Data layer" },
    ],
    nodes: [
      { id: "visitors", x: C1, y: 88, title: "Visitors", sub: "Prospective schools", glyph: "globe", desc: "Schools and parents learning about the product on the public website." },
      { id: "users", x: C1, y: 248, title: "School users", sub: "Admin, teacher, parent", glyph: "users", desc: "The people who run a school day to day. Each one sees only what their role allows." },
      { id: "edge", x: C2, y: 168, title: "Edge network", sub: "CDN, DNS, security", icon: "Cloudflare", desc: "Cloudflare sits in front of everything. It serves cached assets from the edge and filters bad traffic before it reaches AWS." },
      { id: "r2", x: C2, y: 408, title: "Object storage", sub: "Cloudflare R2", icon: "Cloudflare", desc: "Uploaded files and generated documents live in R2, away from the database and close to the CDN." },
      { id: "site", x: C3, y: 88, title: "Website", sub: "Laravel, PHP", icon: "Laravel", desc: "The public product website, built with Laravel." },
      { id: "app", x: C3, y: 248, title: "School app", sub: "Laravel, PHP", icon: "Laravel", desc: "The school application, built with Laravel. Every school signs in here and works inside its own tenant." },
      { id: "gw", x: C4, y: 88, title: "API gateway", sub: "Single entry point", glyph: "zap", desc: "One entry point for the platform. It routes each request to the right microservice." },
      { id: "tenant", x: C4, y: 168, title: "Tenant resolver", sub: "Scopes to one school", glyph: "building", desc: "Works out which school a request belongs to and scopes everything after it to that school." },
      { id: "rbac", x: C4, y: 248, title: "Identity and RBAC", sub: "Roles per school", glyph: "shield", desc: "Verifies who is calling, then checks their role against the action. Roles such as admin, teacher and parent decide what is allowed. Denied by default." },
      { id: "acad", x: C5, y: 88, title: "Academics", sub: "Students, results", glyph: "book", desc: "Students, classes, subjects and results for each school." },
      { id: "att", x: C5, y: 168, title: "Attendance", sub: "Daily records", glyph: "calendar", desc: "Daily attendance records for students and staff." },
      { id: "fees", x: C5, y: 248, title: "Fees and payments", sub: "Invoices, collection", glyph: "card", desc: "Fee structures, invoices and collection." },
      { id: "rep", x: C5, y: 328, title: "Reports", sub: "Dashboards, exports", glyph: "chart", desc: "Dashboards and exports for school leaders." },
      { id: "notif", x: C5, y: 408, title: "Notifications", sub: "SMS, email, notices", glyph: "mail", desc: "Sends messages and notices to staff and parents. Slow sends run on a queue so they never block a request." },
      { id: "db", x: C6, y: 248, title: "Relational database", sub: "Amazon RDS", glyph: "database", desc: "One database where every record is scoped to a school, so one school can never see another's data." },
      { id: "queue", x: C6, y: 408, title: "Cache and queues", sub: "Fast reads, async work", glyph: "layers", desc: "Caching for hot reads and queues for slow work, so the platform stays fast under load." },
    ],
    edges: [
      { from: "visitors", to: "edge", d: "M176 115 H192 V195 H208" },
      { from: "users", to: "edge", d: "M176 275 H192 V195 H208", arrow: false },
      { from: "edge", to: "site", d: "M364 195 H380 V115 H396" },
      { from: "edge", to: "app", d: "M364 195 H380 V275 H396", arrow: false },
      { from: "edge", to: "r2", d: "M286 222 V408", quiet: true, label: { x: 294, y: 320, text: "serves files" } },
      { from: "app", to: "r2", d: "M474 302 V435 H364", label: { x: 388, y: 427, text: "uploads" } },
      { from: "app", to: "gw", d: "M552 275 H568 V115 H584" },
      { from: "gw", to: "tenant", d: "M662 142 V168" },
      { from: "tenant", to: "rbac", d: "M662 222 V248" },
      { from: "rbac", to: "acad", d: "M740 275 H756 V115 H772", arrow: false },
      { from: "rbac", to: "att", d: "M740 275 H756 V195 H772", arrow: false },
      { from: "rbac", to: "fees", d: "M740 275 H772" },
      { from: "rbac", to: "rep", d: "M740 275 H756 V355 H772", arrow: false },
      { from: "rbac", to: "notif", d: "M740 275 H756 V435 H772", arrow: false },
      { from: "acad", to: "db", d: "M928 115 H944 V275", arrow: false },
      { from: "att", to: "db", d: "M928 195 H944 V275", arrow: false },
      { from: "rep", to: "db", d: "M928 355 H944 V275", arrow: false },
      { from: "fees", to: "db", d: "M928 275 H960" },
      { from: "notif", to: "queue", d: "M928 435 H960" },
    ],
  },

  /* ------------------------------------------------------------------ */
  "kia-bangladesh": {
    label:
      "Architecture of the Kia Bangladesh website. 3D models authored in Blender are stored in Cloudflare R2. A visitor reaches a Next.js site on Vercel through the Cloudflare CDN. The site renders a Three.js 3D showroom, animated with GSAP and Framer Motion, loading models from R2, and calls an Express API backed by PostgreSQL.",
    caption:
      "Models are authored in Blender, stored in R2 and delivered through the CDN, so the 3D scene loads fast. The site talks to one Express API. Hover a part to see what it does.",
    viewBox: "0 0 980 330",
    zones: [
      { x: C1 - 10, y: 56, w: 176, h: 86, label: "People" },
      { x: C1 - 10, y: 216, w: 176, h: 86, label: "Authoring" },
      { x: C2 - 10, y: 56, w: 176, h: 256, label: "Cloudflare" },
      { x: C3 - 10, y: 56, w: 176, h: 256, label: "Next.js on Vercel" },
      { x: C4 - 10, y: 132, w: 176, h: 118, label: "Backend" },
      { x: C5 - 10, y: 132, w: 176, h: 118, label: "Data" },
    ],
    nodes: [
      { id: "visitor", x: C1, y: 88, title: "Visitor", sub: "Browser or phone", glyph: "globe", desc: "Someone exploring the lineup, choosing a colour and turning the car around." },
      { id: "blender", x: C1, y: 248, title: "Blender", sub: "Models authored", icon: "Blender", desc: "The car models and textures are built and optimised in Blender, then exported for the web." },
      { id: "cdn", x: C2, y: 88, title: "Cloudflare CDN", sub: "Fast delivery", icon: "Cloudflare", desc: "Serves the site and the heavy 3D files from an edge close to the visitor." },
      { id: "r2", x: C2, y: 248, title: "R2 storage", sub: "Models, textures", icon: "Cloudflare", desc: "Object storage for the 3D models and textures, kept out of the app bundle." },
      { id: "site", x: C3, y: 88, title: "Next.js site", sub: "Tailwind CSS", icon: "Next.js", desc: "Renders the pages and hosts the interactive scene." },
      { id: "scene", x: C3, y: 168, title: "3D showroom", sub: "Three.js scene", icon: "Three.js", desc: "Loads the models and lets the visitor rotate and inspect each car in real time." },
      { id: "motion", x: C3, y: 248, title: "Animation", sub: "GSAP, Framer Motion", icon: "GSAP", desc: "Choreographs the scroll, transitions and camera moves so the page feels cinematic." },
      { id: "api", x: C4, y: 168, title: "Express API", sub: "Node.js", icon: "Express", desc: "One API behind the site for the data the showroom needs." },
      { id: "db", x: C5, y: 168, title: "PostgreSQL", sub: "Records", icon: "PostgreSQL", desc: "The single source of truth for the site's data." },
    ],
    edges: [
      { from: "visitor", to: "cdn", d: "M176 115 H208" },
      { from: "cdn", to: "site", d: "M364 115 H396" },
      { from: "site", to: "scene", d: "M474 142 V168" },
      { from: "scene", to: "motion", d: "M474 222 V248" },
      { from: "blender", to: "r2", d: "M176 275 H208" },
      { from: "r2", to: "scene", d: "M364 275 H380 V195 H396" },
      { from: "cdn", to: "r2", d: "M286 142 V248", quiet: true, label: { x: 294, y: 200, text: "caches" } },
      { from: "site", to: "api", d: "M552 115 H568 V195 H584" },
      { from: "api", to: "db", d: "M740 195 H772" },
    ],
  },

  /* ------------------------------------------------------------------ */
  "playpen-school": {
    label:
      "Architecture of the Playpen School platform. Parents use a Next.js public website and school staff use a CMS dashboard. Both call one role-based Express API, which runs the admissions, live updates and payments workflows. Everything is stored in PostgreSQL, and tuition payments go to an external payment gateway. Everything except the gateway is hosted on AWS.",
    caption:
      "Staff publish from the CMS and the site updates live. Admissions and tuition payments run through one role-aware API. Hover a part to see what it does.",
    viewBox: "0 0 980 480",
    zones: [
      { x: 188, y: 20, w: 762, h: 330, label: "Hosted on AWS", outer: true },
      { x: C1 - 10, y: 56, w: 176, h: 240, label: "People" },
      { x: C2 - 10, y: 56, w: 176, h: 240, label: "Web apps" },
      { x: C3 - 10, y: 132, w: 176, h: 118, label: "API" },
      { x: C4 - 10, y: 56, w: 176, h: 256, label: "Workflows" },
      { x: C5 - 10, y: 96, w: 176, h: 118, label: "Data" },
      { x: C5 - 10, y: 364, w: 176, h: 96, label: "External service" },
    ],
    nodes: [
      { id: "parents", x: C1, y: 88, title: "Parents", sub: "Browser or phone", glyph: "users", desc: "Parents browse the school, apply for admission, pay tuition and follow events." },
      { id: "staff", x: C1, y: 208, title: "School staff", sub: "Admin and editors", glyph: "building", desc: "Teachers and administrators run the school's content and records without a developer." },
      { id: "site", x: C2, y: 88, title: "Public website", sub: "Next.js, custom design", icon: "Next.js", desc: "The parent-facing site, built around a detailed custom design and reusable components." },
      { id: "cms", x: C2, y: 208, title: "CMS dashboard", sub: "Content, fees, events", glyph: "template", desc: "Staff edit pages, notices, events and fee details here. What they publish goes live on the site." },
      { id: "api", x: C3, y: 168, title: "Role-based API", sub: "Express, TypeScript", icon: "Express", desc: "One API for the site and the CMS. What you can do depends on your role." },
      { id: "adm", x: C4, y: 88, title: "Admissions", sub: "Online applications", glyph: "book", desc: "Takes a family from enquiry to a submitted application, and gives staff a queue to review." },
      { id: "live", x: C4, y: 168, title: "Live updates", sub: "Publish from CMS", glyph: "zap", desc: "Changes published in the CMS appear on the public site without a redeploy." },
      { id: "pay", x: C4, y: 248, title: "Payments", sub: "Tuition and status", glyph: "card", desc: "Starts a tuition payment, then records the result against the student's account." },
      { id: "db", x: C5, y: 128, title: "PostgreSQL", sub: "Records and content", icon: "PostgreSQL", desc: "The single source of truth for applications, content, events and payment status." },
      { id: "gw", x: C5, y: 396, title: "Payment gateway", sub: "External service", glyph: "landmark", desc: "Card and mobile payment details never touch our servers. The gateway handles them and reports back." },
    ],
    edges: [
      { from: "parents", to: "site", d: "M176 115 H208" },
      { from: "staff", to: "cms", d: "M176 235 H208" },
      { from: "site", to: "api", d: "M364 115 H380 V195 H396" },
      { from: "cms", to: "api", d: "M364 235 H380 V195 H396", arrow: false },
      { from: "api", to: "adm", d: "M552 195 H568 V115 H584", arrow: false },
      { from: "api", to: "live", d: "M552 195 H584" },
      { from: "api", to: "pay", d: "M552 195 H568 V275 H584", arrow: false },
      { from: "adm", to: "db", d: "M740 115 H756 V155 H772", arrow: false },
      { from: "live", to: "db", d: "M740 195 H756 V155 H772", arrow: false },
      { from: "pay", to: "db", d: "M740 275 H756 V155 H772" },
      { from: "pay", to: "gw", d: "M662 302 V419 H772", label: { x: 676, y: 412, text: "charge" } },
    ],
  },

  /* ------------------------------------------------------------------ */
  "mango-ev": {
    label:
      "Architecture of the Mango Electric Vehicle website. Visitors and staff reach a server-rendered Next.js site with an image pipeline and caching. Pages call a role-based Express API, which runs reservation, inquiry and payment workflows. Reservations and inquiries are stored in PostgreSQL, and payments go to an external payment gateway. Everything except the gateway is hosted on AWS.",
    caption:
      "Pages render on the server for speed and search. Every reservation, inquiry and payment goes through one role-aware API. Hover a part to see what it does.",
    viewBox: "0 0 980 480",
    zones: [
      { x: 188, y: 20, w: 762, h: 330, label: "Hosted on AWS", outer: true },
      { x: C1 - 10, y: 56, w: 176, h: 240, label: "People" },
      { x: C2 - 10, y: 56, w: 176, h: 256, label: "Website" },
      { x: C3 - 10, y: 132, w: 176, h: 118, label: "API" },
      { x: C4 - 10, y: 56, w: 176, h: 256, label: "Workflows" },
      { x: C5 - 10, y: 96, w: 176, h: 118, label: "Data" },
      { x: C5 - 10, y: 364, w: 176, h: 96, label: "External service" },
    ],
    nodes: [
      { id: "visitor", x: C1, y: 88, title: "Visitor", sub: "Browser or phone", glyph: "globe", desc: "Prospective buyers browse models, book a reservation or send an inquiry." },
      { id: "staff", x: C1, y: 208, title: "Staff", sub: "Internal roles", glyph: "users", desc: "The sales and operations team manage reservations and inquiries from the same system." },
      { id: "pages", x: C2, y: 88, title: "Server rendering", sub: "Next.js, SEO", icon: "Next.js", desc: "Pages are rendered on the server, which keeps them fast and readable to search engines." },
      { id: "images", x: C2, y: 168, title: "Image pipeline", sub: "Optimised on demand", glyph: "image", desc: "Vehicle photos are resized and compressed per device to protect load time." },
      { id: "cache", x: C2, y: 248, title: "Caching", sub: "Fast repeat visits", glyph: "zap", desc: "Caching strategies keep Core Web Vitals healthy under traffic." },
      { id: "api", x: C3, y: 168, title: "Role-based API", sub: "Express, TypeScript", icon: "Express", desc: "One API for the site and for staff. What you can do depends on your role." },
      { id: "res", x: C4, y: 88, title: "Reservations", sub: "Booking workflow", glyph: "calendar", desc: "Takes a customer from interest to a confirmed reservation." },
      { id: "inq", x: C4, y: 168, title: "Inquiries", sub: "Lead management", glyph: "mail", desc: "Captures questions and routes them to the right person on the team." },
      { id: "pay", x: C4, y: 248, title: "Payments", sub: "Checkout and status", glyph: "card", desc: "Starts a payment, then records the result against the reservation." },
      { id: "db", x: C5, y: 128, title: "PostgreSQL", sub: "Reservations, leads", icon: "PostgreSQL", desc: "The single source of truth for reservations, inquiries and payment status." },
      { id: "gw", x: C5, y: 396, title: "Payment gateway", sub: "External service", glyph: "landmark", desc: "Card details never touch our servers. The gateway handles them and reports back." },
    ],
    edges: [
      { from: "visitor", to: "pages", d: "M176 115 H208" },
      { from: "staff", to: "pages", d: "M176 235 H192 V115 H208", arrow: false },
      { from: "pages", to: "images", d: "M286 142 V168", quiet: true },
      { from: "images", to: "cache", d: "M286 222 V248", quiet: true },
      { from: "pages", to: "api", d: "M364 115 H380 V195 H396" },
      { from: "api", to: "res", d: "M552 195 H568 V115 H584", arrow: false },
      { from: "api", to: "inq", d: "M552 195 H584" },
      { from: "api", to: "pay", d: "M552 195 H568 V275 H584", arrow: false },
      { from: "res", to: "db", d: "M740 115 H756 V155 H772", arrow: false },
      { from: "inq", to: "db", d: "M740 195 H756 V155 H772", arrow: false },
      { from: "pay", to: "db", d: "M740 275 H756 V155 H772" },
      { from: "pay", to: "gw", d: "M662 302 V419 H772", label: { x: 676, y: 412, text: "charge" } },
    ],
  },

  /* ------------------------------------------------------------------ */
  "lucy-ai-assistant": {
    label:
      "Architecture of Lucy, a local AI assistant that runs entirely on one laptop. Microphone audio travels through a FastAPI WebSocket gateway to faster-whisper for transcription, then to a local Ollama language model that reads markdown memory and SQLite storage. The reply is spoken by Kokoro and streamed back to the speaker. The gateway also streams events to the React interface, and a launcher starts the whole stack.",
    caption:
      "Nothing leaves the machine. Each stage streams its result as it works, so replies start before they finish. Hover a part to see what it does.",
    viewBox: "0 0 980 440",
    zones: [
      { x: 8, y: 20, w: 964, h: 400, label: "Runs on one laptop, no cloud", outer: true },
      { x: C1 - 10, y: 56, w: 176, h: 340, label: "Browser" },
      { x: C2 - 10, y: 176, w: 176, h: 118, label: "Service" },
      { x: C3 - 10, y: 56, w: 176, h: 340, label: "Local models on CPU" },
      { x: C4 - 10, y: 176, w: 176, h: 228, label: "Memory" },
      { x: C5 - 10, y: 176, w: 176, h: 118, label: "Packaging" },
    ],
    nodes: [
      { id: "mic", x: C1, y: 88, title: "Microphone", sub: "Live capture", glyph: "mic", desc: "Captures speech in the browser and streams it as you talk." },
      { id: "ui", x: C1, y: 208, title: "Interface", sub: "React 19, Vite", icon: "React", desc: "Shows the conversation and live telemetry for every stage." },
      { id: "spk", x: C1, y: 328, title: "Speaker", sub: "Audio playback", glyph: "volume", desc: "Plays the reply as soon as the first sentence is ready." },
      { id: "gw", x: C2, y: 208, title: "Stream gateway", sub: "FastAPI, WebSockets", icon: "FastAPI", desc: "Moves audio, text and events between the browser and every local stage." },
      { id: "stt", x: C3, y: 88, title: "Transcribe", sub: "faster-whisper, int8", glyph: "audio", desc: "Speech to text on the CPU, quantised to int8 to stay fast on a normal laptop." },
      { id: "llm", x: C3, y: 208, title: "Language model", sub: "Ollama, Qwen3 0.6B", icon: "Ollama", desc: "A small model served locally by Ollama. It runs without a GPU." },
      { id: "tts", x: C3, y: 328, title: "Speak", sub: "Kokoro neural TTS", glyph: "volume", desc: "Turns the reply into natural speech, also on the CPU." },
      { id: "mem", x: C4, y: 208, title: "Soul and memory", sub: "Markdown files", glyph: "book", desc: "Plain markdown files hold the assistant's personality and what it remembers. You can edit them by hand." },
      { id: "sql", x: C4, y: 328, title: "SQLite", sub: "Local storage", icon: "SQLite", desc: "Conversation data stays in a local database file." },
      { id: "run", x: C5, y: 208, title: "Launcher", sub: "Batch, PowerShell", glyph: "terminal", desc: "One click starts the models, the service and the interface on Windows." },
    ],
    edges: [
      { from: "mic", to: "gw", d: "M176 115 H300 V208", label: { x: 184, y: 107, text: "audio" } },
      { from: "gw", to: "stt", d: "M364 235 H380 V115 H396" },
      { from: "stt", to: "llm", d: "M474 142 V208", label: { x: 484, y: 180, text: "text" } },
      { from: "llm", to: "tts", d: "M474 262 V328", label: { x: 484, y: 300, text: "reply" } },
      { from: "tts", to: "gw", d: "M396 355 H320 V262", label: { x: 330, y: 347, text: "speech" } },
      { from: "gw", to: "spk", d: "M254 262 V355 H176", label: { x: 182, y: 347, text: "play" } },
      { from: "gw", to: "ui", d: "M208 235 H176" },
      { from: "llm", to: "mem", d: "M552 235 H584" },
      { from: "llm", to: "sql", d: "M552 235 H568 V355 H584", quiet: true },
      { from: "run", to: "gw", d: "M850 208 V46 H350 V208", quiet: true, label: { x: 560, y: 40, text: "starts everything" } },
    ],
  },
};
