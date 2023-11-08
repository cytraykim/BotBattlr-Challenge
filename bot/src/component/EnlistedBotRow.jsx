import React from 'react';



const EnlistedBotRow = ({ bot }) => {
    const {id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

    return (
        <div className="enlisted-bot-row">
            <img key={id} src={avatar_url} alt={name} className="bot-avatar" />
            <div className="bot-info">
                <h3>{name}</h3>
                <p>Class: {bot_class}</p>
                <p>Health: {health}</p>
                <p>Damage: {damage}</p>
                <p>Armor: {armor}</p>
                <p>Catchphrase: {catchphrase}</p>
            </div>
        </div>
    );
};

export default EnlistedBotRow;