

# React Quiz App  
[LIVE LINK](https://anshulRathoree.github.io/Testline-Quiz)
[LIVE to Screenshots and Videos](https://www.dropbox.com/scl/fi/9wu7fzmhuo8zwksc3nr3f/Screenshots-and-Visual-Representation.zip?rlkey=t4aljnjg3qtprjw7gn2ztkoam&e=1&st=r041x44p&dl=0)

This is a dynamic and interactive quiz application built using React.js. The app provides an engaging way to test your knowledge with timed questions, score tracking, and a beautiful confetti animation for celebrating your achievements.  

## Features  

- **Dynamic Quiz Loading**: The app fetches quiz data dynamically from an external JSON file.  
- **Timer Functionality**: Each question has a 30-second timer. If the timer runs out, the app automatically moves to the next question.  
- **Real-Time Feedback**: Correct and incorrect answers are handled in real-time, with score updates.  
- **Responsive Design**: The app adjusts to different screen sizes for a seamless experience.  
- **Confetti Celebration**: Enjoy a confetti animation after completing the quiz.  
- **Error Handling**: Handles loading errors gracefully with a user-friendly message.  

## Technologies Used  

- **React.js**: For building the user interface and managing state.  
- **React Icons**: For attractive and consistent icons (`FiAlertCircle`).  
- **Confetti**: A confetti library for celebratory animations.  
- **CSS**: For styling the components.  

## Components  

1. **Navbar**: Displays the app's navigation bar.  
2. **StartScreen**: The welcome screen with a button to start the quiz.  
3. **QuizScreen**: The main screen where questions are displayed, along with answer options and a countdown timer.  
4. **ResultScreen**: Displays the final score and offers an option to restart the quiz.  
5. **Loader**: A loading spinner for better UX during data fetch.  

## How to Run the Project  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/AnshulRathoree/Testline-Quiz  
   cd react-quiz-app  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the development server:  
   ```bash  
   npm start  
   ```  

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.  

## Project Workflow  

1. The app fetches quiz data from a JSON file located in the `public` folder.  
2. The `App` component initializes states for quiz data, timer, score, selected options, and more.  
3. Each question displays a timer of 30 seconds, managed using the `useEffect` hook.  
4. Correct answers update the score, and incorrect answers move to the next question after a brief delay.  
5. When the quiz is complete, the `ResultScreen` component displays the final score with a confetti celebration.  

## Folder Structure  

```  
src/  
├── components/
    ├── /styles
        ├── Navbar.css  
│       ├── StartScreen.css
│       ├── QuizScreen.css 
│       ├── ResultScreen.css  
│       └── Loader.css
│   ├── Navbar.js  
│   ├── StartScreen.js  
│   ├── QuizScreen.js  
│   ├── ResultScreen.js  
│   └── Loader.js  
├── App.css  
├── App.js  
└── index.js  
```  

## Future Improvements  

- Add more customization options, such as difficulty levels or quiz categories.  
- Integrate with a backend API for dynamic quiz generation.  
- Implement a leaderboard to display user scores globally.  
- Add support for multimedia questions (e.g., images, videos, or audio).  

## Contributing  

Feel free to fork the repository and submit pull requests. Contributions are always welcome!  

## License  

This project is licensed under the MIT License.  

---  

### Credits  

- [React.js](https://reactjs.org/)  
- [React Icons](https://react-icons.github.io/react-icons/)  
- [Confetti Library](https://www.npmjs.com/package/react-confetti)  

Enjoy the app, and happy quizzing! 🚀  
