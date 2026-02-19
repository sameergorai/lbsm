

'use client';
import { useEffect, useState } from 'react';

export default function ImportantNotice() {
  const [listHTML, setListHTML] = useState('');

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch('https://sameer.edigitalindian.com/api/admin/notice_api.php');
        const data = await res.json();

        // 1. Filter only 'merit' category notices
        const meritNotices = Array.isArray(data) 
          ? data.filter(item => item.category === 'important') 
          : [];

        // 2. Generate HTML String based on API data
        // We map title -> text and file_url -> link
        const generatedHTML = meritNotices.map(item => `
          <div class="list-item">
            <span class="bullet">○</span>
            <div class="text-content">${item.title}</div>
            <a href="${item.file_url}" target="_blank" class="view-link">View</a>
          </div>
        `).join('');

        // 3. Duplicate content for infinite scroll effect (Content + Content)
        setListHTML( generatedHTML);

      } catch (error) {
        console.error("Error fetching merit lists:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <>
      <style jsx global>{`
        /* 2. THE MAIN CARD */
        .card {
          background: white;
          width: 100%;
          max-width: 400px;
          height: 60vh;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          padding: 16px;
        }

        /* Desktop only */
        @media (min-width: 768px) {
          .card {
            width: 33%;
            padding: 20px;
          }
        }

        /* 3. THE YELLOW HEADER */
        .header {
          background: linear-gradient(to right, #ffd700, #ffcc00);
          color: #000;
          text-align: center;
          font-weight: bold;
          font-size: 1.2rem;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 4px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
          text-transform: uppercase;
          flex-shrink: 0;
          z-index: 10;
        }

        /* 4. SCROLL WINDOW (The Mask) */
        .scroll-window {
          flex-grow: 1;
          overflow: hidden;
          position: relative;
        }

        /* 5. THE MOVING TRACK */
        .scroll-content {
          animation: scrollUp 20s linear infinite;
        }

        .scroll-content:hover {
          animation-play-state: paused;
        }

        /* 6. LIST ITEMS */
        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: 1.05rem;
          line-height: 1.4;
        }

        .list-item:last-child {
          border-bottom: none;
        }

        .bullet {
          margin-right: 10px;
          color: #888;
          font-size: 0.8rem;
          margin-top: 4px;
        }

        .text-content {
          flex-grow: 1;
          padding-right: 15px;
          color: #000;
          font-weight: 600;
        }

        .view-link {
          color: #3b3bff;
          text-decoration: none;
          font-weight: normal;
          white-space: nowrap;
          font-family: Arial, sans-serif;
        }

        .view-link:hover {
          text-decoration: underline;
        }

        /* 7. ANIMATION LOGIC */
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>

      <div className="card">
        <div className="header">Important Notice / Placement</div>

        <div className="scroll-window">
            {listHTML ? (
                 <div
                 className="scroll-content"
                 id="listContainer"
                 dangerouslySetInnerHTML={{ __html: listHTML }}
               />
            ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                    Loading...
                </div>
            )}
        </div>
      </div>
    </>
  );
}