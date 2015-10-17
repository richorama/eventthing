# eventthing

## Installation

```
> npm install eventthing
```

## Browserify Usage

```js
var et = require('eventthing');

et.on('foo', function(arg){
	console.log('recieved', arg);
});

et.emit('foo', 'hello world');
```

## Old Fashioned Usage

We love browserify, not everyone does though. Here's how you would use eventthing using global scope.

```js
var et = window.Eventthing;

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

// use an object to subscribe to multiple events
et.on({
	foo:function(){...},
	bar:function(){...}
});

// subscribe to all events
et.on('*', function(){...});
```


## License

MIT

