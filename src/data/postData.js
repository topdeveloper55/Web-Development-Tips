import React from 'react';
import { Link } from 'react-router';
import {PrismCode} from 'react-prism';
import Youtube from 'react-youtube';
import Codepen from '../components/react-codepen.js';
import CodeEditor from '../components/code.jsx';

let PostData = [
  /*{
    name: "asda",
    title: "Elixir",
    image: "inspiration.png",
    
    intoduction: "I made this mistake early on because I figured "
  },
  /*{
    id: NaN,
    name: "finding-inspiration",
    title: "Finding Inspiration",
    introduction: "Design has never been my forte; however, by rever"
  },
  /*{
    id: NaN,
    name: "font-family",
    title: "CSS @font-face",
    time: "2/7/2017",
    mainImage: "font-face.jpg",
    keywords: "css,font,font-face,type,lettering",
    tags: "css,font",
    introduction: "Until recently I was using strictly google fonts and was a little bit intimidated by using downloaded fonts. They can be hard to adopt, but since using downloaded fonts I've noticed that page loading is slightly faster and I've also had much more options for what sorts of fonts I want to use (Such as Igra, the font I am using for this website). I hope to convince you to give them a try.",
    content: ""
  },*/
  /*{
    name: "string-interpolation-with-javascript",
    title: "String Interpolation With JavaScript",
    time: "2/18/2017",
    main
  }*/
  {
    name: "code-editor-update-html-css-javascript",
    title: "Code Editor Update: HTML, CSS, JavaScript",
    time: "2/18/2017",
    mainImage: "editor.png",
    keywords: "update,html5,html,css3,javascript,css,editor,code",
    tags: "update,html,css,javascript",
    introduction: "The editor has been updated so you can now write HTML, CSS, and JavaScript in some editors! JavaScript exclusive editors will now show console.log's and now have a special method called code.submit for submitting code for testing in challenges.",
    content:
    <div>
    <p>The editor has been updated so you can now write HTML, CSS, and JavaScript in some editors! JavaScript exclusive editors will now show console.log's and now have a special method called code.submit for submitting code for testing in challenges.</p>
    <p>Here is a full JavaScript, HTML, CSS editor.</p>
    <CodeEditor modes={["html","css","javascript"]}>
    {{
    "javascript": 
`var hello = "world";`,
    "html":
`<h1>Hello World</h1>`,
    "css":
`h1 {
  background:blue;
  color:white;
  border:1px solid black;
  box-shadow:2px 2px 2px rgba(0,0,0,.2);
  text-shadow:2px 2px black;
  font-family:sans-serif;
}`
    }}
    </CodeEditor>
    <p>And here is the newly updated JavaScript editor.</p>
    <CodeEditor modes={["javascript"]}>
    {{
    "javascript": 
`var answer = "Hello World";
code.submit(answer)`
    }}
    </CodeEditor>
    </div>
  },
  {
    name: "learn-these-skills-or-live-a-mediocre-life",
    title: "Learn These Skills or Live a Mediocre Life",
    time: "2/17/2017",
    mainImage: "jim-rohn.jpg",
    keywords: "personal development,jim rohn,soft skills",
    tags: "soft skills,personal development",
    introduction: "One facet of web development and life in general is soft skills. These sometimes mystical skills can be the difference between one person getting what they want out of life and another person barely getting by. I would like to make this a regular topic because without having the right mindset nothing is as possible as it might seem; However, with the right mindset, the sky is the limit.",
    content:
    <div>
    <p>One facet of web development and life, in general, is soft skills. These sometimes mystical skills can be the difference between one person getting what they want out of life and another person barely getting by. I would like to make this a regular topic because without having the right mindset nothing is as possible as it might seem; however, with the right mindset, the sky is the limit.</p>
    <p>Before dying in 2009, Jim Rohn was one of the most prominent business philosophers of his time and is highly regarded in the personal development community. I would like to share with you a two-hour seminar that he gave back in 1981. Jim talks about many soft skills with the overall theme of personal development. Now, since this is a long video, relax, grab something to drink, and take your time. Enjoy! (my notes on seminar below the video)</p>
    <div className="youtubeContainer">
      <Youtube videoId={"7WDPrDAM2Cc"}/> 
    </div><br/>
    <q>If you took all the money in the world and divided it up equally among everyone the money would eventually all end up in the same hands.</q>
    <p>As for happiness, <q>it is not what you are getting, it is what you are becoming that matters.</q></p>
    <q>Set goals</q><br/>
    <q>You've got to be wise and careful.</q><br/>
    <q>Emotions can either build or destroy.</q><br/>
    <b><q>The <u>major</u> key to your better future is <u>you</u>.</q></b><br/>
    <q>You can't get extra time.</q><br/>
    <q>Value makes the difference in results. You can't get more time but you can create more value.</q><br/>
    <q>You get paid for value, not time.</q><br/>
    <q>To develop an above average income, become an above average person.</q><br/>
    <q>For things to change with you, you've got to change.</q><br/>
    <q>Make sure you aren't spending major time on minor things.</q><br/>
    <q>You cannot change the seasons but you can change yourself.</q><br/>
    <q>Learn how to handle the winters, nights, difficulties in life.</q><br/>
    <q>Don't wish for fewer problems, wish for more skills.</q><br/>
    <q>Take advantage of the springs of life.</q><br/>
    <q>Learn to protect what you have started. All good will be attacked and all values must be defended.</q><br/>
    <q>Take full responsibility for what happens to you. Don't complain and don't make apologies.</q><br/>
    <q>It's not what happens but rather it's what you do that changes everything.</q><br/>
    <q>Everyone has disappointments, what matters is how you deal with them.</q><br/>
    <q><b>Be disciplined</b> and be excited about being disciplined.</q><br/>
    <q>Start with a little discipline and build up to being more disciplined over time.</q><br/>
    <q><b>Be self-motivated</b></q><br/>
    <q>Good people are not trained, they are found.</q><br/>
    <q>Find out how things work. There are enough problems, the ideas to solve them are just not there yet. Make a journal of ideas.</q><br/>
    <q>If you wish to be happy, study happiness. If you wish to be successful, study success.</q><br/>
    <q>You may not be able to do all you find out, but you should find out all you can do.</q><br/>
    <q><b>Be curious.</b></q><br/>
    <p>Be childlike in:</p>
    <ul>
      <li>Curiosity</li>
      <li>Excitement</li>
      <li>Faith (not skeptical)</li>
      <li>Trust</li>
    </ul>
    <q>Become a good reader. One book could save you five years.</q><br/>
    <q>You don't have to like the information given to you, but you should still learn from it.</q><br/>
    <q>Ignorance is not bliss</q><br/>
    <q>Learn to get on the good side of the way things work.</q><br/>
    <q>The law of use. Whatever you don't use, you loose.</q><br/>
    <q>The law of sowing and reaping. Whatever you sow, you shall reap.</q><br/>
    <q>We all have a choice, make a living or design a life.</q><br/>
    <q>If you had enough reasons you could do the most incredible things.</q><br/>
    <q>Reasons come first, answers come second.</q><br/>
    <q>Find out what turns you off.</q><br/>
    <q>It's the journey, not the money.</q><br/>
    <q>Wealth is not a matter of intelligence, it is a matter of inspiration.</q><br/>
    <q>Don't loose your dreams, do some dreaming.</q><br/>
    <q>Celebrate your achievements.</q><br/>
    <q>All day we're being effected by our goals. From the way we talk to the way we walk, goals are affecting our personality.</q>
    </div>
  },
  {
    name: "javascript-spread-operator-and-destructuring-assignment-syntax",
    title: "JavaScript Spread Operator and Destructuring Assignment Syntax",
    time: "2/15/2017",
    mainImage: "spread.jpg",
    keywords: "javascript,spread,es6,advanced",
    tags: 'javascript,ECMAScript6',
    editor: true,
    introduction: "Another couple of my favorite ECMAScript6 features are the spread operator and destructuring assignment syntax. Using these new features in JavaScript makes life just a little easier.",
    content:
    <div>
    <p>Another couple of my favorite ECMAScript6 features are the spread operator and destructuring assignment syntax. Using these new features in JavaScript makes life just a little easier.</p>
    <p>One of the main things I use the spread operator for is when I am not sure how many parameters I will be using in a function call. For example, let's say that there is a function being used in an e-commerce website. It takes all items that are passed to the function and pushes them to a shopping cart.</p>
    <pre><PrismCode className="language-javascript">
    {
`var shoppingCart = [];
function addToShoppingCart(...items) {
  items.forEach(x => shoppingCart.push(x));
  return shoppingCart;
}

addToShoppingCart("apples","fishing pole");`
    }
    </PrismCode></pre>
    <p>By using the spread operator we can add as many parameters as is needed when we call our function. It is good, but there are ways that the function and the function call can be made better. What if we had no clue how many things were going to be passed into the function?</p>
    <pre><PrismCode className="language-javascript">
    {
`var shoppingCart = [];
function addToShoppingCart(...items) {
  shoppingCart.push(...items);
  return shoppingCart;
}
var myDynamicallyCreatedArray = ["apples","fishing pole"];
addToShoppingCart(...myDynamicallyCreatedArray);`
    }
    </PrismCode></pre>
    <p>The function call uses the spread operator to destructure the array and assign each available items spread parameter to each item in the array. The function still takes an unlimited number of arguments so everything works. The forEach loop is now replaced with a simple push to the cart by using the spread of the items spread and passing in the individual values to be pushed to the shoppingCart.</p>
    <p>A more simple example of destructuring could be if we wanted to assign an array of three values to a function that takes three parameters. Instead of having to call <PrismCode className="language-javascript">takeParams(myArray[0], myArray[1], myArray[2]);</PrismCode> I can use the spread operator to do some destructuring assignment.</p>
    <pre><PrismCode className="language-javascript">
    {
`function takeParams(x,y,z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

myArray = [1,2,3];

takeParams(...myArray);`
    }
    </PrismCode></pre>
    <p>A simpler way to use the spread operator in the shoppingCart example would be like below.</p>
    <pre><PrismCode className="language-javascript">
    {
`var shoppingCart = [];
function addToShoppingCart(items) {
  shoppingCart.push(...items);
  return shoppingCart;
}
var myDynamicallyCreatedArray = ["apples","fishing pole"];
addToShoppingCart(myDynamicallyCreatedArray);`
    }
    </PrismCode></pre>
    <p>This still works and is probably a little bit easier to reason about.</p>
    <p>We could also take the push out of the function and use spread operators as a means to update the array.</p>
    <pre><PrismCode className="language-javascript">
    {
`var shoppingCart = [];
function addToShoppingCart(items) {
  shoppingCart = [...shoppingCart, ...items];
  return shoppingCart;
}
var myDynamicallyCreatedArray = ["apples","fishing pole"];
addToShoppingCart(myDynamicallyCreatedArray);`
    }
    </PrismCode></pre>
    <p>I hope that makes sense. Some helpful links on the two subjects below</p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator</a><br/>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment</a>
    <p>Try out some of the challenges below if you want some practice!</p>
    <CodeEditor modes={["javascript"]} test={{include: ["..."], notInclude: ["arguments"], output: ["can","waffle","grape juice","car"]}}>
    {{
    "javascript":
`//Update the function below to use the spread operator instead of the special arguments keyword

var myItems = [];
function storeItems() {
  for(var x in arguments) {
    myItems.push(arguments[x]);
  }
  
  return myItems;
}

code.submit(storeItems("can", "waffle", "grape juice", "car"));`
    }}
    </CodeEditor><br/>
    <CodeEditor modes={["javascript"]} test={{include: ["..."], notInclude: ["push"], output: [1,2,3,4,5,6]}}>
    {{
    "javascript":
`//Concatinate two arrays into one array and assign the result to completeNumberArray. Use the spread operator.

var firstNums = [1,2,3];
var secondNums = [4,5,6];

var completeNumberArray;
code.submit(completeNumberArray);`
    }}
    </CodeEditor><br/>
    <CodeEditor modes={["javascript"]} test={{include: ["..."], notInclude: ["push"], output: [5,"Hello",true,["Lorum","Ipsum",55,false]]}}>
    {{
    "javascript":
`//use destructuring to assign myNum, myStr, and myBool to values in variableValues (first three should be assigned to respective first three array items), then use the spread operator to assign the remaining items in the array to the remainingStuff variable.

var variableValues = [5,"Hello",true,"Lorum","Ipsum",55,false];

var myNum;
var myStr;
var myBool;
var remainingStuff;

//Your code here

//End of your code

function logVariables(){
  return [myNum, myStr, myBool, remainingStuff];
}

code.submit(logVariables());`
    }}
    </CodeEditor>
    </div>
  },
  {
    name: "code-editor-update",
    title: "Code Editor Update",
    time: "2/11/2017",
    mainImage: "editor.png",
    keywords: "update,javascript,editor,interactive",
    tags: "update,javascript",
    editor: true,
    introduction: "I have now added code to the website so that you can write and run your own code! I think this feature will come in handy for explaining and demostrating concepts. Note, that console.logs will appear in the developer console, You can make text appear on the page by just returning from a function or leaving out console.logs altogether. I will also be adding a special tag for posts that have interactive editors included. I've included some example code below that you can run.",
    content: 
    <div><p>I have now added code to the website so that you can write and run your own code! I think this feature will come in handy for explaining and demostrating concepts. I will also be adding a special tag for posts that have interactive editors included. I've included some example code below that you can run.</p>
    <CodeEditor modes={["javascript"]}>
    {{
    "javascript":
`// Try writing some code :)
function hello(x){ return x; }
console.log(hello('Hello World'));
// code.submit(answer); is used for submitting code for challenges`
    }}
    </CodeEditor>
    </div>
  },
  {
    name: "making-smooth-animations",
    title: "Making Smooth Animations With CSS and HTML5 Canvas",
    time: "2/6/2017",
    mainImage: "animations.jpg",
    keywords: "animation,css,styling,translate3d,transform,user experience,ux",
    tags: "css,animation,ux",
    introduction: "Roughly a month ago I was working my portfolio website and noticed that the animations on my website were really choppy and inconsistent. While researching a solution to the problem, I found out that the browser's are often redrawing (painting) the page after each frame an object is in animation. Luckily there are solutions to solve poor performance issues that this can cause!",
    content:
      <div>
        <p>
        Roughly a month ago I was working my portfolio website and noticed that the animations on my website were really choppy and inconsistent. While researching a solution to the problem, I found out that browsers are often redrawing (painting) the page after each frame an object is in animation. Luckily there are solutions to solve poor performance issues that this can cause!
        </p>
        <p>
        The solution to my particular problem was to use a transform value called translate3d which is hardware accelerated and does not require the browser to repaint the page. Opacity and all other transform values (I believe) have this special characteristic. Transform and opacity are limited, though, so you may need to look a little further for something that can create very specific animations.
        </p>
        <p>
        Since CSS can be a little limiting at times, another option to reduce choppy animations would be to use HTML5 canvas (also using the GPU)! This would probably be the trickiest option to perfect due to canvas being a somewhat advanced topic.
        </p>
        <p>
        There is a wonderful article on flipboard.com about their pursuit to make a mobile website with consistent, 60fps animations. It's called <a href="http://engineering.flipboard.com/2015/02/mobile-web/">60fps on the mobile web</a> and I would recommend giving it a read if you are interested in making animations with canvas (and react.js) or just like an inspiring read.
        </p>
        <p>
        Another cool website demonstrating the power of the HTML5 canvas is <a href="http://www.effectgames.com/demos/canvascycle/">http://www.effectgames.com/demos/canvascycle/</a> which has lots of cool scenes all powered by canvas (an example of one below).<br/>
        <img style={{float: "center"}} src="../img/canvas-demo.png" alt="canvas demo image"/>
        </p>
        <p>
        If you are interested in seeing translate3d in action then you can look at the mobile version of this website - the navigation menu uses translate3d transitions to achieve the animations. Below are some links for further exploration, enjoy :).
        </p>
        <ul>
          <li><a href="http://engineering.flipboard.com/2015/02/mobile-web/">60fps on the mobile web</a></li>
          <li><a href="http://codepen.io/tag/canvas/">Codepen.io canvas projects</a></li>
          <li><a href="http://www.effectgames.com/demos/canvascycle/">http://www.effectgames.com/demos/canvascycle/</a></li>
          <li><a href="http://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css">increase-your-sites-performance-with-hardware-accelerated-css - Treehouse</a></li>
          <li><a href="http://blog.teamtreehouse.com/create-smoother-animations-transitions-browser">http://blog.teamtreehouse.com/create-smoother-animations-transitions-browser</a></li>
          </ul>
      </div>
  },
  {
    name: "adding-mongodb",
    title: "Adding MongoDB",
    time: "2/5/2017",
    mainImage: "mongodb-logo.png",
    keywords: "mongodb,database,MERN,mern,react,node,express,jquery,ajax",
    tags: "mongodb,react,jquery,ajax",
    introduction: "I would like to go over how I integrated MongoDB with my existing application and used it to add a database. I will also share some resources that I found invaluable for this adventure at the end. I'm doing this because I would like to share the experience of setting up a database, but also because I would like to have some personalized documentation on this subject when I need to setup MongoDB in the future.",
    content:
    <div>
      <p>
      I would like to go over how I integrated MongoDB with my existing application and used it to add a database. I will also share some resources that I found invaluable for this adventure at the end. I'm doing this because I would like to share the experience of setting up a database, but also because I would like to have some personalized documentation on this subject when I need to setup MongoDB in the future. 
      </p>
      <p>
      First, I downloaded the MongoDB npm (node package manager) package and saved it to my package.json for later production use.
      </p>
      <pre><PrismCode className="language-bash">
{
`npm install --save mongodb`
}
      </PrismCode></pre>
      <p>
      I am using Cloud 9 so I just followed to recommended directions offered by Cloud 9 for setting up a MongoDB development server. If you are doing this on your local machine you will need to download MongoDB from <a href="https://www.mongodb.com/">MongoDB's main website</a>. Since I havn't done this locally, I would recommend doing a little research on how to set things up if you plan on doing so. 
      </p>
      <p>
        After starting the development server I decided to make a seperate file for making my db's endpoints. In my server.js file, I added these lines of code before all of my other routing.
      </p>
      <pre><PrismCode className="language-javascript">
{
`var post = require('./routes/post');
app.use("/", post);`
}
      </PrismCode></pre>
      <p>
        So, I required my post.js file (found in the routes folder at the current directory) and then instructed express to try matching the routes in post.js before trying to match any of the routes in server.js.
      </p>
      <p>
        In the post.js (I named it post.js because it deals exclusively with post comments at the moment) file I imported the needed packages and made an endpoint for posting to the database. This is the final post endpoint that I came up with. 
      </p>
      <pre><PrismCode className="language-javascript">
{
`import express from 'express';
var mongo = require('mongodb').MongoClient;
var router = express.Router();
var url = "mongodb://localhost:27017/test";

router.post('/post-endpoint', function(req, res) {
  var dataString = '';

  req.on('data', function (data) {
      dataString += data;
  });

  req.on('end', function () {
    var data = JSON.parse(dataString)
    var comment = {
      name: data.name,
      comment: data.comment,
      postName: data.postName,
      date: data.date
    }
    
    mongo.connect(url, function(err, db){
      if(err) throw err;
      db.collection('comments').insertOne(comment, function(err, result){
        if(err) throw err;
        console.log('item inserted');
        db.close();
      })
    })
  });
}
`
}
      </PrismCode></pre>
      <p>
        Since this is dealing with asyncronous code, it is best to use callbacks or promises to run code once an event has occured (such as data being captured).Nothing will work properly if you don't use something like a callback. JSON.parse is used because the react code being used is converting the data in a submitted form into json before shipping it off to the server.
      </p>
      <p>
        Let's look at the React code for posting. 
      </p>
      <pre><PrismCode className="language-javascript">
      {
`import React from 'react';
import $ from 'jquery';

class PostComment extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = ({
      name: "",
      comment: ""
    })
  }
  
  handleName(e) {
    this.setState({name: e.target.value})
  }
  
  handleComment(e) {
    this.setState({comment: e.target.value})
  }
  
  handleSubmit(e) {
    e.preventDefault();
    var date = new Date;
    var fullDate = \`\${date.getMonth() + 1}/\${date.getDate()}/\${date.getFullYear()}\`;
    
    var body = {
      name: this.state.name,
      comment: this.state.comment,
      postName: this.props.params.name,
      date: fullDate
    }
    
    $.ajax({
      type: "POST",
      url: "/post-endpoint",
      data: JSON.stringify(body)
    })
    
    this.setState({name: "", comment: ""});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="input">
            <p>Name</p>
            <input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
        </div>
        <div className="input">
            <p>Comment</p>
            <textarea type="text" value={this.state.comment} onChange={this.handleComment.bind(this)}/>
        </div>
        <button type="submit">Comment</button>
      </form>
    )
  }
}
`
      }
      </PrismCode></pre>
      <p>
      If you are familiar with React then everything here should look fairly familar except maybe the JQuery and AJAX portion. The form is using two way binding to update the components state which updates the forms values as well. When the user decides to submit the form, the default refresh of the page is prevented and I get the current date in a readable format. I then made a body object with the current name, comment, date, and the name of the post which is passed in through react-router (I may go over this is a future post if anyone is interested). An AJAX POST request is then made to the post-endpoint, passing in json formatted data. Finally, I set the name and comment state to empty strings. This will clear the fields out after the user has submitted to form as an indication that something happened.
      </p>
      <p>
      Ok, so now one can submit data to the database and it will be saved. Let's go over how to retrieve that data. Back in the post.js I made an endpoint for retrieving data from the database.
      </p>
      <pre><PrismCode className="language-javascript">
{
`router.get('/get-data', function(req,res){
  var resultArray = [];
  
  mongo.connect(url, function(err, db) {
    if(err) throw err;
    
    var data = db.collection('comments').find();
    
    data.forEach(function(item, err) {
      if(err) throw err;
      resultArray.push(item);
    }, function() {
      db.close();
      res.send(resultArray);
    });
  });
})
`
}
      </PrismCode></pre>
      <p>
      .find() on a MongoDB collection will retrieve all of its contents. The data is then looped through and for each item in the collection I pushed it to an array. After all the data is stored in the array, there is a callback function that closes the database (very important!) and sends the array of data off to the source that requested it.
      </p>
      <p>
      Using the same page to get the comments as I used to send them, I then set up an AJAX GET request for getting all comments for a particular post.
      </p>
      <pre><PrismCode className="language-javascript">
{
`class PostComment extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = ({
      name: "",
      comment: "",
      comments: []
    })
  }
  ...
  handleSubmit(e) {
    ...
    this.updateComments();
    this.setState({name: "", comment: ""});
  }
  
  updateComments() {
    $.ajax({
      url: "/get-data",
      success: function(data) {
        var tempComments = data.reduce((arr,comment) => {
          if(comment.postName == this.props.params.name) {
            arr.push(
            <div className="comment">
              <div className="commentName">{comment.name}</div>
              <date>{comment.date}</date>
              <p className="commentBody">{comment.comment}</p>
            </div>)
          }
          return arr;
        },[]);
        this.setState({comments: tempComments})
      }.bind(this)
    })
  }
  
  componentDidMount(){
    this.updateComments();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input">
              <p>Name</p>
              <input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
          </div>
          <div className="input">
              <p>Comment</p>
              <textarea type="text" value={this.state.comment} onChange={this.handleComment.bind(this)}/>
          </div>
          <button type="submit">Comment</button>
        </form>
        {this.state.comments}
      </div>
    )
  }
}
`
}
      </PrismCode></pre>
      <p>
        I added updateComments to run on submit so that a user can see his/her comment appear right after they submit it (without needing to refresh). The AJAX request captures the data that is returned from the server and reduces it to only the comments which are linked to the current post and for each comment that belongs to the post it adds some HTML around the data to make it look better. Finally, the components comments state is set to all the data (now in an array). It is then rendered to the page with this.state.comments :).
      </p>
      <p>
        Now, let's go over how use MongoDB in production with Heroku and MLab. If you are interested about the other CRUD operations (such as update and delete), I will link a video which goes over how to setup those endpoints for the operations below.
      </p>
      <p>
        First you will want to signup and create an account with <a href="https://mlab.com/">MLab.com</a> which is MongoDB hosting. There is a free sandbox version for the single-node plan. After you have created a database on that account with a user you will want to navigate to <a href="https://elements.heroku.com/addons/mongolab">Heroku's MLab addon page</a> to install MLab for your heroku application.
      </p>
      <p>
        Once all of the setup is done. I used Heroku's <a href="https://devcenter.heroku.com/articles/mongolab#connecting-to-existing-mlab-deployments-from-heroku">Connecting to existing mLab deployments from Heroku</a> documentation to setup my application's database configurations in command line. After I was done setting things up, all I had to do was change a line of code in my post.js file.
      </p>
      <pre><PrismCode className="language-javascript">
{
`var url = process.env.MONGODB_URI;`
}
      </PrismCode></pre>
      <p>
      process.env.MONGODB_URI is an environmental variable setup through the command line with Heroku. This is so you do not have to put sensative information directly in your source code.
      </p>
      <p>
      That is the full process of adding a database to websitedevtips.com. I hope you learned something!
      Helpful links below.
      </p>
      <ul>
      <li><a href="https://www.youtube.com/watch?v=ZKwrOXl5TDI">Node.js + Express - Tutorial - Insert and Get Data with MongoDB</a></li>
      <li><a href="https://github.com/evanlucas/learnyoumongo">MongoDB workshop.</a></li>
      <li><a href="https://mlab.com/">MongoDB Hosting</a></li>
      <li><a href="https://community.c9.io/t/setting-up-mongodb/1717">Cloud 9 MongoDB setup documentation</a></li>
      <li><a href="https://www.mongodb.com/">MongoDB website</a></li>
      <li><a href="http://stackoverflow.com/questions/29990809/handling-ajax-with-react">Handling AJAX with React</a></li>
      <li><a href="https://facebook.github.io/react/">React website</a></li>
      <li><a href="https://devcenter.heroku.com/articles/mongolab#connecting-to-existing-mlab-deployments-from-heroku">Connecting to existing mLab deployments from Heroku</a></li>
      <li><a href="https://elements.heroku.com/addons/mongolab">Heroku's MLab addon page</a></li>
      </ul>
    </div>
  },
  {
    name: "comments-update",
    title: "Comments Update",
    time: "2/5/2017",
    mainImage: "colored-pencils.jpg",
    keywords: "update,mongodb,comments",
    tags: "update,mongodb",
    introduction: "I'm happy to announce that you can now comment on websitedevtips.com. This is also a personal milestone for me since this website is officially using the full MERN (MongoDB, Express, React, Node) stack to produce and display content! It feels like I finally have all the colored pencils I need to draw the best picture I can.",
    content:
    <div>
      <p>
      I'm happy to announce that you can now comment on websitedevtips.com. This is also a personal milestone for me, since this website is officially using the full MERN (MongoDB, Express, React, Node) stack to produce and display content! It feels like I finally have all of the colored pencils I need to draw the best picture I can.
      </p>
      <p>
      I've also added search functionality and added better mobile navigation.
      </p>
    </div>
  },
  {
    name: "es6-arrow-functions",
    title: "ES6 Arrow Functions",
    time: "1/27/2017",
    mainImage: "ArrowFunction.jpg",
    keywords: "ECMAScript6,javascript code,javascript,tip,javascript array,js,functional programming",
    tags: "ECMAScript6,javascript,functional programming",
    editor: true,
    introduction: "ECMAScript 6 brings many new features to JavaScript that improve the overall quality of ones code as well as reducing the time it takes to write code. I would like to share one of my favorite additions to the language with you, the arrow function.",
    content:
    <div>
      <p>
       ECMAScript 6 brings many new features to JavaScript that increase productivity and improve readability. I would like to share one of my favorite additions to the language with you, the arrow function.
      </p>
      <p>
      You probably understand what this anonymous function does. It is written in ES5.
      </p>
      <pre><PrismCode className="language-javascript">
        {
`var hi = function(){
  console.log('hello');
};`
        }
      </PrismCode></pre>
      <p>
      By using ES6 arrow function syntax, you can still convey the meaning of the function and significantly reduce the amount of JavaScript.
      </p>
      <pre><PrismCode className="language-javascript">
        {
`var hi = () => {
  console.log('hello');
};`
        }
      </PrismCode></pre>
      <p>
      Another use for arrow functions is in functional programming. For example, you could map out an array of numbers, adding two to each item in the array.
      </p>
      <pre><PrismCode className="language-javascript">
        {
`myArray.map(function(item){
  return item + 2;
})`
        }
      </PrismCode></pre>
      <p>
      Or you could use the arrow function syntax to write the same code in a much shorter and cleaner fashion like below.
      </p>
      <pre><PrismCode className="language-javascript">
        {
`myArray.map(item => item + 2);`
        }
      </PrismCode></pre>
      <p>
      To be clear, arrow functions only make anonymous functions, so you can not make a named function using the syntax. I've also made a short video covering this post below. There is also a challenge you can try below :).
      </p>
      <CodeEditor modes={["javascript"]} test={{include: ["=>","map"], output: ["cats","horses","dogs","tigers","lions","seals","bears"]}}>
      {
`//Use map to add s to each item in my array of animals, make sure to use the arrow function syntax.

var myAnimals = ['cat','horse','dog','tiger','lion','seal','bear'];`
      }
      </CodeEditor>
      <div className="video">
        <video width="540" height="400" controls>
          <source src='/videos/ES6-Arrow-Functions.mp4' type="video/mp4"/>
        </video>
      </div>
      <p>
      If you would like to learn more about arrow functions here are some resources.<br/>
      <Link href="https://www.youtube.com/watch?v=6sQDTgOqh-I">FunFunFunction - Arrow functions in JavaScript</Link><br/>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN Arrow functions</Link>
      </p>
      <small>
      Image is made by myself.
      </small><hr/>
    </div>
  },
  /*{
    id: 1,
    title: "You Don't Know JS",
    content: "For those who have a firm grasp of JavaScript or consider themselves intermediate JavaScript programmers, I would like to offer some resource to."
  },*/
  {
    name: "hello-world",
    title: "Hello World",
    time: "1/21/2017",
    mainImage: "HelloWorld.jpg",
    keywords: "introduction,node.js",
    tags: "introduction",
    introduction: "Welcome to websitedevtips.com! It has been quite an adventure getting everything setup. The backend of this site is built on Node.js and Express, while the frontend is built with React.js.",
    content: 
    <div><p>Welcome to websitedevtips.com! It has been quite an adventure getting everything setup. The backend of this site is built on Node.js and Express, while the frontend is built with React.js.</p>
    <p>
    The goal of this website is to provide small tips that developers can quickly start to implement in their own code. This site will cover many topics in the sphere of web development, so stay tuned :). 
    </p>
    </div>
  },
  {
    name: "an-introduction-to-higher-order-functions",
    title: "An introduction to higher order functions",
    time: "11/11/16",
    mainImage: "wallhaven.jpg",
    keywords: "javascript,functions,high order functions,functional programming",
    tags: "javascript,functional programming",
    introduction: "Higher order functions are often used to reduce the size and complexity of code. They may seem daunting at first, but I assure you that learning how to use them will save you many hours of pondering over for loops among other headaches that can arise from attempting to solve problems without them.",
    content:
    <div>
      <p>
      Higher order functions are often used to reduce the size and complexity of code. They may seem daunting at first, but I assure you that learning how to use them will save you many hours of pondering over for loops among other headaches that can arise from attempting to solve problems without them.
      </p>
      <p>
      I will first go over what these functions are, then I will slowly build up a scenario with examples showing you why they can be useful, and finally I will offer some resources that I've used to learn about this concept.
      </p>
      <p>
      So, A higher order function is a function that returns another function or is passed a function as an argument. That is basically all that makes it different from a normal function.
      </p>
      <p>
      Before we get into writing a higher order function, let's start with a basic function that takes a word as input and outputs that word with an "s" added at the end.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`function addS(word){
  return word + "s";
}

