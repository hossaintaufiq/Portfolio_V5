/** One smooth wave, drawn four periods wide so it can drift without a seam. */
function wavePath(amp: number, mid: number, period = 720, periods = 4) {
  const half = period / 2;
  let d = `M0 ${mid} C ${half / 3} ${mid - amp}, ${(half * 2) / 3} ${mid - amp}, ${half} ${mid}`;
  for (let i = 1; i < periods * 2; i++) {
    const x = half * (i + 1);
    const dir = i % 2 === 1 ? 1 : -1;
    d += ` S ${x - half / 3} ${mid + dir * amp}, ${x} ${mid}`;
  }
  return `${d} L ${half * periods * 2} 140 L 0 140 Z`;
}

type Layer = { fill: string; amp: number; mid: number; height: string; speed: string; reverse?: boolean };

const LAYERS: Layer[] = [
  { fill: "rgba(255, 168, 96, 0.55)", amp: 26, mid: 58, height: "h-28", speed: "34s", reverse: true },
  { fill: "rgba(34, 211, 197, 0.55)", amp: 22, mid: 66, height: "h-24", speed: "26s" },
  { fill: "rgba(24, 22, 92, 0.5)", amp: 18, mid: 80, height: "h-20", speed: "20s", reverse: true },
];

/** Layered colour waves along the bottom edge, drifting slowly. Decorative. */
export default function Waves() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-28 overflow-hidden">
      {LAYERS.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 2880 140"
          preserveAspectRatio="none"
          className={`wave-drift absolute bottom-0 left-0 w-[200%] ${l.height}`}
          style={{ animationDuration: l.speed, animationDirection: l.reverse ? "reverse" : "normal" }}
        >
          <path d={wavePath(l.amp, l.mid)} fill={l.fill} />
        </svg>
      ))}
    </div>
  );
}
