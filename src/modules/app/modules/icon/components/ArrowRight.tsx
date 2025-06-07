import type { IconProps } from "../domain/props";

export default function ArrowRight({ size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M184 112l144 144-144 144"
      />
    </svg>
  );
}
