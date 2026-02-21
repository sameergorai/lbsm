// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';

// // Sample Data - Replace with your real faculty details
// const facultyData = [
//   // SCIENCE FACULTY
//   { id: 1, name: "Dr. A.K. Sharma", designation: "HOD Physics", department: "Science", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
//   { id: 2, name: "Prof. S. Gupta", designation: "Asst. Professor (Maths)", department: "Science", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
//   { id: 3, name: "Dr. R. Singh", designation: "Professor (Chemistry)", department: "Science", image: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },

//   // ARTS / HUMANITIES FACULTY
//   { id: 4, name: "Dr. M. Das", designation: "HOD Hindi", department: "Arts", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
//   { id: 5, name: "Prof. P. Verma", designation: "Asst. Professor (History)", department: "Arts", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },

//   // COMMERCE FACULTY
//   { id: 6, name: "Dr. K. Agarwal", designation: "HOD Commerce", department: "Commerce", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
//   { id: 7, name: "Prof. N. Jha", designation: "Asst. Professor (Accounts)", department: "Commerce", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
// ];

// const FacultySection = () => {
//   const [activeCategory, setActiveCategory] = useState('All');

//   // Categories for the filter tabs
//   const categories = ['All', 'Science', 'Arts', 'Commerce'];

//   // Filter logic
//   const filteredFaculty = activeCategory === 'All' 
//     ? facultyData 
//     : facultyData.filter(member => member.department === activeCategory);

//   return (
//     <div className="py-16 bg-slate-50 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">
//             Meet Our Faculty
//           </h2>
//           <div className="w-24 h-1 bg-yellow-400 mx-auto rounded"></div>
//           <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
//             Dedicated educators committed to academic excellence and student development.
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm
//                 ${activeCategory === cat 
//                   ? 'bg-[#002147] text-white ring-2 ring-yellow-400 ring-offset-2' 
//                   : 'bg-white text-slate-600 hover:bg-yellow-100'
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Faculty Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredFaculty.map((member) => (
//             <div 
//               key={member.id} 
//               className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300 group"
//             >
//               {/* Image Container */}
//               <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                 />
//                 {/* Department Badge */}
//                 <div className="absolute top-4 right-4 bg-yellow-400 text-[#002147] text-xs font-bold px-3 py-1 rounded-full shadow-md">
//                   {member.department}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold text-[#002147] mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
//                   {member.designation}
//                 </p>
                
//                 {/* Social/Contact Placeholder (Optional) */}
//                 <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center gap-4 text-slate-400">
//                    {/* You can add icons here later if needed */}
//                    <span className="text-xs">View Profile</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State (if no teachers found) */}
//         {filteredFaculty.length === 0 && (
//           <div className="text-center py-10 text-slate-500">
//             No faculty members found in this category.
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default FacultySection;



'use client';

import React, { useState, useEffect } from 'react';

export default function FacultyPage() {
  const [faculty, setFaculty] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('All');
  const [departments, setDepartments] = useState(['All']);

  // 1. Fetch Faculty Data
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await fetch(`https://www.lbsmcollege.ac.in/api/admin/faculty_api.php`);
        const data = await res.json();
        
        if (Array.isArray(data)) {
          setFaculty(data);
          setFilteredFaculty(data);
          
          // Extract unique departments for filter
          const uniqueDepts = ['All', ...new Set(data.map(item => item.department))];
          setDepartments(uniqueDepts);
        }
      } catch (error) {
        console.error("Error fetching faculty:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  // 2. Handle Search & Filter
  useEffect(() => {
    let results = faculty;

    if (activeDepartment !== 'All') {
      results = results.filter(member => member.department === activeDepartment);
    }

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      results = results.filter(member => 
        member.name.toLowerCase().includes(lowerTerm) || 
        member.designation.toLowerCase().includes(lowerTerm)
      );
    }

    setFilteredFaculty(results);
  }, [searchTerm, activeDepartment, faculty]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <div className="bg-slate-50 py-20 px-6 sm:px-12 lg:px-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">Academic Excellence</h4>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
            Meet Our <span className="italic font-light text-slate-500">Distinguished</span> Faculty
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 font-light leading-relaxed">
            A diverse community of scholars dedicated to shaping the future through knowledge.
          </p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeDepartment === dept
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <input 
              type="text" 
              placeholder="Search faculty name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border-none rounded-full py-3 pl-12 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-100 transition-all group-hover:bg-slate-100"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16">
        {loading ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 animate-pulse">
              {[1,2,3,4].map(i => <div key={i} className="h-96 bg-slate-100 rounded-lg"></div>)}
           </div>
        ) : filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filteredFaculty.map((member) => (
              <div key={member.id} className="group flex flex-col items-center text-center bg-gary-50 p-4 rounded-2xl shadow hover:shadow-2xl transition-transform duration-700 ">
                
                {/* Image Container with Main Category Badge */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  
                  {/* --- NEW: Main Category Badge --- */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-3 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-slate-800 shadow-sm border border-slate-100">
                      {member.main_category}
                    </span>
                  </div>

                  {member.photo_url ? (
                    <img 
                      src={member.photo_url} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 "
                      //transition-transform duration-700  group-hover:scale-105 filter grayscale group-hover:grayscale-0
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                      <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      <span className="text-xs uppercase tracking-widest">No Image</span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                </div>

                {/* Name & Designation */}
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                  {member.designation}
                </p>
                
                {/* Divider */}
                <div className="w-8 h-px bg-slate-200 my-3 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-300"></div>
                
                {/* Department & Sub Category */}
                <div className="text-sm text-slate-400 font-light flex flex-col gap-1">
                    <span className="italic text-slate-600">{member.department}</span>
                    
                    {/* --- NEW: Sub Category --- */}
                    {member.sub_category && (
                         <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                            {member.sub_category}
                         </span>
                    )}
                </div>

                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-all">
                    View Profile
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-slate-400 text-lg font-light">No faculty members found.</p>
            <button onClick={() => {setSearchTerm(''); setActiveDepartment('All');}} className="mt-4 text-blue-600 text-sm font-bold hover:underline">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}