import { Link } from "react-router-dom";
import icon from "../../assets/newchat.png";
import { AiOutlineClose } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import { edit } from "../../assets/Index";

export default function Sidebar({ setChat, closeMenu }) {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div className={`flex flex-col h-full p-4 bg-white`}>
      {isMobile && (
        <button
          className="flex justify-end items-center   w-full text-gray-800 hover:text-gray-500"
          onClick={closeMenu}
        >
          Close <AiOutlineClose />
        </button>
      )}

      <Link to="/" className="no-underline">
        <div
          className={`flex items-center justify-between space-x-2 p-2 rounded-lg cursor-pointer hover:bg-[#c4b6df] bg-[#D7C7F4]`}
          onClick={() => {
            setChat([]);
            closeMenu();
          }}
        >
          <img
            src={icon}
            alt="Chat Icon"
            className="h-10 w-10 rounded-lg shadow-lg"
          />
          <span className="text-lg font-bold">{"New Chat"}</span>
          <img src={edit} alt="" />
        </div>
      </Link>

      <div className="mt-4">
        <Link to="/history">
          <button
            className="bg-[#D7C7F4] text-white w-full py-2 rounded hover:bg-[#c4b6df]"
            onClick={closeMenu}
          >
            Past Conversations
          </button>
        </Link>
      </div>
    </div>
  );
}
