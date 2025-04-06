craftingTable.removeByName("mysticalagriculture:essence/common/steel_ingot");

craftingTable.addShaped("menril_sapling_renewal", <item:integrateddynamics:menril_sapling>, [
    [<item:minecraft:air>, <item:integrateddynamics:menril_berries>, <item:minecraft:air>], 
    [<item:integrateddynamics:menril_berries>, <tag:minecraft:saplings>, <item:integrateddynamics:menril_berries>], 
    [<item:minecraft:air>, <item:integrateddynamics:crystalized_menril_chunk>, <item:minecraft:air>]]);

craftingTable.addShaped("bundle", <item:minecraft:bundle>, [
    [<item:minecraft:string>], 
    [<tag:forge:leather>]]);