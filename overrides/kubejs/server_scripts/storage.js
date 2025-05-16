ServerEvents.recipes(event => {

    //-- Make tier upgrades use previous tier
    let mod = 'storagedrawers'
    let tiers = ['obsidian', 'iron', 'gold', 'diamond', 'emerald'];
    for (let i=1; i<tiers.length; i++) {
        event.replaceInput({id:`${mod}:${tiers[i]}_storage_upgrade`}, `${mod}:upgrade_template`, `${mod}:${tiers[i-1]}_storage_upgrade`);
    }

    //-- Modified recipes

    // storage controllers
    let controller = [
        ['#forge:ingots/steel', '#forge:dusts/obsidian', '#forge:ingots/steel'],
        ['minecraft:comparator', '#forge:chests/wooden', 'minecraft:comparator'],
        ['#forge:ingots/steel', '#forge:dusts/obsidian', '#forge:ingots/steel']
    ];
    event.remove({id:'sophisticatedstorage:controller'});
    event.shaped('sophisticatedstorage:controller', controller);
    // variant
    controller[1][1] = '#storagedrawers:drawers';
    event.remove({id:'storagedrawers:controller'});
    event.shaped('storagedrawers:controller', controller);

    // compacting tier-2
    let compacting_2 = [
        ['minecraft:smooth_stone', 'minecraft:piston', 'minecraft:smooth_stone'],
        ['#forge:ingots/steel', '#storagedrawers:full_drawers', '#forge:ingots/steel'],
        ['minecraft:smooth_stone', '#forge:ingots/iron', 'minecraft:smooth_stone']
    ];
    event.remove({id:'storagedrawers:compacting_drawers_2'});
    event.shaped('storagedrawers:compacting_drawers_2', compacting_2);
    // variant
    compacting_2[1][1] = '#storagedrawers:half_drawers';
    event.remove({id:'storagedrawers:compacting_half_drawers_2'});
    event.shaped('storagedrawers:compacting_half_drawers_2', compacting_2);

    // compacting tier-3
    let compacting_3 = [
        ['minecraft:smooth_stone', '#forge:ingots/steel', 'minecraft:smooth_stone'],
        ['minecraft:piston', '#storagedrawers:full_drawers', 'minecraft:piston'],
        ['#forge:ingots/steel', '#forge:ingots/iron', '#forge:ingots/steel']
    ];
    event.remove({id:'storagedrawers:compacting_drawers_3'});
    event.shaped('storagedrawers:compacting_drawers_3', compacting_3);
    // variant
    compacting_3[1][1] = '#storagedrawers:half_drawers';
    event.remove({id:'storagedrawers:compacting_half_drawers_3'});
    event.shaped('storagedrawers:compacting_half_drawers_3', compacting_3);

    // integrated dynamics storage
    event.remove({id:'integratedterminals:crafting/part_terminal_storage'});
    event.shaped('integratedterminals:part_terminal_storage', [
        ['#forge:dusts/glowstone','integratedterminals:menril_glass','#forge:dusts/glowstone'],
        ['integrateddynamics:variable_transformer_output','integrateddynamics:part_display_panel','integrateddynamics:variable_transformer_input'],
        ['#forge:dusts/glowstone','enderio:conductive_alloy_ingot','#forge:dusts/glowstone']
    ]);

    let menril = 'integrateddynamics:crystalized_menril_chunk';
    function part_interface(center) {return [
        ['', 'enderio:pulsating_alloy_ingot', ''],
        [menril, center, menril],
        [menril, menril, menril]
    ];}
    let types = [['item','#forge:chests/wooden'], ['fluid','minecraft:bucket'], ['energy','integrateddynamics:energy_battery']];
    for (const type of types) {
        event.remove({id:`integratedtunnels:crafting/part_interface_${type[0]}`});
        event.shaped(`4x integratedtunnels:part_interface_${type[0]}`, part_interface(type[1]));
    }

    // trash cans
    types[1][0] = 'liquid';
    types[2][1] = '#forge:dusts/redstone';
    for (const type of types) {
        event.remove({id:`trashcans:${type[0]}_trash_can`});
        event.shaped(`trashcans:${type[0]}_trash_can`, [
            ['#forge:ingots/steel','#forge:ingots/steel','#forge:ingots/steel'],
            ['#forge:cobblestone',type[1],'#forge:cobblestone'],
            ['#forge:cobblestone','sophisticatedstorage:void_upgrade','#forge:cobblestone']
        ]);
    }

    //-- New recipes
    event.shaped('storagedrawers:creative_storage_upgrade', [
        ['mekanism:pellet_antimatter', 'storagedrawers:void_upgrade', 'mekanism:pellet_antimatter'],
        ['storagedrawers:emerald_storage_upgrade', '#forge:ingots/netherite', 'storagedrawers:emerald_storage_upgrade'],
        ['mekanism:pellet_antimatter', 'storagedrawers:void_upgrade', 'mekanism:pellet_antimatter']
    ]);
})