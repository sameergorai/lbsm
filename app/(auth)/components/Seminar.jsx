// import React, { useState, useEffect } from 'react';

// function Seminar() {
//     const [seminars, setSeminars] = useState([]);
//     const [loading, setLoading] = useState(false);
    
//     // State to handle Editing
//     // editState structure: { category: 'past', id: 123, title: '...', date: '...', description: '...' }
//     const [editState, setEditState] = useState(null);

//     // Fetch Data
//     const fetchSeminars = async () => {
//         try {
//             const res = await fetch('http://localhost/admin/seminar_api.php');
//             const data = await res.json();
//             setSeminars(Array.isArray(data) ? data : []);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchSeminars();
//     }, []);

//     // Handle Submit (Add or Update)
//     const handleSubmit = async (e, category) => {
//         e.preventDefault();
//         setLoading(true);

//         const form = e.target;
//         const formData = new FormData(form);
//         formData.append('category', category);
        
//         // If we are in edit mode for THIS category, append the ID
//         if (editState && editState.category === category) {
//             formData.append('id', editState.id);
//         }

//         try {
//             const res = await fetch('http://localhost/admin/seminar_api.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             const result = await res.json();
            
//             if (res.ok && !result.error) {
//                 alert(result.message);
//                 form.reset();
//                 setEditState(null); // Clear edit mode
//                 fetchSeminars();
//             } else {
//                 alert("Error: " + result.error);
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Network error");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Handle Delete
//     const handleDelete = async (id) => {
//         if (!confirm("Delete this seminar?")) return;
//         const formData = new FormData();
//         formData.append('action', 'delete');
//         formData.append('id', id);
        
//         await fetch('http://localhost/admin/seminar_api.php', { method: 'POST', body: formData });
//         fetchSeminars();
//     };

//     // Handle Edit Click
//     const handleEditClick = (item) => {
//         setEditState(item);
//         // Scroll to the specific form
//         const formElement = document.getElementById(`form-${item.category}`);
//         if(formElement) {
//             formElement.scrollIntoView({ behavior: 'smooth' });
//             // Pre-fill inputs manually or let React state do it (using key helps reset)
//         }
//     };

//     // Configuration for the 3 distinct boxes
//     const sections = [
//         { id: 'past', label: 'Past Seminars', icon: 'fa-history', color: 'gray' },
//         { id: 'ongoing', label: 'Ongoing Seminars', icon: 'fa-sync-alt animate-spin-slow', color: 'blue' },
//         { id: 'upcoming', label: 'Upcoming Seminars', icon: 'fa-calendar-alt', color: 'green' }
//     ];

//     return (
//         <div className="content-section max-w-7xl mx-auto">
//             <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Seminar Management</h3>
//                 <p className="text-gray-500 mt-2 font-light">Organize academic events, webinars, and conferences.</p>
//             </div>

//             {/* --- THREE INPUT CARDS --- */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//                 {sections.map((section) => {
//                     const isEditing = editState && editState.category === section.id;
                    
//                     return (
//                         <div key={section.id} id={`form-${section.id}`} className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative overflow-hidden group hover:shadow-md transition-all duration-300 ${isEditing ? 'ring-2 ring-blue-500' : ''}`}>
//                             <div className={`absolute top-0 left-0 w-full h-1 bg-${section.color}-500`}></div>
                            
//                             <div className="flex items-center mb-6">
//                                 <div className={`h-10 w-10 rounded-full bg-${section.color}-50 flex items-center justify-center text-${section.color}-600 mr-4`}>
//                                     <i className={`fas ${section.icon}`}></i>
//                                 </div>
//                                 <div>
//                                     <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide">{section.label}</h4>
//                                     {isEditing && <span className="text-xs text-blue-600 font-bold animate-pulse">Editing Mode Active</span>}
//                                 </div>
//                             </div>

//                             <form className="space-y-4" onSubmit={(e) => handleSubmit(e, section.id)} key={isEditing ? editState.id : 'new'}>
//                                 <div>
//                                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Title</label>
//                                     <input 
//                                         name="title" 
//                                         defaultValue={isEditing ? editState.title : ''}
//                                         required 
//                                         className="w-full border-b border-gray-200 py-2 text-sm text-gray-700 focus:border-slate-800 focus:outline-none bg-transparent" 
//                                         placeholder="Seminar Title" 
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Date</label>
//                                     <input 
//                                         name="date" 
//                                         type="date"
//                                         defaultValue={isEditing ? editState.date : ''}
//                                         required 
//                                         className="w-full border-b border-gray-200 py-2 text-sm text-gray-500 focus:border-slate-800 focus:outline-none bg-transparent" 
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Description</label>
//                                     <textarea 
//                                         name="description" 
//                                         defaultValue={isEditing ? editState.description : ''}
//                                         rows="2"
//                                         className="w-full border border-gray-200 rounded p-2 text-sm focus:border-slate-800 outline-none resize-none" 
//                                         placeholder="Brief details..."
//                                     ></textarea>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Cover Image</label>
//                                     <input type="file" name="image" className="text-xs text-slate-500" />
//                                 </div>

