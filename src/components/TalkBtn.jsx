import React from "react";

const TalkBtn = () => {
    return (
        <div className="flex items-end justify-end bg-transparent fixed bottom-4 right-4">
            <a href="http://wa.me/+919925978977"><button class="relative bg-[#f10444] text-white font-semibold px-6 py-3 rounded-2xl 
              before:content-[''] before:absolute before:inset-0 before:translate-y-1 before:bg-[#a90037] 
              before:rounded-2xl before:-z-10">
  Let's Talk
</button></a>
        </div>
    );
}

export default TalkBtn;