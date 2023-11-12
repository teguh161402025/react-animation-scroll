Demo: https://react-animation-scroll.vercel.app/
```markdown
## Installation

Install with npm:

```bash
npm install React-animation-scroll
```

Import it into your file:

```javascript
import ScrollAnimate from 'react-animation-scroll';
```

Add CSS into your file:

```javascript
import 'react-animation-scroll/dist/index.css';
```

## Basic Usage

Add the `<ScrollAnimate>` component to the element that will be animated and include the `animation` prop specifying the type of animation to be used. Remember, the `animation` prop is required.

```html
<ScrollAnimate animation={'fade-in'}>Fade In</ScrollAnimate>
```

## Properties

### `infinite`

Add the `infinite` prop to determine whether the animation will continue to run each time the element enters the viewpoint - default is false.

```html
<ScrollAnimate animation={'fade-in'} infinite={true}>Fade In</ScrollAnimate>
```

### `delay`

Add the `delay` prop to determine the delay time of the animation before it starts running, in milliseconds (ms).

```html
<ScrollAnimate animation={'fade-in'} delay={400}>Fade In</ScrollAnimate>
The animation will be executed after a delay of 400 milliseconds.
```
### `duration`

Add the `duration` prop to determine the duration of the animation, in seconds (s).

```html
<ScrollAnimate animation={'fade-in'} duration={2}>Fade In</ScrollAnimate>
This animation will run for 2 seconds.
```
