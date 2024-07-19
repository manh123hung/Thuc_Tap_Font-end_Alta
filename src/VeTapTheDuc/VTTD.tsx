import React, { useEffect, useState } from 'react';
import './VTTD.css'; // Tệp CSS cho kiểu dáng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faCheck, faCheckCircle, faComment, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'; // Icon "Thời gian"
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import { CustomFlowbiteTheme, Dropdown, DropdownItem } from "flowbite-react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { firestore, storage } from '../firebase';
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import '@splidejs/react-splide/css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import Footer from '../Footer';
import tabs from '../tabs'; // Import mảng tabs



function VTTD() {
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
  const [logo1, setlogo1] = useState("");
  const [logo2, setlogo2] = useState("");
  const [logo3, setlogo3] = useState("");
  const [logo4, setlogo4] = useState("");
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [img4, setimg4]= useState("");
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
    const logo1= ref(storage, "png-transparent-facebook-icon-social-media-computer-icons-facebook-facebook-rectangle-logo-website.jpg");
    const logo2= ref(storage, "png-transparent-youtube-play-button-computer-icons-youtube-television-angle-rectangle.png");
    const logo3= ref(storage, "instagram-logos-png-images-free-download-11641669602cekuhoqisp.png");
    const logo4= ref(storage, "card/logo ngang.png");
    const img1= ref(storage, "GiaVe/image 468.png");
    const img2= ref(storage, "GiaVe/clock-five.png");
    const img3= ref(storage, "GiaVe/clock-five (1).png");
    const img4= ref(storage, "GiaVe/clock-five (2).png");

    Promise.all([
      getDownloadURL(logoRef),
      getDownloadURL(logo1),
      getDownloadURL(logo2),
      getDownloadURL(logo3),
      getDownloadURL(logo4),
      getDownloadURL(img1),
      getDownloadURL(img2),
      getDownloadURL(img3),
      getDownloadURL(img4),

    ])
      .then((urls) => {
        setLogoUrl(urls[0]);
        setlogo1(urls[1]);
        setlogo2(urls[2]);
        setlogo3(urls[3]);
        setlogo4(urls[4]);
        setimg1(urls[5]);
        setimg2(urls[6]);
        setimg3(urls[7]);
        setimg4(urls[8]);
      })
      .catch((error) => {
        console.log("Error getting URLs:", error);
      });
    const fetchData = async () => {
      try {
        const quanlyRef = await getDocs(collection(firestore, "TTD"));
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
      return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',position:"fixed",marginLeft:"1180px",marginTop:"600px",zIndex: 100 }}>
      <div className="button-container">
        <button className='bt12a'><span className='icon2'><FontAwesomeIcon icon={faPhone}color="green" /> </span></button>
        <button className='bt12a'><span className='icon2'><FontAwesomeIcon icon={faComment} color="green"/> </span></button>
      </div>
    </div>
        </>
      );
    
  };
  useEffect(() => {
    setRightSideContent(createRightSideContent());
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      // Khi menu ẩn đi, cập nhật rightSideContent thành nội dung của tab hiện tại
      setRightSideContent(
        <div style={{margin:"100px",position:"fixed",zIndex: 100}}>
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
        <div style={{marginTop:"25px",backgroundColor:"white",position:"fixed",zIndex: 100,width:"1240px"}}>
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
  }, [activeTab, showMenu]);

  return (
  <div className="bs">
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-3 left-side" style={{ width: '250px' }}>   
          <div className="left-side-content">
          <button className="menu-icon" style={{border:"none"}} onClick={toggleMenu}>
              {showMenu ? '≡' : 'x'}
            </button>          <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item">KHÁM PHÁ</Link>
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"white"}}>
          <Link to="/LSHH" > <DropdownItem className="btn btn-white" >Lịch sử hình thành</DropdownItem></Link>
          <Link to="/Thanhvien" > <DropdownItem className="btn btn-white" >Thành viên</DropdownItem></Link>
          <Link to="/BM" > <DropdownItem className="btn btn-white" >Chính sách bảo mật</DropdownItem> </Link>
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'black',textDecoration: 'underline'}}>
          <Link to="/GiaVe" >  <DropdownItem className="btn btn-white" >Vé trong công viên</DropdownItem></Link>
          <Link to="/VTT" >   <DropdownItem className="btn btn-white" >Vé tập thể</DropdownItem></Link>
          <Link to="/VDD" > <DropdownItem className="btn btn-white" >Vé dịch vụ</DropdownItem></Link>
          <Link to="/VTTD" >   <DropdownItem className="btn btn-white" >Vé tập thể dục</DropdownItem></Link>
          
          </Dropdown>
          <Link to="/Sukien" className="menu-item" >SỰ KIỆN</Link>
          <div  style={{marginTop:"200px"}}>
          <img src={logoUrl} alt="Đầm Sen Park" className="logo1" />
          <div className="bd">
            <div className="social-icons1">
              <Link to="#"><img src={logo1} alt="fb" className="social-icon3" /></Link>
              <Link to="#"><img src={logo2} alt="youtube" className="social-icon3" /></Link>
              <Link to="#"><img src={logo3} alt="fb" className="social-icon3" /></Link>
            </div>
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
           <div style={{backgroundColor:"rgb(230, 255, 210)"}} >
           {rightSideContent}

          <div className='container bd01'>
          <img src={img1} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>

          <header className="header" style={{padding:"40px"}}>
            
            <div className="row">
              <div className="col-8">
              <div  style={{ color: '#259E58', textDecoration: 'underline',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
            <b>{data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.Tieude}} />
                  </div>
                ))} </b>
            </div>
            </div>
            <div className="col-3">
              <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
                Mô tả
              </div>
              <div style={{borderBottom:"2px solid #EC008C"}}></div>
              <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>{data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.Mota}} />
                  </div>
                ))} </div>
            </div>
            </div>      
          
            </header>
            <div className="container">
              <div className='row'>
                <div className='col-9'>
            <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>{data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.Noidung}} />
                  </div>
                ))} </p></div>
            <div className='col-3'></div>
            </div>
          <div className="card-container">
          
            <div className="card card1  text-white" style={{border:"2px solid #259E58"}}>
            <div className="card-title text-container1 " ><img src={img2} alt="" /></div>
              <h2 className="card-title" style={{textAlign:"center",color:"#259E58"}}>{data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.TD1}} />
                  </div>
                ))} </h2>

              <div className="card-list">
              {data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.S1}} />
                  </div>
                ))}
              </div>
  
            </div>
            <div className="card card1 bg-pink text-white" style={{border:"2px solid #FF41B2"}}>
            <div className="card-title text-container2 " ><img src={img3} alt="" /></div>
              <h3 className="card-title " style={{textAlign:"center",color:"#FF41B2"}} >{data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.TD2}} />
                  </div>
                ))}</h3>
              <div className="card-list">
              {data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.S2}} />
                  </div>
                ))}                </div>
            </div>

            <div className="card card1 "  style={{border:"2px solid #3781DB"}}>
            <div className="card-title text-container3 " ><img src={img4} alt="" /></div>
              <h3 className="card-title " style={{color:"#3781DB",textAlign:"center"}} >{data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.TD3}} />
                  </div>
                ))}</h3>
              <div className="card-list">
                <p >{data.map((item, index) => (
                  <div key={index} >
                    <div  dangerouslySetInnerHTML={{ __html: item.S3}} />
                  </div>
                ))}</p>
          </div>

            </div>
          </div>
        </div>         
          <br />
        </div>
     </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  
   
  
  );
}

export default VTTD;