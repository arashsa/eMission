Template.loginPage.events({
    'submit #login-form' : function(e, t) {
        e.preventDefault();

        // getting the input values through #id
        var username = t.find('#login-email').value;
        var password = t.find('#login-password').value;

        // calls function login on the server with callback
        Meteor.call('login', username, password, function(err, data) {
            if(data) {
                // login ok
                Router.go('/missionCommander/loginSucceeded')
            } else {

            }
        });

        return false;
    }
});