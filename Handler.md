# Handler Specification ([To Main Document](./README.md))

Handlers are meant to provide functional manipulation of data. That is - functions should avoid stateful implementations, and focus on the inputs provided. Handlers should provide the ability to have namespaces, and if applied to a datagram, should use that datagram's type name as its namespace. It would be helpful if we could derive input typing information from the handler

The handler constructor:

`Handler(NamespaceAndName, "DatagramType:input_name,...", function)`

Example:

    Handler('User.increment_age', 'User:user', function (user){
        user.age += 1;
        user.sync();
    });