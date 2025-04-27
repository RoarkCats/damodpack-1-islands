// REQUIRES /reload

// Hide JEI Items
JEIEvents.hideItems(event => {
    // WTF inv pets, *wtf*
    event.hide('inventorypets:temp_feed_bag');
    event.hide('inventorypets:temp_chest');
    event.hide('inventorypets:temp_double_chest');
    event.hide('inventorypets:temp_sated_chest');
    event.hide('inventorypets:temp_sated_double_chest');
    event.hide('kubejs:incomplete_ammo');
});

// Show JEI Items
JEIEvents.addItems(event => {
    event.add(Item.of('minecraft:bundle'));
    event.add(Item.of('inventorypets:feed_bag', {Damage:0}));
    event.add(Item.of('inventorypets:pet_chest', {Damage:0}));
    event.add(Item.of('inventorypets:pet_double_chest', {Damage:0}));
    event.add(Item.of('inventorypets:pet_sated_chest', {Damage:0}));
    event.add(Item.of('inventorypets:pet_sated_double_chest', {Damage:0}));
});