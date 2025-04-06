// REQUIRES /reload

// Hide JEI Items
JEIEvents.hideItems(event => {
    event.hide('inventorypets:temp_feed_bag');  // WTF inv pets, *wtf*
});

// Show JEI Items
JEIEvents.addItems(event => {
    event.add(Item.of('minecraft:bundle'));
    event.add(Item.of('inventorypets:feed_bag', {Damage:0}));    // doesn't show recipes otherwise
});