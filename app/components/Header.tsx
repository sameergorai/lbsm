// import { Facebook, Twitter } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//     return (
//         <div>
//             <div className="bg-[#c9302c] text-white text-[11px] font-medium py-1.5">
//                 <div className="container mx-auto px-4 flex justify-between items-center">
//                     <div className="flex space-x-4">
//                         <a href="#" className="hover:underline">NAAC</a>
//                         <a href="#" className="hover:underline">IQAC</a>
//                         <a href="#" className="hover:underline">NIRF</a>
//                         <a href="#" className="hover:underline">RUSA</a>
//                         <a href="#" className="hover:underline">Online Fee Payment</a>
//                         <a href="#" className="hover:underline">E-Kalyan</a>
//                         <a href="#" className="hover:underline">Old Website</a>
//                     </div>
//                     <div className="flex items-center space-x-4">
//                         <span className="flex items-center gap-1">
//                             <i className="fas fa-phone-alt text-[10px]"></i> +91-9334710089
//                         </span>
//                         <span className="flex items-center gap-1">
//                             <i className="fas fa-envelope text-[10px]"></i> lbsmcollege@yahoo.in
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             <div className="bg-white py-4 shadow-sm">
//                 <div className="container mx-auto px-4 flex items-center gap-4">
//                     <div className="shrink-0">
//                         {/* <img src="https://via.placeholder.com/80x80?text=LBSM" alt="LBSM Logo" className="h-20 w-auto object-contain"> */}
//                     </div>

//                     <div className="flex flex-col">
//                         <h1 className="text-[#002147] text-3xl font-extrabold uppercase tracking-tight leading-tight">
//                             LAL BAHADUR SHASTRI MEMORIAL COLLEGE
//                         </h1>
//                         <div className="text-gray-600 text-sm mt-1">
//                             Jamshedpur, Jharkhand (INDIA)
//                         </div>
//                         <div className="text-gray-500 text-xs tracking-wider uppercase mt-0.5">
//                             A CONSTITUENT UNIT OF KOLHAN UNIVERSITY
//                         </div>
//                         <div className="text-green-700 font-bold text-lg mt-0.5 font-serif">
//                             लाल बहादुर शास्त्री मेमोरियल कॉलेज
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="bg-black text-white text-[13px] font-bold uppercase tracking-wide relative z-50 ">
//                 <div className="bg-black mx-auto px-0 flex items-center justify-between max-w-6xl">
//                     <ul className="flex items-center h-12">
//                         <li className="h-full">
//                             <a href="/" className="h-full px-5 bg-[#c9302c] flex items-center hover:bg-red-700 transition-colors">HOME</a>
//                         </li>
//                         <li className="h-full relative group cursor-pointer">
//                             <a href="/about_college" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
//                                 ABOUT LBSM <i className="fas fa-chevron-down text-[10px]"></i>
//                             </a>
//                         </li>
//                         <li className="h-full">
//                             <a href="/faculties" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">FACULTIES</a>
//                         </li>
//                         <li className="h-full relative group cursor-pointer">
//                             <a href="#" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
//                                 CELL / COMMITTEE <i className="fas fa-chevron-down text-[10px]"></i>
//                             </a>
//                         </li>
//                         <li className="h-full">
//                             <a href="gallery" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">GALLERY</a>
//                         </li>
//                         <li className="h-full">
//                             <a href="/contact" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">CONTACT</a>
//                         </li>
//                         <li className="h-full">
//                             <a href="https://appointments.uidai.gov.in/bookappointment.aspx?AspxAutoDetectCookieSupport=1" target="_blank" rel="noopener noreferrer"  className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">AADHAR ENROLMENT</a>
//                         </li>
//                         <li className="h-full">
//                             <a href="/IDP.pdf" className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">IDP</a>
//                         </li>
//                         <li className="h-full relative group cursor-pointer">
//                             <a href="/Broucher.pdf"  className="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
//                                 SEMINAR <i className="fas fa-chevron-down text-[10px]"></i>
//                             </a>
//                         </li>
//                     </ul>

//                     <div className="pr-4">
//                         <a href="login" className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 transition-colors">
//                             <i className="fas fa-user-graduate"></i> Register/Login 
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// "use client"; // Required for useState

// import { useState } from "react";
// import { Menu, X, Phone, Mail, ChevronDown, GraduationCap } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     // State for the About submenu in the mobile drawer
//     const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);

