# SyncCore
- A one-page library combined with UI and data control.

SyncCore will provide two modes: development and production. Development code will be easy to write, but will take a small amount internally for linking to occur. Development code will not require compiling as this would slow down the development process. Production code will be produced by development code and will more closely resemble "regular" JavaScript.

Currently this is just a specification and goals document. All code in the project is purely speculative and subject to change.

SyncCore is an in-progress UI-builder and data management scheme which will be used in future versions of LiquiZ to reduce complexity. It is a well known fact that creating a display, back-end server, and front end functionality can quickly bog down any project, and greatly reducing productivity. SyncCore will prodive an approach to this issue by creating tools and a structured approach to these issues. In addition, it will provide the speed and power of a one-page approach, ensuring faster page loading and product response time.

Essentially, it will seek to break applications down into:


- [Handlers][3] : functions built specifically to handle events, data manipulation, or other useful things like data management. Handlers will be purely funcitonal (stateless).
- [Datagrams][1] : The *information* structures that will represent the information an application. Datagrams are *typed* and will automatically be *syncable* to a server or stored locally for offline functionality. Datagrams may inherit from other datagrams and may have associated handlers to allow for its manipulation.
- [Templates][2] : A union of display elements (templates) and optionally one or more datagrams and handlers in order to provide static or dynamic interfaces. Templates can be something as simple as an input, or be a union of other templates used to represent an entire page. Templates will be interchangable and updatable to provide live page modification as well as to provide all the speed and power of a one-page app.

Together these structures are able to fully describe all the features of an application. Built in features of SyncCore will manage data and client/server interaction.

This leaves the structure of SyncCore - how will developing an application in SyncCore offer an improvment to normal development?

SyncCore will offer a template creator to make creating xml template descriptions, along with the related bindings of handlers and datagrams quick and easy. Alongside the native JavaScript functionality, SyncCore will also provide a fully navigable object oriented description of datagrams, allowing you to easily export them to classes in other langauages if you don't want to use SyncCore's serverside capabilities.

An example Handler, Datagram, and Template.

[Handler][3]:

    Handler('User.increment_age', function (){
        this.age += 1;
        this.sync();
    });

[Datagram][1]:

    //inherits increment_age as a member function
    Datagram('User', {
        name: "string,sync", 
        bio: "string,sync", 
        age: "int,sync"
    });

[Template][2]:

    <Template name="UserProfile" data="User:user">
        <div>"User Info:"</div>
        <div>user.name</div>
        <div>user.bio</div>
        <div>user.name</div>
        <div click="user.increment_age">user.age</div>
    </Template>

[1]: ./Datagram.md
[2]: ./Template.md
[3]: ./Handler.md