import React from 'react';
import './sukien.css'; // Tệp CSS cho kiểu dáng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'; // Icon "Thời gian"
import Hinh from '../picture/logo ngang.png';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import { CustomFlowbiteTheme, Dropdown, DropdownItem } from "flowbite-react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Hinh2 from '../picture/Group17.png';
import Hinh3 from '../picture/png-transparent-facebook-icon-social-media-computer-icons-facebook-facebook-rectangle-logo-website.jpg';
import Hinh4 from '../picture/png-transparent-youtube-play-button-computer-icons-youtube-television-angle-rectangle.png'
import Hinh5 from '../picture/instagram-logos-png-images-free-download-11641669602cekuhoqisp.png';
import Hinh6 from '../picture/img@2x.png';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

interface Ride {
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

function Sukien() {
  const events: Event[] = [
    {
      id: 1,
      title: "Rất mát về Đầm Sen Special chơi cả 2 công viên",
      date: "05/11/2020",
      description: "Loại vé này gồm hai ngày gồm 2 công viên để du khách có thể đắm chìm vào niềm vui chào đón quầy hội chợ.",
      image: "event-image1.jpg", // Thay thế bằng đường dẫn đến hình ảnh
      link: "/event1" // Đường dẫn đến trang chi tiết sự kiện
    },
    {
      id: 2,
      title: "Sắp ra mắt Đầm Sen Lake Show cuối năm 2020",
      date: "05/11/2020",
      description: "Chỉ còn hơn 1 tháng nữa, Công viên văn hóa Đầm Sen sẽ ra mắt show ánh sáng hoành tráng diễn mãn nước trên hồ mát mẻ trên hồ lớn.",
      image: "event-image2.jpg", // Thay thế bằng đường dẫn đến hình ảnh
      link: "/event2" // Đường dẫn đến trang chi tiết sự kiện
    },
    // Thêm các sự kiện khác vào đây
  ];

  const rides: Ride[] = [
    {
      title: "Roller Coaster",
      date: "10/02/2020",
      description: "Cảm giác mạnh",
      image: "ride-image1.jpg", // Thay thế bằng đường dẫn đến hình ảnh
      link: "/ride1" // Đường dẫn đến trang chi tiết trò chơi
    },
    {
      title: "Vòng xoay khổng lồ",
      date: "11/02/2020",
      description: "Cảm giác mạnh",
      image: "ride-image2.jpg", // Thay thế bằng đường dẫn đến hình ảnh
      link: "/ride2" // Đường dẫn đến trang chi tiết trò chơi
    },
    // Thêm các trò chơi khác vào đây
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
            <Link to="/Sukien" className="menu-item">SỰ KIỆN</Link>
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
          top: 50,
          right: 0,
          bottom: 0,
          width: '83%',
          marginTop: -60,
        }}>
           <div style={{backgroundColor:"rgb(230, 255, 210)"}} >
      <header className="header" style={{padding:"40px"}}>
      <div className='container' style={{ color: '#259E58', textDecoration: 'underline',lineHeight:'102,14px',fontFamily:'Bangers'}}>
     <h1><b>SỰ KIỆN</b></h1> 
    </div>      
    </header>
   <div className='container bd01'>
  <div className="row">
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="images/dam-sen-special.jpg" className="card-img-top" alt="Dam Sen Special" />
       <div className="card-body">
  <h5 className="card-title">Ra mắt vé Đầm Sen Special chơi cả 2 công viên</h5>
  <p className="card-text">Loại vé này bao gồm cả 2 công viên để chào đón tháng hè đặc biệt của năm nay với chủ đề "quẩy hè đi, chờ chi!"</p>
  <div className="d-flex justify-content-between align-items-center">
  <div className="btn-group">
       
