import BestOffers from "@/components/BestOffers";
import FindTrip from "../components/FindTrip";

export default function Home() {
  return (
    <div>
      <FindTrip />
      <div className="mt-20">
        <BestOffers />
      </div>
    </div>
  );
}
