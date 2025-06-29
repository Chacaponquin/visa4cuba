import { Link } from "react-router";

interface Props {
  link: string;
  children?: React.ReactNode;
  external?: boolean;
}

const CLASS = "underline underline-offset-4 text-primary";

export default function A({ link, children, external = true }: Props) {
  return (
    <>
      {external ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className={CLASS}
        >
          {children}
        </a>
      ) : (
        <Link to={link} className={CLASS}>
          {children}
        </Link>
      )}
    </>
  );
}
