// 'use client'
// import React, { useState } from 'react';
// import { FaPlus, FaTimes } from 'react-icons/fa';

// // Placeholder data - Replace these URLs with your actual college images
// const galleryImages = [
//   { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Campus", title: "Main Building" },
//   { id: 2, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Events", title: "Convocation 2024" },
//   { id: 3, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Students", title: "Group Study" },
//   { id: 4, src: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Sports", title: "Football Match" },
//   { id: 5, src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Campus", title: "Library Hall" },
//   { id: 6, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Events", title: "Cultural Fest" },
// ];

// const GallerySection = () => {
//   const [filter, setFilter] = useState('All');
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Filter logic
//   const filteredImages = filter === 'All' 
//     ? galleryImages 
//     : galleryImages.filter(img => img.category === filter);

//   // Tabs for the filter
//   const tabs = ['All', 'Campus', 'Events', 'Students', 'Sports'];

//   return (
//     <div className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Gallery</h2>
//           <p className="text-slate-500 max-w-2xl mx-auto">
//             Explore the vibrant life at our college, from campus scenery to student activities and events.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setFilter(tab)}
//               className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 
//                 ${filter === tab 
//                   ? 'bg-[#002147] text-white shadow-lg' 
//                   : 'bg-white text-slate-600 hover:bg-yellow-400 hover:text-slate-900 shadow-sm'
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredImages.map((image) => (
//             <div 
//               key={image.id} 
//               className="group relative h-64 w-full rounded-lg overflow-hidden shadow-md cursor-pointer"
//               onClick={() => setSelectedImage(image)}
//             >
//               {/* Image */}
//               <img 
//                 src={image.src} 
//                 alt={image.title} 
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
              
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-[#002147] bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
//                 <FaPlus className="text-3xl mb-2" />
//                 <h3 className="text-lg font-bold">{image.title}</h3>
//                 <span className="text-yellow-400 text-sm">{image.category}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal (Full Screen View) */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative max-w-4xl w-full">
//             {/* Close Button */}
//             <button 
//               className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-3xl focus:outline-none"
//               onClick={() => setSelectedImage(null)}
//             >
//               <FaTimes />
//             </button>
            
//             <img 
//               src={selectedImage.src} 
//               alt={selectedImage.title} 
//               className="w-full h-auto max-h-[80vh] object-contain rounded-md shadow-2xl border-2 border-white"
//             />
            
//             <div className="mt-4 text-center">
//               <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default GallerySection;


'use client';

import React, { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // For Modal

  // 1. Fetch Gallery Data
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(`https://www.lbsmcollege.ac.in/api/admin/gallery_api.php`);
        const data = await res.json();
        
        if (Array.isArray(data)) {
          setImages(data);
          setFilteredImages(data);
          
          // Extract unique categories for filter tabs
          const uniqueCats = ['All', ...new Set(data.map(item => item.category))];
          setCategories(uniqueCats);
        }
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  // 2. Handle Filter Click
  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Campus Life</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Captured Moments</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 font-light leading-relaxed">
            Explore the vibrant life at LBSM College through our lens. From academic excellence to cultural celebrations, witness our journey.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
             {[1,2,3,4,5,6].map(i => <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.length > 0 ? (
              filteredImages.map((img) => (
                <div 
                  key={img.id} 
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-72"
                  onClick={() => setSelectedImage(img)}
                >
                  {/* Image */}
                  <img
                    src={img.image_url}
                    alt={img.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">
                      {img.category}
                    </span>
                    <h3 className="text-white text-lg font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.title}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-400">
                No images found in this category.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img 
              src={selectedImage.image_url} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
            
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
              <span className="text-gray-400 text-sm uppercase tracking-widest mt-1 block">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}