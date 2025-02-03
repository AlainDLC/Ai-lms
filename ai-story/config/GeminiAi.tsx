import "./envConfig.ts";

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper out style: story of boy and Magic School, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "storyTitle": "Leo and the Magical Math School",\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterTitle": "The Mysterious Number Sign",\n      "textPrompt": "Leo loved to explore. One sunny afternoon, while walking home from school, he noticed a strange, shimmering number sign tucked behind a big oak tree. The sign had numbers and symbols swirling around it like a playful breeze. Curious, Leo reached out and touched it. Suddenly, the ground began to wobble and a small, paper-like door popped into existence right next to the sign. He peeked inside and saw a bright, colorful hallway made entirely of paper!",\n      "imagePrompt": "A young boy, Leo, with bright orange hair, stands beside a large oak tree in a park. A shimmering number sign is partially hidden behind the tree, with numbers and symbols swirling around it. A small, paper-like door is appearing next to the sign. The scene is bright and sunny, with a whimsical, paper-cut-out feel for all elements including Leo and the oak tree. The style should be layered with distinct edges to create a paper effect.",\n      "imageStyle": "paper cutout style, whimsical, bright colors, layered, distinct edges, slightly textured paper"\n    },\n    {\n      "chapterNumber": 2,\n      "chapterTitle": "The Paper Math Classroom",\n      "textPrompt": "Leo cautiously stepped through the paper door and found himself in a classroom unlike any he had ever seen. Everything was made of paper! There were paper desks, paper chairs, and even a paper blackboard with chalk that looked like cut-out strips. The children were all paper dolls, and their teacher, a cheerful lady with paper glasses, greeted him with a warm smile. She introduced herself as Miss Calcula and explained that this was the Magical Math School, where numbers came to life. Leo was amazed and a little nervous, but mostly excited!",\n      "imagePrompt": "A wide-angle view of a paper classroom. The walls, desks, chairs and even blackboard are made of paper cutouts. Paper doll students are sitting at desks and a teacher, Miss Calcula, a paper cut out with paper glasses, is greeting Leo at the entrance. The blackboard has paper cut-out numbers and symbols on it. The style is colorful, with distinct paper layering and texture.",\n      "imageStyle": "paper cutout style, classroom setting, whimsical architecture, layered paper textures, vibrant colors, playful characters"\n    },\n    {\n       "chapterNumber": 3,\n      "chapterTitle": "Learning with Paper Shapes",\n       "textPrompt": "Miss Calcula introduced Leo to the wonderful world of paper shapes. They used paper squares to build houses, paper triangles to make sailboats, and paper circles to create bouncing balls. As they played, they learned about different shapes and how many sides each one had. Leo discovered that math wasn\'t just about numbers, but about creating and building. He giggled as his paper sailboat wobbled in the paper \'sea\' he had created. It was the most fun he\'d ever had learning!",\n      "imagePrompt": "Leo is sitting at a paper desk, surrounded by paper shapes. He\'s holding a paper triangle to create a sailboat, while other paper doll students are building houses with paper squares and bouncing paper circles. Miss Calcula is showing them a new shape on the paper blackboard. The scene is full of paper cut-out shapes, with a bright and playful atmosphere.",\n      "imageStyle": "paper cutout style, hands-on learning, geometric shapes, dynamic composition, vibrant colors, playful activity"\n    },\n    {\n      "chapterNumber": 4,\n      "chapterTitle": "The Missing Number Puzzle",\n      "textPrompt": "Suddenly, Miss Calcula announced that the school’s special number puzzle, used to make all their paper creations work, was missing! It was a large paper square with numbers arranged in a special order. All the students were worried. Leo, remembering his love of puzzles, volunteered to help find it. He carefully looked around the paper classroom, checking behind the paper shelves, under the paper tables, and even inside the paper pencil holders. Where could this magic math puzzle be?",\n       "imagePrompt": "Close-up shot of the paper classroom. Students look concerned, with their paper faces showing worry. The puzzle space on a paper wall is empty, and Leo is carefully searching behind paper shelves with his hand reaching behind it. Miss Calcula is looking at the empty space with concern. The scene is detailed and shows paper objects. The atmosphere is a little tense.",\n       "imageStyle": "paper cutout style, detailed scene, worried expressions, slightly chaotic atmosphere, focused search"\n    },\n    {\n      "chapterNumber": 5,\n      "chapterTitle": "Leo, the Math Explorer",\n      "textPrompt": "Leo spotted it! The number puzzle had slipped behind a tall stack of paper books. He carefully placed it back in its spot, and the classroom filled with a soft, golden light. The paper shapes began to shimmer, and everything felt back to normal again. The paper children cheered for Leo! He realized that even though he was new to this paper school, he could still be a great help by using his observation and puzzle-solving skills. He bid farewell to Miss Calcula and his new paper friends, excited to visit the magical math school again very soon. He left the paper door, leaving the magic number sign behind the tree.",\n      "imagePrompt": "The paper classroom is filled with a warm, golden light. The number puzzle is back in its place, and the paper shapes are shimmering. Leo is smiling and being cheered by the paper doll students. Miss Calcula is clapping with joy. The scene is bright and filled with paper cut-out effects. The atmosphere is happy and celebratory.",\n      "imageStyle": "paper cutout style, dynamic movement, joyful scene, vibrant colors, celebratory atmosphere, light effect"\n    }\n  ],\n  "coverImage": {\n    "imagePrompt": "Book cover featuring a young boy named Leo with bright orange hair, standing in front of a whimsical paper school made of layered paper cut-outs. The school has paper shapes as architectural elements and a bright number sign on top. Title: \'Leo and the Magical Math School\' in a playful paper-cut font. The overall style should be bright, engaging, and have a handcrafted paper world aesthetic.",\n    "imageStyle": "paper cutout style, book cover design, playful font, whimsical architecture, bright colors, engaging composition, math symbols"\n   }\n}\n```\n',
        },
      ],
    },
  ],
});
