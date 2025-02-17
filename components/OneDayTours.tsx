import Tours from "./UI/Tours";
import AllButton from "./UI/AllButton";

export default function OneDayTours() {
  return (
    <div className="px-4 mt-20">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center">
        ONE DAY TOURS
      </h2>

      <div className="mt-20 mb-16 sm:mb-6">
        <Tours haveBorder={true} />
      </div>

      <div className="flex justify-center items-center">
        <AllButton />
      </div>
    </div>
  );
}
