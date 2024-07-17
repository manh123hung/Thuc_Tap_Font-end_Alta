import React, { useEffect, useState } from 'react';
import './GV.css'; // Tệp CSS cho kiểu dáng
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


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';



function GiaVe() {
  interface Tab {
    id: string;
    label: string;
    content: JSX.Element;
  }
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
  const [logo1, setlogo1] = useState("");
  const [logo2, setlogo2] = useState("");
  const [logo3, setlogo3] = useState("");
  const [logo4, setlogo4] = useState("");
  const [img1, setimg1] = useState("");

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
    const img1= ref(storage, "GiaVe/image 466.png");

    Promise.all([
      getDownloadURL(logoRef),
      getDownloadURL(logo1),
      getDownloadURL(logo2),
      getDownloadURL(logo3),
      getDownloadURL(logo4),
      getDownloadURL(img1),


    ])
      .then((urls) => {
        setLogoUrl(urls[0]);
        setlogo1(urls[1]);
        setlogo2(urls[2]);
        setlogo3(urls[3]);
        setlogo4(urls[4]);
        setimg1(urls[5]);

      })
      .catch((error) => {
        console.log("Error getting URLs:", error);
      });
    const fetchData = async () => {
      try {
        const quanlyRef = await getDocs(collection(firestore, "VTTD"));
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
          <button className="menu-icon" onClick={toggleMenu} style={{border:"none"}}>
              {showMenu ? '≡' : 'x'}
            </button>          <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item">KHÁM PHÁ</Link>
        
          <Dropdown  color='#259E58' className="btn btn-success absolute-dropdown  dropdown-container" label="GIỚI THIỆU" placement="right"  style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:"white"}}>
          <DropdownItem className="btn btn-white" ><Link to="/LSHH" >Lịch sử hình thành</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/Thanhvien" >Thành viên</Link></DropdownItem>
  <DropdownItem className="btn btn-white" ><Link to="/BM" >Chính sách bảo mật</Link></DropdownItem> 
</Dropdown>
         
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  dropdown-container" label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'black',textDecoration: 'underline'}}>
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
           {rightSideContent}
           <div className='container bd01'>
   <img src={img1} className="img-fluid" alt="Responsive image" style={{padding:"40px"}}/>
   <header className="header" style={{padding:"40px"}}>
    <div className="row">
      <div className="col-8">
      <div  style={{ color: '#259E58', textDecoration: 'underline',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"46px",}}>
     <b>{data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Tieude }} />
            </div>
          ))}
        </div>
      )}</b>
     </div>
     </div>
     <div className="col-3">
      <div className='' style={{ color: '#4D4D4D',lineHeight:'102,14px',fontFamily:'Bangers',fontSize:"22px",}}>
        Mô tả
       </div>
       <div style={{borderBottom:"2px solid #EC008C"}}></div>
       <div style={{fontSize:"16px",color:"#666666",fontFamily:"Nunito"}}>{data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.Mota }} />
            </div>
          ))}
        </div>
      )}</div>
     </div>
    </div>      
   
    </header>
    <div className="container">
  <div className="card-container">
    <div className="card card1  text-white" style={{border:"2px solid #259E58"}}>
      <h2 className="card-title text-container1" style={{color:"white"}}>VÉ THAM QUAN</h2>
      <ul className="card-list">
        <li>      <FontAwesomeIcon icon={faCheck} color="green" /> Tham quan trong ngày</li>
        <li className="strikethrough">
        <FontAwesomeIcon icon={faTimes} color="red" /> Bao gồm trò chơi
      </li>
      <li className="strikethrough">
        <FontAwesomeIcon icon={faTimes} color="red" /> Dịch vụ xe điện
      </li>
      </ul>
      <div className="card-price">
      {data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.cardprice3 }} />
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
    <div className="card card1 bg-pink text-white" style={{border:"2px solid #FF41B2"}}>
      <h2 className="card-title text-container2 " style={{color:"white"}} >VÉ TRỌN GÓI</h2>
      <ul className="card-list">
        <li> <FontAwesomeIcon icon={faCheck} color="green" /> Tham quan trong ngày</li>
        <li> <FontAwesomeIcon icon={faCheck} color="green" /> Bao gồm trò chơi</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" /> Thủy cung</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" /> Dịch vụ xe điện</li>
      </ul>
      <div className="card-price">
      {data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.cardprice2 }} />
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
    <div className="card card1 "  style={{border:"2px solid #3781DB"}}>
      <h2 className="card-title text-container3" style={{color:"white"}}>VÉ SILVER</h2>
      <ul className="card-list">
        <li><FontAwesomeIcon icon={faCheck} color="green" /> Tham quan trong ngày</li>
        <li><FontAwesomeIcon icon={faCheck} color="green" /> Bao gồm trò chơi</li>
        <li><FontAwesomeIcon icon={faCheck} color="green" /> Lối đi riêng</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" /> Thủy cung</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" />Massage cá</li>
        <li className="strikethrough"><FontAwesomeIcon icon={faTimes} color="red" /> Dịch vụ xe điện</li>
      </ul>
      <div className="card-price">
      {data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: item.cardprice3 }} />
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  </div>
</div>
      <div className='container' style={{padding:"20px"}}>
      <h2 className="ghi-chu">GHI CHÚ:</h2>

<ul style={{color:"#858585",fontSize:"18px"}}>
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

export default GiaVe;