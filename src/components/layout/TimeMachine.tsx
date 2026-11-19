"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { HistoryOutlined } from "@/components/icons";

const versions = [
  {
    id: "v2",
    label: "v2",
    title: "Editorial",
    tag: "Current",
    href: "/",
  },
  {
    id: "v1",
    label: "v1",
    title: "Original Bento",
    tag: "Archive",
    href: "/v1",
  },
] as const;

const TimeMachine = () => {
  const pathname = usePathname();
  const isV1 = pathname === "/v1" || pathname.startsWith("/v1/");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const openedByHoverRef = useRef(false);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        openedByHoverRef.current = false;
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        openedByHoverRef.current = false;
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={`fixed right-4 z-50 flex flex-col items-end ${
        isV1
          ? "bottom-24 lg:right-6 lg:bottom-6"
          : "bottom-20 md:right-6 md:bottom-6"
      }`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          openedByHoverRef.current = true;
          setOpen(true);
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          openedByHoverRef.current = false;
          setOpen(false);
        }
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="pb-2"
          >
            <div
              role="menu"
              aria-label="Portfolio versions"
              className="border-border-strong bg-surface/95 w-52 rounded-xl border p-1.5 shadow-2xl backdrop-blur-md"
            >
              <p className="text-ink-subtle px-2.5 py-1.5 font-mono text-[10px] tracking-widest uppercase">
                Time Machine
              </p>

              <div className="space-y-1">
                {versions.map((version) => {
                  const isActive = version.id === "v1" ? isV1 : !isV1;

                  return (
                    <Link
                      key={version.id}
                      href={version.href}
                      role="menuitem"
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => {
                        openedByHoverRef.current = false;
                        setOpen(false);
                      }}
                      className={`flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-xs transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary border-primary/30 border"
                          : "text-ink-muted hover:bg-surface-elevated hover:text-ink border border-transparent"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className={`h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-primary" : "bg-ink-subtle"
                          }`}
                        />
                        <span className="font-mono font-semibold">
                          {version.label}
                        </span>
                        <span className="text-ink-subtle font-normal">
                          · {version.title}
                        </span>
                      </span>
                      <span className="font-mono text-[10px] opacity-80">
                        {version.tag}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          if (openedByHoverRef.current && open) {
            openedByHoverRef.current = false;
            return;
          }
          openedByHoverRef.current = false;
          setOpen((prev) => !prev);
        }}
        aria-label="Time Machine — switch portfolio version"
        aria-expanded={open}
        aria-haspopup="menu"
        className="border-border-strong bg-surface/95 text-ink hover:border-primary/70 hover:text-primary inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium shadow-lg backdrop-blur-md transition-colors"
      >
        <HistoryOutlined className="text-primary text-sm" aria-hidden="true" />
        <span className="font-mono font-semibold">{isV1 ? "v1" : "v2"}</span>
        <span
          aria-hidden="true"
          className="bg-primary h-1.5 w-1.5 rounded-full"
        />
      </button>
    </div>
  );
};

export default TimeMachine;
