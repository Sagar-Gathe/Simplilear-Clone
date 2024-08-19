import React from 'react'
import Img1 from '../asset/images/free-app-footer.avif'
import Qrimg from '../asset/images/qr-code.avif'
import androidImg from '../asset/images/playstore.png'
import iosImg from '../asset/images/iosStore.png'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer-main-top'>
             <div className='footer-main-top-left'>
                    
                   <h1>Learn free on the App</h1>
                   <p>Download the lessons and learn anytime, anywhere from the free courses available on our app</p>
                   <img src={Img1}/>

             </div>
             <div className='footer-main-top-rigth'>
                  <p>Scan this QR code on your camera app to download the app</p>
                  <img  className='footer-qr-img' src={Qrimg}/>
                  <div>
                     <span>or</span>
                  </div>
            
                  <div className='footer-main-top-rigth-botm'>
                      <div>
                        <img className='playStoreImg' src={androidImg}/>
                      </div>
                      <div>
                        <img  className='ioSstoreImg' src={iosImg}/>
                      </div>

                  </div>
             </div>
         </div>

        <div className='footer-main-bottom'>
                 
                 <div className='footer-main-bottom-top'>

                   <div className='footer-main-bottom-top-catergory'>
                    <h6>Follow us!</h6>
                    <button className='ref-btn'>Refer and Earn</button>
                   </div>

                   <div className='footer-main-bottom-top-catergory'>
                    <h6>Company</h6>
                    <ul>
                      <li>About us</li>
                      <li>Careers</li>
                      <li>Newsroom</li>
                      <li>Alumini speak</li>
                      <li>Grivance redressal</li>
                      <li>Contact us</li>
                    </ul>
                   </div>

                   <div className='footer-main-bottom-top-catergory'>
                    <h6>Work with us</h6>
                    <ul>
                    <li>Become an instructor</li>
                    <li>Blog as guest</li>
                    </ul>
                   </div>

                   <div className='footer-main-bottom-top-catergory'>
                    <h6>Discover</h6>

                    <ul>
                      <li>Free Courses</li>
                      <li>Skillup Sitemap</li>
                      <li>Resources</li>
                      <li>RSS feed</li>
                      <li>City Sitemap</li>
                
                    </ul>
                   </div>
       
                   <div className='footer-main-bottom-top-catergory'>
                    <h6>For Businesses</h6>
                    <ul>
                      <li>Corporate training</li>
                      <li>Simplilearn Learning Hub+</li>
                      <li>Guaranteed-to-run Classes</li>
                      <li>Partners</li>
                    </ul>
                   </div>

                   <div className='footer-main-bottom-top-catergory'>
                    <h6>Learn On the Go!</h6>
                    <div className='app-main-btn'>
                    <button className='app-btn'>Get the Android App</button>
                    <button className='app-btn'>Get the iOS App</button>
                    </div>
                   </div>


                 </div>




                 <div className='footer-main-bottom-mid'>
                    
                    <div className='footer-section'>
                        <h5>Trending Post Graduate Programs</h5>
                        <p>Artificial Intelligence Course | Cloud Computing Certification Course | Full Stack Web Development Course | PG in Data Science | Product Management Certification
                           Course | Blockchain Course | Machine Learning Course | Cyber Security Course in India | Project Management Certification Course | Lean Six Sigma Certification
                           Course | Cloud Computing and DevOps - IITG | Data Analytics Program | AI and ML Course | Business Analysis Certification Course | Data Engineering Certification Courses</p>
                    </div>

                    <div className='footer-section'>
                        <h5>Trending Master Programs</h5>
                        <p>PMP Plus Certification Training Course | Data Science Certifiation Course | Data Analyst Course | Masters in Artificial Intelligence | Cloud Architect Certification Training 
                          Course | DevOps Engineer Certification Training Course | Digital Marketing Course | Cyber Security Expert Course | Business Analyst Course</p>
                    </div>

                    <div className='footer-section'>
                        <h5>Trending Courses</h5>
                        <p>PMP Certification Training Course | CSM Certification Course | Data Science with Python Course | AWS Certification | CEH Certification | AWS Technical Essentials | AWS DevOps
                           Certification | ITIL Certification | Architecting on AWS Certification | AZ 900 Certification | AZ 400 Certification | SAFe Certification | CISSP Certification Training | Tableau 
                           Certification Course | Lean Six Sigma Green Belt Certification | Lean Six Sigma Black Belt Certification | Power BI Certification Course</p>
                    </div>

                    <div className='footer-section'>
                        <h5>Trending Categories</h5>
                        <p>Project Management Courses | AWS Courses | Web Development Courses | Online Certifications | Generative AI Courses | Agile Certifications | Cloud Computing Courses | Cyber Security
                           Courses | EC-Council Certifications | PeopleCert Certifications | Scrum Alliance Certifications | Scaled Agile Certifications | Google Cloud Courses | ISC2 Certifications | AXELOS 
                           Certifications | ISACA Certifications | PMI Certifications | CompTIA certifications | Microsoft Certifications</p>
                    </div>

                    <div className='footer-section'>
                        <h5>Trending Resources</h5>
                        <p>Python Tutorial | JavaScript Tutorial | Java Tutorial | Angular Tutorial | Node.js Tutorial | Docker Tutorial | Git Tutorial | Kubernetes Tutorial | Power BI Tutorial | CSS Tutorial</p>
                    </div>

                    <div className='footer-section-bottom'>
                        <h5>Terms and Conditions | Privacy Policy | Refund Policy | Country</h5>
                        <p>Address: NALANDA 53/1 C, Manoj Arcade, 24th Main Rd, Sector 2, HSR Layout, Bengaluru - 560102, Karnataka, India.Phone No:1800-212-7688</p>
                        <p>© 2009-2024 - Simplilearn Solutions. All Rights Reserved. The certification names are the trademarks of their respective owners.</p>
                    </div>




                 </div>

                 <div className='footer-bottom'>

                    <h6>Disclaimer</h6>
                    <ul>
                      <li>PMP, PMI, PMBOK, CAPM, PgMP, PfMP, ACP, PBA, RMP, SP, and OPM3 are registered marks of the Project Management Institute, Inc</li>
                      <li>ITIL® is a registered trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                      <li>IT Infrastructure Library is a [registered] trade mark of AXELOS Limited used, under permission of AXELOS Limited. All rights reserved.</li>
                      <li>The Swirl logo™ is a trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                      <li>PRINCE2® is a [registered] trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                      <li>MSP® is a [registered] trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                      <li>Certified ScrumMaster® (CSM) and Certified Scrum Trainer® (CST) are registered trademarks of SCRUM ALLIANCE®</li>
                      <li>Professional Scrum Master is a registered trademark of Scrum.org</li>
                      <li>The APMG-International Finance for Non-Financial Managers and Swirl Device logo is a trade mark of The APM Group Limited.</li>
                      <li>The Open Group®, TOGAF® are trademarks of The Open Group.</li>
                      <li>IIBA®, the IIBA® logo, BABOK® and Business Analysis Body of Knowledge® are registered trademarks owned by International Institute of Business Analysis. </li>
                      <li>CBAP® is a registered certification mark owned by International Institute of Business Analysis. Certified Business Analysis Professional, EEP and the EEP logo are trademarks owned by International Institute of Business Analysis.</li>
                      <li>COBIT® is a trademark of ISACA® registered in the United States and other countries.</li>
                      <li>CISA® is a Registered Trade Mark of the Information Systems Audit and Control Association (ISACA) and the IT Governance Institute.</li>
                      <li>CISSP® is a registered mark of The International Information Systems Security Certification Consortium ((ISC)2). </li>
                      <li>CISCO®, CCNA®, and CCNP® are trademarks of Cisco and registered trademarks in the United States and certain other countries.</li>
                      <li>Simplilearn and its affiliates, predecessors, successors and assigns are in no way associated, sponsored or promoted by SAP SE and neither do they provide any SAP based online or real-time courses or trainings</li>
                      <li>The KPMG name and logo are trademarks used under license by the independent member firms of the KPMG global organization. KPMG International’s Trademarks are the sole property of KPMG International and their use here does not imply auditing by or endorsement of KPMG International or any of its member firms.</li>
                    </ul>
                </div>

                <div className='footer-end'>
                   Request a call back       call us on 1800-212-7688
                </div>

        </div>
      
    </div>
  )
}

export default Footer
