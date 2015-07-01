Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function () {
    this.render('links')
});

Router.route('/missionCommander', function () {
    this.render('loginPage')
});

Router.route('/missionCommander/loginSucceeded', function() {
    this.render('loginSucceeded')
});

Router.route('/scienceTeam', function () {
    this.render('scienceTeam')
});


Router.route('/astronautTeam', function () {
    this.render('astronautTeam')
});


Router.route('/securityTeam', function () {
    this.render('securityTeam')
});

Router.route('/communicationTeam', function () {
    this.render('communicationTeam')
});