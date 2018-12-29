###  Introduction to Web Development

#### Section 1: Front-End Basics

##### HTML

```html
<! DOCTYPE html>
```

This declaration tells us brower that this is a HTML document and that we intend to use HTML5

```html
<head>
</head>
```

designate metadata and to link external files

```html
<script>
</script>
<script src='./app.js'></script>
```

Load and execute Javascript Files

```html
<link rel="stylesheet" href="./style.css">
```

used to link to CSS Stylesheets. *rel* refers to the relationship between the current document and external sheet.

|  Content  |                         Description                          |
| :-------: | :----------------------------------------------------------: |
| <header>  |       Encapsulates content that belongs in the header        |
| <footer>  |       Encapsulates content that belongs in the footer        |
|  <main>   |  represents the main content of the `<body>` of a document   |
| <section> | The HTML `<section>` element represents sections of the document, typically similar content that is grouped together |
|  <aside>  | Designates secondary content or content that is aside from the main section. |
|   <div>   |                 Divides areas on a webpage.                  |

**Navigation:**

Intended for major blocks of navigation links.

**Linking:**

Linking to external sources in a new tab/window

```html
<a href='https://www.facebook.com' target='_blank'>Go to Facebook</a>
```

Linking to sections within the same html document:

```html
  <section id='lastSection'>
    <p>blah blah blah blah</p>
  </section>
```

```html
<a href='#lastSection'>Go to the last section</a>
```

Section identified by id.

**Lists**:

* Ordered Lists

  * ```html
    <ol>
        <li>item 1</li>
    </ol>
    ```

* Unordered Lists

  * ```html
    <ul>
        <li>cool unordered</li>
    </ul>
    ```

**Tables**

|   tag   |                 description                  |
| :-----: | :------------------------------------------: |
| <table> |        Used to create tables in HTML         |
| <thead> |     Sets apart the labels from the data      |
|  <tr>   |           Declares a new table row           |
| <tbody> |           construct body of table            |
|  <th>   | Defines a table header cell in an HTML table |
|  <td>   |   defines a standard cell in HTML Document   |

**HTML Forms**

HTML Forms are one of the primary points of interaction between a user and a website. They allow users to send data using a HTTP Request.

```
<form action="https://bloc.io/users/add" method="post">
    <!-- form input tags below -->
</form>
```

The `<form>` tag tells the browser where the form starts and ends. This element is a parent tag that contains child element tags. The `action="https://bloc.io/users/add"` attribute on the `<form>` tag specifies where to send the form data when submitted. The destination can be an absolute URL or relative URL. The `method="post"` attribute on the `<form>` tag specifies the HTTP method used when sending the form data. The options are `GET` or `POST`.

**Input Element in HTML Forms**

The `<input>` element is what a user typically 
interacts with when using a form. Users use them to enter their name, 
address, phone number, upload a picture or file, select an item from a 
drop-down or enter a password. The `<input>` tag is a self-closing tag, meaning it does not require a closing tag like the `<form>` tag does.

How an `<input type="text" id="" name="">` works depends on the value of the `type` attribute. If not specified the default type is `text`.

- `button`
- `checkbox`
- `color`
- `date`
- `datetime-local`
- `email`
- `file`
- `hidden`
- `image`
- `month`
- `number`
- `password`
- `radio`
- `range`
- `reset`
- `search`
- `submit`
- `tel`
- `text`
- `time`
- `url`
- `week`

**Label Element in HTML Forms**

The `<label>` element defines a label for an `<input>` element. The `for` attribute of `<label for="">` should be equal to the `id` attribute of the related `<input>`

```html
<form action="form.php" method="post">
    <input type="email" id="emailInput">
    <label for="emailInput">Email</label>
</form>
```

**Field Set in HTML Forms**

Field Set is used to group **Inputs** and **Labels** within a form. 

```html
<form action-"form.php" method="post">
    <fieldset>
        <input type="email" id="Your Email">
    	<label for "Your Email">Your Email</label>
    	<input type="Submit" value="Submit">
    </fieldset>
</form>
```

**Adding Menu Options to HTML Tags**

The `<select>` element represents a form control that provides a menu of options. You can default the selection to one item using `selected` in one of its `<option>` tags.

```html
<!-- The second value will be selected initially -->
<select name="type">
  <option value="Phone">Phone</option>
  <option value="Email" selected>Email</option>
  <option value="Text">Text</option>
</select>
```

**Media in HTML Tags**

Image Tags:

