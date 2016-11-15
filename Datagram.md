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
- inherit handlers in its namespace as member functions
  - accept new handlers created its namespace in the same way
- provide default serialization when possible.
  - if a datagram is to represent a new datatype, it must present it's own serialization method.
  - if a datagram requires its own unique serialization method, its only purpose should be to serve as a datatype.

There will be various already provided datagrams that have specific purposes, for instance a style datagram that will manage an updatable style.

Interfaces will not strictly be interfaces, but will allow multiple inheritance. The first interface will be considered a datagram's direct parent, and will be accessible through `super()`, all other interfaces will be accessible through `interfaces()`. The superclass will represent the first element of `interfaces()`. Interfaces should be initialized in order, which permits the overwriting of the fields of lower indexed datagrams.

Datagrams supporting inheritance must provide their own constructor as an input to the `Datagram(...)` method.

The datagram constructor:
    
`Datagram(Name, Field List, Synced Field List, Interface List, Constructor, Context)`
- Name: string in dotted namespace format.
- Interface List: a list of names to inherit from.
- Field List: a list of name:instance_name pairs.
- Synced Field List: a field list of attributes to be synced.
- Constructor: Handler for initialization of fields, documentation to be provided. 
    Name.constructor will be assumed as a default value. 
    The constructor must already exist.
  - Examples to come.
- Context: every name provided will be considered part of this namespace. 
- Defaults to the window  context

Example:

    //Without inheritance:
    Datagram('User', [
        "string:name",
        "string:bio",
        "int:age"
    ]);
    
    //With inheritance, singular:
    Datagram('User', [
        "string:name",
        "string:bio",
        "int:age"
    ],[],["Client"], "User.constructor");
    
    //With inheritance, multiple:
    Datagram('User', [
        "string:name",
        "string:bio",
        "int:age"
    ],[],["Client", "Person"], "User.constructor");