//     return (
//         <div className="w-full">
//             {/* Top Red Bar */}
//             <div className="bg-[#c9302c] text-white text-[11px] font-medium py-1.5">
//                 <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
//                     {/* Hide these links on very small screens, show on larger */}
//                     <div className="hidden lg:flex space-x-4">
//                         <a href="#" className="hover:underline">NAAC</a>
//                         <a href="#" className="hover:underline">IQAC</a>
//                         <a href="#" className="hover:underline">NIRF</a>
//                         <a href="#" className="hover:underline">RUSA</a>
//                         <a href="#" className="hover:underline">Online Fee Payment</a>
//                         <a href="#" className="hover:underline">E-Kalyan</a>
//                         <a href="#" className="hover:underline">Old Website</a>
//                     </div>

//                     {/* Contact Info - Centered on mobile */}
//                     <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-end">
//                         <span className="flex items-center gap-1">
//                             <Phone size={10} /> +91-9334710089
//                         </span>
//                         <span className="flex items-center gap-1">
//                             <Mail size={10} /> lbsmcollege@yahoo.in
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             {/* Logo Section */}
//             <div className="bg-white py-4 shadow-sm">
//                 <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
//                     <div className="shrink-0">
//                         {/* Placeholder for Logo */}
//                         {/* <img src="/logo.png" alt="LBSM Logo" className="h-20 w-auto object-contain" /> */}
//                     </div>

//                     <div className="flex flex-col">
//                         <h1 className="text-[#002147] text-xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight">
//                             LAL BAHADUR SHASTRI MEMORIAL COLLEGE
//                         </h1>
//                         <div className="text-gray-600 text-sm mt-1">
//                             Jamshedpur, Jharkhand (INDIA)
//                         </div>
//                         <div className="text-gray-500 text-xs tracking-wider uppercase mt-0.5">
//                             A CONSTITUENT UNIT OF KOLHAN UNIVERSITY
//                         </div>
//                         <div className="text-green-700 font-bold text-lg mt-0.5 font-serif">
//                             लाल बहादुर शास्त्री मेमोरियल कॉलेज
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation Bar */}
//             <div className="bg-black text-white text-[13px] font-bold uppercase tracking-wide relative z-50">
//                 <div className="container mx-auto px-4 max-w-6xl">
//                     <div className="flex items-center justify-between h-12">

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="md:hidden text-white hover:text-red-500 transition-colors"
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         >
//                             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>

//                         {/* Desktop Navigation */}
//                         <ul className="hidden md:flex items-center h-full">
//                             <li className="h-full">
//                                 <Link href="/" className="h-full px-5 bg-[#c9302c] flex items-center hover:bg-red-700 transition-colors">HOME</Link>
//                             </li>

