import BestOffers from "@/components/BestOffers";
import FindTrip from "../components/FindTrip";
import OneDayTours from "@/components/OneDayTours";

export default function Home() {
  return (
    <div>
      <FindTrip />
      <BestOffers />
      <OneDayTours />
    </div>
  );
}
