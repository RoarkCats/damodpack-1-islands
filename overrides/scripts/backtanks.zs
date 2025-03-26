// Backtank util tag(s)
<tag:items:dapack:backtanks_pre_diamond>.addId(<resource:create:copper_backtank>);
<tag:items:dapack:backtanks_pre_diamond>.addId(<resource:creategoggles:chainmail_backtank>);
<tag:items:dapack:backtanks_pre_diamond>.addId(<resource:creategoggles:golden_backtank>);
<tag:items:dapack:backtanks_pre_diamond>.addId(<resource:creategoggles:iron_backtank>);
<tag:items:dapack:backtanks_pre_diamond>.addId(<resource:creategoggles:leather_backtank>);
//note following tag unused
<tag:items:dapack:backtanks>.add(<tag:items:dapack:backtanks_pre_diamond>);
<tag:items:dapack:backtanks>.addId(<resource:creategoggles:diamond_backtank>);
<tag:items:dapack:backtanks>.addId(<resource:create:netherite_backtank>);

// Remove existing recipes
smithing.removeByName("create:crafting/appliances/netherite_backtank");
smithing.removeByName("create:crafting/appliances/netherite_backtank_from_netherite");
craftingTable.removeByInput(<item:create:copper_backtank>);

// Add replacements (transform so keeps air)
smithing.addTransformRecipe("chainmail_backtank", <item:creategoggles:chainmail_backtank>, <tag:items:forge:slimeballs>, <tag:items:dapack:backtanks_pre_diamond>, <item:minecraft:chainmail_chestplate>);
smithing.addTransformRecipe("golden_backtank", <item:creategoggles:golden_backtank>, <tag:items:forge:slimeballs>, <tag:items:dapack:backtanks_pre_diamond>, <item:minecraft:golden_chestplate>);
smithing.addTransformRecipe("iron_backtank", <item:creategoggles:iron_backtank>, <tag:items:forge:slimeballs>, <tag:items:dapack:backtanks_pre_diamond>, <item:minecraft:iron_chestplate>);
smithing.addTransformRecipe("leather_backtank", <item:creategoggles:leather_backtank>, <tag:items:forge:slimeballs>, <tag:items:dapack:backtanks_pre_diamond>, <item:minecraft:leather_chestplate>);
smithing.addTransformRecipe("diamond_backtank", <item:creategoggles:diamond_backtank>, <tag:items:forge:slimeballs>, <tag:items:dapack:backtanks_pre_diamond>, <item:minecraft:diamond_chestplate>);
smithing.addTransformRecipe("netherite_backtank", <item:create:netherite_backtank>, <item:minecraft:netherite_upgrade_smithing_template>, <item:creategoggles:diamond_backtank>, <tag:items:forge:ingots/netherite>);