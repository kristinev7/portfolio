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
          I'm a graduate of Kean University with a B.S. in Computer
          Science.&nbsp;
        </p>
        <br />
        <p className="text-base md:text-lg mb-4">
          During my time at Kean, I worked on exciting research projects,
          including developing AI-driven solutions for drones and exploring how
          machine learning can enhance autonomous systems. I also participated
          in data research focused on educational institutions across the U.S.,
          contributing to studies involving the Carnegie Classification of
          Institutions of Higher Education (CCIHE).&nbsp;
        </p>
        <br />
        <p className="text-base md:text-lg mb-4">
          I primarily use Java for my projects, building everything from
          microservices to text adventure and pixel games.&nbsp;
        </p>
        <br />
        <p className="text-base md:text-lg mb-4">
          Beyond development, I focus on cybersecurity and solutions
          architecture—two essential skills as organizations increasingly depend
          on cloud infrastructure. I actively learn through platforms like
          HackTheBox and OverTheWire, and engage with the community through
          groups like DEFCON 908. I'm currently pursuing my Security+
          certification.
        </p>
      </div>
    </main>
  );
}
