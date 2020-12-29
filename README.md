# Aborter

A minimal reimplementation of [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) and [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal).

This library is only 0.8kb minified, but it's not strictly spec-compliant, if you need that go with [`abort-controller`](https://www.npmjs.com/package/abort-controller).

## Install

```sh
npm install --save aborter
```

## Usage

```ts
import Aborter from 'aborter';

const aborter = new Aborter ();

console.log ( aborter.signal.aborted ); // => false

aborter.signal.addEventListener ( 'abort', () => {

  console.log ( aborter.signal.aborted ); // => true

});

aborter.abort (); // Aborting, causing event handlers to be triggered and the "aborted" property to be set to "true"
```

## License

MIT © Fabio Spampinato
