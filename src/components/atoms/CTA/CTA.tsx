import { ButtonHTMLAttributes } from "react";

export const CTA = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={
        "text-center h-[45px] w-[426px] bg-cCta-default text-cText-secondary rounded-[4px] hover:bg-cCta-hover disabled:bg-cCta-inactive "
      }
    >
      {props.children}
    </button>
  );
};
