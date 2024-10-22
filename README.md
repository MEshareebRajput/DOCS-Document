# DOCS-Document 🚀📄

This project features a **React.js** component with smooth animations powered by **Framer Motion** and responsive styling using **Tailwind CSS**. The component displays a dynamic background with centered text, combining modern UI practices and sleek animations to enhance user interaction.

## Overview 🌍

In this project, you’ll find:
- **Framer Motion** animations for smooth transitions and effects ✨.
- **Tailwind CSS** for styling and responsive design 🎨.
- A **fixed background component** that keeps the text centered and static while allowing other elements to scroll or animate over it.

## Features ✨

- **Framer Motion Integration**: Adds smooth, animated transitions to the text and background elements, creating a visually appealing experience 💫.
- **Fixed Positioning**: The background stays in place while the rest of the content moves 📌.
- **Responsive Design**: Tailwind CSS ensures that the component adapts to any screen size for mobile or desktop viewing 📱💻.
- **Customizable Text**: Easily modify the text and animations to suit your needs ⚙️.

## Code Snippet 💻

```jsx
import React from "react";
import { motion } from "framer-motion";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <motion.div
          className="absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-900 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Muhammad Eshareeb Rajput
        </motion.div>

        <motion.h1
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold text-zinc-900 leading-none tracking-tighter"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          DOSC.
        </motion.h1>
      </div>
    </>
  );
}

export default Background;
```

### Explanation:

- **Framer Motion** is used to add animations to the text elements. The `motion.div` and `motion.h1` elements fade in and scale up to create smooth transitions.
- **Tailwind CSS** manages the overall layout, ensuring responsiveness and a clean UI.
- The text "Muhammad Eshareeb Rajput" fades in, while "DOSC." scales from zero to full size.

## Quick Start 🚀

To run this project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MEshareebRajput/DOCS-Document.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd DOCS-Document
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:3000` to see the animated background component in action.

## Technologies Used ⚙️

- **React.js** – The core framework for building the user interface ⚛️.
- **Framer Motion** – For smooth, declarative animations 🎥.
- **Tailwind CSS** – For responsive styling and layout 🎨.
- **JavaScript (ES6+)** – To handle the logic and component structure 🔄.

## Contact Me 📬

Feel free to reach out for collaboration, feedback, or questions!

- **Email**: [muhammadeshareeb986@gmail.com](mailto:muhammadeshareeb986@gmail.com) 📧
- **LinkedIn**: [Muhammad Eshareeb Rajput](https://www.linkedin.com/in/muhammadeshareeb986/) 🔗
