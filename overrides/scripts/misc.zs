craftingTable.addShaped("menril_sapling_renewal", <item:integrateddynamics:menril_sapling>, [
    [<item:minecraft:air>, <item:integrateddynamics:menril_berries>, <item:minecraft:air>], 
    [<item:integrateddynamics:menril_berries>, <tag:items:minecraft:saplings>, <item:integrateddynamics:menril_berries>], 
    [<item:minecraft:air>, <item:integrateddynamics:crystalized_menril_chunk>, <item:minecraft:air>]]);

craftingTable.addShaped("bundle", <item:minecraft:bundle>, [
    [<item:minecraft:string>], 
    [<tag:items:forge:leather>]]);

recipes.removeByName("immersiveengineering:alloysmelter/brass"); // balances out create again

recipes.removeByName("regions_unexplored:raw_redstone_block"); // current recipe is a dupe exploit, 4->12+, now 13->12+
craftingTable.addShaped("raw_redstone_block", <item:regions_unexplored:raw_redstone_block>, [
    [<item:minecraft:air>, <tag:items:forge:dusts/redstone>, <item:minecraft:air>],
    [<tag:items:forge:dusts/redstone>, <tag:items:forge:storage_blocks/redstone>, <tag:items:forge:dusts/redstone>],
    [<item:minecraft:air>, <tag:items:forge:dusts/redstone>, <item:minecraft:air>]]);

recipes.removeByName("alexsmobs:sopa_de_macaco");
craftingTable.addShaped("sopa_de_macaco", <item:alexsmobs:sopa_de_macaco>, [
    [<item:minecraft:bowl>, <item:neapolitan:banana>],
    [<item:minecraft:brown_mushroom>, <item:minecraft:bone>]
]);

craftingTable.addShaped("light", <item:minecraft:light>*8, [
    [<item:minecraft:air>, <tag:items:forge:dusts/glowstone>, <item:minecraft:air>],
    [<tag:items:forge:dusts/glowstone>, <item:mekanism:pellet_antimatter>, <tag:items:forge:dusts/glowstone>],
    [<item:minecraft:air>, <tag:items:forge:dusts/glowstone>, <item:minecraft:air>]
]);

craftingTable.addShaped("pipez_infinity_upgrade", <item:pipez:infinity_upgrade>, [
    [<item:mekanism:pellet_antimatter>, <item:fluxnetworks:flux_block>, <item:mekanism:pellet_antimatter>],
    [<item:fluxnetworks:flux_block>, <item:pipez:ultimate_upgrade>, <item:fluxnetworks:flux_block>],
    [<item:mekanism:pellet_antimatter>, <item:fluxnetworks:flux_block>, <item:mekanism:pellet_antimatter>]
]);

recipes.removeByName("twilightforest:uncrafting_table");
craftingTable.addShaped("uncrafting_table", <item:twilightforest:uncrafting_table>, [
    [<item:minecraft:crafting_table>, <item:twilightforest:magic_beans>,<item:minecraft:crafting_table>],
    [<item:twilightforest:fiery_blood>, <item:twilightforest:lamp_of_cinders>,<item:twilightforest:fiery_tears>],
    [<item:minecraft:crafting_table>, <item:twilightforest:alpha_yeti_fur>,<item:minecraft:crafting_table>]
]);

craftingTable.addShaped("log_chests", <item:minecraft:chest>*4, [
    [<tag:items:minecraft:logs>,<tag:items:minecraft:logs>,<tag:items:minecraft:logs>],
    [<tag:items:minecraft:logs>,<item:minecraft:air>,<tag:items:minecraft:logs>],
    [<tag:items:minecraft:logs>,<tag:items:minecraft:logs>,<tag:items:minecraft:logs>]
]);