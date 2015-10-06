if (Meteor.isClient) {
  var child1RenderedCalled = false;

  Template.parent.helpers({
    showChild1: function () {
      return Session.get("child2-onRendered-called");
    }
  });

  Template.parent.onRendered(function () {
    console.log("parent - onRendered");
    if (!child1RenderedCalled && this.$("#child1").length > 0) {
      console.log("parent's onRendered called before child1's onRendered (even though child1 is already on the page)");
    }
  });

  Template.child1.onRendered(function () {
    child1RenderedCalled = true;
    console.log("child1 - onRendered");
  });


  Session.set("child2-onRendered-called", false);
  Template.child2.onRendered(function () {
    console.log("child2 - onRendered");
    Session.set("child2-onRendered-called", true)
  });
}
