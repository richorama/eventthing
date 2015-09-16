# eventthing

## Installation

```
> npm install eventthing
```

## Usage

```js
var et = require('eventthing');

et.on('foo', function(arg){
	console.log('recieved', arg);
});

et.emit('foo', 'hello world');
```

## License

MIT

