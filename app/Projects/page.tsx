import "../styles/home.css";
import Card from "../components/Card";

export default function Projects() {
  return (
    <main>
      <div className="font-extrabold text-center mb-5 mt-5">
        Projects Here..pending
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 p-5 xl:px-5 2xl:w-3/4">
          <a href="https://monty-hall-problem.replit.app/">
            <Card name="Monty Hall Problem" />
          </a>

        </div>

        <div className="w-full md:w-1/2 p-5 xl:px-5 2xl:w-3/4">
          <Card name="Project 2" />
        </div>

        <div className="w-full md:w-1/2 p-5 xl:px-5 2xl:w-3/4">
          <Card name="Project 3" />
        </div>
      </div>
    </main>
  );
}
