// import React, { useState, useEffect } from 'react';

// function Gallery() {
//     const [galleryData, setGalleryData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
    
//     // Form States
//     const [title, setTitle] = useState('');
//     const [category, setCategory] = useState('');
//     const [imageFile, setImageFile] = useState(null);

//     // Fetch Gallery Data
//     const fetchGallery = async () => {
//         try {
//             const response = await fetch(`https://www.lbsmcollege.ac.in/api/admin/gallery_api.php`);
//             const data = await response.json();
//             setGalleryData(data);
//         } catch (error) {
//             console.error("Error fetching gallery:", error);
//         }
//     };

//     useEffect(() => {
//         fetchGallery();
//     }, []);

//     // Handle File Selection
//     const handleFileChange = (e) => {
//         setImageFile(e.target.files[0]);
//     };

//     // Handle Upload
//     const handleUpload = async () => {
//         if (!title || !category || !imageFile) {
//             alert("Please fill all fields and select an image.");
//             return;
//         }

//         setIsLoading(true);
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('category', category);
//         formData.append('image', imageFile);

//         try {
//             const response = await fetch(`https://www.lbsmcollege.ac.in/api/admin/gallery_api.php`, {
//                 method: 'POST',
//                 body: formData
//             });
//             const result = await response.json();
            
//             if (result.message) {
//                 // Success: Reset form and refresh list
//                 setTitle('');
//                 setCategory('');
//                 setImageFile(null);
//                 // Reset file input visually
//                 document.getElementById('gallery_file_input').value = ""; 
//                 fetchGallery();
//             } else {
//                 alert("Upload failed: " + result.error);
//             }
//         } catch (error) {
//             console.error("Error uploading:", error);
//             alert("Network error.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     // Handle Delete
//     const handleDelete = async (id) => {
//         if (!window.confirm("Are you sure you want to delete this image?")) return;

//         const formData = new FormData();
//         formData.append('action', 'delete');
//         formData.append('id', id);

//         try {
//             const response = await fetch(`https://www.lbsmcollege.ac.in/api/admin/gallery_api.php`, {
//                 method: 'POST',
//                 body: formData
//             });
//             const result = await response.json();
//             if (result.message) {
//                 fetchGallery();
//             } else {
//                 alert("Delete failed: " + result.error);
//             }
//         } catch (error) {
//             console.error("Error deleting:", error);
//         }
//     };

//     // Helper for category badge colors
//     const getBadgeColor = (cat) => {
//         const c = cat.toLowerCase();
//         if (c.includes('sport')) return 'bg-blue-100 text-blue-800';
//         if (c.includes('event')) return 'bg-green-100 text-green-800';
//         if (c.includes('campus')) return 'bg-purple-100 text-purple-800';
//         return 'bg-gray-100 text-gray-800';
//     };

//     return (
//         <div className="content-section">
//             <div className="bg-white rounded-lg shadow p-6 mb-6">
//                 <h3 className="font-bold text-gray-800 mb-4">Upload Gallery Image</h3>

//                 {/* Form Layout */}
//                 <div className="flex flex-col md:flex-row gap-4 items-end">

//                     {/* Image Title */}
//                     <div className="flex-1 w-full">
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Image Title</label>
//                         <input
//                             type="text"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-purple-500"
//                             placeholder="e.g. Annual Sports Day"
//                         />
//                     </div>

//                     {/* Category Input */}
//                     <div className="w-full md:w-1/4">
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//                         <input
//                             type="text"
//                             value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                             className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-purple-500"
//                             placeholder="e.g. Events"
//                         />
//                     </div>

//                     {/* File Input */}
//                     <div className="flex-1 w-full">
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Select Image</label>
//                         <input
//                             id="gallery_file_input"
//                             type="file"
//                             onChange={handleFileChange}
//                             accept="image/*"
//                             className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
//                         />
//                     </div>

//                     {/* Upload Button */}
//                     <button 
//                         onClick={handleUpload}
//                         disabled={isLoading}
//                         className={`bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 h-10 w-full md:w-auto transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     >
//                         {isLoading ? 'Uploading...' : 'Upload'}
//                     </button>
//                 </div>
//             </div>

//             <h3 className="font-bold text-gray-800 mb-4">Gallery Collection</h3>
            
//             {/* Gallery Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
//                 {galleryData.length === 0 ? (
//                     <p className="text-gray-500 col-span-4">No images found in gallery.</p>
//                 ) : (
//                     galleryData.map((item) => (
//                         <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden relative group">
//                             <img 
//                                 src={item.image_url} 
//                                 alt={item.title} 
//                                 className="w-full h-48 object-cover" 
//                                 onError={(e) => {e.target.src = 'https://via.placeholder.com/300?text=Error';}}
//                             />
//                             <div className="p-3">
//                                 {/* Dynamic Category Badge */}
//                                 <span className={`inline-block text-xs px-2 py-1 rounded-full mb-1 ${getBadgeColor(item.category)}`}>
//                                     {item.category}
//                                 </span>
//                                 <p className="text-sm font-medium text-gray-800 truncate" title={item.title}>
//                                     {item.title}
//                                 </p>
//                             </div>
//                             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                                 <button 
//                                     onClick={() => handleDelete(item.id)}
//                                     className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
//                                 >
//                                     <i className="fas fa-trash mr-1"></i> Delete
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 )}

