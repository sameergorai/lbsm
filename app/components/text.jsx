import React from 'react'

function text() {
  return (
    <div>
            {/* --- TOP BAR --- */}
            <div className="top-bar text-white px-[13px] h-9 flex items-center bg-[#001f3f]">
                <div className="container w-[95%] max-w-[1300px] mx-auto flex items-center justify-between">

                    {/* Contact Info (Hidden as per your code) */}
                    <div className="contact-info mr-[15px] hidden items-center gap-5">
                        <span className="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#F9DB78">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                            </svg>
                            +919334710089
                        </span>
                        <span className="flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#F9DB78">
                                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                            </svg>
                            lbsmcollege@yahoo.in
                        </span>
                    </div>

                    {/* Marquee Section */}
                    <div className="marquee-container grow mx-[20px] overflow-hidden whitespace-nowrap text-[#ffff00]">
                        <div className="marquee-container overflow-hidden whitespace-nowrap text-[#ffff00]">
                            <div className="animate-marquee inline-block">
                                Merit List Notice in UG Sem.-I (2025-29) Inter Compartmental Pass Student
                                <a href="/" className="text-white mx-2">View / Download</a>
                                Revised Date of Admission in UG Sem.-I (2025-29) Compartmental Pass Students
                            </div>
                        </div>

                    </div>

                    {/* Social Icons */}
                    <div className="social-icons flex text-amber-400 ml-[10px] text-[14px] no-underline items-center">
                        <Link href="https://www.facebook.com/lbsmcollege.jamshedpur.7" className="text-white ml-[10px] no-underline text-[14px]">
                            <Facebook />
                        </Link>
                        <a className="flex text-amber-400 ml-[10px] text-[14px] no-underline" href="#">
                            <Twitter />
                        </a>
                        <a className="flex text-amber-400 ml-[10px] text-[14px] no-underline" href="#">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* --- HEADER --- */}
            <header
                className="pt-[15px] border-b border-[#ddd]"
                style={{
                    background: "linear-gradient(123deg, #FFFCAC 0%, #FFFFFF 67%), linear-gradient(180deg, #D8D8D8 0%, #efe5a8 100%), linear-gradient(142deg, #F9F5F0 0%, #F9F5F0 33%, #F2EAD3 calc(33% + 1px), #F2EAD3 56%, #ffefc9 calc(56% + 1px), #f2da95 62%, #fbf3c1 calc(62% + 1px), #fbf4c0 100%)",
                    backgroundBlendMode: "multiply, overlay, normal"
                }}
            >
                {/* Header Content with responsive layout (Mobile First -> Desktop) */}
                <div className="header-content flex flex-col lg:flex-row items-center justify-center pb-[15px] text-center relative">

                    {/* Logo Section */}
                    <div className="logo mb-[10px] lg:mb-0 lg:absolute lg:left-[5%] lg:top-0">
                        <div className="flex items-center gap-[10px]">
                            <img
                                src="/lbsm_logo.png"
                                alt="LBSM Logo"
                                width={180}
                                height={70}
                                priority
                                className="h-[80px] w-auto"
                            />
                            <div className="hidden font-bold text-[24px] text-[#002147]">
                                LBSM<br /><span className="text-red-500 text-[12px]">JAMSHEDPUR</span>
                            </div>
                        </div>
                    </div>

                    {/* College Info */}
                    <div className="college-info flex flex-col items-center">
                        <div className="affiliation text-[#d32f2f] font-bold text-[14px] mb-[5px] uppercase">
                            A Constituent Unit of Kolhan University
                        </div>
                        <div className="college-name-en text-[26px] font-extrabold text-[#002147] uppercase tracking-[0.5px]">
                            LAL BAHADUR SHASTRI MEMORIAL COLLEGE
                        </div>
                        <div className="college-name-hi not-italic font-bold text-[32px] pt-[7px] leading-[27px] tracking-[2px] uppercase text-[#27ff00] text-center mb-[16px] [-webkit-text-stroke:0.5px_black]">
                            लाल बहादुर शास्त्री मेमोरियल कॉलेज
                        </div>
                    </div>
                </div>

                {/* --- NAVIGATION --- */}
                <nav className="bg-[#fff9c4] p-0 flex justify-center items-center relative">
                    <div className="container w-[95%] max-w-[1300px] mx-auto flex items-center justify-between relative">

                        {/* Nav Links */}
                        <ul className="nav-links list-none flex flex-wrap lg:flex-nowrap justify-center gap-[25px] py-[15px] text-[12px] lg:text-[14px] w-full lg:w-auto">
                            <li>
                                <Link href="/" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    HOME
                                </Link>
                            </li>

                            {/* Dropdown Menu */}
                            <li className="dropdown-parent relative cursor-pointer group">
                                <Link href="#" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    ABOUT LBSM ▾
                                </Link>
                                <ul className="dropdown-menu hidden group-hover:block absolute top-full left-0 bg-[#002147] min-w-[220px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[1000] p-0 list-none">
                                    <li className="w-full border-b border-[rgba(255,255,255,0.1)]">
                                        <Link href="/about_college" className="text-white px-[16px] py-[12px] no-underline block text-[14px] whitespace-nowrap hover:bg-[#F9DB78] hover:text-[#002147]">
                                            ABOUT COLLEGE
                                        </Link>
                                    </li>
                                    <li className="w-full border-b border-[rgba(255,255,255,0.1)]">
                                        <Link href="/principal_desk" className="text-white px-[16px] py-[12px] no-underline block text-[14px] whitespace-nowrap hover:bg-[#F9DB78] hover:text-[#002147]">
                                            PRINCIPAL DESK
                                        </Link>
                                    </li>
                                    <li className="w-full border-b border-[rgba(255,255,255,0.1)]">
                                        <Link href="/about-lbsm-rules" className="text-white px-[16px] py-[12px] no-underline block text-[14px] whitespace-nowrap hover:bg-[#F9DB78] hover:text-[#002147]">
                                            ABOUT RULES & REGULATION
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link href="/faculties" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    FACULTIES
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    CELL / COMMITTEE
                                </Link>
                            </li>
                            <li>
                                <Link href="gallery" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    GALLERY
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    CONTACT
                                </Link>
                            </li>
                            <li>
                                <Link href="https://appointments.uidai.gov.in/bookappointment.aspx?AspxAutoDetectCookieSupport=1" target="_blank" rel="noopener noreferrer" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    AADHAR ENROLMENT
                                </Link>
                            </li>
                            <li>
                                <Link href="/IDP.pdf" target="_blank" rel="noopener noreferrer" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    IDP
                                </Link>
                            </li>
                            <li>
                                <Link href="/Broucher.pdf" target="_blank" rel="noopener noreferrer" className="no-underline text-[#444] font-medium uppercase transition-colors duration-300 hover:text-black">
                                    SEMINAR
                                </Link>
                            </li>
                        </ul>

                        {/* Admin Login Button */}
                        <Link href='login' className="admin-login bg-[#fff176] px-[25px] py-[15px] font-bold text-[#333] uppercase text-[14px] flex items-center cursor-pointer justify-center mt-[10px] w-full static lg:absolute lg:right-[5%] lg:top-0 lg:h-full lg:w-auto lg:mt-0">
                            ADMIN LOGIN
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
  )
}

export default text