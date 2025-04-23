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