addS("Cat"); // will return "Cats"`
      }
      </PrismCode></pre>
      <p>
      If we wanted to log the result to the console
      </p>
      <pre><PrismCode className="language-javascript">
      {
`console.log(addS("Cat"));`
      }
      </PrismCode></pre>
      <p>
      Now, what if there was an array of words all needing an "s"?
You would probably add a for loop in the addS function like so.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`var animals = ["Cat","Dog","Zebra"];

function addS(array){
  var result = [];
  for(var word in array){
    result.push(array[word] + "s");
  }
  return result;
}

addS(animals); // will return ["Cats","Dogs","Zebras"]`
      }
      </PrismCode></pre>
      <p>
      The for loop will go through each word, add an s to the word, and then push the new word to a result array which we return at the end.
      </p>
      <p>
      But what if there was another array that had a bunch of numbers and we wanted to add two to each number in that array?
      You could do what I did below.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`var numbers = [1,5,7];

function addTwo(array){
  var result = [];
  for(var number in array){
    result.push(array[number] + 2);
  }
  return result;
}

addTwo(numbers); // will return [3,7,9];`
      }
      </PrismCode></pre>
      <p>
      However, there is a lot of repeating code between the addS and the addTwo functions! This is where a higher order function comes in handy.
Let's start by preparing the addS and addTwo functions to be passed into the higher order function.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`function addS(word){
  return word + "s";
}

