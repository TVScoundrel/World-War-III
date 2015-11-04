Template.NavbarUserSettings.events({
  'click .logout': function (e) {
    e.preventDefault();
    Meteor.logout(function () {
      Session.set('redirectAfterLogin', FlowRouter.current().path);
      FlowRouter.go('home');
    });
  }
});