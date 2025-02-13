"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings as SlickSettings } from "react-slick";

const Slider = dynamic(
  () =>
    import("react-slick").then(
      (mod) => mod.default as React.ComponentType<SlickSettings>
    ),
  { ssr: false }
);

export default function Tours({ tours = [], haveBorder }: { tours: any[]; haveBorder?: boolean }) {
  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Slider {...settings}>
        {tours.map((item) => (
          <div key={item.id} className="px-2">
            <div
              className={`bg-white ${
                haveBorder && " border border-gray-200"
              } rounded-lg shadow-sm h-full flex flex-col`}
            >
              <Link href="#">
                <div
                  className="relative w-full overflow-hidden rounded-t-lg"
                  style={{ height: 350 }}
                >
                  <Image
                    className="rounded-t-lg object-cover hover:scale-105 transition-all duration-500"
                    src={`/tours/${item.image}`}
                    alt={item.title}
                    layout="fill"
                    priority
                  />
                </div>
              </Link>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-center hover:text-primary transition-all duration-500">
                    {item.title}
                  </h5>
                </Link>

                <p className="mb-3 font-normal text-gray-700 text-center">
                  {item.description.length > 34
                    ? item.description.slice(0, 34) + "..."
                    : item.description}
                </p>
                <Link
                  href="#"
                  className="bg-primary-100 text-white rounded-lg text-sm px-6 py-3 mt-2 mb-2 lg:w-full text-center hover:bg-secondary transition-all duration-500"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