//                             {/* Desktop Dropdown for About LBSM */}
//                             <li className="h-full relative group cursor-pointer">
//                                 <span className="h-full px-4 flex items-center hover:text-red-400 transition-colors gap-1">
//                                     ABOUT LBSM <ChevronDown size={10} />
//                                 </span>
//                                 {/* Dropdown Menu */}
//                                 <div className="absolute top-full left-0 w-48 bg-[#1a1a1a] shadow-lg border-t-2 border-[#c9302c] hidden group-hover:block z-50">
//                                     <ul className="flex flex-col">
//                                         <li>
//                                             <Link href="/about_college" className="block px-4 py-3 hover:bg-[#c9302c] transition-colors border-b border-gray-800">
//                                                 About College
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/principal_desk" className="block px-4 py-3 hover:bg-[#c9302c] transition-colors border-b border-gray-800">
//                                                 Principal Desk
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/about-lbsm-rules" className="block px-4 py-3 hover:bg-[#c9302c] transition-colors">
//                                                 Rules & Regulation
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </li>

//                             <li className="h-full">
//                                 <Link href="/faculties" className="h-full px-4 flex items-center hover:text-red-400 transition-colors">FACULTIES</Link>
//                             </li>
//                             <li className="h-full relative group cursor-pointer">
//                                 <a href="#" className="h-full px-4 flex items-center hover:text-red-400 transition-colors gap-1">
//                                     CELL / COMMITTEE <ChevronDown size={10} />
//                                 </a>
//                             </li>
//                             <li className="h-full">
//                                 <Link href="/gallery" className="h-full px-4 flex items-center hover:text-red-400 transition-colors">GALLERY</Link>
//                             </li>
//                             <li className="h-full">
//                                 <Link href="/contact" className="h-full px-4 flex items-center hover:text-red-400 transition-colors">CONTACT</Link>
//                             </li>
//                             <li className="h-full">
//                                 <a href="https://appointments.uidai.gov.in/bookappointment.aspx?AspxAutoDetectCookieSupport=1" target="_blank" rel="noopener noreferrer" className="h-full px-4 flex items-center hover:text-red-400 transition-colors">AADHAR ENROLMENT</a>
//                             </li>
//                             <li className="h-full">
//                                 <a href="/IDP.pdf" className="h-full px-4 flex items-center hover:text-red-400 transition-colors">IDP</a>
//                             </li>
//                             {/* <li className="h-full relative group cursor-pointer">
//                                 <a href="/Broucher.pdf" className="h-full px-4 flex items-center hover:text-red-400 transition-colors gap-1">
//                                     SEMINAR <ChevronDown size={10} />
//                                 </a>
//                             </li> */}

//                             <li className="h-full relative group cursor-pointer">
//                                 <span className="h-full px-4 flex items-center hover:text-red-400 transition-colors gap-1">
//                                     SEMINAR <ChevronDown size={10} />
//                                 </span>
//                                 {/* Dropdown Menu */}
//                                 <div className="absolute top-full left-0 w-48 bg-[#1a1a1a] shadow-lg border-t-2 border-[#c9302c] hidden group-hover:block z-50">
//                                     <ul className="flex flex-col">
//                                         <li>
//                                             <Link href="/about_college" className="block px-4 py-3 hover:bg-[#c9302c] transition-colors border-b border-gray-800">
//                                                 Past Seminars
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/principal_desk" className="block px-4 py-3 hover:bg-[#c9302c] transition-colors border-b border-gray-800">
//                                                 Ongoing Seminars
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link href="/about-lbsm-rules" className="block px-4 py-3 hover:bg-[#c9302c] transition-colors">
//                                                 Upcoming Seminars
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </li>
//                         </ul>

//                         {/* Login Button */}
//                         <div className="flex items-center">
//                             <a href="login" className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 transition-colors">
//                                 <GraduationCap size={16} />
//                                 <span className="hidden sm:inline">Register/Login</span>
//                                 <span className="sm:hidden">Login</span>
//                             </a>
//                         </div>
//                     </div>

//                     {/* Mobile Navigation Drawer */}
//                     {isMobileMenuOpen && (
//                         <div className="md:hidden bg-[#1a1a1a] border-t border-gray-800 pb-4">
//                             <ul className="flex flex-col">
//                                 <li>
//                                     <Link href="/" className="block py-3 px-4 border-b border-gray-700 hover:bg-[#c9302c] transition-colors">HOME</Link>
//                                 </li>

//                                 {/* Mobile Accordion for About LBSM */}
//                                 <li>
//                                     <div
//                                         className="flex justify-between items-center py-3 px-4 border-b border-gray-700 hover:text-red-400 transition-colors cursor-pointer"
//                                         onClick={() => setIsAboutMobileOpen(!isAboutMobileOpen)}
//                                     >
//                                         ABOUT LBSM
//                                         <ChevronDown size={14} className={`transition-transform duration-200 ${isAboutMobileOpen ? 'rotate-180' : ''}`} />
//                                     </div>
//                                     {isAboutMobileOpen && (
//                                         <ul className="bg-[#111] pl-6 text-gray-300 text-xs">
//                                             <li>
//                                                 <Link href="/about_college" className="block py-3 border-b border-gray-800 hover:text-white">About College</Link>
//                                             </li>
//                                             <li>
//                                                 <Link href="/principal_desk" className="block py-3 border-b border-gray-800 hover:text-white">Principal Desk</Link>
//                                             </li>
//                                             <li>
//                                                 <Link href="/about-lbsm-rules" className="block py-3 border-b border-gray-800 hover:text-white">Rules & Regulation</Link>
//                                             </li>
//                                         </ul>
//                                     )}
//                                 </li>

//                                 <li>
//                                     <Link href="/faculties" className="block py-3 px-4 border-b border-gray-700 hover:text-red-400 transition-colors">FACULTIES</Link>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="block py-3 px-4 border-b border-gray-700 hover:text-red-400 transition-colors">CELL / COMMITTEE</a>
//                                 </li>
//                                 <li>
//                                     <Link href="/gallery" className="block py-3 px-4 border-b border-gray-700 hover:text-red-400 transition-colors">GALLERY</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/contact" className="block py-3 px-4 border-b border-gray-700 hover:text-red-400 transition-colors">CONTACT</Link>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="block py-3 px-4 border-b border-gray-700 hover:text-red-400 transition-colors">AADHAR ENROLMENT</a>
//                                 </li>
//                                 <li>
//                                     <a href="/IDP.pdf" className="block py-3 px-4 border-b border-gray-700 hover:text-red-400 transition-colors">IDP</a>
//                                 </li>
//                                 <li>
//                                     <a href="/Broucher.pdf" className="block py-3 px-4 hover:text-red-400 transition-colors">SEMINAR</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMobileOpen, setIsAboutMobileOpen] = useState(false);
  const [isEventsMobileOpen, setIsEventsMobileOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false); // Added for top-bar links on mobile

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#c9302c] text-white text-[11px] font-medium py-1.5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Desktop Top Links */}
          <div className="hidden lg:flex space-x-4">
            <Link href='/NAACCertificate.jpeg' target="_blank" className="hover:underline">NAAC</Link>
            <Link href='/IQAC.pdf' target="_blank" className="hover:underline">IQAC</Link>
            <Link href='https://www.nirfindia.org/' className="hover:underline">NIRF</Link>
            <Link href='https://rusa.nic.in/' target="_blank" className="hover:underline">RUSA</Link>
            <Link href='/' className="hover:underline">Online Fee Payment</Link>
            <Link href='https://ekalyan.cgg.gov.in/collServices202526.do' target="_blank" className="hover:underline">E-Kalyan</Link>
          </div>

          <div className="flex items-center space-x-4 justify-center md:justify-end w-full lg:w-auto">
            <span className="flex items-center gap-1">
              <Phone size={10} /> +91-9334710089
            </span>
            <span className="flex items-center gap-1">
              <Mail size={10} /> lbsmcollege@yahoo.in
            </span>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <Link href="/" className="block shadow-sm bg-white py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
          <img
            src="/lbsm-college.avif"
            alt="LBSM College Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
          <div className="flex flex-col bg-white">
            <h1 className="text-[#002147] text-lg sm:text-xl md:text-3xl font-extrabold uppercase leading-tight">
              Lal Bahadur Shastri Memorial College
            </h1>
            <div className="text-gray-600 text-xs sm:text-sm mt-1">
              Jamshedpur, Jharkhand (India)
            </div>
            <div className="text-gray-500 text-[10px] sm:text-xs uppercase mt-0.5">
              A Constituent Unit of Kolhan University
            </div>
            <div className="text-green-700 font-bold text-base sm:text-lg font-serif mt-1">
              लाल बहादुर शास्त्री मेमोरियल कॉलेज
            </div>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <div className="bg-black text-white text-[13px] font-bold uppercase relative z-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-14 md:h-12">

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2 text-white hover:text-red-400 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex h-full items-center">
              <li className="h-full">
                <Link href="/" className="h-full px-5 bg-[#c9302c] flex items-center">
                  Home
                </Link>
              </li>

              {/* About */}
              <li className="h-full relative group">
                <span className="h-full px-4 flex items-center gap-1 hover:text-red-400 cursor-pointer">
                  About the College <ChevronDown size={10} />
                </span>
                <div className="absolute top-full left-0 w-52 bg-[#1a1a1a] hidden group-hover:block border-t-2 border-[#c9302c]">
                  <Link href="/about_college" className="block px-4 py-3 hover:bg-[#c9302c]">About the College</Link>
                  <Link href="/principal_desk" className="block px-4 py-3 hover:bg-[#c9302c]">Principal’s Message</Link>
                  <Link href="/about-lbsm-rules" className="block px-4 py-3 hover:bg-[#c9302c]">Rules & Regulations</Link>
                </div>
              </li>

              <li className="h-full">
                <Link href="/faculties" className="h-full px-4 flex items-center hover:text-red-400">Faculty</Link>
              </li>

              <li className="h-full">
                <Link href="/gallery" className="h-full px-4 flex items-center hover:text-red-400">Photo Gallery</Link>
              </li>

              {/* Academic Events */}
              <li className="h-full relative group">
                <span className="h-full px-4 flex items-center gap-1 hover:text-red-400 cursor-pointer">
                  Academic Events <ChevronDown size={10} />
                </span>
                <div className="absolute top-full left-0 w-56 bg-[#1a1a1a] hidden group-hover:block border-t-2 border-[#c9302c]">
                  <Link href="/past-seminars" className="block px-4 py-3 hover:bg-[#c9302c]">Past Seminars</Link>
                  <Link href="/ongoing-seminars" className="block px-4 py-3 hover:bg-[#c9302c]">Ongoing Seminars</Link>
                  <Link href="/upcoming-seminars" className="block px-4 py-3 hover:bg-[#c9302c]">Upcoming Seminars</Link>
                </div>
              </li>

              <li className="h-full">
                <Link href="/contact" className="h-full px-4 flex items-center hover:text-red-400">Contact Us</Link>
              </li>
            </ul>

            {/* Login Button (Responsive text) */}
            <Link
              href="/login"
              className="bg-[#d9534f] px-3 py-2 md:px-4 md:py-1.5 rounded text-xs md:text-sm flex items-center gap-2 whitespace-nowrap"
            >
              <GraduationCap size={16} />
              <span className="hidden sm:inline">Student Login / Registration</span>
              <span className="sm:hidden">Login</span>
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] absolute w-full left-0 top-full shadow-lg border-t border-gray-800 pb-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 border-b border-gray-800">Home</Link>

            {/* Mobile About */}
            <button onClick={() => setIsAboutMobileOpen(!isAboutMobileOpen)} className="w-full flex justify-between px-4 py-3 border-b border-gray-800">
              About the College <ChevronDown size={16} className={`transition-transform ${isAboutMobileOpen ? 'rotate-180' : ''}`} />
            </button>
            {isAboutMobileOpen && (
              <div className="bg-[#111] pl-6 text-gray-300">
                <Link href="/about_college" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 border-b border-gray-800/50">About</Link>
                <Link href="/principal_desk" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 border-b border-gray-800/50">Principal’s Message</Link>
                <Link href="/about-lbsm-rules" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5">Rules & Regulations</Link>
              </div>
            )}

            {/* Missing Links Added Here */}
            <Link href="/faculties" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 border-b border-gray-800">Faculty</Link>
            <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 border-b border-gray-800">Photo Gallery</Link>

            {/* Mobile Events */}
            <button onClick={() => setIsEventsMobileOpen(!isEventsMobileOpen)} className="w-full flex justify-between px-4 py-3 border-b border-gray-800">
              Academic Events <ChevronDown size={16} className={`transition-transform ${isEventsMobileOpen ? 'rotate-180' : ''}`} />
            </button>
            {isEventsMobileOpen && (
              <div className="bg-[#111] pl-6 text-gray-300">
                <Link href="/past-seminars" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 border-b border-gray-800/50">Past Seminars</Link>
                <Link href="/ongoing-seminars" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5 border-b border-gray-800/50">Ongoing Seminars</Link>
                <Link href="/upcoming-seminars" onClick={() => setIsMobileMenuOpen(false)} className="block py-2.5">Upcoming Seminars</Link>
              </div>
            )}

            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-4 border-b border-gray-800">Contact Us</Link>

            {/* Mobile Quick Links (Recovered from the hidden Top Bar) */}
            <button onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)} className="w-full flex justify-between px-4 py-3 text-[#c9302c]">
              Important Links <ChevronDown size={16} className={`transition-transform ${isQuickLinksOpen ? 'rotate-180' : ''}`} />
            </button>
            {isQuickLinksOpen && (
              <div className="bg-[#111] pl-6 text-gray-400 text-xs">
                <Link href="/NAACCertificate.jpeg" target="_blank" className="block py-2.5">NAAC</Link>
                <Link href="/IQAC.pdf" target="_blank" className="block py-2.5">IQAC</Link>
                <Link href="https://www.nirfindia.org/" className="block py-2.5">NIRF</Link>
                <Link href="https://rusa.nic.in/" target="_blank" className="block py-2.5">RUSA</Link>
                <Link href="/" className="block py-2.5">Online Fee Payment</Link>
                <Link href="https://ekalyan.cgg.gov.in/collServices202526.do" target="_blank" className="block py-2.5">E-Kalyan</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}