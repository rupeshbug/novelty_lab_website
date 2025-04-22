import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-32 py-4 ">
      <div className="flex items-center justify-center gap-2">
        <Image alt="novelty_lab" width={50} height={50} src="/logo.png" />
        <h1 className="text-3xl tracking-wider text-gray-700">Novelty Lab</h1>
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
