import Image from "next/image";
import { Check, GraduationCap, Lock, Radio, RotateCw, Sparkles, WifiOff, Zap } from "lucide-react";

// A product mock-up for each featured project: a browser frame, a phone
// overlapping it, and small floating UI cards. When a real screenshot exists
// at public/projects/<id>.(png|jpg|webp) it replaces the drawn browser art.

const BLUE = "#7f95ff";
const SANS = "var(--font-plex-sans), system-ui, sans-serif";
const SERIF = "var(--font-plex-serif), Georgia, serif";

function Chrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden border border-rule bg-[#0f1527] shadow-[0_28px_60px_-28px_rgba(22,33,58,0.6)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#16213a] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5fd38d]/80" />
        <span className="ml-3 flex flex-1 items-center gap-1.5 truncate rounded-sm bg-white/10 px-3 py-0.5 text-[11px] text-[#aab4cf]">
          <Lock className="h-2.5 w-2.5 shrink-0" aria-hidden="true" />
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}

/* ------------------------------ browser art ------------------------------ */

/** A simple side-on car, facing right. Spans x 244-442, y 124-217. */
function KiaCar() {
  return (
    <g>
      <ellipse cx="343" cy="217" rx="104" ry="5" fill="#000" opacity="0.4" />
      <path
        d="M246 200 L246 172 Q246 162 256 160 L278 158 L298 130 Q302 124 312 124 L356 124 Q364 124 370 130 L390 156 L428 162 Q442 166 442 180 L442 200 L424 200 A22 22 0 0 0 380 200 L304 200 A22 22 0 0 0 260 200 Z"
        fill="#cfd9ff"
      />
      <path d="M246 186 H442" stroke="#9db0f5" strokeWidth="1.5" />
      <path d="M284 156 L301 133 Q304 129 312 129 L331 129 L331 156 Z" fill="#2b3a78" />
      <path d="M338 129 L356 129 Q362 129 366 134 L382 156 L338 156 Z" fill="#2b3a78" />
      <path d="M334 158 V184" stroke="#9db0f5" strokeWidth="1.5" />
      <rect x="425" y="166" width="12" height="6" rx="2" fill="#ffe08a" />
      <rect x="244" y="166" width="5" height="9" rx="1.5" fill="#ff5a5a" />
      <circle cx="282" cy="200" r="17" fill="#0b1020" />
      <circle cx="282" cy="200" r="7" fill="none" stroke="#7f95ff" strokeWidth="2" />
      <circle cx="402" cy="200" r="17" fill="#0b1020" />
      <circle cx="402" cy="200" r="7" fill="none" stroke="#7f95ff" strokeWidth="2" />
    </g>
  );
}

function Kia() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily={SANS}>
      <defs>
        <radialGradient id="kia-glow" cx="72%" cy="70%" r="55%">
          <stop offset="0" stopColor="#2440d8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0b1020" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="300" fill="#0b1020" />
      <rect width="480" height="300" fill="url(#kia-glow)" />
      {/* nav */}
      <text x="24" y="28" fill="#fff" fontSize="13" fontWeight="600" letterSpacing="2">KIA</text>
      {["Models", "Showroom", "Test drive", "Contact"].map((t, i) => (
        <text key={t} x={262 + i * 56} y="27" fill="#aab4cf" fontSize="9.5">{t}</text>
      ))}
      {/* headline */}
      <text x="24" y="92" fill="#fff" fontSize="24" fontFamily={SERIF} fontWeight="500">Step inside</text>
      <text x="24" y="120" fill={BLUE} fontSize="24" fontFamily={SERIF} fontWeight="500">the showroom.</text>
      <text x="24" y="144" fill="#8f9bbd" fontSize="10">Explore every model in 3D.</text>
      <rect x="24" y="160" width="100" height="26" rx="13" fill="#2440d8" />
      <text x="74" y="177" fill="#fff" fontSize="10.5" fontWeight="600" textAnchor="middle">Explore in 3D</text>
      {/* turntable and car */}
      <ellipse cx="343" cy="222" rx="128" ry="17" fill="none" stroke={BLUE} strokeOpacity="0.55" strokeDasharray="5 6" />
      <ellipse cx="343" cy="222" rx="104" ry="11" fill="#fff" fillOpacity="0.04" stroke={BLUE} strokeOpacity="0.3" />
      <KiaCar />
      {/* rotate hint */}
      <path d="M232 238 Q343 262 454 238" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
      <path d="M449 233 L455 238 L447 242" fill="none" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="343" y="278" fill="#aab4cf" fontSize="10" textAnchor="middle">Drag to rotate</text>
      {/* colour swatches */}
      {["#d8dce8", "#c1272d", "#2440d8", "#1a1f2b"].map((c, i) => (
        <circle key={c} cx={34 + i * 22} cy="240" r="8" fill={c} stroke={i === 2 ? "#fff" : "#3a4566"} strokeWidth={i === 2 ? 2 : 1} />
      ))}
      <text x="24" y="270" fill="#8f9bbd" fontSize="9.5">Choose a colour</text>
    </svg>
  );
}

