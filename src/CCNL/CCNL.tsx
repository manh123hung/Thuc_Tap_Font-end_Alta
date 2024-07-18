import React, { useEffect, useState } from 'react';
import './CCNL.css'; // Tệp CSS cho kiểu dáng
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
import tabs from '../tabs'; 
interface ImageData {
  src: string;
  alt: string;
  caption: string;
}

function CCNL() {
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
        const quanlyRef = await getDocs(collection(firestore, "CCNL"));
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
useEffect(() => {
  if (!showMenu) {
    setRightSideContent(
      <div style={{marginTop:"40px",backgroundColor:"white",position:"fixed",zIndex: 100,width:"1240px"}}>
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
      title: <div>
        {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T1}} />
        </div>
      ))}

      </div>,
      description: <div>
      {data.map((item, index) => (
      <div key={index}>
        <div dangerouslySetInnerHTML={{ __html: item.D01}} />
      </div>
    ))}

    </div>,
    },
    {
      image: img8,
      title: <div>
      {data.map((item, index) => (
      <div key={index}>
        <div dangerouslySetInnerHTML={{ __html: item.T2}} />
      </div>
    ))}

    </div>,
      description: <div>
      {data.map((item, index) => (
      <div key={index}>
        <div dangerouslySetInnerHTML={{ __html: item.D02}} />
      </div>
    ))}

    </div>,
    },
    {
      image: img9,
      title:<div>
      {data.map((item, index) => (
      <div key={index}>
        <div dangerouslySetInnerHTML={{ __html: item.T3}} />
      </div>
    ))}

    </div>,
      description: <div>
      {data.map((item, index) => (
      <div key={index}>
        <div dangerouslySetInnerHTML={{ __html: item.D03}} />
      </div>
    ))}

    </div>,
    }, {
      image: img10,
      title: <div>
      {data.map((item, index) => (
      <div key={index}>
        <div dangerouslySetInnerHTML={{ __html: item.T4}} />
      </div>
    ))}

    </div>,
      description: <div>
      {data.map((item, index) => (
      <div key={index}>
        <div dangerouslySetInnerHTML={{ __html: item.D04}} />
      </div>
    ))}

    </div>,
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
          <button className="menu-icon" onClick={toggleMenu} style={{border:"none"}}>
              {showMenu ? '≡' : 'x'}
            </button>           <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item" style={{color:'black',textDecoration: 'underline'}}>KHÁM PHÁ</Link>

          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"white"}}>
          <Link to="/LSHH" > <DropdownItem className="btn btn-white" >Lịch sử hình thành</DropdownItem></Link>
          <Link to="/Thanhvien" > <DropdownItem className="btn btn-white" >Thành viên</DropdownItem></Link>
          <Link to="/BM" > <DropdownItem className="btn btn-white" >Chính sách bảo mật</DropdownItem> </Link>
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container"  label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"white"}}>
          <Link to="/GiaVe" >  <DropdownItem className="btn btn-white" >Vé trong công viên</DropdownItem></Link>
          <Link to="/VTT" >   <DropdownItem className="btn btn-white" >Vé tập thể</DropdownItem></Link>
          <Link to="/VDD" > <DropdownItem className="btn btn-white" >Vé dịch vụ</DropdownItem></Link>
          <Link to="/VTTD" >   <DropdownItem className="btn btn-white" >Vé tập thể dục</DropdownItem></Link>
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
           {rightSideContent}
            <div className='container bd01'>
            <img src={img1} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>

            <header className="header" style={{padding:"40px"}}>
              
              <div className="row">
                <div className="col-8" style={{}}>
                <div className='container' style={{borderBottom:"1px solid #259E58" ,color: '#259E58',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
              <b >  {data.length > 0 && (
                <div>
                    {data.map((item, index) => (
                      <div key={index}>
                        {item.Tieude}
                      </div>
                    ))}
            
                </div>
              )}
          </b>
              </div> 
              <div className='container'>
              <div className='row' style={{}}>
                  <div className="col-3" style={{color:"#EC008C",fontFamily:"Nunito"}}>
                    {data.length > 0 && (
                <div>
                    {data.map((item, index) => (
                      <div key={index}>
                    <FontAwesomeIcon icon={faCalendar} />   {item.Danhmuc} 
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
                      <FontAwesomeIcon icon={faClock} />  {item.Ngay} 
                      </div>
                    ))}
            
                </div>
              )}     
                </div>
                </div>   
                </div>  
              </div>
              <div className="col-3">
                <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
                  Mô tả
                </div>
                <div style={{borderBottom:"2px solid #EC008C"}}></div>
                <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>
                {data.length > 0 && (
                <div>
                    {data.map((item, index) => (
                      <div key={index}>
                        {item.Mota} 
                      </div>
                    ))}
            
                </div>
              )}     
                </div>
              </div>
              </div>      
            
              </header>
              <div className="container">
                <div className='row'>
                  <div className='col-8'>
                  <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>       {data.length > 0 && (
                <div>
                    {data.map((item, index) => (
                      <div key={index}>
                        {item.noidung} 
                      </div>
                    ))}
            
                </div>
              )}    </p>
                  </div>
                </div>

                  </div>
                  <div className="carousel-container">
                <div className="carousel-controls6">
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
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>



          <div className='container'>
          <div className='row'>
    <div className='col-md-10 f1'>
             <Link to="/" style={{textDecoration:"none"}} className='f1'><div>
                              {data.map((item, index) => (
                              <div key={index}>
                               <FontAwesomeIcon icon={faChevronLeft} />   {item.C01} 
                              </div>
                            ))}
                              </div></Link>
              </div>
              <div className='col-md-2 f1'>
              <Link to="/" style={{textDecoration:"none"}} className='f1'>
                        <div>
                              {data.map((item, index) => (
                              <div key={index}>
                                {item.C02} <FontAwesomeIcon icon={faChevronRight} />
                              </div>
                            ))}
                              </div></Link>   
                        </div>
    </div>            </div>
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
                      <div style={{color:"#EC008C",fontSize:"14px"}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</div>
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
      <Footer/>
          </div>
      </div>
    </div>
  
   
  
  );
}

export default CCNL;