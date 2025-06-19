import type { IconProps } from "../domain/props";

export default function Bowl({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 39C33.3888 39 41 31.9411 41 22H7C7 31.9411 14.6112 39 24 39Z"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 38L16 44H32L30 38"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10L12 14"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 10L36 14"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 5L24 14"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
