<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
<link rel="stylesheet" href="./font-awesome/css/all.css">
<script src="./JS.js"></script>

<style> 

html>body, p {
  font-family: ubuntu;
  font-size: 1.1em;
  text-shadow:none;
}
h2>code, p>code, li>code, div>code {
    background-color: #09A;
    border-radius: 7px;
    box-shadow: 
      1px 1px 1px #000,
      -1px -1px 1px #FFF,
      -1px 1px 2px #000,
      1px -1px 2px #000;
    color: #00f;
    margin: 5px;
    padding: 2px;
    font-family: 'Fira Mono', monospace;
    text-shadow:none;
    font-size:0.8em
}
body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}
i, .highlight, .sololearn{
  color:skyblue;
  font-weight:bold;
  text-shadow: none;
  fill: skyblue;
  margin: 0;
  padding: none;
}
.sololearn{
  position:relative;
  right: 60px;
  height:2em; 
  fill:skyblue
}
.date{
  float: right;
  font-weight: skyblue;
}
</style>
</head>    

# Lucas Cekan <small></small>
## Full Stack Web Developer

Junior Full Stack Web Developer with a <span class="Tomato">proven track record of adding value</span> to any bussiness. Motivating presence in a team context. <em>Extra bonus skills in graphic design, user experience and user design, communication through online media, learning and applying new skills and much more.</em> <span class="highlight">Looking for a challenge to apply my enthusiasm and creativity.</span> Analaytical mindset gained from background in <span class="Violet">Science and Mathematics</span> from highschool and <span class="Violet">Finance and Economics</span> from tertiary education. 


Contact & Info | Info Links
---- | -
<i class="fas fa-envelope-open-text"></i> | CekanLucas@gmail.com
<i class="fas fa-mobile-alt"> | [289-931-5522](tel:289-931-5522)
<i class="fab fa-linkedin"></i> | [LinkedIn](https://www.linkedin.com/in/lucas-cekan-760673160/)
<i class="fab fa-github-square"></i> | [GitHub](https://github.com/Dubi911)
<img class=sololearn src="./sololearnLogo.svg" alt="sololearn">| [SpaceJam<span class="Red">♨</span>](https://www.sololearn.com/Profile/11527370)
<i class="fas fa-map-marker-alt"></i> | Toronto, St. Catherines, Welland*

*see map for general region


<!--Google map API -->
<div id="map" style="width:90%;height:400px;"></div>

<script>

// Initialize and add the map
function initMap() {
	let image = '../images/Marker.png';
	let image2 = '../images/DanceMarker.png';
  	// The location of DKcenter
  	let DKcoor = {lat: -34.742750, lng: 138.660641};
  	// The map, centered bit to the side of Dkcenter
  	let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: DKcoor});
 	 // The marker, positioned at dk center
  	let marker = new google.maps.Marker({
		position: DKcoor, 
		map: map, 
		title:'Main\n10 Trimmer Rd.\nElizabeth South\nSouth Australia\n5112',
		icon: image
	})
	let marker2 = new google.maps.Marker({
		position: {lat: -34.731211, lng: 138.660750},
		map: map, 
		title:'Dance Studio\n6 Chivell.\nElizabeth South\nSouth Australia\n5112',
		icon: image2
	});
	//infowindow -iw Main Building
	let contentString = 
			'<h3> Main Building </h3>'
			+'<p>' 
			+	'mobile: <a href="tel:0411 421 945">0411 421 945</a> <br>'
			+	'email: <a href="mailto:davidjgarrard@bigpond.com"> davidjgarrard@bigpond.com </a><br>'
			+	'address: <a href="#" onclick="centerMap()">10 Trimmer Rd.</a>'
			+'</p>'
		;
	
	let infowindow = new google.maps.InfoWindow({
    content: contentString
	}); 

	marker.addListener('click', function() {
    infowindow.open(map, marker);
	});
	//infowindow -iw Dance Studio
	let contentString2 = 
		'<h3> Dance Studio </h3>'
		+'<p>' 
		+	'mobile: <a href="tel:0411 421 945">0411 421 945</a> <br>'
		+	'email: <a href="mailto:davidjgarrard@bigpond.com"> davidjgarrard@bigpond.com </a><br>'
		+	'address: <a href="#" onclick="centerMap()">6 Chivell St.</a>'
		+'</p>'
	;
	
	let infowindow2 = new google.maps.InfoWindow({
    content: contentString2
	}); 

	marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
	});
}
</script>
<!--End Google map API -->

