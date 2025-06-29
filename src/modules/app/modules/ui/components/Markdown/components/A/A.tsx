import { Link } from "react-router";

interface Props {
  link: string;
  children?: React.ReactNode;
}

export default function A({ link, children }: Props) {
  return (
    <Link to={link} className="underline underline-offset-4 text-primary">
      {children}
    </Link>
  );
}
