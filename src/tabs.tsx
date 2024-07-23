// tabs.ts
import React, { useEffect, useState } from 'react';
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
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import '@splidejs/react-splide/css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';


interface Tab {
  id: string;
  label: string;
  content: JSX.Element;
}

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

export default tabs;