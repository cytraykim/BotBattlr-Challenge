import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    // Fetch bot data from the API endpoint
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []); // Fetch data only once on component mount

  const enlistBot = (bot) => {
    // Check if the bot is already enlisted in the army
    if (!yourBotArmy.some((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (botId) => {
    // Remove the bot from the army
    const updatedArmy = yourBotArmy.filter((bot) => bot.id !== botId);
    setYourBotArmy(updatedArmy);
  };

  const dischargeBot = async (botId) => {
    // Delete the bot both from the backend and from the YourBotArmy on the frontend
    try {
      await fetch(`http://localhost:3000/bots/${botId}`, { method: 'DELETE' });
      releaseBot(botId);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className="app">
      <h1>Bot Collection</h1>
      <YourBotArmy bots={yourBotArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
};

export default App;
