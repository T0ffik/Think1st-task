import { ButtonHTMLAttributes } from "react";

export const CTA = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="submit"
      {...props}
      className={
        "text-center h-[45px] w-[100%] bg-cCta-default text-cText-secondary rounded-[4px] hover:bg-cCta-hover disabled:bg-cCta-inactive "
      }
    >
      {props.children}
    </button>
  );
};
