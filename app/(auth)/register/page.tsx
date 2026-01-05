// // app/register/page.tsx
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { EyeIcon, EyeSlashIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

// export default function RegisterPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [passwordStrength, setPasswordStrength] = useState(0);
//   const [acceptedTerms, setAcceptedTerms] = useState(false);
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     // Clear error for this field
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
    
//     // Calculate password strength
//     if (name === 'password') {
//       calculatePasswordStrength(value);
//     }
//   };

//   const calculatePasswordStrength = (password: string) => {
//     let strength = 0;
//     if (password.length >= 8) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[^A-Za-z0-9]/.test(password)) strength++;
//     setPasswordStrength(strength);
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
    
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     if (!acceptedTerms) {
//       newErrors.terms = 'You must accept the terms and conditions';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsLoading(true);
    
//     try {
//       // Simulate API call - replace with your PHP backend
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Here you would call your PHP backend
//       const response = await fetch('http://your-php-backend/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//         }),
//       });
      
//       // For demo, simulate success
//       router.push('/dashboard');
//     } catch (err) {
//       setErrors({ submit: 'Registration failed. Please try again.' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getPasswordStrengthColor = () => {
//     if (passwordStrength === 0) return 'bg-gray-200';
//     if (passwordStrength === 1) return 'bg-red-500';
//     if (passwordStrength === 2) return 'bg-yellow-500';
//     if (passwordStrength === 3) return 'bg-blue-500';
//     return 'bg-green-500';
//   };

//   const getPasswordStrengthText = () => {
//     if (passwordStrength === 0) return 'Very weak';
//     if (passwordStrength === 1) return 'Weak';
//     if (passwordStrength === 2) return 'Fair';
//     if (passwordStrength === 3) return 'Good';
//     return 'Strong';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center md:p- text-black">
//       <div className="max-w-2xl  bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="md:flex">
//           {/* Left side - Form */}
//           <div className=" p-8 md:p-10">
//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
//               <p className="mt-2 text-gray-600">
//                 Join our community today
//               </p>
//             </div>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
//                     errors.name ? 'border-red-300' : 'border-gray-300'
//                   }`}
//                   placeholder="John Doe"
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-sm text-red-600 flex items-center">
//                     <XCircleIcon className="h-4 w-4 mr-1" />
//                     {errors.name}
//                   </p>
//                 )}
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
//                     errors.email ? 'border-red-300' : 'border-gray-300'
//                   }`}
//                   placeholder="you@example.com"
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600 flex items-center">
//                     <XCircleIcon className="h-4 w-4 mr-1" />
//                     {errors.email}
//                   </p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password *
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? 'text' : 'password'}
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors pr-12 ${
//                       errors.password ? 'border-red-300' : 'border-gray-300'
//                     }`}
//                     placeholder="Create a password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   >
//                     {showPassword ? (
//                       <EyeSlashIcon className="h-5 w-5" />
//                     ) : (
//                       <EyeIcon className="h-5 w-5" />
//                     )}
//                   </button>
//                 </div>
                
//                 {/* Password Strength */}
//                 {formData.password && (
//                   <div className="mt-3">
//                     <div className="flex justify-between text-sm mb-1">
//                       <span className="text-gray-600">Password strength:</span>
//                       <span className={`font-medium ${
//                         passwordStrength <= 2 ? 'text-red-600' :
//                         passwordStrength === 3 ? 'text-blue-600' : 'text-green-600'
//                       }`}>
//                         {getPasswordStrengthText()}
//                       </span>
//                     </div>
//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div 
//                         className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
//                         style={{ width: `${passwordStrength * 25}%` }}
//                       ></div>
//                     </div>
//                     <ul className="mt-2 text-sm text-gray-600 space-y-1">
//                       <li className={`flex items-center ${formData.password.length >= 8 ? 'text-green-600' : ''}`}>
//                         {formData.password.length >= 8 ? (
//                           <CheckCircleIcon className="h-4 w-4 mr-2" />
//                         ) : (
//                           <div className="h-4 w-4 mr-2 border border-gray-300 rounded-full"></div>
//                         )}
//                         At least 8 characters
//                       </li>
//                       <li className={`flex items-center ${/[A-Z]/.test(formData.password) ? 'text-green-600' : ''}`}>
//                         {/[A-Z]/.test(formData.password) ? (
//                           <CheckCircleIcon className="h-4 w-4 mr-2" />
//                         ) : (
//                           <div className="h-4 w-4 mr-2 border border-gray-300 rounded-full"></div>
//                         )}
//                         One uppercase letter
//                       </li>
//                       <li className={`flex items-center ${/[0-9]/.test(formData.password) ? 'text-green-600' : ''}`}>
//                         {/[0-9]/.test(formData.password) ? (
//                           <CheckCircleIcon className="h-4 w-4 mr-2" />
//                         ) : (
//                           <div className="h-4 w-4 mr-2 border border-gray-300 rounded-full"></div>
//                         )}
//                         One number
//                       </li>
//                     </ul>
//                 </div>
//                 )}
                
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600 flex items-center">
//                     <XCircleIcon className="h-4 w-4 mr-1" />
//                     {errors.password}
//                   </p>
//                 )}
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                   Confirm Password *
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     required
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors pr-12 ${
//                       errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
//                     }`}
//                     placeholder="Confirm your password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   >
//                     {showConfirmPassword ? (
//                       <EyeSlashIcon className="h-5 w-5" />
//                     ) : (
//                       <EyeIcon className="h-5 w-5" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="mt-1 text-sm text-red-600 flex items-center">
//                     <XCircleIcon className="h-4 w-4 mr-1" />
//                     {errors.confirmPassword}
//                   </p>
//                 )}
//               </div>

//               {/* Terms and Conditions */}
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="terms"
//                     name="terms"
//                     type="checkbox"
//                     checked={acceptedTerms}
//                     onChange={(e) => setAcceptedTerms(e.target.checked)}
//                     className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="text-gray-700">
//                     I agree to the{' '}
//                     <Link href="/terms" className="text-indigo-600 hover:text-indigo-500">
//                       Terms of Service
//                     </Link>{' '}
//                     and{' '}
//                     <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">
//                       Privacy Policy
//                     </Link>
//                   </label>
//                 </div>
//               </div>
//               {errors.terms && (
//                 <p className="text-sm text-red-600 flex items-center">
//                   <XCircleIcon className="h-4 w-4 mr-1" />
//                   {errors.terms}
//                 </p>
//               )}

//               {/* Submit Error */}
//               {errors.submit && (
//                 <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
//                   {errors.submit}
//                 </div>
//               )}

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
//               >
//                 {isLoading ? (
//                   <span className="flex items-center">
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Creating account...
//                   </span>
//                 ) : (
//                   'Create Account'
//                 )}
//               </button>
//             </form>

//             {/* Already have account */}
//             <div className="mt-8 text-center">
//               <p className="text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <Link
//                   href="/login"
//                   className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
//                 >
//                   Sign in here
//                 </Link>
//               </p>
//             </div>
//           </div>

//           {/* Right side - Illustration/Info */}
//           {/* <div className="md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 md:p-10 flex flex-col justify-center">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Join thousands of happy users</h3>
//               <p className="text-indigo-100 mb-8">
//                 Experience the best platform for managing your projects and collaborating with your team.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <CheckCircleIcon className="h-5 w-5 mr-3 text-green-300" />
//                   <span>Free 14-day trial</span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircleIcon className="h-5 w-5 mr-3 text-green-300" />
//                   <span>No credit card required</span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircleIcon className="h-5 w-5 mr-3 text-green-300" />
//                   <span>Cancel anytime</span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircleIcon className="h-5 w-5 mr-3 text-green-300" />
//                   <span>24/7 customer support</span>
//                 </div>
//               </div>
//             </div> */}
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }


// app/register/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '', // 1. Added mobile field
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // For mobile, restrict to numbers only (optional UX improvement)
    if (name === 'mobile' && !/^\d*$/.test(value)) {
      return; 
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Calculate password strength
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // 2. Mobile Validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!acceptedTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setErrors({}); // Clear previous global errors
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // ---------------------------------------------------------
      // REAL PHP INTEGRATION LOGIC START
      // ---------------------------------------------------------
      
      const response = await fetch('http://localhost/admin/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password,
        }),
      });

      const data = await response.json();
        console.log(data.message || 'Registration failed');

      if (!response.ok) {
        // Assume PHP sends { status: 409, message: "Email already exists" }
        throw new Error(data.message || 'Registration failed');
      }
      
      // ---------------------------------------------------------
      // END REAL PHP LOGIC
      // ---------------------------------------------------------

      // SIMULATION FOR DEMO:
      // Simulating a duplicate error check locally for demonstration
      if (formData.email === 'test@test.com') {
         throw new Error('This email is already registered.');
      }
      if (formData.mobile === '1234567890') {
         throw new Error('This mobile number is already registered.');
      }
      
      // Success
      router.push('login');

    } catch (err: any) {
      // 3. Display the error "popup" (The red box below)
      setErrors({ submit: err.message || 'Registration failed. Please try again.' });
      
      // Optional: If you really want a browser popup:
      // alert(err.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength === 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-yellow-500';
    if (passwordStrength === 3) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return 'Very weak';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };
