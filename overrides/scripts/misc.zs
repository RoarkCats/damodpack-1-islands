craftingTable.removeByName("mysticalagriculture:essence/common/steel_ingot");

craftingTable.addShaped("menril_sapling_renewal", <item:integrateddynamics:menril_sapling>, [
    [<item:minecraft:air>, <item:integrateddynamics:menril_berries>, <item:minecraft:air>], 
    [<item:integrateddynamics:menril_berries>, <tag:items:minecraft:saplings>, <item:integrateddynamics:menril_berries>], 
    [<item:minecraft:air>, <item:integrateddynamics:crystalized_menril_chunk>, <item:minecraft:air>]]);

craftingTable.addShaped("bundle", <item:minecraft:bundle>, [
    [<item:minecraft:string>], 
    [<tag:items:forge:leather>]]);

recipes.removeByName("immersiveengineering:alloysmelter/brass"); // balances out create again

smoker.addRecipe("smoked_phantom_meat", <item:unusual_delight:cooked_phantom_meat>, <item:unusual_delight:raw_phantom_meat>, 0.35, 100);