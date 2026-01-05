import React from 'react'

function HeaderNew() {
    return (
        <div>

            <div class="font-sans antialiased text-gray-800">

                <div class="bg-lbsm-red text-white text-[11px] font-medium py-1.5">
                    <div class="container mx-auto px-4 flex justify-between items-center">
                        <div class="flex space-x-4">
                            <a href="#" class="hover:underline">NAAC</a>
                            <a href="#" class="hover:underline">IQAC</a>
                            <a href="#" class="hover:underline">NIRF</a>
                            <a href="#" class="hover:underline">RUSA</a>
                            <a href="#" class="hover:underline">Online Fee Payment</a>
                            <a href="#" class="hover:underline">E-Kalyan</a>
                            <a href="#" class="hover:underline">Old Website</a>
                        </div>
                        <div class="flex items-center space-x-4">
                            <span class="flex items-center gap-1">
                                <i class="fas fa-phone-alt text-[10px]"></i> +91-9334710089
                            </span>
                            <span class="flex items-center gap-1">
                                <i class="fas fa-envelope text-[10px]"></i> lbsmcollege@yahoo.in
                            </span>
                        </div>
                    </div>
                </div>

                <header class="bg-white py-4 shadow-sm">
                    <div class="container mx-auto px-4 flex items-center gap-4">
                        <div class="shrink-0">
                            <img src="https://via.placeholder.com/80x80?text=LBSM" alt="LBSM Logo" class="h-20 w-auto object-contain">
                        </div>

                        <div class="flex flex-col">
                            <h1 class="text-[#002147] text-3xl font-extrabold uppercase tracking-tight leading-tight">
                                LAL BAHADUR SHASTRI MEMORIAL COLLEGE
                            </h1>
                            <div class="text-gray-600 text-sm mt-1">
                                Jamshedpur, Jharkhand (INDIA)
                            </div>
                            <div class="text-gray-500 text-xs tracking-wider uppercase mt-0.5">
                                A CONSTITUENT UNIT OF KOLHAN UNIVERSITY
                            </div>
                            <div class="text-green-700 font-bold text-lg mt-0.5 font-serif">
                                लाल बहादुर शास्त्री मेमोरियल कॉलेज
                            </div>
                        </div>
                    </div>
                </header>

                <nav class="bg-black text-white text-[13px] font-bold uppercase tracking-wide relative z-50">
                    <div class="container mx-auto px-0 flex items-center justify-between">
                        <ul class="flex items-center h-12">
                            <li class="h-full">
                                <a href="/" class="h-full px-5 bg-lbsm-red flex items-center hover:bg-red-700 transition-colors">HOME</a>
                            </li>
                            <li class="h-full relative group cursor-pointer">
                                <a href="#" class="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
                                    ABOUT LBSM <i class="fas fa-chevron-down text-[10px]"></i>
                                </a>
                            </li>
                            <li class="h-full">
                                <a href="#" class="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">FACULTIES</a>
                            </li>
                            <li class="h-full relative group cursor-pointer">
                                <a href="#" class="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
                                    CELL / COMMITTEE <i class="fas fa-chevron-down text-[10px]"></i>
                                </a>
                            </li>
                            <li class="h-full">
                                <a href="#" class="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">GALLERY</a>
                            </li>
                            <li class="h-full">
                                <a href="#" class="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">CONTACT</a>
                            </li>
                            <li class="h-full">
                                <a href="#" class="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">AADHAR ENROLMENT</a>
                            </li>
                            <li class="h-full">
                                <a href="#" class="h-full px-4 flex items-center hover:text-lbsm-red transition-colors">IDP</a>
                            </li>
                            <li class="h-full relative group cursor-pointer">
                                <a href="#" class="h-full px-4 flex items-center hover:text-lbsm-red transition-colors gap-1">
                                    SEMINAR <i class="fas fa-chevron-down text-[10px]"></i>
                                </a>
                            </li>
                        </ul>

                        <div class="pr-4">
                            <a href="#" class="bg-[#d9534f] hover:bg-[#c9302c] text-white px-4 py-1.5 rounded text-sm font-bold flex items-center gap-2 transition-colors">
                                <i class="fas fa-user-graduate"></i> ADMISSION
                            </a>
                        </div>
                    </div>
                </nav>

                <section class="relative w-full h-[500px] bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                        alt="College Seminar Hall"
                        class="w-full h-full object-cover">

                        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            <button class="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"></button>
                            <button class="w-3 h-3 rounded-full bg-white opacity-100 shadow-md"></button> <button class="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"></button>
                        </div>
                </section>

                <div class="bg-lbsm-red text-white h-10 flex items-center overflow-hidden border-t-4 border-yellow-500">
                    <div class="bg-[#a91e1e] h-full flex items-center px-6 font-bold z-10 shrink-0 text-sm">
                        LBSM @ NEWS
                    </div>
                    <div class="marquee-container w-full px-4 text-sm font-medium">
                        <div class="marquee-content">
                            • Suspension of classes on 20.09.2025 • KCC host 2nd apprentice cum job mela • Notice for Admission in UG Sem-I (2025-29) • Holiday on 20.09.2025 • Two Day National Seminar on Global I
                        </div>
                    </div>
                </div>

                <a href="#" class="fixed bottom-6 right-6 bg-lbsm-yellow text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-500 transition-colors z-50 border-2 border-white">
                    <i class="fas fa-arrow-up"></i>
                </a>


                <section class="py-12 bg-gradient-to-b from-[#fffbeb] via-[#fdfbf7] to-[#f5f3ff]">
                    <div class="container mx-auto px-4">

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div class="bg-red-50 p-3 rounded-full shrink-0 text-red-600">
                                    <i class="fas fa-university text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 text-sm mb-1">Quality Higher Education</h3>
                                    <p class="text-xs text-gray-500 leading-relaxed">
                                        A reputed constituent unit of Kolhan University, committed to academic excellence since 1971.
                                    </p>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div class="bg-blue-50 p-3 rounded-full shrink-0 text-blue-600">
                                    <i class="fas fa-user-graduate text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 text-sm mb-1">Dedicated Faculties</h3>
                                    <p class="text-xs text-gray-500 leading-relaxed">
                                        Experienced and qualified teachers supporting students in both academic and co-curricular growth.
                                    </p>
                                </div>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div class="bg-green-50 p-3 rounded-full shrink-0 text-green-600">
                                    <i class="fas fa-hand-holding-heart text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 text-sm mb-1">Support & Scholarships</h3>
                                    <p class="text-xs text-gray-500 leading-relaxed">
                                        Focus on students from ST/SC, OBC and weaker sections through various government schemes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                            <div class="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100">
                                <div class="bg-lbsm-yellow py-3 text-center z-10 relative shadow-sm">
                                    <h2 class="text-black font-bold uppercase text-sm tracking-wide">UG/PG MERIT LIST</h2>
                                </div>

                                <div class="h-[350px] overflow-hidden relative bg-white">
                                    <div class="animate-vertical-scroll hover:pause p-4">

                                        <ul class="space-y-3 pb-3">
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Botany</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Bengali, HO, Philosophy</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_English</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Economics</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Commerce</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Chemistry</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                        </ul>

                                        <ul class="space-y-3 pt-3">
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Botany</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Bengali, HO, Philosophy</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_English</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Economics</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Commerce</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">2nd Merit List_Chemistry</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100">
                                <div class="bg-lbsm-yellow py-3 text-center z-10 relative shadow-sm">
                                    <h2 class="text-black font-bold uppercase text-sm tracking-wide">IMPORTANT NOTICE / PLACEMENT</h2>
                                </div>

                                <div class="h-[350px] overflow-hidden relative bg-white">
                                    <div class="animate-vertical-scroll hover:pause p-4">

                                        <ul class="space-y-3 pb-3">
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Intermediate Compartmental Exam Pass</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Form fillup of PG 4th Sem Exam 2025</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Form fillup of PG 2nd Sem Exam 2025</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Holiday on 20.09.2025</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Extended date of FYUGP 2nd Sem Exam</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Notice for Class Start BBA/BCA Sem-I</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                        </ul>

                                        <ul class="space-y-3 pt-3">
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Intermediate Compartmental Exam Pass</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Form fillup of PG 4th Sem Exam 2025</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Form fillup of PG 2nd Sem Exam 2025</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Holiday on 20.09.2025</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Extended date of FYUGP 2nd Sem Exam</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                            <li class="flex justify-between items-start text-sm border-b border-gray-100 pb-2">
                                                <span class="text-gray-700 w-3/4">Notice for Class Start BBA/BCA Sem-I</span>
                                                <a href="#" class="text-blue-700 font-medium hover:underline text-xs">View</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center h-full border border-gray-100">
                                <h2 class="text-[#002147] font-extrabold text-lg uppercase tracking-wide mb-6">PRINCIPAL</h2>
                                <div class="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden border-4 border-gray-100 shadow-inner">
                                    <img src="https://via.placeholder.com/400x300?text=Principal+Dr+Ashok+Kumar+Jha"
                                        alt="Dr. Ashok Kumar Jha"
                                        class="w-full h-full object-cover">
                                </div>
                                <div class="mt-auto">
                                    <h3 class="text-[#002147] font-bold text-lg">Dr. Ashok Kumar Jha</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <style>
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
        }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #f1f1f1; 
        }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #d1d5db;
                    border-radius: 4px;
        }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #9ca3af; 
        }

                    @keyframes vertical-scroll {
                        0 % { transform: translateY(0); }
        100% {transform: translateY(-50%); }
    }

                    .animate-vertical-scroll {
                        /* Adjust '20s' to control speed (higher = slower) */
                        animation: vertical-scroll 20s linear infinite;
    }

                    /* Pause animation on hover for easier clicking */
                    .hover\:pause:hover {
                        animation - play - state: paused;
    }
                </style>

            </div>

        </div>
    )
}

export default HeaderNew