'use client'
import React, { useState } from 'react';
import { FaHeadphonesAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch('http://localhost/admin/contact_api.php', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (res.ok && !result.error) {
        alert("Message sent successfully!");
        e.target.reset(); // Clear the form
      } else {
        alert("Failed: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-200 via-purple-200 to-yellow-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8 mt-10">
            <h2 className="text-3xl font-bold text-slate-800">Contact Info</h2>
            
            <div className="space-y-6">
              {/* Call Us */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 text-xl">
                    <FaHeadphonesAlt />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-700">Call Us</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    +91-9334710089, 7061613757, 0657-2299810
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 text-xl">
                    <FaEnvelope />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-700">Email Us</h3>
                  <a href="mailto:lbsmcollege@yahoo.in" className="text-blue-500 text-sm mt-1 block hover:underline">
                    lbsmcollege@yahoo.in
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 text-xl">
                    <FaMapMarkerAlt />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-700">Location</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Karandih, Jamshedpur Jharkhand India 831002
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Do You Have Any Questions</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name :"
                  className="w-full bg-white rounded-md border-none px-4 py-3 text-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email :"
                  className="w-full bg-white rounded-md border-none px-4 py-3 text-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject :"
                  className="w-full bg-white rounded-md border-none px-4 py-3 text-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                />
                <input
                  type="text"
                  name="experience"
                  placeholder="Experience :"
                  className="w-full bg-white rounded-md border-none px-4 py-3 text-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                />
              </div>

              <textarea
                rows="4"
                name="message"
                required
                placeholder="Message :"
                className="w-full bg-white rounded-md border-none px-4 py-3 text-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm resize-none"
              ></textarea>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#002147] text-white font-bold py-3 px-8 rounded shadow-md hover:bg-slate-900 transition duration-300 uppercase text-sm tracking-wider ${loading ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {loading ? 'Sending...' : 'Submit Now'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Google Map View Section */}
        <div className="mt-16 w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.686377308766!2d86.22384937508415!3d22.777017279346615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31163428929%3A0x629c19b023f66e02!2sL.B.S.M.%20College!5e0!3m2!1sen!2sin!4v1709999999999!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="LBSM College Map"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;