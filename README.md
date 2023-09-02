<h1 align="center">Rafik: Enhancing Pilgrimage Experiences</h1>

<h4 align="center"><a href="https://arwah.me/p/bcQQME3M-rafik">View Full Portfolio Details</a></h4>

<h2 align="center">Prototype Overview</h2>

Rafik is a front-end web application aimed at enhancing the spiritual journey of Muslims on pilgrimage to Mecca. Leveraging the Quran.com API for spiritual sustenance and employing local storage for recording personal experiences, Rafik is a project conceived during a 24-hour hackathon at BrainStation's software engineering bootcamp, inspired by my own pilgrimage to Mecca in late 2022.

<h2 align="center">Requirements</h2>

The challenge involved developing a front-end web application utilizing data from an API. The task was made more challenging due to the creative freedom we were granted, coming off weeks of replicating projects with strict style guidelines.

<h2 align="center">The Concept</h2>

My personal experience in Mecca provided valuable insights into the preparedness of pilgrims for such a spiritual journey. I designed Rafik to address these issues in three distinct ways:

1. By randomly generating chapters from the Qur'an via the Quran.com API, Rafik assists pilgrims who have limited familiarity with the text, encouraging confidence and keeping the experience dynamic.
2. Using meditative visuals integrated into Rafik's interface, the application helps pilgrims navigate the sensory overload associated with mass gatherings in Mecca, fostering a more profound and focused spiritual experience.
3. Rafik's journaling feature, built with localStorage capabilities, allows users to record and reflect on their feelings and thoughts, providing a personal archive that can persist over time.

<h2 align="center">Achievements</h2>

I cherished the creative liberty this project presented and the chance to apply my nascent programming skills. By pushing the boundaries of my current knowledge to include features like video file embedding and localStorage implementation, I was able to create a well-received UX design under a challenging timeline. This project has served as a significant motivation for me to further enhance my technical skills.

<h2 align="center">Challenges</h2>

The main challenge I faced during the development of Rafik v.1 was working with an unfamiliar API. I initially planned to implement the math.random function to randomly display various chapters from the Quran. However, the API was structured in a way that only permitted access to a single chapter at a time. This required a significant shift in approach, necessitating multiple API calls to access various chapters, a solution I only realized close to the project deadline.

Furthermore, another issue that arose was with displaying the Arabic script from the Quran.com API. Despite integrating a Google font that supports Arabic characters into my application, the API's documentation was unclear on how to successfully access the Arabic text, resulting in some difficulty in this area.

<br>
<br>

<h2 align="center">How to View Rafik</h2>

To view and interact with Rafik, follow these steps:

1. **Download:** First, download the ZIP file associated with this project.
2. **Extract:** Once downloaded, extract the contents of the ZIP file to your preferred location on your machine.
3. **Open:** Open the extracted project folder in a code editor such as Visual Studio Code or a similar editor of your choice.
4. **Go Live:** Use the "Go Live" function (or similar depending on your code editor) to start a local server and view the application in your browser.
5. **Watch SASS:** This project uses SASS fpr its styling. In VSCode, download the SASS compiler extension, then click 'Watch Sass' from the VSCode status bar to turn on the SASS compiler.

Please note, you will need to have an up-to-date web browser (such as Google Chrome), and a text editor (like Visual Studio Code) installed on your computer.

<br clear="left" /> 

<h2 align="center">Future Development</h2>

I aim to build on Rafik's initial version, possibly using multiple Axios calls to access chapters or exploring alternative Quran APIs for bilingual support. Plans include refactoring Rafik using React.js or React Native, integrating user authentication and authorization, and incorporating a database to ensure the permanence of user entries. I am also keen to deploy Rafik, enabling practical testing and evaluating its potential impact.
