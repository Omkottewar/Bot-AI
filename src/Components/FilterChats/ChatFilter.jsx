import { useEffect, useState } from 'react';

export default function ChatFilter({ allChats, filterChats }) {
    const [option, setOption] = useState('All Ratings');

    const handleChange = (e) => {
        setOption(e.target.value);
    };

    // FILTER CHATS
    useEffect(() => {
        if (option === 'All Ratings') {
            filterChats(allChats);
        } else {
            const filtered = allChats.filter((item) => {
                return item.chat.some((ch) => ch.rating == option);
            });

            filterChats(filtered);
        }
    }, [option, allChats, filterChats]);

    return (
        <div className="mb-3">
            <label className="block text-sm mb-1">Filter by rating</label>
            <select
                value={option}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
            >
                <option value="All Ratings">All Ratings</option>
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
            </select>
        </div>
    );
}
