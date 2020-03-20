# EXPENSE MANAGER

Contributors:
-Cristi Neames
-Sravanthi Dasari
-William Winston

---

Hi Everyone! 

This is the README for Expense Manager, our expense tracking and tabulation app.

This project was built as a full MERN Stack CRUD app and features a purpose-built backend server, a React-driven frontend, and a data visualization component.

## Usage

The app is designed to be intuitive and highly-user for users of any level of tech-saavy. Users simply input their information in the five listed categories: `date`, `item`, `category`, `description`, and `cost` to create a table entry. When these entries are listed together on our index page, users are able to see trends in their spending over a given time period - including the grand total of their expenditures: a pattern which is further underlined by our...

## Data Visualization

This app also employs a dynamic data visualization in the form of the chart that pinpoints all expenditures on a user's list. We built our code for the chart based on data visualization models from chart.js, which was an amazing resource.

## Deeper Features, Design Elements, and User Story

We wanted the app to be defined by its utility to the everyday user - a big part of that utility was in the small details for building a user list. We wanted to make sure that any entry to the list would be a useful entry. As such our big overarching user story was:

>As a user, I need an app that helps me tie what I spent money on to when I spent it and how much I paid for it.

To make sure that that challenge was met, we set alerts within our new entries code to alert our users if they left the date, item, or cost fields blank. We also built a totalling function to help users get a sense of how much of their monthly budget they were actually spending on all of the list items.

We also wanted to ensure that the list was editable - details of expenditures can change or need deletion to be replaced. As such, we tied our edit and delete functions to styled buttons on both the individual Show page for entries, as well as on the main index list.

## Issues, Unsolved Problems, and Visions of the App's Future

There are elements that we can definitely add to improve the app, such as authorizations for users, export utility to budgeting apps for the user lists, and further styling and performance tweaks; however, as it stands, this version of the app is very functional and we're happy with this result. 

This project began with a *lot* of difficulties connecting our app to Heroku. Once we were able to solve that problem, we had others - particularly in building some of the frontend components in a way that would achieve what we wanted them to achieve. However, with a couple of long days, and lots of research and reaching out for help, we were able to achieve the results we wanted. In the near future, we would love to see this app used as a simple, powerful tool for the everyday user to keep track of their spending and make the best decisions for their own financial path.

## Deployment

This project is deployed publicly at:

https://expense-manager-one.herokuapp.com/

---

Thank you and ENJOY!!!
