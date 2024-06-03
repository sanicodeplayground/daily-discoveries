![Daily Discoveries](https://i.ibb.co/gDMnr2Y/daily-discoveries.gif)

I built Daily Discoveries as a place to save and share interesting information about different topics such as tech, science, finance, etc. It allows users to add their own interesting facts and even vote on existing ones. The project uses React library for the front-end, Supabase as a database, and is deployed using Netlify.

Check it out: https://dailydiscoveries.netlify.app/

## Table of Contents

- [Project Goal](#project-goal)
- [Job Story](#job-story)
- [Project Scope](#project-scope)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [Challenges](#challenges)
- [Testing](#testing)
- [Credits](#credits)
- [Learning and Takeaway](#learning-and-takeaway)
- [Personal Reflections](#personal-reflections)
- [License](#license)

# Project Goal

While I have experience with React projects, working with databases is new to me. Supabase is a growing open source Firebase alternative, so I decided to give it a go and learn about their API. My goal was to create a product where users can add and edit information that persists across sessions.

# Job Story

When I discover an interesting fact or piece of information,

I want to have a simple and effective way to share it with others and see how they rate its interest and credibility,

So that I can contribute to a community of knowledge sharing and gain insights into various topics while seeing the community's response to my contributions.

# Project Scope

The project was developed within a structured schedule to meet a targeted deadline. Key features were prioritised, preventing feature creep. The features were divided using agile principles into "Now," "Then," and "Later" categories, commonly used in agile frameworks like Jira.

## Now

- Research to be made viewing similar projects (as this was my first time building a React application)
- Define the main features:
  - Fact submission: Develop a form for users to submit new facts, including fields for the fact, source link, and category selection.
  - Fact Display: Create a main section displaying a list of facts, sorted by the most recent, with voting options (thumbs-up, mind-blowing, false).
  - Voting System: Enable users to vote on facts, with votes updating in real-time and persisting across sessions.
  - Category Filtering: Allow users to filter facts by category using sidebar buttons.

## Then

- User Interaction Improvements:
  - Comments: Allow users to comment on facts
  - Notifications: Implement a notification system for users to get updates on their submissions and interactions.

## Later

- Additional Features
  - User Profiles: Develop user profile pages showcasing their submitted facts and voting activity.
  - Leaderboard: Implement a leaderboard to showcase top contributors and most popular facts.

# Design

![Daily Discoveries](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*nsK_fCKpgPKeBI5TpUMsHQ.png)

The design consiste of three sections: header/ sidebar/ main body.

- Header: it contains the logo and a call to action button to post a new discovery
- Sidebar: with category buttons that the person can use to filter them
- Main: a list of facts sorted by most recent. Each fact has a title, a source and three voting options for the user to select from: thumbs-up, mind-blowing, false fact.
- I created each React component based on this structure.

# Technologies Used

## React

- I used React for the front end with the use of React Hooks for state management and lifecycle. While the project would be doable with vanilla JavaScript, React makes it so much easier with its useState hooks. I used useState hook to handle new fact form opening/closing, adding new facts, toggling fact categories, as well as for keeping a count for user votes facts.
- In order to use same state in several component, I passed it down with props. For example, showForm, setShowForm I used in Header and NewFactForm components.

## CSS3

- Was used to style my entire project.
- The main was structured using grid and each fact item was desiged using flexbox.

## JavaScript ES6

Was used to create the functionality of the app, however, it became obvious that I needed something more robuts to build the voting sytem and the fact creation. That's why I decided to move to React.

## Supabase

- Used to store the facts in a database. This also allow me to edit, add or delete facts there.

## Git

- Used for implementation and version control.

## GitHub

- Used for the storing of the repositiory.

## Netlify

- Used for hosting the final version.

## Visual Studio Code

- The IDE used for the development of the entire project.

# Challenges
- Using state component: useState is a built-in Hook provided by React. You can find other built-in Hooks in the <a href="https://react.dev/reference/react">API reference</a>. Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). That’s why you see it inside the App function:
- ![state component](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*RO3CWbDgJBv8nqKqts0o3g.png)
- Working with conditional rendering. It's just like in JS but with JSX:
- ![conditional rendering](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5WkAtuNjRTXqYW8WDtmT2g.png)
- I rely on JavaScript features like the array map() function to render lists of components. For example, to render the array of categories:
- ![JavaScript](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Bw6LDiZsoQWQKsl6RdJ1cA.png)
- Creating my the table. This was my first time working with databse. Supabase official documentation helped a lot.
- ![Supabase](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Bw6LDiZsoQWQKsl6RdJ1cA.png)


# Testing

## Responsive

I used <a href="http://ami.responsivedesign.is/">Am I Responsive</a> to ensure that my app worked on multiple devices.

As well as chrome developer tools, I tested for:

- Samsung Galaxy - Responsive
- Pixel 2 - Responsive
- Pixel 2 XL - Responsive
- iPhone 5s/Se/6/7/8/X - Responsive
- iPad 9.7" - Responsive
- iPad Pro - Responsive
- Surface Duo - Responsive
- Galaxy Fold - Responsive

## Page optimisation

![Optimization](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*TTULehbsmerCbUYV3xh9Zg.png)

# Credits

- React team for a great documentation.

- Supabase for choosing open source and for having a fantastic documenta.tion.
- Netlify, my free space where I host the project.

- Jonas for his JS course.

# Learning and Takeaway

- React Hooks: Utilising hooks like useState and useEffect for state management and side effects significantly simplified the code structure.
- Supabase Integration: Gained experience in integrating and querying data from Supabase, highlighting the benefits of using a managed database service.
- Netlify Deployment: Learned the process of deploying a React application using Netlify, benefiting from its continuous deployment and easy integration features.

# Personal Reflections

Upon starting this project, I felt a little lost and didn't quite know where to begin. I was worried as although I now had an understanding of the core concepts of Javascript as an imperative programming language, putting them into practice seemed monumentous and a little daunting, especially as css and html came so easily to me. Through research and a lot of hard work its safe to say that I feel as though I am beginning to overcome my initial fear of messing up and trusting in myself as a developer, that given a little time I can always rely on myself to come up with the answer. I now love JavaScript and relish the challenge of fixing my mistakes and trying out new code, I am incredibly eager so as to keep my foot on the gas an develop further javascript projects.


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

# License

[MIT](https://choosealicense.com/licenses/mit/)

[⬆ Back to Top](#table-of-contents)
