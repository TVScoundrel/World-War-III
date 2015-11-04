Template.Login.events({
  'click .btn-google-plus': function (e) {
    e.preventDefault();
    Meteor.loginWithGoogle(function () {
      FlowRouter.go(Session.get('redirectAfterLogin'));
    });
  }
});