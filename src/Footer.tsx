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
import { firestore, storage } from './firebase';
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import '@splidejs/react-splide/css';
const Footer = () => {

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
      const logo4= ref(storage, "card/logo ngang.png");

  
      Promise.all([

        getDownloadURL(logo4),

  
  
      ])
        .then((urls) => {
          setlogo4(urls[0]);
        })
        .catch((error) => {
          console.log("Error getting URLs:", error);
        });
      const fetchData = async () => {
        try {
          const quanlyRef = await getDocs(collection(firestore, "WS"));
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
  return (
    <footer style={{ backgroundColor: "#259E58", color: "white" }}>
      <div className="" style={{ padding: "20px" }}>
        <div className="row" style={{ fontFamily: "Nunito", lineHeight: "27px", fontSize: "18px" }}>
          <div className="col-md-4">
            <h5 style={{ fontFamily: "Bangers", fontStyle: "italic" }}><b>TRỰC THUỘC</b></h5>
            <img src={logo4} className="img-fluid" alt="Logo" />
          </div>
          <div className="col-md-4" style={{ textAlign: "left" }}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li><h5 style={{ fontFamily: "Bangers", fontStyle: "italic" }}><b>LIÊN HỆ</b></h5></li>
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
              <h5 style={{ color: "white" }}><b>GIỜ MỞ CỬA</b></h5>
            </ul>
            <ul style={{ padding: 0 }}>
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
          <hr style={{ color: "white" }} />
          <p style={{ fontFamily: "Nunito", fontSize: "14px" }}>Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;