function addTwo(number){
  return number + 2;
}`
      }
      </PrismCode></pre>
      <p>
      These functions could already be used for single words or numbers, but now we can also use a higher order function to give arrays access to these two functions as well.
I have written the higher order function called loop that will do the job needed.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`function loop(array, action){
  var result = [];
  for(var item in array){
    result.push(action(array[item]));
  }
  return result;
}`
      }
      </PrismCode></pre>
      <p>
      Now, if we put the code together and use it, the result will look like this.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`var numbers = [1,5,7];
var animals = ["Cat","Dog","Zebra"];

function addS(word){
  return word + "s";
}

function addTwo(number){
  return number + 2;
}


function loop(array, action){
  var result = [];
  for(var item in array){
    result.push(action(array[item]));
  }
  return result;
}

loop(numbers, addTwo); // will return [3,7,9]
loop(animals, addS); // will return ["Cats", "Dogs","Zebras"]`
      }
      </PrismCode></pre>
      <p>
      For example, if we were to see the loop function once it was called with loop(numbers, addTwo) , it would look like.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`function loop(numbers, addTwo){
  var result = [];
  for(var item in numbers){
    result.push(addTwo(array[item]));
  }
  return result;
}`
      }
      </PrismCode></pre>
      <p>
      If you have understood this example, congratulations! You now have a basic understanding of higher order functions. There is also a higher order function that is built into JavaScript and will make this code even easier to read and understand.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`var numbers = [1,5,7];
var animals = ["Cat","Dog","Zebra"];

function addS(word){
  return word + "s";
}

function addTwo(number){
  return number + 2;
}

numbers.map(addTwo); // Will return [3,7,9]
animals.map(addS); // Will return ["Cats","Dogs","Zebras"]`
      }
      </PrismCode></pre>
      <p>
      Basically, map can take a function as input and output a modified array according to what that function returns!
      </p>
      <p>
      Some resources that I've really enjoyed on the topic.
      </p>
      <Youtube
        videoId={"BMUiFMZr7vk"}
      /><br/>
      <a href="http://eloquentjavascript.net/05_higher_order.html">http://eloquentjavascript.net/05_higher_order.html</a><hr/>
      Image<br/>

      <a href="https://alpha.wallhaven.cc/wallpaper/33246">https://alpha.wallhaven.cc/wallpaper/33246</a> uploaded by mohammedtt
    </div>
  },
  {
    name: "my-favorite-web-development-resources",
    title: "My favorite web development resources",
    time: "10/31/16",
    mainImage: "bemocs-dribbble.jpg",
    keywords: "codepen,resources,javascript,dribbble,behance,css,html,IDE",
    tags: "resources",
    introduction: "In this post I will go over some of my favorite web development tools and resources! Codepen has to be one of my favorite websites of all time! Basically, you can write html/css/javascript in an environment called a pen and publish it for others to see. The ui is very clean and easy to use and the codepen community is amazing as well. I've seen so many cool projects from browsing Codepen's public pen database; it can be really inspring and motivating! Below, I've included some pens that have impressed me.",
    content:
    <div>
      <p>
      In this post I will go over some of my favorite web development tools and resources!
      </p>
      <div style={{width: "100%",lineHeight: "40px", background: "#49B293"}}>
        <h2 style={{width: "160px", background: '#212A34', textAlign: 'center', color: 'white', textShadow: 'none', marginBottom: '0px'}}>Codepen.io</h2>
      </div>
      <div style={{background: "#eee", margin: "0px"}}>
        <a href="http://codepen.io/">http://codepen.io/</a>
        <p style={{padding: "60px 20px 60px 20px", textIndent: "10px"}}>Codepen has to be one of my favorite websites of all time! Basically, you can write html/css/javascript in an environment called a pen and publish it for others to see. The ui is very clean and easy to use and the codepen community is amazing as well. I've seen so many cool projects from browsing Codepen's public pen database; it can be really inspring and motivating! Below, I've included some pens that have impressed me.</p>
        <Codepen preview={true} height="450" theme="22356" hash="PNXbGo" tab="result" user="zadvorsky"></Codepen>
        <Codepen preview={true} height="450" theme="22356" hash="BKJun" tab="result" user="saransh"></Codepen>
        <Codepen preview={true} height="450" theme="22356" hash="YXxmYR" tab="result" user="Yakudoo"></Codepen>
        <Codepen preview={true} height="450" theme="22356" hash="tqdmv" tab="result" user="at80"></Codepen>
      </div>
      <div style={{width: "100%",lineHeight: "40px", background: "#49B293"}}>
        <h2 style={{width: "160px", background: '#212A34', textAlign: 'center', color: 'white', textShadow: 'none', marginBottom: '0px'}}>Codewars</h2>
      </div>
      <div style={{background: "#eee", margin: "0px"}}>
        <a href="https://www.codewars.com/">https://www.codewars.com/</a>
        <p style={{padding: "60px 20px 60px 20px", textIndent: "10px"}}>This website is a wonderful place to practice using a programming language with puzzles developed by other users of the site. There are programming puzzles for every skill level and many programming languages for every type of programmer. It is also a really nice site to use when you have a few spare minutes and want to practice some programming! I also highly recommend a website called codingame which has a wonderful community and more programming puzzles.</p>
      </div>
      <div style={{width: "100%",lineHeight: "40px", background: "#49B293"}}>
        <h2 style={{width: "160px", background: '#212A34', textAlign: 'center', color: 'white', textShadow: 'none', marginBottom: '0px'}}>Repl.it</h2>
      </div>
      <div style={{background: "#eee", margin: "0px"}}>
        <a href="https://repl.it/">https://repl.it/</a>
        <p style={{padding: "60px 20px 60px 20px", textIndent: "10px"}}>One of the first online ide's (integrated development envoronment) that I used. It is a really nice way to test small snippits of code without needing to make a local file. I've really enjoyed using it because of its simplicity and ease of access.</p>
      </div>
      <div style={{width: "100%",lineHeight: "40px", background: "#49B293"}}>
        <h2 style={{width: "220px", background: '#212A34', textAlign: 'center', color: 'white', textShadow: 'none', marginBottom: '0px'}}>Free Code Camp</h2>
      </div>
      <div style={{background: "#eee", margin: "0px"}}>
        <a href="https://www.freecodecamp.com/">https://www.freecodecamp.com/</a><br/>
        <p style={{padding: "60px 20px 60px 20px", textIndent: "10px"}}>One of the best sites to learn more about web development. The community is wonderful and very helpful, there are hundreds of hours of free content, and its organization is in a very linear fasion so you know exactly what to do next!</p>
      </div>
      <div style={{width: "100%",lineHeight: "40px", background: "#49B293"}}>
        <h2 style={{width: "220px", background: '#212A34', textAlign: 'center', color: 'white', textShadow: 'none', marginBottom: '0px'}}>Dribble and Behance</h2>
      </div>
      <div style={{background: "#eee", margin: "0px",width:"100%"}}>
        <a href="https://dribbble.com/">https://dribbble.com/</a><br/>
        <a href="https://www.behance.net/">https://www.behance.net/</a>
        <p style={{padding: "60px 20px 60px 20px", textIndent: "10px"}}>These sites are communities of designers and are actually quite similar to Codepen! I enjoy looking through them and collecting possible design ideas for projects I want to create. There are some days I just like scrolling through all of the eye candy and admiring the incredible talent of these two communities. Dribbble also has information on the color pallete used in a work which can be very helpful! I've included some interesting dribbble shots below!</p>
        <div style={{width:"100%",display: "flex",flexFlow: "row wrap", justifyContent: "space-between", alignContent: "center"}}>
        <img style={{height: "200px"}} src="https://d13yacurqjgara.cloudfront.net/users/329207/screenshots/3008623/bemocs_rei_4_dribbble.jpg" alt="dribbble image" />

        <img style={{height: "200px"}} src="https://d13yacurqjgara.cloudfront.net/users/66340/screenshots/2580504/atlantic-animation-4.gif" alt="dribbble image" />

        <img style={{height: "200px"}} src="https://d13yacurqjgara.cloudfront.net/users/257709/screenshots/3058528/shot_v5_50_.png" alt="dribbble image" />
        </div>
      </div><br/>
      <div style={{width: "100%",height: "40px", lineHeight: "40px", background: "#49B293"}}>
        <h2 style={{width: "160px", background: '#212A34', textAlign: 'center', color: 'white', textShadow: 'none', marginBottom: '0px'}}>Extras</h2>
      </div>
      <div style={{background: "#eee", margin: "0px"}}>
        <b>Awwwards</b><br/>
          <a href="http://www.awwwards.com/">http://www.awwwards.com/</a><br/>
          A really interesting site that gives awards to websites based on critera such as creativity and design.<br/>
        <b>Coolors.co</b><br/>
          <a href="https://coolors.co/">https://coolors.co/</a><br/>
          A color pallete generator and library that I enjoy using.<br/>
      </div><hr/>
      Images<br/>
      <a href="https://dribbble.com/shots/1222571-Code-it">https://dribbble.com/shots/1222571-Code-it</a> by Griffin Moore<br/>
<a href="https://dribbble.com/shots/2580504-Loading-Animation">https://dribbble.com/shots/2580504-Loading-Animation</a> by Alex Sailer<br/>
<a href="https://dribbble.com/shots/3008623-REI-End-of-Summer">https://dribbble.com/shots/3008623-REI-End-of-Summer</a> by Brian Edward Miller<br/>
<a href="https://dribbble.com/shots/3058528-landing-page">https://dribbble.com/shots/3058528-landing-page</a> by uixNinja
    </div>
  },
  {
    name: "how-to-make-a-programming-language-in-javascript",
    title: "How to make a programming language in JavaScript",
    time: "10/23/16",
    mainImage: "logo_JavaScript.png",
    keywords: "programming,javascript,language,parser,token,lexer,node.js,node",
    tags: "javascript,tutorial,node",
    introduction: "For my first post, I have decided to write about something that has been quite interesting to me lately. I do not expect you to understand everything from this post! The only things I really want you to take away are a feeling for how awesome JavaScript can be and maybe a basic understanding of how to go about making a new programming language. It blows my mind that one can use a language such as JavaScript to create a whole new way of thinking and creating.",
    content: 
    <div>
      <p>
      For my first post, I have decided to write about something that has been quite interesting to me lately. I do not expect you to understand everything from this post! The only things I really want you to take away are a feeling for how awesome JavaScript can be and maybe a basic understanding of how to go about making a new programming language. It blows my mind that one can use a language such as JavaScript to create a whole new way of thinking and creating.
      </p>
      <p>
      I will start with the setup and then I will explain the structure of a compiler which will compile the new language into JavaScript. Once I have gone over the setup and the structure of a compiler, I will briefly explain in detail how the compiler turns one language into another! There will be links to a few resources I've found helpful at the bottom.
      </p>
      <p>
      The first step to setup for creating a programming language in JavaScript is downloading Node.js. Node.js gives the ability to run JavaScript outside the browser. This is useful for reading the files of the new language, running them through the compiler, and either executing all the compiled contents or pushing new files back out that are written in JavaScript so that they could possibly be run in the browser. The only other thing required is a text editor.
      </p>
      <p>
      Once Node.js is installed a command prompt with node will be available which is what will be used to communicate with the JavaScript files on the computer. The cd command in the command prompt is then used to navigate to the desired directory where the compiler and the new language files are located. Once in the correct directory, the following command is what can be used to send the data of the new language file to the compiler.
      </p>
      <pre><PrismCode className="language-bash">
      {`node compiler.js newLang.junk`}
      </PrismCode></pre>
      <p>
      But for this to work there needs to be a few lines of code inserted into the compiler which I will explain later after I go over the structure of a compiler.
      </p>
      <p>
      The structure of a compiler consists of a lexer and a parser. The lexer will take the text given to it and attempt to decipher the text. While the lexer runs through the text it outputs tokens of information about the text. These tokens contain information such as where a variable is, if there is a conditional statement, strings, numbers, expressions, and many other bits of information that will be useful when passed to the parser. The parser will then decide what to do with the tokens and run JavaScript or the language it is written in to execute the decisions it has made. I’ve made a small example below depicting the flow of our new language through the compiler.
      </p>
      <p>
      Language(JunkScript):
      </p>
      <pre><PrismCode className="language-bash">
      {
      `"Hello World"
MAKE VAR CandyBars >>> (5)
MAKE VAR Money >>> (500)
MAKE VAR CandyBarsCost >>> (200)
MAKE VAR TotalCost >>> (_CandyBars * _CandyBarsCost)
SHOUT _TotalCost`
      }
      </PrismCode></pre>
      <p>
      Lexer:
      </p>
      <pre><PrismCode className="language-bash">
      {
`"STRING: Hello World"
"VAR: CandyBars"
"EQUALS"
"NUM: 5"
"VAR: Money"
"EQUALS"
"NUM: 500"
"VAR: CandyBarCost"
"EQUALS"
"NUM: 200"
"VAR: TotalCost"
"EQUALS"
"EXPR: (CandyBars * CandyBarCost)"
"PRINT"
"VAR: TotalCost"`
      }
      </PrismCode></pre>
      <p>
      Parser(JavaScript):
      </p>
      <pre><PrismCode className="language-javascript">
      {
`"Hello Word";
CandyBars = 5;
Money = 500;
CandyBarCost = 200;
TotalCost = CandyBars * CandyBarCost;
console.log(TotalCost);`
      }
      </PrismCode></pre>
      <p>
      Now, for the compiler to actually be useful it needs to get the data from the file with the new language, this is where node is very useful. All that is required are a few lines of JavaScript code that will send the data from a file into the compiler.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`var fs = require(‘fs’);
fs.readFile(process.argv[2], function(err, data){
  if(err){
    return console.log(err);
  }
  compiler(data);
}`
      }
      </PrismCode></pre>
      <p>
      The first line is getting the fs module from the node package manager(npm is a way to import useful tools to be used in programs). The fs module has a method called readfile which is used to read the third command line value. Now we can use that node command I explained earlier to get the new language file and send it's contents to the compiler. If there are any errors no data will be compiled and instead an error message should be returned.
      </p>
      <p>
      The compiler then takes this data and runs it through the lexer and parser.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`function compiler(fileData){
  var tokens = lexer(fileData);
  parser(tokens);
}`
      }
      </PrismCode></pre>
      <p>
      And there it is! The structure for a compiler. Now let's go a little deeper into how the compiler compiles.
      </p>
      <p>
      The lexer in the real compiler I created before writing this post reads each character in the program file given to it. There is a tok(token) variable that has a character added to it after each new character is read. When the tok variable matches something significant such as SHOUT or VAR it is reset and a token representing that match is added to an array which will end up being sent off to the parser. Below is a simple representation of what I've described above.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`tokens = [];

