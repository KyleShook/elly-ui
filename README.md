# Elly UI Library

A collection of core components. Work in progress.

React / Typescript  
Styled Components  
Storybook / Chromatic  
Jest / React Testing Library

## Components

### Button 🟡

✅ Hover state  
✅ Disabled state  
✅ Focused state  
✅ Type (filled, outline, text, icon)  
✅ Click event  
✅ Size (small, medium, large)  
✅ Full width  
✅ Icon position  
✅ Loading state  
✅ Status state  
✅ Active state  
✅ Button shape (rounded, square, pill)  
❎ Custom styles _(Partially implemented)_  
🛠 A11y audit  
🛠 Test coverage

### Button Group 🟡

✅ Assign button shape and size
✅ Assign button types
❎ Custom styles _(Partially implemented)_
🛠 A11y audit  
🛠 Test coverage

### Icon 🔴

🛠 A11y audit  
🛠 Test coverage

### Icon Collection 🔴

🛠 A11y audit  
🛠 Test coverage

### Input 🔴

🛠 A11y audit  
🛠 Test coverage

### Avatar 🔴

🛠 A11y audit  
🛠 Test coverage

### Badge 🔴

🛠 A11y audit  
🛠 Test coverage

### Banner 🔴

🛠 A11y audit  
🛠 Test coverage

### Card 🔴

🛠 A11y audit  
🛠 Test coverage

### Checkbox 🔴

🛠 A11y audit  
🛠 Test coverage

### Radio 🔴

🛠 A11y audit  
🛠 Test coverage

### Switch/Toggle 🔴

🛠 A11y audit  
🛠 Test coverage


Button Component
================

The `Button` component is a customizable button that can be used to trigger actions, submit forms, or navigate to different pages in a web application. This component is built using React and TypeScript and offers a wide range of customizable options for developers to create buttons that meet their design and functionality requirements.

Props
-----

The following props can be passed to the `Button` component to customize its appearance and behavior:

| Prop Name      | Type                                         | Default Value       | Description                                                                    |
|----------------|----------------------------------------------|---------------------|--------------------------------------------------------------------------------|
| children       | `React.ReactNode`                            | Required            | The content to display within the button element.                              |
| onClick        | `React.MouseEventHandler<HTMLButtonElement>` | Required            | The callback function that will be called when the button is clicked.          |
| btnType        | `fill | stroke | text | icon`                | `fill`              | The type of button.                                                            |
| focusColor     | `string`                                     | `""`                | The color of the button when it is focused.                                    |
| disabled       | `boolean`                                    | `false`             | Determines whether the button is disabled.                                     |
| size           | `small | medium | large`                     | `medium`            | The size of the button.                                                        |
| fullWidth      | `boolean`                                    | `false`             | Determines whether the button takes up the full width of its parent container. |
| leftIcon       | `boolean`                                    | `false`             | Determines whether to display an icon on the left side of the button.          |
| rightIcon      | `boolean`                                    | `false`             | Determines whether to display an icon on the right side of the button.         |
| isLoading      | `boolean`                                    | `false`             | Determines whether to display a loading indicator inside the button.           |
| shape          | `square | rounded | pill`                    | `square`            | The shape of the button.                                                       |
| bgColor        | `string`                                     | `""`                | The background color of the button.                                            |
| strokeColor    | `string`                                     | `""`                | The color of the button's border.                                              |
| textColor      | `string`                                     | `""`                | The color of the text displayed inside the button.                             |
| underline      | `boolean`                                    | `false`             | Determines whether to underline the text displayed inside the button.          |
| underlineColor | `string`                                     | Same as `textColor` | The color of the underline when `underline` is set to true.                    |
| status         | `success | error | warning | info`           | `""`                | The status of the button.                                                      |
| minWidth       | `string`                                     | `""`                | The minimum width of the button.                                               |
