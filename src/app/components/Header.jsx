import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="h-16 mt-4 rounded-full bg-black/70 backdrop-blur border border-white/10
                        flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/icons/monstera-mood-logo.png"
              alt="MonsteraMood"
              className="h-32 w-32"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
            <li><a href="#care" className="hover:text-white">Care</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>

          <a
            href="#buy"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white text-black
                       px-6 py-2 text-sm font-medium transition-transform hover:scale-105"
          >
            Buy
          </a>
        </nav>
      </div>
    </header>
  );
}
