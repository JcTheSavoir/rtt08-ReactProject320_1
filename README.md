* Author: J.C.
* Technologies Used: React, TypeScript, useRef, useState, useEffect, Route/Routes, Link, TSX, https://www.dnd5eapi.co/ && https://open5e.com/api-docs  
* How it was built: Started the build by first focusing on the components and the api access itself.  Styling is helpful to do first, normally.  But when the information you are using is so dynamic and changing, sometimes it can cause you to rework the styling multiple times after adding more and more data from the api.  Getting the data and breaking it down into usable chunks took the longest for this part of the project. Styling was it's own hurdle; which can still be vastly improved with more time.
* Usage Instructions:  To use the site; there are currently two main options.  You'll load into the options page where you'll be greeted with two options.  Either seeing all spells; or searching for a monster.  If you go to "AllSpells" route, you'll see a list of all of the current spells in dnd (at least that the api has).  Clicking on the link in a given spell takes you to a new page with further details on that spell.  If you go the other route, you'll see a page with a search input.  Just start typing and suggestions will start to appear.  Be aware only 10 suggestions can be shown at once.  Once you see the monster you are looking for, click it (or use your keys to select it) and the page will automatically render the details of the given monster.  Do this as many times as you like.  
* Unsolved problems: Two problems currently.  One: there is no api i'm aware of for images for dnd monsters.  That leaves two options going further.  Option 1, using an ai api to dynamically create images when a monster is chosen.  This gets expensive fast.  Option 2, finding images for each monster and adding them to a database (possibly mongo DB) and accessing that database when a given monster is chosen.  Finding copyright/fair use images for this presents it's own issue (very time consuming). 
The other issue is simply how the current dropdown works.  It does a decent job filtering, but since most of the dragons have a large set of different letters, they appear at the top for most searches until you enter something more specific.  That is the limit currently with datalist unless a ts function is created to address it.  Will work on this in the future


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
