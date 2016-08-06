/*This document was created by and the sole property of Omar Jandali.*/
/*
This is going to be the document that contains all of the objects that
will be displayed on the resume page.

The main objects include the following:
General Information(include About Me information - possibly)
Contact Information
Quotes
Projects
Skills-general/marketing
Skills-programming/technical
Experience
Education
Contact
Social Media

There are a few additional objects that will be added:
navigation - all the different navigation tabs
*/

var quickinfo = {
  "name":"Omar Jandali",
  "picture":"url",
  "quote":"You dont learn to walk by following rules. You learn by doing and falling over. - Sir Richard Branson",
  "info":[
  "position":"Front End Web Developer",
  "email":"omar@omnacore.com",
  "location":"Mission Viejo, CA",
  ]
}
var generalInfo = {
  "name":"Omar Jandali",
  "position":"Front End Web Developer",
  "location":"Mission Viejo, CA",
  "age":"23 Years old",
  "facts":[
    "Greatest strength - motivated, efficient",
    "Greatest weakness - impulsive, distracted",
    "Describe yourself - ambitious, charismatic",
    "Dream job - Machine Learning Software Developer",
    "Work Environment - open space to push creativity"
  ]
}
var contactInfo = {
  "phone":"(951) 534-3666",
  "email":"omar@omnacore.com",
  "location":"Mission Viejo, CA",
  "website":"www.omarjandali.com"
}
var portfolio = {
  "websites":[
    {
      "name":"OmnaCore Marketing",
      "author":"Omar Jandali",
      "dates":"",
      "url":"http://www.omnacore.com",
      "github":"",
      "description":"",
    },
    {
      "name":"Online Resume",
      "author":"Omar Jandali",
      "dates":"",
      "url":"http://www.omarjandali.com",
      "github":"",
      "description":"",
    },
    {
      "name":"ItsMeOmarJ",
      "author":"Omar Jandali",
      "dates":"",
      "url":"http://www.itsmeomarj.com",
      "github":"",
      "description":"",
    },
    {
      "name":"Fyt",
      "author":"Omar Jandali",
      "dates":"",
      "url":"http://www.fyt.com",
      "github":"",
      "description":"",
    },
  ]
  "game":[
    {
      "name":"Frogger",
      "author":"Omar jandali",
      "dates":"",
      "url":"",
      "github":"",
      "description":"",
    },
    {
      "name":"Card Game",
      "author":"Omar Jandali",
      "dates":"",
      "url":"",
      "github":"",
      "description":"",
    },
  ]
}
var skillsGeneral = {
  "marketing":[
    "Social Analytics",
    "Marketing Specialist",
    "Marketing Strategy",
    "Branding"
  ],
  "general":[
    "Windows 7+",
    "OS X leopard+",
    "Android 4.0+",
    "iOS 7+",
    "Adobe Creative Suite",
    "Google Apps"
  ]
}
var skillsProgramming = {
  "programming":[
    "HTML5",
    "CSS3",
    "Javascript",
    "C++",
    "Java",
    "MySQL",
    "Php",
    "Bootstrap",
    "Git",
    "GitHub",
  ]
}
var experience = {
  "jobs":[
      {
      "name":"OmnaCore Marketing",
      "position":"Social Media Specialist",
      "dates":"March 2016 - Present",
      "location":"Mission Viejo, CA",
      "description":""
    },
      {
      "name":"Addrenal",
      "position":"Social Media - Internship",
      "dates":"February 2016 - May 2016",
      "location":"Huntington Beach, CA",
      "description":""
    },
      {
      "name":"Freelance",
      "position":"Web Designer",
      "dates":"August 2015 - February 2016",
      "location":"Mission Viejo, CA",
      "description":""
    },
      {
      "name":"Freelance",
      "position":"Social Media Strategist",
      "dates":"January 2015 - August 2015",
      "location":"Mission Viejo, CA",
      "description":""
    }
  ]
}
var education = {
  "schools":[
    {
      "name":"Poly High School",
      "location":"Riverside, CA",
      "dates":"August 2007 - June 2011",
      "degree":"High School Diploma",
      "url":"http://www.rusd.edu",
    },
    {
      "name":"La Sierra University",
      "location":"Riverside, CA",
      "dates":"September 2011 - June 2013",
      "degree":"Biology",
      "url":"http://www.lasierra.edu",
    },
    {
      "name":"Saddleback College",
      "location":"Mission Viejo, CA",
      "dates":"September 2013 - May 2015",
      "degree":"Marketing",
      "url":"http://www.saddleback.edu",
    },
    {
      "name":"Arizona State University - Online",
      "location":"Mission Viejo, CA",
      "dates":"September 2015 - Present",
      "degree":"Marketing",
      "url":"http://www.asu.edu",
    }
  ]
  "online":[
    {
      "name":"Udacity",
      "location":"Mission Viejo, CA",
      "dates":"May 2016 - August 2016",
      "degree":"Front End Web Developer",
      "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    },
    {
      "name":"Udacity",
      "location":"Mission Viejo, CA",
      "dates":"August 2016 - PResent",
      "degree":"Full Stack Web Developer",
      "url":"https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004",
    },
    {
      "name":"Code Academy",
      "location":"Mission Viejo, CA",
      "dates":"January 2016 - April 2016",
      "degree":"HTML/CSS/Javascript",
      "url":"http://www.codeacademy.com",
    }
  ]
}
var socialMedia = {
  "icons":{
    "instagram":""
    "twitter":""
    "linkedin":""
    "youtube":""
    "github":""
    "blog":""
    "email":""
    "skype":""
  }
  "username":{
    "instagram":""
    "twitter":""
    "linkedin":""
    "youtube":""
    "github":""
    "blog":""
    "email":""
    "skype":""
  }
}
var quotes = [
  "Time is the friend of a wonderful businessman, the enemy of the mediocre. - Warren Buffet",
  "Try not to become a man of success, but rather a man of value. - Albert Einstein",
  "A business that makes nothing but money is a poor business. - Henry Ford",
  "No one is born a CEO, but no one tell you that. - Andrew W. Houston",
  "Timing, perserverence, and ten years of trying will eventually make you look like an overnight success. - Biz Stone",
  "Always remember to stay self-funded as long as possible. - Garrett Camp",
  "You dont learn to walk by following rules. You learn by doing and falling over. - Sir Richard Branson"
]

var navigation = [
  "Home",
  "About Me",
  "Portfolio",
  "Skills",
  "Expereince",
  "Education",
  "Contact",
  ""
]