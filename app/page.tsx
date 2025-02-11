import BestOffers from "@/components/BestOffers";
import FindTrip from "../components/FindTrip";
import OneDayTours from "@/components/OneDayTours";
import Adventures from "@/components/Adventures";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div>
      <FindTrip />
      <BestOffers />
      <OneDayTours />
      <Adventures />
      <Experience />
      <div className="min-h-96"></div>
    </div>
  );
}
