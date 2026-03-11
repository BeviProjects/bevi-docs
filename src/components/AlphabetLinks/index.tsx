"use client";
import Link from "next/link";
import useHash from "@hook/useHash";

type AlphabeticLinksProps = {
  letters: string[];
};

export const AlphabeticLinks = ({ letters }: AlphabeticLinksProps) => {
  const hash = useHash();
  return (
    <div className="w-fit flex flex-row gap-2xs p-4xs inset-ring-1 inset-ring-gray-75 rounded-sm bg-white">
      {letters.map((letter) => (
        <Link
          key={letter}
          href={`#${letter}`}
          className={`
            w-[28px] h-2xl
            flex-center
            font-semibold leading-none
            inset-ring-1 rounded-2xs
            ${hash === letter ? "text-violet-20 inset-ring-violet-20" : "text-gray-55 inset-ring-transparent hover:inset-ring-violet-90"}`}
        >
          {letter}
        </Link>
      ))}
    </div>
  );
};
