import Link from "next/link";

export default function AdventuresCard({
  adventures = [],
  hrefTo,
}: {
  adventures: any[];
  hrefTo: string;
}) {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 px-2">
      {adventures.map((adventure) => (
        <div key={adventure.id} className="border rounded-lg ">
          <Link href={`/${hrefTo}/${adventure.id}`}>
            <div className="h-[350px] w-full shadow-sm overflow-hidden rounded-t-lg">
              <img
                src={`/tours/${adventure.image}`}
                alt={adventure.title}
                className="rounded-t-lg object-cover h-full w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xl sm:text-2xl mb-4 font-semibold mt-4 text-center hover:text-primary transition-colors duration-500">
              {adventure.title}
            </p>
          </Link>

          <p className="mb-6 font-normal text-gray-700 text-center">
            {adventure.description.length > 34
              ? adventure.description.slice(0, 34) + "..."
              : adventure.description}
          </p>
          <div className="flex px-12 mb-8">
            <Link
              href={`/${hrefTo}/${adventure.id}`}
              className="bg-primary-100 text-white rounded-lg text-sm py-3 w-full text-center hover:bg-secondary transition-all duration-500"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
