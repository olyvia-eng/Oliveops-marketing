import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#EEF4E3] via-[#FFFFFF] to-[#6B8E23] relative overflow-hidden dark:from-[#0F172A] dark:via-[#111827] dark:to-[#84A83D]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#6B8E23]/20 via-transparent to-transparent pointer-events-none dark:from-[#84A83D]/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight dark:text-[#F8FAFC]">
          Ready to simplify your operations?
        </h2>
        <p className="text-[#64748B] text-xl mb-10 max-w-2xl mx-auto dark:text-[#CBD5E1]">
          Join contractors already using OliveOps to manage their business with less stress and more clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/beta"
            size="lg"
            className="border-2 border-[#6B8E23] text-[#0F172A] hover:bg-[#EEF4E3] dark:border-[#84A83D] dark:text-[#F8FAFC] dark:hover:bg-[#1E293B]"
            variant="outline"
          >
            Join the Beta
          </Button>
        </div>
        <p className="text-[#64748B] text-sm mt-6 dark:text-[#CBD5E1]">
          No commitment required. Get early access today.
        </p>
      </div>
    </section>
  );
}
