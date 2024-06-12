## Why
So, I was going through some website today and noticed they really do have some ugly loading dots animations that have a poor contrast with the background, and they use it everywhere instead of a skeleton, irritating af! Then hours later I saw another site with the same animating dots that looked even uglier. So, as a call to the universe, I created this package this afternoon for all you folks out there struggling to get some good-looking glowing 3-dot pulsing animations.
## Installation 
**npm**
```bash
npm i loading-points
```
**pnpm**
```bash
pnpm i loading-points
```

## Usage 
```tsx
import Loading from 'loading-points';

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loading glowColor='rgb(155, 46, 199)' circleSize='8px' />
    </div>
  );
}

export default LoadingScreen;
```

## License 
[MIT](https://github.com/AshGw/loading-points/blob/main/LICENSE)
