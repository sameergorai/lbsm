import { Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="bg-[#c9302c] text-white text-[11px] font-medium py-1.5">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline">NAAC</a>
                        <a href="#" className="hover:underline">IQAC</a>
                        <a href="#" className="hover:underline">NIRF</a>
                        <a href="#" className="hover:underline">RUSA</a>
                        <a href="#" className="hover:underline">Online Fee Payment</a>
                        <a href="#" className="hover:underline">E-Kalyan</a>
                        <a href="#" className="hover:underline">Old Website</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-1">
                            <i className="fas fa-phone-alt text-[10px]"></i> +91-9334710089
                        </span>
                        <span className="flex items-center gap-1">
                            <i className="fas fa-envelope text-[10px]"></i> lbsmcollege@yahoo.in
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-white py-4 shadow-sm">
                <div className="container mx-auto px-4 flex items-center gap-4">
                    <div className="shrink-0">
                        {/* <img src="https://via.placeholder.com/80x80?text=LBSM" alt="LBSM Logo" className="h-20 w-auto object-contain"> */}
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[#002147] text-3xl font-extrabold uppercase tracking-tight leading-tight">
                            LAL BAHADUR SHASTRI MEMORIAL COLLEGE
                        </h1>
                        <div className="text-gray-600 text-sm mt-1">
                            Jamshedpur, Jharkhand (INDIA)
                        </div>
                        <div className="text-gray-500 text-xs tracking-wider uppercase mt-0.5">
                            A CONSTITUENT UNIT OF KOLHAN UNIVERSITY
                        </div>
                        <div className="text-green-700 font-bold text-lg mt-0.5 font-serif">
                            लाल बहादुर शास्त्री मेमोरियल कॉलेज
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white text-[13px] font-bold uppercase tracking-wide relative z-50 ">
                <div className="bg-black mx-auto px-0 flex items-center justify-between max-w-6xl">
                    <ul className="flex items-center h-12">
                        <li className="h-full">
                            <a href="/" className="h-full px-5 bg-[#c9302c] flex items-center hover:bg-red-700 transition-colors">HOME</a>
                        </li>
                        <li className="h-full relative group cursor-pointer">
                            <a href="/about_college" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
                                ABOUT LBSM <i className="fas fa-chevron-down text-[10px]"></i>
                            </a>
                        </li>
                        <li className="h-full">
                            <a href="/faculties" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">FACULTIES</a>
                        </li>
                        <li className="h-full relative group cursor-pointer">
                            <a href="#" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
                                CELL / COMMITTEE <i className="fas fa-chevron-down text-[10px]"></i>
                            </a>
                        </li>
                        <li className="h-full">
                            <a href="gallery" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">GALLERY</a>
                        </li>
                        <li className="h-full">
                            <a href="/contact" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">CONTACT</a>
                        </li>
                        <li className="h-full">
                            <a href="https://appointments.uidai.gov.in/bookappointment.aspx?AspxAutoDetectCookieSupport=1" target="_blank" rel="noopener noreferrer"  className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">AADHAR ENROLMENT</a>
                        </li>
                        <li className="h-full">
                            <a href="/IDP.pdf" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">IDP</a>
                        </li>
                        <li className="h-full relative group cursor-pointer">
                            <a href="/Broucher.pdf"  className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
                                SEMINAR <i className="fas fa-chevron-down text-[10px]"></i>
                            </a>
                        </li>
                    </ul>

                    <div className="pr-4">
                        <a href="login" className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 transition-colors">
                            <i className="fas fa-user-graduate"></i> Register/Login 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}