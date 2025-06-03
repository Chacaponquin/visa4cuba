import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import useLayout from "./hooks/useLayout";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const { openAside, handleCloseAside, handleOpenAside } = useLayout();

  return (
    <div className="w-full flex flex-col">
      <Navbar onOpenAside={handleOpenAside} />

      {openAside && <Aside onClose={handleCloseAside} />}

      {children}

      <Footer />
    </div>
  );
}
