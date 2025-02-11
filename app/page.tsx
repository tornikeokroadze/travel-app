import BestOffers from "@/components/BestOffers";
import FindTrip from "../components/FindTrip";
import OneDayTours from "@/components/OneDayTours";
import Adventures from "@/components/Adventures";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <FindTrip />
      <BestOffers />
      <OneDayTours />
      <Adventures />
      <Experience />
      <Footer />
    </div>
  );
}
