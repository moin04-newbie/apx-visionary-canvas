import logo from "@/logo.png";

const menuLinks = ["Home", "Service", "Our Work", "Project", "About Us"];
const serviceLinks = ["Web & App Development", "Animation", "Web Design", "Mobile App", "Performance Marketing"];
const socialLinks = ["Instagram", "Twitter", "LinkedIn", "Facebook"];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#F5F5F5] pt-20 pb-10 px-6 md:px-10">
      <div className="grid grid-cols-12 gap-10 mb-20">
        {/* Brand */}
        <div className="col-span-12 lg:col-span-4">
          <div className="flex items-center gap-2.5 mb-5">
            <img src={logo} alt="Aster.co" className="h-8 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            We are a creative team that believes that every design has a story, and our job is to tell that story in the most impactful way possible.
          </p>
        </div>

        {/* Menu */}
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-5">Menu</h4>
          <ul className="space-y-3">
            {menuLinks.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-5">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="col-span-12 md:col-span-3 lg:col-span-3">
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-5">Social Media</h4>
          <ul className="space-y-3">
            {socialLinks.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/25">© 2024 Aster.co. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors">Terms & Conditions</a>
          <span className="text-white/15">|</span>
          <a href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
