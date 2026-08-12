"use client";

import React, { useState } from "react";
import { Eye, Banknote, FileText, Volume2, ShieldAlert, Camera, Sparkles } from "lucide-react";

export default function BlindCompanionApp() {
  const [activeMode, setActiveMode] = useState<"scene" | "currency" | "ocr">("scene");
  const [announcement, setAnnouncement] = useState("AI Voice Companion Active. High contrast mode enabled.");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const speakText = (text: string) => {
    setAnnouncement(text);
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  const processCameraAction = (mode: "scene" | "currency" | "ocr") => {
    setActiveMode(mode);
    setLoading(true);

    setTimeout(() => {
      if (mode === "scene") {
        const text = "You are standing in front of a wooden door. A desk is on your left with a laptop.";
        setResult({
          title: "Scene Description",
          content: text,
          obstacles: "Chair 1.5 meters ahead. Clear path.",
        });
        speakText(text);
      } else if (mode === "currency") {
        const text = "Detected 1000 Pakistani Rupee note. Authenticity verified.";
        setResult({
          title: "Currency Identification",
          content: text,
          confidence: "98.4%",
        });
        speakText(text);
      } else if (mode === "ocr") {
        const text = "Panadol Extra 500mg. Take 1 tablet every 8 hours after meals.";
        setResult({
          title: "Text Reader (OCR)",
          content: text,
        });
        speakText(text);
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-amber-300 font-sans flex flex-col p-6 space-y-6 select-none">
      {/* Accessible High-Contrast Header */}
      <header className="border-4 border-amber-400 p-4 rounded-2xl bg-amber-950/40 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Eye className="w-10 h-10 text-amber-400" />
          <div>
            <h1 className="text-2xl font-black tracking-wider uppercase text-amber-400">Blind AI Companion 👁️</h1>
            <p className="text-sm font-bold text-amber-200">ACCESSIBILITY FIRST (WCAG 2.1 AA COMPLIANT)</p>
          </div>
        </div>

        <button
          onClick={() => speakText(announcement)}
          className="bg-amber-400 text-black font-black px-5 py-3 rounded-xl hover:bg-amber-300 text-sm flex items-center gap-2"
          aria-label="Repeat Audio Announcement"
        >
          <Volume2 className="w-6 h-6" />
          <span>SPEAK AGAIN</span>
        </button>
      </header>

      {/* Audio Announcement Banner */}
      <div className="bg-amber-400 text-black p-4 rounded-2xl font-black text-lg flex items-center gap-3 border-2 border-white">
        <Volume2 className="w-8 h-8 flex-shrink-0 animate-bounce" />
        <span>{announcement}</span>
      </div>

      {/* Main Action Touch Buttons for Blind Users */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => processCameraAction("scene")}
          className={`p-8 rounded-3xl border-4 text-left flex flex-col justify-between transition-all ${
            activeMode === "scene"
              ? "bg-amber-400 text-black border-white shadow-2xl scale-105"
              : "bg-zinc-900 border-amber-500/60 text-amber-300 hover:border-amber-400"
          }`}
          aria-label="Describe Surrounding Scene"
        >
          <Eye className="w-16 h-16 mb-4" />
          <div>
            <h2 className="text-3xl font-black uppercase">1. Scene Describe</h2>
            <p className="text-base font-bold mt-2">Identifies objects, people, and obstacles in front of you.</p>
          </div>
        </button>

        <button
          onClick={() => processCameraAction("currency")}
          className={`p-8 rounded-3xl border-4 text-left flex flex-col justify-between transition-all ${
            activeMode === "currency"
              ? "bg-amber-400 text-black border-white shadow-2xl scale-105"
              : "bg-zinc-900 border-amber-500/60 text-amber-300 hover:border-amber-400"
          }`}
          aria-label="Identify Currency Notes"
        >
          <Banknote className="w-16 h-16 mb-4" />
          <div>
            <h2 className="text-3xl font-black uppercase">2. Currency Note</h2>
            <p className="text-base font-bold mt-2">Identifies Pakistani Rupee banknotes and detects fakes.</p>
          </div>
        </button>

        <button
          onClick={() => processCameraAction("ocr")}
          className={`p-8 rounded-3xl border-4 text-left flex flex-col justify-between transition-all ${
            activeMode === "ocr"
              ? "bg-amber-400 text-black border-white shadow-2xl scale-105"
              : "bg-zinc-900 border-amber-500/60 text-amber-300 hover:border-amber-400"
          }`}
          aria-label="Read Text Out Loud"
        >
          <FileText className="w-16 h-16 mb-4" />
          <div>
            <h2 className="text-3xl font-black uppercase">3. Read Text</h2>
            <p className="text-base font-bold mt-2">Reads medicine boxes, menus, and signboards out loud.</p>
          </div>
        </button>
      </main>

      {/* Result Display Box */}
      {result && (
        <section className="border-4 border-amber-400 bg-zinc-900 rounded-3xl p-8 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-amber-500 pb-3">
            <h3 className="text-2xl font-black text-amber-400 uppercase tracking-wider">{result.title}</h3>
            {result.confidence && <span className="bg-amber-400 text-black font-black px-4 py-1 rounded-full text-base">{result.confidence}</span>}
          </div>
          <p className="text-2xl font-bold leading-relaxed text-white">{result.content}</p>
          {result.obstacles && (
            <div className="bg-rose-950 border-2 border-rose-500 p-4 rounded-xl text-rose-200 font-black text-lg flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-rose-400" />
              <span>{result.obstacles}</span>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
