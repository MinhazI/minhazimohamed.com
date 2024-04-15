import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Minhaz I. Mohamed
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in max-w-6xl px-10">
        <h2 className="text-sm text-slate-50">
          I am an innovative software engineer specializing as a front-end
          developer with web technologies (React JS, Next JS, and more) and in
          server-side management. With a dynamic skill set, I bring over 4 years
          of experience as a software engineer, adept problem solver, and
          collaborative team player.{" "}
        </h2>
        <h2 className="text-sm text-slate-50 mt-5">
          My passion lies in leveraging cutting-edge web technologies to drive
          innovation across companies of all sizes, with a particular focus on
          making a significant impact in the web hosting space. I thrive in
          fast-paced environments, delivering solutions that seamlessly blend
          technical expertise with a keen eye for user experience.
        </h2>
        <h2 className="text-sm text-slate-50 mt-5">
          {" "}
          Let's connect on LinkedIn and explore how my unique blend of technical
          proficiency and entrepreneurial spirit can add value to your team. You
          can also email me at hello@minhazimohamed.com.
        </h2>
      </div>
    </div>
  );
}
