import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#151922] overflow-x-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-2xl" />
        <div className="absolute right-0 bottom-0 w-[250px] h-[250px] bg-yellow-100/20 rounded-full blur-xl" />
      </div>
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 max-w-5xl z-10">
        <span className="text-xl font-bold tracking-tight text-gray-200">
          ResumePro
        </span>
        <nav className="flex gap-4">
          <a
            href="#features"
            className="text-gray-400 hover:text-yellow-400 font-medium transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-400 hover:text-yellow-400 font-medium transition"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-gray-400 hover:text-yellow-400 font-medium transition"
          >
            FAQ
          </a>
        </nav>
      </header>
      {/* Hero */}
      <section className="z-10 flex flex-col items-center justify-center text-center mt-16 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4">
          Build Your <span className="text-yellow-200">Resume</span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-xl mb-6 font-normal">
          Effortlessly create beautiful, ATS-friendly resumes with modern themes
          and instant feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="#features"
            className="px-6 py-2 rounded-full border border-gray-300 text-gray-300 font-semibold hover:bg-gray-100/10 transition text-base"
          >
            Explore Features
          </a>
          <Link
            href="/app"
            className="px-6 py-2 rounded-full bg-yellow-200 text-gray-800 font-semibold shadow-sm hover:bg-yellow-300 transition text-base"
          >
            Start Building
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500 mb-2">
          <span>Free & Paid Plans</span>
          <span>•</span>
          <span>ATS Scan</span>
          <span>•</span>
          <span>PDF Export</span>
          <span>•</span>
          <span>Modern Themes</span>
        </div>
      </section>
      {/* Features */}
      <section
        id="features"
        className="z-10 w-full max-w-5xl mx-auto bg-[#181c25] rounded-2xl shadow p-8 mb-16 border border-gray-800"
      >
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          Features
        </h2>
        <ul className="grid md:grid-cols-3 gap-6 text-left">
          <li className="p-4 rounded-xl bg-[#23262f] border border-gray-800 shadow-sm">
            <span className="font-medium text-yellow-200 block mb-1">
              Guided Resume Builder
            </span>
            <span className="text-gray-400 text-sm">
              Step-by-step editor for all resume sections, with live preview.
            </span>
          </li>
          <li className="p-4 rounded-xl bg-[#23262f] border border-gray-800 shadow-sm">
            <span className="font-medium text-blue-200 block mb-1">
              Live Theming
            </span>
            <span className="text-blue-100 text-sm">
              Choose from beautiful, ATS-friendly themes and see changes
              instantly.
            </span>
          </li>
          <li className="p-4 rounded-xl bg-[#23262f] border border-gray-800 shadow-sm">
            <span className="font-medium text-yellow-200 block mb-1">
              ATS Scan & Suggestions
            </span>
            <span className="text-gray-400 text-sm">
              Instant feedback on resume strength and compatibility with
              optimization tips.
            </span>
          </li>
          <li className="p-4 rounded-xl bg-[#23262f] border border-gray-800 shadow-sm">
            <span className="font-medium text-blue-200 block mb-1">
              PDF Export
            </span>
            <span className="text-blue-100 text-sm">
              Download your resume as a professional PDF with one click.
            </span>
          </li>
          <li className="p-4 rounded-xl bg-[#23262f] border border-gray-800 shadow-sm">
            <span className="font-medium text-yellow-200 block mb-1">
              Freemium Model
            </span>
            <span className="text-gray-400 text-sm">
              Get started for free, upgrade for more features and unlimited
              downloads.
            </span>
          </li>
          <li className="p-4 rounded-xl bg-[#23262f] border border-gray-800 shadow-sm">
            <span className="font-medium text-blue-200 block mb-1">
              Secure & Private
            </span>
            <span className="text-blue-100 text-sm">
              Your data is safe, private, and never shared.
            </span>
          </li>
        </ul>
      </section>
      {/* Pricing */}
      <section id="pricing" className="z-10 w-full max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          Pricing
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="flex-1 bg-[#23262f] rounded-xl p-6 border border-gray-800 shadow-sm text-center">
            <h3 className="text-lg font-semibold text-gray-100 mb-1">Free</h3>
            <p className="text-gray-200 mb-3">
              Basic resume builder, 3 ATS scans/month, 3 themes, PDF export.
            </p>
            <div className="text-2xl font-bold text-gray-100 mb-1">$0</div>
            <div className="text-xs text-gray-300 mb-3">
              No credit card required
            </div>
            <Link
              href="/app"
              className="inline-block px-5 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold shadow-sm hover:bg-gray-300 transition"
            >
              Get Started
            </Link>
          </div>
          <div className="flex-1 bg-[#23262f] rounded-xl p-6 border border-gray-800 shadow-sm text-center">
            <h3 className="text-lg font-semibold text-yellow-200 mb-1">Pro</h3>
            <p className="text-yellow-100 mb-3">
              Unlimited ATS scans, 10+ themes, DOCX export, version history,
              priority support.
            </p>
            <div className="text-2xl font-bold text-yellow-100 mb-1">$5/mo</div>
            <div className="text-xs text-yellow-100/60 mb-3">or $25/year</div>
            <Link
              href="/app"
              className="inline-block px-5 py-2 rounded-full bg-yellow-200 text-gray-800 font-semibold shadow-sm hover:bg-yellow-300 transition"
            >
              Go Pro
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="z-10 w-full max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          FAQ
        </h2>
        <div className="space-y-5">
          <div className="bg-[#20242e] rounded-xl p-5 border border-gray-800">
            <h3 className="font-medium text-yellow-200 mb-1">
              Is ResumePro really free?
            </h3>
            <p className="text-gray-400">
              Yes! You can use the core builder, basic themes, and PDF export
              for free. Upgrade for more power.
            </p>
          </div>
          <div className="bg-[#20242e] rounded-xl p-5 border border-gray-800">
            <h3 className="font-medium text-yellow-200 mb-1">
              Is my data private?
            </h3>
            <p className="text-gray-400">
              Absolutely. Your resumes are private and never shared with third
              parties.
            </p>
          </div>
          <div className="bg-[#20242e] rounded-xl p-5 border border-gray-800">
            <h3 className="font-medium text-yellow-200 mb-1">
              Can I export to PDF and DOCX?
            </h3>
            <p className="text-gray-400">
              PDF export is available for all users. DOCX export is a Pro
              feature.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="z-10 mt-10 mb-4 text-gray-500 text-xs text-center w-full">
        &copy; {new Date().getFullYear()} ResumePro. All rights reserved.
      </footer>
    </main>
  );
}
