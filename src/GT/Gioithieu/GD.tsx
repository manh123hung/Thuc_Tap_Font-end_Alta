import React, { useEffect, useState } from 'react';
import './GD.css'; // Tệp CSS cho kiểu dáng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faComment, faPhone } from '@fortawesome/free-solid-svg-icons';
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
import { firestore, storage } from '../../firebase';
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import '@splidejs/react-splide/css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '../../Footer';
import tabs from '../../tabs'; // Import mảng tabs
function GD() {
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
        const quanlyRef = await getDocs(collection(firestore, "Gioithieu"));
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
  return (
  <div className="bs">
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-3 left-side" style={{ width: '250px' }}>   
          <div className="left-side-content">
          <button className="menu-icon" style={{border:"none"}} onClick={toggleMenu}>
              {showMenu ? '≡' : 'x'}
            </button>          <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item">KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',textDecoration: 'underline', color: 'black'}}>
          <Link to="/GD" > <DropdownItem className="btn btn-white" >Giới thiệu</DropdownItem></Link>
          <Link to="/LSHH" > <DropdownItem className="btn btn-white" >Lịch sử hình thành</DropdownItem></Link>
          <Link to="/Thanhvien" > <DropdownItem className="btn btn-white" >Thành viên</DropdownItem></Link>
          <Link to="/BM" > <DropdownItem className="btn btn-white" >Chính sách bảo mật</DropdownItem> </Link>
            </Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
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
   <p style={{ fontSize: '0.8em',color:"#666666",textAlign:"center",marginTop:"-10px"}}>
    {data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TH1} 
            </div>
          ))}
      </div>
    )}</p>

   <header className="header" style={{padding:"20px"}}>
      <div  style={{ color: '#259E58' ,lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",textAlign:"center"}}>
     <b style={{borderBottom:"2px solid #259E58"}}> {data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.Tieude} 
            </div>
          ))}
      </div>
    )} </b>
     </div>
    </header>
    <div >
   <div className="container ct02">
  <div className="image-container2">
    <img src={img1} alt="Vượn má vàng" />
  </div>
  <div className="section pink" style={{padding:"50px",backgroundColor:"#259E58"}}>
    <h2 >  {data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TDND0} 
            </div>
          ))}
  
      </div>
    )}   </h2>
    <p > {data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.Noidung1} 
            </div>
          ))}
  
      </div>
    )} </p>
    <p><Link to="/" className="btn btn-white" style={{color:"#259E58",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>

  </div>

</div>
<p style={{ fontSize: '0.8em',color:"#666666",marginLeft:"420px",marginTop:"-50px"}}>{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TH2} 
            </div>
          ))}
      </div>
    )}</p>

  
   <div className="container ct01">
  <div className="image-container">
    <img src={img2} alt="Vượn má vàng" />

  </div>
  <div className="section pink" style={{padding:"50px"}}>
    <h2 >{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TDND1} 
            </div>
          ))}
  
      </div>
    )}</h2>
    <p >{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.Noidung2} 
            </div>
          ))}
  
      </div>
    )}</p>
    <p><Link to="/" className="btn btn-white" style={{color:"#EC008C",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>

  </div>

</div>
<p style={{ fontSize: '0.8em',color:"#666666",marginLeft:"550px",marginTop:"-50px"}}>
{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TH3} 
            </div>
          ))}
      </div>
    )}
