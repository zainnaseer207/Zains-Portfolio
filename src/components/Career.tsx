import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Entry 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Software Engineering Student</h4>
                <h5>University of Agriculture, Faisalabad</h5>
              </div>
              <h3>2024–2028</h3>
            </div>
            <p>
              Pursuing a BS in Software Engineering with coursework in
              Object-Oriented Programming, Data Structures & Algorithms,
              Database Management Systems, Web Development, Operating Systems,
              and Software Engineering. Building practical projects in Python,
              Django, automation, and web application development.
              <br />
              <span className="career-date">2024 – 2028</span>
            </p>
          </div>

          {/* Entry 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineer</h4>
                <h5>Fine Tech, Chichawatni</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and implemented basic computer and software-related
              procedures to improve workflow efficiency and support smooth
              technical operations in a practical business environment.
              <br />
              <span className="career-date">June 2025 – August 2025</span>
            </p>
          </div>

          {/* Entry 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Teacher</h4>
                <h5>Chichawatni</h5>
              </div>
              <h3>2023–2025</h3>
            </div>
            <p>
              Worked in a teaching role while building communication,
              problem-solving, and organizational skills, supporting student
              learning and contributing to a structured professional environment.
              <br />
              <span className="career-date">September 2023 – August 2025</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
