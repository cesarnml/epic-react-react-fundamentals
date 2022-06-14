# My Notes - React Fundamentals

## PreReq Reading

- [ ] [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)

- [ ] ![Multiple destructuring of same property - cool](,/../Screen%20Shot%202022-06-10%20at%2015.43.27.png)

## Extra References That Ain't Noone Got Time For

- [ES Module Talk by KCD](https://www.youtube.com/watch?v=kTlcu16rSLc&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)

- [ES6 & Beyond Workshop by KCD](https://www.youtube.com/playlist?list=PLV5CVI1eNcJgUA2ziIML3-7sMbS7utie5)


## Lesson Notes

### Lesson 01 - Basic JavaScript-rendered Hello World

- You can directly access the `body` element via `document.body`
- You can set a `className` via `element.className`
- You can also an `id` attribute via `element.id` 🤯
- You can also set attributes via `element.setAttribute('key', 'value')`

### Lesson 02 - Intro to raw React APIs

- **React** - *responsible for creating React elements (kina like `document.createElement()`)*
- **ReactDOM** - responsible for rendering React elements to the DOM (kina like `rootElement.append()`)*
-Sibling react elements are created by passing an array of React elments to the parent element `children` prop

```javascript
    const reactElement = React.createElement('div',{
className: 'container',
      children: [
        React.createElement('span', {children: 'Hello', key: 'hello'}),
        React.createElement('span', {children: ' World', key: 'world'}),
      ],
    })
```

- React raw API `React.createElement(component, props, ...children)`

### Lesson 03 - Using JSX

- You can transpile babel code into plain javascript in the browser via `<script type="text/babel">[BABEL JS]</script>` designation
  - Transpiled code ends up in `<head>` element

### Lesson 04 - Creating custom components

-