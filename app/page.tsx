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
          I'm a graduate of Kean University with a B.S. in
          Computer Science.&nbsp;
        </p>
        <br />
        <p className="text-base md:text-lg mb-4">
          During my time at Kean, I had the opportunity to work on exciting
          research projects. One of my most rewarding experiences was exploring
          and developing AI-driven solutions for drones, exploring how machine
          learning can enhance autonomous systems. Additionally, I participated
          in data research focused on educational institutions across the U.S.,
          contributing to studies involving the Carnegie Classification of
          Institutions of Higher Education (CCIHE).&nbsp;
        </p>
        <br />
        <p className="text-base md:text-lg mb-4">
          I aim to solve complex problems and innovate. I'm eager to continue learning,
          growing, and contributing to valuable projects.&nbsp;
        </p>
      </div>
    </main>
  );
}
