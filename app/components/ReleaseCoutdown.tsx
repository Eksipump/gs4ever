"use client";

import { useEffect, useState } from "react";

const RELEASE_DATE = new Date("2026-11-05T00:00:00+01:00").getTime();

function getRemainingTime() {
  const distance = Math.max(0, RELEASE_DATE - Date.now());

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

export function ReleaseCountdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemainingTime> | null>(
    null,
  );

  useEffect(() => {
    setTime(getRemainingTime());

    const interval = setInterval(() => {
      setTime(getRemainingTime());
    }, 1_000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return null;
  }

  const values = [
    { label: "JOURS", value: time.days },
    { label: "HEURES", value: time.hours },
    { label: "MIN", value: time.minutes },
    { label: "SEC", value: time.seconds },
  ];

  return (
    <div className="absolute bottom-20 right-0 hidden lg:block">
      <p className="mb-4 text-xs tracking-widest text-violet-300">
        SORTIE DE WOW FOREVER
      </p>

      <div className="grid grid-cols-4 divide-x divide-white/10">
        {values.map(({ label, value }) => (
          <div key={label} className="min-w-20 px-5 first:pl-0 last:pr-0">
            <strong className="block font-serif text-3xl font-normal tabular-nums text-white">
              {String(value).padStart(2, "0")}
            </strong>

            <span className="mt-1 block text-xs tracking-widest text-white/40">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 h-px bg-gradient-to-r from-violet-400/60 to-transparent" />

      <p className="mt-3 text-xs tracking-widest text-white/40">
        05 NOVEMBRE 2026
      </p>
    </div>
  );
}
