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

You can also register multiple events and subscribers:

```js
// subscribe to multiple events
et.on(['foo', 'bar'], function(arg){
	// handle foo or bar
});

// subscribe multiple listeners to one event
et.on('foo', [console.log, console.log]); 

// publish multiple events
et.emit(['foo','bar']);

```


## License

MIT

