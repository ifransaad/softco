import React from 'react'
import HeroDetails from './HeroDetails'
import HeroDesign from './HeroDesign'
import { Dot } from 'lucide-react'

type Props = {}

const capabilities = [
  { label: "CRM", active: true },
  { label: "HRMS", active: false },
  { label: "ERP", active: false },
  { label: "AI AUTOMATION", active: true },
  { label: "WEB APPS", active: false },
  { label: "MOBILE APPS", active: false },
  { label: "ED TECH", active: true },
  { label: "SYSTEM INTEGRATION", active: false },
];

const HeroSection = (props: Props) => {
  return (
    <div className="bg-card-dark pt-28">
      <div className="container mx-auto flex flex-col xl:flex-row justify-between items-start lg:px-8 gap-10  text-white">
        <HeroDetails />
        <HeroDesign />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-y-2 py-8 ">
        {capabilities.map((item, index) => (
          <div key={item.label} className="flex items-center">
            <span
              className={`whitespace-nowrap text-[10px] sm:text-xs ${
                item.active ? "text-[#1ACCEB]" : "text-[#8CA3C2]"
              }`}
            >
              {item.label}
            </span>

            {index < capabilities.length - 1 && (
              <div className="px-2 text-[#425C80]">
                <Dot />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection