[![Facebook-Page][facebook-shield]][facebook-url]
[![Twitter][twitter-shield]][twitter-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h3 align="center">Node Authentication
  <div align="center"><h3>Project Link: <a href="https://github.com/rsshonjoydas/TypeScrip">GitHub</a> or <a href="https://codesandbox.io/s/github/rsshonjoydas/TypeScrip/tree/main">CodeSandbox</a></h3></div>

## Agenda

- [What is TypeScript](#what-is-typeScript)
- [Dynamic vs Static Typing](#dynamic-vs-static-typing)
- [What is Wrong with JavaScript](#what-is-wrong-with-javaScript)
- [Benefits of TypeScript](#benefits-of-typeScript)
- [Compiling TypeScript](#compiling-typeScript)
- [Requirement](#requirement)

### What is TypeScript

TypeScrip is an open source language and is a superset of JavaScript.

- Superset of JavaScript created by Microsoft
- Offers additional features to JavaScript including static strict typing
- Using types is completely optional
- Compiles down to regular JS
- Can be used for front-end JS as well as backend with Node.js
- Supports modern features from ES6, ES7 (arrow functions, let, const, etc)
- Extra features: interfaces, enums, tuples, generics
- Types from 3rd party libraries can be added with type definitions
- Based on the .NET harmony specification

### Dynamic vs Static Typing

- In dynamically typed languages, the types are associated with run-time values and not named explicitly in your code. (JavaScript, Python, Ruby, PHP)
- In statically typed languages, you explicitly assign types to variables, functions parameters, return values, etc. (Java, C, C++, Rust, Go)

### What is Wrong with JavaScript

- Not suitable for large applications
- Lacks strong typing
- Wired inheritance, unfamiliar syntax
- Only errors during runtime
- Suffers type coercion

### Benefits of TypeScript

- TypeScript equal of JavaScript
- Compiles to JavaScript - runs everywhere
- Familiar Object-Oriented Programming
- New JavaScript features work everywhere

### Compiling TypeScript

- TypeScrip uses .ts and .tsx extensions
- TSC (TypeScrip Compiler) is used to compile .ts files down to JS
- Can watch files and report errors at compile time
- Many tools include TS compilation by default
- Most IDEs have great support for TS
- The tsconfig.json file is used to configure how TypeScrip works

### Requirement

- Install <a href="https://nodejs.org/en/">Node.js</a>
- Install TypeScript
    You can install TypeScript via npm or yarn
    ```sh
    npm install typescript
    ```
    or
    ```sh
    yarn add typescript
    ```
    Then run the compiler via tsc
    ```sh
    npx tsc
    ```
    Learn more about how to add TypeScript to your apps in the <a href="https://www.typescriptlang.org/download">installation page</a>
- IDEs recommended <a href="https://code.visualstudio.com/">Visual Studio Code</a>

<!-- MARKDOWN LINKS & IMAGES -->

[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor
[facebook-url]: https://facebook.com/rsshonjoydas
[twitter-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=twitter&color=555&logoColor
[twitter-url]: https://twitter.com/rsshonjoydas
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor
[instagram-url]: https://instagram.com/rsshonjoydas
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB
[linkedin-url]: https://linkedin.com/in/rsshonjoydas