function Playpen() {
  const nav = ["Home", "Admissions", "Events", "Fees", "Contact"];
  const cards = [
    { x: 24, c: "#ff7a59", t: "Admissions", s: "Apply online" },
    { x: 174, c: "#2bb5a0", t: "Events", s: "What is on" },
    { x: 324, c: "#6c5ce7", t: "Pay fees", s: "Secure checkout" },
  ];
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily={SANS}>
      <rect width="480" height="300" fill="#fff7ea" />
      <circle cx="410" cy="86" r="96" fill="#ffd9a0" />
      <circle cx="452" cy="44" r="46" fill="#ffb21f" />
      <circle cx="372" cy="150" r="14" fill="#ff7a59" opacity="0.85" />
      <path d="M0 160 Q120 120 240 152 T480 140 V300 H0 Z" fill="#ffe9c7" />
      {/* nav */}
      <circle cx="30" cy="24" r="11" fill="#ff7a59" />
      <circle cx="30" cy="24" r="4.5" fill="#fff7ea" />
      <text x="48" y="28" fill="#2d2a4a" fontSize="13" fontWeight="700" fontFamily={SERIF}>Playpen</text>
      {nav.map((t, i) => (
        <text key={t} x={218 + i * 52} y="28" fill="#2d2a4a" fillOpacity={i === 0 ? 1 : 0.55} fontSize="9.5" fontWeight={i === 0 ? 600 : 400}>{t}</text>
      ))}
      {/* hero copy */}
      <text x="24" y="70" fill="#2d2a4a" fontSize="23" fontFamily={SERIF} fontWeight="600">A happy place</text>
      <text x="24" y="96" fill="#2d2a4a" fontSize="23" fontFamily={SERIF} fontWeight="600">to grow and learn.</text>
      <text x="24" y="118" fill="#2d2a4a" fillOpacity="0.6" fontSize="9.5">Admissions open for the new session.</text>
      <rect x="24" y="130" width="98" height="26" rx="13" fill="#ff7a59" />
      <text x="73" y="147" fill="#fff" fontSize="10.5" fontWeight="600" textAnchor="middle">Apply now</text>
      <rect x="132" y="130" width="86" height="26" rx="13" fill="none" stroke="#2d2a4a" strokeOpacity="0.35" />
      <text x="175" y="147" fill="#2d2a4a" fontSize="10.5" textAnchor="middle">Visit us</text>
      {/* characters */}
      <g>
        <circle cx="318" cy="118" r="30" fill="#2bb5a0" />
        <circle cx="318" cy="112" r="12" fill="#fff7ea" />
        <path d="M286 160 Q318 132 350 160 V182 H286 Z" fill="#ff7a59" />
        <rect x="364" y="96" width="56" height="56" rx="14" fill="#6c5ce7" />
        <path d="M379 124 L391 136 L407 111" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M256 100 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 z" fill="#ffb21f" />
      </g>
      {/* quick cards */}
      {cards.map((k) => (
        <g key={k.t}>
          <rect x={k.x} y="196" width="132" height="84" rx="12" fill="#fff" stroke="#f0dcb8" />
          <circle cx={k.x + 26} cy="224" r="13" fill={k.c} />
          <text x={k.x + 48} y="223" fill="#2d2a4a" fontSize="11" fontWeight="700">{k.t}</text>
          <text x={k.x + 48} y="236" fill="#2d2a4a" fillOpacity="0.55" fontSize="9">{k.s}</text>
          <rect x={k.x + 14} y="254" width="104" height="6" rx="3" fill="#2d2a4a" opacity="0.1" />
          <rect x={k.x + 14} y="254" width={[72, 54, 88][cards.indexOf(k)]} height="6" rx="3" fill={k.c} />
        </g>
      ))}
    </svg>
  );
}

