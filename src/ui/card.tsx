import Image from "next/image";

export default function Card({ card }: any) {
    return (
        <div className="bg-gray-500 rounded-xl shadow-xl w-80 overflow-hidden">
            <Image src={card.image} alt={card.title} height={100} width={400} />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">{card.title}</h2>
                <p className="mb-4">{card.description}</p>
            </div>
        </div>
    );
}
