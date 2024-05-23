import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Button({ arrow, onClick }: any) {
    return (
        <div
            className="bg-gray-500 rounded-full w-10 h-10 shadow-xl overflow-hidden flex items-center justify-center"
            onClick={onClick}
        >
            {arrow === "left" ? <FaArrowLeft /> : <FaArrowRight />}
        </div>
    );
}
