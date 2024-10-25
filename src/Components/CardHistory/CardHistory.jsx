import { format, isEqual, startOfDay, add } from 'date-fns';
import ChattingCard from '../ChatCard/ChatCard';

  const  CardHistory=({ details })=> {
    const formatDate = (date) => {
        const today = startOfDay(new Date());

        if (isEqual(date, today)) {
            return `Today's chats`;
        } else if (isEqual(today, add(date, { days: 1 }))) {
            return `Yesterday's chats`;
        } else {
            return format(date, 'do LLL yyyy');
        }
    };

    return (
        <div className="mb-4">
            <h2 className="font-bold mb-4">{formatDate(startOfDay(new Date(details.datetime)))}</h2>
            <div className="space-y-4">
                {details.chat.map((item, index) => (
                    <ChattingCard details={item} readOnly={true} key={index} />
                ))}
            </div>
        </div>
    );
}
export default CardHistory