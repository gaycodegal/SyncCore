# Handler Specification 

([To Main Document](./README.md))

Handlers are meant to provide functional manipulation of data. That is - functions should avoid stateful implementations, and focus on the inputs provided. Handlers should provide the ability to have namespaces, and if applied to a datagram, should use that datagram's type name as its namespace. Handlers will be able to provide input and typing information.

Handlers will be able to be put into a specific namespace, and if that namespace becomes a datagram, the datagram will inherit all the handlers as member functions. If a namespace is already within a class, that class will gain the handler as a member function. 

The handler constructor:

`Handler(NamespaceAndName, "DatagramType:input_name,...", function)`

Example:

    //Member function of User
    Handler('User.increment_age', function (){
        this.age += 1;
        this.sync();
    });
    
    //regular handler
    Handler('increment_age', 'User:user', function (user){
        user.age += 1;
        user.sync();
    });