import { Header as NavHeader } from "@config/navigation";
import Link from "next/link";
import { Accordion } from "@component/Accordion";
import { BvLogo } from "bevi-logo";

export const Header = () => {
  return (
    <div className="w-full max-w-[256px]">
      <header className="w-full max-w-[256px] h-full fixed flex-start flex-col gap-6xs pr-px bg-gray-85">
        <div className="w-full px-md py-lg bg-gray-95">
          <Link
            href="/bevi-icons"
            className="w-fit p-4xs flex-center hover:bg-white rounded-2xs"
          >
            <BvLogo name="Bevi" height={24}/>
          </Link>
        </div>
        <nav className="w-full flex-bgs flex-start flex-col gap-2xs p-md bg-gray-95">
          {NavHeader.map((item) => (
            <Accordion key={item.id} title={item.label}>
              {item.children?.map((child) => (
                <Link
                  href={child.href}
                  className="p-2xs flex-start rounded-3xs text-gray-45 font-semibold hover:bg-gray-95 hover:text-violet-20"
                >
                  {child.label}
                </Link>
              ))}
            </Accordion>
          ))}
        </nav>
        <div className="w-full py-2xl bg-gray-95" />
      </header>
    </div>
  );
};
