import React, { useEffect, useState } from 'react';
import './Thanhvien.css'; // Tệp CSS cho kiểu dáng
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

function Thanhvien() {
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
  const [logo5, setlogo5] = useState("");
  const [logo6, setlogo6] = useState("");
  const [img11, setimg11]= useState("");
  const [img12, setimg12]= useState("");
  const [img13, setimg13]= useState("");
  const [img14, setimg14]= useState("");
  const [img15, setimg15]= useState("");

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
    const img1= ref(storage, "Thanhvien/Rectangle 5 (1).png");
    const img2= ref(storage, "Thanhvien/cafe_vuon_da_dam_sen.jpg");
    const img3= ref(storage, "Thanhvien/cafe_vuon_da_damsen.jpg");
    const img4= ref(storage, "Thanhvien/caphe_vuon_da_damsenpark.jpg");
    const img5= ref(storage, "Thanhvien/quan-ca-phe-vuon-da-dam-sen.jpg");
    const img6= ref(storage, "Thanhvien/ca_phe_vuon_da_damsen123.jpg");
    const img7= ref(storage, "Thanhvien/Rectangle 1488 (12).png");
    const img8= ref(storage, "Thanhvien/Rectangle 1488 (13).png");
    const img9= ref(storage, "Thanhvien/Rectangle 1488 (14).png");
    const img10= ref(storage, "Thanhvien/Rectangle 1488 (15).png");
    const logo5= ref(storage, "Thanhvien/Rectangle 1500.png");
    const logo6= ref(storage, "Thanhvien/Layer_1.png");
    const img11= ref(storage, "Thanhvien/Image 01 (2).png");
    const img12= ref(storage, "Thanhvien/Image 13 (4).png");
    const img13= ref(storage, "Thanhvien/Image 14 (2).png");
    const img14= ref(storage, "Thanhvien/Image 02 (1).png");
    const img15= ref(storage, "Thanhvien/Image 03 (2).png");

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
      getDownloadURL(logo5),
      getDownloadURL(logo6),
      getDownloadURL(img11),
      getDownloadURL(img12),
      getDownloadURL(img13),
      getDownloadURL(img14),
      getDownloadURL(img15)
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
        setlogo5(urls[15]);
        setlogo6(urls[16]);
        setimg11(urls[17]);
        setimg12(urls[18]);
        setimg13(urls[19]);
        setimg14(urls[20]);
        setimg15(urls[21]);
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
  const images1: ImageData[] = [
    { src: img12, alt: 'Image 1', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img13, alt: 'Image 2', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img11, alt: 'Image 3', caption: 'Vua đầu bếp “Jan Can Cook” từng đến giao lưu với đội ngũ bếp của nhà hàng Thủy Tạ Đầm Sen ' },
    { src: img14, alt: 'Image 4', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img15, alt: 'Image 5', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
  ];
  const images2: ImageData[] = [
    { src: img2, alt: 'Image 1', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img3, alt: 'Image 2', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img4, alt: 'Image 3', caption: 'Quán cà phê Stone Garden tại CVVH Đầm Sen ' },
    { src: img5, alt: 'Image 4', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img6, alt: 'Image 5', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
  ];
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  // State cho carousel 2
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  const handleNext1 = () => {
    setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
  };

  const handlePrev1 = () => {
    setCurrentImageIndex1((prevIndex) =>
      prevIndex === 0 ? images1.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick1 = (index: number) => {
    setCurrentImageIndex1(index);
  };

  const handleNext2 = () => {
    setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  };

  const handlePrev2 = () => {
    setCurrentImageIndex2((prevIndex) =>
      prevIndex === 0 ? images2.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick2 = (index: number) => {
    setCurrentImageIndex2(index);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const data1 = [
    {
      image: img7,
      title: 'Hà Mã Châu Phi',
      description: '23/02/2020',
    },
    {
      image: img8,
      title: 'Vòng xoay không gian',
      description: '11/02/2020',
    },
    {
      image: img9,
      title: 'Vòng quay thần tốc',
      description: '12/02/2020',
    }, {
      image: img10,
      title: 'Cá chép nhào lộn',
      description: '11/02/2020',
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
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"black",textDecoration: 'underline'}}>
          <DropdownItem className="btn btn-white" ><Link to="/LSHH" >Lịch sử hình thành</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Thành viên</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/BM" >Chính sách bảo mật</Link></DropdownItem> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'White'}}>
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
      <div className='container' style={{ color: '#259E58',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
     <b style={{borderBottom:"1px solid #259E58"}}>THÀNH VIÊN</b>
    </div> 
     </div>
     <div className="col-3">
      <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
        Mô tả
       </div>
       <div style={{borderBottom:"2px solid #EC008C"}}></div>
       <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>Thông tin về các đơn vị
       thành viên của CVVH Đầm Sen</div>
     </div>
    </div>      
   
    </header>
    <div className="container">
      <div className='row'>
        <div className='col-12'>
        <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",padding:"30px"}}>
     <b>NHÀ HÀNG THỦY TẠ</b>
     </div>
     <div className='row'>
        <div className='col-8'>        <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Đơn vị thành viên đầu tiên của Đầm Sen là Nhà hàng Thủy tạ nằm ở cổng số 2 của CVVH Đầm Sen. Địa chỉ số 3 Hòa Bình, Quận 11, TP.HCM. Ra đời từ năm 1985, nằm trong lòng CVVH Đầm Sen (thuộc Công ty cổ phần Dịch vụ & Du lịch Phú Thọ quản lý), nhà hàng Thủy Tạ đã định hình thương hiệu và không ngừng phát triển. Hàng năm, đội ngũ nhân viên của nhà hàng đều được đào tạo nâng cao về nghiệp vụ cũng như thái độ phục vụ để đáp ứng mọi yêu cầu của thực khách. Chính vì vậy, suốt nghiều năm qua, nhà hàng Thủy Tạ Đầm Sen vẫn là cái tên được lựa chọn hàng đầu của các cá nhân và cơ quan đơn vị khi đặt tiệc tổ chức sự kiện.</p>
        </div>
        <div className='col-4'><img src={logo5} className="img-fluid" alt="Responsive image"/>
        </div>
        </div>

        <Link to={"/"} className="btn btn-success" style={{marginLeft:"30px",marginTop:"-40px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>

        </div>
      </div>

        </div>
        <div className="carousel-container">
        <div className="carousel-controls">
          <button onClick={handlePrev1}>
            <span className="material-icons"><FontAwesomeIcon icon={faChevronLeft} /></span>
          </button>
          <button onClick={handleNext1}>
            <span className="material-icons"><FontAwesomeIcon icon={faChevronRight} /></span>
          </button>
        </div>
        <div className="carousel-image">
          <div className="image-container">
            <img
              src={images1[currentImageIndex1].src}
              alt={images1[currentImageIndex1].alt}
              width={800}
              height={600}
            />
          </div>
        </div>
        <div className="image-caption">
          {images1[currentImageIndex1].caption}
        </div>
        <div className="carousel-thumbnails">
          {images1.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick1(index)}
              className={`thumbnail ${index === currentImageIndex1 ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

    <div className="container">
      <div className='row'>
        <div className='col-12'>
        <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",padding:"30px"}}>
     <b>CÀ PHÊ VƯỜN ĐÁ</b>
     </div>
     <div className='row'>
        <div className='col-8'>        <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Cà phê Vườn Đá bắt đầu hoạt động vào năm 2009. Đây được xem là cà phê rộng và “thiên nhiên” nhất tại TP.HCM. Khuôn viên quán là một phần diện tích của CVVH Đầm Sen. Kiến trúc nhà sàn bên cạnh những tảng đá thiên nhiên với đa dạng hình thù. Đồng thời có dòng suối chảy róc rách cùng những loài chim thả tự nhiên. Khách đến có thể cảm nhận như một “Đà Lạt thu nhỏ”. Đồng thời, vào mỗi tối và sáng thứ bảy – chủ nhật đều có biểu diễn nhạc sống.
        Năm 2018, đơn vị thành viên của Đầm Sen này đã khai trương thêm gian triển lãm tranh đá quý để khách tham quan có điều kiện thưỡng lãm. 
        </p>
       
        </div>
        <div className='col-4'><img src={logo6} className="img-fluid" alt="Responsive image"/>
        </div>
        </div>

        <Link to={"/"} className="btn btn-success" style={{marginLeft:"30px",marginTop:"-40px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>

        </div>
      </div>

        </div>
      
   
        <div className="carousel-container">
        <div className="carousel-controls1">
          <button onClick={handlePrev2}>
            <span className="material-icons"><FontAwesomeIcon icon={faChevronLeft} /></span>
          </button>
          <button onClick={handleNext2}>
            <span className="material-icons"><FontAwesomeIcon icon={faChevronRight} /></span>
          </button>
        </div>
        <div className="carousel-image">
          <div className="image-container">
            <img
              src={images2[currentImageIndex2].src}
              alt={images2[currentImageIndex2].alt}
              width={800}
              height={600}
            />
          </div>
        </div>
        <div className="image-caption">
          {images2[currentImageIndex2].caption}
        </div>
        <div className="carousel-thumbnails">
          {images2.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick2(index)}
              className={`thumbnail ${index === currentImageIndex2 ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

    

<div className='container'>
    <div className='row'>
      <div className='col-md-10 f1'>
      <FontAwesomeIcon icon={faChevronLeft} /> Phượng hoàng bay
      </div>
      <div className='col-md-2 f1'>
      Tàu vượt thác <FontAwesomeIcon icon={faChevronRight} />     
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

export default Thanhvien;