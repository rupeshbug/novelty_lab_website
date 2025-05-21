export default function FooterExperiment() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#899fd4] to-[#023549] text-gray-800 py-16 px-6 md:px-20 md:py-16 mt-40">
      {/* Large, faint lab wordmark in background */}
      <span className="pointer-events-none select-none absolute inset-0 flex justify-center items-center md:justify-start md:pl-24 overflow-hidden">
        <span className="whitespace-nowrap font-extrabold text-[14vw] sm:text-[12vw] md:text-[10vw] leading-none text-gray-100 opacity-30 uppercase mx-auto">
          NOVELTY LAB
        </span>
      </span>

      {/* Main content grid */}
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-4 gap-14 text-slate-100">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black">Novelty Lab</h2>
          <p className="text-md max-w-xs">Contact Us so we can help you grow</p>
          <div className="flex">
            <input
              className="bg-white rounded-md py-3 px-2"
              placeholder="Work Email*"
            />
            <button className="px-5 py-3 cursor-pointer rounded-md border border-yellow-400">
              Subscribe
            </button>
          </div>
        </div>

        <ul className="space-y-2 text-md">
          <li className="font-bold">About</li>
          <li>
            <a className="hover:text-[#09bbc8]" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="hover:text-[#09bbc8]" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:text-[#09bbc8]" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:text-[#09bbc8]" href="#blog">
              Blog
            </a>
          </li>
        </ul>

        <ul className="space-y-2 text-md">
          <li className="font-bold">Resources</li>
          <li>
            <a className="hover:text-[#09bbc8]" href="#docs">
              Documentation
            </a>
          </li>
          <li>
            <a className="hover:text-[#09bbc8]" href="#faq">
              FAQ
            </a>
          </li>
          <li>
            <a className="hover:text-[#09bbc8]" href="#support">
              Support
            </a>
          </li>
        </ul>

        <ul className="space-y-2 text-md">
          <li className="font-bold">Social</li>
          <li>
            <a className="hover:text-[#09bbc8]" href="https://twitter.com">
              X
            </a>
          </li>
          <li>
            <a className="hover:text-[#09bbc8]" href="https://linkedin.com">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#09bbc8]"
              href="mailto:hello@noveltylab.com"
            >
              Email
            </a>
          </li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
        <p className="text-slate-300">
          © {new Date().getFullYear()} Novelty Lab. All rights reserved.
        </p>
        <div className="flex gap-6 text-slate-300">
          <a href="#privacy" className="hover:text-[#09bbc8]">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-[#09bbc8]">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
