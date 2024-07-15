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

function QTVH() {
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
     <b style={{borderBottom:"1px solid #259E58"}}>QUẢNG TRƯỜNG VUA HÙNG</b>
    </div> 
    <div className='container'>
    <div className='row' style={{}}>
        <div className="col-3" style={{color:"#EC008C",fontFamily:"Nunito"}}>
        <FontAwesomeIcon icon={faCalendar} /> Cảnh đẹp      
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
       <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>Quảng trường Vua Hùng trong ngày giỗ quốc tổ</div>
     </div>
    </div>      
    </header>
    <div className="container">


      <div className='row'>
        <div className='col-10'>
    <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Hàng ngàn du khách đã đến dâng hương trước tượng Hùng Vương tại Quảng trường vua Hùng trong ngày 14/4/2019. Đây là quảng trường thứ 3 của CVVH Đầm Sen đưa vào hoạt động. (Trước đó, Đầm Sen đã có quảng trường Âu Lạc và quảng trường La Mã chuyên phục vụ sự kiện). Đền thờ này được xem như một cúng phẩm dâng lên trong ngày giổ Quốc tổ.</p></div>
    <div className='col-3'></div>
    </div>


    <div className='row'>
        <div className='col-9'>
        <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",padding:"30px",marginTop:"-20px"}}>
     <b>Ra mắt Quảng trường vua Hùng</b>

     </div>
     <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px",marginTop:"-30px"}}>Quảng trường này có tổng diện tích gần 1000m2. Bao gồm sân hành lễ được lát đá Granite với hoa văn mặt trời đặt ở chính giữa. Kế đến là thang rồng, tiết diện bề ngang 4,5 mét, đáp ứng đoàn khách 5 hàng. Trên cùng là khu vực dâng hương, được thiết kế 3 đền thờ. Chính giữa là chánh điện với tượng vua Hùng cao 1,7 mét, được làm bằng chất liệu composite phủ đồng, đặt trên bệ đá cao 0,8m.</p>

     </div>
    <div className='col-3'></div>
    </div>

    <img src={img2} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
    <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>Quảng trường vua Hùng trong ngày giỗ quốc tổ</p>


    <div className='row'>
        <div className='col-11'>
    <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
  <p>Bức tượng vua Hùng tại Đầm Sen đã được Thạc sĩ – Điêu khắc gia Phạm Văn Út thực hiện. Tác giả đã xây dựng bố cục vua Hùng ngồi trên ngai, cách điệu từ hoa văn trống đồng. Mặt tượng nhìn thẳng thể hiện sự tôn nghiêm. Tay phải nắm chùm bông lúa, ý muốn đề cao một nền văn hóa lúa nước của dân tộc Việt, cho con cháu đời sau phải gìn giữ và tôn vinh. Tay trái để tự nhiên trong tư thế ngồi trao đổi với các Lạc tướng, Lạc hầu. Các hoa văn trang trí trên bộ trang phục, được lấy cảm hứng từ đường nét của nền văn hóa Đông Sơn. Đặc biệt là hoa văn trên trống đồng Ngọc Lũ.</p>
       </div>
       </div>

    <div className='col-3'></div>
    
    </div>


    <div className='row'>
        <div className='col-5'>
   
        <img src={img3} className="img-fluid" alt="Responsive image" style={{padding:"40px",height:"620px"}}/>
        <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>Bức tượng vua Hùng mới được đặt tại Đầm Sen</p>

       </div>

    <div className='col-7'><img src={img4} className="img-fluid" alt="Responsive image" style={{padding:"40px",height:"620px",marginLeft:"-100px"}}/>
    <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginLeft:"-180px",marginTop:"-20px"}}>Điêu khắc gia Phạm Văn Út</p>
    </div>
    </div>


    <img src={img5} className="img-fluid" alt="Responsive image" style={{padding:"40px",marginTop:"-40px"}}/>
    <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>Chánh điện thờ vua Hùng trong ngày giỗ tổ</p>
    <div className='row'>
        <div className='col-11'>
    <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
  <p>   Bên cạnh đó, chủ tịch Hồ Chí Minh từng nói: “Các vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước” (xem lịch sử câu nói tại đây). Thấu hiểu điều đó, Phuthotourist không chỉ hướng ý thức của du khách đến viếng người có công dựng nước, mà còn muốn nhắc đến công giữ nước của những danh tướng đã làm nên lịch sử. Đó là đền thờ Hưng Đạo Vương, vị vua từng đánh tan hai cuộc xâm lược của quân Nguyên – Mông (năm 1285 và năm 1288). Hưng Đạo Vương còn lưu truyền thế hệ sau bằng bài thơ “Hịch tướng sĩ”.</p>
       </div>
       </div>

    <div className='col-3'></div>
    </div>
    <img src={img6} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
    <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>Gian thờ Hưng Đạo Vương đặt bên phải, với bào thơ Hịch Tướng Sĩ</p>
    <div className='row'>
        <div className='col-11'>
    <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
  <p>  Danh tướng thứ hai là Hai Bà Trưng (xem thông tin lịch sử tại đây). Hai nữ anh hùng dân tộc đầu tiên của đất Việt, phất cờ khởi nghĩa. Và lập quốc gia với kinh đô tại Mê Linh. Bà Trưng Trắc lên ngôi Nữ vương, trở thành vị vua nữ đầu tiên trong trong lịch sử Việt Nam. Với danh hiệu Trưng Nữ Vương. Cả hai biểu tượng danh tướng đều được đặt hai bên chánh điện, trong khuôn viên của quảng trường vua Hùng. (xem thêm về lễ khánh thành tượng Hai Bà Trưng tại đây)</p>
       </div>
       </div>

    <div className='col-3'></div>
    </div>
    <img src={img7} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
    <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>Tượng Hai Bà Trưng trên mình voi</p>
  
