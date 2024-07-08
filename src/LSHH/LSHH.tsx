import React, { useEffect, useState } from 'react';
import './LSHH.css'; // Tệp CSS cho kiểu dáng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons';
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



function LSHH() {
 

  const [logoUrl, setLogoUrl] = useState("");
  const [logo1, setlogo1] = useState("");
  const [logo2, setlogo2] = useState("");
  const [logo3, setlogo3] = useState("");
  const [logo4, setlogo4] = useState("");
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [img4, setimg4] = useState("");
  const [img5, setimg5] = useState("");
  const [img6, setimg6] = useState("");
  const [img7, setimg7] = useState("");

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
    const img1= ref(storage, "LSHH/Rectangle 1499.png");
    const img2= ref(storage, "LSHH/Group 19.png");
    const img3= ref(storage, "LSHH/Rectangle 1506.png");
    const img4= ref(storage, "LSHH/Rectangle 1506 (1).png");
    const img5= ref(storage, "LSHH/Rectangle 1506 (2).png");
    const img6= ref(storage, "LSHH/Rectangle 1506 (3).png");
    const img7= ref(storage, "LSHH/Rectangle 1506 (4).png");

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
      getDownloadURL(img5),
      getDownloadURL(img6),
      getDownloadURL(img7),

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
        setimg5(urls[9]);
        setimg6(urls[10]);
        setimg7(urls[11]);
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
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',textDecoration: 'underline', color: 'black'}}>
          <DropdownItem className="btn btn-white" ><Link to="/LSHH" >Lịch sử hình thành</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Thành viên</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/settings" >Chính sách bảo mật</Link></DropdownItem> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
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

   <header className="header" style={{padding:"20px"}}>
    
    <div className="row">
      <div className="col-8">
      <div  style={{ color: '#259E58', textDecoration: 'underline',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
     <b>Lịch sử Hình Thành</b>
     </div>
     </div>
     <div className="col-4">
      <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
        Mô tả
       </div>
       <div style={{borderBottom:"2px solid #EC008C"}}></div>
       <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>Đầm Sen là một trong những điểm bắn pháo hoa trong các sự kiện lớn của cả nước.</div>
     </div>
    </div>      
   
    </header>
    <div className='container'>
    <div className='row' style={{fontSize:"18px",padding:"30px"}} >
      <div className='col-7' style={{fontSize:"17px"}}>
    <p>Lịch sử hình thành CVVH Đầm Sen bắt đầu sau ngày đất nước thống nhất. Lúc bấy giờ, Đầm Sen còn là một khu ruộng hoang đầm lầy. Nơi đó chỉ toàn những đụn rau muống, rau ngổ, cây cỏ rậm rịt. Đồng thời đây cũng là nơi chứa các tệ nạn xã hội</p>
    <p> Ngày 15/2/1976, Thành ủy – UBND TP.HCM ra lời kêu gọi “Hãy xây dựng cho thành phố 3 công viên văn hóa lớn, một tại Bình Tiên, một tại Tân Bình và một tại Đầm Sen”. Hàng triệu công nhân lao động đã tham gia. Công viên Đầm Sen được khởi công như thế trên diện tích 55ha. Từ một đầm lầy hôm nào, đã sớm trở thành một hồ nước sạch, với cảnh quan thoáng mát cho người dân thành phố.</p>
    </div>
    </div>
    <div className='col-4'></div>
    <div className="header" style={{padding:"40px"}}>
      
      <div className='container' style={{ color: '#EC008C', textDecoration: 'underline',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"26px",}}>
     <b>CÁC MỐC SON PHÁT TRIỂN</b>
     </div>
     <div className='row'>
      <div className='col-7'> <ul>
    <li>Năm 1977 – 1983: Đầm Sen do Thành Phố quản lý. Sau đó, 8/9/1983 Thành Phố giao cho Quận 11 quản lý (55ha, theo quyết định 325/QĐ-UB).</li>
<li>Quyết định 215/QĐ-UB ngày 25/5/1984 giao Đầm Sen về các đơn vị: Ban xây dựng nhà đất và công trình quận 11, Xí nghiệp quốc doanh nuôi trồng thủy sản và Công ty ăn uống và dịch vụ tổng hợp quận 11. Do khó khăn chung và thiếu vốn xây dựng. Đầm Sen chỉ đáp ứng được nhu cầu kinh tế là hồ nuôi cá thịt với một số cây rất ít, chưa hình thành là một công viên.</li>
<li>Năm 1985: Quận 11 ra quyết định 108/QĐ-UB thống nhất giao Đầm Sen cho Công ty Dịch vụ Văn hóa Tổng hợp quận 11 và có đại diện Xí nghiệp nuôi trồng thủy sản để thành lập ban quản lý Đầm Sen.</li>
<li>Năm 1989: Công ty du lịch quận 11, tức Công ty Dịch vụ Du lịch Phú Thọ ngày nay được giao quản lý Đầm Sen, xí nghiệp nuôi trồng thủy sản giải thể do làm ăn thua lỗ.</li>
<li>Từ đó CÔNG VIÊN VĂN HÓA ĐẦM SEN, một đơn vị trực thuộc công ty Du lịch Dịch vụ Phú Thọ Quận 11, từ khi đi vào hoạt động là một khu vui chơi giải trí tới nay, đã có những bước phát triễn mạnh mẽ, trở thành một công viên rộng lớn và hiện đại bậc nhất hiện nay ở TP. HCM, trở thành một công viên văn hóa và du lịch đi đầu và thành công nhất trong cả nước. Từ đầu năm 2003, Công Viên Văn Hóa Đầm Sen chính thức là thành viên của Tổng Công Ty Du Lịch Sài Gòn (Saigontourist). Đó là nhờ sự quan tâm tập trung đầu tư và năng động của ban giám đốc công ty Du lịch Phú Thọ, sự quản lý sang suốt của BGĐ và tập thể cán bộ – công nhân viên có tinh thần trách nhiệm và dày dạn kinh nghiệm làm việc.</li>  
    </ul>  </div>
      <div className='col-4'></div>
     </div>

      
    </div>
    <img src={img2} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
<div className="container mt-5">
  <h2 className="text-center" style={{color:"#EC008C",lineHeight:"53.2px",fontFamily:"Bangers"}}> <b> NHỮNG LOẠI HÌNH DỊCH VỤ TRONG TÂM</b></h2>
  <div className="row">
    <div className="col-md-4 service-card">
      <img src={img3} alt="Trò Chơi" />
      <div className='wt'> <h4 style={{color:"#259E58",lineHeight:"42.56px",}}> <b> TRÒ CHƠI</b></h4>
        <p style={{color:"#666666"}}>Lịch sử hình thành CVVH gắn liền với sự phát triển hơn 50 trò chơi. Từ thư giãn đến cảm giác mạnh, phân bổ đều khắp khuôn viên Đầm Sen.
        </p></div>
     
    </div>
    <div className="col-md-4 service-card">
      <img src={img4} alt="Sự Kiện" />
      <div className='wt'> <h4 style={{color:"#4293FA",lineHeight:"42.56px",}}> <b>SỰ KIỆN</b></h4>
        <p style={{color:"#666666"}}>Là nơi tổ chức nhiều kỷ lục Việt Nam như kỷ lục bánh tét, bánh chưng, bánh Noel… Các sự kiện văn hóa lớn như lễ hội: bắn pháo hoa, Cosplay, khinh khí cầu, xe cổ…
        </p></div>
     
    </div>
    <div className="col-4 service-card">
      <img src={img5} alt="Cảnh Trí" />
      <div className='wt'><h4 style={{color:"#E931C3",lineHeight:"42.56px",}}> <b>CẢNH TRÍ</b></h4>
        <p style={{color:"#666666"}}>Với đủ loại cây xanh, từ bon sai kiểng cổ đến nhiều loài kì hoa dị thảo với các khu vườn xanh mát: Vườn Nam Tú thượng Uyển, Đảo Lan Rừng, Vườn Xương Rồng, Vườn Hoa Châu Âu…
        </p></div>
      
    </div>

    <div className="col-4 service-card">
      <img src={img6} alt="Chim Cảnh, Cá Cảnh" />
      <div className='wt'>
        <h4 style={{color:"#FFA034",lineHeight:"42.56px",}}> <b>CHIM THÚ</b></h4>
        <p style={{color:"#666666"}}>Hơn 100 chủng loại, bao gồm động vật nuôi trồng, động vật hoang dã và động vật quý hiếm: đười ươi, voi, trăng, cá sấu, đà điểu, hưu sao, giang sen…
        </p>
</div>
      
    </div>
    <div className="col-md-4 service-card" >
      <img src={img7} alt="Ẩm Thực" />
      <div className='wt'>
      <h4 style={{color:"#31C996",lineHeight:"42.56px",}}> <b>ẨM THỰC</b></h4>
        <p style={{color:"#666666"}}>Được biết đến với nhà hàng Thủy Tạ, và cà phê Vườn Đá. Chuyên phục vụ các món ăn Hoa – Việt, với đội ngũ đầu Bếp kinh nghiệm lâu năm trong ngành.
        </p>
        </div>
    </div>
   
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

export default LSHH;