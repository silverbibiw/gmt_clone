import Brends from "@/components/Brends";
import Category from "@/components/PopularCatigory";
import Client from "@/components/Client";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import News from "@/components/News";
import WeBest from "@/components/WeBest";
import ComplexforRoom from "@/components/ComplexforRoom";
import Pagination from "@/components/Pagination";
import Catalog from "@/components/Catalog";
import FAQ from "@/components/FAQ";

export default function index() {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="py-[65px] min-w-[0%]">
        <Pagination />
        <Category />
        <ComplexforRoom />
        <WeBest />
        <Catalog />
        <Client />
        <Brends />
        <FAQ />
        <News />
      </main>
      <Footer />
    </div>
  );
}
