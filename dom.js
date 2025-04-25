// 🧪 Programming Exercises (Mini Projects)
// 1. Fruit List Creator
// Start with a blank <ul> on the page

// Ask the user via prompt() for a fruit name

// Add it to the <ul> as a new <li>

// 2. Grade Checker (DOM version)
// Ask for a student’s name with prompt()

// Search in a grades object

// Display grade inside a <div> using textContent

// 3. Simple Profile Card Generator
// Create a form (or prompt) to enter name, age

// Show it in a card using DOM methods (div, h2, p)

// Practice using createElement, appendChild, innerText

// 4. Remove Last Item
// Start with a list of items in HTML

// Use a button (<button id="removeBtn">Remove Last Item</button>)

// In JavaScript: Remove last <li> from the list using .lastChild.remove()

// 5. Change Heading Color
// Create multiple headings <h1> <h2> in HTML

// Change color or font size using JavaScript

// 🧬 Live vs Not Live Collections
// ✅ Live Collection
// (Like a live CCTV feed — always showing what's happening right now)

// Methods:
// getElementsByClassName()
// getElementsByTagName()

// If you change the DOM after the collection is created, the collection automatically updates.

// ❌ Not Live Collection
// (Like a screenshot — it shows what was there at the moment it was taken)

// Method:
// querySelectorAll()

// If you add/remove elements later, the collection does NOT update.

// 🔍 Example:
// HTML:
// html
// Copy
// Edit
// <ul id="list">
//   <li class="item">A</li>
//   <li class="item">B</li>
// </ul>
// JavaScript:
// javascript
// Copy
// Edit
// let liveItems = document.getElementsByClassName("item"); // live
// let staticItems = document.querySelectorAll(".item");   // NOT live

// // Add a new item after fetching both lists
// let newItem = document.createElement("li");
// newItem.className = "item";
// newItem.textContent = "C";
// document.getElementById("list").appendChild(newItem);

// console.log(liveItems.length);   // ✅ will show 3
// console.log(staticItems.length); // ❌ will still show 2

// 📌 1️⃣ insertAdjacentHTML()
// Purpose: Inserts an HTML string into the DOM at a specified position relative to an element.

// Syntax:

// javascript
// Copy
// Edit
// element.insertAdjacentHTML(position, html)
// Positions:

// "beforebegin" — before the element itself

// "afterbegin" — inside the element, before its first child

// "beforeend" — inside the element, after its last child

// "afterend" — after the element itself

// Example:

// html
// Copy
// Edit
// <div id="container">Hello</div>
// javascript
// Copy
// Edit
// let container = document.getElementById("container");
// container.insertAdjacentHTML("beforeend", "<p>I'm inside!</p>");
// 📌 2️⃣ prepend() & append()
// Purpose:

// prepend() → adds a node at the start

// append() → adds a node at the end

// Example:

// javascript
// Copy
// Edit
// let list = document.getElementById("myList");

// let item1 = document.createElement("li");
// item1.textContent = "First Item";
// list.prepend(item1);

// let item2 = document.createElement("li");
// item2.textContent = "Last Item";
// list.append(item2);
// 📌 3️⃣ before() & after()
// Purpose:

// before() → inserts a node before the target

// after() → inserts a node after the target

// Example:

// javascript
// Copy
// Edit
// let heading = document.querySelector("h1");

// let note = document.createElement("p");
// note.textContent = "This is a note.";

// heading.before(note);  // adds before the h1
// 📌 4️⃣ Removing Elements
// Method:

// element.remove() — removes the element itself

// Or remove via parent.removeChild(child)

// Example:

// javascript
// Copy
// Edit
// let para = document.querySelector("p");
// para.remove();
// 📌 5️⃣ Adding a String of HTML like <li>
// If you have:

// javascript
// Copy
// Edit
// let htmlString = "<li>New Item</li>";
// 👉 You can:

// a) Use insertAdjacentHTML()
// javascript
// Copy
// Edit
// let ul = document.getElementById("myList");
// ul.insertAdjacentHTML("beforeend", htmlString);
// b) Or Create Element + innerHTML
// javascript
// Copy
// Edit
// let newItem = document.createElement("li");
// newItem.innerHTML = "New Item";
// ul.append(newItem);
// 📚 Exercises for Students
// ✏️ 1. Add 3 Items to a List
// Create a <ul id="fruits"></ul> and add 3 <li> items using:

// insertAdjacentHTML()

// append()

// prepend()

