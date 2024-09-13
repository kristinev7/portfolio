import "../styles/home.css";

export default function Resume() {
  return (
    <main className="flex justify-center p-4">
      <div className="bg-[#759F9C] rounded-lg p-4 text-black">
        <p>I'm a software developer with experience in data science and web development.</p>
        <br />
        <p>
          My main tech stack consists of Java, JavaScript, Nextjs and React,
          which I regularly use in my projects.
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
            <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
            <ul>
              <li>React</li>
              <li>NextJs</li>
              <li>Spring</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 flex-1 shadow">
            <h3 className="text-xl font-semibold mb-2">Other</h3>
            <ul>
              <li>Figma</li>
              <li>Git</li>
              <li>Jira</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
        <br/>
        <div>
          <h2 className="font-extrabold">Current Pursuit</h2>
          <p>AWS Certification Cloud Practitioner</p>
          <p>CompTIA Security+</p>
          <br/>
        </div>
        <h2 className="font-extrabold mb-2">Experience / Internships</h2>
        <div>
          <h2 className="font-semibold">Data Science Student Intern</h2>
          <p>06/2022-08/2022</p>
          <ul>
            <li>Managed and modeled databases, and handled ETL processes using Denodo and SQL Server.</li>
            <li>Prepared and cleaned data for analysis and report generation using Jupyter Notebook and Python.</li>
            <li>Created data visualizations with PowerBI to present institutional transformations over time.</li>
          </ul>
        </div>
        <br/>
        <div>
          <h2 className="font-semibold">REU Student Researcher</h2>
          <p>06/2021-08/2021</p>
          <ul>
            <li>Researched and presented capabilities of machine learning algorithms for computer vision using UAVs.</li>
            <li>Developed a convoluted neural network model for coastline detection.</li>
            <li>Extracted and validated data for analysis.</li>
          </ul>
        </div>
        <br/>
        <div>
          <h2 className="font-semibold">Tutor</h2>
          <p>09/2022-12/2022</p>
          <ul>
            <li>Assisted students with database management systems and systems programming concepts.</li>
            <li>Helped students troubleshoot server access and debug programs for class projects.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
