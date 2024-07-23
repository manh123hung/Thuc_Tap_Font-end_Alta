import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppContent from './Home';
import Khampha from './Khampha/khampha';
import Sukien from './SK/Sukien/sukien';
import LSHH from './GT/LSHH/LSHH';
import GiaVe from './GV/GiaVe/GiaVe';
import VTT from './GV/VeTapThe/VTT';
import VDD from './GV/Vedichvu/VDD';
import VTTD from './GV/VeTapTheDuc/VTTD';
import BM from './GT/Baomat/BM';
import TV from './KP/Thucvat/TV';
import WS from './SK/WS/WS';
import GD from './GT/Gioithieu/GD';
import CCNL from './KP/CCNL/CCNL';
import KDG from './KP/KDG/KDG';
import Thanhvien from './GT/Thanhvien/Thanhvien';
import QTVH from './KP/QTVH/QTVH';
function App() {
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<AppContent  />} />
        {/* Thêm các routes khác ở đây */}
        <Route path="/khampha" element={<Khampha  />} />
        <Route path="/Sukien" element={<Sukien  />} />
        <Route path="/LSHH" element={<LSHH />} />
        <Route path="/GiaVe" element={<GiaVe />} />
        <Route path="/VTT" element={<VTT />} />
        <Route path="/VDD" element={<VDD />} />
        <Route path="/VTTD" element={<VTTD />} />
        <Route path="/BM" element={<BM />} />
        <Route path="/TV" element={<TV />} />
        <Route path="/WS" element={<WS />} />
        <Route path="/GD" element={<GD />} />
        <Route path="/CCNL" element={<CCNL />} />
        <Route path="/KDG" element={<KDG />} />
        <Route path="/Thanhvien" element={<Thanhvien />} />
        <Route path="/QTVH" element={<QTVH />} />
      </Routes>
    </Router>
  );
}

export default App;