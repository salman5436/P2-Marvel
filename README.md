# MARVEL Pick Em!
Join the fight! Assemble your team of Avengers! Choose your villain! Write your story!

## Setting Up the Project:

## About this Game:
Using the Marvel API to allow the user to search, discover, and assemble a team of heroes to stop the most daunting threat the world has ever faced.

## Tech Being Used:
- Javascript
- HTML/CSS
- Node
- Express
- SQL/Sequelize

## Database Diagrams:
https://dbdiagram.io/d/5efae17b0425da461f040afe


## MVP Checklist: 
As a User, I want to:
- Register, login, and save my team  (COMPLETE)
- Search and find more information about superheroes (COMPLETE)
- Add a superhero to my team (COMPLETE)
- Delete a superhero from my team (COMPLETE)
- Choose my villain (COMPLETE)
- Learn more about my vilains (COMPLETE)
- Vote on whether my team or the villain the win (COMPLETE)

## Stretch Goals:
As a User, I want to:
- Create my own superhero with their own name, description, powers, and upload my own superhero picture to add to my team
- Find superheroes ranked by top movies in order to better make my selection
- As a user, I want to see the outcome of assembling my team for battle
- As a user, I want to be able to share my team to social media to show friends

## Routes:
 Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `/` | home page that shows all options |
| GET | `/show` | uses Marvel API to show hero data |
| GET | `/team` | Team members and information & image for each superhero |
| POST | `/team` | Adds the superhero to the team and redirects to `GET /team` |
| DELETE | `/team/:id` | Deletes a hero from the team and redirects to `GET /` |
| GET | `/villain` | villain page that shows each villain and contains the battle form |
| PUT | `/villain/upvote` | Allows for user to vote for the Hero Team in the match up |
| GET | `/villain/downvote` | Allows for user to vote for the Villain in the match up |


## Wireframe: 
 Drawn in
 
 
 ## Roadblocks & Limitations:
 - Non-functioning user and voting systems
 - Models not allowing for access to different datapoints
 - Routing issues with voting system
 
 ## Game Planning and Next Steps:
 - Adding robust functionality for user experience (creaitng own superhero, storing multiple teams, etc)
 - Having sitewide competitions with voting systems
 - Social media sharing of teams and battles
 - Truth be told, I stumbled a lot during this project. I ran into heavy roadblocks and I tried my best to implement the best methods to reach MVP. My P2 is far from perfect and I messed up in many different places but I have learned so much and I look forward to coming back to it and doing it justice (no pun intended... get it? superheroes)
