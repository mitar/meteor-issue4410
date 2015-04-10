if (Meteor.isClient) {
  Session.set('flag', false);

  Template.body.helpers({
    flag: function () {
      return Session.get('flag');
    }
  });
  
  Template.outer.onCreated(function () {
    console.log("onCreated outer");
  });

  Template.outer.onRendered(function () {
    console.log("onRendered outer");
  });

  Template.outer.onDestroyed(function () {
    console.log("onDestroyed outer");
  });

  Template.inner.onCreated(function () {
    console.log("onCreated inner");
  });

  Template.inner.onRendered(function () {
    console.log("onRendered inner");
  });

  Template.inner.onDestroyed(function () {
    console.log("onDestroyed inner");
  });
}
