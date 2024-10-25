import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChatInput = ({ generateResponse, chat, clearChat }) => {
    const [input, setInput] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        generateResponse(input);
        setInput('');
    };

    const handleSave = () => {
        const chat_history = JSON.parse(localStorage.getItem('chat')) || [];
        const date = new Date();
        localStorage.setItem('chat', JSON.stringify([{ chat, datetime: date }, ...chat_history]));
        clearChat();
        setShowSnackbar(true);
    };

    return (
        <div className="flex-shrink-0 px-2 pb-2 md:px-8 md:pb-8">
            <form onSubmit={handleSubmit}>
                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Message Bot AI..."
                        className="flex-1 bg-gray-200 rounded-lg p-2 text-base md:text-lg"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#D7C7F4] text-black rounded-lg px-4 py-2 text-base md:text-lg"
                    >
                        Ask
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={chat.length === 0}
                        className=" bg-[#D7C7F4] text-black rounded-lg px-4 py-2 text-base md:text-lg"
                    >
                        Save
                    </button>
                </div>
            </form>

            {showSnackbar && (
                <div className="fixed bottom-0 right-0 m-4 p-4 bg-gray-800 text-white rounded-lg">
                    <span>Chat saved.</span>
                    <Link to="/history">
                        <button className="ml-2 text-blue-300">See past conversations</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ChatInput;
