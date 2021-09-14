# check
***

The Check package has had problems with "Match.Maybe" and "Match.Optional" for a very long time.  Several
issues have been raised, but none get resolved.  I aim to resolve them here.

Match.Maybe now correctly checks against against undefined and null, and Match.Optional check against undefined.

I plan to OBE Match.Maybe in favor of "Match.Nullable" and only allow a check against null.

I've also improved (I think) the error messages.


`check` is a lightweight package for argument checking and general pattern matching. Use it like this:

```
Meteor.publish("chats-in-room", function (roomId) {
  // Make sure roomId is a string, not an arbitrary mongo selector object.
  check(roomId, String);
  return Chats.find({room: roomId});
});

Meteor.methods({addChat: function (roomId, message) {
  check(roomId, String, 'for roomId');
  check(message, {
    text: String,
    timestamp: Date,
    // Optional, but if present must be an array of strings.
    tags: Match.Optional([String])
  });

  // ... do something with the message ...
}});
```

For more details see the [`check` section](http://docs.meteor.com/#check_package) of the Meteor docs.
