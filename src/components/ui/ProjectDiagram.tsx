import type { ProjectVisualId } from "@/types/portfolio";

interface ProjectDiagramProps {
  visual: ProjectVisualId;
  className?: string;
}

const ProjectDiagram = ({ visual, className = "" }: ProjectDiagramProps) => {
  return (
    <div
      aria-hidden="true"
      className={`border-border bg-canvas relative overflow-hidden rounded-lg border ${className}`}
    >
      {visual === "pstack" && (
        <svg viewBox="0 0 640 280" className="h-auto w-full" fill="none">
          <defs>
            <pattern
              id="grid-pstack"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                stroke="#1e2733"
                strokeWidth="0.7"
                opacity="0.45"
              />
            </pattern>
          </defs>
          <rect width="640" height="280" fill="url(#grid-pstack)" />

          {/* Upstream */}
          <rect
            x="32"
            y="96"
            width="136"
            height="88"
            rx="8"
            fill="#0e1218"
            stroke="#14ffec"
            strokeOpacity="0.5"
          />
          <text
            x="48"
            y="124"
            fill="#14ffec"
            fontSize="10"
            fontFamily="monospace"
          >
            UPSTREAM BASELINE
          </text>
          <text
            x="48"
            y="146"
            fill="#f1f5f9"
            fontSize="13"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            pstack (Cursor)
          </text>
          <text
            x="48"
            y="166"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="monospace"
          >
            skills · rules · agents
          </text>

          {/* Branch Connectors */}
          <path
            d="M 168 140 L 220 140 M 220 48 L 220 232 M 220 48 L 256 48 M 220 110 L 256 110 M 220 172 L 256 172 M 220 232 L 256 232"
            stroke="#2d3b4d"
            strokeWidth="1.5"
          />

          {/* 4 Harness Targets */}
          {[
            { y: 26, label: "Claude Code", sub: "plugin + hooks" },
            { y: 88, label: "OpenAI Codex", sub: "agents + manifests" },
            { y: 150, label: "Google Antigravity", sub: "skills + MCP bundle" },
            { y: 212, label: "Agent Skills", sub: "harness-neutral spec" },
          ].map((target) => (
            <g key={target.label}>
              <rect
                x="256"
                y={target.y}
                width="184"
                height="44"
                rx="6"
                fill="#141a23"
                stroke="#2d3b4d"
              />
              <circle cx="272" cy={target.y + 22} r="3.5" fill="#14ffec" />
              <text
                x="284"
                y={target.y + 19}
                fill="#f1f5f9"
                fontSize="12"
                fontWeight="600"
                fontFamily="sans-serif"
              >
                {target.label}
              </text>
              <text
                x="284"
                y={target.y + 34}
                fill="#94a3b8"
                fontSize="10"
                fontFamily="monospace"
              >
                {target.sub}
              </text>
            </g>
          ))}

          {/* Converge to Installers */}
          <path
            d="M 440 48 L 474 48 M 440 110 L 474 110 M 440 172 L 474 172 M 440 232 L 474 232 M 474 48 L 474 232 M 474 140 L 502 140"
            stroke="#2d3b4d"
            strokeWidth="1.5"
          />

          <rect
            x="502"
            y="84"
            width="108"
            height="112"
            rx="8"
            fill="#0e1218"
            stroke="#2d3b4d"
          />
          <text
            x="516"
            y="108"
            fill="#14ffec"
            fontSize="10"
            fontFamily="monospace"
          >
            INSTALLERS
          </text>
          <text
            x="516"
            y="130"
            fill="#f1f5f9"
            fontSize="11"
            fontFamily="monospace"
          >
            install.sh
          </text>
          <text
            x="516"
            y="148"
            fill="#f1f5f9"
            fontSize="11"
            fontFamily="monospace"
          >
            install.ps1
          </text>
          <text
            x="516"
            y="174"
            fill="#94a3b8"
            fontSize="9.5"
            fontFamily="monospace"
          >
            global | project
          </text>
        </svg>
      )}

      {visual === "commerce" && (
        <svg viewBox="0 0 640 280" className="h-auto w-full" fill="none">
          <defs>
            <pattern
              id="grid-commerce"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                stroke="#1e2733"
                strokeWidth="0.7"
                opacity="0.45"
              />
            </pattern>
          </defs>
          <rect width="640" height="280" fill="url(#grid-commerce)" />

          {/* API Gateway */}
          <rect
            x="28"
            y="92"
            width="132"
            height="96"
            rx="8"
            fill="#0e1218"
            stroke="#2d3b4d"
          />
          <text
            x="44"
            y="118"
            fill="#f59e0b"
            fontSize="10"
            fontFamily="monospace"
          >
            NESTJS API
          </text>
          <text
            x="44"
            y="140"
            fill="#f1f5f9"
            fontSize="12"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            Domain Gateway
          </text>
          <text
            x="44"
            y="160"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="monospace"
          >
            Typed REST + Auth
          </text>

          <path
            d="M 160 140 L 198 140 M 198 58 L 198 222 M 198 58 L 230 58 M 198 140 L 230 140 M 198 222 L 230 222"
            stroke="#2d3b4d"
            strokeWidth="1.5"
          />

          {/* Core Modules */}
          {[
            {
              y: 34,
              name: "Catalogue & Variants",
              sub: "SKUs · attributes · stock",
            },
            { y: 116, name: "Cart & Checkout", sub: "orders · payment flow" },
            { y: 198, name: "Media Pipeline", sub: "presigned URLs" },
          ].map((mod) => (
            <g key={mod.name}>
              <rect
                x="230"
                y={mod.y}
                width="174"
                height="48"
                rx="6"
                fill="#141a23"
                stroke="#14ffec"
                strokeOpacity="0.35"
              />
              <text
                x="246"
                y={mod.y + 21}
                fill="#f1f5f9"
                fontSize="12"
                fontWeight="600"
                fontFamily="sans-serif"
              >
                {mod.name}
              </text>
              <text
                x="246"
                y={mod.y + 37}
                fill="#94a3b8"
                fontSize="10"
                fontFamily="monospace"
              >
                {mod.sub}
              </text>
            </g>
          ))}

          <path
            d="M 404 58 L 446 58 M 404 140 L 446 140 M 404 222 L 446 222"
            stroke="#2d3b4d"
            strokeWidth="1.5"
          />

          {/* Data & Infra */}
          {[
            { y: 34, name: "PostgreSQL + Prisma", sub: "transactional state" },
            { y: 116, name: "Redis + Workers", sub: "async background jobs" },
            {
              y: 198,
              name: "Cloudflare R2 / S3",
              sub: "direct object uploads",
            },
          ].map((infra) => (
            <g key={infra.name}>
              <rect
                x="446"
                y={infra.y}
                width="166"
                height="48"
                rx="6"
                fill="#0e1218"
                stroke="#2d3b4d"
              />
              <text
                x="462"
                y={infra.y + 21}
                fill="#14ffec"
                fontSize="11.5"
                fontWeight="600"
                fontFamily="monospace"
              >
                {infra.name}
              </text>
              <text
                x="462"
                y={infra.y + 37}
                fill="#94a3b8"
                fontSize="10"
                fontFamily="monospace"
              >
                {infra.sub}
              </text>
            </g>
          ))}
        </svg>
      )}

      {visual === "fulfilment" && (
        <svg viewBox="0 0 640 280" className="h-auto w-full" fill="none">
          <defs>
            <pattern
              id="grid-fulfilment"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                stroke="#1e2733"
                strokeWidth="0.7"
                opacity="0.45"
              />
            </pattern>
          </defs>
          <rect width="640" height="280" fill="url(#grid-fulfilment)" />

          {/* Header Bar */}
          <rect
            x="32"
            y="28"
            width="576"
            height="36"
            rx="6"
            fill="#0e1218"
            stroke="#2d3b4d"
          />
          <text
            x="48"
            y="50"
            fill="#94a3b8"
            fontSize="10.5"
            fontFamily="monospace"
          >
            EXPO ROUTER · TANSTACK QUERY · ZUSTAND · ZOD VALIDATION
          </text>

          {/* Linear Workflow Steps */}
          <path
            d="M 100 132 L 540 132"
            stroke="#14ffec"
            strokeOpacity="0.4"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {[
            { x: 36, step: "01", title: "Staff Auth", sub: "role session" },
            { x: 152, step: "02", title: "Acknowledge", sub: "claim order" },
            { x: 268, step: "03", title: "Workshop", sub: "milestone logs" },
            { x: 384, step: "04", title: "Customer", sub: "status updates" },
            { x: 500, step: "05", title: "Delivered", sub: "confirmation" },
          ].map((node, idx) => (
            <g key={node.step}>
              <rect
                x={node.x}
                y="96"
                width="104"
                height="84"
                rx="8"
                fill="#141a23"
                stroke={idx === 2 ? "#14ffec" : "#2d3b4d"}
              />
              <text
                x={node.x + 12}
                y="118"
                fill={idx === 2 ? "#14ffec" : "#f59e0b"}
                fontSize="10"
                fontFamily="monospace"
              >
                STEP {node.step}
              </text>
              <text
                x={node.x + 12}
                y="142"
                fill="#f1f5f9"
                fontSize="12"
                fontWeight="600"
                fontFamily="sans-serif"
              >
                {node.title}
              </text>
              <text
                x={node.x + 12}
                y="162"
                fill="#94a3b8"
                fontSize="10"
                fontFamily="monospace"
              >
                {node.sub}
              </text>
            </g>
          ))}

          {/* Timeline Strip */}
          <rect
            x="32"
            y="206"
            width="576"
            height="44"
            rx="6"
            fill="#0e1218"
            stroke="#2d3b4d"
          />
          <circle cx="54" cy="228" r="4" fill="#14ffec" />
          <text
            x="68"
            y="232"
            fill="#94a3b8"
            fontSize="11"
            fontFamily="monospace"
          >
            ORDER ACTIVITY TIMELINE · SYNCHRONIZED MILESTONE AUDIT TRAIL
          </text>
        </svg>
      )}

      {visual === "braindance" && (
        <svg viewBox="0 0 640 280" className="h-auto w-full" fill="none">
          <defs>
            <pattern
              id="grid-braindance"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                stroke="#1e2733"
                strokeWidth="0.7"
                opacity="0.45"
              />
            </pattern>
          </defs>
          <rect width="640" height="280" fill="url(#grid-braindance)" />

          {/* Guard Layer */}
          <rect
            x="28"
            y="64"
            width="136"
            height="152"
            rx="8"
            fill="#0e1218"
            stroke="#2d3b4d"
          />
          <text
            x="44"
            y="92"
            fill="#14ffec"
            fontSize="10"
            fontFamily="monospace"
          >
            EDGE GUARDS
          </text>
          <text
            x="44"
            y="118"
            fill="#f1f5f9"
            fontSize="12"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            API Key Auth
          </text>
          <text
            x="44"
            y="142"
            fill="#f1f5f9"
            fontSize="12"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            Rate Limiter
          </text>
          <text
            x="44"
            y="166"
            fill="#f1f5f9"
            fontSize="12"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            Zod Schemas
          </text>
          <text
            x="44"
            y="194"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="monospace"
          >
            Pino telemetry
          </text>

          <path
            d="M 164 140 L 210 140"
            stroke="#14ffec"
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />

          {/* Core API */}
          <rect
            x="210"
            y="50"
            width="180"
            height="180"
            rx="8"
            fill="#141a23"
            stroke="#14ffec"
            strokeOpacity="0.45"
          />
          <text
            x="226"
            y="78"
            fill="#14ffec"
            fontSize="10"
            fontFamily="monospace"
          >
            /api/v1 · EXPRESS + TS
          </text>
          {[
            { y: 108, label: "/discover", sub: "movies & TV search" },
            { y: 148, label: "/franchises", sub: "curated collections" },
            { y: 188, label: "/watchlist", sub: "device-scoped state" },
          ].map((route) => (
            <g key={route.label}>
              <text
                x="226"
                y={route.y}
                fill="#f1f5f9"
                fontSize="12"
                fontWeight="600"
                fontFamily="monospace"
              >
                {route.label}
              </text>
              <text
                x="226"
                y={route.y + 15}
                fill="#94a3b8"
                fontSize="10"
                fontFamily="sans-serif"
              >
                {route.sub}
              </text>
            </g>
          ))}

          <path
            d="M 390 96 L 434 96 M 390 184 L 434 184"
            stroke="#2d3b4d"
            strokeWidth="1.5"
          />

          {/* Upstream + DB */}
          <rect
            x="434"
            y="52"
            width="178"
            height="80"
            rx="8"
            fill="#0e1218"
            stroke="#2d3b4d"
          />
          <text
            x="450"
            y="78"
            fill="#14ffec"
            fontSize="10"
            fontFamily="monospace"
          >
            METADATA SOURCE
          </text>
          <text
            x="450"
            y="100"
            fill="#f1f5f9"
            fontSize="13"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            TMDB Integration
          </text>
          <text
            x="450"
            y="118"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="monospace"
          >
            Genre TTL cache layer
          </text>

          <rect
            x="434"
            y="150"
            width="178"
            height="80"
            rx="8"
            fill="#0e1218"
            stroke="#2d3b4d"
          />
          <text
            x="450"
            y="176"
            fill="#14ffec"
            fontSize="10"
            fontFamily="monospace"
          >
            PERSISTENCE
          </text>
          <text
            x="450"
            y="198"
            fill="#f1f5f9"
            fontSize="13"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            MongoDB Atlas
          </text>
          <text
            x="450"
            y="216"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="monospace"
          >
            Watchlists · Progress
          </text>
        </svg>
      )}

      {visual === "garuda" && (
        <svg viewBox="0 0 640 280" className="h-auto w-full" fill="none">
          <defs>
            <pattern
              id="grid-garuda"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                stroke="#1e2733"
                strokeWidth="0.7"
                opacity="0.45"
              />
            </pattern>
          </defs>
          <rect width="640" height="280" fill="url(#grid-garuda)" />

          {/* App Router Shell */}
          <rect
            x="32"
            y="34"
            width="576"
            height="54"
            rx="8"
            fill="#0e1218"
            stroke="#14ffec"
            strokeOpacity="0.4"
          />
          <text
            x="50"
            y="58"
            fill="#14ffec"
            fontSize="10"
            fontFamily="monospace"
          >
            NEXT.JS APP ROUTER · REACT 19 · TAILWIND CSS V4
          </text>
          <text
            x="50"
            y="76"
            fill="#f1f5f9"
            fontSize="12"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            Authorised Exide Battery &amp; Power-Backup Catalogue
          </text>

          {/* 3 Pillars */}
          {[
            {
              x: 32,
              tag: "CATALOGUE",
              title: "6 Product Categories",
              lines: [
                "Spec matrices",
                "Route-aware heroes",
                "Swiper galleries",
              ],
            },
            {
              x: 230,
              tag: "DISCOVERABILITY",
              title: "Technical SEO",
              lines: [
                "LocalBusiness JSON-LD",
                "Dynamic metadata",
                "Sitemap & robots",
              ],
            },
            {
              x: 428,
              tag: "CONVERSION",
              title: "Customer Flow",
              lines: [
                "WhatsApp inquiries",
                "Branded error states",
                "Responsive layout",
              ],
            },
          ].map((card) => (
            <g key={card.tag}>
              <rect
                x={card.x}
                y="112"
                width="180"
                height="134"
                rx="8"
                fill="#141a23"
                stroke="#2d3b4d"
              />
              <text
                x={card.x + 16}
                y="138"
                fill="#14ffec"
                fontSize="10"
                fontFamily="monospace"
              >
                {card.tag}
              </text>
              <text
                x={card.x + 16}
                y="162"
                fill="#f1f5f9"
                fontSize="13"
                fontWeight="600"
                fontFamily="sans-serif"
              >
                {card.title}
              </text>
              {card.lines.map((line, i) => (
                <text
                  key={line}
                  x={card.x + 16}
                  y={188 + i * 18}
                  fill="#94a3b8"
                  fontSize="10.5"
                  fontFamily="monospace"
                >
                  · {line}
                </text>
              ))}
            </g>
          ))}
        </svg>
      )}
    </div>
  );
};

export default ProjectDiagram;
