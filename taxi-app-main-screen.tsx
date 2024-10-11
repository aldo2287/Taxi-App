import React from 'react';
import { MapPin, Menu } from 'lucide-react';

const MainScreen = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">TaxiApp</h1>
        <Menu className="h-6 w-6" />
      </header>

      {/* Main content */}
      <main className="flex-1 relative">
        {/* Placeholder for map */}
        <div className="h-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600">Map View</p>
        </div>

        {/* Current location indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
          <MapPin className="h-6 w-6 text-blue-600" />
        </div>

        {/* Book a Ride button */}
        <div className="absolute bottom-8 left-4 right-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg">
            Book a Ride
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainScreen;
