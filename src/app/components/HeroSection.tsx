export default function Hero() {
  return (
    <section className="bg-white py-20 px-40">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-wide mb-6">
            Supercharge Your Business with{" "}
            <span className="text-[#09bbc8]">AI-Powered Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-xl">
            Empowering businesses with AI-driven software and innovative digital
            strategies that deliver real-world impact.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#09bbc8] text-white px-5 py-3 cursor-pointer rounded-lg text-base font-medium hover:bg-[#07a5b0] transition">
              Get Started
            </button>
            <button className="text-[#09bbc8] border border-[#09bbc8] px-5 py-3 cursor-pointer rounded-lg text-base font-medium hover:bg-[#f0fafa] transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 bg-[#f0fafa] rounded-xl shadow-inner flex items-center justify-center text-[#09bbc8] text-lg">
            [ Illustration / Image ]
          </div>
        </div>
      </div>
    </section>
  );
}
