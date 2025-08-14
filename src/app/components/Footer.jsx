import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-300">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img
                src="/icons/monstera-logo.png"
                alt="Monstera"
                className="h-32 w-32 md:h-32 md:w-32 object-contain"
              />
            </div>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Bringing tropical elegance to your home with the iconic Monstera Deliciosa.
            </p>
          </div>

          <div>
            <details className="md:hidden group rounded-[30px] border border-white/10">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer select-none text-white font-medium">
                Navigation
                <span className="ml-3 grid h-6 w-6 place-items-center rounded-full bg-white/10">
                  <svg className="h-3.5 w-3.5 text-zinc-200 group-open:hidden" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M4 0h2v10H4zM0 4h10v2H0z" />
                  </svg>
                  <svg className="hidden h-3.5 w-3.5 text-zinc-200 group-open:block" viewBox="0 0 10 2" fill="currentColor">
                    <rect width="10" height="2" />
                  </svg>
                </span>
              </summary>
              <ul className="px-4 pb-3 space-y-2 text-sm">
                <li><Link href="#benefits" className="block hover:text-white">Benefits</Link></li>
                <li><Link href="#product" className="block hover:text-white">Product</Link></li>
                <li><Link href="#faq" className="block hover:text-white">FAQ</Link></li>
              </ul>
            </details>

            <div className="hidden md:block">
              <h4 className="text-white font-medium mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#benefits" className="hover:text-white">Benefits</Link></li>
                <li><Link href="#product" className="hover:text-white">Product</Link></li>
                <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <details className="md:hidden group rounded-[30px] border border-white/10">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer select-none text-white font-medium">
                Help
                <span className="ml-3 grid h-6 w-6 place-items-center rounded-full bg-white/10">
                  <svg className="h-3.5 w-3.5 text-zinc-200 group-open:hidden" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M4 0h2v10H4zM0 4h10v2H0z" />
                  </svg>
                  <svg className="hidden h-3.5 w-3.5 text-zinc-200 group-open:block" viewBox="0 0 10 2" fill="currentColor">
                    <rect width="10" height="2" />
                  </svg>
                </span>
              </summary>
              <ul className="px-4 pb-3 space-y-2 text-sm">
                <li><Link href="/shipping" className="block hover:text-white">Shipping</Link></li>
                <li><Link href="/returns" className="block hover:text-white">Returns</Link></li>
                <li><Link href="#" className="block hover:text-white">Contact</Link></li>
              </ul>
            </details>

            <div className="hidden md:block">
              <h4 className="text-white font-medium mb-4">Help</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Link href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <img src="/icons/InstagramLogo.png" alt="" className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <img src="/icons/TwitterLogo.png" alt="" className="h-5 w-5" />
            </Link>
          </div>
          <div className="text-center md:text-right text-xs text-zinc-500">
            © {new Date().getFullYear()} Monstera Store. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
