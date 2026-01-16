// // components/Carousel.tsx
// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface CarouselItem {
//   id: number;
//   title: string;
//   imageUrl: string;
// }

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   // Sample carousel items with images and titles only
//   const carouselItems: CarouselItem[] = [
//     {
//       id: 1,
//       title: "Mountain Landscape",
//       imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
//     },
//     {
//       id: 2,
//       title: "Beach Sunset",
//       imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop"
//     },
//     {
//       id: 3,
//       title: "Forest Pathway",
//       imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=800&fit=crop"
//     },
//     {
//       id: 4,
//       title: "City Skyline",
//       imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800&fit=crop"
//     },
//     {
//       id: 5,
//       title: "Desert Dunes",
//       imageUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&h=800&fit=crop"
//     }
//   ];

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
//     );
//   }, [carouselItems.length]);

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Auto-play with 5-second interval
//   useEffect(() => {
//     if (!isHovering) {
//       const timer = setInterval(goToNext, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovering, goToNext]);

//   return (
//     <div className="w-full mx-auto">
//       {/* Carousel Container */}
//       <div
//         className="relative h-[500px] overflow-hidden shadow-lg bg-gray-100"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {/* Carousel Content */}
//         <div className="relative w-full h-full">
//           {carouselItems.map((item, index) => (
//             <div
//               key={item.id}
//               className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${index === currentIndex
//                   ? 'opacity-100'
//                   : 'opacity-0 '
//                 }`}
//             >
//               {/* Image */}
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Title Overlay - Fixed */}
//               <div className="absolute inset-0 flex items-center justify-center p-4">
//                 <div className=" max-w-4xl">
//                   <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                     Welcome To LBSM College, Jamshedpur
//                   </h2>
//                   {/* <p className="text-lg md:text-xl text-white/90">
//         {item.title}
//       </p> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         {/* <button
//           onClick={goToPrevious}
//           className={`
//             absolute left-4 top-1/2 -translate-y-1/2 
//             p-2 md:p-3 rounded-full bg-white/90 text-gray-800 
//             transition-all duration-300 z-20 shadow-lg
//             ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
//             hover:bg-white hover:scale-110
//             focus:outline-none focus:ring-2 focus:ring-white/50
//           `}
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={20} className="md:w-6 md:h-6" />
//         </button>

//         <button
//           onClick={goToNext}
//           className={`
//             absolute right-4 top-1/2 -translate-y-1/2 
//             p-2 md:p-3 rounded-full bg-white/90 text-gray-800 
//             transition-all duration-300 z-20 shadow-lg
//             ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
//             hover:bg-white hover:scale-110
//             focus:outline-none focus:ring-2 focus:ring-white/50
//           `}
//           aria-label="Next slide"
//         >
//           <ChevronRight size={20} className="md:w-6 md:h-6" />
//         </button> */}

//         {/* Indicators */}
//         {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {carouselItems.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`
//                 w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300
//                 ${index === currentIndex
//                   ? 'bg-white scale-125'
//                   : 'bg-white/50 hover:bg-white/80'
//                 }
//                 hover:scale-110
//                 focus:outline-none focus:ring-2 focus:ring-white
//               `}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div> */}

//         {/* Slide Counter */}
//         {/* <div className={`
//           absolute top-4 right-4 bg-black/70 text-white 
//           px-2 py-1 md:px-3 md:py-1.5 rounded-full text-sm font-medium z-20
//           transition-all duration-300 backdrop-blur-sm
//           ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
//         `}>
//           {currentIndex + 1} / {carouselItems.length}
//         </div> */}
//       </div>

//     </div>
//   );
// }

// components/Carousel.tsx
// 'use client';

// import { useState, useEffect, useCallback } from 'react';

// interface CarouselItem {
//   id: number;
//   title: string;
//   description?: string; // Optional, based on your DB
//   imageUrl: string;
// }

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([]);

//   // Fetch data from PHP Backend
//   useEffect(() => {
//     const fetchCarousel = async () => {
//       try {
//         const res = await fetch('http://localhost/admin/carousel_api.php');
//         const data = await res.json();