return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4 md:p-8 text-black">
      {/* Increased max-width from 4xl to 6xl for a wider feel */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Left side - Form Section */}
          <div className="flex-1 p-8 md:p-16"> {/* Increased padding for breathability */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Create Account</h1>
              <p className="mt-3 text-lg text-gray-600">
                Join our community today
              </p>
            </div>

            {/* Added a max-width to the form itself so it doesn't get TOO wide on massive screens, but feels wider than before */}
            <form className="space-y-6 max-w-2xl mx-auto" onSubmit={handleSubmit}>
              
              {/* Grid for Name and Email to use the extra width effectively */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <XCircleIcon className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <XCircleIcon className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Mobile Number Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  required
                  maxLength={10}
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    errors.mobile ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="9876543210"
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <XCircleIcon className="h-4 w-4 mr-1" />
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* Password Fields in a Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors pr-12 ${
                        errors.password ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors pr-12 ${
                        errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Repeat password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                    I agree to the <Link href="/terms" className="text-indigo-600 font-semibold underline">Terms of Service</Link> and <Link href="/privacy" className="text-indigo-600 font-semibold underline">Privacy Policy</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-6 rounded-lg shadow-lg text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Create Account'}
                </button>
              </div>
            </form>

            <div className="mt-10 text-center">
              <p className="text-gray-600">
                Already have an account? <Link href="/login" className="font-bold text-indigo-600 hover:underline">Sign in here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}