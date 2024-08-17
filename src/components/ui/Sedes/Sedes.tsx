import { useState } from 'react';
import { MapComponent } from '../../MapComponent/MapComponent';

const mapStyle: React.CSSProperties = {
  position: 'relative',
  width: '80vw',
  top: '-15em',
  height: '80vh',
};

export const Sedes: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMouseEnter = () => setShowMap(true);
  const handleMouseLeave = () => setShowMap(false);

  return (
    <div className="relative h-[80vh] flex flex-col items-center">
      <div
        className="relative w-[60vw] h-[30vh] rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer text-lg font-bold text-gray-800 text-center m-5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Nuestras sedes
      </div>
      <div
        style={mapStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showMap && <MapComponent />}
      </div>
    </div>
  );
};
