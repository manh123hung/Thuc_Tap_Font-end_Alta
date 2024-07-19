import React, { useEffect, useState } from 'react';
import './QTVH.css'; // Tệp CSS cho kiểu dáng
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
import Footer from '../Footer';
import tabs from '../tabs'; // Import mảng tabs



interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

function QTVH() {
  const handlePageChange1 = (page: number) => {
    setCurrentPage(page);
  };
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
  const [img16, setimg16]= useState("");
  const [img17, setimg17]= useState("");
  const [img18, setimg18]= useState("");
  const [img19, setimg19]= useState("");
  const [img20, setimg20]= useState("");
  const [pc9, setpc9] = useState("");
  const [pc10, setpc10] = useState("");
  const [pc11, setpc11] = useState("");
  const [pc12, setpc12] = useState("");
  
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
    const img1= ref(storage, "QTVH/image 314 (1).png");
    const img2= ref(storage, "QTVH/image 314.png");
    const img3= ref(storage, "QTVH/image 368.png");
    const img4= ref(storage, "QTVH/image 369.png");
    const img5= ref(storage, "QTVH/image 370.png");
    const img6= ref(storage, "QTVH/image 380.png");
    const img7= ref(storage, "QTVH/image 381.png");
    const img8= ref(storage, "QTVH/Image 01 (4).png");
    const img9= ref(storage, "QTVH/Image 02 (2).png");
    const img10= ref(storage, "QTVH/Image 02 (3).png");
    const logo5= ref(storage, "QTVH/image 408.png");
    const logo6= ref(storage, "QTVH/image 418.png");
    const img11= ref(storage, "QTVH/Image 14 (3).png");
    const img12= ref(storage, "QTVH/Image 01 (5).png");
    const img13= ref(storage, "QTVH/Image 01 (6).png");
    const img14= ref(storage, "QTVH/Image 01 (7).png");
    const img15= ref(storage, "QTVH/Image 13 (5).png");
    const pc9= ref(storage, "card/Rectangle 1488.png");
    const pc10= ref(storage, "card/Rectangle 1488 (1).png");
    const pc11= ref(storage, "card/Rectangle 1488 (2).png");
    const pc12= ref(storage, "card/Rectangle 1488 (3).png");
    const img16= ref(storage, "QTVH/Image 14 (4).png");
    const img17= ref(storage, "QTVH/Image 02 (5).png");
    const img18= ref(storage, "QTVH/Image 03 (3).png");
    const img19= ref(storage, "QTVH/Image 02 (8).png");
    const img20= ref(storage, "QTVH/Image 14 (5).png");
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
      getDownloadURL(img15),
      getDownloadURL(pc9),
      getDownloadURL(pc10),
      getDownloadURL(pc11),
      getDownloadURL(pc12),
      getDownloadURL(img16),
      getDownloadURL(img17),
      getDownloadURL(img18),
      getDownloadURL(img19),
      getDownloadURL(img20),
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
        setpc9(urls[22]);
        setpc10(urls[23]);
        setpc11(urls[24]);
        setpc12(urls[25]);
        setimg16(urls[26]);
        setimg17(urls[27]);
        setimg18(urls[28]);
        setimg19(urls[29]);
        setimg20(urls[30]);
      })
      .catch((error) => {
        console.log("Error getting URLs:", error);
      });
    const fetchData = async () => {
      try {
        const quanlyRef = await getDocs(collection(firestore, "QTVH"));
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',position:"fixed",marginLeft:"1180px",marginTop:"600px" }}>
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
  const images1: ImageData[] = [
    { src: img8, alt: 'Image 1', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img1, alt: 'Image 2', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img8, alt: 'Image 3', caption: 'Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019' },
    { src: img9, alt: 'Image 4', caption: 'Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019' },
    { src: img8, alt: 'Image 5', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
  ];
  const images2: ImageData[] = [
    { src: img10, alt: 'Image 1', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img11, alt: 'Image 2', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img12, alt: 'Image 3', caption: 'Quãng trường Vua Hùng' },
    { src: img10, alt: 'Image 4', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img12, alt: 'Image 5', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
  ];
  const images3: ImageData[] = [
    { src: img15, alt: 'Image 1', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img11, alt: 'Image 2', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img16, alt: 'Image 3', caption: 'Du khách đến dâng hương nhận lộc bánh chưng từ Đầm Sen' },
    { src: img17, alt: 'Image 4', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img18, alt: 'Image 5', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
  ];
  
  // Dữ liệu hình ảnh cho carousel 4
  const images4: ImageData[] = [
    { src: img19, alt: 'Image 1', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img20, alt: 'Image 2', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img14, alt: 'Image 3', caption: 'Làm chiếc bánh chưng khổng lồ tại Đầm Sen năm 2016' },
    { src: img19, alt: 'Image 4', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
    { src: img20, alt: 'Image 5', caption: 'Xem phim Cinemax 8D tại CVVH Đầm Sen' },
  ];
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  // State cho carousel 2
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  // State cho carousel 3
  const [currentImageIndex3, setCurrentImageIndex3] = useState(0);
  // State cho carousel 4
  const [currentImageIndex4, setCurrentImageIndex4] = useState(0);

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

  const handleNext3 = () => {
    setCurrentImageIndex3((prevIndex) => (prevIndex + 1) % images3.length);
  };

  const handlePrev3 = () => {
    setCurrentImageIndex3((prevIndex) =>
      prevIndex === 0 ? images3.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick3 = (index: number) => {
    setCurrentImageIndex3(index);
  };

  const handleNext4 = () => {
    setCurrentImageIndex4((prevIndex) => (prevIndex + 1) % images4.length);
  };

  const handlePrev4 = () => {
    setCurrentImageIndex4((prevIndex) =>
      prevIndex === 0 ? images4.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick4 = (index: number) => {
    setCurrentImageIndex4(index);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const data1 = [
    {
      image: pc9,
      title: 'Địa điểm sống ảo',
      description: '20/02/2020',
    },
    {
      image: pc10,
      title: 'Quảng trường Âu Lạc',
      description: '20/02/2020',
    },
    {
      image: pc11,
      title: 'Quảng trường La Mã',
      description: '20/02/2020',
    }, {
      image: pc12,
      title: 'Cầu cửu khúc',
      description: '20/02/2020',
    }, {
      image: pc10,
      title: 'Quảng trường',
      description: '20/02/2020',
    },
  ]
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
          <button className="menu-icon" style={{border:"none"}} onClick={toggleMenu}>
              {showMenu ? '≡' : 'x'}
            </button>         
             <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item">KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"black",textDecoration: 'underline'}}>
          <Link to="/GD" > <DropdownItem className="btn btn-white" >Giới thiệu</DropdownItem></Link>
          <Link to="/LSHH" > <DropdownItem className="btn btn-white" >Lịch sử hình thành</DropdownItem></Link>
          <Link to="/Thanhvien" > <DropdownItem className="btn btn-white" >Thành viên</DropdownItem></Link>
          <Link to="/BM" > <DropdownItem className="btn btn-white" >Chính sách bảo mật</DropdownItem> </Link>
          </Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'White'}}>
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
              <div className="col-8" style={{}}>
              <div className='container' style={{ color: '#259E58',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
            <b style={{borderBottom:"1px solid #259E58"}}>
              <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Tieude }} />
            </div>
          ))}
        </div>
        </b>
            </div> 
            <div className='container'>
            <div className='row' style={{}}>
                <div className="col-3" style={{color:"#EC008C",fontFamily:"Nunito"}}>
                                {data.length > 0 && (
                <div>
                    {data.map((item, index) => (
                      <div key={index}>
                       <FontAwesomeIcon icon={faCalendar} />  {item.Danhmuc} 
                      </div>
                    ))}
            
                </div>
              )}        
              </div>
              <div className="col-3" style={{color:"#666666",fontFamily:"Nunito"}}>
              {data.length > 0 && (
                <div>
                    {data.map((item, index) => (
                      <div key={index}>
                      <FontAwesomeIcon icon={faClock} />  {item.Date} 
                      </div>
                    ))}
            
                </div>
              )}                </div>
              </div>   
              </div> 
            </div>
            <div className="col-3">
              <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
                Mô tả
              </div>
              <div style={{borderBottom:"2px solid #EC008C"}}></div>
              <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>
              <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Mota}} />
            </div>
          ))}
        </div>

              </div>
            </div>
            </div>      
            </header>
            <div className="container">


              <div className='row'>
                <div className='col-10'>
            <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
            <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Noidung1}} />
            </div>
          ))}
        </div>
              </p></div>
            <div className='col-3'></div>
            </div>


            <div className='row'>
                <div className='col-9'>
                <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",padding:"30px",marginTop:"-20px"}}>
            <b>          <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.TND1}} />
            </div>
          ))}
        </div></b>

            </div>
            <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px",marginTop:"-30px"}}>
            <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Noidung2}} />
            </div>
          ))}
        </div>
              </p>

            </div>
            <div className='col-3'></div>
            </div>

            <img src={img2} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
            <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>          <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.TH1}} />
            </div>
          ))}
        </div></p>


            <div className='row'>
                <div className='col-11'>
            <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
          <p>          <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Noidung3}} />
            </div>
          ))}
        </div></p>
              </div>
              </div>

            <div className='col-3'></div>
            
            </div>


            <div className='row'>
                <div className='col-5'>
          
                <img src={img3} className="img-fluid" alt="Responsive image" style={{padding:"40px",height:"620px"}}/>
                <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>          <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.TH2}} />
            </div>
          ))}
        </div></p>

              </div>

            <div className='col-7'><img src={img4} className="img-fluid" alt="Responsive image" style={{padding:"40px",height:"620px",marginLeft:"-100px"}}/>
            <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginLeft:"-180px",marginTop:"-20px"}}>          <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.TH3}} />
            </div>
          ))}
        </div></p>
            </div>
            </div>


            <img src={img5} className="img-fluid" alt="Responsive image" style={{padding:"40px",marginTop:"-40px"}}/>
            <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>          <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.TH4}} />
            </div>
          ))}
        </div></p>
            <div className='row'>
                <div className='col-11'>
            <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
          <p>            <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Noidung4}} />
            </div>
          ))}
        </div></p>
              </div>
              </div>

            <div className='col-3'></div>
            </div>
            <img src={img6} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
            <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>
            <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.TH5}} />
            </div>
          ))}
        </div>
            </p>
            <div className='row'>
                <div className='col-11'>
            <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
          <p>            <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Noidung5}} />
            </div>
          ))}
        </div></p>
              </div>
              </div>

            <div className='col-3'></div>
            </div>
            <img src={img7} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
            <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>          <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.TH6}} />
            </div>
          ))}
        </div></p>
          <hr />
        </div>
        <div className="container">
              <div className='row'>
                <div className='col-12'>
                <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",padding:"30px"}}>
            <b>          <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.TND2}} />
            </div>
          ))}
        </div></b>
            </div>
            <div className='row'>
                <div className='col-8'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
                        <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.Noidung6}} />
                    </div>
                  ))}
                </div>
                </p> 
              
                </div>
                <div className='col-4'>
                </div>
                </div>
                </div>
              </div>
                </div>
                <div className="carousel-container" style={{marginTop:"-30px"}}>
                <div className="carousel-controls2">
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
                <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>          <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.Noidung7}} />
                  </div>
                ))}
              </div>
                </p>
                </div>
                <div className='col-4'>
                </div>
                </div>

        </div>
                <div className="carousel-container"  style={{marginTop:"-30px"}} >
                <div className="carousel-controls3">
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
                <div className='col-11'>
                  <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
                  <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.ND2}} />
                    </div>
                  ))}
                </div>
                </p> 
              
                </div>
                <div className='col-4'>
                </div>
                </div>
                </div>
              
              <div className="carousel-container"  style={{marginTop:"-30px"}}>
                <div className="carousel-controls4">
                  <button onClick={handlePrev3}>
                    <span className="material-icons"><FontAwesomeIcon icon={faChevronLeft} /></span>
                  </button>
                  <button onClick={handleNext3}>
                    <span className="material-icons"><FontAwesomeIcon icon={faChevronRight} /></span>
                  </button>
                </div>
                <div className="carousel-image">
                  <div className="image-container">
                    <img
                      src={images3[currentImageIndex3].src}
                      alt={images3[currentImageIndex3].alt}
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
                <div className="image-caption">
                  {images3[currentImageIndex3].caption}
                </div>
                <div className="carousel-thumbnails">
                  {images3.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      onClick={() => handleImageClick3(index)}
                      className={`thumbnail ${index === currentImageIndex3 ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <div className='container'>
              <div className='row'>
              <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",marginLeft:"30px"}}>
            <b>  <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.TND3}} />
                    </div>
                  ))}
                </div></b>
            </div>
                <div className='col-11'>
                  <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
                  <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.Noidung8}} />
                    </div>
                  ))}
                </div>
                </p> 
              
                </div>
                <div className='col-4'>
                </div>
                </div>
                </div>
              <div className="carousel-container"  style={{marginTop:"-30px"}}>
                <div className="carousel-controls5">
                  <button onClick={handlePrev4}>
                    <span className="material-icons"><FontAwesomeIcon icon={faChevronLeft} /></span>
                  </button>
                  <button onClick={handleNext4}>
                    <span className="material-icons"><FontAwesomeIcon icon={faChevronRight} /></span>
                  </button>
                </div>
                <div className="carousel-image">
                  <div className="image-container">
                    <img
                      src={images4[currentImageIndex4].src}
                      alt={images4[currentImageIndex4].alt}
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
                <div className="image-caption">
                  {images4[currentImageIndex4].caption}
                </div>
                <div className="carousel-thumbnails">
                  {images4.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      onClick={() => handleImageClick4(index)}
                      className={`thumbnail ${index === currentImageIndex4 ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <div className='container'>
              <div className='row'>
                <div className='col-11'>
                  <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
                  <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.Noidung9}} />
                    </div>
                  ))}
                </div>
                </p> 
              
                </div>
                <div className='col-4'>
                </div>
                </div>
                </div>
                <div className="container">
              <div className='row'>
                <div className='col-12'>
                <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",padding:"30px"}}>
            <b>  <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.TND4}} />
                    </div>
                  ))}
                </div> </b>
            </div>
            <div className='row'>
                <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
                <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.Noidung10}} />
                    </div>
                  ))}
                </div>
                </p> 
                </div>
                <div className='col-4'>
                </div>
                </div>
                <img src={logo5} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
            <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>  <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.TH7}} />
                    </div>
                  ))}
                </div></p>
            <div className='row'>
                <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
                <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.Noidung11}} />
                    </div>
                  ))}
                </div>
                </p> 
                </div>
                <div className='col-4'>
                </div>
                </div>
                </div>
              </div>
                </div>
                <div className="container">
              <div className='row'>
                <div className='col-12'>
                <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",padding:"30px"}}>
            <b>  <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.TND5}} />
                    </div>
                  ))}
                </div> </b>
            </div>
            <div className='row'>
                <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Mặc dù đã lên phương án xây dựng một Quảng trường vua Hùng từ nhiều năm. Nhưng khó khăn nhất là vấn đề chân dung của vua Hùng. Trong nhận thức của người Việt, một vị vua cha phải mang những nét anh minh và đức độ; nghiêm khắc nhưng bao dung; hiền hậu nhưng quyết đoán. Để lột tả được những nét đặc trưng đó, quả là điều không dễ. Điều này đã được bàn đi bàn lại, từ đường nét gương mặt; trang phục; vóc dáng; tư thế; cho đến cả chất liệu sao cho dễ di chuyển.
                </p> 
                </div>
                <div className='col-4'>
                </div>
                </div>
                <img src={logo6} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
            <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>
            <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.TH8}} />
                    </div>
                  ))}
                </div>
            </p>
            <div className='row'>
                <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
                <div>
                  {data.map((item, index) => (
                    <div key={index}>
                      <div dangerouslySetInnerHTML={{ __html: item.Noidung13}} />
                    </div>
                  ))}
                </div>
                </p> 
                </div>
                <div className='col-4'>
                </div>
                </div>
                </div>
              </div>
                </div>
        <div className='container'>
            <div className='row'>
              <div className='col-md-10 f1'>
              <FontAwesomeIcon icon={faChevronLeft} /> <Link to="/" style={{textDecoration:"none"}} className='f1'>Địa điểm sống ảo</Link> 
              </div>
              <div className='col-md-2 f1'>
              <Link to="/" style={{textDecoration:"none"}} className='f1'>Quảng Trường Âu Lạc</Link><FontAwesomeIcon icon={faChevronRight} />     
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
            <Footer />
        </div>
      </div>
    </div>
  
   
  
  );
}

export default QTVH;