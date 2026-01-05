"use client";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';

function Page() {
    const [activeSection, setActiveSection] = useState('dashboard');

        const [isAuthorized, setIsAuthorized] = useState(false);
      const router = useRouter();
    
      useEffect(() => {
        // In a static app, we ask the PHP server: "Does the user have a valid cookie?"
        const checkAuth = async () => {
          try {
            const res = await fetch('http://localhost/admin/check_auth.php', {
              credentials: 'include'
            });
            if (res.ok) {
              setIsAuthorized(true);
            } else {
              router.push('/login');
            }
          } catch {
            router.push('/login');
          }
        };
        checkAuth();
      }, []);
    // Map for Header Titles
    const titleMap = {
        'dashboard': 'Dashboard',
        'users': 'User Management',
        'carousel': 'Carousel Management',
        'FACULTIES ': 'Faculty Management',
        'seminar': 'Seminar Management',
        'sport': 'Sports Management',
        'notice': 'Notice Board',
        'contact': 'Contact Inquiries'
    };

    const navItems = [
        { id: 'dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
        { id: 'users', icon: 'fa-users', label: 'Users' },
        { id: 'carousel', icon: 'fa-images', label: 'Carousel' },
        { id: 'FACULTIES ', icon: 'fa-file-pdf', label: 'Faculty' },
        { id: 'seminar', icon: 'fa-chalkboard-teacher', label: 'Seminar' },
        { id: 'sport', icon: 'fa-running', label: 'Sport' },
        { id: 'notice', icon: 'fa-clipboard', label: 'Notice Board' },
        { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
    ];



   const handleLogout = async () => {
  try {
    // 1. Tell the PHP server to delete the cookie
    const response = await fetch('http://localhost/admin/logout.php', {
      method: 'POST', // or GET, as long as it matches your PHP
      credentials: 'include', // CRITICAL: This allows the browser to send/modify the cookie
    });

    if (response.ok) {
      // 2. Optional: Clear any non-sensitive data in localStorage (like user name)
      localStorage.removeItem('user_name');
      
      // 3. Redirect the user to the login page
      router.push('/login');
    } else {
      console.error("Logout failed on the server.");
    }
  } catch (error) {
    console.error("Network error during logout:", error);
    // Force redirect even if network fails
    router.push('/login');
  }
};
    return (
        <div className="bg-gray-100 font-sans antialiased">
            <div className="flex h-screen overflow-hidden">
                
                {/* Sidebar */}
                <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col transition-all duration-300">
                    <div className="h-16 flex items-center justify-center border-b border-slate-700">
                        <h1 className="text-2xl font-bold tracking-wider">ADMIN<span className="text-blue-500">PANEL</span></h1>
                    </div>

                    <nav className="flex-1 overflow-y-auto py-4">
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button 
                                        onClick={() => setActiveSection(item.id)}
                                        className={`nav-btn w-full text-left px-6 py-3 hover:bg-slate-800 transition-colors flex items-center border-l-4 focus:outline-none ${
                                            activeSection === item.id 
                                            ? 'bg-slate-800 border-blue-500' 
                                            : 'border-transparent'
                                        }`}
                                    >
                                        <i className={`fas ${item.icon} w-6`}></i>
                                        <span>{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="p-4 border-t border-slate-700">
                        <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition duration-200">
                            <i className="fas fa-sign-out-alt mr-2"></i> Logout
                        </button>
                    </div>
                </aside>

                <div className="flex-1 flex flex-col h-screen overflow-hidden">
                    {/* Header */}
                    <header className="h-16 bg-white shadow flex items-center justify-between px-6 z-10">
                        <h2 className="text-xl font-semibold text-gray-800">{titleMap[activeSection]}</h2>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">Admin User</span>
                            <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    </header>

                    {/* Content Area */}
                    <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">

                        {/* Dashboard Section */}
                        {activeSection === 'dashboard' && (
                            <div className="content-section">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                                        <div className="text-gray-500 text-sm font-medium">Total Users</div>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">1,245</div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
                                        <div className="text-gray-500 text-sm font-medium">Notices</div>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">12</div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
                                        <div className="text-gray-500 text-sm font-medium">Factible Files</div>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">34</div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
                                        <div className="text-gray-500 text-sm font-medium">Messages</div>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">5</div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h3 className="text-lg font-bold mb-4">Quick Overview</h3>
                                    <p className="text-gray-600">Select an item from the sidebar to manage content.</p>
                                </div>
                            </div>
                        )}

                        {/* Users Section */}
                        {activeSection === 'users' && (
    <div className="content-section">
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-800">All Users</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                    + Add User
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">+91 98765 43210</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john.doe@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Admin
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)}

                        {/* Carousel Section */}
                        {activeSection === 'carousel' && (
                            <div className="content-section">
                                <div className="bg-white rounded-lg shadow p-6 mb-6">
                                    <h3 className="font-bold text-gray-800 mb-4">Add New Carousel Image</h3>
                                    <div className="flex gap-4">
                                        <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 whitespace-nowrap">Upload Image</button>
                                    </div>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-4">Current Carousel Images</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-lg shadow overflow-hidden relative group">
                                        <img src="https://via.placeholder.com/400x200" alt="Banner 1" className="w-full h-40 object-cover" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="bg-red-600 text-white px-4 py-2 rounded">Remove</button>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow overflow-hidden relative group">
                                        <img src="https://via.placeholder.com/400x200/333" alt="Banner 2" className="w-full h-40 object-cover" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="bg-red-600 text-white px-4 py-2 rounded">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Factible Section */}
                        {activeSection === 'FACULTIES' && (
                            <div className="content-section">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {['Past', 'Present', 'Feature'].map((type) => (
                                        <div key={type} className="bg-white rounded-lg shadow p-6">
                                            <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">{type} FACULTIES</h3>
                                            <div className="mb-4">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                                <input type="text" className="w-full border border-gray-300 rounded p-2 mb-2" placeholder="Enter Name" />
                                                <input type="file" accept=".pdf" className="w-full text-sm text-gray-500" />
                                                <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded">Upload PDF</button>
                                            </div>
                                            <ul className="space-y-2">
                                                <li className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                                    <span className="text-sm truncate"><i className="fas fa-file-pdf text-red-500 mr-2"></i> Sample_File.pdf</span>
                                                    <button className="text-red-500 hover:text-red-700"><i className="fas fa-trash"></i></button>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Notice Section */}
                        {activeSection === 'notice' && (
                            <div className="content-section">
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h3 className="font-bold text-gray-800 mb-4">Upload New Notice</h3>
                                    <div className="flex flex-col md:flex-row gap-4 items-end border-b pb-6 mb-6">
                                        <div className="flex-1 w-full">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Notice Name</label>
                                            <input type="text" className="w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. Holiday Announcement" />
                                        </div>
                                        <div className="flex-1 w-full">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Notice PDF</label>
                                            <input type="file" accept=".pdf" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100" />
                                        </div>
                                        <button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 h-10">Upload</button>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-4">Active Notices</h3>
                                    <table className="min-w-full divide-y divide-gray-200 border">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Notice Name</th>
                                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-01</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Exam Schedule</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                                    <button className="text-red-600 hover:text-red-900 font-medium">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Contact Section */}
                        {activeSection === 'contact' && (
                            <div className="content-section">
                                <div className="bg-white rounded-lg shadow overflow-hidden">
                                    <div className="px-6 py-4 border-b border-gray-200">
                                        <h3 className="font-bold text-gray-800">Website Inquiries</h3>
                                    </div>
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Alice Johnson</td>
                                                <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">Inquiry about course...</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                                    <button className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;