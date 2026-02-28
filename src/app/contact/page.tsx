import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactMethods from "@/components/ContactMethods";
import ContactFAQ from "@/components/ContactFAQ";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <ContactHero />
      
      {/* Container to pull the form up over the hero background */}
      <div className="relative -mt-32 md:-mt-64 z-30 pb-24 px-6">
        <ContactForm />
      </div>
      
      <ContactMethods />
      <ContactFAQ />
    </main>
  );
}