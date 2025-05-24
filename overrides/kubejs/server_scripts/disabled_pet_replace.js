function run_op_cmd(player, cmd) {
    player.server.runCommandSilent(`execute as ${player.name.string} at @s run ${cmd}`);
} // if you just do player.runCommand... then it'll fail if player's doesn't have perms

PlayerEvents.inventoryChanged(event => {
    const {item, player/*, slot*/} = event;

    if (item.hasTag('dapack:disabled_pets')) {
        let slot = player.inventory.find(item); // findSlotMatchingItem limited to hotbar/inv, else -1
        // player.tell(`found: ${item} | ${slot} | ${player.inventory.findSlotMatchingItem(item)}`) // debug
        if (0 <= slot && slot <= 35) {slot = 'container.'+slot;}
        else if (slot == 40) {slot = 'weapon.offhand';}
        else {return;} // invalid slot or armor
        run_op_cmd(player, `loot replace entity @s ${slot} loot dapack:replacement_pets`);
        run_op_cmd(player, 'playsound block.fire.extinguish master @s ~ ~ ~ 0.5 1.2');
        run_op_cmd(player, 'title @s actionbar {"text":"Inventory pet disabled","color":"red"}');
        // player.inventory.setItem(slot,'stone') // setStackInSlot also good, player.inventory required tho!
    }
    // player.tell(`${event.server.lootData.getLootTable('gameplay/piglin_bartering').getRandomItems(???)}`) // not sure how to pass LootParams_
})