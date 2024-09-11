import React from 'react';
import heartClicked from './svg/h1.webp'; 
import heart from './svg/h.webp'; 
import './App.css';
import 'bulma/css/bulma.min.css';


const Course = ({ title, features, imageUrl, isLiked, toggleLike }) => {
  return (
    <div className="card ">
      <img src={imageUrl} alt={title} className="card-image image is-square" />
      <div className="card-content">
        <h3 className='card-header-title is-centered'>{title}</h3>
        <ul className='card-content'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={toggleLike}
        >
            <hr/>
          <img src={isLiked ? heartClicked : heart} alt="like icon" className="like-icon card-footer "
          style={{height:'20px', width:'20px' }}/>
        </button>
      </div>
    </div>
  );
};

export default Course;
