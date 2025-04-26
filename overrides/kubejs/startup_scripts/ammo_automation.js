StartupEvents.registry('item', event => {
    // Make new item for in-progress seq assembly of ammo
	event.create('incomplete_ammo', 'create:sequenced_assembly')
})