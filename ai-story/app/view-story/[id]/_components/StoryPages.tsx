import React from "react";

function StoryPages({ storyChapter }: any) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary">
        {storyChapter?.chapterTitle}
      </h2>
      <p className="text-xl p-10 mt-3 rounded-lg bg-slate-100">
        {storyChapter?.textPrompt}
      </p>
    </div>
  );
}

export default StoryPages;
