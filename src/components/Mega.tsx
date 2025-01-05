import React from "react"; 
import BlogCard from "../components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "The Impact of Artificial Intelligence on Everyday Life",
      description: "Artificial Intelligence (AI) is no longer a futuristic concept—it’s a part of our daily lives...",
      date: "2025-01-03",
      imageUrl: "image-01.jpeg",
    },
    {
      id: "2",
      title: "How 5G is Revolutionizing Communication",
      description: "The introduction of 5G technology is transforming the way we connect and communicate...",
      date: "2025-01-03",
      imageUrl: "image-02.jpeg",
    },
    {
      id: "3",
      title: "How Blockchain is Transforming Industries Beyond Cryptocurrency",
      description: "Blockchain is most commonly known for Bitcoin, but its applications go far beyond cryptocurrency...",
      date: "2025-01-03",
      imageUrl: "image-03.jpeg",
    },
    {
      id: "4",
      title: "Top 10 Programming Languages to Learn in 2025",
      description: "The world of programming is always evolving, and knowing the right languages can help you stay ahead...",
      date: "2025-01-03",
      imageUrl: "image-04.jpeg",
    },
    {
      id: "5",
      title: "The Future of Smart Homes: Gadgets You Need to Know About",
      description: "Smart homes are becoming more common, and the technology behind them is constantly improving...",
      date: "2025-01-03",
      imageUrl: "image-05.jpeg",
    },
    {
      id: "6",
      title: "Cybersecurity Tips for Protecting Your Online Presence",
      description: "In the digital age, keeping your data secure is more important than ever. Here are a few tips to protect your online presence...",
      date: "2025-01-03",
      imageUrl: "image-06.jpeg",
    },
    {
      id: "7",
      title: "Top 5 Must-Have Gadgets for Tech Enthusiasts",
      description: "Tech enthusiasts love gadgets that make life more convenient and exciting. Here are five must-have gadgets...",
      date: "2025-01-03",
      imageUrl: "image-07.jpeg",
    },
    {
      id: "8",
      title: "The Importance of Ethical AI Development",
      description: "As AI becomes more integrated into society, ethical concerns are rising. Here’s why ethical AI is important...",
      date: "2025-01-03",
      imageUrl: "image-08.jpeg",
    },
    {
      id: "9",
      title: "How to Start Your Career in Web Development",
      description: "Web development is a highly rewarding career. Here’s a step-by-step guide to get started...",
      date: "2025-01-03",
      imageUrl: "image-09.jpeg",
    },
  ];

  return (
    <div className="my-8 px-4">
      <h1 className="text-3xl font-bold text-center my-8 text-blue-600 animate-color-change">
        Exploring the World of AI and Technology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="border border-gray-300 p-4 rounded-md">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
