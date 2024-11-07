import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Reviews", "Shipping", "FAQ"];

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return <p>This is the description of the product.</p>;
      case "Reviews":
        return <p>Here are some reviews.</p>;
      case "Shipping":
        return <p>Shipping information goes here.</p>;
      case "FAQ":
        return <p>Frequently asked questions.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
              activeTab === tab
                ? "border-b-2 border-indigo-500 text-indigo-500"
                : "text-gray-600 hover:text-indigo-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabComponent;
