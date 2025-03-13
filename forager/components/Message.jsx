import React from 'react';

const Message = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div 
                className="message bg-[#FF5050] text-sm font-medium text-white rounded-xl flex flex-col border border-black px-[19px] pr-[14px] py-4"
                style={{ width: "315px", height: "206px", flexShrink: 0 }}
            >
                {/* ✅ Header Section */}
                <div className="header flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        {/* ✅ Warning Icon */}
                        <img 
                            src="/icons/warningIcon.svg" 
                            alt="Warning Icon" 
                            width="27" 
                            height="27"
                            className="mr-2"
                        />
                        <h1 className="uppercase text-lg font-bold">ATTENTION!</h1>
                    </div>
                    
                    {/* ✅ X Button to Dismiss */}
                    <button onClick={onClose} className="ml-auto cursor-pointer">
                        <img 
                            src="/icons/xButtonWhite.svg" 
                            alt="Close" 
                            width="24" 
                            height="24"
                        />
                    </button>
                </div>

                {/* ✅ Warning Message */}
                <p 
                    className="text-[16px] text-left"
                    style={{ width: "282px", height: "155.773px", flexShrink: 0 }}
                >
                    Our system can make mistakes! Remember to verify important information and use your own judgment to determine if any mushroom is safe. Be sure to use <span className="font-bold">“Report Error”</span> if you suspect a mistake.
                </p>
            </div>
        </div>
    );
};

export default Message;
