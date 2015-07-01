// Simple handler for login
Meteor.methods({
    login: function(name, pass) {
        console.log(name, pass);

        return (name==="admin" && pass==="1234");
    }
});