import BestOffers from "@/components/BestOffers";
import FindTrip from "../components/FindTrip";
import OneDayTours from "@/components/OneDayTours";
import Adventures from "@/components/Adventures";

export default function Home() {
  return (
    <div>
      <FindTrip />
      <BestOffers />
      <OneDayTours />
      <Adventures />
      <div className="min-h-96"></div>
    </div>
  );
}
