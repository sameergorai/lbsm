// // app/login/page.tsx
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     setError('');
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       // Simulate API call - replace with your PHP backend
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Here you would call your PHP backend
//       // const response = await fetch('http://your-php-backend/api/login', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(formData),
//       // });
      
//       // For demo purposes, check for demo credentials
//       if (formData.email === 'demo@example.com' && formData.password === 'password123') {
//         router.push('/dashboard');
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="max-w-xl w-full space-y-8 bg-white rounded-2xl shadow-xl p-8 md:p-10">
//         {/* Logo and Header */}
//         <div className="text-center">
//           <div className="flex justify-center mb-6">
//             <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
//               <span className="text-white text-2xl font-bold">L</span>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
//           <p className="mt-2 text-gray-600">
//             Sign in to your account to continue
//           </p>
//         </div>

//         {/* Login Form */}
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-5">
//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   autoComplete="current-password"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors pr-12"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 >
//                   {showPassword ? (
//                     <EyeSlashIcon className="h-5 w-5" />
//                   ) : (
//                     <EyeIcon className="h-5 w-5" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Remember me & Forgot password */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                 Remember me
//               </label>
//             </div>
//             <div className="text-sm">
//               <Link
//                 href="/forgot-password"
//                 className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
//               {error}
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//           >
//             {isLoading ? (
//               <span className="flex items-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Signing in...
//               </span>
//             ) : (
//               'Sign in'
//             )}
//           </button>
//  <div className="mt-8 text-center">
//               <p className="text-sm text-gray-600">
//                 Create new account?{' '}
//                 <Link
//                   href="/register"
//                   className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
//                 >
//                   Register in here
//                 </Link>
//               </p>
//             </div>
//           {/* Demo Credentials */}
//           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//             <p className="text-sm text-blue-800">
//               <strong>Demo credentials:</strong><br />
//               Email: demo@example.com<br />
//               Password: password123
//             </p>
//           </div>
//         </form>

//         {/* Divider */}
//         {/* <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-white text-gray-500">Or continue with</span>
//           </div>
//         </div> */}

//         {/* Social Login */}
//         {/* <div className="grid grid-cols-2 gap-3">
//           <button
//             type="button"
//             className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//           >
//             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.666-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.787-.94 1.324-2.245 1.171-3.54-1.133.052-2.518.754-3.334 1.701-.735.85-1.389 2.207-1.208 3.514 1.26.091 2.544-.598 3.371-1.675z"/>
//             </svg>
//             Apple
//           </button>
//           <button
//             type="button"
//             className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//           >
//             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
//             </svg>
//             Google
//           </button>
//         </div> */}

//         {/* Sign Up Link */}
//         {/* <div className="text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link
//               href="/register"
//               className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
//             >
//               Sign up for free
//             </Link>
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Only allow numbers for the mobile field
    if (name === 'mobile' && value !== '' && !/^\d+$/.test(value)) return;
    
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://www.lbsmcollege.ac.in/api/admin/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include', 
      });

      // 1. Check content type to avoid JSON parsing errors
      const contentType = response.headers.get("content-type");
      let data;
      
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // If server returns HTML error page (common 500/404 issue)
        const text = await response.text();
        console.error("Server returned non-JSON response:", text);
        throw new Error("Server error. Please contact support.");
      }

      if (response.ok) {
        router.push('/admin'); 
      } else {
        setError(data.message || 'Invalid credentials.');
      }
    } catch (err: any) {
      console.error("Login Error:", err);
      // Show actual error if available, otherwise generic message
      setError(err.message || 'Connection to server failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Updated padding: 'p-4' for mobile (compact)
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Reduced padding inside card for mobile: p-6 instead of p-8 */}
      <div className="max-w-xl w-full   md:p-7">
        <div className="text-center mb-8">
          {/* <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-3xl font-bold">LBSm</span>
          </div> */}
           <img
            src="/lbsm-college.avif"
            alt="logo"
            className="w-26 h-24 m-auto"
          />
          {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h2> */}
          <p className="text-gray-600 mt-2 text-sm md:text-base">Sign in using your mobile number</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-200 animate-pulse text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
            <input
              name="mobile"
              type="tel"
              required
              maxLength={10}
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-base"
              placeholder="Enter 10-digit number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all pr-12 text-base"
                placeholder="Enter password"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 md:top-4 text-gray-400 hover:text-indigo-600"
              >
                {showPassword ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 md:py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account? <Link href="/register" className="text-indigo-600 font-bold hover:underline">Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}