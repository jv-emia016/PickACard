const colors = {
  '🎨 Just for Fun & a Bit of Chaos': '#FFE0B2',
  '🧠 Big Questions, Bold Answers': '#E1BEE7',
  '📚 The Way I Learn & Work': '#B2EBF2',
  '💛 Me, My Friends, & My Vibe': '#FFF9C4',
  '⚡ Power-Up Time!': '#F8BBD0'
};

const cards = [
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"What’s your signature dance move called, and when do you use it?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"If your life were a movie, what would the title be?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"What’s one food you’ll never get tired of eating?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"Would you rather time travel to the past or future? Why?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"What’s your “useless” superpower (e.g., turning socks invisible)?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"Which emoji best describes you today?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"If you could be a teacher for a day, what subject would you teach?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"What’s your go-to hype song before a big day?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"Invent a school subject that you think should be required."},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"Design your dream school — what’s different about it?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"What’s a fictional character you relate to and why?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"If your personality were a color, what would it be?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"You’re writing a book about your life — what’s the first sentence?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"If you could create a new rule for the world, what would it be?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"What 3 objects would you put in a time capsule to represent you?"},
  {category:'🎨 Just for Fun & a Bit of Chaos', question:"You wake up with a random talent tomorrow — what is it?"},

  {category:'🧠 Big Questions, Bold Answers', question:"What’s something you wish people understood better about you?"},
  {category:'🧠 Big Questions, Bold Answers', question:"What challenge in your life has made you stronger?"},
  {category:'🧠 Big Questions, Bold Answers', question:"Who has shaped your values the most, and how?"},
  {category:'🧠 Big Questions, Bold Answers', question:"When do you feel the most confident?"},
  {category:'🧠 Big Questions, Bold Answers', question:"If you could talk to your younger self, what would you say?"},
  {category:'🧠 Big Questions, Bold Answers', question:"What’s a dream you’re working toward — big or small?"},
  {category:'🧠 Big Questions, Bold Answers', question:"How do you respond when things don’t go your way?"},
  {category:'🧠 Big Questions, Bold Answers', question:"Would you rather be remembered or misunderstood?"},
  {category:'🧠 Big Questions, Bold Answers', question:"Can a mistake ever be the best thing that happens to you?"},
  {category:'🧠 Big Questions, Bold Answers', question:"What does “success” mean to you — not to others?"},
  {category:'🧠 Big Questions, Bold Answers', question:"What’s something that scares you, but you want to do anyway?"},
  {category:'🧠 Big Questions, Bold Answers', question:"Do you think we are shaped more by choices or circumstances?"},
  {category:'🧠 Big Questions, Bold Answers', question:"If everyone had to carry one visible word above their heads, what would yours be?"},

  {category:'📚 The Way I Learn & Work', question:"Do you prefer working alone, in pairs, or in groups — and why?"},
  {category:'📚 The Way I Learn & Work', question:"What kind of classroom environment helps you focus best?"},
  {category:'📚 The Way I Learn & Work', question:"How do you like to be helped when you’re stuck on something?"},
  {category:'📚 The Way I Learn & Work', question:"What makes you feel supported by a teacher or classmate?"},
  {category:'📚 The Way I Learn & Work', question:"What role do you often play in group work (e.g., leader, idea person, organizer, encourager)?"},
  {category:'📚 The Way I Learn & Work', question:"Do you learn best by listening, doing, reading, or seeing?"},
  {category:'📚 The Way I Learn & Work', question:"What does a “perfect school day” look like for you?"},
  {category:'📚 The Way I Learn & Work', question:"If you could design a school for students like you, what would be different?"},
  {category:'📚 The Way I Learn & Work', question:"What motivates you to keep trying when learning gets hard?"},
  {category:'📚 The Way I Learn & Work', question:"How do you usually handle deadlines or pressure in school?"},

  {category:'💛 Me, My Friends, & My Vibe', question:"What qualities do you look for in a friend?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"How do you show someone that they’re important to you?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"What’s something a friend has done that made you feel really valued?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"Are you more of a listener or a talker in your friendships?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"Do you make friends easily, or do you take time to open up?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"What kind of friend are you in a group — the peacemaker, the funny one, the planner, etc.?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"What does loyalty mean to you in a friendship?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"Do you believe people can be very different and still be close friends? Why or why not?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"If your personality was a weather forecast, what would it be and why?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"When do you feel most like yourself?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"What’s something people often misunderstand about your personality?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"How do you recharge: alone time, being with friends, or doing something creative?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"Do you usually follow your head or your heart?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"If you had to describe yourself using only 3 adjectives, what would they be?"},
  {category:'💛 Me, My Friends, & My Vibe', question:"What kind of energy do you bring into a room or group?"},

  {category:'⚡ Power-Up Time!', question:"🎯 Tag! Choose someone to answer this with you."},
  {category:'⚡ Power-Up Time!', question:"🌀 Flip the script — ask your own question instead!"},
  {category:'⚡ Power-Up Time!', question:"🔄 Swap this card with a classmate."},
  {category:'⚡ Power-Up Time!', question:"🤫 Silent Spark! Reflect for 15 seconds before speaking."},
  {category:'⚡ Power-Up Time!', question:"🎭 Act out your answer like charades! No words!"},
  {category:'⚡ Power-Up Time!', question:"🎤 Teacher Time! Ask your teacher to answer this too."},
  {category:'⚡ Power-Up Time!', question:"😄 Everyone gives a 1-line answer — rapid fire!"},
  {category:'⚡ Power-Up Time!', question:"🎨 Emoji Challenge: Answer only with emojis, then explain."},
  {category:'⚡ Power-Up Time!', question:"🌟 You Be the Judge: choose the most original answer in the group."},
  {category:'⚡ Power-Up Time!', question:"🧊 Freeze! Give this card to someone who hasn't spoken yet."}
];

const cardEl = document.getElementById('card');
const cardCategoryEl = document.getElementById('card-category');
const cardQuestionEl = document.getElementById('card-question');
const drawButton = document.getElementById('draw-button');
const shareButton = document.getElementById('share-button');
let currentCard = null;

function drawCard() {
  currentCard = cards[Math.floor(Math.random() * cards.length)];
  cardCategoryEl.textContent = currentCard.category;
  cardQuestionEl.textContent = currentCard.question;

  const color = colors[currentCard.category] || '#ffffff';
  cardEl.style.backgroundColor = color;
  cardEl.style.borderColor = color;
  shareButton.disabled = false;
}

async function shareCard() {
  if (!currentCard) return;
  const shareText = `${currentCard.category}\n\n"${currentCard.question}"`;

  if (navigator.share) {
    try {
      await navigator.share({ title: "Pick-a-Card", text: shareText });
    } catch {
      alert("Sharing cancelled.");
    }
  } else {
    try {
      await navigator.clipboard.writeText(shareText);
      alert("Copied to clipboard!");
    } catch {
      alert("Could not copy.");
    }
  }
}

drawButton.addEventListener('click', drawCard);
shareButton.addEventListener('click', shareCard);