import { Button as AntdButton } from "antd";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  type?: "submit" | "button";
  className?: string;
}

export default function Button({
  children,
  onClick,
  loading,
  className,
  type = "button",
}: Props) {
  return (
    <AntdButton
      htmlType={type}
      className={clsx("w-full !text-base !py-4", className)}
      type="primary"
      loading={loading}
      onClick={onClick}
    >
      {children}
    </AntdButton>
  );
}