//             </div>
//         </div>
//     );
// }

// export default Gallery;

import React, { useState, useEffect } from 'react';

function Gallery() {
    const [galleryData, setGalleryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    // Form States
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [imageFiles, setImageFiles] = useState([]); // Changed to handle multiple files

    // Fetch Gallery Data
    const fetchGallery = async () => {
        try {
            const response = await fetch(`https://www.lbsmcollege.ac.in/api/admin/gallery_api.php`);
            const data = await response.json();
            setGalleryData(data);
        } catch (error) {
            console.error("Error fetching gallery:", error);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    // Handle File Selection
    const handleFileChange = (e) => {
        // Convert FileList to Array
        setImageFiles(Array.from(e.target.files));
    };

    // Handle Bulk Upload
    const handleUpload = async () => {
        if (!title || !category || imageFiles.length === 0) {
            alert("Please fill all fields and select at least one image.");
            return;
        }

        setIsLoading(true);
        let successCount = 0;
        let failCount = 0;

        // Process files sequentially to ensure compatibility with existing PHP backend
        for (const file of imageFiles) {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('category', category);
            formData.append('image', file);

            try {
                const response = await fetch(`https://www.lbsmcollege.ac.in/api/admin/gallery_api.php`, {
                    method: 'POST',
                    body: formData
                });
                const result = await response.json();
                
                if (result.message) {
                    successCount++;
                } else {
                    failCount++;
                    console.error("Upload failed for a file:", result.error);
                }
            } catch (error) {
                failCount++;
                console.error("Error uploading file:", error);
            }
        }

        // Feedback
        if (failCount > 0) {
            alert(`Upload complete: ${successCount} successful, ${failCount} failed.`);
        } else {
            alert(`Successfully uploaded ${successCount} image(s).`);
        }

        // Success: Reset form and refresh list
        setTitle('');
        setCategory('');
        setImageFiles([]);
        document.getElementById('gallery_file_input').value = ""; 
        fetchGallery();
        setIsLoading(false);
    };

    // Handle Delete
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this image?")) return;

        const formData = new FormData();
        formData.append('action', 'delete');
        formData.append('id', id);

        try {
            const response = await fetch(`https://www.lbsmcollege.ac.in/api/admin/gallery_api.php`, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (result.message) {
                fetchGallery();
            } else {
                alert("Delete failed: " + result.error);
            }
        } catch (error) {
            console.error("Error deleting:", error);
        }
    };

    // Helper for category badge colors
    const getBadgeColor = (cat) => {
        const c = cat.toLowerCase();
        if (c.includes('sport')) return 'bg-blue-100 text-blue-800';
        if (c.includes('event')) return 'bg-green-100 text-green-800';
        if (c.includes('campus')) return 'bg-purple-100 text-purple-800';
        return 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="content-section">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Upload Gallery Image(s)</h3>

                {/* Form Layout */}
                <div className="flex flex-col md:flex-row gap-4 items-end">

                    {/* Image Title */}
                    <div className="flex-1 w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-purple-500"
                            placeholder="e.g. Annual Sports Day"
                        />
                    </div>

                    {/* Category Input */}
                    <div className="w-full md:w-1/4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-purple-500"
                            placeholder="e.g. Events"
                        />
                    </div>

                    {/* File Input */}
                    <div className="flex-1 w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Image(s)</label>
                        <input
                            id="gallery_file_input"
                            type="file"
                            multiple // Enabled bulk selection
                            onChange={handleFileChange}
                            accept="image/*"
                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                        />
                    </div>

                    {/* Upload Button */}
                    <button 
                        onClick={handleUpload}
                        disabled={isLoading}
                        className={`bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 h-10 w-full md:w-auto transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
                
                {/* Selected files feedback (Optional, keeping UI minimal) */}
                {imageFiles.length > 1 && (
                    <p className="text-xs text-gray-500 mt-2">
                        {imageFiles.length} images selected for bulk upload.
                    </p>
                )}
            </div>

            <h3 className="font-bold text-gray-800 mb-4">Gallery Collection</h3>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                
                {galleryData.length === 0 ? (
                    <p className="text-gray-500 col-span-4">No images found in gallery.</p>
                ) : (
                    galleryData.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden relative group">
                            <img 
                                src={item.image_url} 
                                alt={item.title} 
                                className="w-full h-48 object-cover" 
                                onError={(e) => {e.target.src = 'https://via.placeholder.com/300?text=Error';}}
                            />
                            <div className="p-3">
                                {/* Dynamic Category Badge */}
                                <span className={`inline-block text-xs px-2 py-1 rounded-full mb-1 ${getBadgeColor(item.category)}`}>
                                    {item.category}
                                </span>
                                <p className="text-sm font-medium text-gray-800 truncate" title={item.title}>
                                    {item.title}
                                </p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button 
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
                                >
                                    <i className="fas fa-trash mr-1"></i> Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
}

export default Gallery;