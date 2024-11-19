import React from 'react';

const MainContent = ({ showModal }) => (
  <main className="main-content">
    {/* Home Section */}
    <section id="home">
      <h2>Welcome to My Portfolio!</h2>
      <p>
        This platform highlights my skills, projects, and achievements as an engineering student. It showcases my expertise in areas like web development, AI, and more, along with a glimpse into my academic journey, interests, and aspirations. Explore to know more about my work and passion for technology!
      </p>
      <button className="cta-btn" onClick={() => showModal('More About Me')}>Learn More About Me</button>
    </section>

    {/* About Section */}
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hello, I am Nishintha, a second-year engineering student specializing in Computer Science. I am passionate about technology and enjoy exploring areas like web development, machine learning, and competitive programming. I am always eager to learn and work on innovative projects that solve real-world problems. 
      </p>
      <p>
        Outside academics, I enjoy reading, coding, and sports. My curiosity drives me to explore emerging technologies and participate in hackathons to hone my problem-solving skills.
      </p>
      <div className="skills-section">
        <h3>Key Skills</h3>
        <ul className="skills-list">
          <li>Web Development (HTML, CSS, JavaScript, React)</li>
          <li>Machine Learning & AI</li>
          <li>Data Structures & Algorithms</li>
          <li>Problem-Solving (Competitive Programming)</li>
          <li>Team Collaboration & Leadership</li>
        </ul>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project" onClick={() => showModal('TO DO LIST')}>
          <h3>TO DO LIST</h3>
          <p>A simple yet powerful task management app for organizing daily tasks efficiently.</p>
        </div>
        <div className="project" onClick={() => showModal('DASHBOARD')}>
          <h3>DASHBOARD</h3>
          <p>An interactive admin dashboard for monitoring and managing system data with advanced visualizations.</p>
        </div>
        <div className="project" onClick={() => showModal('PORTFOLIO WEBSITE')}>
          <h3>PORTFOLIO WEBSITE</h3>
          <p>This portfolio showcases my journey, achievements, and projects, built using React and modern web technologies.</p>
        </div>
      </div>
      <button className="cta-btn" onClick={() => showModal('View More Projects')}>View More Projects</button>
    </section>

    {/* Achievements Section */}
    <section id="achievements">
      <h2>Achievements</h2>
      <ul className="achievements-list">
        <li>Completed DATABASE MANAGEMENT SYSTEM course in NPTEL with a consolidated score of 50%.</li>
        <li>Solved more than 300 problems in LEETCODE.</li>
        <li>Secured Internship with ZioTaz Software (Web Development).</li>
        <li>Secured 1026 Rating in CODEFORCES.</li>
        <li>Secured 1star Rating in CODECHEF.</li>
      </ul>
    </section>

    {/* Testimonials Section */}
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials">
        <blockquote>
          <p>"Nishintha is a highly talented individual with exceptional problem-solving skills. Her dedication to learning and innovation is commendable!"</p>
          <cite>- Mentor, XYZ Company</cite>
        </blockquote>
        <blockquote>
          <p>"Working with Nishintha was an absolute pleasure. Her technical skills and teamwork contributed significantly to the success of our project."</p>
          <cite>- Team Member, ABC Hackathon</cite>
        </blockquote>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact">
      <h2>Contact</h2>
      <p>Have a question or want to collaborate on a project? Feel free to reach out!</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit" className="cta-btn">Send Message</button>
      </form>
    </section>
  </main>
);

export default MainContent;
