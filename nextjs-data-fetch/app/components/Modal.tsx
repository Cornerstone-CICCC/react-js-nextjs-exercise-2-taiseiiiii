"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl"
      >
        {children}
        <button
          onClick={() => router.back()}
          className="mt-6 text-blue-600 transition hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