        <button type="button" className="btn btn-sm "style={{color:'#EC008C'}} > <FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
      </div>
    <a href="#" className="btn btn-sm btn-primary">Xem thêm</a>
  </div>
  <div className="text-left">
    <button type="button" className="btn btn-sm "><FontAwesomeIcon icon={faClock} /> 06/11/2020</button>
  </div>
</div>

      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="images/dam-sen-lake-show.jpg" className="card-img-top" alt="Dam Sen Lake Show" />
        <div className="card-body">
          <h5 className="card-title">Sắp ra mắt Đầm Sen Lake Show cuối năm 2020</h5>
          <p className="card-text">Chỉ còn hơn 1 tháng nữa, Công viên văn hóa Đầm Sen sắp ra mắt dự án Lake Show (biểu diễn nhạc nước trên hồ) trên mặt hồ lớn nh...</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Sự kiện</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">05/11/2020</button>
            </div>
            <a href="#" className="btn btn-sm btn-primary"> Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="images/le-hoi-cun-cung.jpg" className="card-img-top" alt="Lễ hội cún cưng" />
        <div className="card-body">
          <h5 className="card-title">Lễ hội cún cưng</h5>
          <p className="card-text">Ngày 27.10, hàng trăm chủ chó cưng đã tập trung tại khuôn viên Công viên văn hóa Đầm Sen (Q.11, TP.HCM) để tham gia "Lễ...</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Sự kiện</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">07/12/2018</button>
            </div>
            <a href="#" className="btn btn-sm btn-primary">Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="images/ngay-hoi-am-thuc-chay.jpg" className="card-img-top" alt="Ngày hội ẩm thực chay" />
        <div className="card-body">
          <h5 className="card-title">Ngày hội ẩm thực chay 2019 Đầm Sen: "Vu Lan báo hiếu"</h5>
          <p className="card-text">Du khách sẽ được thưởng thức hơn 100 món ăn chay, cùng các loại thức uống được chế biến theo chủ đề ẩm thực Sen</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Sự kiện</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">10/08/2019</button>
            </div>
            <a href="#" className="btn btn-sm btn-primary">Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="images/dam-sen-special.jpg" className="card-img-top" alt="Dam Sen Special" />
       <div className="card-body">
  <h5 className="card-title">Ra mắt vé Đầm Sen Special chơi cả 2 công viên</h5>
  <p className="card-text">Loại vé này bao gồm cả 2 công viên để chào đón tháng hè đặc biệt của năm nay với chủ đề "quẩy hè đi, chờ chi!"</p>
  <div className="d-flex justify-content-between align-items-center">
  <div className="btn-group">
       
        <button type="button" className="btn btn-sm "style={{color:'#EC008C'}} > <FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
      </div>
    <a href="#" className="btn btn-sm btn-primary">Xem thêm</a>
  </div>
  <div className="text-left">
    <button type="button" className="btn btn-sm "><FontAwesomeIcon icon={faClock} /> 06/11/2020</button>
  </div>
</div>

      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="images/dam-sen-lake-show.jpg" className="card-img-top" alt="Dam Sen Lake Show" />
        <div className="card-body">
          <h5 className="card-title">Sắp ra mắt Đầm Sen Lake Show cuối năm 2020</h5>
          <p className="card-text">Chỉ còn hơn 1 tháng nữa, Công viên văn hóa Đầm Sen sắp ra mắt dự án Lake Show (biểu diễn nhạc nước trên hồ) trên mặt hồ lớn nh...</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Sự kiện</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">05/11/2020</button>
            </div>
            <a href="#" className="btn btn-sm btn-primary"> Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="images/le-hoi-cun-cung.jpg" className="card-img-top" alt="Lễ hội cún cưng" />
        <div className="card-body">
          <h5 className="card-title">Lễ hội cún cưng</h5>
          <p className="card-text">Ngày 27.10, hàng trăm chủ chó cưng đã tập trung tại khuôn viên Công viên văn hóa Đầm Sen (Q.11, TP.HCM) để tham gia "Lễ...</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Sự kiện</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">07/12/2018</button>
            </div>
            <a href="#" className="btn btn-sm btn-primary">Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src="images/ngay-hoi-am-thuc-chay.jpg" className="card-img-top" alt="Ngày hội ẩm thực chay" />
        <div className="card-body">
          <h5 className="card-title">Ngày hội ẩm thực chay 2019 Đầm Sen: "Vu Lan báo hiếu"</h5>
          <p className="card-text">Du khách sẽ được thưởng thức hơn 100 món ăn chay, cùng các loại thức uống được chế biến theo chủ đề ẩm thực Sen</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Sự kiện</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">10/08/2019</button>
            </div>
            <a href="#" className="btn btn-sm btn-primary">Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer style={{ backgroundColor: "#259E58", color: "white" }}>
  <div className="" style={{ padding: "20px" }}>
    
    <div className="row" style={{ fontFamily: "Nunito", lineHeight: "27px", fontSize: "18px" }}>
      <div className="col-md-4">
      <h5 style={{ fontFamily: "Bangers", fontStyle: "italic" }}><b>TRỰC THUỘC</b></h5>
        <img src={Hinh} className="img-fluid" />
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
      </div>
    </div>
  
   
  
  );
}

export default Sukien;