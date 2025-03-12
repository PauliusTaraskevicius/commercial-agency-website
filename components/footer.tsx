import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-[1]">
      <div className="w-full py-1 px-2">
        <div className="grid grid-cols-12 gap-x-1 md:gap-x-2">
          <div className="col-span-4 md:col-span-2" />
          <div className="md:col-span-2 max-md:hidden">
            <Link
              href="https://moxey.no/lets-talk/"
              className="whitespace-nowrap uppercase tracking-[0.02em] default-text-hover"
              target=""
            >
              {" "}
              Stavanger – No{" "}
            </Link>
          </div>
          <div className="md:col-span-2 col-span-4 ">
            {" "}
            <Link
              href="mailto:hello@moxey.no"
              className="whitespace-nowrap uppercase tracking-[0.02em] default-text-hover"
              target=""
            >
              {" "}
              hello@moxey.no{" "}
            </Link>
          </div>
          <div className="md:col-span-2  col-span-4 max-md:text-right">
            {" "}
            <Link
              href="tel:+47%20916%2099%20927"
              className="whitespace-nowrap uppercase tracking-[0.02em] default-text-hover"
              target=""
            >
              {" "}
              +47 916 99 927{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
