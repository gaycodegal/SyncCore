# Datagram Specification 

([To Main Document](./README.md))

Datagrams are meant to provide information on typing, inheritance, syncing, data structure. Datagrams were separated from their handlers in order to ensure susinctness.

Datagrams should:
- provide the standard object inheritance.
- provide information about it's own type as well as the types of those Datagrams it inherits from via a .type(), .super(), and .interfaces().
  - These must be done via methods to appease Javascript's prototypical nature.
- provide both interface and direct inheritance.
- acknowledge private and public fields, although this will simply be done via double underscores for simplicity: `__field`
- provide default constructors
- provide default serialization when possible.
  - if a datagram is to represent a new datatype, it must present it's own serialization method.
  - if a datagram requires its own unique serialization method, its only purpose should be to serve as a datatype.

There will be various already provided datagrams that have specific purposes, for instance a style datagram that will manage an updatable style.

The datagram constructor:

`Datagram(Name, [Interface List], [Properties Object])`

Example:

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
    });