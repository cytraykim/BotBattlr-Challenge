import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ bots, enlistBot, dischargeBot, releaseBot }) => {
    return (
        <div className="bot-collection">
            {bots.map((bot) => (
                <BotCard key={bot.id} bot={bot} onEnlist={() => enlistBot(bot)} onDischarge={() =>dischargeBot(bot)} onRelease={() => releaseBot(bot)}  />
            ))}
        </div>
    );
};

export default YourBotArmy;