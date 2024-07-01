import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './index3.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { firestore } from '../firebase';
import Hinh from '../picture/Rectangle1524.png';
import Hinh2 from '../picture/Group17.png';
import Hinh3 from '../picture/png-transparent-facebook-icon-social-media-computer-icons-facebook-facebook-rectangle-logo-website.jpg';
import Hinh4 from '../picture/png-transparent-youtube-play-button-computer-icons-youtube-television-angle-rectangle.png'
import Hinh5 from '../picture/instagram-logos-png-images-free-download-11641669602cekuhoqisp.png'
import Hinh6 from '../picture/Map-26-6_ver1 1.png';
import { Dropdown, DropdownItem } from "flowbite-react";
import ButtonDropdown from './ButtonDropdown'; // Import ButtonDropdown component
import InfoComponent from './InfoComponent'; // Import InfoComponent

function Khampha() {
  const navigate = useNavigate();
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quanlyRef = await getDocs(collection(firestore, "users"));
        const fetchedData: DocumentData[] = [];

        quanlyRef.forEach((doc) => {
          fetchedData.push(doc.data());
        });

        setData(fetchedData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate]);
  
  const dropdownItems = [
    { label: 'Tùy chọn 1', value: 'option1' },
    { label: 'Tùy chọn 2', value: 'option2' },
    { label: 'Tùy chọn 3', value: 'option3' },
  ];

  const infoData = [
    { title: '1', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '2', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '3', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '4', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '5', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '6', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '7', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '8', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '9', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '10', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '11', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '12', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '13', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '14', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '15', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '16', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '17', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '18', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '19', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '20', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '21', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '22', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '23', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '24', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '25', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '26', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '27', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '28', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '29', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '30', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '31', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '32', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '33', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '34', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '35', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '36', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '37', content: 'Nội dung thông tin cho Button 1', top: 200, left: 20 },
    { title: '38', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '39', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '40', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '41', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '42', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '43', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    { title: '44', content: 'Nội dung thông tin cho Button 2', top: 400, left: 800 },
    
    // ...
  ];

  return (
    <div className="bs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 left-side" style={{ width: '250px' }}>   
          <div className="left-side-content">
          <div className="menu-icon">≡</div>
          <Link to="/" className="menu-item" style={{ textDecoration: 'underline', color: 'black' }}>TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item">KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
  <DropdownItem className="btn btn-white" ><Link to="/settings" >Lịch sử hình thành</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/settings" >Thành viên</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/settings" >Chính sách bảo mật</Link></DropdownItem> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé trong công viên</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé tập thể</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé dịch vụ</Link></DropdownItem>
            <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé tập thể dục</Link></DropdownItem>
          
          </Dropdown>
          <Link to="/su-kien" className="menu-item">SỰ KIỆN</Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src={Hinh2} alt="Đầm Sen Park" className="logo1" />
          <div className="bd">
            <div className="social-icons1">
              <a href="#"><img src={Hinh3} alt="fb" className="social-icon3" /></a>
              <a href="#"><img src={Hinh4} alt="youtube" className="social-icon3" /></a>
              <a href="#"><img src={Hinh5} alt="fb" className="social-icon3" /></a>
            </div>
          </div>
        </div>
          </div>
          <div className="col-md-10 right-side" style={{ 
            backgroundColor: "#E6FFD2",
            top: 0,
            right: 0,
            bottom: 0,
            width: '83%',
          }}>
            <div className="col-md-10 right-side" style={{ 
              backgroundColor: "#E6FFD2",
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              marginTop:-40
            }}>
    <div className="map-container bs3">
  <img src={Hinh6} alt="caijdo" />
  {infoData.map((info, index) => (
    <div key={index} style={{ 
      position: 'absolute', 
      top: `${info.top}px`, 
      left: `${info.left}px` 
    }}>
      <div className="info-wrapper"> {/* Thêm wrapper cho InfoComponent */}
        <InfoComponent 
          title={info.title} 
          content={info.content} 
        />
      </div>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Khampha;