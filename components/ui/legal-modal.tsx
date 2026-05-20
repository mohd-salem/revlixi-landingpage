"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { LegalDoc } from "@/content/legal";

interface LegalModalProps {
  doc: LegalDoc;
  triggerClassName?: string;
  children: React.ReactNode;
}

export function LegalModal({ doc, triggerClassName, children }: LegalModalProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Lock body scroll and manage focus when open
  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      // Focus close button after render
      requestAnimationFrame(() => closeRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          "text-sm text-neutral-600 hover:text-neutral-950 transition-colors text-left"
        }
      >
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <div className="relative z-10 flex w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl max-h-[85vh]">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-neutral-100 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-neutral-400 mb-0.5">
                  Legal
                </p>
                <h2
                  id="legal-modal-title"
                  className="text-xl font-bold tracking-tight text-neutral-950"
                >
                  {doc.title}
                </h2>
                <p className="mt-0.5 text-xs text-neutral-400">
                  Last updated: {doc.lastUpdated}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto px-6 py-6 space-y-5 text-sm leading-relaxed text-neutral-700">
              {doc.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h3 className="mb-1.5 font-semibold text-neutral-950">
                      {section.heading}
                    </h3>
                  )}
                  <p className="whitespace-pre-line text-neutral-600">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-100 px-6 py-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full rounded-lg bg-neutral-950 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
