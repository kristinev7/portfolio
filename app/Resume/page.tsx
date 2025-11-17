import "../styles/home.css";

export default function Resume() {
  return (
    <main className="flex justify-center p-4">
      <div className="bg-[#759F9C] rounded-lg p-4 text-black">
        <p>I'm a software developer with experience in data science.</p>
        <br />
        <p>
          I use Java and Spring for backend, however I've used PHP, JS and
          Python in previous works.
          <br />
          For frontend, I use React and Next.js frameworks with GSAP for
          animation rendering.
        </p>
        <br />
        <h2 className="font-extrabold text-black">Education</h2>
        <p>Kean University</p>
        <p>2018-2023</p>
        <p className="font-semibold">B.S. Computer Science</p>
        <br />
        <h2 className="font-extrabold mb-2">Skills</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-white rounded-lg p-4 flex-1 shadow">
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <ul>
              <li>Java</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 flex-1 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Frameworks and Libraries
            </h3>
            <ul>
              <li>Spring</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 flex-1 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Tools and Technologies
            </h3>
            <ul>
              <li>Figma</li>
              <li>Git</li>
              <li>Jira</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
        <br />
        <h2 className="font-extrabold mb-2 text-lg">
          Experience / Internships
        </h2>
        <div>
          <h2 className="italic">Data Science Student Intern</h2>
          <p>06/2022-08/2022</p>
          <ul>
            <li>
              Managed and modeled databases, and handled ETL processes using
              Denodo and SQL Server.
            </li>
            <li>
              Prepared and cleaned data for analysis and report generation using
              Jupyter Notebook and Python.
            </li>
            <li>
              Created data visualizations with PowerBI to present institutional
              transformations over time.
            </li>
          </ul>
        </div>
        <br />
        <div>
          <h2 className="italic">REU Student Researcher</h2>
          <p>06/2021-08/2021</p>
          <ul>
            <li>
              Researched and presented capabilities of machine learning
              algorithms for computer vision using UAVs.
            </li>
            <li>
              Developed a convoluted neural network model for coastline
              detection.
            </li>
            <li>Extracted and validated data for analysis.</li>
          </ul>
        </div>
        <br />
        <div>
          <h2 className="italic">Tutor</h2>
          <p>09/2022-12/2022</p>
          <ul>
            <li>
              Assisted students with database management systems and systems
              programming concepts.
            </li>
            <li>
              Helped students troubleshoot server access and debug programs for
              class projects.
            </li>
          </ul>
        </div>
        <br />
        <div>
          <h2 className="font-extrabold">Interests</h2>
          <p>Computer Security using HackTheBox</p>
          <p>Qt for GUI development</p>
          <br />
        </div>
      </div>
    </main>
  );
}
