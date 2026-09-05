# Learning JavaScript

A structured repository for learning JavaScript fundamentals through organized modules and practical examples.

## Overview

This project contains JavaScript learning materials organized by topic, progressing from basic concepts to more advanced examples. Each module includes an HTML file, JavaScript code, and styling.

## Project Structure

```
learning-js/
├── Introductions/          # Basic JavaScript fundamentals
│   ├── index.html         # HTML template with placeholders
│   ├── index.js           # Console logging, alerts, and DOM manipulation
│   └── style.css          # Styling
│
├── Practice/              # Hands-on practice exercises
│   └── Jerry Portfolio/   # Personal portfolio page exercise
│       ├── index.html     # Portfolio HTML structure
│       ├── index.js       # Variable declarations and DOM manipulation
│       └── style.css      # Portfolio styling
│
├── Strings & Variables/   # String and variable concepts
│   ├── index.html         # HTML page with script integration
│   ├── index.js           # Variables, strings, and boolean examples
│   └── style.css          # Styling
│
├── README.md              # This file
├── CHANGELOG.md           # Version history and changes
└── LICENSE                # MIT license
```

## Modules

### 📚 Introductions

**Location:** `Introductions/`

Learn the basics of JavaScript including:

- **Console Logging** - Output text to the browser console
- **Window Alerts** - Display popup messages to users
- **DOM Manipulation** - Select and modify HTML elements dynamically

**Example Code:**

```javascript
console.log("Hello, World!");
window.alert("How are you");
document.getElementById("myH1").textContent = "Hello, World";
```

### 📝 Strings & Variables

**Location:** `Strings & Variables/`

Explore variables and string handling:

- **Variable Declaration** - Using `let` to declare variables
- **String Templates** - Using template literals with `${}`
- **Data Types** - Strings, numbers, and booleans
- **Type Checking** - Using `typeof` operator

**Example Code:**

```javascript
let name = "Jerry";
let age = 25;
let online = true;

console.log(typeof firstName);
window.alert(`Hello, ${firstName}!`);
```

### 🛠️ Practice

**Location:** `Practice/Jerry Portfolio/`

Apply learned concepts by building a simple personal portfolio page:

- **Variable Declarations** - Using `let` to store personal data (`name`, `age`, `email`, `favfood`)
- **DOM Manipulation** - Dynamically populating portfolio fields using `getElementById` and `textContent`
- **Combining Concepts** - Bringing together variables and DOM updates in a real-world context

**Example Code:**

```javascript
let name = "Jerry";
let age = 25;
let email = "jerry@example.com";
let favfood = "Pizza";

document.getElementById("name").textContent = name;
document.getElementById("age").textContent = age;
```

## Getting Started

1. **Navigate to a module folder:**

   ```bash
   cd Introductions
   ```

2. **Open the HTML file in a browser:**
   - Right-click on `index.html` and select "Open with Live Server"
   - Or double-click to open directly in your default browser

3. **View console output:**
   - Press `F12` or `Ctrl+Shift+I` to open Developer Tools
   - Check the Console tab for `console.log()` output

## Learning Path

1. Start with **Introductions** to understand basic JavaScript concepts
2. Move to **Strings & Variables** to practice variable declaration and string manipulation
3. Try the **Practice** module to apply what you've learned by building a personal portfolio page
4. Expand with additional modules as you progress (coming soon)

## Technologies Used

- **JavaScript (ES6+)** - Modern JavaScript with template literals
- **HTML5** - Semantic HTML structure
- **CSS** - Styling and layout

## Browser Compatibility

All modules are compatible with modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements

Potential modules to be added:

- Arrays and Objects
- Functions and Scope
- Control Flow (if/else, loops)
- Events and Interactivity
- DOM Manipulation Advanced
- ES6 Features

## Author

Created as a JavaScript learning journey.

---

