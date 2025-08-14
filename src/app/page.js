
import Hero from "./main/Hero";
import Benefits from "./main/Benefits";
import FeatureBanner from "./main/FeatureBanner";
import CareEssentials from "./main/CareEssentials";
import WhyItHelps from "./main/WhyItHelps";
import FAQ from "./main/FAQ";
import ProductHighlight from "./main/ProductHoghlight";


export default function Page() {
  return (
    <main className="bg-black">
      
      <Hero />
      <Benefits />
      <FeatureBanner />
      <CareEssentials />
      <WhyItHelps />
      <FAQ />
      <ProductHighlight />
    </main>
  );
}

