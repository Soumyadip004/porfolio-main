import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

export default function Hero() {
  const words = [
    "Data Scientist & AI Engineer",
    "Generative AI Enthusiast",
    "NLP & Deep Learning Explorer",
    "Building Scalable ML Systems",
  ];

  const [code] = useState(`
const profile = {
    name: 'Soumyadip Chanda',
    title: 'Data Scientist | AI Engineer | NLP Enthusiast',
    skills: [
        'Machine Learning', 'Deep Learning', 'NLP', 'LangChain',
        'HuggingFace', 'Python', 'TensorFlow', 'PyTorch', 'SQL', 'Data Visualization'
    ],
    problemSolver: true,
    creativeThinker: true,
    yearsOfExperience: 1,
    hireable: function() {
        return (
            this.problemSolver &&
            this.creativeThinker &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 1
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
          <GridBackground />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12">
            {/* Left */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-xs font-medium">Welcome to my portfolio</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <SparklesText text="Hello" />{" "}
                <span className="inline-block">I&apos;m <span className="gradient-text">Soumyadip Chanda</span></span>
              </h1>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
                <FlipWords className="text-lg sm:text-xl text-blue-400 font-medium" words={words} />
              </div>

              <p className="text-base sm:text-xl text-gray-300/90 mb-8 max-w-xl">
                Passionate Data Scientist 📊 | Engineering generative AI & NLP solutions 🧠 | Turning data into actionable intelligence 🚀
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://github.com/Soumyadip004" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl hover:scale-105 transition">
                  <span className="w-full px-6 py-3 rounded-[11px] bg-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="flex items-center gap-2 text-white font-medium">Learn More <i className="fas fa-arrow-right"></i></span>
                  </span>
                </a>
                <a href="https://drive.google.com/file/d/1iS7x6SofiIKc2oKguGb0IqpHaZr3WZNG/view" className="group inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:scale-105 transition">
                  <span className="w-full px-6 py-3 rounded-[11px] bg-gray-900 border border-gray-700/50">
                    <span className="flex items-center gap-2 text-gray-300 group-hover:text-white font-medium">Get Resume <i className="fas fa-envelope"></i></span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right - code window */}
            <div className="w-full lg:w-1/2">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i> profile.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code>{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PortfolioPage />
      </main>
    </>
  );
}
