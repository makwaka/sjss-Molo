import React, { useState } from 'react';
import AdminPic1 from '../assets/main-1.jpg';
import AdminPic2 from '../assets/main-2.jpg';
import AdminPic3 from '../assets/main-3.jpg';
import Arrow from '../assets/arrow.jpg';
import Rector from '../assets/rector.jpg';

function HomePage() {
  const [activeTab, setActiveTab] = useState('mission');

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="flex-container">
        <div>
          <img src={AdminPic1} alt="admin block picture 1" width="100%" />
        </div>
        <div>
          <img src={AdminPic2} alt="admin block picture 2" width="100%" />
        </div>
        <div>
          <img src={AdminPic3} alt="admin block picture 3" width="100%" />
        </div>
      </div>
      <div className="announcements">
        <p>ANNOUNCEMENTS</p>
        <hr />
        <p>MID-TERM BREAK:26/5/2022-30/5/2022</p>
        <hr />
        <p>END OF TERM 1 BREAK: 30/6/2022</p>
      </div>
      {/* Mission, Vision and Values */}
      <div className="about-center section-center">
        <article className="target-img">
          <img src={Arrow} alt="Picture of an arrow" />
        </article>

        <article className="about">
          {/* Buttons */}
          <div className="btn-container">
            <button className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => handleTabClick('mission')}>Mission</button>
            <button className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => handleTabClick('vision')}>Vision</button>
            <button className={`tab-btn ${activeTab === 'core-values' ? 'active' : ''}`} onClick={() => handleTabClick('core-values')}>Core Values</button>
          </div>
          <div className="about-content">
            {/* Item 1: Mission */}
            <div className={`content ${activeTab === 'mission' ? 'active' : ''}`} id="mission">
              <h4>Our Mission</h4>
              <p>To help each boy come into confident possession of his abilities, talents and skills that are needed for
                success. We strive to have teachers, parents and community engagement.
              </p>
            </div>
            {/* Item 2: Vision */}
            <div className={`content ${activeTab === 'vision' ? 'active' : ''}`} id="vision">
              <h4>Our Vision</h4>
              <p>To develop well-rounded, confident and responsible individuals who aspire to achieve full potential.</p>
            </div>
            {/* Item 3: Core Values */}
            <div className={`content ${activeTab === 'core-values' ? 'active' : ''}`} id="core-values">
              <h4>Our Core Values</h4>
              <p>To develop well-rounded, confident and responsible individuals who aspire to achieve full potential.</p>
              <ul>
                <li>Excellence</li>
                <li>Honesty</li>
                <li>Respect</li>
                <li>Discipline</li>
              </ul>
            </div>
          </div>
        </article>
      </div>

      {/* The Rector's picture and caption */}
      <div className="comments-container">
        <figure>
          <img src={Rector} alt="Rector's photo" width="50%" />
          <figcaption>
            <hr />
            <h4 id="comments">Rector's comments</h4>
            <p>Welcome to St. Josephs Junior Seminary. Where boys become men. We are committed to having yours develop
              mentally, emotionally, psychologically and socially.
            </p>
          </figcaption>
          <h3 id="rector">Father Samuel Nyonje</h3>
        </figure>
      </div>
      <div className="admission">
        <div className="box">
          <h2>Admission</h2>
          <p>
            Admission to the school is based on academic merit. The school is a boys' school and therefore admits boys from
            all corners of the country. The only special provision apart from academic merit is that a student to be admitted should be a Catholic.
            This is because the school is a minor seminary. It not only trains students for excellence but also forms
            students having aspirations of becoming priests.
          </p>
        </div>
        <h3>Intake is ongoing for:</h3>
        <ul>
          <li>Form 1</li>
          <li>Form 2</li>
          <li>Form 3</li>
          <li>Form 4</li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
