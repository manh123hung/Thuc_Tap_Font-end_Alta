import React, { useEffect, useState } from 'react';
import './TV.css'; // Tệp CSS cho kiểu dáng
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
import { firestore, storage } from '../firebase';
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import '@splidejs/react-splide/css';
import Footer from '../Footer';
import tabs from '../tabs'; // Import mảng tabs



function TV() {
  interface Tab {
    id: string;
    label: string;
    content: JSX.Element;
  }
  const [activeTab, setActiveTab] = useState<string>('troChoi');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

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
        const quanlyRef = await getDocs(collection(firestore, "TV"));
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',position:"fixed",marginLeft:"1180px",marginTop:"600px",zIndex: 100 }}>
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const data1 = [
    {
      image: pc9,
      title:  <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T9}} />
        </div>
      ))}
    </div>,
      description:  <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.D09}} />
        </div>
      ))}
    </div>,
    },
    {
      image: pc10,
      title:  <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T10}} />
        </div>
      ))}
    </div>,
      description:  <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.D10}} />
        </div>
      ))}
    </div>,
    },
    {
      image: pc11,
      title: <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T11}} />
        </div>
      ))}
    </div>,
      description:  <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.D11}} />
        </div>
      ))}
    </div>,
    }, {
      image: pc12,
      title:  <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T12}} />
        </div>
      ))}
    </div>,
      description:  <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.D12}} />
        </div>
      ))}
    </div>,
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
          <button className="menu-icon" style={{border:"none"}} onClick={toggleMenu}>
              {showMenu ? '≡' : 'x'}
            </button>            <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item" style={{ textDecoration: 'underline', color: 'black' }}>KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
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
   <header className="header" style={{padding:"40px"}}>
      <div className='container' style={{ color: '#259E58',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
     <b > <div>
      {data.map((item, index) => (
        <div key={index}>
          <div style={{borderBottom:"1px solid #259E58"}} dangerouslySetInnerHTML={{ __html: item.Tieude}} />
        </div>
      ))}
    </div></b>

    </div> 
    <div className='container'>
    <div className='row' style={{}}>
        <div className="col-2" style={{color:"#EC008C",fontFamily:"Nunito"}}>
        {data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.Danhmuc} 
                              </div>
                            ))}      </div>
      <div className="col-3" style={{color:"#666666",fontFamily:"Nunito"}}>
      {data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faClock} />  {item.Ngay} 
                              </div>
                            ))}      </div>
      </div>   
      </div>  
    </header>
    <div className='container'><div className="content1" style={{backgroundImage:`url(${img4})`}}>
  <h1 className="display-4"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.TD1}} />
        </div>
      ))}
    </div></h1>
  <div className='row'>
    <div className='col-7'><p className="cp"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.ND1}} />
        </div>
      ))}
    </div></p>
    <div className='container'>
    <div className='container'>
    <div className='container' style={{fontFamily:"Nunito"}}>
    <div className='row' style={{}}>
        <div className="col-2">
        {data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.Danhmuc} 
                              </div>
                            ))}   
      </div>
      <div className="col-3">
       {data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faClock} />  {item.Ngay} 
                              </div>
                            ))}
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
          <h5 className="card-title"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T1}} />
        </div>
      ))}
    </div></h5>
          <p className="card-text"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.N1}} />
        </div>
      ))}
    </div></p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '25px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</button>
            </div>
            <Link to={"/"} className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>

          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm">{data.map((item, index) => (
                              <div key={index}>
                              <FontAwesomeIcon icon={faClock} />  {item.D01} 
                              </div>
                            ))}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc2} className="card-img-top" alt="Dam Sen Lake Show" />
        <div className="card-body" > 
          <h5 className="card-title"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T2}} />
        </div>
      ))}
    </div></h5>
          <p className="card-text"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.N2}} />
        </div>
      ))}
    </div></p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '50px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</button>
            </div>
            <Link to="" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm">{data.map((item, index) => (
                              <div key={index}>
                              <FontAwesomeIcon icon={faClock} />  {item.D02} 
                              </div>
                            ))}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc3} className="card-img-top" alt="Lễ hội cún cưng" />
        <div className="card-body" > 
          <h5 className="card-title"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T3}} />
        </div>
      ))}
    </div></h5>
          <p className="card-text"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.N3}} />
        </div>
      ))}
    </div></p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '50px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</button>
            </div>
            <Link to="#" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm">{data.map((item, index) => (
                              <div key={index}>
                              <FontAwesomeIcon icon={faClock} />  {item.D03} 
                              </div>
                            ))}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={pc4} className="card-img-top" alt="Ngày hội ẩm thực chay" />
        <div className="card-body">
          <h5 className="card-title"> <div>
              {data.map((item, index) => (
                <div key={index}>
                  <div dangerouslySetInnerHTML={{ __html: item.T4}} />
                </div>
              ))}
            </div></h5>
          <p className="card-text"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.N4}} />
        </div>
      ))}
    </div></p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '50px'  }}>
            <div className="btn-group">
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</button>
            </div>
            <Link to="/" className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left">
            <button type="button" className="btn btn-sm">{data.map((item, index) => (
                              <div key={index}>
                              <FontAwesomeIcon icon={faClock} />  {item.D04} 
                              </div>
                            ))}</button>
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
          <h5 className="card-title"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T5}} />
        </div>
      ))}
    </div></h5>
          <p className="card-text"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.N5}} />
        </div>
      ))}
    </div></p>
          <br></br>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}> 
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</button>
            </div>
            <Link to={"/"} className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>

          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"> {data.map((item, index) => (
                              <div key={index}>
                              <FontAwesomeIcon icon={faClock} />  {item.D05} 
                              </div>
                            ))}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc6} className="card-img-top" alt="Dam Sen Lake Show" />
        <div className="card-body" > 
          <h5 className="card-title">{data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T6}} />
        </div>
      ))}</h5>
          <p className="card-text"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.N6}} />
        </div>
      ))}
    </div></p>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%',paddingTop: '46px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</button>
            </div>
            <Link to="" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm"> {data.map((item, index) => (
                              <div key={index}>
                              <FontAwesomeIcon icon={faClock} />  {item.D06} 
                              </div>
                            ))}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
    <div className="card">
        <img src={pc7} className="card-img-top" alt="Lễ hội cún cưng" />
        <div className="card-body" > 
          <h5 className="card-title"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T7}} />
        </div>
      ))}
    </div></h5>
          <p className="card-text"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.N7}} />
        </div>
      ))}
    </div></p>
          <div className="d-flex justify-content-between align-items-center"  style={{ width: '100%',paddingTop: '70px'  }}>
            <div className="btn-group" style={{ flexShrink: 0 }}>
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</button>
            </div>
            <Link to="#" className="btn btn-success" style={{ flexShrink: 0 }}>Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left" style={{ flexShrink: 0 }}>
            <button type="button" className="btn btn-sm">{data.map((item, index) => (
                              <div key={index}>
                              <FontAwesomeIcon icon={faClock} />  {item.D07} 
                              </div>
                            ))}</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={pc8} className="card-img-top" alt="Ngày hội ẩm thực chay" />
        <div className="card-body">
          <h5 className="card-title"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.T8}} />
        </div>
      ))}
    </div></h5>
          <p className="card-text"> <div>
      {data.map((item, index) => (
        <div key={index}>
          <div dangerouslySetInnerHTML={{ __html: item.N8}} />
        </div>
      ))}
    </div></p>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%',paddingTop: '48px'  }}>
            <div className="btn-group">
              <button type="button" className="btn btn-sm" style={{color:'#EC008C'}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM1} 
                              </div>
                            ))}</button>
            </div>
            <Link to="/" className="btn btn-success">Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
          <div className="text-left">
            <button type="button" className="btn btn-sm"> {data.map((item, index) => (
                              <div key={index}>
                              <FontAwesomeIcon icon={faClock} />  {item.D08} 
                              </div>
                            ))}</button>
          </div>
        </div>
      </div>
    </div>
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
            <div style={{color:"#EC008C",fontSize:"14px"}}>{data.map((item, index) => (
                              <div key={index}>
                             <FontAwesomeIcon icon={faCalendar} />  {item.DM2} 
                              </div>
                            ))}</div>
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
          </div>
    <Footer />
        </div>
      </div>
    </div>
  
   
  
  );
}

export default TV;