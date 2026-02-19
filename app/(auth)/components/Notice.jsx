// import React, { useState, useEffect } from 'react'

// function Notice() {
//     const [notices, setNotices] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // Fetch Notices from DB
//     const fetchNotices = async () => {
//         try {
//             const res = await fetch('https://sameer.edigitalindian.com/api/admin/notice_api.php');
//             const data = await res.json();
//             setNotices(Array.isArray(data) ? data : []);
//         } catch (error) {
//             console.error("Error fetching notices:", error);
//         }
//     };

//     useEffect(() => {
//         fetchNotices();
//     }, []);

//     // Handle Upload
//     const handleUpload = async (e, categoryId) => {
//         e.preventDefault();
        
//         const form = e.target;
//         const titleInput = form.querySelector('input[type="text"]');
//         const fileInput = form.querySelector('input[type="file"]');

//         if (!titleInput.value || !fileInput.files[0]) {
//             alert("Please enter a title and select a PDF.");
//             return;
//         }

//         setLoading(true);
//         const formData = new FormData();
//         formData.append('title', titleInput.value);
//         formData.append('category', categoryId);
//         formData.append('file', fileInput.files[0]);

//         try {
//             const res = await fetch('https://sameer.edigitalindian.com/api/admin/notice_api.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             const result = await res.json();
            
//             if (res.ok && !result.error) {
//                 alert("Uploaded successfully!");
//                 form.reset(); 
//                 fetchNotices(); 
//             } else {
//                 alert("Failed: " + (result.error || "Unknown error"));
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Network error.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Handle Delete
//     const handleDelete = async (id) => {
//         if(!confirm("Are you sure you want to permanently delete this notice?")) return;
        
//         const formData = new FormData();
//         formData.append('action', 'delete');
//         formData.append('id', id);

//         try {
//             await fetch('https://sameer.edigitalindian.com/api/admin/notice_api.php', { method: 'POST', body: formData });
//             fetchNotices();
//         } catch(e) { console.error(e); }
//     };

//     // Configuration for the 2 distinct boxes (Removed Placement)
//     const uploadSections = [
//         { 
//             id: 'merit', 
//             label: 'UG/PG Merit List', 
//             desc: 'Upload admission merit lists here.',
//             icon: 'fa-graduation-cap',
//             colorTheme: 'purple' 
//         },
//         { 
//             id: 'important', 
//             label: 'Important Notice', 
//             desc: 'General announcements & circulars.',
//             icon: 'fa-bullhorn',
//             colorTheme: 'blue'
//         }
//     ];

//     // Helper for category display name
//     const getCategoryLabel = (cat) => {
//         if(cat === 'merit') return 'UG/PG Merit List';
//         if(cat === 'placement') return 'Placement';
//         if(cat === 'important') return 'Important Notice';
//         return cat;
//     };

//     return (
//         <div className="content-section max-w-7xl mx-auto">
            
//             <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Notice Board Management</h3>
//                 <p className="text-gray-500 mt-2 font-light">Categorized uploads for better student accessibility.</p>
//             </div>

//             {/* --- TWO INPUT BOXES (Cards) --- */}
//             {/* Changed grid-cols-3 to grid-cols-2 to look better with 2 items */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                 {uploadSections.map((section) => (
//                     <div key={section.id} className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden group hover:shadow-md transition-all duration-300`}>
                        
//                         {/* Colored Top Bar */}
//                         <div className={`absolute top-0 left-0 w-full h-1 bg-${section.colorTheme}-500`}></div>

//                         {/* Header */}
//                         <div className="flex items-center mb-6">
//                             <div className={`h-10 w-10 rounded-full bg-${section.colorTheme}-50 flex items-center justify-center text-${section.colorTheme}-600 mr-4`}>
//                                 <i className={`fas ${section.icon}`}></i>
//                             </div>
//                             <div>
//                                 <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide">{section.label}</h4>
//                                 <p className="text-xs text-gray-400">{section.desc}</p>
//                             </div>
//                         </div>

//                         {/* Form Inputs */}
//                         <form className="space-y-5" onSubmit={(e) => handleUpload(e, section.id)}>
//                             <div>
//                                 <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Notice Title</label>
//                                 <input 
//                                     type="text" 
//                                     required
//                                     className="w-full border-b border-gray-200 py-2 text-sm text-gray-700 focus:border-slate-800 focus:outline-none bg-transparent transition-colors placeholder-gray-300"
//                                     placeholder="Enter Title..." 
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Upload PDF</label>
//                                 <input 
//                                     type="file" 
//                                     required
//                                     accept=".pdf" 
//                                     className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100 cursor-pointer" 
//                                 />
//                             </div>

