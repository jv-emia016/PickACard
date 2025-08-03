const cards = [
  // Fun & Chaos (fun)
  {category:'fun', question:"What’s your signature dance move called, and when do you use it?"},
  {category:'fun', question:"If your life were a movie, what would the title be?"},
  {category:'fun', question:"What’s one food you’ll never get tired of eating?"},
  {category:'fun', question:"Would you rather time travel to the past or future? Why?"},
  {category:'fun', question:"What’s your “useless” superpower (e.g., turning socks invisible)?"},
  {category:'fun', question:"Which emoji best describes you today?"},
  {category:'fun', question:"If you could be a teacher for a day, what subject would you teach?"},
  {category:'fun', question:"What’s your go-to hype song before a big day?"},
  {category:'fun', question:"Invent a school subject that you think should be required."},
  {category:'fun', question:"Design your dream school — what’s different about it?"},
  {category:'fun', question:"What’s a fictional character you relate to and why?"},
  {category:'fun', question:"If your personality were a color, what would it be?"},
  {category:'fun', question:"You’re writing a book about your life — what’s the first sentence?"},
  {category:'fun', question:"If you could create a new rule for the world, what would it be?"},
  {category:'fun', question:"What 3 objects would you put in a time capsule to represent you?"},
  {category:'fun', question:"You wake up with a random talent tomorrow — what is it?"},
  
  // Big Questions & Bold Answers (bold)
  {category:'bold', question:"What’s something you wish people understood better about you?"},
  {category:'bold', question:"What challenge in your life has made you stronger?"},
  {category:'bold', question:"Who has shaped your values the most, and how?"},
  {category:'bold', question:"When do you feel the most confident?"},
  {category:'bold', question:"If you could talk to your younger self, what would you say?"},
  {category:'bold', question:"What’s a dream you’re working toward — big or small?"},
  {category:'bold', question:"How do you respond when things don’t go your way?"},
  {category:'bold', question:"Would you rather be remembered or misunderstood?"},
  {category:'bold', question:"Can a mistake ever be the best thing that happens to you?"},
  {category:'bold', question:"What does “success” mean to you — not to others?"},
  {category:'bold', question:"What’s something that scares you, but you want to do anyway?"},
  {category:'bold', question:"Do you think we are shaped more by choices or circumstances?"},
  {category:'bold', question:"If everyone had to carry one visible word above their heads, what would yours be?"},
  
  // Learn & Work (learn)
  {category:'learn', question:"Do you prefer working alone, in pairs, or in groups — and why?"},
  {category:'learn', question:"What kind of classroom environment helps you focus best?"},
  {category:'learn', question:"How do you like to be helped when you’re stuck on something?"},
  {category:'learn', question:"What makes you feel supported by a teacher or classmate?"},
  {category:'learn', question:"What role do you often play in group work (e.g., leader, idea person, organizer, encourager)?"},
  {category:'learn', question:"Do you learn best by listening, doing, reading, or seeing?"},
  {category:'learn', question:"What does a “perfect school day” look like for you?"},
  {category:'learn', question:"If you could design a school for students like you, what would be different?"},
  {category:'learn', question:"What motivates you to keep trying when learning gets hard?"},
  {category:'learn', question:"How do you usually handle deadlines or pressure in school?"},
  
  // Friends & Vibe (friends)
  {category:'friends', question:"What qualities do you look for in a friend?"},
  {category:'friends', question:"How do you show someone that they’re important to you?"},
  {category:'friends', question:"What’s something a friend has done that made you feel really valued?"},
  {category:'friends', question:"Are you more of a listener or a talker in your friendships?"},
  {category:'friends', question:"Do you make friends easily, or do you take time to open up?"},
  {category:'friends', question:"What kind of friend are you in a group — the peacemaker, the funny one, the planner, etc.?"},
  {category:'friends', question:"What does loyalty mean to you in a friendship?"},
  {category:'friends', question:"Do you believe people can be very different and still be close friends? Why or why not?"},
  {category:'friends', question:"If your personality was a weather forecast, what would it be and why?"},
  {category:'friends', question:"When do you feel most like yourself?"},
  {category:'friends', question:"What’s something people often misunderstand about your personality?"},
  {category:'friends', question:"How do you recharge: alone time, being with friends, or doing something creative?"},
  {category:'friends', question:"Do you usually follow your head or your heart?"},
  {category:'friends', question:"If you had to describe yourself using only 3 adjectives, what would they be?"},
  {category:'friends', question:"What kind of energy do you bring into a room or group?"},
];

const categoryLabels = {
  fun: "🎨 Just for Fun & a Bit of Chaos",
  bold: "🧠 Big Questions, Bold Answers",
  learn: "📚 The Way I Learn & Work",
  friends: "💛 Me, My Friends, & My Vibe"
};

const cardCategoryElem = document.getElementById('card-category');
const cardQuestionElem = document.getElementById('card-question');
const categorySelect = document.getElementById('category-select');
const drawButton = document.getElementById('draw-button');
const shareButton = document.getElementById('share-button');

let currentCard = null;

function drawCard() {
  const selectedCategory = categorySelect.value;
  let filteredCards = cards;
  if (selectedCategory !== 'all') {
    filteredCards = cards.filter(c => c.category === selectedCategory);
  }
  if (filteredCards.length === 0) {
    cardCategoryElem.textContent = "No cards found";
    cardQuestionElem.textContent = "";
    shareButton.disabled = true;
    currentCard = null;
    return;
  }
  currentCard = filteredCards[Math.floor(Math.random() * filteredCards.length)];
  cardCategoryElem.textContent = categoryLabels[currentCard.category] || currentCard.category;
  cardQuestionElem.textContent = currentCard.question;
  shareButton.disabled = false;
}

async function shareCard() {
  if (!currentCard) return;

  const shareText = `${categoryLabels[currentCard.category]}\n\n"${currentCard.question}"`;

  // Use Web Share API if available
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Pick-a-Card Question",
        text: shareText,
      });
    } catch (err) {
      alert("Sharing cancelled or failed.");
    }
  } else {
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(shareText);
      alert("Question copied to clipboard! You can now paste it to share.");
    } catch (err) {
      alert("Sharing not supported and clipboard copy failed.");
    }
  }
}

drawButton.addEventListener('click', drawCard);
shareButton.addEventListener('click', shareCard);

categorySelect.addEventListener('change', () => {
  cardCategoryElem.textContent = "Select a category and click \"Draw Card\"";
  cardQuestionElem.textContent = "";
  shareButton.disabled = true;
  currentCard = null;
});