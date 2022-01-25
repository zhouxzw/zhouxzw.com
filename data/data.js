const nailStyle = {
  title: "NailStyle",
  desc:
    "NailStyle is a web application where customers" +
    " can book appointments to get their nails done! Nailstyle also includes an" +
    " admin panel where owners can access previous customer visits, upcoming bookings," +
    " weekly revenue and more.",
  content:
    "The initial idea for this project came about from a friend who is in the nail salon industry, who might open his own " +
    " salon one day. My friend and I wanted to build a 'final' project with all the skills and techniques we have learned " +
    " throughout our university journey.",
  github: "https://github.com/zhouxzw/NailStyle",
  link: "https://hxnails.ca",
  image: "/images/nailstyle.png",
  carousel: [
    "/images/services.png",
    "/images/booking.png",
    "/images/calendar.png",
    "/images/admin-customer.png",
    "/images/appointment.png",
  ],
  videos: [],
  techstack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  route: "/projects/NailStyle",
};

const menji = {
  title: "MENJI",
  desc:
    "Database management final project tasked with building custom API endpoints to retrieve/post data to a database" +
    " and build a simple interactive front-end interface.",
  content:
    "Our project proposal was to build a simple E-commerce style web application with simple user interactions." +
    " Before any development began we were tasked with mapping an entity-relationship and relational modal diagram to map our database design." +
    " We were allowed to use any database technology and having no prior experience in databases we decided to use MongoDB as NoSQL databases peaked our interest.",
  github: "https://github.com/zhouxzw/Menji",
  link: "none",
  image: "/images/menji.png",
  carousel: [
    "/images/footwear.png",
    "/images/pants.png",
    "/images/cart.png",
    "/images/cart2.png",
    "/images/inventory.png",
    "/images/login.png",
  ],
  videos: [],
  techstack: ["JQuery", "Node.js", "Express.js", "Bootstrap", "MongoDB"],
  route: "/projects/MENJI",
};

const makeapp = {
  title: "MAKEAPP",
  desc:
    "iOS programming project tasked with building a mobile app. Our project proposal was to develop" +
    " a social media platform where users could upload their make up routines. Our app has the main functionality where users" +
    " can create a post and upload pictures or videos, showcasing step-by-step their makeup routine.",
  content:
    "The main goal for this project was to develop a platform for people to explore step-by-step makeup routines or to create" +
    " routines to share with other enthusiasts! Users can browse the inspo page for routines and if a user taps on a post, it will bring up" +
    " a more detailed post. Users are also able to create a post by uploading pictures/videos with step-by-step descriptions." +
    " This project was very ambitious and our professor suggested we get the core functionality down " +
    " before focusing on the design aspect. Overall the final proudct looks different than our intended design but it is functional.",
  github: "https://github.com/zhouxzw/makeapp",
  link: "none",
  image: "/images/inspo.png",
  techstack: ["SwiftUI", "Firebase"],
  carousel: [],
  videos: ["https://www.youtube.com/embed/4AqHY7XUyAM"],
  route: "/projects/makeapp",
};

const nba = {
  title: "NBA-Chart",
  desc:
    "Data visualization project tasked with building a interactive visualization." +
    " The data set we chose was related to NBA players and their shooting statistics." +
    " The interactive parts include filtering by specific teams, west or east conference and FT or 3PT.",
  content:
    "The goal of this project was to visualize a NBA dataset between NBA players shooting percentages on their team versus" +
    " other teams. The size of bubble represents the average points made by that player. Interactive functions include the ability to" +
    " filter by specific teams, west or east conference and three point or free throw shooting percentage. The last interactive function is users can hover" +
    " over a bubble to see the player name.",
  github: "https://github.com/zhouxzw/NBA-Chart",
  link: "https://pages.cpsc.ucalgary.ca/~william.zhou/finalVisual",
  image: "/images/nba.png",
  techstack: ["D3.js"],
  carousel: ["/images/nba2.png", "/images/nba3.png", "/images/nba4.png"],
  videos: [],
  route: "/projects/NBA-Chart",
};

const radiantBot = {
  title: "RadiantBot",
  desc: "Valorant agent randomizer discord application built for a group of friends using Discord.js",
  content:
    "Simple discord application that I decided to build for my friends and I. Everyone is always having a hard time choosing which agent to play " +
    "so we let this bot generate a random agent for us! This project is currently hosted on Heroku and feel free to clone the repo and use it in your own server! " +
    "Get an api-key from discord developer portal and create an .env file and add TOKEN=`api-key` in the .env file.",
  github: "https://github.com/zhouxzw/RadiantBot",
  link: "none",
  image: "/images/valorant.png",
  techstack: ["Node.js", "Discord.js"],
  carousel: ["/images/bot.png"],
  videos: [],
  route: "/projects/RadiantBot",
};

const projects = [nailStyle, menji, makeapp, nba, radiantBot];

export default projects;
