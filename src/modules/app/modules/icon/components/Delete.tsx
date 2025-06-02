import type { IconProps } from "../domain/props";

export default function Delete({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 10V44H39V10H9Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M20 20V33"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 20V33"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 10H44"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10L19.289 4H28.7771L32 10H16Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
