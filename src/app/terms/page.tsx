export default function TermsOfService() {
  const terms = [
    {
      title: "Acceptance of Terms",
      content: "By accessing Verdant Earth Alliance, you agree to be bound by these terms of service and all applicable laws and regulations in the regions we operate, including East Africa and international jurisdictions."
    },
    {
      title: "Use of Content",
      content: "All project documentation, images of reforestation sites, and research data published on this site are the property of Verdant Earth unless otherwise stated. Unauthorized use of this material is prohibited."
    },
    {
      title: "Donations and Funding",
      content: "All contributions made through 'Join the Mission' are directed toward our environmental restoration and community education projects. We maintain full transparency in our financial reporting."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-32 pb-24 px-6">
      <div className="max-w-[800px] mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-[48px] font-bold text-[#141414] tracking-tight mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-12">Effective Date: February 2026</p>

        <div className="space-y-12">
          {terms.map((term, i) => (
            <section key={i} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-[#19474E]">{term.title}</h2>
              <p className="text-lg leading-[170%] text-[#5D6A6A]">{term.content}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-slate-400 italic">
          Verdant Earth reserves the right to update these terms at any time to reflect changes in our environmental policy or legal requirements.
        </p>
      </div>
    </main>
  );
}