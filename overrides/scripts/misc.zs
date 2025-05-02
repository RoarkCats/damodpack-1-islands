craftingTable.removeByName("mysticalagriculture:essence/common/steel_ingot");

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