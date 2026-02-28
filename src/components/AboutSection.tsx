export default function AboutSection() {
  return (
    <section className="bg-white w-full flex flex-col items-center py-10 sm:py-16 px-6 sm:px-8">
      {/* Maximum width container set to match the 1280px from your design */}
      <div className="w-full max-w-7xl flex flex-col">
        
        {/* Horizontal Border Section (Updated per your request) */}
        <div className="w-full flex flex-row justify-between items-center pb-4 border-b border-slate-200 text-sm">
          <span className="font-normal text-slate-500 uppercase tracking-wider text-xs sm:text-sm">
            About us
          </span>
          <span className="font-bold text-slate-900 tracking-wide">
            Verdant Earth
          </span>
          <span className="font-normal text-slate-500">
            ©2026
          </span>
        </div>

        {/* Main Content Area (Two Columns) */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start pt-10 lg:pt-16 gap-8 lg:gap-16">
          
          {/* Left Column */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-base font-semibold text-green-800">
              // Our Enduring Mission
            </span>
            <h2 className="text-5xl lg:text-[60px] leading-tight lg:leading-[60px] font-bold text-slate-900 tracking-[-1.5px]">
              A Greener Tomorrow, Today.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col flex-1 lg:mt-8">
            <p className="text-lg font-normal text-slate-600 leading-[29px]">
              At Verdant Earth Alliance, we are passionate about creating a sustainable future. With a focus on community engagement, scientific research, and policy advocacy, we strive to be a driving force in global environmental protection.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}