```html
<img src='./images/logo.png' alt='Logo for Bloc.io'>
```

**Making Sites Accessible**

1. Use tables for tabular data, not for layouts!
2. Whenever possible, use tags that describe the content that exists inside the tag. Remember that HTML5 has given us a wealth of [more descriptive tags](https://www.w3schools.com/html/html5_semantic_elements.asp). Be semantic!
3. Use `<label>` tags in your forms. Properly connect them to their corresponding input fields.
4. Understand that about 8% of the population struggle with red-green  color deficiency and other kinds of colorblindness. Use strongly  contrasting colors and ensure that all notification or error text is  large, bold, and easy to read.
5. Avoid creating nested drop-downs that require fine motor skills to operate.

Non-Accessible Code:

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Cats are the best!</title>
  </head>
  <body>
    <table>
      <tr>
        <td>Sidebar will go here</td>
        <td id='main'>
          <h2>My awesome site</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Check out this cat:
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg">
            <br>
            <br>
            <br>
          </p>
          <h1>Isn't it a great cat?!?</h1>
        </td>
      </tr>
    </table>
  </body>
</html>
```



##### Cascade Style Sheet Basics

CSS describes how HTML Elements display on a website. The key to understand CSS is to understand **selectors**. Selectors allow us to retrieve specific HTML Elements and apply styles to them so that we can we make beautiful websites.

**Ways to add in Cascade Style Sheets**:

* Inline Styling

```html
<p style="color: black; font-size: 1.1em;">I am a styled paragraph.</p>
```

* Internal Styling

This should be used when a single document has a unifying style

```html
<head>
    <style>
      h1 { color: black; }
      p { font-size: 1.1em; }
    </style>
</head>
```

* External Styling

Recommended practice

```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

The ```link``` tag links the HTML document to the style sheet ```style.css```

```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

#### CSS Selectors

Suppose that we have a style worksheet

```css
body {
  color: black;
  font-size: 1.5em;
}
h1 {
  color: azure;
}
#iamanid {
  font-size: 1.5em;
}
.iamaclass {
  color: purple;
}
```

##### Tag Selector

In the example above, `body` and `h1` are tag selectors. A tag selector must match one or more HTML elements of the same name. In other words, a selector of `body{}` would match the HTML `<body>` element while a selector of `nav{}` would match all HTML `<nav>` elements.

##### ID Selector

An ID selector is declared using a hash symbol preceding a string of characters, in our example above, `#iamanid`.
This selector matches any HTML element that has an ID attribute with 
the same value as that of the selector. In the case of an ID selector 
the type of element does not matter, it can be any HTML element; so long
as an element has an ID, it can be selected with an ID selector. 
Because IDs are unique, you should only have one element with a specific
ID. This constraint makes ID selectors inflexible because the styles 
used in the ID selector can be used only once per HTML document.

##### Class Selectors

The class selector is declared with a dot preceding a string, in our example above, `.iamaclass`.
The class selector matches all elements on the page that have matching 
class names. We can reuse styling by having multiple elements with the 
same class name.

##### Descendant Combinator

The descendant selector or the descendant combinator lets you combine  two or more selectors to be more specific in your selection method. For  example, you can do something like the following:

```CSS
#outerelement .innerelement {
  float: left;
}
```

This selector will apply to all elements that have a class of `innerelement` that are inside an element with an ID of `outerelement`.  You should use caution when using the descendant combinator in CSS, as  they can unnecessarily restrict styles to a specific context. The  example selector restricts styles to the `.innerelement`'s inside of `#outerelement`.

##### Child Combinator

A selector that uses the child selector or child combinator is  similar to a descendant combinator, except that it targets only  immediate child elements.

```CSS
#outerelement > .innerelement {
  float: left;
}
```

In  the example above, the selector is the selector from the descendant  combinator, differing only in that instead of a space character, we use a  greater than symbol `>`. This selector matches all elements that have a class of `innerelement` that are immediate children of the `#outerelement` element. There can't be another element wrapping `.innerelement`.

Here is an example where `.innerelement` is an immediate child of `#outerelement`:

```HTML
<div id = "outerelement">
  <div class = "innerelement"></div>
</div>
```

 ##### Pseudo-Classes

##### State Selector: Select Element by a Specific State !!!!

A CSS pseudo-class selector is a keyword added to a selector that 
specifies a specific state of the selected element. Let's look at a few 
common ones:

- `:hover` - We use the `:hover` pseudo-class to style an element when the user's pointer or mouse is above it. Like when a user hovers over a link.

