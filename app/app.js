// meteor-ios-app-example/app/app.js
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
    }
  });

  Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      const message = "Are you sure?";
      const title   = `Delete Task: ${this.text}`;
      const buttonLabels = ["Cancel", "OK"];
      const taskId = this._id;
      const onConfirm = function(buttonIndex) {
        if (buttonIndex === 2) { // OK
          Tasks.remove(taskId);
        }
      };

      if (Meteor.isCordova) {
        // Use background thread for iOS
        Meteor.setTimeout(function() {
          navigator.notification.confirm(message, onConfirm, title, buttonLabels);
        }, 1);
      } else if (confirm(message)) {
        Tasks.remove(taskId);
      }
    }
  });
}