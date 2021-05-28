# Tanzu MC | UI Challenge
### Created for the Tanzu Mission Control UI Team


This single page application is built in React with create-react-app and completed within the 3-hour suggested time limitation.

I would have gladly spent more time ironing out bugs, expanding features, and improving design, but wanted to provide a fair representation of what I could confidently accomplish in the suggested window. 

We will have plenty to talk about in our live review!

***

## Installation
The live app can be viewed here: [Tanzu MC | UI Challenge](https://goldmintz.github.io/tanzu-ui-challenge/).

To run the code locally:
- Clone this repo
- Load dependencies
- Launch dev server with **npm start** or **yarn start**
- Enjoy on _localhost:3000_

## Approach
I chose to keep the code fairly simple and not include any open-source libraries (besides create-react-app for scaffolding). I figured I would rather end up with shortcomings due to my own limitations than spend the time reading documentation.

After reading through the prompt, I broke the chunks of requirements into features, which overlap almost entirely with the components created.

## Features | Components
- **Table:** Presents fetched data in an organized, formatted fashion. Users can search and sort across a limited set of fields
- **Pagination:** Set to a default of 10 records per page. Pagination also includes a count of returned search/filter records
- **Create New Cluster:** Form with a mix of controlled field types to add a new record to cluster roster
- **Data Persistence:** Local storage leveraged to manage cluster data and updates

## Limitations
While the prompt was fairly straightforward, I struggled with two sizeable limitations: **time** and **testing**. 

### **_Time_**
As noted above, I wanted to spend only the recommended amount of time on the project to accurately display my current coding abilities.
Unfamiliarity (time spent) with the intended data set also created some limitations on both the display of data points and the input fields to create a new cluster. Since the dummy data doesn’t entirely mimic real data and its uses, I made some guesses.

### **_Testing_**
I am woefully unskilled in testing and, while I understand the importance of TDD, do not know enough about it to add anything to this app that would be meaningful. I look forward to discussing how testing is managed on the team and how I could improve this app by including the appropriate tests.

## Wishlist | Woulda, Coulda, Shoulda...
Below are just some of the improvements I would make with more time and product knowledge: 
- Cleaner code with Redux for global state management, actions, and reducers instead of passing down props
- Expanded search and filter options
- More complex form input fields (like multi-select)
- Responsive or made cross-browser compatible
- Usability (toggles, contrast) and a more concise style guide (better utility classes) 


## ✨ Thank You ✨
Tanzu UI team, thank you for the opportunity to take on this challenge! I look forward to learning more about your collective problem-solving and ways to improve my code.
