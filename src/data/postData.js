import React from 'react';
import Highlight from 'react-highlight';
import { Link } from 'react-router';

const PostData = [
  {
    id: 3,
    name: "adding-mongodb",
    title: "Adding MongoDB",
    time: "2/5/2017",
    mainImage: "mongodb-logo.png",
    keywords: "mongodb,database,MERN,mern,react,node,express,jquery,ajax",
    tags: "mongodb,react,jquery,ajax",
    introduction: "I would like to go over how I integrated MongoDB with my existing application and used it to add a commenting database (and soon a contact database as well). I will also share some resources that I found invaluable for this adventure at the end. I'm doing this because I would like to share the experience of setting up a database, but also because I would like to have some personalized documentation on this subject when I need to setup MongoDB in the future.",
    content:
    <div>
      <p>
      I would like to go over how I integrated MongoDB with my existing application and used it to add a commenting database (and soon a contact database as well). I will also share some resources that I found invaluable for this adventure at the end. I'm doing this because I would like to share the experience of setting up a database, but also because I would like to have some personalized documentation on this subject when I need to setup MongoDB in the future. 
      </p>
      <p>
      First, I downloaded the MongoDB npm (node package manager) package and saved it to my package.json for later production use.
      </p>
      <Highlight className="bash">
{
`npm install --save mongodb`
}
      </Highlight>
      <p>
      I am using Cloud 9 so I just followed to recommended directions offered by Cloud 9 for setting up a MongoDB development server. If you are doing this on your local machine you will need to download MongoDB from <a href="https://www.mongodb.com/">MongoDB's main website</a>. Since I havn't done this locally, I would recommend doing a little research on how to set things up if you plan on doing so. 
      </p>
      <p>
        After starting the development server I decided to make a seperate file for making my db's endpoints. In my server.js file, I added these lines of code before all of my other routing.
      </p>
      <Highlight className="javascript">
{
`var post = require('./routes/post');
app.use("/", post);`
}
      </Highlight>
      <p>
        So, I required my post.js file (found in the routes folder at the current directory) and then instructed express to try matching the routes in post.js before trying to match any of the routes in server.js.
      </p>
      <p>
        In the post.js (I named it post.js because it deals exclusively with post comments at the moment) file I imported the needed packages and made an endpoint for posting to the database. This is the final post endpoint that I came up with. 
      </p>
      <Highlight className="javascript">
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
      </Highlight>
      <p>
        Since this is dealing with asyncronous code, it is best to use callbacks or promises to run code once an event has occured (such as data being captured).Nothing will work properly if you don't use something like a callback. JSON.parse is used because the react code being used is converting the data in a submitted form into json before shipping it off to the server.
      </p>
      <p>
        Let's look at the React code for posting. 
      </p>
      <Highlight className="javascrip">
      {
`
import React from 'react';
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
      </Highlight>
      <p>
      If you are familiar with React then everything here should look fairly familar except maybe the JQuery and AJAX portion. The form is using two way binding to update the components state which updates the forms values as well. When the user decides to submit the form, the default refresh of the page is prevented and I get the current date in a readable format. I then made a body object with the current name, comment, date, and the name of the post which is passed in through react-router (I may go over this is a future post if anyone is interested). An AJAX POST request is then made to the post-endpoint, passing in json formatted data. Finally, I set the name and comment state to empty strings. This will clear the fields out after the user has submitted to form as an indication that something happened.
      </p>
      <p>
      Ok, so now one can submit data to the database and it will be saved. Let's go over how to retrieve that data. Back in the post.js I made an endpoint for retrieving data from the database.
      </p>
      <Highlight>
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
      </Highlight>
      <p>
      .find() on a MongoDB collection will retrieve all of its contents. The data is then looped through and for each item in the collection I pushed it to an array. After all the data is stored in the array, there is a callback function that closes the database (very important!) and sends the array of data off to the source that requested it.
      </p>
      <p>
      Using the same page to get the comments as I used to send them, I then set up an AJAX GET request for getting all comments for a particular post.
      </p>
      <Highlight className="javascript">
{
`
class PostComment extends React.Component {
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
      </Highlight>
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
      <Highlight className="javascript">
{
`var url = process.env.MONGODB_URI`
}
      </Highlight>
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
    id: 2,
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
      I've also added search functionality and added a better mobile navigation system.
      </p>
    </div>
  },
  {
    id: 1,
    name: "es6-arrow-functions",
    title: "ES6 Arrow Functions",
    time: "1/27/2017",
    mainImage: "ArrowFunction.jpg",
    keywords: "ECMAScript6,javascript code,javascript,tip,javascript array,js,functional programming",
    tags: "ECMAScript6,javascript,functional programming",
    introduction: "ECMAScript 6 brings many new features to JavaScript that improve the overall quality of ones code as well as reducing the time it takes to write code. I would like to share one of my favorite additions to the language with you, the arrow function.",
    content:
    <div>
      <p>
       ECMAScript 6 brings many new features to JavaScript that increase productivity and improve readability. I would like to share one of my favorite additions to the language with you, the arrow function.
      </p>
      <p>
      You probably understand what this anonymous function does. It is written in ES5.
      </p>
      <Highlight className="javascript">
        {
`var hi = function(){
  console.log('hello');
};`
        }
      </Highlight>
      <p>
      By using ES6 arrow function syntax, you can still convey the meaning of the function and significantly reduce the amount of JavaScript.
      </p>
      <Highlight className="javascript">
        {
`var hi = () => {
  console.log('hello');
};`
        }
      </Highlight>
      <p>
      Another use for arrow functions is in functional programming. For example, you could map out an array of numbers, adding two to each item in the array.
      </p>
      <Highlight className="javascript">
        {
`myArray.map(function(item){
  return item + 2;
})`
        }
      </Highlight>
      <p>
      Or you could use the arrow function syntax to write the same code in a much shorter and cleaner fashion like below.
      </p>
      <Highlight className="javascript">
        {
`myArray.map(item => item + 2);`
        }
      </Highlight>
      <p>
      To be clear, arrow functions only make anonymous functions, so you can not make a named function using the syntax. I've also made a short video covering this post below.
      </p>
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
    id:0,
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
  }
]

export default PostData;