// ✏️ 2. Remove an Element
// Select the first <li> from a list and remove it.

// ✏️ 3. Add a Note Before a Heading
// Select an <h2> and add a <p> before it saying "This is a note."

// ✏️ 4. Add Multiple List Items From an Array
// Given:

// javascript
// Copy
// Edit
// let items = ["Pen", "Book", "Laptop"];
// Loop through the array and add each item to a <ul> using append()

// ✏️ 5. Create and Insert an Alert Message
// When the page loads, add a div with text Welcome! at the top of body using insertAdjacentHTML() with "afterbegin"

// Append()
// let container = document.getElementById("container");

// // Create a new paragraph element
// let para = document.createElement("p");
// para.textContent = "I'm a paragraph.";

// // Use append() to add multiple things at once
// container.append("Hello ", "World! ", para);

// // Add even more content later
// container.append(" Another text node.");

// 🧪 Programming Exercises (Mini Projects)
// 1. Fruit List Creator
// Start with a blank <ul> on the page

// Ask the user via prompt() for a fruit name

// Add it to the <ul> as a new <li>

// 2. Grade Checker (DOM version)
// Ask for a student’s name with prompt()

// Search in a grades object

// Display grade inside a <div> using textContent

// 3. Simple Profile Card Generator
// Create a form (or prompt) to enter name, age

// Show it in a card using DOM methods (div, h2, p)

// Practice using createElement, appendChild, innerText

// 4. Remove Last Item
// Start with a list of items in HTML

// Use a button (<button id="removeBtn">Remove Last Item</button>)

// In JavaScript: Remove last <li> from the list using .lastChild.remove()

// 5. Change Heading Color
// Create multiple headings <h1> <h2> in HTML

// Change color or font size using JavaScript

// An event is something that happens in the browser — like a user clicking a button, hovering over text, submitting a form, pressing a key, etc.

// 📌 Adding Event Listeners
// Syntax:

// javascript
// Copy
// Edit
// element.addEventListener(event, function);
// 📌 📖 Code Examples
// 🔹 1️⃣ Click Event Example
// HTML

// html
// Copy
// Edit
// <button id="clickMe">Click Me!</button>
// JavaScript

// javascript
// Copy
// Edit
// let btn = document.getElementById("clickMe");

// btn.addEventListener("click", function() {
//   alert("Button was clicked!");
// });
// 🔹 2️⃣ Mouseover / Mouseout Event Example
// javascript
// Copy
// Edit
// btn.addEventListener("mouseover", function() {
//   btn.style.backgroundColor = "orange";
// });

// btn.addEventListener("mouseout", function() {
//   btn.style.backgroundColor = "";
// });
// 🔹 3️⃣ Input Field Event (keydown)
// HTML

// html
// Copy
// Edit
// <input type="text" id="nameInput" placeholder="Type your name">
// JavaScript

// javascript
// Copy
// Edit
// let input = document.getElementById("nameInput");

// input.addEventListener("keydown", function(event) {
//   console.log("Key pressed: " + event.key);
// });
// 🔹 4️⃣ Event Listener on Multiple Buttons (with forEach)
// HTML

// html
// Copy
// Edit
// <button class="myBtn">A</button>
// <button class="myBtn">B</button>
// <button class="myBtn">C</button>
// JavaScript

// javascript
// Copy
// Edit
// let buttons = document.querySelectorAll(".myBtn");

// buttons.forEach(function(btn) {
//   btn.addEventListener("click", function() {
//     alert("You clicked " + btn.textContent);
//   });
// });

/**
 * ✏️ 1. Create a Click Counter
Make a button and a paragraph. Each time the button is clicked, increase a number in the paragraph.

✏️ 2. Color Changer
Add two buttons: Red and Green.
When you click Red, change the background color to red.
When you click Green, change it to green.

✏️ 3. Input Length Checker
When a user types in an input field, show the number of characters typed in a paragraph below.

✏️ 4. Show/Hide Text
Add a button. When clicked, it toggles (show/hide) a piece of text.

✏️ 5. Multiple Buttons Alert
Create 3 buttons with different labels. Attach event listeners so that clicking each button alerts its own label text.

✏️ 6. Change Text on Mouseover
When you hover on a heading, change its text to "You're hovering!" and back to original on mouseout.
 */

/**
 * Event Object Teach them that inside event listeners, you can access the event object:

btn.addEventListener("click", function(event) {
  console.log(event.target); // which element was clicked
});
 */
