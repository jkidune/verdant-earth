import Link from 'next/link';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you sign up for our newsletter, join the mission as a volunteer, or contact us through our website. This may include your name, email address, phone number, and any other information you choose to provide."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to facilitate our reforestation projects, communicate with our global partners, and improve our Community Learning Centres (CLCs). We do not sell your personal data to third parties."
    },
    {
      title: "3. Cookies and Tracking",
      content: "Verdant Earth uses cookies to enhance your browsing experience. These small files help us understand how you interact with our initiatives so we can provide a more personalized experience."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-[48px] font-bold text-[#141414] tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: February 2026</p>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <section key={i} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-[#19474E]">{section.title}</h2>
              <p className="text-lg leading-[170%] text-[#5D6A6A]">{section.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100">
          <Link href="/contact" className="text-[#166534] font-bold hover:underline">
            Questions about your privacy? Contact us.
          </Link>
        </div>
      </div>
    </main>
  );
}