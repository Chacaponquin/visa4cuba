import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
