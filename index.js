var events = {};

module.exports.on = function(event, func){
	if (!events[event]) events[event] = [];
	events[event].push(func);
}

module.exports.emit = function(event, arg){
	if (!events[event]) return;
	events[event].forEach(function(x){
		x(arg);
	});
}

module.exports.clearAll = function(){
	events = {};
}

module.exports.clear = function(event){
	if (!events[event]) return;
	events[event] = [];
};