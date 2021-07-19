// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jamie",
  middleName: "",
  lastName: "Holmes",
  message: " Software Engineering Leadership ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jcme",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/jamie.c.holmes",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/jamiecholmes/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jamiecholmes/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/jamiecholmes",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jamie-holmes.jpg"),
  imageSize: 375,
  message:
    "My name is Jamie Holmes. I’m the Head of Software Development at Tesco responsible for our Identity Services. I'm passionate about building high performing teams, and developing those around me to realize their goals. In my free time I like keeping my technical skills sharp.",
  resume: require("../editable-stuff/jamie-holmes-cv.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "jcme", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/jamie-holmes.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/jamie-holmes.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Distributed Systems Design", value: 90 },
    { name: "Agile Principles", value: 75 },
    { name: "DevOps", value: 85 },
    { name: "Security by Design", value: 80 },
    { name: "Java", value: 80 },
    { name: "Kotlin", value: 60 },
    { name: "C#", value: 65 },
    { name: "Database Technologies", value: 70 },
  ],
  softSkills: [
    { name: "Developing People", value: 90 },
    { name: "Hiring", value: 80 },
    { name: "Customer Focus", value: 85 },
    { name: "Coaching", value: 85 },
    { name: "Stakeholder Management", value: 75 },
    { name: "Empathy", value: 80 },
    { name: "Collaboration", value: 85 },
    { name: "Creativity", value: 65 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Always looking to speak to other engineering leaders. Drop me a line if there's anything I can help with.",
  email: "holmes.jc@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
