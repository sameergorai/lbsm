// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BellIcon,
  ChartBarIcon,
  CogIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);



    const [isAuthorized, setIsAuthorized] = useState(false);
  // const router = useRouter();

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

  if (!isAuthorized) return <div className="p-10 text-center">Loading Admin Panel...</div>;

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-indigo-600 rounded-lg"></div>
                <span className="ml-2 text-xl font-bold text-gray-900">Dashboard</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Overview
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Analytics
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Projects
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Team
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <BellIcon className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-3 text-sm focus:outline-none"
                >
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <UserCircleIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="hidden md:block">
                    <div className="text-sm font-medium text-gray-700">John Doe</div>
                    <div className="text-xs text-gray-500">Admin</div>
                  </div>
                </button>
                
                {showDropdown && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <UserCircleIcon className="mr-3 h-5 w-5 text-gray-400" />
                        Profile
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <CogIcon className="mr-3 h-5 w-5 text-gray-400" />
                        Settings
                      </a>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-red-400" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Welcome to your dashboard!
                </h3>
                <div className="mt-5">
                  <div className="rounded-md bg-blue-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <ChartBarIcon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">
                          Getting Started
                        </h3>
                        <div className="mt-2 text-sm text-blue-700">
                          <p>
                            Welcome to your new account! Here are some things you can do:
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Update your profile information</li>
                            <li>Connect with other team members</li>
                            <li>Explore our features and tools</li>
                            <li>Set up your first project</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AdminDashboard() {
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // In a static app, we ask the PHP server: "Does the user have a valid cookie?"
//     const checkAuth = async () => {
//       try {
//         const res = await fetch('http://localhost/admin/check_auth.php', {
//           credentials: 'include'
//         });
//         if (res.ok) {
//           setIsAuthorized(true);
//         } else {
//           router.push('/login');
//         }
//       } catch {
//         router.push('/login');
//       }
//     };
//     checkAuth();
//   }, []);

//   if (!isAuthorized) return <div className="p-10 text-center">Loading Admin Panel...</div>;

//   return (
//     <div>
//       <h1>Welcome to the Secured Admin Panel</h1>
//       {/* Rest of your Dashboard UI code here */}
//     </div>
//   );
// }