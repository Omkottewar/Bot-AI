import { useEffect, useState } from 'react';
import CardHistory from '../../Components/CardHistory/CardHistory';
import ChatFilter from '../../Components/FilterChats/ChatFilter';
import Navbar from '../../components/Navbar/Navbar';

export default function History() {
    const [chats, setChats] = useState([]);
    const [filteredChats, setFilteredChats] = useState([]);

    useEffect(() => {
        const localChats = localStorage.getItem('chat');
        if (localChats) {
            // Ensure we only parse if localChats is not null
            try {
                const parsedChats = JSON.parse(localChats);
                setChats(parsedChats);
                setFilteredChats(parsedChats);
            } catch (error) {
                console.error("Error parsing chats from local storage:", error);
                // Optionally handle the error (e.g., set chats to an empty array)
            }
        }
    }, []);

    return (
        <div className="h-screen flex flex-col">
            <Navbar />

            <div className="flex-1 overflow-auto p-4 md:p-6">
                <h2 className="text-2xl font-bold text-center mb-3">Conversation History</h2>

                {chats.length > 0 && (
                    <ChatFilter allChats={chats} filterChats={setFilteredChats} />
                )}

                {chats.length === 0 && (
                    <div className="text-center p-3 bg-gray-200 rounded-lg">
                        No saved chats.
                    </div>
                )}

                {chats.length > 0 && filteredChats.length === 0 && (
                    <div className="text-center p-3 bg-gray-200 rounded-lg">
                        No such chats.
                    </div>
                )}

                {filteredChats.length > 0 && (
                    <div className="space-y-4">
                        {filteredChats.map((item, index) => (
                            <CardHistory details={item} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
