import Header from "./components/Header";
import Hero from "./main/Hero";
import Benefits from "./main/Benefits";
import FeatureBanner from "./main/FeatureBanner";
import CareEssentials from "./main/CareEssentials";
import WhyItHelps from "./main/WhyItHelps";
import FAQ from "./main/FAQ";
import ProductHighlight from "./main/ProductHoghlight";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Benefits />
      <FeatureBanner />
      <CareEssentials />
      <WhyItHelps />
      <FAQ />
      <ProductHighlight />
      <Footer />
    </main>
  );
}