function Softlligence() {
  const bars = [46, 70, 54, 88, 66, 102, 78, 118];
  const nav = ["Dashboard", "Inventory", "Production", "Orders", "Reports"];
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily={SANS}>
      <rect width="480" height="300" fill="#0b1020" />
      <rect width="96" height="300" fill="#121a33" />
      <rect x="14" y="14" width="22" height="22" rx="6" fill="#2440d8" />
      <text x="44" y="29" fill="#fff" fontSize="10.5" fontWeight="600">Softlligence</text>
      {nav.map((t, i) => (
        <g key={t}>
          {i === 0 && <rect x="8" y={52 + i * 28} width="80" height="22" rx="5" fill="#2440d8" fillOpacity="0.35" />}
          <circle cx="22" cy={63 + i * 28} r="3.5" fill={i === 0 ? BLUE : "#fff"} opacity={i === 0 ? 1 : 0.35} />
          <text x="34" y={66 + i * 28} fill="#fff" fillOpacity={i === 0 ? 1 : 0.55} fontSize="9.5">{t}</text>
        </g>
      ))}
      <rect x="14" y="258" width="68" height="26" rx="6" fill="#fff" fillOpacity="0.06" />
      <text x="22" y="269" fill="#aab4cf" fontSize="7.5">Tenant</text>
      <text x="22" y="279" fill="#fff" fontSize="8.5" fontWeight="600">Steel mill</text>
      {/* top bar */}
      <text x="114" y="30" fill="#fff" fontSize="14" fontFamily={SERIF} fontWeight="500">Production overview</text>
      <rect x="388" y="14" width="76" height="22" rx="11" fill="#2440d8" />
      <text x="426" y="29" fill="#fff" fontSize="9" fontWeight="600" textAnchor="middle">+ New run</text>
      {/* tiles */}
      {[
        ["Stock", "Healthy"],
        ["Open orders", "In progress"],
        ["Production", "On plan"],
      ].map(([a, b], i) => (
        <g key={a}>
          <rect x={114 + i * 120} y="50" width="110" height="56" rx="6" fill="#fff" fillOpacity="0.06" stroke={BLUE} strokeOpacity="0.3" />
          <text x={126 + i * 120} y="70" fill="#aab4cf" fontSize="9">{a}</text>
          <text x={126 + i * 120} y="92" fill="#fff" fontSize="13" fontWeight="600">{b}</text>
          <circle cx={208 + i * 120} cy="64" r="3.5" fill="#5fd38d" />
        </g>
      ))}
      {/* chart */}
      <rect x="114" y="120" width="230" height="164" rx="6" fill="#fff" fillOpacity="0.05" stroke={BLUE} strokeOpacity="0.3" />
      <text x="126" y="140" fill="#fff" fontSize="10.5" fontWeight="600">Output by week</text>
      {bars.map((h, i) => (
        <rect key={i} x={128 + i * 26} y={270 - h} width="16" height={h} rx="2" fill={BLUE} opacity={0.35 + i * 0.08} />
      ))}
      <path d="M136 232 L162 214 L188 224 L214 196 L240 208 L266 180 L292 192 L318 164" fill="none" stroke="#fff" strokeOpacity="0.85" strokeWidth="1.6" strokeLinejoin="round" />
      {/* recent activity */}
      <rect x="356" y="120" width="108" height="164" rx="6" fill="#fff" fillOpacity="0.05" stroke={BLUE} strokeOpacity="0.3" />
      <text x="368" y="140" fill="#fff" fontSize="10.5" fontWeight="600">Recent</text>
      {["Stock received", "Order confirmed", "Run completed", "Invoice sent"].map((t, i) => (
        <g key={t}>
          <circle cx="373" cy={162 + i * 28} r="4" fill={i % 2 ? BLUE : "#5fd38d"} />
          <text x="384" y={165 + i * 28} fill="#dfe5ff" fontSize="8.5">{t}</text>
          <rect x="384" y={171 + i * 28} width="54" height="4" rx="2" fill="#fff" opacity="0.12" />
        </g>
      ))}
    </svg>
  );
}

