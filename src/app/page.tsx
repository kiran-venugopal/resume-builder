import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 max-w-5xl z-10">
        <span className="text-xl font-bold tracking-tight text-gray-200">
          ResumePro
        </span>
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <a href="#features">Features</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#pricing">Pricing</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#faq">FAQ</a>
          </Button>
        </nav>
      </header>
      {/* Hero */}
      <section className="z-10 flex flex-col items-center justify-center text-center mt-16 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4">
          Build Your <span className="text-yellow-200">Resume</span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-xl mb-6 font-normal">
          Effortlessly create beautiful, ATS-friendly resumes with modern themes
          and instant feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Button variant="outline" asChild>
            <a href="#features">Explore Features</a>
          </Button>
          <Button asChild>
            <Link href="/app">Start Building</Link>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500 mb-2">
          <Badge variant="secondary">Free & Paid Plans</Badge>
          <Separator orientation="vertical" className="h-4 mx-1" />
          <Badge variant="secondary">ATS Scan</Badge>
          <Separator orientation="vertical" className="h-4 mx-1" />
          <Badge variant="secondary">PDF Export</Badge>
          <Separator orientation="vertical" className="h-4 mx-1" />
          <Badge variant="secondary">Modern Themes</Badge>
        </div>
      </section>
      {/* Features */}
      <section
        id="features"
        className="z-10 w-full max-w-5xl mx-auto rounded-2xl shadow p-8 mb-16 border border-gray-800"
      >
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Card>
            <CardHeader>
              <Badge variant="secondary">Guided Resume Builder</Badge>
            </CardHeader>
            <CardContent>
              <span className="text-gray-400 text-sm">
                Step-by-step editor for all resume sections, with live preview.
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge variant="secondary">Live Theming</Badge>
            </CardHeader>
            <CardContent>
              <span className="text-blue-100 text-sm">
                Choose from beautiful, ATS-friendly themes and see changes
                instantly.
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge variant="secondary">ATS Scan & Suggestions</Badge>
            </CardHeader>
            <CardContent>
              <span className="text-gray-400 text-sm">
                Instant feedback on resume strength and compatibility with
                optimization tips.
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge variant="secondary">PDF Export</Badge>
            </CardHeader>
            <CardContent>
              <span className="text-blue-100 text-sm">
                Download your resume as a professional PDF with one click.
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge variant="secondary">Freemium Model</Badge>
            </CardHeader>
            <CardContent>
              <span className="text-gray-400 text-sm">
                Get started for free, upgrade for more features and unlimited
                downloads.
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge variant="secondary">Secure & Private</Badge>
            </CardHeader>
            <CardContent>
              <span className="text-blue-100 text-sm">
                Your data is safe, private, and never shared.
              </span>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="z-10 w-full max-w-4xl mx-auto mb-16">
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          Pricing
        </h2>
        <Tabs defaultValue="free" className="w-full">
          <TabsList className="flex justify-center mb-6">
            <TabsTrigger className="px-6" value="free">
              Free
            </TabsTrigger>
            <TabsTrigger className="px-6" value="pro">
              Pro
            </TabsTrigger>
          </TabsList>
          <TabsContent value="free">
            <Card className="text-center">
              <CardHeader>
                <span className="text-lg font-semibold text-gray-100 mb-1">
                  Free
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-3">
                  Basic resume builder, 3 ATS scans/month, 3 themes, PDF export.
                </p>
                <div className="text-2xl font-bold text-gray-100 mb-1">$0</div>
                <div className="text-xs text-gray-300 mb-3">
                  No credit card required
                </div>
                <Button asChild>
                  <Link href="/app">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pro">
            <Card className="text-center">
              <CardHeader>
                <span className="text-lg font-semibold text-yellow-200 mb-1">
                  Pro
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-100 mb-3">
                  Unlimited ATS scans, 10+ themes, DOCX export, version history,
                  priority support.
                </p>
                <div className="text-2xl font-bold text-yellow-100 mb-1">
                  $5/mo
                </div>
                <div className="text-xs text-yellow-100/60 mb-3">
                  or $25/year
                </div>
                <Button asChild>
                  <Link href="/app">Go Pro</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      {/* FAQ */}
      <section id="faq" className="z-10 w-full max-w-3xl mx-auto mb-16">
        <h2 className="text-xl font-semibold text-gray-200 mb-6 text-center">
          FAQ
        </h2>
        <Accordion type="single" collapsible className="space-y-5">
          <AccordionItem value="free">
            <AccordionTrigger>Is ResumePro really free?</AccordionTrigger>
            <AccordionContent>
              Yes! You can use the core builder, basic themes, and PDF export
              for free. Upgrade for more power.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="private">
            <AccordionTrigger>Is my data private?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Your resumes are private and never shared with third
              parties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="export">
            <AccordionTrigger>Can I export to PDF and DOCX?</AccordionTrigger>
            <AccordionContent>
              PDF export is available for all users. DOCX export is a Pro
              feature.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      {/* Footer */}
      <footer className="z-10 mt-10 mb-4 text-gray-500 text-xs text-center w-full">
        &copy; {new Date().getFullYear()} ResumePro. All rights reserved.
      </footer>
    </main>
  );
}
