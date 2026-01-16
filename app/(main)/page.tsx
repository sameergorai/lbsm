import Image from "next/image";
import Carousel from "../components/HeroCarousel"


import HomeAbout from "../components/HomeAbout"
import MeritListScroll from "../components/MeritListScroll"
import ImportantNotice from "../components/ImportantNotice"
import NewsTicker from "../components/NewsTicker"
export default function Home() {
  return (
    <div>
      <Carousel />
      <NewsTicker />
{/* <div className="bg-[#a91e1e] text-white h-10 flex items-center overflow-hidden">
        <div className="bg-[#a91e1e] px-6 font-bold shrink-0">LBSM @ NEWS</div>
        <div className="marquee-container px-4">
          <div className="marquee-content">
            • Admission Open • National Seminar • Holiday Notice • Exam Schedule Updated
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
          <div className="bg-red-50 p-3 rounded-full shrink-0 text-red-600">
            <i className="fas fa-university text-xl"></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">Quality Higher Education</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              A reputed constituent unit of Kolhan University, committed to academic excellence since 1971.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
          <div className="bg-blue-50 p-3 rounded-full shrink-0 text-blue-600">
            <i className="fas fa-user-graduate text-xl"></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">Dedicated Faculties</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Experienced and qualified teachers supporting students in both academic and co-curricular growth.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
          <div className="bg-green-50 p-3 rounded-full shrink-0 text-green-600">
            <i className="fas fa-hand-holding-heart text-xl"></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">Support & Scholarships</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Focus on students from ST/SC, OBC and weaker sections through various government schemes.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-6 md:gap-9 p-4 md:p-8 max-w-7xl mx-auto items-center justify-center">
        <MeritListScroll />
        <ImportantNotice />

        <div className="bg-white shadow-2xl w-full max-w-[350px] rounded-lg">
          <h2 className="pt-4 text-xl font-bold text-center">PRINCIPAL</h2>

          <img
            src="/Principle.png"
            alt="Principal"
            className="w-full my-4 object-cover"
          />

          <h2 className="text-2xl text-center font-semibold pb-4">
            Dr. Ashok Kumar Jha
          </h2>
        </div>
      </div>

      <HomeAbout />
    </div>
  );
}
