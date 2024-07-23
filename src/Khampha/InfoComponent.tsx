import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface InfoComponentProps {
  title: string;
  content: string;
  link: string; // Thêm props link
}

const InfoComponent: React.FC<InfoComponentProps> = ({ title, content, link }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="info-container">
      <button className="bt1" 
              style={{ borderRadius: "50%" }} 
              onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'x' : title} 
      </button>
      {showInfo && (
        <div className="info-content">
          <div className="info-top"> {/* Phần thông tin trên */}
            <p><b>Khu 1</b></p> {/* Nội dung Khu 1 */}
            <p>Trò chơi vượt tháp</p>
          </div>
          <span className="separator"></span>
         
        <div className="separator1"> <Link to={link} > {/* Sử dụng Link từ react-router-dom */}           
            <button style={{borderRadius: "50%" ,backgroundColor:"#259E58",width:"30px",height:"30px",color:"white",border:"1px solid #259E58"}}>
              &gt;
            </button>
          </Link></div>
         
         
        </div>
      )}
    </div>
  );
};

export default InfoComponent;