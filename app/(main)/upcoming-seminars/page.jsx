export const metadata = {
  title: "Past Seminars | LBSM College",
  description: "Archive of past academic seminars conducted by LBSM College.",
};

export default function PastSeminarsPage() {
  const pastSeminars = [
    {
      title: "National Multidisciplinary Seminar 2024",
      pdf: "/seminars/seminar-2024.pdf",
    },
    {
      title: "Academic Seminar 2023",
      pdf: "/seminars/seminar-2023.pdf",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#002147] uppercase">
            Past Seminars
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Archive of academic seminars organized by the college
          </p>
        </div>

        {/* Seminar List */}
        <div className="space-y-10">
          {pastSeminars.map((seminar, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow border"
            >
              <div className="px-4 py-3 border-b bg-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {seminar.title}
                </h2>

                {/* Open PDF */}
                <a
                  href={seminar.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c9302c] text-white px-4 py-1.5 text-sm rounded hover:bg-red-700 transition-colors"
                >
                  Open PDF
                </a>
              </div>

              {/* PDF Viewer */}
              <div className="w-full h-[600px]">
                <iframe
                  src={seminar.pdf}
                  className="w-full h-full"
                  title={seminar.title}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
