import React from 'react';
import Highlight from 'react-highlight';
import { Link } from 'react-router';

const PostData = [
  /*{
    id: 2,
    name: "snippet-tuesday-1",
    title: "Snippet Tuesday #1",
    time: "1/31/2017",
    mainImage: "ArrowFunction.jpg",
    keywords: "",
    tags: "",
    introduction: "",
    content:
    <div>
      <p>
      I had the idea to go over a snippets of code that I am using in this website and in other projects every tuesday. I will explain the use of the code and then walk through each part of it. I think this will be helpful for those seeking to understand and learn from real world examples of JavaScript code.
      </p>
      <Highlight className="javascript">
{
`let postTags = PostData.map(post => post.tags).join(',');
let allTags = postTags.split(',').reduce((obj, tag) => {
obj[tag] = ++obj[tag] || 1;
return obj;
},{});
let tagsWithCount = [];
for(var key in allTags){
tagsWithCount.push(<Link className="tag indexTag" to={\`/tags/\${key.split(' ').join('-')}\`}>{key} - <span>{allTags[key]}</span></Link>);
}
return (
//includes option to restrict how many tags are shown.
<div className="tags">{tagsWithCount.slice(0,this.props.length || tagsWithCount.length)}</div>
);`
}
      </Highlight>
    </div>
  },*/
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
      By using ES6 arrow function syntax, you can still convey the meaning of the function and significantly reduce the amount of JavaScript as well.
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
      To be clear, arrow functions only make anonymous functions so you can not make a named function using the syntax. I've also made a short video covering this post below.
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
    introduction: "Welcome to my website! It has been quite an adventure getting everything setup! I was using FileZilla, but after some thinking I decided that to take advantage of being able to use a registered domain name. The backend of this site is built on Node.js and the frontend is built in React.js. Since bluehost doesn't have support for Node.js as far as I could tell, I pushed the website to Heroku and pointed my registered domain name to my Heroku app.",
    content: <div><p>Welcome to my website! It has been quite an adventure getting everything setup! I was using FileZilla, but after some thinking I decided that to take advantage of being able to use a registered domain name. The backend of this site is built on Node.js and the frontend is built in React.js. Since bluehost doesn't have support for Node.js as far as I could tell, I pushed the website to Heroku and pointed my registered domain name to my Heroku app.</p></div>
  }
]

export default PostData;
