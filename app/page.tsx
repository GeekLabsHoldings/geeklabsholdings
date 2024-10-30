"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/logo.png"
            alt="Geek Labs Holdings Logo"
            className="w-[200px] md:w-[300px] mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#28ACE3] to-[#DC038D] text-transparent bg-clip-text">
          Geek Labs Holdings
        </h1>

        <div className="bg-black/50 p-8 rounded-lg border border-[#28ACE3]/20">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#28ACE3]">
            Building the Future of Media & Technology
          </h2>

          <div className="space-y-6 text-gray-300 text-left max-w-3xl mx-auto">
            <p>
              Geek Labs Holdings is a privately held mergers and acquisitions
              firm focused on media and technology assets. We specialize in
              identifying promising startup media brands and turning them into
              substantial businesses.
            </p>

            <p>
              Using a unique buyer-and-builder approach, we acquire undervalued
              companies with strong audiences but untapped revenue potential.
              The firm brings its expertise in marketing, operations and
              monetization to strengthen firms post-acquisition.
            </p>

            <p className="italic text-center text-[#DC038D] mt-8">
              Website Coming Soon
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