```CSS
a:hover{}
```

> `a` here denotes a generic anchor tag.

- `:active` - We use the `:active` pseudo-class to style an activated element, for example, a tapped element on a touchscreen device.

```CSS
a:active{}
```

- `:visited` - We use the `:visited` pseudo-class to style visited links.

```CSS
a:visited{}
```

- `:first-child` - The `:first-child` CSS pseudo-class represents the first element among a group of sibling elements.

```CSS
li:first-child{}
```

- `:last-child` - We use the `:last-child` pseudo-class to select the last child of its parent element.

```CSS
li:last-child{}
```

- `:nth-child` - We use the `:nth-child` pseudo-class to select the nth child of its parent element. To target the second child of a parent element:

```CSS
li:nth-child(2){}
```

##### CSS Properties and Values

**CSS Property:** When using CSS for styling HTML  documents, you will be using different CSS properties to tell the web  browser what you want to do with the HTML element you have selected. For  instance, if you wanted to change the background color of an element,  you would use the **background** property.

**CSS Value of Property:** Each CSS property has a value  associated with it. Most CSS properties have multiple values you can  use to change the appearance of HTML. For the **background**  example above you can use a color as the property value. You can use  hex (#3f51b5), RGB (63, 75, 181), HSLa (170, 50%, 45%, 1), or the actual  color (blue).

Here is an example of changing the background of the body element of an HTML document.

```css
    body {
      background: blue;
    }
```

This example shows the general format of a CSS property and value. First, you have a property called **background**, followed by a colon `:` and the value of that property *(in this case, \**blue**)*, with a final semi-colon `;` at the end.

```undefined
     property   value
        |         |
    background: blue;
              |     |
            colon   semi-colon
```

## 

##### Creating a Save Button



#### LAYOUTS !!

There are three different techniques when using CSS to lay out a web page:

1. The box model *- The most tenured and still most prevalent of all the layout techniques.*
2. The flexbox model *- Gaining popularity quickly.*
3. The grid model *- Bleeding edge. Only supported on browsers released in the last year or so.*

The box model is the most well known, so that is what we'll cover in  this checkpoint. We strongly encourage you to spend some time  researching the flexbox and grid models separately though.





Q1.List the three different ways to create layouts for a site:

* Using the Box Model
* Using the flexbox model
* Using the grid model

Q2.List the steps one could use to alter a website's CSS in the Chrome Developer Tools.

* Right click the webpage, select **Inspect Element**, find the **Styles** section on the top rightbox. Add/remove CSS Rules, and thereby see changes in real time.



```html
<!DOCTYPE html>
<html>
    <head>
        <title>Wierstrass Restaurant</title>
        <link rel="stylesheet" type="text/css" href="restaurant.css">
    </head>
    <body>
        <h2 id="title">Welcome to Wierstrass Restaurant</h2>
        <nav class="left_column" id="navigation">
            <h3>Navigation</h3>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#reservation">Reservation</a></li>
                <li><a href="#menu">Menu</a></li>
            </ul>
        </nav>
        <div class="right_column" id="container">
            <table class="menu">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Salad</td>
                        <td>Delicious Salad</td>
                        <td>$5.55</td>
                    </tr>
                    <tr>
                        <td>Berger</td>
                        <td>Delecious Berger</td>
                        <td>$44.44</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>
```

```css
body {
    background-image: url("./images/math-cover.jpg");
    background-repeat: repeat;
    background-attachment: fixed;
}

#title{
    width: 100%; 
    text-align: center; 
    line-height: 3.11em;
    color: purple;
    margin: 10px 20px 10px;
}

.left_column{
    width: 30%;
    float: left;
    margin: -1px;
    padding-bottom: 500em;
    margin-bottom: -500em;
}

nav > h3{
    color: blue;
}
.right_column{
    width: 50%;
    float: left;
    border-left: 6px solid blueviolet;
    padding-bottom: 500em;
    margin-bottom: -500em;
}
table.menu{
    position: relative;
    width: 100%;
    padding-left: 180px;
    padding-top: 19px;
}

table.menu td, table.menu th {
    border: 1px solid #AAAAAA;
    padding: 3px 2px;
  }
  table.menu tbody td {
    font-size: 13px;
  }
  table.menu tr:nth-child(even) {
    background: #D0E4F5;
  }
  table.menu thead {
    background: #1C6EA4;
    background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
    background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
    background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
    border-bottom: 2px solid #444444;
  }
  table.menu thead th {
    font-size: 15px;
    font-weight: bold;
    color: #FFFFFF;
    border-left: 2px solid #D0E4F5;
  }
  table.menu thead th:first-child {
    border-left: none;
  }
  
  table.menu tfoot {
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    background: #D0E4F5;
    background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
    background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
    background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
    border-top: 2px solid #444444;
  }
  table.menu tfoot td {
    font-size: 14px;
  }
  table.menu tfoot .links {
    text-align: right;
  }
  table.menu tfoot .links a{
    display: inline-block;
    background: #1C6EA4;
    color: #FFFFFF;
    padding: 2px 8px;
    border-radius: 5px;
  }
```



### Front-end Framework

A **Front-end Framework** consists of files and folders of standarlized HTML, CSS and JS documents. They usually contain the following components:

* Typography style definitions for HTML elements, including icons, buttons, forms, and modal windows.
* Creation of standard CSS classes to style user interface components.
* CSS source code to create a *grid* that allows developers to position elements in a simple and versatile fashion.
* Solutions for browser incompatibility issues that might arise, so the site displays correctly in all browsers.

**1. BootStrap**

**2. Foundation**

**3.Material Design**

**How to decide which framework to use?**

- **Ease of Use and Fit**: First and foremost, the framework should be a fit for your project *stylistically*.
- **Popularity**: The user base and contributor base are  both worth considerations. How many people are using the framework?  Whether you go with Bootstrap, Foundation, or Material Design, a larger  user base indicates a thoroughly tested framework, as well as  third-party support via templates and extensions.
- **Development and Maintenance**: How frequent are new  releases? Who is developing the framework? Frequent changes in the code,  including regular bug fixes and acceptance of pull requests, indicates a  robust ecosystem that makes the framework better.
- **Learnability and Documentation**: How detailed and  clear is the official documentation? Does it have code samples or  templates that are helpful and easy to understand? The quickness with  which you and your team members will be able to learn the framework can  be a deciding factor.

I've learned that development is an integral process and that requires us to select a pack of tools (editors, browsers and etc.) that we are comfortable working with.

I have no trouble setting the system up at all.









### JavaScript Basics

|          Name           |            Description             |
| :---------------------: | :--------------------------------: |
| Declaration of Variable |        ```var bestFriend```        |
|       Assignment        |         bestfriend = name;         |
|    Naming Convention    |        1. always use nouns         |
|                         | 2. be specific enough to identify  |
|                         | 3. never include abbreviated words |

**Declaring Variables with const and let**

```const```

We use `const` to declare a variable that we won't reassign a new value to. Using `const` is a good choice if you have data that will not change over the course of your program.

### `let`

Like `var`, when we see `let` used in a program  we know we can reassign a different value to the variable later.  However, while a variable defined inside of a function with `var` is scoped to the *entire function* no matter where in the function it is defined, `let` allows us to scope a variable to a particular **block** of code enclosed by a set of curly brackets `{}`. As you'll see in future checkpoints, we typically choose to use `let` when declaring the **iterator** in a **loop**, variables in a **conditional**, or when writing mathematical programs.

Read the following code. What do you think will happen when you run it?

```javascript
function greet(name){
  if(name == 'James'){
    let nickName = 'Jimbo';
  }
  return 'Hey ' + nickName;
}
```



#### Arrays in JavaScript

Creating an Array:

* Array Literal

```javascript
let clothes - [];
```

* Constructor Method

```
let clothes = new Array();
```

**Function Declaration**

```javascript
function foo(){
    // This is Something
}
```

**Function Expression**

```javascript
const salutations = function hello(firstName,lastName){
    return "Hello" + firstName + "" + lastName;
};
```

**Arrow Function Expression**

```javascript
const salutations = (firstName, lastName) => {
  return "Hello" + firstName + " " + lastName;
};
salutations("Srinivasa", "Ramanujan");
```

**Note that the syntax for an arrow function differswhen it has 1 or no parameter**

One Parameter:

```javascript
const newPrice = originalPrice => {
  return originalPrice * 0.5;
};
newPrice(110); // This will return 55
```

No Parameter:

```javascript
const sayHello = () => "Hello";
```

**Enumerable Functions**

```map()```

```javascript
var array = [10, 20, 30];
var timesThree = array.map(item => item * 3);
console.log(array); // logs [10, 20, 30]
console.log(timesThree); // logs [30 ,60 ,90]
```

## `filter()` Function

The `filter()` function iterates over each item in an array and keeps items when the condition is `true`.

```javascript
var array = [10, 20, 30];
var lessThan25 = array.filter(item => item < 25);
console.log(array); // logs [10, 20, 30]
console.log(lessThan25); // logs [10, 20]
```

We create a variable called `array` equal to `[10, 20, 30]`. We then create a new variable called `lessThan25` and call `filter()` on `array` to keep all items that are less than 25. Just like the `map()` function, this does not alter `array`, but it returns the filtered values as a new array stored in the variable `lessThan25`.

## `reduce()` Function

The `reduce()` function returns an array of values as a  single value. Its callback function is usually passed two arguments: the  first is the accumulating total and the second is the current value in  the array for each iteration.

```javascript
var prices = [15.33, 61.87, 33.19];
var total = prices.reduce((total, amount) => total + amount);
console.log(total); // logs 110.39
```



## Chaining `map()`, `filter()` and `reduce()`

When we need to perform multiple functions to an array we can chain the functions `map()`, `filter()` and `reduce()` into a single operation.

```javascript
var prices = [15, 61, 33, 19, 37, 56, 45, 99];
var total = prices
  .filter(item => item < 40) // returns [15, 33, 19, 37]
  .map(item => item * 2) // returns [30, 66, 38, 74]
  .reduce((total, item) => total + item); // returns 208
console.log(total); // logs 208
```

We create a variable called `prices` and set it equal to `[15, 61, 33, 19, 37, 56, 45, 99]`. We then create a variable called `total` and use `filter()` to keep all values that are less than 40. Then we `map()` over each filtered value and multiply it by two. Finally, we `reduce()` those values into a single number.



# JavaScript Object-Based Paradigm

#### Creating JS Object

1. Object Literal Method

```javascript
var student = {
    name: 'jen',
    age: 25
}
```

2. Constructor Method

```javascript
var student = new Object();
student.name= 'Jen';
student.age = 25;
```

3. Bracket Syntax:

```javascript
student['possessions']=['bicycles','cars','cool objects']
```

#### Functions as Property Values

A property's value can also be a function, in which case we refer to the property as a **method**. For example, this would add a simple `greet` method to `student`:

```javascript
student.greet = function(words){
    console.log("The Student Says Hi")
}
student.greet("Hellow How are you doing")
```

#### Class-Oriented Programming in JavaScript

```javascript
class p {
    constructor(name,age,hometown,greetings){
        this.name = name;
        this.age = age;
        this.hometown = hometown;
        this.greetings = greetings;
    }
    getName(){
        return this.greetings;
    }
}
```

```javascript
let t = new p('jen',25,'new york',['cool','nice'])
```

#### Document Object Model

DOM stands for Document Object Model. It means that the browser evaluates the entire HTML Document as a single javaScript Object. This object also gets special methods added to it to help find each element or a group of elements within the object.

#### New School Selection Method 

Use QUERY SELECTOR !!!!let body = document.body
let h1 = document.createElement('h1')
h1.innerText = 'New Element Created and Added By JS!'
body.prepend(h1)

#### Manipulating DOM

Edit an HTML Element:

```javasc
let firstShirt = document.getElementById('shirt-1');
firstShirt.innerText = "Best SHirt Ever";
```

Creating and Edit an HTML Element:

```javascript
let body = document.body
let h1 = document.createElement('h1')
h1.innerText = 'New Element Created and Added By JS!'
body.prepend(h1)
```

Example:

```javascript
// Add code below
let shirt_list = document.getElementById('list');
let li = document.createElement('li');
shirt_list.appendChild(li);
li.innerText="Mens T-shirt";
```

#### Advanced DOM Manipulation

`querySelector()` and `querySelectorAll()` both allow you to pass multiple selectors for your query. The main difference between the two is that `querySelector()` returns a reference to the *first* element it finds which matches the query, while `querySelectorsAll()` returns an array-like object of all matches.

```javascript
document.querySelector('p, .left, .red');
```

```javascript
document.querySelectorAll('p, .left, .red');
```

#### Event Handler

Evetn handlers are a set of functions which handle what happens when an event is triggered.

Let's say we have a `button` within our HTML document with an `id` of `#show-more`:

```html
<button id='show-more'>Show more</button>
```

```javascript
const btn = document.querySelector('#show-more');
# Event Handler;
btn.onclick = () => {
  // code goes here
}
# Event Listener; anonymous function or a function with arrow
btn.addEventListener('click', () => {
  // code goes here
});
# Abstract Event Listener 
const showMore = () => {
  // code goes here
};

btn.addEventListener('click', showMore);
```

