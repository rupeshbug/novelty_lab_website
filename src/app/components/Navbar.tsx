import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-32 py-2">
      <div>
        <Image alt="novelty_lab" width={250} height={60} src="/logo.png" />
      </div>
      <div className="flex gap-20">
        <Link href="/" className="text-lg text-gray-900">
          Services
        </Link>
        <Link href="/" className="text-lg text-gray-900">
          About
        </Link>
        <Link href="/" className="text-lg text-gray-900">
          Contact
        </Link>
      </div>
      <div>
        <button className="bg-[#09BBc8] text-white px-4 py-2 rounded-lg text-lg cursor-pointer">
          Connect With Us
        </button>
      </div>
    </nav>
  );
}
