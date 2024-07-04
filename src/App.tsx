import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppContent from './Home';
import Khampha from './Khampha/khampha';
import Sukien from './Sukien/sukien';
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

      </Routes>
    </Router>
  );
}

export default App;