import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const testimonials = [
  {
    id: 1,
    imgSrc: 'path/to/satish.jpg',
    name: 'Satish Hiremath',
    title: 'Senior Consultant, Capgemini',
    testimonial:
      "Simplilearn's Big Data Architect course has helped me advance from Senior Software Engineer to Senior Java Hadoop Developer with a 30% hike in salary.",
  },
  {
    id: 2,
    imgSrc: 'path/to/sameer.jpg',
    name: 'Sameer Marathe',
    title: 'Project Manager, Atos',
    testimonial:
      'The certification took me from a Project Manager to a Senior Position with a good hike. All credit to the informative and easy-to-understand online study material!',
  },
  {
    id: 3,
    imgSrc: 'path/to/rajendra.jpg',
    name: 'Rajendra Prabhu Sivasamy',
    title: 'Principal Software Engineer, TESCO',
    testimonial:
      "Simplilearn's Certified Scrum Master course helped me rise in my career from Principal Software Engineer to Senior Manager. Thank you.",
  },
  {
    id: 4,
    imgSrc: 'path/to/sabyasachi.jpg',
    name: 'Sabyasachi Gupta',
    title: 'Project Manager, aQb Solutions Pvt Ltd',
    testimonial:
      'The course increased my practical knowledge in Agile methodology and helped me get promoted to a Project Manager in the short span of 1.5 months.',
  },
  {
    id: 5,
    imgSrc: 'path/to/sreeram.jpg',
    name: 'Sreeram Narayan',
    title: 'Data Analyst, Hewlett Packard Enterprise',
    testimonial:
      'Thanks to the knowledgeable & approachable trainers of Simplilearn, the course helped me get promoted to Data Analyst from Quality Analyst with a 50% hike in salary!',
  },
];

const Testimonial = () => {
  return (
    <div className="bootcamp-main">
      {/* Other sections */}

      <div className="bootcamp-bottom-bottom">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Group testimonials into pairs */}
            {testimonials.map((testimonial, index) => {
              const isEvenIndex = index % 2 === 0;
              return isEvenIndex ? (
                <div
                  key={testimonial.id}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <div className="row">
                    <div className="col-6">
                      <div className="slide-content">
                        <div className="slide-top">
                          <img
                            src={testimonial.imgSrc}
                            alt={testimonial.name}
                            className="profile-img"
                          />
                          <div className="profile-info">
                            <h5>{testimonial.name}</h5>
                            <p>{testimonial.title}</p>
                          </div>
                        </div>
                        <div className="slide-bottom">
                          <p>{testimonial.testimonial}</p>
                        </div>
                      </div>
                    </div>
                    {/* Render the next testimonial in the pair */}
                    {testimonials[index + 1] && (
                      <div className="col-6">
                        <div className="slide-content">
                          <div className="slide-top">
                            <img
                              src={testimonials[index + 1].imgSrc}
                              alt={testimonials[index + 1].name}
                              className="profile-img"
                            />
                            <div className="profile-info">
                              <h5>{testimonials[index + 1].name}</h5>
                              <p>{testimonials[index + 1].title}</p>
                            </div>
                          </div>
                          <div className="slide-bottom">
                            <p>{testimonials[index + 1].testimonial}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : null;
            })}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