//                             <button 
//                                 disabled={loading}
//                                 className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-white transition-all transform active:scale-95 bg-${section.colorTheme}-600 hover:bg-${section.colorTheme}-700 shadow-lg shadow-${section.colorTheme}-100 ${loading ? 'opacity-70 cursor-wait' : ''}`}
//                             >
//                                 {loading ? 'Uploading...' : `Upload to ${section.id}`}
//                             </button>
//                         </form>
//                     </div>
//                 ))}
//             </div>

//             {/* --- LIST SECTION --- */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//                 <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
//                     <h3 className="font-bold text-gray-800">Published Notices</h3>
//                     <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Total: {notices.length}</span>
//                 </div>
                
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-50">
//                         <thead className="bg-white">
//                             <tr>
//                                 <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
//                                 <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
//                                 <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Title</th>
//                                 <th className="px-8 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-50">
//                             {notices.length === 0 ? (
//                                 <tr><td colSpan="4" className="text-center py-8 text-gray-400">No notices uploaded yet.</td></tr>
//                             ) : notices.map((notice) => (
//                                 <tr key={notice.id} className="hover:bg-slate-50 transition-colors">
//                                     <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
//                                         {notice.formatted_date}
//                                     </td>
//                                     <td className="px-8 py-4 whitespace-nowrap">
//                                         <span className={`px-3 py-1 inline-flex text-[10px] font-bold uppercase tracking-wide rounded-full ${
//                                             notice.category === 'merit' ? 'bg-purple-50 text-purple-700 border border-purple-100' :
//                                             notice.category === 'placement' ? 'bg-green-50 text-green-700 border border-green-100' :
//                                             'bg-blue-50 text-blue-700 border border-blue-100'
//                                         }`}>
//                                             {getCategoryLabel(notice.category)}
//                                         </span>
//                                     </td>
//                                     <td className="px-8 py-4 whitespace-nowrap text-sm font-bold text-gray-800 flex items-center group cursor-pointer" onClick={() => window.open(notice.file_url, '_blank')}>
//                                         <div className="h-8 w-8 rounded bg-red-50 flex items-center justify-center text-red-500 mr-3 group-hover:bg-red-100 transition-colors">
//                                             <i className="fas fa-file-pdf"></i>
//                                         </div>
//                                         <span className="group-hover:text-blue-600 transition-colors">{notice.title}</span>
//                                     </td>
//                                     <td className="px-8 py-4 whitespace-nowrap text-right text-sm">
//                                         <button 
//                                             onClick={() => handleDelete(notice.id)}
//                                             className="text-gray-300 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
//                                             title="Delete Notice"
//                                         >
//                                             <i className="fas fa-trash-alt"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Notice


import React, { useState, useEffect } from 'react'

