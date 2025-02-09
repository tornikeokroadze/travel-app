"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings as SlickSettings } from 'react-slick';

const Slider = dynamic(() => import("react-slick").then(mod => mod.default as React.ComponentType<SlickSettings>), { ssr: false });

const data = [
  {
    id: 1,
    image: "/tours/1.jpg",
    title: "Tour 1",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    image: "/tours/2.jpg",
    title: "Tour 2",
    description: "Explore the beautiful places with us.",
  },
  {
    id: 3,
    image: "/tours/3.jpg",
    title: "Tour 3",
    description: "Adventure awaits you in this amazing.",
  },
  {
    id: 4,
    image: "/tours/4.jpg",
    title: "Tour 4",
    description: "Discover new experiences with us.",
  },
  {
    id: 5,
    image: "/tours/5.jpg",
    title: "Tour 5",
    description: "A journey you'll never forget.",
  },
] as const;

export default function Tours() {
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
        {data.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
              <Link href="#">
                <div className="relative w-full" style={{ height: 300 }}>
                  <Image
                    className="rounded-t-lg object-cover"
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    priority
                  />
                </div>
              </Link>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">
                    {item.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 text-center">
                  {item.description}
                </p>
                <Link
                  href="#"
                  className="bg-primary-100 text-white rounded-lg text-sm px-6 py-3 mt-2 mb-2 lg:w-full text-center"
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
