/**
WARNING: this is just the start.
Highly subject to change, and mostly defunct!!
*/

function Datagram(name, attributes, context) {
  if (!context) context = window;
  if (!attributes) attributes = {};
  
  name = name.split(">");
  var parent = null, self = null;
  if (name.length == 2) {
    parent = Datagram.__resolve_type(name[0], context);
    self = Datagram.__fetch_context(name[1], context);
  } else {
    self = Datagram.__fetch_context(name[0], context);
  }
  name = null;
  
  
  attributes = Datagram.__fetch_typing(attributes, context);
  console.log(self, parent);
  
  var constructor = function () {
    var start = 0;
    if(parent)
      start = Datagram.__super(this, parent, arguments);
    for(var i = 0, m = attributes.length; i < m; ++i){
      this[attributes[i][0]] = attributes[i][1].__cons(arguments[start + i]);
    }
  };
  
  var potential = self[1][self[0]];
  //handlers
  if(potential){
    Datagram.__map_handlers(potential, constructor);
  }
  
  
  constructor.__cons = Datagram.__cons;
  
  constructor.__attributes = attributes;
  
  constructor.__argc = attributes.length;
  if(parent)
    constructor.__argc += parent.__argc;
  
  constructor.prototype.sync = function(){
    Datagram.__sync(this, constructor);
  };
  
  constructor.prototype.sync = function(){
    Datagram.__sync(this, constructor);
  };
  
  self[1][self[0]] = constructor;
};

Datagram.__map_handlers = function(namespace, constructor){
  var proto = constructor.prototype;
  for(var key in namespace){
    proto[key] = namespace[key];
  }
};

Datagram.__cons = function(x){
  return x;
};

Datagram.__fetch_typing = function(attributes, context){
  var keys = Object.keys(attributes);
  var typing = new Array(keys.length);
  for(var i = 0, t = 0, m = keys.length; i < m; ++i){
    var propname = keys[i];
    var type = attributes[propname];
    type = type.split(",");    
    typing[i] = [propname, Datagram.__resolve_type(type[0], context), ((type.length == 2) && type[1] == "sync")];
  }
  return typing;
};

Datagram.__super = function(object, parent, arguments){
  parent.apply(object, arguments);
  return parent.__argc;
};

Datagram.__resolve_type = function (name, context) {
  name = name.split(".");
  for (var i = 0, m = name.length; i < m; ++i) {
    var level = name[i];
    var next = context[level];
    if (!next)
      throw new Error("Could not resolve context!");
    context = next;
  }
  return context;
};

Datagram.__fetch_context = function (name, context) {
  name = name.split(".");
  for (var i = 0, m = name.length - 1; i < m; ++i) {
    var level = name[i];
    var next = context[level];
    if (!next)
      next = context[level] = {};
    context = next;
  }
  return [name, context];
};

Datagram.__sync = function (self, constructor) {
  //this.constructor.
};

window.Car = function(){
  
};

Datagram("Car>Mustang",{sibling:"Car,sync"});


Datagram("User",{});

console.log(new User());

/*
//Without inheritance:
Datagram('User', {
  name: "string,sync",
  bio: "string,sync",
  age: "int,sync",
  increment_age: "handler"
});

//With direct inheritance:
Datagram('Customer>User', {
  name: "string,sync",
  bio: "string,sync",
  age: "int,sync",
  increment_age: "handler"
});

//With interface inheritance:
Datagram('User', ["Person", "Client"], {
  name: "string,sync",
  bio: "string,sync",
  age: "int,sync",
  increment_age: "handler"
});*/