## Previous Positions  
#### Website Developer <span class="date">2019</span> 

DK Centre of Arts	

Responsibilities
* Create a website for a family owed small business 
* Communicate the organisation’s community engagement
* Ability to add a digital presence despite owner lack of experience 

Achievements
* Received praise for my ability to communicate  DK Centre’s role in the community through my the website and extremely well worded description on the home page
* Owner and manager’s  observation showed an ability to work on a massive project day in and out without being distracted until project completion
* Created a user friendly interface to post things in website even for people with low computer skills 
* Gained experience and lessons in programming, I now use version control systems and applications from hosting platforms, gained from hard lessons and failures that have been learnt and have been overcome. 
* Finalized my learning in a full stack website development creating a website front to back
* Shown my ability to add value to a business, every business has the potential to benefit from technology and this was demonstrated in this project 

Volunteer
				
Digital Marketing Assistant  					2019 

Channel 44 ABC 
	
Responsibilities
* Maintain a website 
* Increase traffic through SEO (search engine optimisation)
* Working collaboratively under the direction of an Digital Asset Manager 
* Increasing the digital presence of a traditional television programmer 

Achievements
* Upskilled successfully in a field outside my formal education 
* Successfully fixed many bugs and improved the layout and look of the website
* Gained valuable insight into the community television programming  
* Finalized my learning in WordPress, HTML, CSS, JavaScript, PHP 
* Shown my ability to adapt and thrive in an increasingly digital world. 
				
Drill Operator	2015 

Raglan Drilling	

Responsibilities

* Operating and maintaining drill machinery 
* Tending to minor tasks in the yard when not in the field 
* Working in a team to accomplish tasks 

Achievements
* Was opened to a non-academic work experience outside of comfort zone 
* Gained experience in more physical activities 
* Gained valuable insight into the mining industry as well as travel out of state 
* Sense of independence from living out of state
* Able to gain a perspective and empathise with other interesting people from  very different and diverse backgrounds  


Education & Qualifications
<hr>Diploma in Web Development<br> Lighthouse Labs 	<span class="date">2020</span><hr>

Bachelor of Business (Finance) <br>
University of South Australia<span class="date">2016-2018</span>

<hr>Bachelor of Finance and Economics <br>
University of Adelaide<span class="date">2012-2016</span><hr>

Diploma of Business<br> 
South Australian Institute of Business and Technology	<span class="date">2011-2012</span>

<hr>
High School (Year 10-12)<br> Australian Science and Mathematics School 	<span class="date">2009-2011</span><hr>

## Skills
Languages
* Javascript
* Ruby 
* HTML / CSS
* PHP
* Bash

Frameworks & Libraries
* Node
* React
* Rails 
* Express
* AJAX/JQuery
* Chai / Mocha
* SASS

Databases
* SQL 
* PostgreSQL

Platforms/APIs
* Git / Github
* Netlify
* Storybook
* Google Maps API

Other
* REST Architecture 
* Single Page Applications (SPA)
* JAM stack 
* Microsoft Office / VBA
* Photoshop / GIMP 

## PROJECTS 

WikiMaps 

A single page applications that allow users to create maps with custom pins and locations for collaberation based on Google Maps API 

HTML CSS JS SASS JS JQuery AJAX Node Express PostgreSQL

Interview Scheduler 

A React single page web app that allows users to book appointments based on limited spots, first come, first serve basis

React Storybook PostgreSQL Jest

Tweeter
Single page Twitter clone app

HTML CSS JS JQuery AJAX Node Express

Jungle 
A simple Ruby on Rails e-commerce app 

Ruby Rails RSpec bcrypt