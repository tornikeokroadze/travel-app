import { useState } from 'react';

export default function Accordion  ({ title, content }: {title: string; content: string}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{title}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 text-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};


