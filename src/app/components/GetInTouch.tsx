import { Mail, Rocket } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="py-16 px-8 md:px-20 md:py-20 lg:px-40 relative overflow-hidden">
      <div className="bg-yellow-200 rounded-3xl shadow-xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to build something bold?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Whether you have a specific idea or just want to explore what is
            possible with AI and digital strategy — we would love to hear from
            you. Let us create something novel together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@noveltylab.xyz"
              className="inline-flex items-center gap-2 bg-[#09bbc8] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
            >
              <Mail size={20} />
              Email Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-[#09bbc8] text-[#09bbc8] px-6 py-3 rounded-full font-semibold hover:bg-[#09bbc8]/10 transition"
            >
              <Rocket size={20} />
              Let’s Collaborate
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="/bot_human_handshake.png"
            alt="AI and human shaking hands"
            className="w-72 h-72 drop-shadow-lg rounded-full bg-slate-100"
          />
        </div>
      </div>
    </section>
  );
}
