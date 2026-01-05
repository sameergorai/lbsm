'use client'
import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

// Placeholder data - Replace these URLs with your actual college images
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Campus", title: "Main Building" },
  { id: 2, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Events", title: "Convocation 2024" },
  { id: 3, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Students", title: "Group Study" },
  { id: 4, src: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Sports", title: "Football Match" },
  { id: 5, src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Campus", title: "Library Hall" },
  { id: 6, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", category: "Events", title: "Cultural Fest" },
];

const GallerySection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter logic
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Tabs for the filter
  const tabs = ['All', 'Campus', 'Events', 'Students', 'Sports'];

  return (
    <div className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Gallery</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Explore the vibrant life at our college, from campus scenery to student activities and events.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 
                ${filter === tab 
                  ? 'bg-[#002147] text-white shadow-lg' 
                  : 'bg-white text-slate-600 hover:bg-yellow-400 hover:text-slate-900 shadow-sm'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative h-64 w-full rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#002147] bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <FaPlus className="text-3xl mb-2" />
                <h3 className="text-lg font-bold">{image.title}</h3>
                <span className="text-yellow-400 text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Full Screen View) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-3xl focus:outline-none"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-md shadow-2xl border-2 border-white"
            />
            
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GallerySection;