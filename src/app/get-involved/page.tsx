import DonateHero from "@/components/DonateHero";
import WhyDonate from "@/components/WhyDonate";
import Image from "next/image";
import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      {/* Existing Financial Support Sections */}
      <DonateHero />
      <WhyDonate />

      {/* New Volunteer & Careers CTA Section */}
      <section className="w-full py-24 px-6 sm:px-8 bg-white border-t border-[#DAE5E4]">
        <div className="max-w-[1380px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-[100px] items-center">
            
            {/* Image Block */}
            <div className="w-full lg:w-1/2 h-[500px] md:h-[600px] relative rounded-2xl overflow-hidden shadow-lg bg-[#DAF3E6]">
              {/* Note: Ensure you have a 'volunteer-hero.jpg' in your public folder */}
              <Image 
                src="/volunteer-hero.jpg" 
                alt="Volunteers taking action" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="font-['Zodiak'] text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-[#19474E] mb-8">
                Give your time. <br/> Join the movement.
              </h2>
              
              <div className="flex flex-col gap-6 text-lg text-[#5D6A6A] leading-[1.6] mb-12">
                <p>
                  Real change doesn't happen in isolation. Our initiatives rely on the dedication of volunteers, experts, and community leaders who are willing to take action on the ground and behind the scenes.
                </p>
                <p>
                  From coordinating continental policy efforts to managing grassroots reforestation in places like Morogoro, our team is constantly growing. We regularly update our board with new volunteer roles, internships, and career opportunities.
                </p>
              </div>

              {/* CTA linking to the dynamic Careers Page */}
              <Link 
                href="/careers" 
                className="inline-flex items-center justify-center px-10 py-5 bg-[#166534] text-white text-lg font-bold rounded-full hover:bg-[#114f29] transition-all hover:-translate-y-1 shadow-xl w-fit"
              >
                View Open Opportunities
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}