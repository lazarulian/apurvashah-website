"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import Section from "./section";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/index";

import useSound from "use-sound";

export const ContactCopyItem = ({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) => {
  const [play] = useSound("/sounds/copy.mp3");
  const [copied, setCopied] = React.useState(false);
  const handleCopy = (text: string) => {
    play();
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <button onClick={() => handleCopy(copy)}>
      {copied ? "Copied to clipboard!" : title}
    </button>
  );
};

export const ContactItem = ({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative text-gray-600 hover:text-gray-100",
        className
      )}
    >
      <Slot>{children}</Slot>
      <div
        className="group-hover:opacity-100 opacity-0 absolute -right-6 bottom-[3px] rounded-sm bg-accent transition duration-500 shrink-0 block w-4 h-4 text-[black]"
        aria-hidden={true}
      >
        {icon}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <Section>
      <div className="flex flex-wrap mt-12 md:flex-col md:gap-y-0 gap-y-2 gap-x-6 md:items-end md:mt-0">
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://twitter.com/apurvashahhh" target="_blank">
            Twitter
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://instagram.com/apurvashahh" target="_blank">
            Instagram
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://github.com/lazarulian" target="_blank">
            GitHub
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://www.linkedin.com/in/apurvashahh/" target="_blank">
            LinkedIn
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a
            href="https://www.goodreads.com/user/show/148133170"
            target="_blank"
          >
            GoodReads
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://letterboxd.com/apurvashah/" target="_blank">
            Letterboxd
          </a>
        </ContactItem>
        <ContactItem icon={<ArrowUpRight />}>
          <a href="https://beliapp.co/app/apurvashah" target="_blank">
            Beli
          </a>
        </ContactItem>
      </div>
    </Section>
  );
};

export default Contact;
