import AllButton from "./UI/AllButton";

export default function BestOffers() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-0 mt-20">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center">
        BEST OFFERS
      </h2>

      <div className="mt-6 sm:mt-10 space-y-4 px-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/3 relative group overflow-hidden cursor-pointer">
            <img
              className="h-64 sm:h-96 w-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              src="/tours/1.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg">
              <span className="text-white text-lg sm:text-xl font-semibold">
                Title 1
              </span>
            </div>
          </div>
          <div className="w-full sm:w-2/3 relative group overflow-hidden cursor-pointer">
            <img
              className="h-64 sm:h-96 w-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              src="/tours/2.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg">
              <span className="text-white text-lg sm:text-xl font-semibold">
                Title 2
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-2/3 relative group overflow-hidden cursor-pointer">
            <img
              className="h-64 sm:h-96 w-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              src="/tours/3.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg">
              <span className="text-white text-lg sm:text-xl font-semibold">
                Title 3
              </span>
            </div>
          </div>
          <div className="w-full sm:w-1/3 relative group overflow-hidden cursor-pointer">
            <img
              className="h-64 sm:h-96 w-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              src="/tours/4.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg">
              <span className="text-white text-lg sm:text-xl font-semibold">
                Title 4
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12 lg:mt-0">
        <AllButton />
      </div>
    </div>
  );
}
