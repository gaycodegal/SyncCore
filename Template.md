# Template Specification ([To Main Document](./README.md))

Templates are meant to provide information about display composition, and derive their styling information and contents from either static values or datagrams.

Templates should:
- provide the ability to link UI editors to data.
- provide an easy to read format.
- be easily editable.
  - despite XML implementation, a smart editor must be created to ease this process.
- provide the ability to specify the input to handlers
- provide the ability to have data inputs and outputs
- be valid XML, but be easily interpreted to understand what is code and what are constants.

The template 'constructor'

`<Template name="TemplateName" [class="instance_name,..." style="instance_name,..." data="DatagramType:instance_name,..."]>`

Example:

    <Template name="UserProfile" data="User:user">
        <div>"User Info:"</div>
        <div>user.name</div>
        <div>user.bio</div>
        <div>user.name</div>
        <div click="user.increment_age">user.age</div>
    </Template>