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
  | "landmark";

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

export const ARCHITECTURES: Record<string, Architecture> = {
  /* ------------------------------------------------------------------ */
  "softlligence-cloud": {
    label:
      "Architecture of the Softlligence Manufacturing Cloud. A tenant web app calls an Express API on AWS. Each request passes a tenant resolver, authentication and an RBAC guard, then reaches the inventory, manufacturing, commercial and reporting modules. Modules read and write through Prisma to a tenant-isolated PostgreSQL database. Industry templates configure the modules, and an AI layer is ready to receive data from reporting.",
    caption:
      "Every request is scoped to a tenant and checked against a role before any module runs. Hover a part to see what it does.",
    viewBox: "0 0 980 440",
    zones: [
      { x: 188, y: 20, w: 762, h: 400, label: "Hosted on AWS", outer: true },
      { x: C1 - 10, y: 176, w: 176, h: 118, label: "Clients" },
      { x: C2 - 10, y: 56, w: 176, h: 336, label: "API layer" },
      { x: C3 - 10, y: 56, w: 176, h: 336, label: "Domain modules" },
      { x: C4 - 10, y: 56, w: 176, h: 336, label: "Platform services" },
      { x: C5 - 10, y: 132, w: 176, h: 182, label: "Data layer" },
    ],
    nodes: [
      { id: "app", x: C1, y: 208, title: "Tenant web app", sub: "Next.js, Tailwind", icon: "Next.js", desc: "Each tenant gets its own branded app. Users see only the modules their role allows." },
      { id: "api", x: C2, y: 88, title: "Express API", sub: "Node.js, TypeScript", icon: "Express", desc: "One typed API serves every tenant and module, so rules live in one place." },
      { id: "tenant", x: C2, y: 168, title: "Tenant resolver", sub: "Scopes every request", glyph: "building", desc: "Works out which tenant a request belongs to and scopes everything after it to that tenant." },
      { id: "auth", x: C2, y: 248, title: "Authentication", sub: "Sign-in and sessions", glyph: "key", desc: "Verifies who is calling before any business logic runs." },
      { id: "rbac", x: C2, y: 328, title: "RBAC guard", sub: "Permissions per role", glyph: "shield", desc: "Checks the caller's role against the action. Access is denied by default." },
      { id: "inv", x: C3, y: 88, title: "Inventory", sub: "Stock and movements", glyph: "package", desc: "Tracks materials and finished goods across locations." },
      { id: "mfg", x: C3, y: 168, title: "Manufacturing", sub: "Production runs", glyph: "factory", desc: "Plans and records production for each industry sector the tenant works in." },
      { id: "com", x: C3, y: 248, title: "Commercial", sub: "Sales and purchasing", glyph: "receipt", desc: "Handles the commercial side of operations: orders, purchasing and billing." },
      { id: "rep", x: C3, y: 328, title: "Reporting", sub: "Dashboards, exports", glyph: "chart", desc: "Turns operational data into dashboards and exports for managers." },
      { id: "tpl", x: C4, y: 88, title: "Templates", sub: "Reusable per sector", glyph: "template", desc: "A reusable industry-template framework. A new manufacturing sector is configuration, not a rebuild." },
      { id: "ai", x: C4, y: 328, title: "AI layer", sub: "Ready for models", glyph: "sparkles", desc: "Reporting data is structured so models can be added without reworking the platform." },
      { id: "orm", x: C5, y: 168, title: "Prisma ORM", sub: "Typed queries", icon: "Prisma", desc: "Typed queries mean a schema change shows up as a compile error, not a production bug." },
      { id: "db", x: C5, y: 248, title: "PostgreSQL", sub: "Tenant-isolated", icon: "PostgreSQL", desc: "One database with strict tenant isolation, so one customer's data can never appear in another's." },
    ],
    edges: [
      { from: "app", to: "api", d: "M176 235 H192 V115 H208" },
      { from: "api", to: "tenant", d: "M286 142 V168" },
      { from: "tenant", to: "auth", d: "M286 222 V248" },
      { from: "auth", to: "rbac", d: "M286 302 V328" },
      { from: "rbac", to: "inv", d: "M364 355 H380 V115 H396", arrow: false },
      { from: "rbac", to: "mfg", d: "M364 355 H380 V195 H396", arrow: false },
      { from: "rbac", to: "com", d: "M364 355 H380 V275 H396", arrow: false },
      { from: "rbac", to: "rep", d: "M364 355 H396" },
      { from: "inv", to: "orm", d: "M552 115 H568 V195", arrow: false },
      { from: "com", to: "orm", d: "M552 275 H568 V195", arrow: false },
      { from: "rep", to: "orm", d: "M552 355 H568 V195", arrow: false },
      { from: "mfg", to: "orm", d: "M552 195 H772", label: { x: 640, y: 187, text: "queries" } },
      { from: "orm", to: "db", d: "M850 222 V248", label: { x: 858, y: 240, text: "SQL" } },
      { from: "tpl", to: "mfg", d: "M700 88 V46 H500 V88", quiet: true, label: { x: 560, y: 40, text: "configures" } },
      { from: "rep", to: "ai", d: "M474 382 V404 H662 V382", quiet: true, label: { x: 520, y: 398, text: "feeds" } },
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
