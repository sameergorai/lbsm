'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Sample Data - Replace with your real faculty details
const facultyData = [
  // SCIENCE FACULTY
  { id: 1, name: "Dr. A.K. Sharma", designation: "HOD Physics", department: "Science", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Prof. S. Gupta", designation: "Asst. Professor (Maths)", department: "Science", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Dr. R. Singh", designation: "Professor (Chemistry)", department: "Science", image: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },

  // ARTS / HUMANITIES FACULTY
  { id: 4, name: "Dr. M. Das", designation: "HOD Hindi", department: "Arts", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "Prof. P. Verma", designation: "Asst. Professor (History)", department: "Arts", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },

  // COMMERCE FACULTY
  { id: 6, name: "Dr. K. Agarwal", designation: "HOD Commerce", department: "Commerce", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
  { id: 7, name: "Prof. N. Jha", designation: "Asst. Professor (Accounts)", department: "Commerce", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
];

const FacultySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories for the filter tabs
  const categories = ['All', 'Science', 'Arts', 'Commerce'];

  // Filter logic
  const filteredFaculty = activeCategory === 'All' 
    ? facultyData 
    : facultyData.filter(member => member.department === activeCategory);

  return (
    <div className="py-16 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">
            Meet Our Faculty
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Dedicated educators committed to academic excellence and student development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm
                ${activeCategory === cat 
                  ? 'bg-[#002147] text-white ring-2 ring-yellow-400 ring-offset-2' 
                  : 'bg-white text-slate-600 hover:bg-yellow-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredFaculty.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Department Badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-[#002147] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {member.department}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#002147] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {member.designation}
                </p>
                
                {/* Social/Contact Placeholder (Optional) */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center gap-4 text-slate-400">
                   {/* You can add icons here later if needed */}
                   <span className="text-xs">View Profile</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no teachers found) */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-10 text-slate-500">
            No faculty members found in this category.
          </div>
        )}

      </div>
    </div>
  );
};

export default FacultySection;