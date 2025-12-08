"use client";
import "../styles/home.css";
import Card from "../components/Card";
import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function Projects() {
  const cardsData = [
    {
      name: "Monty Hall Problem",
      description:
        "A web app in Reactjs to simulate the Monty Hall Problem , a probability puzzle, enhancing proficiency in JavaScript and modern web development.",
      link: "https://monty-hall-problem.replit.app/",
    },
    // { name: "Flux Endeavor",
    //   description: "A text-based adventure game in Java to strengthen understanding of Object-Oriented Programming (OOP) principles.",
    //   link: "https://github.com/kristinev7/FluxEndeavor/blob/main/ReadMe.md"
    // },
    {
      name: "Data Visualization",
      description:
        "A website developed using HTML, Bootstrap, JavaScript, SVG, Google Charts, jQuery, PHP, and MySQL, reading from a database holding NFL, population, and baseball data, with different charts displayed for each dataset.",
      link: "https://github.com/kristinev7/DataVisualization",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const cardRef = useRef(null);

  const flipCard = (nextIndex: number) => {
    // Animate out (current card flips to 90 degrees)
    gsap.to(cardRef.current, {
      rotationY: 90,
      duration: 0.5,
      onComplete: () => {
        // Update the card index after flipping out
        setCurrentCard(nextIndex);

        // Animate in (new card flips in from -90 degrees)
        gsap.fromTo(
          cardRef.current,
          { rotationY: -90 },
          { rotationY: 0, duration: 0.5 },
        );
      },
    });
  };

  const handleNext = () => {
    const nextIndex = (currentCard + 1) % cardsData.length;
    flipCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentCard - 1 + cardsData.length) % cardsData.length;
    flipCard(prevIndex);
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="font-extrabold text-center mb-10 mt-20 text-white">
        Flip Between Projects
      </div>
      <div className="relative w-64 h-64">
        <div
          ref={cardRef}
          className="flex items-center justify-center shadow-lg rounded-lg"
        >
          <Card
            name={cardsData[currentCard].name}
            description={cardsData[currentCard].description}
            link={cardsData[currentCard].link}
          />
        </div>
      </div>
      <div className="flex mt-20 gap-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </main>
  );
}
