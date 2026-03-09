import { EngineeringCapabilities } from "../Skill";
import { BackgroundEffects, BusinessCapabilities, BusinessMetrics, DeliverResults, Tech } from "./Tech";

export function Content() {
    return (
        <section className="pt-24 pb-0 w-full relative z-10">

        <BackgroundEffects />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section 1: Strategic Business Solutions Layer */}
          <div className="mb-24">
            <div className="space-y-4 mb-12 text-center">
              <h2 id="business-solutions-header" className="text-4xl md:text-5xl font-thin text-white tracking-tight font-outfit">
                Strategic Business Solutions & <span className="text-cyan-400">Digital Engineering</span>
              </h2>

              <p className="text-neutral-400 font-light text-lg max-w-2xl font-outfit mx-auto">
                I translate complex technical architecture into high-impact business outcomes, 
                building systems that scale with your growth.
              </p>
            </div>

            <BusinessCapabilities />
          </div>


          {/* Section 2: Business Impact Metrics Strip */}
          <div className="mb-12">
            <BusinessMetrics />
          </div>

          <div className="pt-10 pb-6 md:pt-12 md:pb-8">
            <DeliverResults />
          </div>

          <div className="pt-4 pb-14 md:pt-6 md:pb-16 flex flex-col items-center">
            {/* Top Row: Profile & Bio (Centered) */}

            {/* Bottom Row: Technical Skills Grid (Full Width) */}
            <div className="w-full pt-12 flex flex-col items-center justify-center relative">
              <Tech/>
              <EngineeringCapabilities />
            </div>
          </div>
        </div>
      </section>
    )
}