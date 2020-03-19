# Customer Transaction Coding Challenge

This project is a small, single page application created to provide a tool to employees, who are responsible for ensuring the vendors receive the payments.

### Directions

Clone into repo and run `npm run start` in your command line to run a local version of the app on port3000

## Steps Taken

-   Identified the needs of the task
-   Identified technologies to use (React)
-   Researched and read up on similar ideas available in the technology
-   Sketched ideas on paper including components and state housing
-   Wrote first pass of code
-   Wrote first pass of styling
-   Refined code
-   Refined styling

## Technologies Used

-   ReactJS
-   Skeleton CSS
-   MomentJS

## Lessons Learned

Swapped to using the useState hook on day five of the project, and I am in love with the syntax. It looks, feels, and seems much more elegant. I plan to refractor the main component into a functional component with the useState hook.

## Wins

I never went off the rails or too deep into a rabbit hole

I was able to think through actual problems as they came up

I solved for the problem given

## Deltas

Planning out a project has always felt like a weak spot, and in realizing last minute that I wanted to add a feature, it showed. This is an area that I want to learn more to become better.

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

2/11/2020 - Converting back to a paginated view with multiple displays per page. I think I'm overthinking this and could easily be wrong, but pagination means pagination with multiple items per page so we'll go with that.

The layout is cleaned up tremendously tonight and we are finalizing some small touches.

This is the first time I'm using useState. I've avoided this for so long, but the syntax is really clean and allowing the ability to add state to functional components after they've been built is SUCH A RELIEF! I'm loving this, and this was one of my hangups about learning hooks. Really excited to explore that topic now!

Lastly, I think some ignorance in how the data is used. Learning about who is using this data and how it's put to use would give me insight into how best to display it. Right now, this makes the most sense, but I would love to learn more about how these are all linked.

2/12/2020 - I woke up in the middle of the night realizing if I were using this app, I would want to sift through the data. After reading up, a clean and simple solution was to use array.filter() and the update method to compare the updated state change against the previous state to slice a filtered array. PHEW! With that, and some minor styling, we have an app that loads the data, shows the data, and allows a user to search the data. This exercise was a lot of fun!
