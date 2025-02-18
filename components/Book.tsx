import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Book() {
  const router = useRouter();
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [peopleNum, setPeopleNum] = useState("");

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#f7fcfe] p-10 rounded-lg">
      <p className="text-xl">Book</p>
      <form onSubmit={handleBook} className="space-y-4 mt-4">
        <input
          type="text"
          placeholder="Name"
          required
          className="border-none shadow-lg rounded-lg w-full h-12 px-5 outline-none focus:ring-0"
          value={firsName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          required
          className="border-none shadow-lg rounded-lg w-full h-12 px-5 outline-none focus:ring-0"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email address"
          required
          className="border-none shadow-lg rounded-lg w-full h-12 px-5 outline-none focus:ring-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          required
          className="border-none shadow-lg rounded-lg w-full h-12 px-5 outline-none focus:ring-0"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount of people"
          required
          className="border-none shadow-lg rounded-lg w-full h-12 px-5 outline-none focus:ring-0"
          value={peopleNum}
          onChange={(e) => setPeopleNum(e.target.value)}
        />

        <button
          type="submit"
          className="relative w-full  min-h-12 px-6 bg-primary-100 font-semibold text-white overflow-hidden rounded-lg group"
        >
          <span className="absolute inset-0 bg-secondary transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-1000"></span>
          <span className="relative transition-colors duration-100">
            BOOK NOW
          </span>
        </button>
      </form>
    </div>
  );
}