//                                 <div className="flex gap-2">
//                                     <button className={`flex-1 py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-white transition-all bg-${section.color}-600 hover:bg-${section.color}-700 shadow-lg shadow-${section.color}-100`}>
//                                         {isEditing ? 'Update' : 'Add'}
//                                     </button>
//                                     {isEditing && (
//                                         <button 
//                                             type="button" 
//                                             onClick={() => { setEditState(null); document.getElementById(`form-${section.id}`).querySelector('form').reset(); }}
//                                             className="px-4 py-3 rounded-lg bg-gray-200 text-gray-600 font-bold text-xs hover:bg-gray-300"
//                                         >
//                                             Cancel
//                                         </button>
//                                     )}
//                                 </div>
//                             </form>
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* --- LIST SECTION --- */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//                 <div className="px-8 py-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
//                     <h3 className="font-bold text-gray-800">All Seminars</h3>
//                     <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Total: {seminars.length}</span>
//                 </div>
                
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-50">
//                         <thead className="bg-white">
//                             <tr>
//                                 <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
//                                 <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
//                                 <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Details</th>
//                                 <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-50">
//                             {seminars.map((sem) => (
//                                 <tr key={sem.id} className="hover:bg-slate-50 transition-colors">
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
//                                         {sem.date}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <span className={`px-3 py-1 inline-flex text-[10px] font-bold uppercase tracking-wide rounded-full ${
//                                             sem.category === 'ongoing' ? 'bg-blue-50 text-blue-700' :
//                                             sem.category === 'upcoming' ? 'bg-green-50 text-green-700' :
//                                             'bg-gray-100 text-gray-600'
//                                         }`}>
//                                             {sem.category}
//                                         </span>
//                                     </td>
//                                     <td className="px-6 py-4">
//                                         <div className="flex items-center">
//                                             {sem.image_url && <img src={sem.image_url} alt="" className="h-8 w-8 rounded mr-3 object-cover" />}
//                                             <div>
//                                                 <div className="text-sm font-bold text-gray-800">{sem.title}</div>
//                                                 <div className="text-xs text-gray-500 truncate max-w-xs">{sem.description}</div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
//                                         <button 
//                                             onClick={() => handleEditClick(sem)}
//                                             className="text-blue-500 hover:text-blue-700 mr-3 transition-colors font-medium text-xs uppercase"
//                                         >
//                                             Edit
//                                         </button>
//                                         <button 
//                                             onClick={() => handleDelete(sem.id)}
//                                             className="text-red-400 hover:text-red-600 transition-colors"
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
//     );
// }

// export default Seminar;


import React, { useState, useEffect } from 'react';

export default function Faculties() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    const res = await fetch('http://localhost/admin/faculty_upload_api.php');
    setList(await res.json());
  };

  useEffect(() => { fetchList(); }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    await fetch('http://localhost/admin/faculty_upload_api.php', { method: 'POST', body: formData });
    
    e.target.reset();
    fetchList();
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if(!confirm("Delete this file?")) return;
    const formData = new FormData();
    formData.append('action', 'delete');
    formData.append('id', id);
    await fetch('http://localhost/admin/faculty_upload_api.php', { method: 'POST', body: formData });
    fetchList();
  };

  return (
    <div className="content-section max-w-5xl mx-auto">
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Faculty Documents</h3>
        <p className="text-gray-500 text-sm">Upload Faculty Profiles, CVs, or Department Lists (PDF Only).</p>
      </div>

      {/* --- SIMPLE UPLOAD CARD --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10">
        <form onSubmit={handleUpload} className="flex flex-col md:flex-row gap-4 items-end">
          
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Title / Faculty Name</label>
            <input name="title" required className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-blue-600 transition-colors placeholder-gray-300" placeholder="e.g. Dr. A.K. Sharma Profile" />
          </div>

          <div className="w-full md:w-48">
             <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Department</label>
             <select name="department" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-blue-600 bg-transparent text-gray-700">
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
                <option value="Staff">Staff</option>
             </select>
          </div>

          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">PDF File</label>
            <input type="file" name="file" accept=".pdf" required className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" />
          </div>

          <button disabled={loading} className="bg-slate-900 text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all shadow-lg">
            {loading ? 'Wait...' : 'Upload PDF'}
          </button>
        </form>
      </div>

      {/* --- CLEAN LIST --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
             <span className="font-bold text-gray-700">Uploaded Files</span>
             <span className="text-xs bg-white border px-2 py-1 rounded-full text-gray-500">{list.length} Total</span>
        </div>
        <table className="min-w-full divide-y divide-gray-50">
            <tbody className="divide-y divide-gray-50">
              {list.map(item => (
                <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 mr-4">
                            <i className="fas fa-file-pdf text-lg"></i>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-800">{item.title}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide">{item.department}</div>
                        </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <a href={item.file_url} target="_blank" className="text-blue-600 hover:text-blue-800 text-xs font-bold uppercase mr-4 hover:underline">View PDF</a>
                    <button onClick={() => handleDelete(item.id)} className="text-gray-300 hover:text-red-500 transition-colors"><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              ))}
              {list.length === 0 && <tr><td colSpan="2" className="px-6 py-8 text-center text-gray-400 text-sm">No files uploaded yet.</td></tr>}
            </tbody>
        </table>
      </div>

    </div>
  );
}