function Notice() {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch Notices from DB
    const fetchNotices = async () => {
        try {
            const res = await fetch('https://sameer.edigitalindian.com/api/admin/notice_api.php');
            const data = await res.json();
            setNotices(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching notices:", error);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);

    // Handle Upload
    const handleUpload = async (e, categoryId) => {
        e.preventDefault();
        
        // Get form data from the specific form that triggered the event
        const form = e.target;
        const titleInput = form.querySelector('input[type="text"]');
        const fileInput = form.querySelector('input[type="file"]');

        if (!titleInput.value || !fileInput.files[0]) {
            alert("Please enter a title and select a PDF.");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('title', titleInput.value);
        formData.append('category', categoryId);
        formData.append('file', fileInput.files[0]);

        try {
            const res = await fetch('https://sameer.edigitalindian.com/api/admin/notice_api.php', {
                method: 'POST',
                body: formData
            });
            const result = await res.json();
            
            if (res.ok && !result.error) {
                alert("Uploaded successfully!");
                form.reset(); // Clear inputs
                fetchNotices(); // Refresh list
            } else {
                alert("Failed: " + (result.error || "Unknown error"));
            }
        } catch (error) {
            console.error(error);
            alert("Network error.");
        } finally {
            setLoading(false);
        }
    };

    // Handle Delete
    const handleDelete = async (id) => {
        if(!confirm("Are you sure you want to delete this notice?")) return;
        
        const formData = new FormData();
        formData.append('action', 'delete');
        formData.append('id', id);

        try {
            await fetch('https://sameer.edigitalindian.com/api/admin/notice_api.php', { method: 'POST', body: formData });
            fetchNotices();
        } catch(e) { console.error(e); }
    };

    // Configuration for the 3 distinct boxes (Placement removed, Alert added)
    const uploadSections = [
        { 
            id: 'merit', 
            label: 'UG/PG Merit List', 
            desc: 'Upload admission merit lists here.',
            icon: 'fa-graduation-cap',
            colorTheme: 'purple' 
        },
        { 
            id: 'alert', // CHANGED from placement
            label: 'Alert / Scroll News', 
            desc: 'Upload urgent alerts or scrolling news.',
            icon: 'fa-bell', 
            colorTheme: 'red' // Changed color to Red for Alerts
        },
        { 
            id: 'important', 
            label: 'Important Notice', 
            desc: 'General announcements & circulars.',
            icon: 'fa-bullhorn',
            colorTheme: 'blue'
        }
    ];

    // Helper for category display name
    const getCategoryLabel = (cat) => {
        if(cat === 'merit') return 'UG/PG Merit List';
        if(cat === 'alert') return 'Alert / Notification'; // Updated label
        if(cat === 'important') return 'Important Notice';
        return cat;
    };

    return (
        <div className="content-section max-w-7xl mx-auto">
            
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Notice Board Management</h3>
                <p className="text-gray-500 mt-2 font-light">Categorized uploads for better student accessibility.</p>
            </div>

            {/* --- THREE DIFFERENT INPUT BOXES (Cards) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {uploadSections.map((section) => (
                    <div key={section.id} className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden group hover:shadow-md transition-all duration-300`}>
                        
                        {/* Colored Top Bar */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-${section.colorTheme}-500`}></div>

                        {/* Header */}
                        <div className="flex items-center mb-6">
                            <div className={`h-10 w-10 rounded-full bg-${section.colorTheme}-50 flex items-center justify-center text-${section.colorTheme}-600 mr-4`}>
                                <i className={`fas ${section.icon}`}></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide">{section.label}</h4>
                                <p className="text-xs text-gray-400">{section.desc}</p>
                            </div>
                        </div>

                        {/* Form Inputs */}
                        <form className="space-y-5" onSubmit={(e) => handleUpload(e, section.id)}>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Notice Title</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full border-b border-gray-200 py-2 text-sm text-gray-700 focus:border-slate-800 focus:outline-none bg-transparent transition-colors placeholder-gray-300"
                                    placeholder="Enter Title..." 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Upload PDF</label>
                                <input 
                                    type="file" 
                                    required
                                    accept=".pdf" 
                                    className="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100 cursor-pointer" 
                                />
                            </div>

                            <button 
                                disabled={loading}
                                className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-white transition-all transform active:scale-95 bg-${section.colorTheme}-600 hover:bg-${section.colorTheme}-700 shadow-lg shadow-${section.colorTheme}-100 ${loading ? 'opacity-70 cursor-wait' : ''}`}
                            >
                                {loading ? 'Uploading...' : `Upload to ${section.id}`}
                            </button>
                        </form>
                    </div>
                ))}
            </div>

            {/* --- LIST SECTION --- */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">Published Notices</h3>
                    <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Total: {notices.length}</span>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-50">
                        <thead className="bg-white">
                            <tr>
                                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
                                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Title</th>
                                <th className="px-8 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-50">
                            {notices.length === 0 ? (
                                <tr><td colSpan="4" className="text-center py-8 text-gray-400">No notices uploaded yet.</td></tr>
                            ) : notices.map((notice) => (
                                <tr key={notice.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                                        {notice.formatted_date}
                                    </td>
                                    <td className="px-8 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-[10px] font-bold uppercase tracking-wide rounded-full ${
                                            notice.category === 'merit' ? 'bg-purple-50 text-purple-700 border border-purple-100' :
                                            notice.category === 'alert' ? 'bg-red-50 text-red-700 border border-red-100' :
                                            'bg-blue-50 text-blue-700 border border-blue-100'
                                        }`}>
                                            {getCategoryLabel(notice.category)}
                                        </span>
                                    </td>
                                    <td className="px-8 py-4 whitespace-nowrap text-sm font-bold text-gray-800 flex items-center group cursor-pointer" onClick={() => window.open(notice.file_url, '_blank')}>
                                        <div className="h-8 w-8 rounded bg-red-50 flex items-center justify-center text-red-500 mr-3 group-hover:bg-red-100 transition-colors">
                                            <i className="fas fa-file-pdf"></i>
                                        </div>
                                        <span className="group-hover:text-blue-600 transition-colors">{notice.title}</span>
                                    </td>
                                    <td className="px-8 py-4 whitespace-nowrap text-right text-sm">
                                        <button 
                                            onClick={() => handleDelete(notice.id)}
                                            className="text-gray-300 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
                                            title="Delete Notice"
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Notice