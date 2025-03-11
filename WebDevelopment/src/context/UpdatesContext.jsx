import React, { createContext, useState } from 'react';
import imgGen4 from '../imgs/updates_gen4.jpg';
import imgGen3 from '../imgs/updates_gen3.jpg';
import imgGen2 from '../imgs/updates_gen2.jpg';
import imgGen1 from '../imgs/updates_gen1.jpg';

export const ImagesMap = {
  gen4: imgGen4,
  gen3: imgGen3,
  gen2: imgGen2,
  gen1: imgGen1,
};

const initialUpdates = [
  {
    id: 5,
    category: "HIVE x CLINIC",
    date: "12.05.24",
    title: "ExploraVist Featured in The Hive x Harvey Mudd Clinic Update!",
    sections: [
      { type: 'header', content: "The Hive x Harvey Mudd Clinic" },
      { type: 'paragraph', content: "For the first half of the Clinic project, our primary goal was to deeply understand the needs of the blind and visually impaired (BVI) community and identify challenges that our device could address. Through over a dozen interviews, we came to learn about the visually impaired experience from a variety of different perspectives." },
      { type: 'paragraph', content: "We also were able to perform user testing with a variety of prototypes at the San Bernardino Lighthouse for The Blind. In the coming semester, we will provide devices to users for extended testing, as well as follow up on our interviewees, build our business platform, and ultimately develop an easy and affordably manufacturable device by the end of the semester." },
      { type: 'paragraph', content: "We are excited for the unique opportunity we have in partnership with the Hive and are eager to get the ExploraVist device into the hands of users!" },
      { type: 'header', content: "Click below to read the full article!" },
      { type: 'imageLink', imageKey: "gen4", link: "https://us14.campaign-archive.com/?u=9be17699582e7f4b8d4a76675&id=7746d38772" }
    ]
  },
  {
    id: 4,
    category: "HMC Clinic",
    date: "8.16.24",
    title: "ExploraVist Launches Clinic Project at Harvey Mudd College",
    sections: [
      { type: 'header', content: "The ’24-’25 Entrepreneurial Clinic at Harvey Mudd College is proudly sponsored by The Hive" },
      { type: 'paragraph', content: "The Hive is an organization dedicated to deepening the understanding and appreciation of human-centered design and its potential for creative, positive impact. ExploraVist was selected for this opportunity due to its technical innovation and strong societal responsiveness, addressing specific community needs through its work." },
      { type: 'paragraph', content: "With $60,000 in funding from The Hive, this Clinic project will support a team of six in the Engineering Department, driving forward our mission of developing affordable accessibility solutions. We’re incredibly excited about the progress and developments ahead—stay tuned for what’s to come!" }
    ]
  },
  {
    id: 3,
    category: "Gen 0.3",
    date: "04.21.24",
    title: "Our first ready for market prototype!",
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
    category: "Gen 0.2",
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
    category: "Gen 0.1",
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