</p>
</div>
<div >
   <div className="container ct02">
  <div className="image-container2">
    <img src={img3} alt="Vượn má vàng" />

  </div>
  <div className="section pink" style={{padding:"50px",backgroundColor:"#259E58"}}>
    <h2 >{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TDND2} 
            </div>
          ))}
  
      </div>
    )}</h2>
    <p >{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.Noidung4} 
            </div>
          ))}
  
      </div>
    )}</p>
    <p><Link to="/" className="btn btn-white" style={{color:"#259E58",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>

  </div>

</div>
<p style={{ fontSize: '0.8em',color:"#666666",marginLeft:"420px",marginTop:"-50px"}}>
{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TH4} 
            </div>
          ))}
      </div>
    )}</p>

  
   <div className="container ct01">
  <div className="image-container">
    <img src={img4} alt="Vượn má vàng" />

  </div>
  <div className="section pink" style={{padding:"50px"}}>
    <h2 >{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TDND3} 
            </div>
          ))}
  
      </div>
    )}</h2>
    <p >{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.Noidung3} 
            </div>
          ))}
  
      </div>
    )}</p>
    <p><Link to="/" className="btn btn-white" style={{color:"#EC008C",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>

  </div>
</div>
<p style={{ fontSize: '0.8em',color:"#666666",marginLeft:"550px",marginTop:"-50px"}}>{data.length > 0 && (
      <div>
          {data.map((item, index) => (
            <div key={index}>
             {item.TH5} 
            </div>
          ))}
      </div>
    )}</p>
</div>
<div className="container mt-5" >
  <h2 className="text-center" style={{color:"#EC008C",lineHeight:"53.2px",fontFamily:"Bangers"}}> <b> NHỮNG LOẠI HÌNH DỊCH VỤ TRONG TÂM</b></h2>
 <div className='container'style={{padding:"20px"}}>
 <div className="row" style={{marginRight:"-80px"}}>
    <div className="col-4 ">
    <div className="card card1 service-card text-white" >
    <div className="card-title " style={{backgroundColor:"white"}} ><img src={img11} style={{height:"50px",width:"50px"}} /></div>
      <h2 className="card-title" style={{textAlign:"center",color:"#259E58"}}>
      {data.length > 0 && (
              <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.L1 }} />
                  </div>
                ))}
              </div>
            )}
      </h2>
      <div className="card-list">
      {data.length > 0 && (
              <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.L01 }} />
                  </div>
                ))}
              </div>
            )}
      </div>
    </div>
    </div>
    <div className="col-4 ">
    <div className="card card1  service-card text-white" >
    <div className="card-title " style={{backgroundColor:"white"}} ><img src={img12} style={{height:"50px",width:"50px"}} /></div>
      <h2 className="card-title" style={{textAlign:"center",color:"#259E58"}}>   {data.length > 0 && (
              <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.L2 }} />
                  </div>
                ))}
              </div>
            )}</h2>
      <div className="card-list">
      {data.length > 0 && (
              <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.L02 }} />
                  </div>
                ))}
              </div>
            )}
      </div>
    </div>
    </div>
    <div className="col-4 ">
    <div className="card card1 service-card  text-white" >
    <div className="card-title " style={{backgroundColor:"white"}} ><img src={img13} style={{height:"50px",width:"50px"}} /></div>
      <h2 className="card-title" style={{textAlign:"center",color:"#259E58"}}>   {data.length > 0 && (
              <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.L3 }} />
                  </div>
                ))}
              </div>
            )}</h2>
      <div className="card-list">
      {data.length > 0 && (
              <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.L03 }} />
                  </div>
                ))}
              </div>
            )}
      </div>
    </div>  
    </div>
  </div>
 </div>
        </div>
        <h2 className="text-center" style={{color:"#EC008C",lineHeight:"53.2px",fontFamily:"Bangers"}}> <b> GIÁ VÉ</b></h2>
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
                  <h4 className="card-subtitle mb-2 "><b> {data.map((item, index) => (
                    <div key={index}>
                    {item.TV1} 
                    </div>
                  ))}</b></h4>
                  <h4 className="card-subtitle mb-2 "> {data.map((item, index) => (
                    <div key={index}>
                    {item.GTV1} 
                    </div>
                  ))}</h4>
                  <p className="card-text" style={{opacity:"70%"}}>{data.map((item, index) => (
                    <div key={index}>
                    {item.GiaVe1} 
                    </div>
                  ))}</p>
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
                  <h4 className="card-subtitle mb-2 "><b> {data.map((item, index) => (
                    <div key={index}>
                    {item.TV2} 
                    </div>
                  ))}</b></h4>
                  <h4 className="card-subtitle mb-2 "> {data.map((item, index) => (
                    <div key={index}>
                    {item.GTV} 
                    </div>
                  ))}</h4>
                  <p className="card-text" style={{opacity:"70%"}}>{data.map((item, index) => (
                    <div key={index}>
                    {item.GiaVe2} 
                    </div>
                  ))}</p>
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
                  <h4 className="card-subtitle mb-2 "><b>
                    {data.map((item, index) => (
                    <div key={index}>
                    {item.TV3} 
                    </div>
                  ))}</b></h4>
                  <h4 className="card-subtitle mb-2 ">{data.map((item, index) => (
                    <div key={index}>
                    {item.GTV2} 
                    </div>
                  ))}</h4>
                  <p className="card-text" style={{opacity:"70%"}}>{data.map((item, index) => (
                    <div key={index}>
                    {item.GiaVe
                    } 
                    </div>
                  ))}</p>
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
                  <h4 className="card-subtitle mb-2 "><b>{data.map((item, index) => (
                    <div key={index}>
                    {item.VT4
                    } 
                    </div>
                  ))} </b></h4>
                  <h4 className="card-subtitle mb-2 ">{data.map((item, index) => (
                    <div key={index}>
                    {item.GTV3
                    } 
                    </div>
                  ))}
                  </h4>
                  <p className="card-text" style={{opacity:"70%"}}>{data.map((item, index) => (
                    <div key={index}>
                    {item.Giave
                    } 
                    </div>
                  ))}
                  </p>
                  <p><Link to="/" className="btn btn-white" style={{color:"#259E58",backgroundColor:"white",border:"none", width:"120px"}}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>    </p>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container' style={{padding:"20px"}}>
              <h2 className="ghi-chu">
                {data.length > 0 && (
              <div>
                {data.map((item, index) => (
                  <div key={index}>
                    <div dangerouslySetInnerHTML={{ __html: item.TD1 }} />
                  </div>
                ))}
              </div>
            )}</h2>
              <ul className='ctv1' style={{color:"#858585",fontSize:"18px"}}>
                {data.length > 0 && (
                        <div>
                          {data.map((item, index) => (
                            <div key={index}>
                              <div dangerouslySetInnerHTML={{ __html: item.Ghichu }} />
                            </div>
                          ))}
                        </div>
                      )}
                </ul>
              </div>
      </div>
     </div>
      </div>
      <Footer />
        </div>
      </div>
    </div>
  );
}

export default GD;