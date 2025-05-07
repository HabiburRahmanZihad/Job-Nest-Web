import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center py-8">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-cyan-500"></div>
        </div>
    );
};

export default Loading;