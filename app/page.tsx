import BestSeller from "@/components/BestSeller";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ProductHeader from "@/components/ProductDetailsSection/ProductHeader";
import { ProductTabs } from "@/components/ProductTabs/ProductTabs";
import { StylingIdeas } from "@/components/StylingIdeas";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-[1500px] mx-auto px-4 py-8">
        <ProductHeader />
        <ProductTabs />
        <StylingIdeas />
        <BestSeller />
      </main>
      <Footer />
    </div>
  );
}
