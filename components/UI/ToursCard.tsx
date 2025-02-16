import Link from "next/link";

export default function ToursCard({ tours = [], hrefTo }: { tours: any[]; hrefTo: string }) {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {tours.map((tour) => (
        <Link href={`/${hrefTo}/${tour.id}`} key={tour.id}>
          <div className="group relative">
            <div className="h-[350px] sm:h-[450px] lg:h-[550px] w-full shadow-sm overflow-hidden rounded-lg relative">
              <img
                src={`/tours/${tour.image}`}
                alt={tour.title}
                className="rounded-lg object-cover h-full w-full hover:scale-105 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg" />
            </div>

            <p className="text-xl sm:text-2xl font-semibold mt-4 text-center hover:text-primary transition-colors duration-500">
              {tour.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
