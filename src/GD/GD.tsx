import React, { useEffect, useState } from 'react';
import './GD.css'; // Tệp CSS cho kiểu dáng
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



function GD() {
 

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
  const [img8, setimg8] = useState("");
  const [img9, setimg9] = useState("");
  const [img10, setimg10] = useState("");
  const [img11, setimg11] = useState("");
  const [img12, setimg12] = useState("");
  const [img13, setimg13] = useState("");
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
    const img1= ref(storage, "GD/Rectangle 5.png");
    const img2= ref(storage, "GD/image 173.png");
    const img3= ref(storage, "GD/258787163_4881329661878748_5512688205075365216_n 1.png");
    const img4= ref(storage, "GD/Vườn-đá-Café 1.png");
    const img5= ref(storage, "GD/Ellipse 36.png");
    const img6= ref(storage, "GD/sen 1.png");
    const img7= ref(storage, "GD/Group.png");
    const img8= ref(storage, "GD/Frame.png");
    const img9= ref(storage, "GD/Frame (1).png");
    const img10= ref(storage, "GD/Frame (2).png");
    const img11= ref(storage, "GD/clock-five.png");
    const img12= ref(storage, "GD/clock-five (1).png");
    const img13= ref(storage, "GD/clock-five (2).png");

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
      getDownloadURL(img8),
      getDownloadURL(img9),
      getDownloadURL(img10),
      getDownloadURL(img11),
      getDownloadURL(img12),
      getDownloadURL(img13),

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
        setimg8(urls[12]);
        setimg9(urls[13]);
        setimg10(urls[14]);
        setimg11(urls[15]);
        setimg12(urls[16]);
        setimg13(urls[17]);
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
  <DropdownItem className="btn btn-white" ><Link to="/BM" >Chính sách bảo mật</Link></DropdownItem> 
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
    
  
     
      <div  style={{ color: '#259E58' ,lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",textAlign:"center"}}>
     <b style={{borderBottom:"2px solid #259E58"}}>ĐẦM SEN THẾ GIỚI TUYỆT VỜI</b>
     </div>
    
    
   
     
   
    </header>
    <div >
   <div className="container ct02">
  <div className="image-container2">
    <img src={img1} alt="Vượn má vàng" />

  </div>
  <div className="section pink" style={{padding:"50px",backgroundColor:"#259E58"}}>
    <h2 >Hơn 30 trò chơi</h2>
    <p >Công viên Văn hóa Đầm Sen có 13 trò chơi cảm giác mạnh (Tàu lượn siêu tốc, vượt thác, Power Surge…); 5 trò chơi tương tác ảo công nghệ hiện đại; 5 trò chơi thư giãn; 12 trò chơi thiếu nhi; và nhiều trò chơi khác.</p>
    <p><Link to="/" className="btn btn-white" style={{color:"#259E58",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>

  </div>

</div>
<p style={{ fontSize: '0.8em',color:"#666666",marginLeft:"420px",marginTop:"-50px"}}>Vườn đến má vàng tại Công viên Văn hóa Đầm Sen.</p>

  
   <div className="container ct01">
  <div className="image-container">
    <img src={img2} alt="Vượn má vàng" />

  </div>
  <div className="section pink" style={{padding:"50px"}}>
    <h2 >Nhiều loại thú quý hiếm</h2>
    <p >Đầm Sen còn được biết đến như vườn thú có thể nuôi sinh sản được các loài động vật quý hiếm (thuộc sách đỏ) như: đười ươi Sumatra (sinh sản 2 lần), vượn má vàng; chim giá đẫy, chim Giang Sen... Ngoài ra còn có một hồ Thủy cung với các loài thủy sinh vật biển và cá Amazon phong phú, như cá mập, cá Hai tượng (2 mét)...</p>
    <p><Link to="/" className="btn btn-white" style={{color:"#EC008C",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>

  </div>

</div>
<p style={{ fontSize: '0.8em',color:"#666666",marginLeft:"550px",marginTop:"-50px"}}>Vườn đến má vàng tại Công viên Văn hóa Đầm Sen.</p>
</div>
<div >
   <div className="container ct02">
  <div className="image-container2">
    <img src={img3} alt="Vượn má vàng" />

  </div>
  <div className="section pink" style={{padding:"50px",backgroundColor:"#259E58"}}>
    <h2 >Nhà hàng Thủy Tạ Đầm Sen</h2>
    <p >Ẩm thực trong Công viên Văn hóa Đầm Sen gồm nhiều món ăn đường phố trong công viên, đặc biệt là nhà hàng Thủy Tạ, với không gian thưởng thức ẩm thực bên hồ.</p>
    <p><Link to="/" className="btn btn-white" style={{color:"#259E58",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>

  </div>

</div>
<p style={{ fontSize: '0.8em',color:"#666666",marginLeft:"420px",marginTop:"-50px"}}>Vườn đến má vàng tại Công viên Văn hóa Đầm Sen.</p>

  
   <div className="container ct01">
  <div className="image-container">
    <img src={img4} alt="Vượn má vàng" />

  </div>
  <div className="section pink" style={{padding:"50px"}}>
    <h2 >Cà phê Vườn Đá</h2>
    <p >Cà phê Vườn đá có không gian rộng, và nhiều cây xanh tại Sài Gòn. Đặc biệt, trong khuôn viên cà phê có một bộ sưu tập đá khổng lồ, với nhiều hình dáng kỳ dị theo nhãn quan của mỗi người. Buổi sáng thứ bảy và chủ nhật, quán thường đông khách do có nhạc sống, với những ca khúc bất hủ của thập niên 70-80, do các ban nhạc chuyên nghiệp TP.HCM biểu diễn.</p>
    <p><Link to="/" className="btn btn-white" style={{color:"#EC008C",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>

  </div>

</div>
<p style={{ fontSize: '0.8em',color:"#666666",marginLeft:"550px",marginTop:"-50px"}}>Vườn đến má vàng tại Công viên Văn hóa Đầm Sen.</p>
</div>

<div className="container mt-5" >
  <h2 className="text-center" style={{color:"#EC008C",lineHeight:"53.2px",fontFamily:"Bangers"}}> <b> NHỮNG LOẠI HÌNH DỊCH VỤ TRONG TÂM</b></h2>
 <div className='container'style={{padding:"20px"}}>
 <div className="row" style={{marginRight:"-80px"}}>
    <div className="col-4 ">
    <div className="card card1 service-card text-white" >
    <div className="card-title " style={{backgroundColor:"white"}} ><img src={img11} style={{height:"50px",width:"50px"}} /></div>
      <h2 className="card-title" style={{textAlign:"center",color:"#259E58"}}>NGÀY MỞ CỬA</h2>
      <div className="card-list">
        <p>Tất cả các ngày</p>
      <p >
        (trừ thứ 3)
      </p>
      </div>
 
    </div>
     
    </div>
    <div className="col-4 ">
    <div className="card card1  service-card text-white" >
    <div className="card-title " style={{backgroundColor:"white"}} ><img src={img12} style={{height:"50px",width:"50px"}} /></div>
      <h2 className="card-title" style={{textAlign:"center",color:"#259E58"}}>GIỜ BÁN VÉ</h2>
      <div className="card-list">
        <p>Ngày thường: <b>7h30 - 16h00</b></p>
      <p >
      Cuối tuần + Lễ: <b>7h30 - 19h00</b>
            </p>
      </div>
 
    </div>
    </div>
    <div className="col-4 ">
    <div className="card card1 service-card  text-white" >
    <div className="card-title " style={{backgroundColor:"white"}} ><img src={img13} style={{height:"50px",width:"50px"}} /></div>
      <h2 className="card-title" style={{textAlign:"center",color:"#259E58"}}>GIỜ HOẠT ĐỘNG</h2>
      <div className="card-list">
        <p>Ngày thường: <b>8h00 - 18h00</b></p>
      <p >
      Cuối tuần + Lễ: <b>7h30 - 21h00 </b></p>
      </div>
 
    </div>
      
    </div>

  
  
   
  </div>

 </div>
 
        </div>

<div className="container" style={{padding:20}} >
  <div className="row">
    <div className="col-md-6">
      <div className=" green-card" style={{backgroundImage:`url(${img6})`,backgroundSize:"600px 400px"}}>
        <div className="card-body">
          <div className="ic1">
            <img src={img5} alt="Vượn má vàng" />
            <img src={img7} alt="s" style={{marginTop:"-290px",marginLeft:"10px",width:"93px",height:"200px"}} />

          </div>

          <div style={{marginTop:"-190px",marginLeft:"200px",color:"white",fontFamily:"Nubito"}}>
          <h4 className="card-subtitle mb-2 "><b>VÉ KHÁCH LẺ</b></h4>
          <h4 className="card-subtitle mb-2 ">80k - 380k/người</h4>
          <p className="card-text" style={{opacity:"70%"}}>Là loại vé được bán tại các quầy trong công viên cho từng khách. Đây là các loại vé trọn gói đã được trừ vào vé công của quý khách.</p>
          <p><Link to="/" className="btn btn-white" style={{color:"#259E58",backgroundColor:"white",border:"none", width:"120px",marginTop:"20px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>
          </div>
          </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className=" pink-card" style={{backgroundImage:`url(${img6})`,backgroundSize:"600px 400px"}}>
        <div className="card-body">
          <div className="ic1">
            <img src={img5} alt="Vượn má vàng" />
            <img src={img8} alt="s" style={{marginTop:"-290px",marginLeft:"10px",width:"120px",height:"200px"}} />

          </div>

          <div style={{marginTop:"-190px",marginLeft:"200px",color:"white",fontFamily:"Nubito"}}>
          <h4 className="card-subtitle mb-2 "><b>VÉ THỂ DỤC</b></h4>
          <h4 className="card-subtitle mb-2 ">5k/vé/người</h4>
          <p className="card-text" style={{opacity:"70%"}}>Quý khách có thể vào CVVH Đầm Sen để tập thể dục quanh hồ thoáng mát vào mỗi buổi sáng, trên diện tích 32 hecta với nhiều cây xanh và không khí trong lành</p>
          <p><Link to="/" className="btn btn-white" style={{color:"#EC008C",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>
          </div>
          </div>
      </div>
    </div>
  </div>
  <br />
  <div className="row">
    <div className="col-md-6">
      <div className=" pink-card" style={{backgroundImage:`url(${img6})`,backgroundSize:"600px 400px"}}>

        <div className="card-body">
          <div className="ic1">
            <img src={img5} alt="Vượn má vàng" />
            <img src={img9} alt="s" style={{position:"absolute",marginLeft:"-210px",marginTop:"15px", width:"180px",height:"150px",  }} />
            <button className="service-title" style={{backgroundColor:"#F3F7E9",color:"#D9248F",marginTop:"-10px",marginLeft:"-30px",zIndex:"10"}}>Dịch vụ</button>

          </div>
          <div style={{marginTop:"-170px",marginLeft:"200px",color:"white",fontFamily:"Nubito"}}>
          <h4 className="card-subtitle mb-2 "><b>VÉ DỊCH VỤ</b></h4>
          <h4 className="card-subtitle mb-2 ">120k - 380k/vé/người</h4>
          <p className="card-text" style={{opacity:"70%"}}>Vé dịch vụ gồm có các dịch vụ như xe điện, giữ đồ, cho thuê xe đẩy, xe nôi, xe lăn.</p>
          <p><Link to="/" className="btn btn-white" style={{color:"#EC008C",backgroundColor:"white",border:"none", width:"120px",marginTop:"48px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>
          </div>
          </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className=" green-card" style={{backgroundImage:`url(${img6})`,backgroundSize:"600px 400px"}}>
        <div className="card-body">
          <div className="ic1">
            <img src={img5} alt="Vượn má vàng" />
            <img src={img10} alt="s" style={{marginTop:"-290px",marginLeft:"-20px",width:"200px",height:"200px"}} />

          </div>

          <div style={{marginTop:"-190px",marginLeft:"200px",color:"white",fontFamily:"Nubito"}}>
          <h4 className="card-subtitle mb-2 "><b>VÉ TẬP THỂ </b></h4>
          <h4 className="card-subtitle mb-2 ">120k - 380k/vé/người</h4>
          <p className="card-text" style={{opacity:"70%"}}>Nhóm bạn, cơ quan đoàn thể, Trường học, công ty du lịch, công nhân, chúng tôi có giá vé tập thể ưu đãi cho Quý cơ quan khi đến tham quan vui chơi tại CVVH Đầm Sen</p>
          <p><Link to="/" className="btn btn-white" style={{color:"#259E58",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>
          </div>
          </div>
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

export default GD;