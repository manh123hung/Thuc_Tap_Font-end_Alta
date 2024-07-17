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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPhone } from '@fortawesome/free-solid-svg-icons';

function Khampha() {
  interface Tab {
    id: string;
    label: string;
    content: JSX.Element;
  }
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
  const [activeTab, setActiveTab] = useState<string>('troChoi');
  const tabs: Tab[] = [
    {
      id: 'troChoi',
      label: 'Trò Chơi',
      content: (

        <div className='container' style={{fontFamily:"Nunito",height:"700px"}}>
           <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "14px" }}>
  <div className='col-3'>
    <h5  style={{ textDecoration: 'none', color: '#259E58' }}> <b>CẢM GIÁC MẠNH</b> </h5>
  </div>
  <div className='col-3'>
    <h5  style={{ textDecoration: 'none', color: '#259E58' }}><b>TƯƠNG TÁC ẢO </b></h5>
  </div>
  <div className='col-3'>
    <h5  style={{ textDecoration: 'none', color: '#259E58' }}><b>GIẢI TRÍ</b></h5>
  </div>
  <div className='col-3'>
    <h5  style={{ textDecoration: 'none', color: '#259E58' }}><b>THIẾU NHI</b></h5>
  </div>
</div>
 <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginRight: '8px' }}>01</span>
    <Link to="/CCNL" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Cá Chép Nhào Lộn</Link>
  </div>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginRight: '8px' }}>14</span>
    <Link to="/cinemax8d" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Xem Phim Cinemax 8D</Link>
  </div>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginRight: '8px' }}>19</span>
    <Link to="/bangdang" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Băng Đăng</Link>
  </div>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginRight: '8px' }}>23</span>
    <Link to="/echnhay" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Ếch Nhảy</Link>
  </div>
</div>
        <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
      <div className='col-3'>
        <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>02</span>&nbsp;
        <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Lâu Đài Kinh dị</Link>
      </div>
      <div className='col-3'>
        <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>15</span>&nbsp;
        <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Đua Xe Turbo Racing</Link>
      </div>
      <div className='col-3'>
        <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>20</span>&nbsp;
        <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Đu Quay Đứng Ferris Wheel</Link>
      </div>
      <div className='col-3'>
        <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>24</span>&nbsp;
        <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Điệu Nhảy Thiên Thần</Link>
      </div>
    </div>
      <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>03</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Phượng Hoàng Bay</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>16</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>9D Virtual Reality</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>21</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Monorail</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>25</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Khinh Khí Cầu Bay</Link>
        </div>
      </div>
      <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>04</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Spinning Coaster</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>17</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Bắn Súng Run Raider</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>22</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Đạp Vịt Pedalo</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>26</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Hải Cầu Vượt Thác</Link>
        </div>
      </div>
      <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>05</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Xe Bay Ảo Tưởng</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>18</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Lâu Đài Kỳ Thú</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>62</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Massage Cá</Link>
        </div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>27</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Ngựa Bay</Link>
        </div>
      </div>
      <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>06</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Thảm Bay</Link>
        </div>
        <div className='col-3'></div>
        <div className='col-3'></div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>28</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Kids Playground</Link>
        </div>
      </div>
      <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>07</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Vòng Quay Thần Tốc</Link>
        </div>
        <div className='col-3'></div>
        <div className='col-3'></div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>29</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Khủng Long Bay</Link>
        </div>
      </div>
      <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>08</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Power Surge</Link>
        </div>
        <div className='col-3'></div>
        <div className='col-3'></div>
        <div className='col-3'>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>30</span>&nbsp;
          <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Siêu Nhân Robot</Link>
        </div>
      </div>
      <div>
      <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>09</span>&nbsp;
    <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Tàu Vượt Thác</Link>
  </div>
  <div className='col-3'></div>
  <div className='col-3'></div>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>31</span>&nbsp;
    <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Rồng Lượn</Link>
  </div>
</div>
<div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>10</span>&nbsp;
    <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Roller Coaster</Link>
  </div>
  <div className='col-3'></div>
  <div className='col-3'></div>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>32</span>&nbsp;
    <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Vòng Lượn Tuổi Thơ</Link>
  </div>
</div>
<div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>11</span>&nbsp;
    <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Vòng Xoay Không Gian</Link>
  </div>
  <div className='col-3'></div>
  <div className='col-3'></div>
  <div className='col-3'>
    <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>33</span>&nbsp;
    <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>Pháo Đài Bay</Link>
  </div>
