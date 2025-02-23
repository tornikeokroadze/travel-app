import BestOffers from "@/components/BestOffers";
import FindTrip from "../components/FindTrip";
import OneDayTours from "@/components/OneDayTours";
import Adventures from "@/components/Adventures";
import Experience from "@/components/Experience";
import Team from "@/components/Team";

export default function Home() {
  

  return (
    <div>
      <FindTrip />
      <BestOffers />
      <OneDayTours />
      <Adventures />
      <Experience moreStyle="max-w-7xl px-8 lg:px-2"/>
      <Team />
    </div>
  );
}
