First we start with an NPM project, so in the terminal we do the following: 

```
npm init -y
```
In this project Parcel will be used as a development dependency therefore I go to terminal and do the following:

```
npm i parcel --save-dev

```

[More about Parcel](https://www.npmjs.com/package/parcel)

[Parcel DOCS](https://parceljs.org/docs/)

Generate a ts config

```
npx tsc --init

```
<!--!Can't run parcel -help -->

Once I have the <kbd>tsconfig.json</kbd> 

Using [Formal Library](https://austinbeaufort.github.io/formal-site/) by <kbd>Austin Beaufort </kbd> to style the button

Background color [Animation](https://code-boxx.com/css-animation-background-color/) with CSS

```css
There are 2 easy ways to animate the background color with modern CSS:

Use CSS transition to progressively change the background color.

<div id="demo">Demo</div>

#demo { transition: background-color 1s }

document.getElementById("demo").style.backgroundColor = "red";


Use CSS keyframes to specify a sequence of background colors.
@keyframes col { 0% {background-color:red} 
50% {background-color:green} 
100% {background-color:blue} }

#demo { animation: col 5s infinite }
```