import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-olive-600 to-olive-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to simplify your operations?
        </h2>
        <p className="text-olive-100 text-xl mb-10 max-w-2xl mx-auto">
          Join contractors already using OliveOps to manage their business with less stress and more clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-olive-700 hover:bg-olive-50 shadow-lg"
          >
            Request a Demo
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="border-2 border-white/50 text-white hover:bg-white/10"
            variant="outline"
          >
            Join the Beta
          </Button>
        </div>
        <p className="text-olive-200 text-sm mt-6">
          No commitment required. Get early access today.
        </p>
      </div>
    </section>
  );
}
