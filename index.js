var events = {};

var on = function(event, func){
	if (Array.isArray(event)){
		event.forEach(function(ev){
			on(ev, func);
		});	
		return;
	}

	if (!events[event]) events[event] = [];
	events[event].push(func);
};

var emit = function(event, arg){
	if (!events[event]) return;
	events[event].forEach(function(func){
		func(arg);
	});
};

var clearAll = function(){
	events = {};
};

var clear = function(event){
	if (!events[event]) return;
	events[event] = [];
};

module.exports = {
  clear: clear,
  clearAll: clearAll,
  on: on,
  sub: on,
  emit: emit,
  fire: emit,
  pub: emit
};