//         // Map backend fields (image_url) to frontend interface (imageUrl)
//         const mappedData = Array.isArray(data) ? data.map((item: any) => ({
//           id: item.id,
//           title: item.title,
//           description: item.description,
//           imageUrl: item.image_url 
//         })) : [];

//         setCarouselItems(mappedData);
//       } catch (error) {
//         console.error("Error fetching carousel:", error);
//       }
//     };

//     fetchCarousel();
//   }, []);

//   const goToNext = useCallback(() => {
//     // Only proceed if we have items
//     if (carouselItems.length === 0) return;

//     setCurrentIndex((prevIndex) =>
//       prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
//     );
//   }, [carouselItems.length]);

//   // Auto-play with 5-second interval
//   useEffect(() => {
//     if (!isHovering && carouselItems.length > 0) {
//       const timer = setInterval(goToNext, 3000);
//       return () => clearInterval(timer);
//     }
//   }, [isHovering, goToNext, carouselItems.length]);

//   // If no items loaded yet, you might want to show nothing or a loader
//   if (carouselItems.length === 0) {
//     return <div className="w-full h-[500px] bg-gray-100 animate-pulse"></div>;
//   }

//   return (
//     <div className="w-full mx-auto">
//       {/* Carousel Container */}
//       <div
//         className="relative h-[500px] overflow-hidden shadow-lg bg-gray-100"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         {/* Carousel Content */}
//         <div className="relative w-[100vw] h-90  md:h-full">
//           {carouselItems.map((item, index) => (
//             <div
//               key={item.id}
//               className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${index === currentIndex
//                   ? 'opacity-100'
//                   : 'opacity-0 '
//                 }`}
//             >
//               {/* Image */}
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 className="w-[100vw] md:h-full object-cover"
//               />

//               {/* Title Overlay - Fixed */}
//               <div className="absolute inset-0 flex items-center justify-center p-4">
//                 <div className=" max-w-4xl text-center">
//                   <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4 shadow-black drop-shadow-md">
//                    {/* Using the title from backend instead of hardcoded text if available, 
//                        otherwise fallback to College Name if title is empty */}
//                    {item.title ? item.title : "Welcome To LBSM College, Jamshedpur"}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect, useCallback } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  description?: string; // Optional, based on your DB
  imageUrl: string;
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([]);

  // Fetch data from PHP Backend
  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const res = await fetch('http://localhost/admin/carousel_api.php');
        const data = await res.json();

        // Map backend fields (image_url) to frontend interface (imageUrl)
        const mappedData = Array.isArray(data) ? data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          imageUrl: item.image_url
        })) : [];

        setCarouselItems(mappedData);
      } catch (error) {
        console.error("Error fetching carousel:", error);
      }
    };

    fetchCarousel();
  }, []);

  const goToNext = useCallback(() => {
    // Only proceed if we have items
    if (carouselItems.length === 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [carouselItems.length]);

  // Auto-play with 5-second interval
  useEffect(() => {
    if (!isHovering && carouselItems.length > 0) {
      const timer = setInterval(goToNext, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovering, goToNext, carouselItems.length]);

  // If no items loaded yet, you might want to show nothing or a loader
  if (carouselItems.length === 0) {
    return <div className="w-full h-[500px] bg-gray-100 animate-pulse"></div>;
  }

  return (
    <div className="w-full mx-auto  md:h-full">
      {/* Carousel Container */}
      <div
        className="relative  overflow-hidden shadow-lg h-70 md:h-[500px] bg-gray-100"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Carousel Content */}
        <div className="relative w-[100vw] h-90  md:h-full">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${index === currentIndex
                ? 'opacity-100'
                : 'opacity-0 '
                }`}
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-[100vw] md:h-full object-cover"
              />

              {/* Title Overlay - Fixed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" max-w-4xl text-center">
                  <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-4 shadow-black drop-shadow-md">
                    {/* Using the title from backend instead of hardcoded text if available, 
                       otherwise fallback to College Name if title is empty */}
                    {item.title ? item.title : "Welcome To LBSM College, Jamshedpur"}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}