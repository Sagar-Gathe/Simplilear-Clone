import React from "react";
import cards from "../mockData"

const Categories = () => {
  const categories = [
    "Generative AI",
    "AI & Machine Learning",
    "Data Science & Business Analytics",
    "Project Management",
    "Cyber Security",
    "Agile and Scrum",
    "Cloud Computing & DevOps",
    "Business and Leadership",
    "Product and Design",
    "IT Service and Architecture",
    "Quality Management",
    "Digital Marketing",
    "Software Development",
  ];


  return (
    <div className="categories-container-main">
      <div className="categories-header">
        <h4>Get Certified, Get Ahead with Our Programs</h4>
        <h6>
          Learn from global experts and get certified by the world's leading
          universities
        </h6>
      </div>
      <div className="categories-content">
        <div className="categories-list">
          <h2>Categories</h2>
          <ul>
            <li>
              <span id="list-top">Most Popular</span>
            </li>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
        <div className="cards-wrapper">
          <div className="cards-grid">
            {cards.map((card) => (


              <div key={card.id} className="card1">
                <img src={card.image} alt="Card Image" className="card-img" />
                <img src={card.logo} alt="Card Logo" className="card-logo" />
                <h2 className="card-title">{card.title}</h2>
                <ul className="card-bullets">
                  <li>
                    <p>{card.bullet1}</p>
                  </li>
                  <li>
                    <p>{card.bullet2}</p>
                  </li>
                </ul>
                <div className="card-footer">
                  <span className="calendar">📅 {card.date}</span>
                  <a href={card.link} className="know-more">
                    Know More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
