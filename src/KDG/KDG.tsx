import React, { useEffect, useState } from 'react';
import './KDG.css'; // Tệp CSS cho kiểu dáng
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



function KDG() {
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
    const img1= ref(storage, "KDG/Rectangle 3 (1).png");
    const img2= ref(storage, "KDG/Rectangle 3.png");
    const img3= ref(storage, "KDG/Rectangle 3 (2).png");
    const img4= ref(storage, "KDG/Rectangle 3 (3).png");
    const img5= ref(storage, "KDG/Rectangle 1488 (8).png");
    const img6= ref(storage, "KDG/Rectangle 1488 (9).png");
    const img7= ref(storage, "KDG/Rectangle 1488 (10).png");
    const img8= ref(storage, "KDG/Rectangle 1488 (11).png");

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
      image: img5,
      title: 'Khỉ đuôi dài',
      description: '04/01/2021',
    },
    {
      image: img6,
      title: 'Gấu ngựa',
      description: '02/03/2020',
    },
    {
      image: img7,
      title: 'Đười ươi Sumatra',
      description: '05/03/2020',
    }, {
      image: img8,
      title: 'Hà Mã Châu phi',
      description: '05/03/2020',
    }, {
      image: img8,
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
          <Link to="/khampha" className="menu-item" style={{color:'black',textDecoration:'underline'}}>KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"white"}}>
          <DropdownItem className="btn btn-white" ><Link to="/LSHH" >Lịch sử hình thành</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Thành viên</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/BM" >Chính sách bảo mật</Link></DropdownItem> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"white"}}>
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
     <b >KHỈ ĐUÔI DÀI</b>
    </div> 
    <div className='container'>
    <div className='row' style={{}}>
        <div className="col-3" style={{color:"#EC008C",fontFamily:"Nunito"}}>
        <FontAwesomeIcon icon={faCalendar} /> Vườn thú     
      </div>
      <div className="col-3" style={{color:"#666666",fontFamily:"Nunito"}}>
      <FontAwesomeIcon icon={faClock} /> 04/01/2021
      </div>
      </div>   
      </div>  
     </div>
     <div className="col-3">
      <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
        Mô tả
       </div>
       <div style={{borderBottom:"2px solid #EC008C"}}></div>
       <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>Khỉ đuôi dài tại vườn thú 
       Đầm Sen khô</div>
     </div>
    </div>      
   
    </header>
    <div className="container">
      <div className='row'>
        <div className='col-4'>
        <img src={img2} className="img-fluid" alt="Responsive image" style={{padding:"40px",height:"386px",width:"475px"}}/>
        <p className="text-center" style={{fontSize:"12px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}> Loài khỉ đuôi dài</p>

</div>
    <div className='col-8'>
    <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
    <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",}}>
     <b>TÌM HIỂU VỀ KHỈ ĐUÔI DÀI</b>
     </div>
       <p>Khỉ đuôi dài (Macaca fascicularis) có đuôi dài gần bằng hoặc hơn chiều dài cơ thể (khoảng 50 cm), và là loài có đuôi dài nhất. Lông chúng thường có màu xám đến nâu đỏ. Màu lông phía sau nhạt hơn, và lông trên đầu mọc hướng về sau. Thường có mào. Mặt có màu hồng. </p>
       </div>
    </div>
    </div>
    <div className='row'>
    <div className='col-8'>
    <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
    <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",}}>
     </div>
       <p>Con đực lớn thường có hai chỏm lông trắng trên miệng như bộ ria. Con cái có lông quanh mồm thưa hơn. Con non sinh ra có màu đen. Thức ăn chủ yếu là quả, hạt, nõn cây, lá và động vật như côn trùng, ếch, nhái, cua…. Chúng hoạt động vào ban ngày và trên cây. Loài này bơi rất giỏi và thường nhảy xuống nước từ cành cây.</p>
     <p>  Trong tự nhiên, Khỉ đuôi dài sống thành đàn từ 10-100 con. Trung bình 1 con đực sẽ có 2,5 con cái. Mỗi lần mang thai từ 160 – 170 ngày. Và chỉ sinh 1 con. Điểm đặc biệt khỉ chúa là dáng vẻ oai phong. Đồng thời, khỉ chúa chỉ “cưng nhất” một chú khỉ con nào đó. Và chú khỉ con ấy sẽ được xem là “thái tử” kế vị ngôi sau này.</p>
       </div>
    </div>
        <div className='col-4'>
        <img src={img3} className="img-fluid" alt="Responsive image" style={{padding:"40px",height:"386px",width:"475px"}}/>
        <p className="text-center" style={{fontSize:"12px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}> Khỉ đuôi dài chúa chăm con</p>

</div>
 
    </div>
    <div className='row'>
        <div className='col-4'>
        <img src={img4} className="img-fluid" alt="Responsive image" style={{padding:"40px",height:"386px",width:"475px"}}/>
        <p className="text-center" style={{fontSize:"12px", fontFamily:"Nunito",color:"#666666",marginTop:"-20px"}}> Loài khỉ đuôi dài</p>

</div>
    <div className='col-8'>
    <div style={{fontSize:"18px", fontFamily:"Nunito",color:"#666666",padding:"35px"}}>
    <div  style={{ color: '#EC008C',lineHeight:'53.2px',fontFamily:'Bangers',fontSize:"38px",}}>
     <b>CUỘC CHIẾN QUYỀN LỰC</b>
     </div>
       <p>Nếu con khỉ đực nào trong bầy có ý định “léng phéng” với các tề thiếp của khỉ chúa, nó sẽ bị đánh đuổi ra khỏi đàn. Còn nếu muốn “đảo chính” thì không hề dễ bởi vóc dáng to lớn của khỉ chúa. Thường thì đám khỉ đực chỉ dám “giành ngôi” khi khỉ chúa già hoặc bệnh tật. Còn không thì chúng phải di tản sang địa bàn khác, hoặc lẩn tránh khi khỉ chúa xuất hiện.
Những con khỉ bị phế truất như vậy sẽ lang thang tìm bầy khác gia nhập. Hoặc tìm những bầy yếu hơn để khiêu chiến. Chúng đánh nhau “một mất một còn”, và nếu nó thắng, bầy đó là của nó. Đó là bản chất của đời sống hoang dã.
Loại khỉ đuôi dài này đang được chăm sóc tại khu vườn thú của Công viên Văn hóa Đầm Sen.</p>
       </div>
    </div>
    </div>
    
</div>
<div className='container'>
    <div className='row'>
      <div className='col-md-10 f1'>
      <FontAwesomeIcon icon={faChevronLeft} /> Vượn đen má vàng
      </div>
      <div className='col-md-2 f1'>
      Cá hỏa tiễn <FontAwesomeIcon icon={faChevronRight} />     
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
            <div style={{color:"#EC008C",fontSize:"14px"}}><FontAwesomeIcon icon={faCalendar} /> Vườn thú</div>
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

export default KDG;