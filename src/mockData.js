const cards = [
    {
      id: 1,
      image: "https://www.simplilearn.com/ice9/banners/home-page-thumbnail-image-iig.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/accreditation_images/Category%20Page%20Partner%20Logo/iit_guwahati_category.svgz?w=200&dpr=1",
      title: "Professional Certificate Program in Data Analytics & Generative AI",
      bullet1: "Academic masterclasses delivered by IIT Guwahati faculty",
      bullet2: "Exclusive hackathons and 'ask-me-anything' sessions by IBM",
      date: "August 25, 2024",
      link: "#"
    },
    {
      id: 2,
      image: "https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=300&dpr=1f",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/IIT%20Kanpur_HM_40.svgz?w=200&dpr=1",
      title: "Certificate Program in Data Science and AI",
      bullet1: "Live sessions with industry experts",
      bullet2: "Hands-on projects and case studies",
      date: "September 10, 2024",
      link: "#"
    },
    {
      id: 3,
      image: "https://www.simplilearn.com/ice9/banners/2020-05-21.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Caltech_HM_40px.svgz?w=300&dpr=1",
      title: "Master's in Machine Learning & AI",
      bullet1: "Capstone project with real-world data",
      bullet2: "Dedicated career support and mentorship",
      date: "October 5, 2024",
      link: "#"
    },
    {
      id: 4,
      image: "https://www.simplilearn.com/ice9/assets/pdp-slider_1.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Purdue_HM_40px.svgz?w=160&dpr=1",
      title: "Advanced Certification in Cloud Computing",
      bullet1: "Hands-on labs and cloud projects",
      bullet2: "Industry certification preparation",
      date: "November 15, 2024",
      link: "#"
    },
    {
      id: 5,
      image: "https://www.simplilearn.com/ice9/assets/pdp-slider_1.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Purdue_HM_40px.svgz?w=160&dpr=1",
      title: "Post Graduate Program in Cyber Security",
      bullet1: "Certified by industry leaders",
      bullet2: "Real-world scenarios and simulations",
      date: "December 1, 2024",
      link: "#"
    },
    {
      id: 6,
      image: "https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/IIT%20Kanpur_HM_40.svgz?w=200&dpr=1",
      title: "Full Stack Web Development Certification",
      bullet1: "Learn frontend, backend, and databases",
      bullet2: "Build full-scale web applications",
      date: "January 20, 2025",
      link: "#"
    },
    {
      id: 7,
      image: "https://www.simplilearn.com/ice9/banners/New_Brown.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Brown_HM_40px.svgz?w=128&dpr=1",
      title: "Executive Program in Digital Marketing",
      bullet1: "Digital strategy and tools",
      bullet2: "Project-based learning and internships",
      date: "February 14, 2025",
      link: "#"
    },
    {
      id: 8,
      image: "https://www.simplilearn.com/ice9/banners/New_Brown.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/assets/Colored_Silver_Business_Partner_with_IBM_logo.svgz?w=128&dpr=1",
      title: "Master's in Business Analytics",
      bullet1: "In-depth analytics and data tools",
      bullet2: "Business intelligence projects",
      date: "March 3, 2025",
      link: "#"
    },
    {
      id: 9,
      image: "https://www.simplilearn.com/ice9/banners/New_Brown.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/assets/Colored_Silver_Business_Partner_with_IBM_logo.svgz?w=128&dpr=1",
      title: "Blockchain Certification Program",
      bullet1: "Understanding blockchain technology",
      bullet2: "Build decentralized applications",
      date: "April 12, 2025",
      link: "#"
    },
    {
      id: 10,
      image: "https://www.simplilearn.com/ice9/banners/pdp-slider-new.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Purdue_HM_40px.svgz?w=160&dpr=1",
      title: "Artificial Intelligence for Business",
      bullet1: "AI tools and applications",
      bullet2: "Use cases in different industries",
      date: "May 1, 2025",
      link: "#"
    },
    {
      id: 11,
      image: "https://www.simplilearn.com/ice9/banners/pdp-slider-new.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Python_HM_40.svgz?w=160&dpr=1",
      title: "Professional Certificate in Data Engineering",
      bullet1: "Data pipelines and ETL processes",
      bullet2: "Big data tools and techniques",
      date: "June 18, 2025",
      link: "#"
    },
    {
      id: 12,
      image: "https://www.simplilearn.com/ice9/banners/pdp-slider-new.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Python_HM_40.svgz?w=160&dpr=1",
      title: "DevOps Engineer Certification",
      bullet1: "CI/CD pipelines and automation",
      bullet2: "Containerization with Docker and Kubernetes",
      date: "July 23, 2025",
      link: "#"
    },
    {
      id: 13,
      image: "https://www.simplilearn.com/ice9/banners/New_Brown.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/accreditation_images/My%20SQL_32px.svgz?w=70&dpr=1",
      title: "Project Management Professional (PMP)",
      bullet1: "Project planning and execution",
      bullet2: "Agile methodologies and practices",
      date: "August 29, 2025",
      link: "#"
    },
    {
      id: 14,
      image: "https://www.simplilearn.com/ice9/banners/New_Brown.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/accreditation_images/My%20SQL_32px.svgz?w=70&dpr=1",
      title: "Business Analytics for Managers",
      bullet1: "Data-driven decision-making",
      bullet2: "Tools and techniques for managers",
      date: "September 11, 2025",
      link: "#"
    },
    {
      id: 15,
      image: "https://www.simplilearn.com/ice9/banners/New_Brown.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/accreditation_images/My%20SQL_32px.svgz?w=70&dpr=1",
      title: "Data Science with Python",
      bullet1: "Python libraries and tools",
      bullet2: "Hands-on data analysis projects",
      date: "October 7, 2025",
      link: "#"
    },
    {
      id: 16,
      image: "https://www.simplilearn.com/ice9/assets/pdp-slider_1.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Purdue_HM_40px.svgz?w=160&dpr=1",
      title: "Machine Learning for Finance",
      bullet1: "ML algorithms for financial data",
      bullet2: "Predictive analytics and trading models",
      date: "November 21, 2025",
      link: "#"
    },
    {
      id: 17,
      image: "https://www.simplilearn.com/ice9/assets/pdp-slider_1.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Purdue_HM_40px.svgz?w=160&dpr=1",
      title: "Professional Certificate in AI & Machine Learning",
      bullet1: "Deep learning and neural networks",
      bullet2: "AI in real-world applications",
      date: "December 5, 2025",
      link: "#"
    },
    {
      id: 18,
      image: "https://www.simplilearn.com/ice9/assets/pdp-slider_1.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/Purdue_HM_40px.svgz?w=160&dpr=1",
      title: "Post Graduate Program in Data Science",
      bullet1: "Comprehensive curriculum covering all data science concepts",
      bullet2: "Collaboration with industry experts",
      date: "January 16, 2026",
      link: "#"
    },
    {
      id: 19,
      image: "https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=300&dpr=1f",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/IIT%20Kanpur_HM_40.svgz?w=200&dpr=1",
      title: "Advanced Data Science Certification",
      bullet1: "Data wrangling and visualization",
      bullet2: "Predictive modeling and analytics",
      date: "February 9, 2026",
      link: "#"
    },
    {
      id: 20,
      image: "https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=300&dpr=1f",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/IIT%20Kanpur_HM_40.svgz?w=200&dpr=1",
      title: "Data Science Bootcamp",
      bullet1: "Intensive hands-on training",
      bullet2: "Capstone projects and mentorship",
      date: "March 18, 2026",
      link: "#"
    },
    {
      id: 21,
      image: "https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=300&dpr=1f",
      logo: "https://www.simplilearn.com/ice9/new-logo-mix/IIT%20Kanpur_HM_40.svgz?w=200&dpr=1",
      title: "Artificial Intelligence for Healthcare",
      bullet1: "AI tools for healthcare data",
      bullet2: "Applications in medical imaging and diagnostics",
      date: "April 28, 2026",
      link: "#"
    },
    {
      id: 22,
      image: "https://www.simplilearn.com/ice9/banners/home-page-thumbnail-image-iig.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/accreditation_images/Category%20Page%20Partner%20Logo/iit_guwahati_category.svgz?w=200&dpr=1",
      title: "Advanced Program in Data Analytics",
      bullet1: "Data analysis and reporting",
      bullet2: "Real-world data projects and case studies",
      date: "May 14, 2026",
      link: "#"
    },
    {
      id: 23,
      image: "https://www.simplilearn.com/ice9/banners/home-page-thumbnail-image-iig.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/accreditation_images/Category%20Page%20Partner%20Logo/iit_guwahati_category.svgz?w=200&dpr=1",
      title: "Cloud Computing and DevOps",
      bullet1: "Integrate cloud and DevOps practices",
      bullet2: "Automation and deployment on the cloud",
      date: "June 1, 2026",
      link: "#"
    },
    {
      id: 24,
      image: "https://www.simplilearn.com/ice9/banners/home-page-thumbnail-image-iig.jpg?w=300&dpr=1",
      logo: "https://www.simplilearn.com/ice9/accreditation_images/Category%20Page%20Partner%20Logo/iit_guwahati_category.svgz?w=200&dpr=1",
      title: "Digital Transformation for Business Leaders",
      bullet1: "Strategies for digital innovation",
      bullet2: "Implementing change management",
      date: "July 22, 2026",
      link: "#"
    }
  ];
  export default cards;  