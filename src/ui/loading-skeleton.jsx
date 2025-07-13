// components/SkeletonCard.jsx
import React from 'react';

function LoadingSkeleton() {
    return (
        <div className="
            animate-pulse
            bg-white
            rounded-xl
            shadow 
            p-4 space-y-4
            w-full
        
        ">
             <div className="h-40 bg-gray-300 rounded-lg"></div> 
             <div className="h-4 bg-gray-300 rounded w-3/4"></div>
             <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
    );
}

export default LoadingSkeleton;