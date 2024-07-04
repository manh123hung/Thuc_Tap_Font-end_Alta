import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './index3.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { firestore, storage } from '../firebase';
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Dropdown, DropdownItem } from "flowbite-react";
import ButtonDropdown from './ButtonDropdown'; // Import ButtonDropdown component
import InfoComponent from './InfoComponent'; // Import InfoComponent

function Khampha() {
  const [logoUrl, setLogoUrl] = useState("");
const [slide1, setSlide1] = useState("");
const [logo1, setlogo1] = useState("");
const [logo2, setlogo2] = useState("");
const [logo3, setlogo3] = useState("");

  


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
    const slide1= ref(storage, "Map-26-6_ver1 1.png");
    const logo1= ref(storage, "png-transparent-facebook-icon-social-media-computer-icons-facebook-facebook-rectangle-logo-website.jpg");
    const logo2= ref(storage, "png-transparent-youtube-play-button-computer-icons-youtube-television-angle-rectangle.png");
    const logo3= ref(storage, "instagram-logos-png-images-free-download-11641669602cekuhoqisp.png");
    Promise.all([
      getDownloadURL(logoRef),
      getDownloadURL(slide1),

      getDownloadURL(logo1),
      getDownloadURL(logo2),
      getDownloadURL(logo3),
    ])
      .then((urls) => {
        setLogoUrl(urls[0]);
        setSlide1(urls[1]);
        setlogo1(urls[2]);
        setlogo2(urls[3]);
        setlogo3(urls[4]);
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


  const infoData = [
   
    {
      title: '10',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 270,
      left: 870,
    }, 
    {
      title: '2',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 400,
      left: 800,
    }, {
      title: '11',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 220,
      left: 1050,
    }, 
    {
      title: '38',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 430,
      left: 1000,
    }, 
    {
      title: '36',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 480,
      left: 1100,
    }, 
    {
      title: '37',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 540,
      left: 1070,
    }, 
    {
      title: '42',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 500,
      left: 980,
    }, 
    {
      title: '35',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 590,
      left: 1020,
    }, 
    {
      title: '39',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 640,
      left: 1070,
    },
    {
      title: '56',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 540,
      left: 900,
    },
    {
      title: '13',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 670,
      left: 880,
    },
    {
      title: '19',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 700,
      left: 800,
    },
    {
      title: '58',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 770,
      left: 820,
    },
    {
      title: '20',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 880,
      left: 920,
    },
    {
      title: '09',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 800,
      left: 1100,
    },
    {
      title: '04',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 960,
      left: 1100,
    },
    {
      title: '07',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1020,
      left: 988,
    },
    {
      title: '08',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1040,
      left: 907,
    },
    {
      title: '53',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1190,
      left: 1157,
    },
    {
      title: '24',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1555,
      left: 630,
    },
    {
      title: '23',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1500,
      left: 540,
    },
    {
      title: '17',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1500,
      left: 440,
    },
    {
      title: '27',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1370,
      left: 450,
    },
    {
      title: '25',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1420,
      left: 543,
    },
    {
      title: '06',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1450,
      left: 620,
    },
    {
      title: '62',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1420,
      left: 680,
    },
    {
      title: '39',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1480,
      left: 740,
    },
    {
      title: '55',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1350,
      left: 730,
    },
    {
      title: '60',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1300,
      left: 900,
    },
    {
      title: '22',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1220,
      left: 860,
    },
    {
      title: '28',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1300,
      left: 630,
    },
    {
      title: '30',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1280,
      left: 540,
    },
    {
      title: '26',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1380,
      left: 620,
    },
    {
      title: '31',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1340,
      left: 510,
    },
    {
      title: '16',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1460,
      left: 380,
    },
    {
      title: '15',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1490,
      left: 350,
    },
    {
      title: '61',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1390,
      left: 250,
    },
    {
      title: '34',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1250,
      left: 290,
    },
    {
      title: '34',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1250,
      left: 290,
    },
    {
      title: '03',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1250,
      left: 200,
    },
    {
      title: '01',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1190,
      left: 260,
    },
    {
      title: '05',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1160,
      left: 320,
    },
    {
      title: '52',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1100,
      left: 280,
    },
    {
      title: '43',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1060,
      left: 130,
    },
    {
      title: '51',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 910,
      left: 130,
    },
    {
      title: '47',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 930,
      left: 380,
    },
    {
      title: '48',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 790,
      left: 380,
    },
    {
      title: '49',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 700,
      left: 380,
    },
    {
      title: '45',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 600,
      left: 480,
    },
    {
      title: '12',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 690,
      left: 600,
    },
    {
      title: '12',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 690,
      left: 600,
    },
    {
      title: '21',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 760,
      left: 630,
    },
    {
      title: '41',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 830,
      left: 310,
    },
    {
      title: '50',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 930,
      left: 490,
    },
    {
      title: '54',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top:900,
      left: 640,
    },
    {
      title: '18',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1030,
      left: 490,
    },
    {
      title: '57',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1000,
      left: 620,
    },
    {
      title: '46',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1020,
      left: 270,
    },
    {
      title: '14',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1540,
      left: 400,
    },
    {
      title: '21',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1670,
      left: 720,
    },
    {
      title: '13',
      content: '<button>Click me!</button>  Nội dung thông tin cho Button 1',
      link: 'https://www.google.com',
      top: 1630,
      left: 820,
    },
  ];

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
  <DropdownItem className="btn btn-white" ><Link to="/settings" >Lịch sử hình thành</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/settings" >Thành viên</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/settings" >Chính sách bảo mật</Link></DropdownItem> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé trong công viên</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé tập thể</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé dịch vụ</Link></DropdownItem>
            <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé tập thể dục</Link></DropdownItem>
          
          </Dropdown>
          <Link to="/Sukien" className="menu-item">SỰ KIỆN</Link>
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
            top: 0,
            right: 0,
            bottom: 0,
            width: '83%',
          }}>
            <div className="col-md-10 right-side" style={{ 
              backgroundColor: "#E6FFD2",
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              marginTop:-40
            }}>
    <div className="map-container bs3">
  <img src={slide1} alt="caijdo" />
  {infoData.map((info, index) => (
    <div key={index} style={{ 
      position: 'absolute', 
      top: `${info.top}px`, 
      left: `${info.left}px` 
    }}>
      <div className="info-wrapper"> 
        <InfoComponent 
          title={info.title} 
          content={info.content} 
          link={info.link} // Truyền link cho InfoComponent
        />
      </div>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Khampha;