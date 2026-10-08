"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const COOKIE_KEY = "cookie_consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "refused" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored === "accepted" || stored === "refused") {
      setConsent(stored);
    }
  }, []);

  return consent;
}

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<"accepted" | "refused" | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored === "accepted" || stored === "refused") {
      setConsent(stored as "accepted" | "refused");
    } else {
      setVisible(true);
    }

    const handler = () => {
      localStorage.removeItem(COOKIE_KEY);
      setConsent(null);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  }

  function refuse() {
    localStorage.setItem(COOKIE_KEY, "refused");
    setConsent("refused");
    setVisible(false);
  }

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics gaId="G-CEFFTN7E9S" />}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white px-4 py-5 shadow-lg sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-sm text-gray-700">
              Ce site utilise Google Analytics pour mesurer l&apos;audience. Vos données restent
              anonymisées. Vous pouvez accepter ou refuser ces cookies.{" "}
              <a href="/politique-confidentialite" className="underline hover:text-gray-900">
                En savoir plus
              </a>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={refuse}
                className="rounded border border-gray-400 bg-white px-5 py-2 font-sans text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="rounded border border-gray-800 bg-gray-800 px-5 py-2 font-sans text-sm font-medium text-white transition hover:bg-gray-700"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
