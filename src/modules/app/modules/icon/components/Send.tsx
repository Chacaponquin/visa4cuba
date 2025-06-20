import type { IconProps } from "../domain/props";

export default function Send({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z"
        stroke="inherit"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M43.0001 5L22.1001 25.9"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
