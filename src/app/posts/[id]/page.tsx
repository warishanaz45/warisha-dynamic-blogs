"use client";
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthoreCard from '@/components/AuthoreCard';

const posts = [
  {
    id: "1",
    title: "The Impact of Artificial Intelligence on Everyday Life",
    description:"Artificial Intelligence (AI) is no longer a futuristic concept—it’s a part of our daily lives. From the way we communicate to how we work and entertain ourselves, AI is revolutionizing every aspect of modern living Here’s a look at how AI impacts us every Smart Assistants: Your Personal Helpers Voice assistants like Siri, Alexa, and Google Assistant are powered by AI They help us set reminders, play music, search for information, and even control smart home devices. AI makes our lives more convenient and efficient Personalized Recommendations Ever wondered how Netflix knows what to recommend next? Or why your YouTube feed feels so tailored to your taste? AI analyzes your behavior and preferences to suggest content, making your online experience more enjoyable Online Shopping and E-commerce AI enhances your shopping experience by providing product recommendations based on your browsing history. Chatbots on websites also use AI to assist customers, answer queries, and even resolve issues.",
    date: "2025-01-03",
    imageUrl: "image-01.jpeg",
  },
  {
    id: "2",
    title: "How 5G is Revolutionizing Communication",
    description:"The introduction of 5G technology is transforming the way we connect and communicate. It’s faster, more reliable, and capable of handling much larger amounts of data compared to 4G. Here are some key ways 5G is revolutionizing communication: Blazing Fast Speeds 5G offers speeds up to 100 times faster than 4G, making tasks like video streaming, downloading, and online gaming almost instant. Improved Connectivity With 5G, more devices can stay connected simultaneously without slowing down. This is essential for smart cities, IoT devices, and autonomous vehicles.   Enhanced Mobile Experience Video calls are smoother, streaming is uninterrupted, and file-sharing is quicker, thanks to low latency and stable connections qBusiness Transformation Industries like healthcare, transportation, and manufacturing are leveraging 5G for innovations like remote surgeries, smart factories, and real-time tracking systems.",
    date: "2025-01-03",
    imageUrl: "image-02.jpeg",
  },
  {
    id: "3",
    title: "How Blockchain is Transforming Industries Beyond Cryptocurrency",
    description: "Blockchain is most commonly known for Bitcoin, but its applications go far beyond cryptocurrency. Here are some industries benefiting from blockchain:Healthcare – Secure sharing of patient data and tracking medical records. Supply Chain – Improved tracking and transparency of products. Finance – Faster, more secure transactions without middlemen.Real Estate – Transparent property ownership records and streamlined transactions.Voting Systems – Enhanced security and transparency in elections.",
    date: "2025-01-03",
    imageUrl: "image-03.jpeg",
  },
  {
    id: "4",
    title: "Top 10 Programming Languages to Learn in 2025",
    description: "The world of programming is always evolving, and knowing the right languages can help you stay ahead. Here are the top 10 programming languages to learn in 2024 Python – Great for AI, data analysis, and web development JavaScript – Essential for web development and full-stack programming TypeScript – A superset of JavaScript for more reliable code Java – Popular for Android apps and large systems C# – Used for game development with Unity.Go – Known for its simplicity and speed, used in cloud computing. Swift – Ideal for iOS app development. Ruby – A good choice for web developers PHP – Widely used for server-side scripting and web apps Rust – Gaining traction for system programming and safety-critical software.",
    date: "2025-01-03",
    imageUrl: "image-04.jpeg",
  },
  {
    id: "5",
    title: "The Future of Smart Homes: Gadgets You Need to Know About",
    description: "Smart homes are becoming more common, and the technology behind them is constantly improving. Here are a few gadgets that will shape the future of smart living:Smart Thermostats – Learn your schedule and adjust temperatures automatically. Voice Assistants – Control lights, music, and more with voice commands. Security Cameras – Monitor your home remotely with AI-driven cameras.Smart Lighting – Adjust lighting based on time of day or activity.Robot Vacuums – Clean your home while you relax.",
    date: "2025-01-03",
    imageUrl: "image-05.jpeg",
  },
  {
    id: "6",
    title: "Cybersecurity Tips for Protecting Your Online Presence",
    description: "In the digital age, keeping your data secure is more important than ever. Here are a few tips to protect your online presence:Use Strong Passwords – Create unique, complex passwords for every account.Enable Two-Factor Authentication – Add an extra layer of security to your accounts.Beware of Phishing – Be cautious of suspicious emails and links.Update Software Regularly – Keep your devices up to date to prevent vulnerabilities.Encrypt Your Data – Use encryption to protect sensitive information.",
    date: "2025-01-03",
    imageUrl: "image-06.jpeg",
  },
  {
    id: "7",
    title: "Top 5 Must-Have Gadgets for Tech Enthusiasts",
    description: "Tech enthusiasts love gadgets that make life more convenient and exciting. Here are five must-have gadgets:Smartphones – The latest models with cutting-edge features. Smartwatches – Keep track of fitness and notifications with ease. Wireless Earbuds – High-quality sound with no cords. Portable Chargers – Always have power on the go.Virtual Reality Headsets – Dive into immersive gaming experiences.",
    date: "2025-01-03",
    imageUrl: "image-07.jpeg",
  },
  {
    id: "8",
    title: "The Importance of Ethical AI Development",
    description: "As AI becomes more integrated into society, ethical concerns are rising. Here’s why ethical AI is important: Privacy Protection – Ensuring AI doesn’t misuse personal data. Fairness – Avoiding bias in AI algorithms.Transparency – Making AI decision-making processes clear and understandable. Accountability – Holding creators responsible for AI’s actions.Human Impact – Ensuring AI improves human life without causing harm.",
    date: "2025-01-03",
    imageUrl: "image-08.jpeg",
  },
  {
    id: "9",
    title: "How to Start Your Career in Web Development",
    description: "Web development is a highly rewarding career. Here’s a step-by-step guide to get started: Learn the Basics – HTML, CSS, and JavaScript are essential for web development.Pick a Framework – Learn popular frameworks like React, Angular, or Vue.js. Build Projects – Create personal projects to showcase your skills.Stay Updated – Web development is constantly evolving, so keep learning.Join a Community – Connect with other developers and ask for feedback..",
    date: "2025-01-03",
    imageUrl: "image-09.jpeg",
  },

];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-black">{post.date}</p>
      {renderParagraphs(post.description)} {/* Render paragraphs of post description */}
      <CommentSection postId={post.id} />
      <AuthoreCard />
    </div>
  );
}
