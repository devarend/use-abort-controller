# use-abort-controller
> Abort controller hook for react

## Install
```
npm i use-abort-controller
```

## Usage:

```js
const {createSignal: createTestSignal, abort: abortTest} = useAbortController()

const request = () => {
    const signal = createTestSignal()
    fetch('test.com', {signal})
    abortTest()
}

request()
```
