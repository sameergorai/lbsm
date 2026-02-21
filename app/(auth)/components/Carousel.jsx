import React, { useState, useEffect } from 'react';

function Carousel() {
    const [carouselData, setCarouselData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);

    // Fetch Data
    const fetchCarousel = async () => {
        try {
            const res = await fetch(`https://www.lbsmcollege.ac.in/api/admin/carousel_api.php`);
            const data = await res.json();
            setCarouselData(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchCarousel();
    }, []);

    // Handle Upload
    const handleUpload = async () => {
        if (!imageFile) return alert("Please select an image");
        
        setLoading(true);
        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('title', title);
        formData.append('description', description);

        try {
            const res = await fetch(`https://www.lbsmcollege.ac.in//api/admin/carousel_api.php`, {
                method: 'POST',
                body: formData
            });
            const result = await res.json();
            if (result.message) {
                // Reset form
                setTitle('');
                setDescription('');
                setImageFile(null);
                document.getElementById('carousel_file').value = "";
                fetchCarousel();
            } else {
                alert(result.error || "Upload failed");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Handle Remove (SQL Only)
    const handleRemove = async (id) => {
        if(!window.confirm("Remove this slide from the database? (File will remain on server)")) return;

        const formData = new FormData();
        formData.append('action', 'delete');
        formData.append('id', id);

        try {
            await fetch(`https://www.lbsmcollege.ac.in//api/admin/carousel_api.php`, {
                method: 'POST',
                body: formData
            });
            fetchCarousel();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="content-section">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Add New Carousel Slide</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Title Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                            placeholder="Slide Title"
                        />
                    </div>
                    {/* File Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <input 
                            id="carousel_file"
                            type="file" 
                            onChange={(e) => setImageFile(e.target.files[0])}
                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                        />
                    </div>
                </div>

                {/* Description Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="2"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                        placeholder="Short description for the slide..."
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button 
                        onClick={handleUpload}
                        disabled={loading}
                        className={`bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition ${loading ? 'opacity-50' : ''}`}
                    >
                        {loading ? 'Uploading...' : 'Upload Slide'}
                    </button>
                </div>
            </div>

            <h3 className="font-bold text-gray-800 mb-4">Current Carousel Images</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {carouselData?.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden relative group flex flex-col">
                        {/* Image */}
                        <div className="h-40 w-full relative">
                             <img 
                                src={item.image_url} 
                                alt={item.title} 
                                className="w-full h-full object-cover" 
                                onError={(e) => {e.target.src='https://via.placeholder.com/400x200?text=Error';}}
                            />
                            {/* Hover Overlay for Delete */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button 
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-4 flex-1">
                            <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title || "No Title"}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">
                                {item.description || "No description provided."}
                            </p>
                        </div>
                    </div>
                ))}

                {carouselData.length === 0 && (
                    <div className="col-span-3 text-center text-gray-500 py-10">
                        No carousel slides found.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Carousel;