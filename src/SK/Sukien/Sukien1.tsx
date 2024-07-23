import React, { useState } from 'react';
import './sukien.css'; // Tệp CSS cho kiểu dáng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface MusicPlayerProps {
  songs: { id: string; imageUrl: string; title: string; title2: string }[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ songs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRadioChange = (index: number) => {
    setActiveIndex(index);
    document.body.classList.toggle('blue');
  };

  const handlePreviousClick = () => {
    setActiveIndex((activeIndex - 1 + songs.length) % songs.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % songs.length);
  };

  return (
    <div style={{ marginTop: "500px" }}>
      <div className="container ct06" style={{ marginRight: "-170px" }}>
        {songs.map((song, index) => (
          <input
            key={song.id}
            type="radio"
            name="slider"
            id={`item-${index + 1}`}
            checked={index === activeIndex}
            onChange={() => handleRadioChange(index)}
          />
        ))}
        <div className="cards cards1">
          {songs.map((song, index) => (
            <label
              key={song.id}
              className={`card c12a ${index === activeIndex ? 'active' : ''}`}
              htmlFor={`item-${index + 1}`}
              id={`song-${index + 1}`}
            >
              <img className="img2" src={song.imageUrl} alt="song" />
              <div className="hidden-text">
                <b> {song.title}</b>
                
                <p><div className='row'><div className='col-8'>{song.title2}</div><div className='col-4'><Link to="/WS" className="btn btn-success" >Xem thêm <FontAwesomeIcon icon={faArrowRight} /></Link></div></div>
                </p> 

              </div>
            </label>
          ))}
        </div>
        <div className="player">
          <div className="carousel-container">
            <div className="cs16">
              <button onClick={handlePreviousClick}>
                <span className="material-icons">
                <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </button>
              <button onClick={handleNextClick}>
                <span className="material-icons">
                <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;