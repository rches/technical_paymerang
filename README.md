# Paymerang Technical Assessment

This project is a small, single page application created to provide a tool to employees, who are responsible for ensuring the vendors receive the payments.

## Overview

A general overview of the project will go here.

## Steps Taken

Identified the needs of the task
Identified technologies to use (React)
Researched and read up on similar ideas available in the technology
Sketched ideas on paper including components and state housing
Wrote first pass of code
Wrote first pass of styling
Refined code
Refined styling

## Lessons Learned

Any big eureka moments will be documented here.

## Wins

Moments of success!

## Deltas

Opportunities to learn.

## Journal Notes

2/7/2020 - React seems like the best place to be for this project. I have a comfort level with React that allows me to hit the ground running and ignore having to relearn a different framework. It also has the tools to make the task simpler and more enjoyable to work on (easy coding is happy coding).

Yes, the data variable is global. In a production ready app, this would be handled by fetching the data and passed down.

2/8/2020 - Sketched out a few ideas fro the sake of clarity. Getting a battle plan ready really is a weakness and something I'm mindful of with this project. A lightbulb went off when trying to tie the navigation to what is being displayed: React is the right tool because of state. State will allow the display and nav tying together to be WAY easier and intuitive.

General notes from the day:

-   Note to self - the pagination is just a navbar with some math involved: don't overthink it!

-   I'm not smart with math, so getting the logic for number of pages and for each page was tricky.

-   Really had to walk back out of possible rabbit holes like "what about loading all the data on the client side?, will this code be able to stand up over time?, Is this data secure or should I think about security in this challenge?"

2/9/2020 - The logic to pass the array of object tied me up for a bit. Thinking logically through what part of the entire project should handle iterrating what parts of the data took a bit longer than hoped, but after some trial and error, we managed to parse it out. Moving on to styling the components. If there is time, will consider sort functions to make the data manageable.

General notes from the day:

-   Indentified the necessary array functions to make a copy of the data and not mutate it. This is important!

-   Origianlly when reading the insructions, I thought about displaying 6 customer cards per page. When rereading, I believe I misread, and the expectation was to have one page display the three sections of data (Payee, Payment, Remittance). Instead of removing the function taht parsed that logic, I decided to keep it in but change the params to display only one set of data at a time. Should there be a need to see a multi-view in the future, the logic is there and can be altered quickly. Plus, it was fun.
