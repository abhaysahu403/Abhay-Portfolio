const typeColors = {
  source: { bg: '#1e3a5f', border: '#3b82f6', text: '#93c5fd' },
  service: { bg: '#1a2e1a', border: '#22c55e', text: '#86efac' },
  ml: { bg: '#2d1b69', border: '#8b5cf6', text: '#c4b5fd' },
  queue: { bg: '#451a03', border: '#f97316', text: '#fdba74' },
  db: { bg: '#1c1917', border: '#78716c', text: '#d6d3d1' },
  cache: { bg: '#431407', border: '#ef4444', text: '#fca5a5' },
  frontend: { bg: '#0f2937', border: '#06b6d4', text: '#67e8f9' },
};

function getCenter(comp) {
  return { x: comp.x + 60, y: comp.y + 25 };
}

export default function ArchDiagram({ components, connections }) {
  return (
    <div className="w-full overflow-x-auto rounded-xl p-4" style={{ background: 'rgba(2,6,23,0.8)', border: '1px solid rgba(148,163,184,0.08)' }}>
      <svg
        viewBox="0 -10 660 380"
        className="w-full"
        style={{ minHeight: 220, maxHeight: 340 }}
      >
        {/* Grid */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="1"/>
          </pattern>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="rgba(34,211,238,0.5)" />
          </marker>
        </defs>
        <rect width="660" height="380" fill="url(#grid)" />

        {/* Connections */}
        {connections.map((conn, i) => {
          const from = components.find(c => c.id === conn.from);
          const to = components.find(c => c.id === conn.to);
          if (!from || !to) return null;
          const fc = getCenter(from);
          const tc = getCenter(to);
          const mx = (fc.x + tc.x) / 2;
          const my = (fc.y + tc.y) / 2;
          return (
            <g key={i}>
              <path
                d={`M ${fc.x} ${fc.y} Q ${mx} ${fc.y} ${tc.x} ${tc.y}`}
                fill="none"
                stroke="rgba(34,211,238,0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 3"
                markerEnd="url(#arrowhead)"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="2s" repeatCount="indefinite" />
              </path>
            </g>
          );
        })}

        {/* Nodes */}
        {components.map((comp) => {
          const colors = typeColors[comp.type] || typeColors.service;
          return (
            <g key={comp.id}>
              <rect
                x={comp.x}
                y={comp.y}
                width={120}
                height={50}
                rx={8}
                fill={colors.bg}
                stroke={colors.border}
                strokeWidth={1.5}
                opacity={0.9}
              />
              {/* Glow effect */}
              <rect
                x={comp.x}
                y={comp.y}
                width={120}
                height={50}
                rx={8}
                fill="none"
                stroke={colors.border}
                strokeWidth={4}
                opacity={0.1}
              />
              {comp.label.split('\n').map((line, li) => (
                <text
                  key={li}
                  x={comp.x + 60}
                  y={comp.y + (comp.label.includes('\n') ? 18 + li * 16 : 30)}
                  textAnchor="middle"
                  fill={colors.text}
                  fontSize={li === 0 ? 10 : 9}
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight={li === 0 ? '600' : '400'}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
