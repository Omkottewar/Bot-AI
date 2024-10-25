import { useState } from 'react';
import icon from '../../assets/bot.png';
import Card from './Card'

const DefaultChats = ({ generateResponse })=> {
    const initialData = [
        {
            heading: 'Hi, what is the weather',
            subtext: 'Get immediate AI generated response',
        },
        {
            heading: 'Hi, what is my location',
            subtext: 'Get immediate AI generated response',
        },
        {
            heading: 'Hi, what is the temperature',
            subtext: 'Get immediate AI generated response',
        },
        {
            heading: 'Hi, how are you',
            subtext: 'Get immediate AI generated response',
        },
    ];

    return (
        <div className="flex flex-col justify-end h-full p-4 md:p-6">
            <div className="flex flex-col items-center my-5 space-y-2">
                <h2 className="text-2xl font-bold">How Can I Help You Today?</h2>
                <img
                    src={icon}
                    alt="Chat Bot"
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-lg"
                />
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
                {initialData.map((item) => (
                    <Card 
                        key={item.heading} 
                        heading={item.heading} 
                        subtext={item.subtext} 
                        handleClick={generateResponse} 
                    />
                ))}
            </div>
        </div>
    );
}

export default DefaultChats