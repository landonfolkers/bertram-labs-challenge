# bertram-labs-coffee-challenge

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

# Overview

I designed this challenged using vue. I have always enjoyed this framework. I viewed and completed this challenge as if i was a member of this office and i was also part of the coffee orders. I gave myself a 3 hour limit on this challenge for a few reasons. If i dont give myself a limit i could go on for days of making improvments to this codebase and adding things that may or may not be necessary. I also determined that would be the appropriate amount of time for an internal, non company based project in a professional setting. The app needs to function properly and probably does not need to be too fancy. It simply needs to select a person to pay for the coffee order fairly. 

# Run the Project
First run

```sh
npm install
```

then 

```sh
npm run dev
```

# Project Description

The most fair way to build this project is to simply make it a random choice. So I created a random choice algorithm to take in all the drink orders and then choose a random person in the order to pay for it. I also saved the person to an array in the localhost (again nothing fancy) so that way, the next order that comes through they will not be selected as having already paid for this order cycle. Once everyone from the 7 people have paid for their orders, then the cycle starts again and everyone is able to be chosen to pay. 

# Why Vue

I wrote this in vue (javascript and typescript) to have a clean looking interface, simplistic design, and also i determined it would be the best use of my time given the time constraint i had given myself. I considered writing a node app, a ruby app, and a python app as well but decided to use a frontend framework as for ease of use. Maybe not all of the coffee orderers were programmers and had to be the one to hit the select button that day and didnt know the console commands. Vue is also lighweight and speedy. Also the ability to quickly add or remove people from the order if neccessary. 

# Problems and Caveats

This app is relying on the assumption that everyones order will be the same everytime. (it appears per the instructions that that is the case). However in reality it is not good to go about this assumption. But for the challenege that is why it is a simply a radomizer that is picking who is paying because all the orders will always be the same price. I did add the ability to change the order prices if need be. That is also why i added a transaction history page for each cycle of payments. It allows you to see who has paid for the cycle and how much the order was, just in case someone paid for a more expensive order than the others, this can be rectified. Due to my time limit i was unable to add the orders to the localhost storage so if an order is added or removed it is not saved for next time. I based that off of the prompt and how this appears to be only for the 7 members mentioned in the document, but that would be good to be fixed given the time. Also due to saving the data in localhost it obviously is not permanent. I consider this solution to be an MVP. A api would be great for saving data and making it much less likely the data would be lost accidently. 

# What to improve

I would love to add an actually api for this project. It would be something lightweight, quite possibly serverless architecture with a few simple routes for saving the orders and order history. maybe a postgreSQL db or dynamo (depending on the hosting costs). This would enable a full history of showing all the orders. I also believe that this challenge would be best as a phone application. Maybe a react native project or just nativescript. That way the users can simply pull it up on their phone in the coffee shop and get who is paying for the day right there. This solves if they forget to check before they leave for the office and also adds a lot of conveinence to the app. 