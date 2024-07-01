// InfoComponent.tsx

import React, { useState } from 'react';

interface InfoComponentProps {
  title: string;
  content: string;
}

const InfoComponent: React.FC<InfoComponentProps> = ({ title, content }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="info-container">
      <button className="bt1" 
              style={{ borderRadius: "50%" }} 
              onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'x' : title} {/* Hiển thị 'x' khi showInfo là true, ngược lại hiển thị title */}
      </button>
      {showInfo && (
        <div className="info-content">
          <p>{content}</p> 
        </div>
      )}
    </div>
  );
};

export default InfoComponent;