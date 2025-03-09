import React, { createContext, useState } from 'react';
import imgGen3 from '../imgs/updates_gen3.jpg';
import imgGen2 from '../imgs/updates_gen2.jpg';
import imgGen1 from '../imgs/updates_gen1.jpg';

export const ImagesMap = {
  gen3: imgGen3,
  gen2: imgGen2,
  gen1: imgGen1,
};

const initialUpdates = [
  {
    id: 3,
    category: "Gen 3", // now customizable (could be "Gen 3", "Partnership", etc.)
    date: "04.21.24",
    title: "Our ready for market prototype!",
    sections: [
      { type: 'paragraph', content: "This version responds in 6 seconds with 95%+ success rate in descriptions, and thanks to our model switch to Claude Haiku, is 40x cheaper!" },
      { type: 'header', content: "We also now have a UI that allows you to:" },
      { type: 'list', items: ["Adjust Volume", "Check the battery level", "Change models from GPT-4 to Claude Haiku", "Change response modes from short description (1-2 sentences) to long description (1-2 paragraphs)!"] },
      { type: 'paragraph', content: "After positive feedback from visiting the San Bernardino lighthouse for the blind, we think this version is ready for the market! Because of this we are just doing one more iteration to Gen 4 which will have a PCB that allows us to mass produce it. On top of that we hope to also add a few more easy to implement features!" },
      { type: 'header', content: "We want to add:" },
      { type: 'list', items: ["Voice Input: Ask questions about pictures for a specific description", "Voice Assistant: Ask any question to the AI without a picture", "Voice Memos: Record notes for yourself so you can replay them", "App Support: Partner IPhone/Android app to connect your device to the internet without needing to call with us to set it up!"] },
      { type: 'paragraphWithLink', content: "If you are interested in testing the device for free, visit our", link: { text: "Contact Page", url: "/contact" } },
      { type: 'header', content: "Click the picture to see a video of it working!", headerLevel: 3 },
      { type: 'imageLink', imageKey: "gen3", link: "https://drive.google.com/file/d/1CzRA4ILdGap4miWN8zYAqFEqi0FCe1_o/view" }
    ]
  },
  {
    id: 2,
    category: "Gen 2",
    date: "02.15.24",
    title: "Device works (Still slowly) with battery safety and capacitive touch UI",
    sections: [
      { type: 'paragraph', content: "This version now snaps a picture when the metal touch pads are pressed, and responds slightly faster than Gen 1 in ~20 seconds. In addition, it sits in a new casing with a convenient universal attachment for all glasses, and has various battery safety features." },
      { type: 'paragraph', content: "In terms of hardware, things are mostly flushed out aside from a much needed camera upgrade." },
      { type: 'paragraph', content: "With software, we hope to get speeds down to <5 seconds for this next generation." },
      { type: 'imageLink', imageKey: "gen2" }
    ]
  },
  {
    id: 1,
    category: "Gen 1",
    date: "12.25.23",
    title: "First working version",
    sections: [
      { type: 'paragraph', content: "This original prototype was barebones, snapping a picture when turned on (no user interface) and took ~30 seconds to respond." },
      { type: 'header', content: "Click the picture to see a video of it working!", headerLevel: 3 },
      { type: 'imageLink', imageKey: "gen1", link: "https://drive.google.com/file/d/114dX1XSSEe9KaeqTzVFeF-toWlxS05XN/view" }
    ]
  }
];

export const UpdatesContext = createContext();

export const UpdatesProvider = ({ children }) => {
  const [updates, setUpdates] = useState(initialUpdates);

  const addUpdate = (newUpdate) => {
    setUpdates(prev => [newUpdate, ...prev]);
  };

  const editUpdate = (updatedUpdate) => {
    setUpdates(prev => prev.map(update => update.id === updatedUpdate.id ? updatedUpdate : update));
  };

  const deleteUpdate = (id) => {
    setUpdates(prev => prev.filter(update => update.id !== id));
  };

  return (
    <UpdatesContext.Provider value={{ updates, addUpdate, editUpdate, deleteUpdate, imagesMap: ImagesMap }}>
      {children}
    </UpdatesContext.Provider>
  );
};