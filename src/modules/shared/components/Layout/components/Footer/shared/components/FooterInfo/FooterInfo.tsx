import { Link } from "react-router";
import Star from "../../../../../../../../app/modules/icon/components/Star";

interface Props {
  text: string;
  link: string;
}

export default function FooterInfo({ link, text }: Props) {
  return (
    <Link to={link} className="flex items-center gap-x-2 mb-2">
      <i className="fill-secondary">
        <Star size={15} />
      </i>

      <p className="text-sm text-white">{text}</p>
    </Link>
  );
}
