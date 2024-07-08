import React, { useEffect, useState } from 'react';
import './VTT.css'; // Tệp CSS cho kiểu dáng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faCheck, faCheckCircle, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
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


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';



function VDD() {
 

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
    const img1= ref(storage, "GiaVe/image 467.png");

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
     <b>VÉ DỊCH VỤ</b>
     </div>
     </div>
     <div className="col-3">
      <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
        Mô tả
       </div>
       <div style={{borderBottom:"2px solid #EC008C"}}></div>
       <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>Trải nghiệm các dịch vụ tiện ích của Đầm Sen ngay bạn nhé!</div>
     </div>
    </div>      
   
    </header>
 
  <div className='container' style={{padding:"20px",fontFamily:"Nunito"}}>
 
  <div className="content">
  <div className='dv1' > <h2>Dịch Vụ Xe Điện</h2></div>
  <div className="note">
 
      <FontAwesomeIcon 
        icon={faExclamationCircle} 
        className="my-exclamation-icon" 
      /> <span style={{color:"#DFA100"}}>Lưu ý: Không áp dụng Vé trọn gói Đầm Sen!</span> 
  </div>
  <p>Bên cạnh việc tham quan Đầm Sen bằng "đoàn tàu cổ tích" (bao gồm trong <Link to="/VTG" className="link">vé trọn gói</Link> và <Link to="" className='link'> vé Silver</Link>), du khách có thể thưởng ngoạn bằng dịch vụ xe điện riêng của Đầm Sen. Tuy vào loại vé, hành trình xe điện sẽ đưa quý khách từ trạm đón (khu <a href="#" className="link">trò chơi cảm giác mạnh</a> ở quảng trường Âu Lạc), đi quanh Hồ Đầm Sen, tham quan vườn chim thú B, và về vườn Lan rừng để ngắm những loài hoa đẹp nhất tại Đầm Sen.</p>
  <table>
    <thead>
      <tr>
        <th>Loại hình</th>
        <th>Số người</th>
        <th>Số tiền</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Happy car</td>
        <td>1 - 5</td>
        <td>150.000 đồng/30 phút</td>
      </tr>
      <tr>
        <td>Family car</td>
        <td>6 - 7</td>
        <td>200.000 đồng/30 phút</td>
      </tr>
      <tr>
        <td>Friendly car</td>
        <td>8 - 10</td>
        <td>250.000 đồng/30 phút</td>
      </tr>
      <tr>
        <td>Family car</td>
        <td>11 - 12</td>
        <td>300.000 đồng/30 phút</td>
      </tr>
      <tr>
        <td>Cung đường</td>
        <td>1 - 5</td>
        <td>50.000 đồng/chuyến</td>
      </tr>
    </tbody>
  </table>
  <div className='dv1' > <h2>Dịch Vụ Cho Thuê</h2></div>
  <div className="note">
  <FontAwesomeIcon 
        icon={faExclamationCircle} 
        className="my-exclamation-icon" 
      /> <span style={{color:"#DFA100"}}>Lưu ý: Tiền thế chân từ 300.000 đồng đến 500.000 đồng + CMND</span>
  </div>
  <table>
    <thead>
      <tr>
        <th>Cho thuê</th>
        <th>Giá Xe</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Xe đẩy</td>
        <td>50.000 đồng/lần (Cỡ nhỏ)
          <br /> 80.000 đồng/lần (Cỡ lớn)</td>
      </tr>
      <tr>
        <td>Xe nôi</td>
        <td>80.000 đồng/lần (Cỡ nhỏ)
          <br /> 120.000 đồng/lần (Cỡ lớn)</td>
      </tr>
      <tr>
        <td>Xe lăn</td>
        <td>100.000 đồng/lần</td>
      </tr>
      <tr>
        <td>Tủ giữ đồ</td>
        <td>20.000 đồng/hộc tủ/lần</td>
      </tr>
    </tbody>
  </table>
  <h3 style={{color:"#EC008C"}}>GHI CHÚ:</h3>
  <p>Vé dịch vụ này không bao gồm trong các loại vé cổng, hay vé trọn gói, cũng như Silver. Để biết thêm về những loại vé này, xin vui lòng xem <a href="#" className="link">tại đây</a>.</p>
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

export default VDD;