interface CardProps {
  name: string;
}

export default function Card({name}: CardProps) {
  return (
    <div className="border-black border-2 bg-[#9F7538] rounded-lg p-5 flex justify-center items-center max-w-xs mx-auto">
      <h1>{name}</h1>
    </div>
  );
}
