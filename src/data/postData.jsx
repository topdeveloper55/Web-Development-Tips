import React from 'react';
import Highlight from 'react-highlight';
import { Link } from 'react-router';

const PostData = [
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
      ECMAScript 6 brings many new features to JavaScript that improve the overall quality of ones code as well as reducing the time it takes to write code. I would like to share one of my favorite additions to the language with you, the arrow function.
      </p>
      <p>
      You probably understand what this anonymous function does. It is written in a standard pre ECMAScript 6 way.
      </p>
      <Highlight className="javascript">
        {
`var hi = function(){
  console.log('hello');
};`
        }
      </Highlight>
      <p>
      By using ES6 arrow function syntax, you can still convey the meaning of the code but also significantly reduce its size.
      </p>
      <Highlight className="javascript">
        {
`var hi = () => {
  console.log('hello');
};`
        }
      </Highlight>
      <p>
      Another use for arrow functions is in functional programming. For example, you could map out an array of numbers like so..
      </p>
      <Highlight className="javascript">
        {
`myArray.map(function(item){
  return item + 2;
})`
        }
      </Highlight>
      <p>
      Or you could use the arrow function syntax to write the same code like below.
      </p>
      <Highlight className="javascript">
        {
`myArray.map(item => item + 2);`
        }
      </Highlight>
      <p>
      To be clear, arrow functions only make anonymous functions. You can not make a named function using the arrow syntax.
      </p>
      <p>Below is a video covering this post</p>
      <video width="540" height="450" controls>
        <source src='/videos/ES6-Arrow-Functions.mp4' type="video/mp4"/>
      </video>
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