function Shorborno() {
  const GOLD = "#f5b83d";
  const nav = ["Dashboard", "Students", "Classes", "Teachers", "Reports"];
  const bars = [52, 64, 58, 74, 66, 82, 70];
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily={SANS}>
      <rect width="480" height="300" fill="#0d1a24" />
      <rect width="92" height="300" fill="#0a1f2c" />
      <circle cx="26" cy="26" r="11" fill={GOLD} />
      <text x="42" y="30" fill="#fff" fontSize="9" fontWeight="600">Shorborno</text>
      {nav.map((t, i) => (
        <g key={t}>
          {i === 0 && <rect x="8" y={52 + i * 28} width="76" height="22" rx="5" fill={GOLD} fillOpacity="0.22" />}
          <circle cx="22" cy={63 + i * 28} r="3.5" fill={i === 0 ? GOLD : "#fff"} opacity={i === 0 ? 1 : 0.35} />
          <text x="34" y={66 + i * 28} fill="#fff" fillOpacity={i === 0 ? 1 : 0.55} fontSize="9.5">{t}</text>
        </g>
      ))}
      <text x="110" y="30" fill="#fff" fontSize="14" fontFamily={SERIF} fontWeight="500">School overview</text>
      <rect x="378" y="14" width="86" height="22" rx="11" fill={GOLD} />
      <text x="421" y="29" fill="#0d1a24" fontSize="9" fontWeight="700" textAnchor="middle">+ Add student</text>
      {[["Students", "Enrolled"], ["Teachers", "Active"], ["Classes", "Running"]].map(([a, b], i) => (
        <g key={a}>
          <rect x={110 + i * 118} y="50" width="108" height="56" rx="6" fill="#fff" fillOpacity="0.06" stroke={GOLD} strokeOpacity="0.3" />
          <text x={122 + i * 118} y="70" fill="#9fb3c2" fontSize="9">{a}</text>
          <text x={122 + i * 118} y="92" fill="#fff" fontSize="13" fontWeight="600">{b}</text>
          <circle cx={204 + i * 118} cy="64" r="3.5" fill="#5fd38d" />
        </g>
      ))}
      <rect x="110" y="120" width="226" height="166" rx="6" fill="#fff" fillOpacity="0.05" stroke={GOLD} strokeOpacity="0.3" />
      <text x="122" y="140" fill="#fff" fontSize="10.5" fontWeight="600">Attendance this week</text>
      {bars.map((h, i) => (
        <g key={i}>
          <rect x={126 + i * 30} y={266 - h} width="18" height={h} rx="2" fill={GOLD} opacity={0.45 + i * 0.07} />
          <text x={135 + i * 30} y="280" fill="#9fb3c2" fontSize="7.5" textAnchor="middle">{["M", "T", "W", "T", "F", "S", "S"][i]}</text>
        </g>
      ))}
      <rect x="348" y="120" width="116" height="166" rx="6" fill="#fff" fillOpacity="0.05" stroke={GOLD} strokeOpacity="0.3" />
      <text x="360" y="140" fill="#fff" fontSize="10.5" fontWeight="600">Notices</text>
      {["Exam schedule", "Parents meeting", "Holiday notice", "Fee reminder"].map((t, i) => (
        <g key={t}>
          <circle cx="365" cy={162 + i * 28} r="4" fill={i % 2 ? "#5fd38d" : GOLD} />
          <text x="376" y={165 + i * 28} fill="#e4edf3" fontSize="8.5">{t}</text>
          <rect x="376" y={171 + i * 28} width="52" height="4" rx="2" fill="#fff" opacity="0.12" />
        </g>
      ))}
    </svg>
  );
}

