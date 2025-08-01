# Lubdhie_stack_UCInterview
repository for frontend tasks


#  Guess The Number Game (React + Tailwind CSS)

A fun number guessing game built with React and Tailwind CSS.
The computer picks a random number between 1 and 100, and the user gets 7 attempts to guess the correct number.
---
##  Features

*  Random number generation using JavaScript `Math.random()`
*  7 lives system
*  Feedback after each guess (**Too High**, **Too Low**, **Correct**)
*  Displays previous guesses
*  Restart game functionality
*  Responsive and styled using Tailwind CSS
---
## 🛠 Tech Stack

* React (UI)
* Tailwind CSS (Styling)
---
## 🚀 Installation & Setup
Follow these steps to run the project on your local machine:

 1. Clone the Repository

```bash
git clone <your-repo-url>
cd guess-number-game
```
 2. Install Dependencies

```bash
npm install
```
3. Setup Tailwind CSS

Run the following:

```bash
npx tailwindcss init -p
```

Update **tailwind.config.js**:

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
In **src/index.css**, add:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
 4. Start the Project
```bash
npm start
```
---
##  How to Play

1. Enter a number between **1 and 100**.
2. You have **7 attempts** to guess the number.
3. Feedback will show if your guess is **Too High** or **Too Low**.
4. Click **Restart** to play again.

---

## 📂 Project Structure

```
├── src
│   ├── App.js        # Main game logic
│   ├── index.js      # React entry point
│   ├── index.css     # Tailwind CSS import
│   └── ...
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

##  UI Example

<img width="697" height="518" alt="image" src="https://github.com/user-attachments/assets/16c63ba5-eeef-4540-96a2-b5a5ae216353" />

---

## 🔮 Future Improvements

* Add difficulty levels (Easy, Medium, Hard)
* Add animations with Framer Motion
* Add sound effects

---

## 🖊 License
This project is open-source. Feel free to modify and share!
---

