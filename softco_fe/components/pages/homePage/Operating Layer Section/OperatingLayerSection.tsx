import { Eyebrow } from '@/components/Shared/Eyebrow';
import React from 'react'
import OperatingDesign from './OperatingDesign';
import OperatingDetails from './OperatingDetails';
import SectionHeading from '@/components/Shared/SectionHeading';

type Props = {}

const OperatingLayerSection = (props: Props) => {
  return (
    <div className="container mx-auto py-20 lg:px-8">
      <SectionHeading
        label="ONE CONNECTED DIGITAL CORE"
        title="More than software. A business operating layer."
        description="SoftCo combines systems, automation and product engineering so data
          and workflows move cleanly across the business."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.08fr]">
            {/* LEFT PANEL */}
            <OperatingDesign />

            {/* RIGHT CONTENT */}
            <OperatingDetails />
          </div>
        </div>
      </section>
    </div>
  );
}

export default OperatingLayerSection