function Lucy() {
  const heights = [14, 34, 22, 58, 40, 76, 52, 90, 60, 44, 70, 36, 54, 26, 42, 18, 30, 12, 26, 16];
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true" fontFamily={SANS}>
      <rect width="480" height="300" fill="#0b1020" />
      <circle cx="400" cy="40" r="120" fill="#2440d8" opacity="0.18" />
      <text x="24" y="30" fill="#fff" fontSize="14" fontFamily={SERIF} fontWeight="500">Lucy</text>
      <circle cx="68" cy="26" r="3.5" fill="#5fd38d" />
      <text x="76" y="30" fill="#8f9bbd" fontSize="9">listening, on device</text>
      {/* conversation */}
      <rect x="24" y="48" width="236" height="44" rx="8" fill="#fff" fillOpacity="0.08" />
      <text x="36" y="67" fill="#dfe5ff" fontSize="10.5">What is on my calendar today?</text>
      <text x="36" y="82" fill="#8f9bbd" fontSize="8.5">transcribed by faster-whisper</text>
      <rect x="216" y="102" width="240" height="56" rx="8" fill="#2440d8" fillOpacity="0.9" />
      <text x="228" y="121" fill="#fff" fontSize="10.5">You have two things: a study block</text>
      <text x="228" y="135" fill="#fff" fontSize="10.5">at ten and a call at four.</text>
      <text x="228" y="150" fill="#cfd8ff" fontSize="8.5">spoken by Kokoro</text>
      {/* waveform */}
      {heights.map((h, i) => (
        <rect key={i} x={30 + i * 22} y={216 - h / 2} width="10" height={h} rx="5" fill={BLUE} opacity={0.45 + (h / 90) * 0.55} />
      ))}
      {/* pipeline */}
      <g fontSize="9.5" fill="#aab4cf">
        {[
          ["whisper", 24],
          ["Qwen3 0.6B", 118],
          ["Kokoro", 232],
        ].map(([t, x]) => (
          <g key={t as string}>
            <rect x={x as number} y="258" width={t === "Qwen3 0.6B" ? 84 : 66} height="22" rx="4" fill="none" stroke="#4a5677" />
            <text x={(x as number) + (t === "Qwen3 0.6B" ? 42 : 33)} y="273" textAnchor="middle">{t as string}</text>
          </g>
        ))}
        <path d="M90 269 H118 M202 269 H232" stroke="#7f95ff" strokeWidth="1.5" />
        <text x="320" y="273" fill="#5fd38d" fontSize="9.5">100% local, CPU only</text>
      </g>
    </svg>
  );
}

/* -------------------------------- phone art ------------------------------- */

