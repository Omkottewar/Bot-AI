import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Card({ heading, subtext, handleClick }) {
    return (
        <div 
            className="flex justify-between items-center p-3 md:p-5 rounded-md bg-[#d7C7F4] cursor-pointer"
            onClick={() => handleClick(heading)}
        >
            <div>
                <h3 className="font-bold text-lg md:text-xl">{heading}</h3>
                <p className="text-gray-600 text-sm md:text-base">{subtext}</p>
            </div>
            <div className="opacity-0 transition-opacity hover:opacity-100">
                <ArrowUpwardIcon className="text-blue-600" />
            </div>
        </div>
    );
}
