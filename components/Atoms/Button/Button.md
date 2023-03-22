Button Component
================

The `Button` component is a customizable button that can be used to trigger actions, submit forms, or navigate to different pages in a web application. This component is built using React and TypeScript and offers a wide range of customizable options for developers to create buttons that meet their design and functionality requirements.

Props
-----

The following props can be passed to the `Button` component to customize its appearance and behavior:

| Prop Name      | Type                                         | Default Value       | Description                                                                    |
|----------------|----------------------------------------------|---------------------|--------------------------------------------------------------------------------|
| children       | `React.ReactNode`                            |                     | The content to display within the button element.                              |
| onClick        | `React.MouseEventHandler<HTMLButtonElement>` | Required            | The callback function that will be called when the button is clicked.          |
| btnType        | `fill` `stroke` `text` `icon`                | `fill`              | The type of button.                                                            |
| focusColor     | `string`                                     |                     | The color of the button when it is focused.                                    |
| disabled       | `boolean`                                    | `false`             | Determines whether the button is disabled.                                     |
| size           | `small` `medium` `large`                     | `medium`            | The size of the button.                                                        |
| fullWidth      | `boolean`                                    | `false`             | Determines whether the button takes up the full width of its parent container. |
| leftIcon       | `boolean`                                    | `false`             | Determines whether to display an icon on the left side of the button.          |
| rightIcon      | `boolean`                                    | `false`             | Determines whether to display an icon on the right side of the button.         |
| isLoading      | `boolean`                                    | `false`             | Determines whether to display a loading indicator inside the button.           |
| shape          | `square` `rounded` `pill`                    | `square`            | The shape of the button.                                                       |
| bgColor        | `string`                                     |                     | The background color of the button.                                            |
| strokeColor    | `string`                                     |                     | The color of the button's border.                                              |
| textColor      | `string`                                     |                     | The color of the text displayed inside the button.                             |
| underline      | `boolean`                                    | `false`             | Determines whether to underline the text displayed inside the button.          |
| underlineColor | `string`                                     | Same as `textColor` | The color of the underline when `underline` is set to true.                    |
| status         | `success` `error` `warning` `info`           |                     | The status of the button.                                                      |
| minWidth       | `string`                                     |                     | The minimum width of the button.                                               |
