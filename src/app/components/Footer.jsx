export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-300">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        
        <div className="md:w-1/3">
          <div className="flex items-center gap-2">
            <img src="/icons/monstera-mood-logo.png" alt="Logo" className="h-48 w-48" />
            
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Bringing tropical elegance to your home with the iconic Monstera Deliciosa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Product</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Follow us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <img src="/icons/InstagramLogo.png" alt="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <img src="/icons/TwitterLogo.png" alt="Twitter" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Monstera Store. All rights reserved.
      </div>
    </footer>
  );
}