function PhoneScreen({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 90 190" className="h-full w-full" aria-hidden="true" fontFamily={SANS}>
      {id === "playpen-school" && (
        <>
          <rect width="90" height="190" fill="#fff7ea" />
          <rect width="90" height="34" fill="#ff7a59" />
          <text x="10" y="22" fill="#fff" fontSize="10" fontWeight="700" fontFamily={SERIF}>Apply</text>
          {["Child's name", "Date of birth", "Class"].map((t, i) => (
            <g key={t}>
              <text x="10" y={52 + i * 32} fill="#2d2a4a" fillOpacity="0.6" fontSize="6.5">{t}</text>
              <rect x="10" y={56 + i * 32} width="70" height="16" rx="4" fill="#fff" stroke="#f0dcb8" />
            </g>
          ))}
          <rect x="10" y="152" width="70" height="20" rx="10" fill="#6c5ce7" />
          <text x="45" y="165" fill="#fff" fontSize="8" fontWeight="600" textAnchor="middle">Submit</text>
        </>
      )}
      {id === "kia-bangladesh" && (
        <>
          <rect width="90" height="190" fill="#0b1020" />
          <text x="10" y="20" fill="#fff" fontSize="9" fontWeight="600" letterSpacing="1.5">KIA</text>
          <ellipse cx="45" cy="98" rx="38" ry="6" fill="none" stroke={BLUE} strokeOpacity="0.5" strokeDasharray="3 3" />
          <g transform="translate(-78 11) scale(0.36)">
            <KiaCar />
          </g>
          <text x="10" y="132" fill="#fff" fontSize="9" fontFamily={SERIF}>Book a test drive</text>
          <rect x="10" y="144" width="70" height="20" rx="10" fill="#2440d8" />
          <text x="45" y="157" fill="#fff" fontSize="8" fontWeight="600" textAnchor="middle">Reserve</text>
        </>
      )}
      {id === "shorborno-cloud" && (
        <>
          <rect width="90" height="190" fill="#0d1a24" />
          <circle cx="16" cy="18" r="6" fill="#f5b83d" />
          <text x="26" y="21" fill="#fff" fontSize="8" fontWeight="600">Shorborno</text>
          {["Students", "Attendance", "Notices", "Fees"].map((t, i) => (
            <g key={t}>
              <rect x="8" y={36 + i * 34} width="74" height="28" rx="5" fill="#fff" fillOpacity="0.07" />
              <circle cx="20" cy={50 + i * 34} r="5" fill={i === 0 ? "#f5b83d" : "#5fd38d"} />
              <text x="30" y={53 + i * 34} fill="#fff" fontSize="7.5">{t}</text>
            </g>
          ))}
          <rect x="8" y="174" width="74" height="10" rx="5" fill="#f5b83d" />
        </>
      )}
      {id === "softlligence-cloud" && (
        <>
          <rect width="90" height="190" fill="#0b1020" />
          <text x="10" y="20" fill="#fff" fontSize="9" fontWeight="600">Stock</text>
          {["Steel rods", "Fabric rolls", "Packaging", "Spare parts"].map((t, i) => (
            <g key={t}>
              <rect x="8" y={34 + i * 34} width="74" height="28" rx="5" fill="#fff" fillOpacity="0.07" />
              <text x="14" y={47 + i * 34} fill="#fff" fontSize="7.5">{t}</text>
              <rect x="14" y={53 + i * 34} width={[44, 32, 52, 22][i]} height="3.5" rx="2" fill={i === 3 ? "#ffb21f" : "#5fd38d"} />
            </g>
          ))}
          <rect x="8" y="170" width="74" height="14" rx="7" fill="#2440d8" />
        </>
      )}
      {id === "lucy-ai-assistant" && (
        <>
          <rect width="90" height="190" fill="#0b1020" />
          <circle cx="45" cy="64" r="26" fill="#2440d8" opacity="0.35" />
          <circle cx="45" cy="64" r="15" fill="#2440d8" />
          {[10, 18, 26, 18, 10].map((h, i) => (
            <rect key={i} x={30 + i * 7} y={64 - h / 2} width="3.5" height={h} rx="2" fill="#fff" />
          ))}
          <rect x="10" y="110" width="70" height="20" rx="6" fill="#fff" fillOpacity="0.08" />
          <rect x="16" y="117" width="48" height="4" rx="2" fill="#dfe5ff" opacity="0.7" />
          <rect x="10" y="138" width="70" height="26" rx="6" fill="#2440d8" />
          <rect x="16" y="145" width="52" height="4" rx="2" fill="#fff" opacity="0.9" />
          <rect x="16" y="153" width="34" height="4" rx="2" fill="#fff" opacity="0.5" />
        </>
      )}
    </svg>
  );
}

