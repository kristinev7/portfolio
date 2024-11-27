"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../utils/animations";

interface Props {
  href: string;
  label: string;
  closeMenu: () => void;
}

const TransitionLink = ({ href, label, closeMenu }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
      closeMenu();
    }
  };

  return (
    <button
      className="text-xl"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
