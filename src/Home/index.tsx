// App.tsx
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './index2.css';

import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { firestore } from './../firebase';


import { CustomFlowbiteTheme, Dropdown, DropdownItem } from "flowbite-react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
 // Import ButtonDropdown component
 import { storage } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPhone } from '@fortawesome/free-solid-svg-icons';
import tabs from '../tabs'; // Import mảng tabs




function AppContent() {
  interface Tab {
    id: string;
    label: string;
    content: JSX.Element;
  }
  const [activeTab, setActiveTab] = useState<string>('troChoi');


  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  const [logoUrl, setLogoUrl] = useState("");
  const [slide1, setSlide1] = useState("");
  const [slide2, setSlide2] = useState("");
  const [logo1, setlogo1] = useState("");
  const [logo2, setlogo2] = useState("");
  const [logo3, setlogo3] = useState("");
    const navigate = useNavigate();
    const [data, setData] = useState<DocumentData[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [download, setDownload] = useState('');
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        setFile(event.target.files[0]);
      }};
  
    useEffect(() => {
      //lay anh
      const logoRef = ref(storage, "Group17.png");
      const slide1= ref(storage, "Rectangle1524.png");
      const slide2= ref(storage, "img@2x.png");
      const logo1= ref(storage, "png-transparent-facebook-icon-social-media-computer-icons-facebook-facebook-rectangle-logo-website.jpg");
      const logo2= ref(storage, "png-transparent-youtube-play-button-computer-icons-youtube-television-angle-rectangle.png");
      const logo3= ref(storage, "instagram-logos-png-images-free-download-11641669602cekuhoqisp.png");
      Promise.all([
        getDownloadURL(logoRef),
        getDownloadURL(slide1),
        getDownloadURL(slide2),
        getDownloadURL(logo1),
        getDownloadURL(logo2),
        getDownloadURL(logo3),
      ])
        .then((urls) => {
          setLogoUrl(urls[0]);
          setSlide1(urls[1]);
          setSlide2(urls[2]);
          setlogo1(urls[3]);
          setlogo2(urls[4]);
          setlogo3(urls[5]);
        })
        .catch((error) => {
          console.log("Error getting URLs:", error);
        });
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
  const [showMenu, setShowMenu] = useState(true);
  const [rightSideContent, setRightSideContent] = useState<React.ReactNode>(null); // Khởi tạo bằng null
  const createRightSideContent = () => {
    if (slide1 && slide2 && logoUrl) { // Kiểm tra xem hình ảnh đã được tải về chưa
      return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',position:"fixed",marginLeft:"1180px",marginTop:"600px" }}>
      <div className="button-container">
        <button className='bt12a'><span className='icon2'><FontAwesomeIcon icon={faPhone}color="green" /> </span></button>
        <button className='bt12a'><span className='icon2'><FontAwesomeIcon icon={faComment} color="green"/> </span></button>
      </div>
      </div>
          <div className="map-container bs1">
            <Splide aria-label="My Favorite Images">
              <SplideSlide>
                <img src={slide1} alt="Đầm Sen Park" />
                <Link to="/khampha">
                  <button className="btn btn-success kham-pha-button">
                    KHÁM PHÁ NGAY
                  </button>
                </Link>
              </SplideSlide>
              <SplideSlide>
                <img src={slide2} alt="Đầm Sen Park" />
                <Link to="/khampha">
                  <button className="btn btn-success kham-pha-button">
                    KHÁM PHÁ NGAY
                  </button>
                </Link>
              </SplideSlide>
            </Splide>
          </div>
          <img src={logoUrl} alt="Đầm Sen Park2" className="hg" />
        </>
      );
    } else {
      return null; 
    }
  };
  useEffect(() => {
    setRightSideContent(createRightSideContent());
  }, [slide1, slide2, logoUrl]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      // Khi menu ẩn đi, cập nhật rightSideContent thành nội dung của tab hiện tại
      setRightSideContent(
        <div style={{margin:"100px"}}>
          <table style={{ width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                {tabs.map((tab) => (
                  <th
                    key={tab.id}
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      backgroundColor: tab.id === activeTab ? '#e6e6e6' : 'inherit'
                    }}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </th>
                ))}
              </tr>
            </thead>
          </table>

          <div >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      );
    } else {
      // Khi menu hiển thị, cập nhật rightSideContent thành nội dung slide
      setRightSideContent(createRightSideContent());
    }
  };

  // Sử dụng useEffect để cập nhật rightSideContent khi activeTab thay đổi
  useEffect(() => {
    if (!showMenu) {
      setRightSideContent(
        <div style={{marginTop:"25px",backgroundColor:"white"}}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{borderBottom:"1px solid black"}}>
              {tabs.map((tab) => (
                <th
                  key={tab.id}
                  style={{
                    padding: '10px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    backgroundColor: "white",
                    border: "none", // Loại bỏ border
                    color: tab.id === activeTab ? '#EC008C' : 'inherit', 
                    borderBottom: tab.id === activeTab ? '2px solid #EC008C' : 'none', // Giữ nguyên borderBottom
                  }}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}

                </th>

              ))}
              
            </tr>
            
          </thead>
        </table>
      
        <div>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div> 
      );
    } else {
      setRightSideContent(createRightSideContent());
    }
  }, [activeTab, showMenu]); // Phụ thuộc vào activeTab và showMenu

  return (
   <div className="bs">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 left-side" style={{ width: '250px' }}>
      <div className="left-side-content">
      <button className="menu-icon" style={{border:"none"}} onClick={toggleMenu}>
              {showMenu ? '≡' : 'x'}
            </button>
                      <Link to="/" className="menu-item" style={{ textDecoration: 'underline', color: 'black' }}>TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item">KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
          <Link to="/LSHH" > <DropdownItem className="btn btn-white" >Lịch sử hình thành</DropdownItem></Link>
          <Link to="/Thanhvien" > <DropdownItem className="btn btn-white" >Thành viên</DropdownItem></Link>
          <Link to="/BM" > <DropdownItem className="btn btn-white" >Chính sách bảo mật</DropdownItem> </Link> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
          <Link to="/GiaVe" >  <DropdownItem className="btn btn-white" >Vé trong công viên</DropdownItem></Link>
          <Link to="/VTT" >   <DropdownItem className="btn btn-white" >Vé tập thể</DropdownItem></Link>
          <Link to="/VDD" > <DropdownItem className="btn btn-white" >Vé dịch vụ</DropdownItem></Link>
          <Link to="/VTTD" >   <DropdownItem className="btn btn-white" >Vé tập thể dục</DropdownItem></Link>
          
          </Dropdown>
          <Link to="/Sukien" className="menu-item">SỰ KIỆN</Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src={logoUrl} alt="Đầm Sen Park" className="logo1" />
          <div className="bd">
            <div className="social-icons1">
              <a href="#"><img src={logo1} alt="fb" className="social-icon3" /></a>
              <a href="#"><img src={logo2} alt="youtube" className="social-icon3" /></a>
              <a href="#"><img src={logo3} alt="fb" className="social-icon3" /></a>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-md-10 right-side" style={{
        backgroundColor: "#E6FFD2",
        top: 50,
        right: 0,
        bottom: 0,
        width: '83%',
        marginTop: -60,
      }}>
      {rightSideContent}

      </div>
    </div>
  </div>
</div>
  );
}
export default AppContent;