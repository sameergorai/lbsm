'use client';
import { useEffect, useState } from 'react';

export default function NewsTicker() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const res = await fetch('http://localhost/admin/notice_api.php');
        const data = await res.json();
        
        // Filter only 'alert' category
        if (Array.isArray(data)) {
          const activeAlerts = data.filter(item => item.category === 'alert');
          setAlerts(activeAlerts);
        }
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAlerts();
  }, []);

  // If no alerts, you can either hide the bar or show a default message
  const displayContent = alerts.length > 0 ? alerts : [{ id: 0, title: "Welcome to LBSM College", file_url: "#" }];

  return (
    <div className="bg-[#a91e1e] text-white h-10 flex items-center overflow-hidden relative z-20 shadow-md">
      {/* Label */}
      <div className="bg-[#8b1818] px-6 h-full flex items-center font-bold text-sm tracking-wider shrink-0 z-30 shadow-lg">
        LBSM @ NEWS
      </div>

      {/* Marquee Area */}
      <div className="marquee-container flex-1 overflow-hidden relative h-full flex items-center">
        <div className="marquee-content whitespace-nowrap flex items-center animate-marquee">
          {displayContent.map((alert, index) => (
            <span key={alert.id} className="flex items-center">
              <span className="mx-3 text-yellow-400 text-[8px]">●</span>
              <a 
                href={alert.file_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-yellow-200 transition-colors text-sm font-medium cursor-pointer"
              >
                {alert.title}
              </a>
              {/* Add spacing after last item only if looping visually */}
              {index === displayContent.length - 1 && <span className="mr-10"></span>}
            </span>
          ))}
        </div>
      </div>

      {/* Add CSS for the marquee animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}