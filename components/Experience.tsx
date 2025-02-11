import AllButton from "./UI/AllButton";

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-1">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
          EXPERIENCE
        </h2>
        <AllButton />
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {["1", "2", "3"].map((num) => (
          <div key={num}>
            <div className="h-[350px] sm:h-[450px] lg:h-[550px] w-full shadow-sm overflow-hidden rounded-lg">
              <img
                src={`/tours/${num}.jpg`}
                alt={`Tour ${num}`}
                className="rounded-lg object-cover h-full w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xl sm:text-2xl font-semibold mt-4 text-center hover:text-primary transition-colors duration-500">
              Tour {num}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
