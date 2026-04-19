import React, { useState } from "react";
import { Sparkles, Users } from "lucide-react";

const events = [
  {
    title: "Navigating UX Design",
    type: "Organizer",
    speaker: "Amiya Chaturvedi",
    description:
      "Shared practical insights on user-centered design and balancing business goals with user needs.",
    image:
      "https://framerusercontent.com/images/rAKYsvVPZpOpiIe80DLwxUtYqME.png",
  },
  {
    title: "Unlock the Frontend",
    type: "Organizer",
    speaker: "Anurag Singh",
    description:
      "Frontend expert sharing real-world insights and best practices to level up development skills.",
    image:
      "https://framerusercontent.com/images/0z75vmS9zniXn3ev4CqLojNq8o.png",
  },
  {
    title: "Talk about Design",
    type: "Organizer",
    speaker: "Shubham",
    description:
      "CEO of Design Talk sharing insights into design thinking and building a personal brand.",
    image:
      "https://framerusercontent.com/images/dWqV3887OQnuchLlSewN7LF0SSU.png?scale-down-to=1024",
  },
  {
    title: "Research on UX",
    type: "Organizer",
    speaker: "Nicholas K. Osei",
    description:
      "Startup partner with Microsoft sharing powerful insights on user research in tech.",
    image:
      "https://framerusercontent.com/images/UV8wB54En5OzRRk4HZ9KXJb5so.png?scale-down-to=1024",
  },
];

export function Events() {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeEvents = [...events, ...events, ...events, ...events];

  return (
    <section
      id="events"
      className="relative py-24 md:py-32 bg-gray-50 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-semibold text-black tracking-tighter leading-none">
              Events & <span className="text-[#1e60ff]">Impact</span>
            </h2>
          </div>
          <p className="text-xl text-gray-500 max-w-sm font-light leading-relaxed">
            Building the design ecosystem through workshops and knowledge
            sharing.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex pb-10">
        <div
          className="flex gap-6 md:gap-8 w-max px-4 animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {marqueeEvents.map((event, index) => (
            <div
              key={index}
              className="group relative w-[320px] md:w-[420px] flex-shrink-0 bg-white p-3 rounded-[32px] border border-gray-200/60 shadow-sm hover:shadow-2xl hover:shadow-[#1e60ff]/10 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                  <Sparkles size={12} className="text-[#1e60ff]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black font-bold">
                    {event.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-semibold text-black tracking-tight mb-3 transition-colors group-hover:text-[#1e60ff]">
                  {event.title}
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <Users size={14} className="text-gray-400" />
                  <p className="text-gray-500 text-[11px] font-mono uppercase tracking-[0.2em]">
                    Guest:{" "}
                    <span className="text-black font-semibold">
                      {event.speaker}
                    </span>
                  </p>
                </div>
                <p className="text-gray-500 font-light leading-relaxed text-sm line-clamp-3">
                  {event.description}
                </p>
                <div className="mt-6 h-[2px] w-12 bg-gray-100 group-hover:w-full group-hover:bg-[#1e60ff] transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
