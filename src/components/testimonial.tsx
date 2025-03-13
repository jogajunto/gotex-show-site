import React from "react";
import { ColoredLine } from "./colored-line";

type TestimonialProps = {
  children: React.ReactNode;
  name: string;
  role: string;
  company: string;
};

export function Testimonial({ children, name, role, company }: TestimonialProps) {
  return (
    <div className="bg-default h-full overflow-hidden rounded-lg">
      <ColoredLine />
      <div className="p-10">
        <blockquote className="text-default flex flex-col gap-4 text-center text-balance italic">
          {children}
          <cite className="text-sm not-italic">
            <strong>
              {name}, {role}
            </strong>
            <span className="text-default-secondary block"> {company}</span>
          </cite>
        </blockquote>
      </div>
    </div>
  );
}
