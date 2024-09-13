import "./styles/home.css";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main>
      {/* Home Banner */}
      <Banner />

      {/*About*/}
      <div id="about-section" className="py-8 md:py-12 text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">About</h1>
        <p className="text-left text-base md:text-lg mb-4">
          I'm a graduate from Kean University, where I earned my B.S. in
          Computer Science. My academic journey was fueled by a deep interest in
          the intersection of technology and real-world applications,
          particularly in the field of Artificial Intelligence.&nbsp;
        </p>
        <br />
        <p className="text-base md:text-lg mb-4">
          During my time at Kean, I had the opportunity to work on exciting
          research projects. One of my most rewarding experiences was developing
          AI-driven solutions for drones, exploring how machine learning can
          enhance autonomous systems. Additionally, I participated in data
          research focused on educational institutions across the U.S.,
          contributing to studies involving the Carnegie Classification of
          Institutions of Higher Education (CCIHE).&nbsp;
        </p>
        <br />
        <p className="text-base md:text-lg mb-4">
          I'm passionate about using my skills in Computer Science to solve
          complex problems and innovate within the tech industry. I'm eager to
          continue learning, growing, and contributing to projects that push the
          boundaries of what's possible.&nbsp;
        </p>
      </div>
    </main>
  );
}
