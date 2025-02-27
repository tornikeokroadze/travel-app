"use client";
import { useState } from "react";
import { useFetchData } from "@/utils/fetchData";
import { ThreeDot } from "react-loading-indicators";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { data: faqs, loading } = useFetchData("faq");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center mt-20">
        <ThreeDot variant="bounce" color="#313041" size="small" text="" />
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-0 mt-16">
      {faqs.length == 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-10 px-4 sm:px-8">
            no result found
          </h1>
        </div>
      ) : (
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion px-0 lg:px-4">
              <button
                className={`w-full accordion-title bg-primary-100 text-white p-6 transition-all ease-in-out duration-500 ${
                  openIndex === index
                    ? "rounded-t-lg"
                    : "rounded-lg cursor-pointer"
                }`}
                onClick={() => toggleAccordion(index)}
                disabled={openIndex === index}
              >
                <h4 className="text-xl font-semibold flex items-center justify-between">
                  {faq.title}
                  <MdOutlineKeyboardArrowDown
                    className={`transform transition-all duration-500 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </h4>
              </button>

              <div
                className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`p-4 bg-primary-100 text-white ${
                    openIndex === index ? "rounded-b-lg" : "rounded-lg"
                  } `}
                >
                  <p className="text-lg">{faq.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
