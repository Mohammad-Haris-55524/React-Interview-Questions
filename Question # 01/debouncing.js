// 💡 What is Debouncing?
// Debouncing is a technique used to limit how often a function is executed. It's especially useful when dealing with events that can fire rapidly (like scroll, resize, or input), and you only want to respond once per a given delay.

// ✅ Real-life Analogy
// Imagine you are in a room and someone keeps flipping the light switch rapidly. You only want to act after they've stopped for a bit. Debouncing waits for a pause before taking action.

// 🧪 Counter Example: Without and With Debounce

// ❌ JavaScript Without Debounce:
let count = 0;
const btn = document.getElementById("incrementBtn");
const counterDisplay = document.getElementById("counter");

btn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
// If you click really fast, the counter goes up with every click — no filtering.


// ✅ JavaScript With Debounce:
// Now let’s debounce the click, so it only registers once every 1 second, no matter how many times you click.
let count = 0;
const btn = document.getElementById("incrementBtn");
const counterDisplay = document.getElementById("counter");

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Handler
function incrementCounter() {
  count++;
  counterDisplay.textContent = count;
}

// Use debounced version of the handler
btn.addEventListener("click", debounce(incrementCounter, 1000));
// 🟢 Now if you click rapidly, only the last click after 1 second of inactivity increases the counter.

// 📌 Where It's Useful
// Search boxes (to avoid sending API calls on every keystroke)
// Resizing windows
// Auto-saving drafts
// Button spam protection

