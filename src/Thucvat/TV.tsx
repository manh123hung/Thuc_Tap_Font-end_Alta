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



function TV() {
 

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
  const [img4, setimg4] = useState("");

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
    const pc1= ref(storage, "GDTN/image 291.png");
    const pc2= ref(storage, "GDTN/image 291 (2).png");
    const pc3= ref(storage, "GDTN/image 291 (1).png");
    const pc4= ref(storage, "GDTN/image 291 (3).png");
    const logo1= ref(storage, "png-transparent-facebook-icon-social-media-computer-icons-facebook-facebook-rectangle-logo-website.jpg");
    const logo2= ref(storage, "png-transparent-youtube-play-button-computer-icons-youtube-television-angle-rectangle.png");
    const logo3= ref(storage, "instagram-logos-png-images-free-download-11641669602cekuhoqisp.png");
    const pc5= ref(storage, "GDTN/image 291 (4).png");
    const pc6= ref(storage, "GDTN/image 291 (5).png");
    const pc7= ref(storage, "GDTN/image 291 (6).png");
    const pc8= ref(storage, "GDTN/image 291 (7).png");
    const pc9= ref(storage, "card/Rectangle 1488.png");
    const pc10= ref(storage, "card/Rectangle 1488 (1).png");
    const pc11= ref(storage, "card/Rectangle 1488 (2).png");
    const pc12= ref(storage, "card/Rectangle 1488 (3).png");
    const logo4= ref(storage, "card/logo ngang.png");
    const img4= ref(storage, "GDTN/bg.png");

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
      getDownloadURL(img4),

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
        setimg4(urls[17]);

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
          <Link to="/khampha" className="menu-item" style={{ textDecoration: 'underline', color: 'black' }}>KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
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
   <header className="header" style={{padding:"40px"}}>
      <div className='container' style={{ color: '#259E58',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
     <b style={{borderBottom:"1px solid #259E58"}}>THỰC VẬT</b>

    </div> 
    <div className='container'>
    <div className='row' style={{}}>
        <div className="col-2" style={{color:"#EC008C",fontFamily:"Nunito"}}>
        <FontAwesomeIcon icon={faCalendar} /> Giáo dục trải nghiệm      
      </div>
      <div className="col-3" style={{color:"#666666",fontFamily:"Nunito"}}>
      <FontAwesomeIcon icon={faClock} /> 29/06/2020
      </div>
      </div>   
      </div>  
    </header>
    <div className='container'><div className="content1" style={{backgroundImage:`url(${img4})`}}>
  <h1 className="display-4">Hoa sen</h1>
  <div className='row'>
    <div className='col-7'><p className="cp">Hoa sen từ lâu đã được biết tới là loài hoa thanh khiết có ý nghĩa truyền thống lâu đời ở phương Đông. Sen mọc và lớn lên giữa bùn lầy nhưng không hề vì bùn mà bị ô nhiễm, vấy bẩn.</p>
    <div className='container'>
    <div className='container'>
    <div className='container' style={{fontFamily:"Nunito"}}>
    <div className='row' style={{}}>
        <div className="col-2">
        <FontAwesomeIcon icon={faCalendar} /> Thực vật      
      </div>
      <div className="col-3">
      <FontAwesomeIcon icon={faClock} /> 29/06/2020
      </div>

        </div>
        <div className='row'>
        <div className="col-7">
          <Link to="#" className="btn btn-success" >Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
      </div>
      <div className="col-2">
      
      </div>

        </div>
        </div>
        </div>
    </div>
    </div>
  </div>

 <div>


</div>

</div></div>
    

<div className='contaier' style={{padding:"20px"}}>
  <div className="row">
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc1} className="card-img-top" alt="Dam Sen Special" />
        <div className="card-body" > 
          <h5 className="card-title">Cây Dương Xỉ</h5>
          <p className="card-text">Là một trong những loài thực vật thuộc nhóm thực vật không có hoa và không có hạt. Nó sinh sản thông qua bào tử và thường được tìm thấy làm cây cảnh.</p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '25px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} />Thực vật</button>
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
          <h5 className="card-title">Cây Hoa Giấy</h5>
          <p className="card-text">Là một chi trong thực vật có hoa bản địa khu vực Nam Mỹ, từ Brasil về phía tây tới Peru và về phía nam tới miền nam Argentina.</p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '50px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Thực vật</button>
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
          <h5 className="card-title">Cây Lim Sét</h5>
          <p className="card-text">Cây lim xẹt có hoa màu vàng rực rỡ trông rất đẹp mắt, mang đến cho mọi người không gian sống vô cùng sống động.</p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '50px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Thực vật</button>
            </div>
            <Link to="#" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 06/11/2020</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={pc4} className="card-img-top" alt="Ngày hội ẩm thực chay" />
        <div className="card-body">
          <h5 className="card-title">Cây Lan Ý</h5>
          <p className="card-text">Là một chi trong thực vật có hoa bản địa khu vực Nam Mỹ, từ Brasil về phía tây tới Peru và về phía nam tới miền nam Argentina.</p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '50px'  }}>
            <div className="btn-group">
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Thực vật</button>
            </div>
            <Link to="/" className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left">
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 05/11/2020</button>
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
          <h5 className="card-title">Rau Má Thái</h5>
          <p className="card-text">Rau má có tên gọi khác là tích tuyết thảo hay liên tiền thảo thường mọc ở những nơi ẩm ướt, râm mát, thung lũng, bờ mương, đất mùn tơi xốp tại các vùng nhiệt đới</p>
          <br></br>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}> 
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} />Thực vật</button>
            </div>
            <Link to={"/"} className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>

          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 29/07/2020</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc6} className="card-img-top" alt="Dam Sen Lake Show" />
        <div className="card-body" > 
          <h5 className="card-title">Cây Rẻ Quạt</h5>
          <p className="card-text">Cây rẻ quạt là một dược liệu Đông y quý, có vị đắng, tính hàn vào kinh Can và Phế giúp thanh hoả, giải độc, hành huyết, tiêu đờm.</p>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%',paddingTop: '46px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Thực vật</button>
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
          <h5 className="card-title">Cây Cọ Dầu</h5>
          <p className="card-text">Là loại cây mang lại giá trị kinh tế cao do năng suất dầu cao hơn những loại cây có dầu khác.</p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '70px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Thực vật</button>
            </div>
            <Link to="#" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 02/11/2020</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={pc8} className="card-img-top" alt="Ngày hội ẩm thực chay" />
        <div className="card-body">
          <h5 className="card-title">Bèo Tây</h5>
          <p className="card-text">Là một loài thực vật thủy sinh, thân thảo, sống nổi theo dòng nước, thuộc về chi Pontederia của Họ Bèo tây.</p>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%',paddingTop: '48px'  }}>
            <div className="btn-group">
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}><FontAwesomeIcon icon={faCalendar} /> Thực vật</button>
            </div>
            <Link to="/" className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left">
            <button type="button" className="btn btn-sm"><FontAwesomeIcon icon={faClock} /> 14/09/2020</button>
          </div>
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

export default TV;