import { useState } from 'react';

const FeedbackForm = ({ open, handleClose, chatId, updateChat }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        updateChat(prev => (
            prev.map(item => {
                if (item.id === chatId) {
                    return { ...item, feedback: input };
                }
                return item;
            })
        ));

        setInput('');
        handleClose();
    };

    if (!open) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-5 w-11/12 max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="flex items-center text-lg font-semibold">
                        <span className="mr-2">📝</span> Provide Additional Feedback
                    </h2>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                        ✖️
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col">
                    <textarea
                        className="border rounded-lg p-2 mb-4 w-full"
                        rows="6"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        required
                        placeholder="Type your feedback here..."
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
