import clsx from "clsx";
import Download from "../../../../../../modules/app/modules/icon/components/Download";

interface Props {
  text: string;
  color: "primary" | "secondary";
}

export default function DownloadButton({ text, color }: Props) {
  function handleClick() {}

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        "rounded-lg text-sm border border-card px-4 py-1.5 text-gray-800 font-medium flex gap-x-2.5 stroke-gray-800 items-center transition-all duration-200",
        {
          "hover:bg-primary/10 hover:border-primary": color === "primary",
          "hover:bg-secondary/10 hover:border-secondary": color === "secondary",
        }
      )}
    >
      <i>
        <Download size={18} />
      </i>

      <p>{text}</p>
    </button>
  );
}
