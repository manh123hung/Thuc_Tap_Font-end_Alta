import React, { useEffect, useState } from 'react';
import './CCNL.css'; // Tệp CSS cho kiểu dáng
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


interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

function CCNL() {
  const handlePageChange1 = (page: number) => {
    setCurrentPage(page);
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
  const [img5, setimg5]= useState("");
  const [img6, setimg6]= useState("");
  const [img7, setimg7]= useState("");
  const [img8, setimg8]= useState("");
  const [img9, setimg9]= useState("");
  const [img10, setimg10]= useState("");

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
    const img1= ref(storage, "CCNL/ca-chep-nhao-lon-04.png");
    const img2= ref(storage, "CCNL/79772612_2862656887079379_3706232399042969600_n.jpg");
    const img3= ref(storage, "CCNL/78326658_2862657040412697_6030375409206427648_n.jpg");
    const img4= ref(storage, "CCNL/Image 01 (1).png");
    const img5= ref(storage, "CCNL/ca-chep-nhao-lon-03.jpg");
    const img6= ref(storage, "CCNL/ca-chep-nhao-lon-04.png");
    const img7= ref(storage, "CCNL/Rectangle 1488 (4).png");
    const img8= ref(storage, "CCNL/Rectangle 1488 (5).png");
    const img9= ref(storage, "CCNL/Rectangle 1488 (6).png");
    const img10= ref(storage, "CCNL/Rectangle 1488 (7).png");
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
  const images: ImageData[] = [
    { src: img2, alt: 'Image 1', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img3, alt: 'Image 2', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img4, alt: 'Image 3', caption: 'Hai con tàu hình cá chép ' },
    { src: img5, alt: 'Image 4', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img6, alt: 'Image 5', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const data1 = [
    {
      image: img7,
      title: 'Vòng xoay không gian',
      description: '11/02/2020',
    },
    {
      image: img8,
      title: 'Lâu đài kinh dị',
      description: '21/02/2020',
    },
    {
      image: img9,
      title: 'Tàu vượt thác',
      description: '11/02/2020',
    }, {
      image: img10,
      title: 'Spinning Coaster',
      description: '20/02/2020',
    }, {
      image: img7,
      title: 'Quảng trường',
      description: '20/02/2020',
    },
  ];
  const totalPages = Math.ceil(data1.length / itemsPerPage);

  const displayedItems = data1.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
  <DropdownItem className="btn btn-white" ><Link to="/BM" >Chính sách bảo mật</Link></DropdownItem> 
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
      <div className="col-8" style={{}}>
      <div className='container' style={{borderBottom:"1px solid #259E58" ,color: '#259E58',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
     <b >CÁ CHÉP NHÀO LỘN</b>
    </div> 
    <div className='container'>
    <div className='row' style={{}}>
        <div className="col-3" style={{color:"#EC008C",fontFamily:"Nunito"}}>
        <FontAwesomeIcon icon={faCalendar} /> Cảm giác mạnh     
      </div>
      <div className="col-3" style={{color:"#666666",fontFamily:"Nunito"}}>
      <FontAwesomeIcon icon={faClock} /> 11/02/2020
      </div>
      </div>   
      </div>  
     </div>
     <div className="col-3">
      <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
        Mô tả
       </div>
       <div style={{borderBottom:"2px solid #EC008C"}}></div>
       <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>Trò chơi Cá chép nhào lộn tại CVVH Đầm Sen</div>
     </div>
    </div>      
   
    </header>
    <div className="container">
      <div className='row'>
        <div className='col-8'>
        <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Cá chép nhào lộn là trò chơi cảm giác mạnh do Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist) đầu tư tại CVVH Đầm Sen. Đây là trò chơi hình thức con lắc Pendulum. Trò chơi gồm 2 con tàu hình cá chép, đong đưa theo trục đứng. Trò chơi này cũng tương tự như Phượng hoàng bay, nhưng có thể đánh vòng đến 360 độ.
        Người chơi ngồi bên trên sẽ được đưa lên cao đến hơn 10m, rồi rơi tự do xuống, lại bật lên nhiều vòng. Đỉnh điểm là khi cặp cá chép nhào lộn ngược trên không, khiến người chơi phải la hét vì phấn khích. Trò chơi nằm ở khu cảm giác mạnh tại cổng số 1 (đường Lạc Long Quân).</p>
        </div>
      </div>

        </div>
        <div className="carousel-container">
      <div className="carousel-controls">
        <button onClick={handlePrev}>
          <span className="material-icons"><FontAwesomeIcon icon={faChevronLeft} />          </span>
        </button>
        <button onClick={handleNext}>
          <span className="material-icons"><FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>
      <div className="carousel-image">
  <div className="image-container">
    <img
      src={images[currentImageIndex].src}
      alt={images[currentImageIndex].alt}
    />
  </div>
</div>
<div className="image-caption">
  {images[currentImageIndex].caption}
</div>
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(index)}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
w


<div className='container'>
    <div className='row'>
      <div className='col-md-10 f1'>
      <FontAwesomeIcon icon={faChevronLeft} /> Roller Coaster
      </div>
      <div className='col-md-2 f1'>
      Phượng hoàng bay <FontAwesomeIcon icon={faChevronRight} />     
        </div>
    </div>
  </div>
  <div className='container'><div className="row position-relative">
    {displayedItems.map((item, index) => (
      <div className="col-md-3" key={index} >
        <div className="card border-0 shadow-sm" style={{height:"300px"}}>
          <img className="card-img-top" src={item.image} />
          <div className="card-body">
            <div className='row'>
            <div className='col-md-8'><div className="card-title" style={{color:"#259E58",fontSize:"13px"}}>{item.title}</div>
            </div>
            <div className='col-md-4'><div className="card-text" style={{color:"#666666",fontSize:"13px"}}>{item.description}</div>
            </div>
            </div>
            <div style={{color:"#EC008C",fontSize:"14px"}}><FontAwesomeIcon icon={faCalendar} /> Cảm giác mạnh</div>
          </div>
        </div>
      </div>
    ))}
    <button
      className="btn btn-primary position-absolute top-50 start-0 translate-middle-y" style={{width: '40px',color:"#4CAF50",backgroundColor:"white",border:"none"}}
      onClick={() => handlePageChange1(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button
      className="btn btn-primary position-absolute top-50 end-0 translate-middle-y" style={{width: '40px',color:"#4CAF50",backgroundColor:"white",border:"none"}}
      onClick={() => handlePageChange1(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div></div>

   

  

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

export default CCNL;