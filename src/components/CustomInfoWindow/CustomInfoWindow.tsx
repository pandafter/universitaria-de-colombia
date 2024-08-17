import React from 'react';
import { InfoWindow, InfoWindowProps } from '@react-google-maps/api'; 

interface CustomInfoWindowProps extends InfoWindowProps {
  children: React.ReactNode;
}

const CustomInfoWindow: React.FC<CustomInfoWindowProps> = ({
  position,
  onCloseClick,
  children,
  ...otherProps
}) => {
  return (
    <InfoWindow
      position={position}
      onCloseClick={onCloseClick}
      options={{
        ...otherProps,
        headerDisabled: false,
        zIndex: 999
      }}
      
    >
      <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '5px', border: 'none' }}>
        {children}
      </div>
    </InfoWindow>
  );
};

export default CustomInfoWindow;