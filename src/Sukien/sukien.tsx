import React, { useEffect, useState } from 'react';
import './sukien.css'; // Tệp CSS cho kiểu dáng
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



function Sukien() {
 

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const [logoUrl, setLogoUrl] = useState("");
  const [pc1, setpc1] = useState("");
  const [pc2, setpc2] = useState("");
  const [pc3, setpc3] = useState("");
  const [pc4, setpc4] = useState("");
  const [logo1, setlogo1] = useState("");
  const [logo2, setlogo2] = useState("");
  const [logo3, setlogo3] = useState("");
  const [pc5, setpc5] = useState("");
  const [pc6, setpc6] = useState("");
  const [pc7, setpc7] = useState("");
  const [pc8, setpc8] = useState("");
  const [pc9, setpc9] = useState("");
  const [pc10, setpc10] = useState("");
  const [pc11, setpc11] = useState("");
  const [pc12, setpc12] = useState("");
  const [logo4, setlogo4] = useState("");

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
    const pc1= ref(storage, "card/image 291.png");
    const pc2= ref(storage, "card/image 291 (1).png");
    const pc3= ref(storage, "card/image 291 (2).png");
    const pc4= ref(storage, "card/image 291 (3).png");
    const logo1= ref(storage, "png-transparent-facebook-icon-social-media-computer-icons-facebook-facebook-rectangle-logo-website.jpg");
    const logo2= ref(storage, "png-transparent-youtube-play-button-computer-icons-youtube-television-angle-rectangle.png");
    const logo3= ref(storage, "instagram-logos-png-images-free-download-11641669602cekuhoqisp.png");
    const pc5= ref(storage, "card/image 291 (4).png");
    const pc6= ref(storage, "card/image 291 (5).png");
    const pc7= ref(storage, "card/image 291 (6).png");
    const pc8= ref(storage, "card/image 291 (7).png");
    const pc9= ref(storage, "card/Rectangle 1488.png");
    const pc10= ref(storage, "card/Rectangle 1488 (1).png");
    const pc11= ref(storage, "card/Rectangle 1488 (2).png");
    const pc12= ref(storage, "card/Rectangle 1488 (3).png");
    const logo4= ref(storage, "card/logo ngang.png");

    Promise.all([
      getDownloadURL(logoRef),
      getDownloadURL(pc1),
      getDownloadURL(pc2),
      getDownloadURL(pc3),
      getDownloadURL(pc4),
      getDownloadURL(logo1),
      getDownloadURL(logo2),
      getDownloadURL(logo3),
      getDownloadURL(pc5),
      getDownloadURL(pc6),
      getDownloadURL(pc7),
      getDownloadURL(pc8),
      getDownloadURL(pc9),
      getDownloadURL(pc10),
      getDownloadURL(pc11),
      getDownloadURL(pc12),
      getDownloadURL(logo4),

    ])
      .then((urls) => {
        setLogoUrl(urls[0]);
        setpc1(urls[1]);
        setpc2(urls[2]);
        setpc3(urls[3]);
        setpc4(urls[4]);
        setlogo1(urls[5]);
        setlogo2(urls[6]);
        setlogo3(urls[7]);
        setpc5(urls[8]);
        setpc6(urls[9]);
        setpc7(urls[10]);
        setpc8(urls[11]);
        setpc9(urls[12]);
        setpc10(urls[13]);
        setpc11(urls[14]);
        setpc12(urls[15]);
        setlogo4(urls[16]);

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
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
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
          <Link to="/Sukien" className="menu-item" style={{ textDecoration: 'underline', color: 'black' }}>SỰ KIỆN</Link>
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
   <header className="header" style={{padding:"40px"}}>
      <div className='container' style={{ color: '#259E58', textDecoration: 'underline',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
     <b>SỰ KIỆN</b>
    </div>      
    </header>
  <div className="row">
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc1} className="card-img-top" alt="Dam Sen Special" />
        <div className="card-body" > 
          <h5 className="card-title">Ra mắt vé Đầm Sen Special chơi cả 2 công viên</h5>
          <p className="card-text">Loại vé này bao gồm cả 2 công viên để chào đón tháng hè đặc biệt của năm nay với chủ đề "quẩy hè đi, chờ chi!"</p>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}> 
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
            </div>
            <Link to={"/"} className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>

          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 06/11/2020</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc2} className="card-img-top" alt="Dam Sen Lake Show" />
        <div className="card-body" > 
          <h5 className="card-title">Sắp ra mắt Đầm Sen Lake Show cuối năm 2020</h5>
          <p className="card-text">Chỉ còn hơn 1 tháng nữa, Công viên văn hóa Đầm Sen sắp ra mắt dự án Lake Show (biểu diễn nhạc nước trên hồ) trên mặt hồ lớn nh...</p>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
            </div>
            <Link to="" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 05/11/2020</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc3} className="card-img-top" alt="Lễ hội cún cưng" />
        <div className="card-body" > 
          <h5 className="card-title">Lễ hội cún cưng</h5>
          <p className="card-text">Ngày 27.10, hàng trăm chủ chó cưng đã tập trung tại khuôn viên Công viên văn hóa Đầm Sen (Q.11, TP.HCM) để tham gia "Lễ...</p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '50px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
            </div>
            <Link to="#" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 07/12/2018</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={pc4} className="card-img-top" alt="Ngày hội ẩm thực chay" />
        <div className="card-body">
          <h5 className="card-title">Ngày hội ẩm thực chay 2019 Đầm Sen: "Vu Lan báo hiếu"</h5>
          <p className="card-text">Du khách sẽ được thưởng thức hơn 100 món ăn chay, cùng các loại thức uống được chế biến theo chủ đề ẩm thực Sen</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
            </div>
            <Link to="/" className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left">
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 10/08/2019</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc5} className="card-img-top" alt="Dam Sen Special" />
        <div className="card-body" > 
          <h5 className="card-title">Cùng bảo chí nói không với rác thải môi trường </h5>
          <p className="card-text">Chương trình được tổ chức tại khu thiên niên của CVVH Đầm Sen với sự đồng hành của ngân hàng Việt Nam Thương Tín -...</p>
          <br></br>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}> 
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
            </div>
            <Link to={"/"} className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>

          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 21/06/2019</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc6} className="card-img-top" alt="Dam Sen Lake Show" />
        <div className="card-body" > 
          <h5 className="card-title">Đón năm mới 2020: nhiều sản phẩm miễn phí</h5>
          <p className="card-text">Ngoài không gian "sống ảo" tại Đầm Sen, du khách còn được tham gia các sản phẩm miễn phí của giáng sinh và đón năm mới 2020.</p>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
            </div>
            <Link to="" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 29/07/2020</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc7} className="card-img-top" alt="Lễ hội cún cưng" />
        <div className="card-body" > 
          <h5 className="card-title">Sắp ra mắt Quảng trường Vua Hùng tại Đầm Sen</h5>
          <p className="card-text">Nhằm đáp ứng nhu cầu đang hướng trong dịp giỗ tổ Hùng Vương, Đầm Sen sẽ ra mắt Quảng trường Vua Hùng vào ngày...</p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
            </div>
            <Link to="#" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 08/04/2019</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={pc8} className="card-img-top" alt="Ngày hội ẩm thực chay" />
        <div className="card-body">
          <h5 className="card-title">Hè 2019 và những chương trình đặc biệt cho thiếu nhi</h5>
          <p className="card-text">Với chủ đề "Đầm Sen Amazing Summer 2019", các chương trình vui chơi tại Đầm Sen bắt đầu từ 25/6 cho đến hết 11/8/2019.</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Sự kiện</button>
            </div>
            <Link to="/" className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left">
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 30/05/2019</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='container'>
    <div className='row'>
      <div className='col-md-10 f1'>
      <FontAwesomeIcon icon={faChevronLeft} /> Địa Điểm Sống Ảo 
      </div>
      <div className='col-md-2 f1'>
      Quảng Trường Âu lạc <FontAwesomeIcon icon={faChevronRight} />     
        </div>
    </div>
  </div>
  <div className="container">
  <div className="row align-items-center">
    <div className="col">
       <p style={{color:"#259E58",fontSize:"32px",fontFamily:"Bangers",fontStyle:"italic",lineHeight:"34.05px"}}>Có Thể Bạn Thích</p>
    </div>
  </div>
  <div className="row position-relative">
    {displayedItems.map((item, index) => (
      <div className="col-md-3" key={index} >
        <div className="card border-0 shadow-sm" style={{height:"300px"}}>
          <img className="card-img-top" src={item.image} />
          <div className="card-body">
            <div className='row'>
            <div className='col-md-8'><div className="card-title" style={{color:"#259E58",fontSize:"14px"}}>{item.title}</div>
            </div>
            <div className='col-md-4'><div className="card-text" style={{color:"#666666",fontSize:"13px"}}>{item.description}</div>
            </div>
            </div>
            <div style={{color:"#EC008C",fontSize:"14px"}}><FontAwesomeIcon icon={faCalendar} /> Cảnh đẹp</div>
          </div>
        </div>
      </div>
    ))}
    <button
      className="btn btn-primary position-absolute top-50 start-0 translate-middle-y" style={{width: '40px',color:"#4CAF50",backgroundColor:"white",border:"none"}}
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button
      className="btn btn-primary position-absolute top-50 end-0 translate-middle-y" style={{width: '40px',color:"#4CAF50",backgroundColor:"white",border:"none"}}
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
</div>

</div>

     </div>
          </div><footer style={{ backgroundColor: "#259E58", color: "white" }}>
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

export default Sukien;