</div>
<div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
  <div className='col-3'>
    <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>
      <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>12</span>&nbsp;Đấu Trường Bò Tót
    </Link>
  </div>
  <div className='col-3'></div>
  <div className='col-3'></div>
  <div className='col-3'>
    <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D' }}>
      <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px' }}>34</span>&nbsp;Nhà Hơi Liên Hoàn
    </Link>
  </div>
</div>   </div>

    <div className='row' style={{ color: "#4D4D4D", lineHeight: "48px", fontSize: "16px" }}>
      <div className='col-3'>
        <Link to="/" style={{ textDecoration: 'none', color: '#4D4D4D', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: "#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginRight: '8px' }}>13</span>
          Xe Điện Đụng
        </Link>
      </div>
      <div className='col-3'></div>
      <div className='col-3'></div>
      <div className='col-3'></div>
    </div>
    </div>
      )
    },
    {
      id: 'vuonThu',
      label: 'Vườn Thú',
      content: (
        <div className='container' style={{fontFamily:"Nunito",height:"700px"}}>
         <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
            <div className='col-3'>
            <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>35</span> 
            <Link to="/KDG" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Khỉ Đuôi Dài</Link></div>
            <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>38</span> 
            <Link to="/hamachauPhi" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Hà Mã Châu Phi</Link> </div>
            <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>41</span> 
            <Link to="/thuycung" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Thủy Cung</Link> </div>
            <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>44</span> 
            <Link to="/cahoatien" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Cá Hỏa Tiền</Link> </div>

           </div>
           <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
            <div className='col-3'>
            <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>36</span> 
            <Link to="/gaunhua" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Gấu Ngựa</Link></div>
            <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>39</span> 
            <Link to="/voichauA" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Voi Châu Á</Link> </div>
            <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>42</span> 
            <Link to="/vuonchim" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Vườn Chim</Link> </div>
            <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>45</span> 
            <Link to="/denui" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Đê Núi</Link> </div>

           </div>
           <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
            <div className='col-3'>
            <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>37</span> 
            <Link to="/duoiuruisumatra" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Đười Ươi Sumatra</Link></div>
            <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>40</span> 
            <Link to="/vuondenmavang" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Vượn Đen Má Vàng</Link> </div>
            <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>43</span> 
            <Link to="/hocahaituong" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Hồ Cá Hải Tượng</Link> </div>
            <div className='col-3'> </div>

           </div>
          </div>
      )
    },
    {
      id: 'canhDep',
      label: 'Cảnh Đẹp',
      content: (
        <div className="container">
        <div className='container' style={{fontFamily:"Nunito",height:"700px"}}>
        <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
   <div className='col-3'>
   <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>46</span> 
   <Link to="/namtuthuonguyen" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Nam Tử Thượng Uyển</Link></div>
   <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>51</span> 
   <Link to="/QTVH" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Quảng Trường Vua Hùng </Link> </div>

   <div className='col-3'> </div>

  </div>
  <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
   <div className='col-3'>
   <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>47</span> 
   <Link to="/daolanrung" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Đảo Lan Rừng</Link></div>
   <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>52</span> 
   <Link to="/quangtruongaulac" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Quảng Trường Âu Lạc</Link> </div>
   <div className='col-3'> </div>
   <div className='col-3'> </div>

  </div>
  <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
   <div className='col-3'>
   <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>48</span> 
   <Link to="/vuonnhatban" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Vườn Nhật Bản</Link></div>
   <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>53</span> 
   <Link to="/quangtruonglama" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Quảng Trường La Mã</Link> </div>
   <div className='col-3'> </div>
   <div className='col-3'> </div>

  </div>
  <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
   <div className='col-3'>
   <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>49</span> 
   <Link to="/vuonxuongrong" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Vườn Xuống Rồng</Link></div>
   <div className='col-3'> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>54</span> 
   <Link to="/caucuukhu" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Cầu Cửu Khúc </Link> </div>
   <div className='col-3'> </div>
   <div className='col-3'> </div>

  </div>
  <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
   <div className='col-3'>
   <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>50</span> 
   <Link to="/diademSongAo" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Địa Điểm Sống Ảo</Link></div>
   <div className='col-3'> </div>
   <div className='col-3'> </div>
   <div className='col-3'> </div>

  </div>
</div>
</div>
      )
    },
    {
      id: 'sanKhau',
      label: 'Sân Khấu',
      content: (
        <div className='container' style={{fontFamily:"Nunito",height:"700px"}}>
        <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
          <div className='col-3'>
          <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>55</span> 
          <Link to="/sankhaudemmen" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Sân Khấu Đê Mèn</Link></div>
          <div> <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>56</span> 
          <Link to="/rapxiecthu" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Rạp Xiếc Thú</Link></div>
          <div > <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>57</span> 
          <Link to="/sankhaungoisao" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Sân Khấu Ngôi Sao </Link> </div>
          <div className='col-3'> </div>

         </div>
      </div>
      )
    },
    {
      id: 'giaoDuc',
      label: 'Giáo Dục Trải Nghiệm',
      content: (
        <div className='container' style={{fontFamily:"Nunito",height:"700px"}}>
        <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
          <div className='col-3'>
          <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>58</span> 
          <Link to="/nhatrungbaytieuban" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Nhà Trưng Bày Tiêu Bản Động Vật</Link></div>
          <div > <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>59</span> 
          <Link to="/TV" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Thực Vật</Link></div>
       

         </div>
      </div>
      )
    },
    {
      id: 'amThuc',
      label: 'Ẩm Thực',
      content: (
        <div className='container' style={{fontFamily:"Nunito",height:"700px"}}>
        <div className='row' style={{color:"#4D4D4D",lineHeight:"48px",fontSize:"16px"}}>
          <div className='col-3'>
          <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>60</span> 
          <Link to="/nhahangthuyta" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Nhà Hàng Thủy Tạ</Link></div>
          <div > <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>61</span> 
          <Link to="/caphevuond" style={{ textDecoration: 'none', color: '#4D4D4D' }}> Cà Phê Vườn Đá</Link></div>
          <div > <span style={{color:"#EC008C", borderRadius: '50%', display: 'inline-block', padding: '0 5px', border: "1px solid #EC008C", height: "30px", textAlign: 'center', lineHeight: '30px', marginLeft: '10px' }}>63</span> 
          <Link to="/damsenplaza" style={{ textDecoration: 'none', color: '#4D4D4D' }}> DamSen Plaza </Link> </div>
         </div>
      </div>
      )
    }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
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
  const [showMenu, setShowMenu] = useState(true);
  const [rightSideContent, setRightSideContent] = useState<React.ReactNode>(null); // Khởi tạo bằng null
  const createRightSideContent = () => {
              if (slide1) { // Kiểm tra xem hình ảnh đã được tải về chưa
                return (
                  <>
                 
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',position:"fixed",marginLeft:"1180px",marginTop:"500px" }}>
      
      <div className="button-container">
        <button className='bt12a'><span className='icon2'><FontAwesomeIcon icon={faPhone}color="green" /> </span></button>
        <button className='bt12a'><span className='icon2'><FontAwesomeIcon icon={faComment} color="green"/> </span></button>
      </div>
     
      </div>
      <div>           
               <div className="zoom-buttons" >
  <div className="zoom-button">-</div>
  <div className="zoom-button">+</div>
</div>
</div>
        
          
        </>
      );
    } else {
      return null; 
    }
  };
  useEffect(() => {
    setRightSideContent(createRightSideContent());
  }, [slide1]);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      // Khi menu ẩn đi, cập nhật rightSideContent thành nội dung của tab hiện tại
      setRightSideContent(
        <div style={{margin:"100px"}}>
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
        <div style={{marginTop:"-15px",backgroundColor:"white"}}>
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
          <button className="menu-icon" onClick={toggleMenu} style={{border:"none"}}>
              {showMenu ? '≡' : 'x'}
            </button>
          <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item" style={{ textDecoration: 'underline', color: 'black' }}>KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
  <DropdownItem className="btn btn-white" ><Link to="/LSHH" >Lịch sử hình thành</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/Thanhvien" >Thành viên</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/BM" >Chính sách bảo mật</Link></DropdownItem> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
          <DropdownItem className="btn btn-white" ><Link to="/GiaVe" >Vé trong công viên</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/VTT" >Vé tập thể</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/VDD" >Vé dịch vụ</Link></DropdownItem>
            <DropdownItem className="btn btn-white" ><Link to="/VTTD" >Vé tập thể dục</Link></DropdownItem>
          
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
                      {rightSideContent}
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