---
title: Using bling.js to bring back the old jQuery syntax into Vanilla JS
description: If you don't know what $('.button').on(...) is, perhaps you are too young to read this post
date: 2019-12-10 04:19:23
tags: ['javascript']
---

This is a brief post and maybe it's not necessary nowadays, but I know that some people might be tired of writing `document.querySelectorAll(...)` and don't know this trick yet.

## A little bit of history

There was a time that didn't exist any React, Angular or Vue. There was no Webpack or Gulp either. All we had then was our good `<script>` tags full of direct DOM manipulations. And our savior at that time was a library called [jQuery](https://jquery.com/) that helped us manipulate the DOM in an easy way, and took care of cross-browser compatibility and other stuff for us.

But nowadays we don't need our savior anymore. With all the stuff around JavaScript today, we rarely manipulate the DOM directly and our savior has lost its popularity.

However, one of the things the people from that time may miss today, is the jQuery syntax for accessing the DOM and assigning event handlers. The `$(element)` and `.on('event')` were so much smooth compared with the Vanilla JS way of doing things.

Even with all the stuff we have today, sometimes you need to do the old DOM stuff directly.

## bling.js

Our dear [Paul Irish](https://twitter.com/paul_irish) wrote a little script called [bling.js](https://gist.github.com/paulirish/12fb951a8b893a454b32) that has just 13 lines of code and brings back the old jQuery syntax without having to install the entire library. Here is the script:

```js
window.$ = document.querySelectorAll.bind(document)

Node.prototype.on = window.on = function(name, fn) {
  this.addEventListener(name, fn)
}

NodeList.prototype.__proto__ = Array.prototype

NodeList.prototype.on = NodeList.prototype.addEventListener = function(name, fn) {
  this.forEach(function(elem, i) {
    elem.on(name, fn)
  })
}
```

So, if you are doing things like:

<!-- prettier-ignore -->
```js
const allButtons = Array.from(document.querySelectorAll('.button'));
allButtons.forEach(button => button.addEventListener('click', doSomething));

// or...

const input = document.querySelector('.input');
input.addEventListener('input', doThing);
```

With `bling.js` you can do:

```js
$('.button').on('click', doSomething)
$('.input').on('input', doThing)
```

But note, it's just that. It doesn't do any of the other jQuery things. **It's not a jQuery replacement**. And just by seeing this syntax I got a nostalgic feeling.

## Don't feel old yet?

I'll finish this post and let you with this beautiful image 😭:

![jQuery Cheat Sheet](/jquery-cheatsheet.jpg)
