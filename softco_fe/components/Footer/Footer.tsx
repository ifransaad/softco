import React from "react";
import { Separator } from "../ui/separator";
import BusinessDetails from "./BusinessDetails";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className="
        flex flex-col gap-8
        bg-card-foreground
        px-5
        pb-7
        pt-12

        sm:px-8
        lg:px-24
        lg:pb-8.5
        lg:pt-14.5
        lg:gap-9
      "
    >
      <BusinessDetails />

      <Separator className="bg-[#1F2E45]" />

      <div
        className="
          flex flex-col
          items-center
          justify-between
          gap-3
          text-center
          text-xs
          font-normal
          text-[#7A8CA8]

          sm:text-sm
          lg:flex-row
          lg:text-left
        "
      >
        <p>Copyright © 2023 Your Company. All rights reserved.</p>

        <p>softco.it.com</p>
      </div>
    </footer>
  );
};

export default Footer;
