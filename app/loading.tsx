import { ThreeDot } from "react-loading-indicators";

export default function loading() {
  return (
    <div className="flex justify-center items-center">
      <ThreeDot
        variant="bounce"
        color="#313041"
        size="small"
        text=""
        textColor=""
      />
    </div>
  );
}
