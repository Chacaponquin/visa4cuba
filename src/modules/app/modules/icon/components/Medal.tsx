import type { IconProps } from "../domain/props";

export default function Medal({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L16 18"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 6L32 18"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 4L26 16"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 4L22 16"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="24"
        cy="30"
        r="14"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
      />
      <circle
        cx="24"
        cy="30"
        r="7"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
      />
    </svg>
  );
}
