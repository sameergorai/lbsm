'use client';

import React, { useState, useEffect } from 'react';

const categories = {
  'Natural Science': ['Botany', 'Chemistry', 'Mathematics', 'Physics', 'Zoology'],
  'Social Science': ['Economics', 'Geography', 'History', 'Political Science', 'Psychology'],
  'Commerce': ['Commerce'],
  'Humanities': ['Philosophy', 'Bengali', 'English', 'Hindi', 'Ho', 'Santali', 'Urdu', 'Maithili'],
  'Staff': ['Account Section', 'Library', 'Admission Section', 'Examination Section', 'Peon', 'HA', 'Assistant', 'RC'],
};

export default function Faculties() {
  const [members, setMembers] = useState([]);
  const [mainCategory, setMainCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  // 1. Fetch Members on Load
  const fetchMembers = async () => {
    try {
      const res = await fetch('http://localhost/admin/faculty_api.php');
      const data = await res.json();
      setMembers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // 2. Handle Add Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('http://localhost/admin/faculty_api.php', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();

      if (res.ok && !result.error) {
        alert('Faculty saved successfully!');
        e.target.reset(); // Clear form
        setMainCategory(''); // Reset dropdown
        fetchMembers(); // Refresh list
      } else {
        alert('Failed: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error(error);
      alert('Network error.');
    } finally {
      setLoading(false);
    }
  }

  // 3. Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    const formData = new FormData();
    formData.append('action', 'delete');
    formData.append('id', id);

    try {
      const res = await fetch('http://localhost/admin/faculty_api.php', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        fetchMembers(); // Refresh list
      } else {
        alert("Failed to delete.");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="content-section p-6 space-y-8">
      
      {/* --- ADD SECTION --- */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
            <i className="fas fa-user-plus mr-2 text-blue-500"></i>Add New Faculty
        </h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input name="name" required placeholder="Faculty Name" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                <input name="designation" required placeholder="e.g. Professor" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input name="department" required placeholder="e.g. Physics" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
              </div>
          </div>

          <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <div className="flex gap-2">
                    <select 
                        name="main_category" 
                        required 
                        value={mainCategory} 
                        onChange={e => setMainCategory(e.target.value)} 
                        className="w-1/2 border border-gray-300 px-3 py-2 rounded bg-white"
                    >
                        <option value="">Main Category</option>
                        {Object.keys(categories).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    
                    <select name="sub_category" required className="w-1/2 border border-gray-300 px-3 py-2 rounded bg-white">
                        <option value="">Sub Category</option>
                        {categories[mainCategory]?.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                    </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                <input type="file" name="photo" accept="image/*" className="w-full border border-gray-300 px-3 py-2 rounded text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select name="status" className="w-full border border-gray-300 px-3 py-2 rounded bg-white">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
              </div>
          </div>

          <div className="md:col-span-2 mt-2">
            <button type="submit" disabled={loading} className={`w-full bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition ${loading ? 'opacity-70 cursor-wait' : ''}`}>
                {loading ? 'Saving...' : 'Save Faculty Member'}
            </button>
          </div>
        </form>
      </div>

      {/* --- LIST SECTION --- */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Existing Faculty Members</h3>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{members.length} Found</span>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name / Designation</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department / Category</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {fetchLoading ? (
                        <tr><td colSpan="5" className="px-6 py-4 text-center text-gray-500">Loading members...</td></tr>
                    ) : members.length === 0 ? (
                        <tr><td colSpan="5" className="px-6 py-4 text-center text-gray-500">No faculty members found.</td></tr>
                    ) : (
                        members.map((member) => (
                            <tr key={member.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
                                        {member.photo_url ? (
                                            <img src={member.photo_url} alt={member.name} className="h-full w-full object-cover" />
                                        ) : (
                                            <div className="h-full w-full flex items-center justify-center text-gray-400"><i className="fas fa-user"></i></div>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                    <div className="text-sm text-gray-500">{member.designation}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{member.department}</div>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                        {member.main_category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {member.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button 
                                        onClick={() => handleDelete(member.id)}
                                        className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded transition"
                                    >
                                        <i className="fas fa-trash-alt mr-1"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}