"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import Carousel from '../components/Carousel';
import Faculties from '../components/Faculties';
import Notice from '../components/Notice';
import Seminar from '../components/Seminar';

// --- SVGs for cleaner, sharper UI (No external dependencies) ---
const Icons = {
    Menu: () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
    Close: () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
    Dashboard: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
    Users: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    Media: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    Logout: () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>,
};

export default function Page() {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    // -- Auth Check --
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('https://sameer.edigitalindian.com/api/admin/check_auth.php', { credentials: 'include' });
                if (!res.ok) router.push('/login');
            } catch {
                router.push('/login');
            }
        };
        checkAuth();
    }, []);

    // -- Logout Logic --
    const handleLogout = async () => {
        try {
            await fetch('https://sameer.edigitalindian.com/api/admin/logout.php', { method: 'POST', credentials: 'include' });
            localStorage.removeItem('user_name');
            router.push('/login');
        } catch {
            router.push('/login');
        }
    };

    // -- Navigation Data --
    const navItems = [
        { id: 'dashboard', label: 'Overview', icon: <Icons.Dashboard /> },
        { id: 'users', label: 'Students', icon: <Icons.Users /> },
        { id: 'carousel', label: 'Carousel', icon: <Icons.Media /> },
        { id: 'gallery', label: 'Gallery', icon: <Icons.Media /> },
        { id: 'FACULTIES ', label: 'Faculty', icon: <Icons.Users /> },
        { id: 'seminar', label: 'Seminars', icon: <Icons.Dashboard /> },
        { id: 'sport', label: 'Sports', icon: <Icons.Dashboard /> },
        { id: 'notice', label: 'Notices', icon: <Icons.Dashboard /> },
        { id: 'contact', label: 'Inquiries', icon: <Icons.Users /> },
    ];

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-600 overflow-hidden">
            
            {/* --- SIDEBAR (Desktop: Fixed, Mobile: Slide-over) --- */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
                md:relative md:translate-x-0 shadow-xl md:shadow-none
                ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full">
                    {/* Logo Area */}
                    <div className="h-16 flex items-center px-6 border-b border-slate-100">
                        <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <span className="text-lg font-bold text-slate-800 tracking-tight">Admin<span className="text-indigo-600">Panel</span></span>
                        
                        {/* Mobile Close Button */}
                        <button onClick={() => setMobileMenuOpen(false)} className="md:hidden ml-auto text-slate-400">
                            <Icons.Close />
                        </button>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-2">Main Menu</p>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                                className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200
                                    ${activeSection === item.id 
                                        ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <span className={`${activeSection === item.id ? 'text-indigo-600' : 'text-slate-400'}`}>
                                    {item.icon}
                                </span>
                                <span className="ml-3">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Logout Button */}
                    <div className="p-4 border-t border-slate-100">
                        <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors">
                            <Icons.Logout />
                            <span className="ml-3">Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                
                {/* Mobile Header */}
                <header className="md:hidden bg-white h-16 border-b border-slate-200 flex items-center justify-between px-4 z-20 shrink-0">
                    <span className="font-bold text-slate-800">Overview</span>
                    <button onClick={() => setMobileMenuOpen(true)} className="text-slate-600 p-2 bg-slate-100 rounded-lg">
                        <Icons.Menu />
                    </button>
                </header>

                {/* Desktop Header */}
                <header className="hidden md:flex h-16 bg-white border-b border-slate-200 items-center justify-between px-8 z-10 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-slate-800 capitalize">{activeSection.replace('-', ' ')}</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-slate-500">Welcome, Admin</span>
                        <div className="h-9 w-9 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold border border-indigo-200">
                            S
                        </div>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-3 md:p-8">
                    <div className="max-w-6xl mx-auto">
                        
                        {/* DASHBOARD VIEW */}
                        {activeSection === 'dashboard' && (
                            <div className="space-y-6">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                                    {[
                                        { label: 'Total Users', val: '1,240', color: 'text-blue-600', bg: 'bg-blue-50' },
                                        { label: 'Notices', val: '12', color: 'text-purple-600', bg: 'bg-purple-50' },
                                        { label: 'Files', val: '34', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                                        { label: 'Messages', val: '5', color: 'text-amber-600', bg: 'bg-amber-50' }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                            <p className="text-xs font-semibold text-slate-400 uppercase">{stat.label}</p>
                                            <div className="flex items-end justify-between mt-2">
                                                <h3 className="text-xl md:text-2xl font-bold text-slate-800">{stat.val}</h3>
                                                <div className={`p-1.5 rounded-lg ${stat.bg} ${stat.color}`}>
                                                    <Icons.Dashboard />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Welcome Banner */}
                                <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
                                    <h3 className="text-lg font-bold">Welcome back, Sameer!</h3>
                                    <p className="text-indigo-100 text-sm mt-1">You have 5 unread inquiries today.</p>
                                </div>
                            </div>
                        )}

                        {/* USERS TABLE VIEW */}
                        {activeSection === 'users' && (
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                    <h3 className="font-bold text-slate-700">Student List</h3>
                                    <button className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm hover:bg-indigo-700 transition">
                                        + Add New
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-left text-sm">
                                        <thead className="bg-slate-50 text-slate-500 uppercase font-semibold text-xs">
                                            <tr>
                                                <th className="px-5 py-3">Name</th>
                                                <th className="px-5 py-3">Role</th>
                                                <th className="px-5 py-3 text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr className="hover:bg-slate-50 transition">
                                                <td className="px-5 py-3 font-medium text-slate-700">Sameer Gorai</td>
                                                <td className="px-5 py-3 text-slate-500">Admin</td>
                                                <td className="px-5 py-3 text-right">
                                                    <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Active</span>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-slate-50 transition">
                                                <td className="px-5 py-3 font-medium text-slate-700">Rahul Kumar</td>
                                                <td className="px-5 py-3 text-slate-500">Student</td>
                                                <td className="px-5 py-3 text-right">
                                                    <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">Offline</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* RENDER OTHER COMPONENTS */}
                        <div className="mt-4">
                            {activeSection === 'carousel' && <Carousel />}
                            {activeSection === 'gallery' && <Gallery />}
                            {activeSection === 'FACULTIES ' && <Faculties />}
                            {activeSection === 'seminar' && <Seminar />}
                            {activeSection === 'notice' && <Notice />}
                            
                            {/* CONTACT INQUIRIES */}
                            {activeSection === 'contact' && (
                                <div className="grid gap-3">
                                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-slate-800">Alice Johnson</h4>
                                            <p className="text-sm text-slate-500">Inquiry about B.Sc Course...</p>
                                        </div>
                                        <button className="text-red-500 bg-red-50 px-3 py-1 rounded-lg text-xs font-bold">Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}