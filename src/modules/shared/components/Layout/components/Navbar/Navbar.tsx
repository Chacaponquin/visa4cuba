import clsx from "clsx";
import type { TranslationRouteBuilder } from "../../../../../app/domain/core/translation-route-builder";
import Logo from "./components/Logo/Logo";
import Options from "./components/Options/Options";
import Sections from "./components/Sections/Sections";
import { NAVBAR_SECTIONS } from "./domain/navbar-section";
import { forwardRef, type ForwardedRef } from "react";

interface Props {
  onOpenAside(): void;
  builder: TranslationRouteBuilder;
  fixed: boolean;
  children?: React.ReactNode;
}

function Navbar(
  { onOpenAside, builder, fixed, children }: Props,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <nav
      ref={ref}
      className={clsx(
        "w-full flex py-4 justify-center px-5 border-b border-b-card bg-white z-20",
        { "fixed top-0": fixed }
      )}
    >
      <div className="flex w-full items-center justify-between max-w-layout gap-x-5">
        <Logo />

        <div className="justify-end flex items-center gap-x-6">
          <Sections sections={NAVBAR_SECTIONS} />

          <Options onOpenAside={onOpenAside} builder={builder}>
            {children}
          </Options>
        </div>
      </div>
    </nav>
  );
}

export default forwardRef(Navbar);
