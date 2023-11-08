import React from 'react';

const BotCard = ({ bot, onEnlist, onDischarge, onRelease }) => {
    const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

    return (
        <div className="bot-card">
            <img src={avatar_url} alt={name} className="bot-avatar" />
            <div className="bot-info">
                <h3>{name}</h3>
                <p>Class: {bot_class}</p>
                <p>Health: {health}</p>
                <p>Damage: {damage}</p>
                <p>Armor: {armor}</p>
                <p>Catchphrase: {catchphrase}</p>
                <button onClick={onEnlist}>Enlist</button>
                <button onClick={onDischarge}>Discharge</button>
                <button onClick={onRelease}>Release Bot</button>
            </div>
        </div>
    );
};

export default BotCard;