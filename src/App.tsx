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
const h = (window.location.hash || "#/" ).replace("#", "");
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
<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-slate-700">
  {[
    "Free same-day quotes",
    "Clean, on-time work",
    "Up-front pricing",
    // Short badge on small screens; show license # from md+
    "Licensed • Bonded • Insured",
  ].map((t, i) => (
    <li key={i} className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg shadow-sm whitespace-nowrap">
      <CheckCircle className="w-4 h-4 text-yellow-500" />
      <span className="text-[13px] md:text-sm">
        {t}
        {i === 3 && <span className="hidden md:inline"> — TX License #7953</span>}
      </span>
    </li>
  ))}
</ul>

</div>
<div className="md:col-span-5">
<div className="grid place-items-center">
<img
  src={LOGO_SRC}
  alt="3 Generations Electric logo"
  className="max-h-40 md:max-h-72 w-auto object-contain rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 md:hover:scale-[1.02]"
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
}
function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      <a href="#/" className="text-sm underline text-slate-600 hover:text-slate-900">← Back to Home</a>
      <div className="mt-4 bg-white rounded-2xl shadow-md p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="mb-6 text-slate-600">Effective Date: {formatDate()}</p>

        <p className="mb-4">
          3 Generations Electric (“Company,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we
          collect, use, and protect your information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Contact form data: name, phone number, email, and message.</li>
          <li>Phone & email: if you call or email us directly.</li>
          <li>Automatic info: we do not track cookies or run ads on this site.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide same-day quotes and respond to your requests.</li>
          <li>To schedule and complete electrical services.</li>
          <li>To improve communication with our customers.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Do NOT Share</h2>
        <p className="mb-4">We do not sell or rent your personal information. We only share your information if required by law.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Data Retention</h2>
        <p className="mb-4">
          We keep records of quotes and jobs as required by Texas business law. You may request deletion at any time by emailing
          3generationselectric@gmail.com.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-6">Texas residents may request access, correction, or deletion of personal information via the email above.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
          3 Generations Electric<br/>Austin, TX<br/>
          Email: 3generationselectric@gmail.com<br/>
          Phone: (737) 233-7319
        </p>
      </div>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-800">
      <a href="#/" className="text-sm underline text-slate-600 hover:text-slate-900">← Back to Home</a>
      <div className="mt-4 bg-white rounded-2xl shadow-md p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="mb-6 text-slate-600">Effective Date: {formatDate()}</p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Services</h2>
        <p className="mb-4">
          We provide licensed residential electrical work in Texas. Quotes are free and based on information provided by the
          customer. Final pricing may change depending on job conditions.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Licensing</h2>
        <p className="mb-4">All work is performed under Texas Department of Licensing & Regulation License #: 7953.</p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          We are not responsible for delays caused by weather, material shortages, or utility providers. Services are provided “as
          available.” We make every effort to complete jobs safely and on time.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Payments</h2>
        <p className="mb-4">Payment terms will be outlined in your invoice or service agreement.</p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Governing Law</h2>
        <p className="mb-6">These Terms are governed by the laws of the State of Texas. Venue: courts of Travis County, Texas.</p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Contact Us</h2>
        <p>
          3 Generations Electric<br/>Austin, TX<br/>
          Email: 3generationselectric@gmail.com<br/>
          Phone: (737) 233-7319
        </p>
      </div>
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
