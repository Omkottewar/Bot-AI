import { useEffect, useState } from "react";
import { format } from "date-fns";
import ai from "../../assets/bot.png";
import human from "../../assets/person.png";

const ChatCard = ({
  details,
  showFeedbackModal,
  updateChat,
  setSelectedChatId,
  readOnly = false,
}) => {
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (isRating) {
      updateChat((prev) =>
        prev.map((item) =>
          item.id === details.id ? { ...item, rating: rating || 0 } : item
        )
      );
    }
  }, [rating, details.id, isRating, updateChat]);

  const handleStarClick = (starRating) => {
    setRating(starRating);
    setIsRating(true);
  };

  return (
    <div
      className={`flex p-2 md:p-4 shadow-md rounded-lg ${
        readOnly ? "bg-[#D7C7F4]" : "bg-white"
      }`}
    >
      <img
        src={details.type === "AI" ? ai : human}
        alt={details.type}
        className="h-8 w-8 md:h-16 md:w-16 rounded-full object-cover flex-shrink-0"
      />
      <div className="ml-2">
        <h3 className="font-bold text-lg">
          {details.type === "AI" ? "Soul AI" : "You"}
        </h3>
        <p className="text-sm md:text-base">{details.text}</p>
        <div className="flex items-center mt-1">
          <span className="text-xs md:text-sm text-gray-500">
            {format(details.time, "hh:mm a")}
          </span>
          {details.type === "AI" && !readOnly && (
            <div className="flex ml-2">
              <button
                onClick={() => setIsRating((prev) => !prev)}
                className="text-sm"
              >
                {isRating ? "👍" : "👍🏻"}
              </button>
              <button
                onClick={() => {
                  setSelectedChatId(details.id);
                  showFeedbackModal();
                }}
                className="text-sm ml-2"
              >
                👎
              </button>
            </div>
          )}
        </div>

        {(isRating || details.rating > 0) && details.type === "AI" && (
          <div className="pt-2">
            <span className="text-xs md:text-sm mb-1">
              {readOnly ? "Rating:" : "Rate this response:"}
            </span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleStarClick(star)}
                  className={`text-lg ${
                    star <= (details.rating > 0 ? details.rating : rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  disabled={readOnly}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
        )}

        {details.feedback && (
          <p className="pt-1 text-xs md:text-base">
            <span className="font-semibold">Feedback:</span>
            <span> {details.feedback}</span>
          </p>
        )}
      </div>
    </div>
  );
};
export default ChatCard;
