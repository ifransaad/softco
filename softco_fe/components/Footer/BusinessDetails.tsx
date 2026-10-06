import React from "react";
import Logo from "../Logo";

type Props = {};

const BusinessDetails = (props: Props) => {
  return (
    <div
      className="
        flex flex-col
        gap-10

        lg:flex-row
        lg:items-start
        lg:justify-between
        lg:gap-12
      "
    >
      {/* Brand */}
      <div className="flex max-w-sm flex-col items-start gap-3">
        <Logo />

        <p className="text-xs font-bold leading-5 text-[#8099BA]">
          BUSINESS SOFTWARE · AI · DIGITAL PRODUCTS
        </p>

        <p className="max-w-72 text-xs font-normal leading-5 text-[#A6B8D1]">
          We build the systems that make modern businesses work better.
        </p>
      </div>

      {/* Footer links */}
      <div
        className="
          grid grid-cols-2
          gap-x-8 gap-y-8

          sm:grid-cols-3
          sm:gap-x-12

          lg:flex
          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:gap-16
        "
      >
        <FooterColumn
          title="Solution"
          items={["CRM", "HRMS", "ERP", "AI Integration"]}
        />

        <FooterColumn
          title="Build"
          items={["Web Apps", "Mobile Apps", "EdTech", "Custom Software"]}
        />

        <FooterColumn
          title="Company"
          items={["About", "Work", "Insights", "Contact"]}
        />
      </div>
    </div>
  );
};

export default BusinessDetails;

type FooterColumnProps = {
  title: string;
  items: string[];
};

const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div className="flex flex-col items-start gap-3 text-xs">
      <p className="font-semibold text-white">{title}</p>

      {items.map((item) => (
        <a
          key={item}
          href="#"
          className="
            font-normal
            text-[#9EB2CC]
            transition-colors
            duration-200
            hover:text-white
          "
        >
          {item}
        </a>
      ))}
    </div>
  );
};
