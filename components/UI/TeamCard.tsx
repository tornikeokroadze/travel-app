import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TeamCard({ teams = [] }: { teams: any[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teams.map((teams) => (
        <div className="group relative" key={teams.id}>
          <div className="h-[350px] w-full shadow-sm overflow-hidden rounded-lg relative">
            <img
              src={`/team/${teams.image}`}
              alt={teams.name}
              className="rounded-lg object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg" />
          </div>

          <div className="relative p-8 bg-[#f7fcfe] rounded-lg shadow-sm -mt-8 mx-auto w-[90%]">
            <p className="text-xl sm:text-2xl font-semibold text-center">
              {teams.name} {teams.surname}
            </p>
            <p className="text-md sm:text-lg text-primary-100 text-center">
              {teams.position}
            </p>
            <div className="flex justify-center items-center mt-4 gap-4">
              {teams.facebook && (
                <a
                  href={teams.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-primary-100 p-4 rounded-full hover:scale-105 hover:bg-secondary hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
                    <FaFacebook size={12} className="text-white" />
                  </div>
                </a>
              )}

              {teams.instagram && (
                <a
                  href={teams.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-primary-100 p-4 rounded-full hover:scale-105 hover:bg-secondary hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
                    <FaInstagram size={12} className="text-white" />
                  </div>
                </a>
              )}

              {teams.twitter && (
                <a
                  href={teams.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-primary-100 p-4 rounded-full hover:scale-105 hover:bg-secondary hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
                    <FaTwitter size={12} className="text-white" />
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
