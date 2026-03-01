export default function AboutSection() {
  return (
    <section className="bg-surface w-full flex flex-col items-center py-10 sm:py-16 px-6 sm:px-8">
      <div className="w-full max-w-[1280px] flex flex-col">
        
        {/* Top metadata bar */}
        <div className="w-full flex flex-row justify-between items-center pb-4 border-b border-border text-sm">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase font-medium text-muted">
            About us
          </span>
          <span className="font-display text-base font-semibold text-teal tracking-wide">
            Verdant Earth
          </span>
          <span className="text-[0.65rem] tracking-wider text-muted">
            ©2026
          </span>
        </div>

        {/* Main content — two columns */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start pt-10 lg:pt-16 gap-8 lg:gap-16">
          
          {/* Left — heading */}
          <div className="flex flex-col gap-3 flex-1">
            <p className="eyebrow">Our Enduring Mission</p>
            <h2 className="font-display text-5xl lg:text-[60px] leading-[1] font-semibold text-teal tracking-tight">
              A Greener Tomorrow, Today.
            </h2>
          </div>

          {/* Right — body copy */}
          <div className="flex flex-col flex-1 lg:mt-10">
            <p className="lead">
              At Verdant Earth Alliance, we are passionate about creating a sustainable future. With a focus on community engagement, scientific research, and policy advocacy, we strive to be a driving force in global environmental protection.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}