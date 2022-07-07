<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🌱 Tryit</a>
</h1>
<p align="center">🚀 Simplifies error control in your JavaScript/TypeScript</p>

<div align="center">
<img src="https://img.shields.io/static/v1?label=license&message=MIT&color=green&style=for-the-badge" alt="MIT License Badge" /><space><space>
</div>

<p><br></p>

## Overview

Currently, there are basically two options to catch errors in your
JavaScript code:

<br>

1. try/catch for a) synchronous code or b) code using the async/await keywords:

```javascript
try {
  // code logic here
} catch (error) {
  // error treatment here
}
```

<br>

2. catch handler when using a Promise:

```javascript
promise
  .then((result) => {
    // code logic here
  })
  .catch((error) => {
    // error treatment here
  });
```

<br>

However, these default approaches have some issues:

- verbosity
- different ways to treat errors (sync x promise)
- no default error treatment

<br>

What if we could simplify the error control, with a cleaner usage, and also
have a default error treatment?
This is the goal of the tryit package and here it is how you can use it:

```javascript
tryit(() => {
  // code logic here
});
```

<br>

The simple example below demonstrates it with a real code. See below for
additional examples.

```javascript
// You just need to wrap your code within a function
tryit(() => {
  // Your code starts here
  function throwAnError() {
    throw new Error("This error should be fired");
  }
  throwAnError();
  console.log("This code should never run");
});
```

<p><br></p>

## How to install:

---

```
npm install tryit
```

<p><br></p>

## Examples

---

<br>
1. Normal code, plus error handling customization:

<br>

```javascript
import tryit, { changeErrorFn } from "tryit";

const newErrorFn = (error: any) => {
  console.log("It works!!! The error is:", error.message);
};
changeErrorFn(newErrorFn);

tryit(() => {
  function throwAnError() {
    throw new Error("This error should be fired");
  }
  throwAnError();
  console.log("This code should never run");
});
```

<br>
2. Async code with await, plus error handling customization:

<br>

```javascript
import tryit, { changeErrorFn } from "tryit";

const newErrorFn = (error: any) => {
  console.log("It works!!! The error is:", error.message);
};
changeErrorFn(newErrorFn);

await tryit(async () => {
  function throwAnError() {
    throw new Error("This error should be fired");
  }

  const p = new Promise((resolve, reject) => {
    throwAnError();
    console.log("This code should never run");
    resolve(true);
  });

  const value = await p; // Promise throws an error
  console.log("This code should never run");
});
```

<br>
3. Async code with a non awaited Promise, plus error handling customization:

<br>

```javascript
import tryit from "tryit";

await tryit(() => {
  function throwAnError() {
    throw new Error("This error should be fired");
  }

  const p = new Promise((resolve, reject) => {
    throwAnError();
    console.log("This code should never run");
    resolve(true);
  });

  // It is necessary to return the promise, to sync with the external await,
  // otherwise the promise will be unsynced and can not be catched.
  return p;
});
```

<br>
4. Async code with await on a Promise which rejects (instead of throwing an error):

<br>

```javascript
import tryit from "tryit";

await tryit(async () => {
  const p = new Promise((resolve, reject) => {
    reject(false);
  });
  await p; // Promise will reject

  console.log("This code should never run");
});
```

<p><br></p>

## 🛠 Technologies

---

The following libraries/frameworks were used on the project:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [JEST](https://jestjs.io/)

<p><br></p>

## Author

---

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/15175383?s=120&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Marcos Pereira</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>

Done with ❤️ by Marcos Pereira 👋🏽 Contact me!

[![Linkedin Badge](https://img.shields.io/badge/-Marcos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marcosluizp/)](https://www.linkedin.com/in/marcosluizp/)
[![Gmail Badge](https://img.shields.io/badge/-mluiz.pereira@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mluiz.pereira@gmail.com)](mailto:mluiz.pereira@gmail.com)
