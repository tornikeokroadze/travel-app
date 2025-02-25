import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings as SlickSettings } from "react-slick";
import { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";

const Slider = dynamic(
  () =>
    import("react-slick").then(
      (mod) => mod.default as React.ComponentType<SlickSettings>
    ),
  { ssr: false }
);

export default function Tours({
  tours = [],
  haveBorder,
  hrefTo,
  slidesToShow,
}: {
  tours: any[];
  haveBorder?: boolean;
  hrefTo: String;
  slidesToShow: number;
}) {
  const [likedState, setLikedState] = useState<{ [key: string]: boolean }>({});

  //for like
  useEffect(() => {
    const savedLikedState = localStorage.getItem("likedState");
    if (savedLikedState) {
      setLikedState(JSON.parse(savedLikedState));
    }
  }, []);

  // Save likedState to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(likedState).length > 0) {
      localStorage.setItem("likedState", JSON.stringify(likedState));
    }
  }, [likedState]);

  const handleLike = (tourId: string) => {
    setLikedState((prev) => ({
      ...prev,
      [tourId]: !prev[tourId],
    }));
  };

  const settings: SlickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
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
              <Link href={`/${hrefTo}/${item.id}`}>
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

                  {haveBorder && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleLike(item.id);
                      }}
                      className="absolute top-4 right-4 text-4xl transition-transform duration-500 hover:scale-105 hover:rotate-12 z-10"
                    >
                      <IoHeart
                        className={
                          likedState[item.id] ? "text-red-500" : "text-white"
                        }
                      />
                    </button>
                  )}
                </div>
              </Link>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <Link href={`/${hrefTo}/${item.id}`}>
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
                  href={`/${hrefTo}/${item.id}`}
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
