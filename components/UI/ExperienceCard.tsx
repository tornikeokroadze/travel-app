import Image from "next/image";
import Link from "next/link";
import { BsPlusLg } from "react-icons/bs";

export default function ExperienceCard({
  experience = [],
  hrefTo,
}: {
  experience: any[];
  hrefTo: string;
}) {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {experience.map((item) => (
        <div key={item.id} className="rounded-lg">
          <Link href={`/${hrefTo}/${item.id}`}>
            <div className="group relative">
              <div className="h-[450px] w-full shadow-sm overflow-hidden rounded-lg relative">
                <Image
                  src={`/tours/${item.image}`}
                  width={1200}
                  height={450}
                  alt={item.title}
                  className="rounded-lg object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-35 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center rounded-lg">
                  <BsPlusLg className="text-primary-100 text-4xl" />
                </div>
              </div>

              <p className="text-xl sm:text-2xl font-semibold mt-4 hover:text-primary transition-colors duration-500">
                {item.title}
              </p>
            </div>
          </Link>

          <div className="flex justify-start my-4">
            <Link
              href={`/${hrefTo}/${item.id}`}
              className="bg-primary-100 text-white rounded-lg text-sm py-3 w-40 text-center hover:bg-secondary transition-all duration-500"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