function Phone({ id }: { id: string }) {
  return (
    <div className="float-b pointer-events-none absolute -bottom-4 right-2 w-[19%] min-w-[64px] rounded-[1.1rem] border-[3px] border-[#16213a] bg-[#16213a] shadow-[0_18px_30px_-10px_rgba(22,33,58,0.6)] lg:-right-4">
      <div className="aspect-[9/19] overflow-hidden rounded-[0.85rem]">
        <PhoneScreen id={id} />
      </div>
    </div>
  );
}

/* ------------------------------ floating chips ---------------------------- */

type Chip = { icon: typeof Check; text: string; tone: string };

function FloatChip({ chip, className }: { chip: Chip; className: string }) {
  const Icon = chip.icon;
  return (
    <div
      className={`pointer-events-none absolute z-10 flex items-center gap-2 rounded-md border border-black/5 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#16213a] shadow-[0_14px_28px_-12px_rgba(22,33,58,0.55)] ${className}`}
    >
      <span
        className="flex h-5 w-5 items-center justify-center rounded-full text-white"
        style={{ background: chip.tone }}
      >
        <Icon className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
      </span>
      {chip.text}
    </div>
  );
}

const ART: Record<
  string,
  { art: () => React.ReactNode; url: string; chips: [Chip, Chip] }
> = {
  "softlligence-cloud": {
    art: Softlligence,
    url: "softlligence.tech",
    chips: [
      { icon: Lock, text: "Tenant isolated", tone: "#2440d8" },
      { icon: Zap, text: "Served from Redis", tone: "#d82c20" },
    ],
  },
  "shorborno-cloud": {
    art: Shorborno,
    url: "shorborno.cloud",
    chips: [
      { icon: GraduationCap, text: "200+ schools", tone: "#d99a0b" },
      { icon: Radio, text: "Live at shorborno.cloud", tone: "#16a34a" },
    ],
  },
  "kia-bangladesh": {
    art: Kia,
    url: "kia-bangladesh.vercel.app",
    chips: [
      { icon: RotateCw, text: "Drag to rotate, 3D", tone: "#2440d8" },
      { icon: Radio, text: "Live on Vercel", tone: "#16a34a" },
    ],
  },
  "playpen-school": {
    art: Playpen,
    url: "playpen school",
    chips: [
      { icon: Check, text: "Published live", tone: "#16a34a" },
      { icon: Sparkles, text: "Payment received", tone: "#6c5ce7" },
    ],
  },
  "lucy-ai-assistant": {
    art: Lucy,
    url: "localhost:5173",
    chips: [
      { icon: WifiOff, text: "Offline, no cloud", tone: "#2440d8" },
      { icon: Zap, text: "CPU only", tone: "#ff9900" },
    ],
  },
};

export default function ProjectVisual({
  id,
  name,
  shot,
}: {
  id: string;
  name: string;
  /** Path under /public of a real screenshot, when one exists. */
  shot?: string;
}) {
  const entry = ART[id];
  if (!entry && !shot) return null;
  return (
    <div className="group relative pb-5">
      <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <Chrome url={entry?.url ?? name}>
          {shot ? (
            <Image
              src={shot}
              alt={`Screenshot of ${name}`}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            entry && <entry.art />
          )}
        </Chrome>
      </div>
      {entry && (
        <>
          <Phone id={id} />
          <FloatChip chip={entry.chips[0]} className="float-a -top-3 right-6" />
          <FloatChip chip={entry.chips[1]} className="float-b bottom-1 left-[46%] hidden sm:flex" />
        </>
      )}
      {!shot && <p className="mt-6 text-xs text-muted">Illustration of the product.</p>}
    </div>
  );
}
