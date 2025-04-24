// 🔹 What is Throttling in JavaScript?
// Throttling is a technique used to limit the number of times a function is executed over time. It ensures a function is called at most once in a specified time interval, even if the event that triggers it occurs many times.

// ✅ Why Use Throttling?
// In real-world scenarios like:
// Scroll
// Resize
// Mousemove
// Keypress (sometimes)
// Window events

// These events fire repeatedly and rapidly, potentially thousands of times per second. Running logic on every event fire can hurt performance, especially on lower-end devices.
// Throttling helps to optimize performance by limiting the execution of costly operations (like DOM manipulation or API calls).

// 🔸 Real-World DOM Throttling Example
// Let’s say you’re building a website that displays the scroll position as the user scrolls down.

// Problem:
// Updating the DOM on every scroll event can be very expensive.

// Solution:
// Throttle the event handler.
// 🧪 Example: Scroll Event Throttling

// Throttle function
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
  
    return function (...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  
  // Scroll handler
  function handleScroll() {
    const scrollPosition = window.scrollY;
    document.getElementById('output').textContent = `Scroll Position: ${scrollPosition}`;
    console.log('Scroll fired at:', new Date().toLocaleTimeString());
  }
  
  // Add throttled scroll event
  window.addEventListener('scroll', throttle(handleScroll, 200));
  


// Explanation:
// handleScroll is the function we want to throttle.
// throttle takes handleScroll and a time interval (200ms) and ensures handleScroll runs at most once every 200ms.
// Without throttling, handleScroll could run hundreds of times per second.