lex(file){
  file = file.split('');
  for(x in file){
    char = file[x];
    tok += char;

    if(tok.match("SHOUT")){
      tokens.push("SHOUT");
      tok = "";
    }
  }
  return tokens
}`
      }
      </PrismCode></pre>
      <p>
      The parser then reads through the tokens and deciphers them into actions to be taken.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`parser(tokens){
  var i = 0;
  while(i &lt; tokens.length){
    var token = tokens[i]
    if(token == "PRINT"){
      console.log(tokens[i+1]);
    }
    i++
  }
}`        
      }
      </PrismCode></pre>
      <p>
      If I wanted to output a JavaScript file instead of executing actions in the parser I would only need to change a few lines of code. The dots represent code that I excluded for the example.
      </p>
      <pre><PrismCode className="language-javascript">
      {
`compiledData = "";

parser(tokens){
...
  if(token == "PRINT"){
    compiledData += "console.log(\"" + tokens[i+1] + "\");"
  }
  i++
}

fs.writeFile('compiledFile.js', compiledData, function(err){
  if(err){
    return console.log(err);
  }
})`
      }
      </PrismCode></pre>
      <p>
      That is how you can make your own programming language in JavaScript!
      </p><br/>
      <b>Resources</b><br/>
      Node.js<br/>
      <a href="https://nodejs.org/en/">Node.js</a><br/>

      Good explanations of lexer and parser<br/>
      <a href="http://savage.net.au/Ron/html/graphviz2.marpa/Lexing.and.Parsing.Overview.html">http://savage.net.au/Ron/html/graphviz2.marpa/Lexing.and.Parsing.Overview.html</a><br/>
      Tutorials for making a basic programming language in python.<br/>
      <a href="https://www.youtube.com/playlist?list=PLBOh8f9FoHHiKx3ZCPxOZWUtZswrj2zI0">https://www.youtube.com/playlist?list=PLBOh8f9FoHHiKx3ZCPxOZWUtZswrj2zI0</a>
      <p>(First video below)</p>
      <Youtube
        videoId={"pWAxiKdJF0c"}
      />
    </div>
  }
]

PostData = PostData.map((post,i) => {
  post.id = PostData.length - (i+1);
  return post;
});

export default PostData;
