import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md md:px-20 lg:px-40">
      <div className="flex items-center justify-center gap-2">
        <Image alt="novelty_lab" width={50} height={50} src="/logo.png" />
        <h1 className="text-2xl tracking-wider text-gray-700">Novelty Lab</h1>
      </div>
      <div className="hidden md:flex gap-20">
        <Link href="/" className="text-md text-gray-900">
          Services
        </Link>
        <Link href="/" className="text-md text-gray-900">
          About
        </Link>
        <Link href="/" className="text-md text-gray-900">
          Contact
        </Link>
      </div>
      <div>
        <button className="bg-[#09BBc8] text-white px-4 py-3 rounded-lg font-medium cursor-pointer">
          Connect With Us
        </button>
      </div>
    </nav>
  );
}
