import type { IconProps } from "../domain/props";

export default function Plus({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.0605 10L24.0239 38"
        stroke="inherit"
        stroke-width="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 24L38 24"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
