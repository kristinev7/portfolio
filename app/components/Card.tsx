interface CardProps {
  name: string;
  description: string;
  link: string;
}

export default function Card({ name, description, link }: CardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-black border-2 bg-[#9F7538] rounded-lg p-4 flex flex-col justify-center items-center max-w-xs mx-auto"
    >
      <h1 className="text-lg font-bold">{name}</h1>
      <br />
      <p className="text-center">{description}</p>
    </a>
  );
}