</div>
<div className="container">
      <div className='row'>
        <div className='col-12'>
        <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",padding:"30px"}}>
     <b>NGÀY GIỖ TỔ ĐẦU TIÊN TRƯỚC LINH TƯỢNG</b>
     </div>
     <div className='row'>
        <div className='col-8'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>8 giờ sáng ngày 14/4/2019, Phuthotourist cùng UBND Quận 11, Mặt trận tổ quốc VN Quận 11, Viện Lịch sử các dòng họ, đã tổ chức lễ dâng hương đầu tiên trước linh tượng vua Hùng. Và đây cũng là sự kiện ra mắt quảng trường Hùng Vương tại Đầm Sen. Hàng ngàn người dân và du khách đã đem lễ vật đến đây để dâng lên quốc tổ, cùng ôn lại lịch sử dân tộc ngàn năm.
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
        <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Bên cạnh đó, Đầm Sen cũng tổ chức thi nấu bánh chưng với sự tham gia của các đơn vị trong quận 11. Tổng số bánh chưng 3000 chiếc đã được phát lộc cho du khách đến dâng hương tại quảng trường ngay trong buổi sáng giỗ tổ.
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
          <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Trước 2007, Phuthotourist từng tự tổ chức ngày giổ tổ Hùng Vương tại Đầm Sen vào ngày 10/3 âm lịch. Với mục đích ban đầu là tạo địa điểm để nhân viên Phuthotourist và những du khách tưởng nhớ tổ tiên dân tộc. Số lượng khách tham dự lúc bấy giờ lên đến cả chục ngàn người, vượt xa dự tính ban đầu.
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
     <b>TỪ CHIẾC BÁNH KHỔNG LỒ</b>
     </div>
        <div className='col-11'>
          <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Trước 2007, Phuthotourist từng tự tổ chức ngày giổ tổ Hùng Vương tại Đầm Sen vào ngày 10/3 âm lịch. Với mục đích ban đầu là tạo địa điểm để nhân viên Phuthotourist và những du khách tưởng nhớ tổ tiên dân tộc. Số lượng khách tham dự lúc bấy giờ lên đến cả chục ngàn người, vượt xa dự tính ban đầu.
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
          <p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Sau khi Quốc Hội quyết định công nhận ngày quốc tổ vào tháng 4/2007, Phuthotourist đã phối hợp với UBMT Tổ Quốc Quận 11, tổ chức nhiều hoạt động lớn hơn. Tuy nhiên, Đầm Sen vẫn mong muốn làm được cống vật gì xứng đáng. Và phải mang ý nghĩa góp công sức của tập thể. Vậy là ý tưởng về chiếc bánh chưng khổng lồ ra đời từ những năm đầu 2010. Và đến năm 2016, Đầm Sen đã xác lập kỷ lục Guinness Thế giới với chiếc bánh chưng khổng lồ nặng nhất: 2,5 Tấn. Để làm chiếc bánh chưng này, đã có hơn 50 người với nhiều công đoạn gói, nấu bánh khác thường. Sau đó luộc suốt 3 ngày liên tục để dâng cúng Quốc tổ.
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
     <b>ĐẾN NHU CẦU CẦN MỘT ĐỀN THỜ VUA HÙNG </b>
     </div>
     <div className='row'>
        <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Từ những thành công đó, Phuthotourist lại tiếp tục suy nghĩ: Nếu như nhà thờ không thể thiếu tượng chúa, Đình chùa không thể vắng tượng phật. Thì một nơi mà hàng ngàn người dân cùng hướng về tổ tiên lại càng không thể thiếu một linh tượng.
        </p> 
        </div>
        <div className='col-4'>
        </div>
        </div>
        <img src={logo5} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
    <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>Các vị lãnh đạo và đại biểu lên dâng hương trước linh tượng vua Hùng tại Đầm Sen</p>
    <div className='row'>
        <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Qua một khảo sát, cho thấy các địa điểm thờ phụng vua Hùng chỉ tập trung khách viếng vào ngày 10/3 âm lịch. Còn những ngày thường thì do mưu sinh cuộc sống, nên ít người lui tới. Thời gian rảnh rỗi chủ yếu vui chơi để phục hồi sức khỏe làm việc. Vì vậy, việc xây dựng một đền thờ vua Hùng vào khu vui chơi giải trí là việc nên làm. Khi du khách dạo chơi qua đây, sẽ dành vài phút tưởng nhớ đến các bậc anh linh đất Việt. Và truyền dạy cho con trẻ về chân dung của những vị vua nhân ái của đất nước.
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
     <b>NHỮNG KHÓ KHĂN KHI THỰC HIỆN </b>
     </div>
     <div className='row'>
        <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Mặc dù đã lên phương án xây dựng một Quảng trường vua Hùng từ nhiều năm. Nhưng khó khăn nhất là vấn đề chân dung của vua Hùng. Trong nhận thức của người Việt, một vị vua cha phải mang những nét anh minh và đức độ; nghiêm khắc nhưng bao dung; hiền hậu nhưng quyết đoán. Để lột tả được những nét đặc trưng đó, quả là điều không dễ. Điều này đã được bàn đi bàn lại, từ đường nét gương mặt; trang phục; vóc dáng; tư thế; cho đến cả chất liệu sao cho dễ di chuyển.
        </p> 
        </div>
        <div className='col-4'>
        </div>
        </div>
        <img src={logo6} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
    <p className="text-center" style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}>Sân hành lễ với sức chứa hàng ngàn người trong ngày đầu tiên ra mắt quảng trường vua Hùng tại Đầm Sen</p>
    <div className='row'>
        <div className='col-11'><p style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>Khó khăn kế tiếp là mặt bằng để xây dựng đền thờ. Với một nơi quy tụ mọi tầng lớp nhân dân đến vui chơi như Đầm Sen, thì việc tìm vị trí xây dựng khu linh thiêng, trang trọng không phải dễ. Đặc biệt là khi ý thức người dân về bảo vệ môi trường cảnh quan chưa cao. Việc xả rác bừa bãi, ăn nằm vạ vật nơi linh thiêng, chưa kể việc khắc tên vẽ bậy vẫn thường diễn ra ở nhiều nơi tôn nghiêm khiến ban lãnh đạo công ty phải suy nghĩ.
        Phuthotourist đã phối hợp với Viện nghiên cứu lịch sử, viện lịch sử dòng họ… để tìm giải pháp. Đồng thời tìm kiếm những nhà điêu khắc có kinh nghiệm để cùng bàn bạc ý tưởng; phác họa nên một chân dung vị vua Hùng dân tộc. Và cuối cùng, ngày 14/4/2019, Quảng trường vua Hùng chính thức ra mắt tại Đầm Sen. Mở thêm một địa điểm mới để người dân đến đây dâng hương trong những ngày giỗ quốc tổ.
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
      <FontAwesomeIcon icon={faChevronLeft} /> Địa điểm sống ảo
      </div>
      <div className='col-md-2 f1'>
      Quảng Trường Âu Lạc<FontAwesomeIcon icon={faChevronRight} />     
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

export default QTVH;