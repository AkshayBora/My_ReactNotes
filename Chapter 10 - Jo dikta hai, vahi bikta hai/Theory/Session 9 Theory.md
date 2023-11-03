# Theory Assignment:

## 1. Explore all the ways of writing css.

There are differernt ways of ussing CSS in in our application.

1. Writing normal Nativice CSS : By creating `.css` files and adding them to our `html` files
2. By using css preprocessors like sass or scss.
3. By writing inline CSS : writing csss inside the components itself.
4. Using Librraries like Chakra UI, Tailwind CSS etc.

## 2. How do we configure tailwind?

For configuring the Tailwind CSS with Parcel.

1. we need to install tailwind library.

```
npm install -D tailwindcss postcss
```

2. Then we need to setup the config file for tailwing.

```
npx tailwindcss init
```

This will create a `tailwind.config.js` file.

## 3. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

The `tailwind.config.js` file contains the configurations for the our application.
Following are the configurations we require to setup tailwind.

1.  `content` : This configuration of the file formats, on which the styles are applied.

    e.g.

    ```
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    ```

    This configuration means that in files extensions of `html , js, ts ,tsx, jsx` files will use the stylings of Tailwind.

2.  `theme` : Theme is where we design our own custom configurations for our project like colors and font-families for our application.

    ```
    module.exports = {
         theme: {
             screens: {
                 sm: '480px',
                 md: '768px',
                 lg: '976px',
                 xl: '1440px',
             },
             colors: {
                 'blue': '#1fb6ff',
                 'purple': '#7e5bef',
                 'pink': '#ff49db',
             },
         }
    }

    ```

3.  `extend` : Here we can extend more properties for Tailwind like adding values that does not exist for tailwind or overriding the existing the values for tailwind.

    ```
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
    ```

4.  `plugins`: We can use to inject new style in our project using JavaScript instaed of css.

    const plugin = require('tailwindcss/plugin')

        module.exports = {
            plugins: [
                plugin(function({ addUtilities, addComponents, e, config }) {
                // Add your custom styles here
                }),
            ]
        }

## 4. Why do we have `.postcssrc` file?

:TODO:

## `Chapter-10 What is seen is sold`

- Why frameworks?

  - optimized css,
  - consistent UI
  - saves time.
  - Eg : MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI

- Can we use more than one framework ?

  - It's all package can use any number of frameworks,
  - But, not consistent way

- Different ways to write css :

  1. **Normal Native CSS** - all components's styles in a single file index.css
  2. **SCSS** - Syntactical CSS - atlast it is converted to css
  3. **Inline CSS** - style attribute - pass object - {{backgroundColor : "red"}}
  4. **Component Library** - MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
  5. **CSS Framework** - Tailwind
  6. **Styled Components**: Majorly used in react projects.

- **Important**: In a `system design round of interview`, you always have to discuss that

  - what will you use for styling your components?
  - Now, there are differnet ways, you can style your web apps.
  - But, what way you will choose & you have give a a good reason for it.
  - So, you should know what are the pros & cons of using them.
  - Exapmle: what are pros & cons of using `Native CSS` over `SCSS` or `component library`

- Pros & Cons of using Component librery (i.e MaterialUI, Bootstrap, etc)

  - Pros :

    - `consistent UI`: (All the button in your app will look the same now)
    - save time

  - Cons :
    - Bundle size -
    - Loose control over design
    - personal customizition is hard

### Tailwind CSS:

- When? How? & Why? to use it.

- writing css on the go (i.e in the same file )
- reusablity
- less bundle size (minimal css) only includes the css classes that we have used
- Flexible UI (Customizable)

#### Seting up tailwimd css in our project: refer [Tailwind Docs](https://tailwindcss.com/docs/installation/framework-guides)

1. Installing `tailwind` & `postcss` using npm [for parcel]

   ```
   npm install -D tailwindcss postcss
   npx tailwindcss init
   ```

2. Configure Tailwind:

   - use command `npm tailwind init`
   - This will create `tailwind.config.js` file
   - Now, we will be telling tailwind which all files to scan (i.e Configure your template paths)

     ```
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{html,js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }

     ```

3. Configure postcss:
   - Create `.postcssrc` file.
   - Configure PostCSS:
   ```
   {
     "plugins""{
       "tailwindcss": {}
     }
   }
   ```
   - In this `.postcssrc` file, we have to tell the `parcel`(i.e bundler) that we will be using tailwind. So, compile our tailwind css into normal css during the build. This is the reason, we use `.postcssrc` configuration.
4. Now, in 'index.css`
   - We will not be writing any css in it.
   - Instead there will only three lines inside it (i.e Add the Tailwind directives to your CSS):
     ```
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

- Add a plugin/extension `Tailwind CSS IntelliSense` in VScode.

> **NOTE**: Sometime `Tailwind CSS IntelliSense` extension doesn't show suggetions. In that case `press ctrl + spacebar` before typing any class.

## Pros & Cons of tailwind

- Pros:

  - Saves Time (faster developnment)
  - Easy to debug
  - Less code is shipped
  - No duplicates CSS
  - Bundle size is small
  - Much more customisable (then other frameworks like MaterialUi, Bootstrap,...)
  - Gives much more control over things

- Cons:
  - Initial learning curve: every new developer that will join our team will take some time understand & learn.
  - Too much class. So, readability is compromised a little.

> **Note**: Because of `JSX` & `tailwind` we don't have to move out of our `.js` file.

- Tailwind Cheatsheet: [Cheatsheet 1](https://nerdcave.com/tailwind-cheat-sheet) | [Cheatsheet 2](https://tailwindcomponents.com/cheatsheet/)
