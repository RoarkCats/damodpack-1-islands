PlayerEvents.inventoryChanged(event => {
    const {item, player/*, slot*/} = event;

    if (item.hasTag('dapack:disabled_pets')) {
        let slot = player.inventory.find(item); // findSlotMatchingItem limited to hotbar/inv, else -1
        // player.tell(`found: ${item} | ${slot} | ${player.inventory.findSlotMatchingItem(item)}`) // debug
        if (0 <= slot && slot <= 35) {slot = 'container.'+slot;}
        else if (slot == 40) {slot = 'weapon.offhand';}
        else {return;} // invalid slot or armor
        player.runCommandSilent(`loot replace entity @s ${slot} loot dapack:replacement_pets`);
        // player.inventory.setItem(slot,'stone') // setStackInSlot also good, player.inventory required tho!
    }
    // player.tell(`${event.server.lootData.getLootTable('gameplay/piglin_bartering').getRandomItems(???)}`) // not sure how to pass LootParams_
})