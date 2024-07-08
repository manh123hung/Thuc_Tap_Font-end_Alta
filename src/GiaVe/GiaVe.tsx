import React, { useEffect, useState } from 'react';
import './GV.css'; // Tệp CSS cho kiểu dáng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faCheck, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
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



function GiaVe() {
 

  const [logoUrl, setLogoUrl] = useState("");
  const [logo1, setlogo1] = useState("");
  const [logo2, setlogo2] = useState("");
  const [logo3, setlogo3] = useState("");
  const [logo4, setlogo4] = useState("");
  const [img1, setimg1] = useState("");

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
    const img1= ref(storage, "GiaVe/image 466.png");

    Promise.all([
      getDownloadURL(logoRef),
      getDownloadURL(logo1),
      getDownloadURL(logo2),
      getDownloadURL(logo3),
      getDownloadURL(logo4),
      getDownloadURL(img1),


    ])
      .then((urls) => {
        setLogoUrl(urls[0]);
        setlogo1(urls[1]);
        setlogo2(urls[2]);
        setlogo3(urls[3]);
        setlogo4(urls[4]);
        setimg1(urls[5]);

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
  

  return (
  <div className="bs">
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-3 left-side" style={{ width: '250px' }}>   
          <div className="left-side-content">
          <div className="menu-icon">≡</div>
          <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item">KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"white"}}>
          <DropdownItem className="btn btn-white" ><Link to="/LSHH" >Lịch sử hình thành</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Thành viên</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/settings" >Chính sách bảo mật</Link></DropdownItem> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'black',textDecoration: 'underline'}}>
          <DropdownItem className="btn btn-white" ><Link to="/GiaVe" >Vé trong công viên</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/VTT" >Vé tập thể</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/VDD" >Vé dịch vụ</Link></DropdownItem>
            <DropdownItem className="btn btn-white" ><Link to="/VTTD" >Vé tập thể dục</Link></DropdownItem>
          
          </Dropdown>
          <Link to="/Sukien" className="menu-item" >SỰ KIỆN</Link>
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
           <div style={{backgroundColor:"rgb(230, 255, 210)"}} >
     
   <div className='container bd01'>
   <img src={img1} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>

   <header className="header" style={{padding:"40px"}}>
    
    <div className="row">
      <div className="col-8">
      <div  style={{ color: '#259E58', textDecoration: 'underline',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
     <b>VÉ TRONG CÔNG VIÊN</b>
     </div>
     </div>
     <div className="col-3">
      <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
        Mô tả
       </div>
       <div style={{borderBottom:"2px solid #EC008C"}}></div>
       <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>Đầm Sen là điểm check-in được ưa chuộng của giới trẻ hiện nay.</div>
     </div>
    </div>      
   
    </header>
    <div className="container">
  <div className="card-container">
    <div className="card card1  text-white" style={{border:"2px solid #259E58"}}>
      <h2 className="card-title text-container1">VÉ THAM QUAN</h2>
      <ul className="card-list">
        <li>      <FontAwesomeIcon icon={faCheck} color="green" /> Tham quan trong ngày</li>
        <li className="strikethrough">
        <FontAwesomeIcon icon={faTimes} color="red" /> Bao gồm trò chơi
      </li>
      <li className="strikethrough">
        <FontAwesomeIcon icon={faTimes} color="red" /> Dịch vụ xe điện
      </li>
      </ul>
      <div className="card-price">
        <p><b>Mua từ công:</b></p>
        <p>+ 120.000 VNĐ/người (&gt;1.4m)</p>
        <p>+ 80.000 VNĐ/trẻ em (&lt;1.4m)</p>
        <p><b>Mua từ công Công Viên Nước:</b></p>
        <p>+ 80.000 VNĐ/người (&gt;1.4m)</p>
        <p>+ 50.000 VNĐ/trẻ em (&lt;1.4m)</p>
      </div>
    </div>
    <div className="card card1 bg-pink text-white" style={{border:"2px solid #FF41B2"}}>
      <h2 className="card-title text-container2 " >VÉ TRỌN GÓI</h2>
      <ul className="card-list">
        <li> <FontAwesomeIcon icon={faCheck} color="green" /> Tham quan trong ngày</li>
        <li> <FontAwesomeIcon icon={faCheck} color="green" /> Bao gồm trò chơi</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" /> Thủy cung</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" /> Dịch vụ xe điện</li>
      </ul>
      <div className="card-price">
        <p>Mua từ công:</p>
        <p>+ 260.000 VNĐ/người (&gt;1.4m)</p>
        <p>+ 180.000 VNĐ/người (&lt;1.4m)</p>
        <p>Mua từ công Công Viên Nước:</p>
        <p>+ 220.000 VNĐ/người (&gt;1.4m)</p>
        <p>+ 150.000 VNĐ/người (&lt;1.4m)</p>
        <p>Mua trong Công Viên:</p>
        <p>+ 150.000 VNĐ/người</p>
      </div>
    </div>
    <div className="card card1 "  style={{border:"2px solid #3781DB"}}>
      <h2 className="card-title text-container3" >VÉ SILVER</h2>
      <ul className="card-list">
        <li><FontAwesomeIcon icon={faCheck} color="green" /> Tham quan trong ngày</li>
        <li><FontAwesomeIcon icon={faCheck} color="green" /> Bao gồm trò chơi</li>
        <li><FontAwesomeIcon icon={faCheck} color="green" /> Lối đi riêng</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" /> Thủy cung</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" />Massage cá</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" /> Dịch vụ xe điện</li>
      </ul>
      <div className="card-price">
        <p>Mua từ công:</p>
        <p>+ 380.000 VNĐ/người (&gt;1.4m)</p>
        <p>+ 240.000 VNĐ/trẻ em (&lt;1.4m)</p>
        <p>Mua từ công Công Viên Nước:</p>
        <p>+ 340.000 VNĐ/người (&gt;1.4m)</p>
        <p>+ 220.000 VNĐ/trẻ em (&lt;1.4m)</p>
        <p>Mua trong Công Viên:</p>
        <p>+ 280.000 VNĐ/người</p>
      </div>
    </div>
  </div>
</div>
      <div className='container' style={{padding:"20px"}}>
      <h2 className="ghi-chu">GHI CHÚ:</h2>

<ul style={{color:"#858585",fontSize:"18px"}}>
  <li className="list-item"><b>Giờ bán vé:</b> 8 giờ 00 - 17 giờ 30</li>
  <li className="list-item"><b>Vé mua từ cổng:</b> là vé được bán tại 2 cổng chính số 1A Lạc Long Quân (hoặc số 3 Hòa Bình), cổng số 2 (nhà hàng Thủy Tạ).</li>
  <li className="list-item"><b>Vé mua trong công viên:</b> là loại vé được bán tại các quầy trong công viên. Đây là các loại vé trọn gói đã được trừ vé vào cổng của quý khách.</li>
  <li className="list-item"><b>Vé từ cổng Công viên nước:</b> là loại vé bán từ cổng liên thông phía công viên nước. Đây là vé dành cho các du khách vui chơi phía công viên nước, và muốn sang CVVH Đầm Sen.</li>
  <li className="list-item"><b>&gt;1.4m:</b> người cao trên 1.4m</li>
  <li className="list-item"><b>&lt;1.4m: </b>người cao dưới 1.4m</li>
  <li className="list-item"><b>Trẻ em dưới 1m được miễn phí</b> (nhưng phải đi cùng với người lớn).</li>
  <li className="list-item"><b>Có vé mời, được giảm 50% vé trọn gói</b> (áp dụng mua từ cổng).</li>
</ul>

      </div>

  

</div>

     </div>
     
          </div>
          <footer style={{ backgroundColor: "#259E58", color: "white" }}>
  <div className="" style={{ padding: "20px" }}>
    
    <div className="row" style={{ fontFamily: "Nunito", lineHeight: "27px", fontSize: "18px" }}>
      <div className="col-md-4">
      <h5 style={{ fontFamily: "Bangers", fontStyle: "italic" }}><b>TRỰC THUỘC</b></h5>
        <img src={logo4} className="img-fluid" />
      </div>
      <div className="col-md-4" style={{ textAlign: "left" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><h5 style={{ fontFamily: "Bangers", fontStyle: "italic" }}><b>LIÊN HỆ</b></h5>          </li>
          <li style={{ marginBottom: "5px" }}>
            <i className="fas fa-map-marker-alt" style={{ color: "white", marginRight: "5px" }}></i>
            03 Hòa Bình, Phường 3, Quận 11
          </li>
          <li style={{ marginBottom: "5px" }}>
            <i className="fas fa-phone-alt" style={{ color: "white", marginRight: "5px" }}></i>
            0839 632 394
          </li>
          <li style={{ marginBottom: "5px" }}>
            <i className="fas fa-envelope" style={{ color: "white", marginRight: "5px" }}></i>
            phuthotouristquan11@gmail.com
          </li>
          <br />
          <h5 style={{ color: "white" }}><b> GIỜ MỞ CỬA</b></h5>

          </ul>

          <ul style={{  padding: 0 }}>

           <li>Ngày thường: <b>8h00 - 18h00</b> (bán vé 7h30 - 16h00)</li>
            <li>Cuối tuần + Lễ: <b>7h30 - 21h00</b> (bán vé từ 7h30 - 19h00)</li>
             <li>Công viên nghỉ <b>thứ 3</b> hàng tuần</li> 
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <h5 style={{ fontFamily: "Bangers", fontStyle: "italic" }}><b>CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST</b></h5>        
          <li>Công ty CP DVDL Phú Thọ</li>
          <li>Khu du lịch sinh thái Vàm Sát</li>
          <li>Khách sạn Ngọc Lan</li>
          <li>Khách sạn Phú Thọ</li>
          <li>Trung tâm Du lịch Đầm Sen</li>
          <li>Cà phê Vườn Đá</li>
        </ul>
      </div>
    </div>
   
    <div className="row" style={{ textAlign: "center", marginTop: "10px" }}>
    <hr  style={{color:"white"}}/>
      <p style={{ fontFamily: "Nunito", fontSize: "14px" }}>Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</p>
    </div>
  </div>
</footer>
        </div>
      </div>
    </div>
  
   
  
  );
}

export default GiaVe;