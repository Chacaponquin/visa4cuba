import SectionContainer from "../../../../../modules/shared/components/Layout/components/SectionContainer/SectionContainer";

interface Props {
  children?: React.ReactNode;
}

export default function AboutContainer({ children }: Props) {
  return <SectionContainer>{children}</SectionContainer>;
}
