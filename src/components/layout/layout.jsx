import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
