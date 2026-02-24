// import Image from "next/image";

export const metadata = {
    title: "About College | LBSM College Jamshedpur",
    description:
        "Learn about Lal Bahadur Shastri Memorial College, Jamshedpur – its history, vision, mission and academic excellence under Kolhan University.",
};

export default function AboutCollegePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ===== Banner Section ===== */}
            <section className="relative w-full h-20 md:h-26 lg:h-34 overflow-hidden">
                {/* Background Pattern Image */}
                <img
                    src="/pattern.png"
                    alt="LBSM College background pattern"
                    // fill
                    // priority
                    className="w-full"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Title + Breadcrumb */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
                        About College
                    </h1>

                    <nav
                        aria-label="Breadcrumb"
                        className="mt-2 text-sm md:text-base"
                    >

                    </nav>
                </div>
            </section>

            <div className="relative w-full md:h-[100vh]">

                {/* Background */}
                <img
                    src="/about-bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover hidden md:block"
                />

                {/* Content */}
                <div className="relative md:absolute md:inset-0 flex items-center px-4 py-12">
                    <div className="px-1 mx-auto flex flex-col lg:flex-row gap-8 items-center">

                        <img
                            src="/Principle.png"
                            alt=""
                            className="w-full  h-64 md:h-[600px] object-cover rounded-lg"
                        />

                        <div className=" md:p-6  text-center lg:text-left max-w-xl">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center mt-9">
                                PRINCIPAL DESK
                            </h1>
                            <div className="space-y-1">
                                <p className="  text-sm md:text-lg text-gray-600">
                                    Dear all,
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="  text-sm md:text-lg text-gray-600">
                                    It is a matter of great pleasure that the LBSM College, Jamshedpur is applying for the NAAC evaluation. The College began its journey in 1971. After separation from Ranchi University in 2009 and being the part of Kolhan University, Chaibasa the college is flourishing in each & every area of academia. In this Continuation while applying for NAAC we are too much alert & conscious about the growth of students and functioning of proper mechanism of evaluation and assessment of faculties & administration. While submitting this Self-Study Report and inviting the NAAC for our assessment; we are also ready to listen the valuable suggestions made by the Peer Team members.We are hopeful that with the cooperation of the University, our alumni, teaching and non-teaching staff and other stake holders, we will be able to excel in each area.                                </p>
                            </div>
                        <div className="font-bold mt-9">Dr. Ashok Kumar Jha -</div>

                        </div>


                    </div>
                </div>
            </div>

        </main>
    );
}
