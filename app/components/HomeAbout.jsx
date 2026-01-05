import React from 'react'

// function HomeAbout() {
//     return (
//         <div className='relative'>

//             <img src="/about-bg.png" alt="" className=' h-[80vh]' />
//             <div className='absolute inset-0 flex justify-center items-center'>
//                 <div className='max-w-6xl mx-auto flex gap-18 justify-center items-center'>
//                     <img src="/about.jpg" alt="" className='h-80 object-cover rounded-lg' />

//                     <div className='p-6 rounded-lg max-w-xl'>
//                         <h1 className='text-3xl font-bold mb-4'>About Us</h1>
//                         <div className='space-y-9'>
//                             <p className='text-lg text-gray-600 '>
//                                 Established in the year 1971 by a group of motivated teachers and social workers committed to empowering the poor people, especially those belonging to the ST/SC and B.C. categories through education, Lal Bahadur Shastri Memorial College is at present a reputed constituent unit of Kolhan University, Chaibasa, located at Karandih, about two kilometers south of Tata Nagar Railway Junction, connected from all sides by roads.
//                             </p>
//                             <p className='text-lg text-gray-600'>
//                                 Situated in the lush-green terrain with rural simplicity, This college caters to the needs of higher education of over three thousand students coming from the adjoining areas as well as the far flung villages providing them with the opportunity of acquiring quality education for their progress, prosperity and self-reliance. This college has the honour of being named after the great legendary leader, the second Prime Minister of India, Late Sri Lal Bahadur Shastri.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HomeAbout

function HomeAbout() {
    return (
        // <div className="relative w-full md:h-[80vh]">
        //     <img
        //         src="/about-bg.png"
        //         alt=""
        //         className="w-full h-[50vh] md:h-[80vh] object-cover"
        //     />

        //     <div className="absolute inset-0 flex items-center px-4">
        //         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-18 items-center">

        //             <img
        //                 src="/about.jpg"
        //                 alt=""
        //                 className="w-full max-w-sm md:max-w-md h-64 md:h-80 object-cover rounded-lg"
        //             />

        //             <div className="p-4 md:p-6 rounded-lg max-w-xl text-center lg:text-left">
        //                 <h1 className="text-2xl md:text-3xl font-bold mb-4">
        //                     About Us
        //                 </h1>

        //                 <div className="space-y-6 md:space-y-9">
        //                     <p className="text-base md:text-lg text-gray-600">
        //                     </p>

        //                     <p className="text-base md:text-lg text-gray-600">
        //                     </p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>
        <div className="relative w-full md:h-[80vh]">

            {/* Background */}
            <img
                src="/about-bg.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover hidden md:block"
            />

            {/* Content */}
            <div className="relative md:absolute md:inset-0 flex items-center px-4 py-12">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">

                    <img
                        src="/about.jpg"
                        alt=""
                        className="w-full max-w-sm md:max-w-md h-64 md:h-80 object-cover rounded-lg"
                    />

                    <div className="p-4 md:p-6 max-w-xl text-center lg:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">
                            About Us
                        </h1>

                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-gray-600">
                                Established in the year 1971 by a group of motivated teachers and social workers committed to empowering the poor people, especially those belonging to the ST/SC and B.C. categories through education, Lal Bahadur Shastri Memorial College is at present a reputed constituent unit of Kolhan University, Chaibasa, located at Karandih, about two kilometers south of Tata Nagar Railway Junction, connected from all sides by roads.

                            </p>

                            <p className="text-base md:text-lg text-gray-600">
                                Situated in the lush-green terrain with rural simplicity, This college caters to the needs of higher education of over three thousand students coming from the adjoining areas as well as the far flung villages providing them with the opportunity of acquiring quality education for their progress, prosperity and self-reliance. This college has the honour of being named after the great legendary leader, the second Prime Minister of India, Late Sri Lal Bahadur Shastri.

                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default HomeAbout;
