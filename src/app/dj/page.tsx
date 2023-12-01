// DJPage 
import React from 'react';
import DJTool from '@/components/DJTool';

const DJPage: React.FC = () => {
  return (
    <div className="container mx-auto p-7">
      <h1 className="text-5xl font-bold mb-5">AI-Powered DJ </h1>
      <DJTool />

      {/* Button at the bottom middle */}
      <div className="flex justify-center mt-8">
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full">
          Light Em Up
        </button>
      </div>
    </div>
  );
};

export default DJPage;
