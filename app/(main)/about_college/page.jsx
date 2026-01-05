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
                    fill
                    priority
                    className="object-cover"
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

                        

                        <div className=" md:p-6  text-center lg:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center mt-9">
                               ABOUT LBSM COLLEGE
                            </h1>

                            <div className="space-y-1">
                                <p className="  text-sm md:text-lg text-gray-600">
                                  Established in the year 1971 by a group of motivated teachers and social workers committed to empowering the poor people, especially those belonging to the ST/SC and B.C. categories through education, Lal Bahadur Shastri Memorial College is at present a reputed constituent unit of Kolhan University, Chaibasa, located at Karandih, about two kilometers south of Tata Nagar Railway Junction, connected from all sides by roads. Situated in the lush-green terrain with rural simplicity, This college caters to the needs of higher education of over three thousand students coming from the adjoining areas as well as the far flung villages providing them with the opportunity of acquiring quality education for their progress, prosperity and self-reliance. This college has the honour of being named after the great legendary leader, the second Prime Minister of India, Late Sri Lai Bahadur Shastri. Within a short span of time this college has earned the distinction of propagating its high ideals of duty, discipline and moral values apart from the normal academic activities. This college imparts under graduate teaching to honours level in Arts, Commerce and Science faculties. With a view to equipping the students more suitably to face the challenges of life, several vocational courses like, B.C.A., B.B.A., Ad-on courses as Rural Development, Electronics & Information Technology are taught in this college, also courses of B.Ed. & RG are under plan. The college is run in its own building located in about 12 acres of land and has high potentials of further development. A new complex of building for class rooms, auditorium, laboratories, staff quarters etc. is proposed to be developed with the help of the university, state Government, U.G.C. and other funding agencies. With the sincere efforts and dedication of the teachers and the members of the non-teaching staff, this college is committed to contributing quality education and empowerment of the students.
                                </p>
                            </div>
                        </div>

                        <img
                            src="/school.jpg"
                            alt=""
                            className="w-full  h-64 md:h-[600px] object-cover rounded-lg"
                        />

                    </div>
                </div>
            </div>

        </main>
    );
}
