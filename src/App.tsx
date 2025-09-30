import React, { useEffect, useState } from "react";
import "./index.css";
import { CheckCircle, PhoneIcon, MailIcon, MapPinIcon } from "./icons";

const LOGO_SRC = "/image000000-3.png"; // ensure this file exists in /public
const LICENSE_BADGE = "Licensed • Bonded • Insured — TX License #7953";

function buildMailto({ name, email, phone, message }: { name: string; email: string; phone: string; message: string }) {
  const subject = encodeURIComponent("Quote Request - 3 Generations Electric");
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
  return `mailto:3generationselectric@gmail.com?subject=${subject}&body=${body}`;
}

type Route = "/" | "/privacy" | "/terms";
const getRoute = (): Route => {
  const h = (window.location.hash || "#/").replace("#", "");
  if (h === "/privacy") return "/privacy";
  if (h === "/terms") return "/terms";
  return "/";
};

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = "", ...props }) => (
  <button className={"px-4 py-2 rounded-xl font-medium shadow-sm " + className} {...props} />
);
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = "", ...props }) => (
  <input className={"w-full px-3 py-2 rounded-xl border border-slate-300 " + className} {...props} />
);
const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className = "", ...props }) => (
  <textarea className={"w-full px-3 py-2 rounded-xl border border-slate-300 min-h-[120px] " + className} {...props} />
);

function HomePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const submitHref = buildMailto(form);

  return (
    <>
      {/* Hero */}
      <section id="home" className="relative">
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              Powering Homes for <span className="text-yellow-600">3 Generations</span>
            </h1>
            <p className="mt-6 text-lg text-slate-700 max-w-prose">
              Trusted residential electricians in Austin, Manor, Bastrop & Elgin. From EV chargers to full panel upgrades —
              safe, reliable, and family-run service.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <a href="tel:17372337319">
                <Button className="w-full sm:w-auto bg-yellow-500 text-black hover:bg-yellow-400">Call (English) 737-233-7319</Button>
              </a>
              <a href="tel:17372337320">
                <Button className="w-full sm:w-auto border border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-black bg-transparent">
                  Llamar (Español) 737-233-7320
                </Button>
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-700">
              {["Free same-day quotes", "Clean, on-time work", "Up-front pricing"].map((t) => (
                <li key={t} className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm">
                  <CheckCircle className="w-4 h-4 text-yellow-500" /> {t}
                </li>
              ))}
             <li className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
  {LICENSE_BADGE}
</li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="grid place-items-center">
              <img
                src={LOGO_SRC}
                alt="3 Generations Electric logo"
                className="max-h-40 md:max-h-72 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).outerHTML =
                    '<div class="h-44 w-44 bg-slate-100 grid place-items-center text-xs">Logo</div>';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile quick action bar */}
      <div className="fixed md:hidden bottom-4 left-0 right-0 px-4 z-40">
        <div className="mx-auto max-w-sm rounded-2xl shadow-lg bg-white flex overflow-hidden border border-slate-200">
          <a className="flex-1 py-3 text-center font-medium" href="tel:17372337319">Call</a>
          <div className="w-px bg-slate-200"/>
          <a className="flex-1 py-3 text-center font-medium" href="#contact">Quote</a>
        </div>
      </div>

      {/* Services */}
      <section id="services">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">Upgrades, installs, and repairs tailored to your home’s needs.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-4 text-slate-700">
            {[
              "Residential Wiring & Repairs",
              "Panel Upgrades",
              "Lighting Installation (indoor & outdoor)",
              "Ceiling Fans & Outlets",
              "EV Charger Installation",
              "Smart Home Wiring",
              "Landscape & Outdoor Lighting",
              "New Construction & Remodels",
              "Appliance & HVAC Wiring",
              "Emergency Electrical Service",
            ].map((s) => (
              <div key={s} className="flex items-start gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm">
                <CheckCircle className="mt-0.5 w-4 h-4 text-yellow-500" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-700 leading-relaxed text-lg">
            Our company started as a small family venture over three generations ago, when our grandfather began wiring homes
            in the Austin area with a simple promise: do the job right, treat people fairly, and always stand by your work.
            That spirit continues today. Over the years, we’ve grown alongside the community, helping neighbors modernize
            their homes, install safer panels, and embrace new technologies like EV chargers and smart home systems. We believe
            in clear communication, honest pricing, and leaving every project cleaner than when we arrived.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Get a Fast Quote</h2>
            <p className="mt-3 text-slate-700">Same-day responses in most cases.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-yellow-600" /> (English) <a className="underline" href="tel:17372337319">737-233-7319</a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-yellow-600" /> (Español) <a className="underline" href="tel:17372337320">737-233-7320</a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-yellow-600" /> 3generationselectric@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-yellow-600" /> Austin, Manor, Bastrop, Elgin
              </div>
            </div>
          </div>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (!form.name || !form.email || !form.phone || !form.message) {
                alert("Please fill in all required fields including phone number.");
                return;
              }
              window.location.href = submitHref;
            }}
            aria-label="Quote form"
          >
            <label className="block text-sm font-medium text-slate-700">
              Your name <span className="text-red-500">*</span>
              <Input required name="name" placeholder="Your name" value={form.name} onChange={onChange} />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Your email <span className="text-red-500">*</span>
              <Input required name="email" type="email" placeholder="Your email" value={form.email} onChange={onChange} />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Your phone <span className="text-red-500">*</span>
              <Input required name="phone" type="tel" placeholder="Your phone number" value={form.phone} onChange={onChange} />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Your message <span className="text-red-500">*</span>
              <Textarea required name="message" placeholder="Tell us what you need (e.g., panel upgrade, EV charger, lights)" value={form.message} onChange={onChange} />
            </label>
            <div className="flex flex-wrap gap-3">
              <Button type="submit" className="bg-yellow-500 text-black hover:bg-yellow-400">
                Email Quote
              </Button>
              <a href="tel:17372337319">
                <Button type="button" className="border border-slate-300 bg-white hover:bg-slate-50">
                  Call Now
                </Button>
              </a>
            </div>
            <p className="text-xs text-slate-500">
              By contacting us, you agree to our <a href="#/terms" className="underline">Terms</a> & <a href="#/privacy" className="underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: September 26, 2025</p>
      <p className="mb-4">
        3 Generations Electric (“Company,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we
        collect, use, and protect your information.
      </p>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Effective Date: September 26, 2025</p>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(253,224,71,0.35)_0%,rgba(253,224,71,0.18)_22%,rgba(253,224,71,0.08)_45%,rgba(255,255,255,1)_78%,rgba(255,255,255,1)_100%)] text-slate-800 font-[Inter] scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/90 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#/" className="font-extrabold text-xl text-yellow-600 tracking-wide uppercase">
            3 Generations Electric
          </a>
          <div className="flex items-center gap-6">
            <a href="#/" className="hover:text-yellow-600 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-600 text-sm font-medium transition-colors">
              About Us
            </a>
            <a href="#contact">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400">Free Quote</Button>
            </a>
          </div>
        </div>
      </header>

      {route === "/" && <HomePage />}
      {route === "/privacy" && <PrivacyPage />}
      {route === "/terms" && <TermsPage />}

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} 3 Generations Electric. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>
              TX License #: <span className="font-medium">7953</span>
            </span>
            <a href="#/terms" className="hover:opacity-80">
              Terms
            </a>
            <a href="#/privacy" className="hover:opacity-80">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
