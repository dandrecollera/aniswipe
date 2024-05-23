"use client";

import { useState } from "react";
import Card from "@/ui/card";
import Button from "@/ui/button";

const cards = [
    { id: 1, image: "/img/18793.jpg", title: "Monster", description: "Card 1 Description" },
    { id: 2, image: "/img/142711.jpg", title: "Demon Slayer", description: "Card 2 Description" },
];

export default function Home() {
    const [currentCard, setCurrentCard] = useState(0);

    const handleLeftArrowClick = () => {
        setCurrentCard((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleRightArrowClick = () => {
        setCurrentCard((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <main className="flex items-center justify-center min-h-screen">
            <div>
                <Card card={cards[currentCard]} />
                <div className="flex justify-center py-3 gap-x-4">
                    <Button arrow="left" onClick={handleLeftArrowClick} />
                    <Button arrow="right" onClick={handleRightArrowClick} />
                </div>
            </div>
        </main>
    );
}
