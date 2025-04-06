// Feed Bag
craftingTable.addShaped("feed_bag", <item:inventorypets:feed_bag>, [
    [<tag:forge:leather>, <item:minecraft:string>, <tag:forge:leather>], 
    [<tag:forge:leather>, <item:minecraft:diamond>, <tag:forge:leather>], 
    [<tag:forge:leather>, <tag:forge:chests/wooden>, <tag:forge:leather>]]);


// Pets
craftingTable.removeByName("inventorypets:illuminati_pet");
craftingTable.addShaped("bill_cipher_pet", <item:inventorypets:pet_illuminati>, [
    [<item:minecraft:air>, <item:mekanism:pellet_polonium>, <item:minecraft:air>], 
    [<item:mekanism:pellet_polonium>, <item:minecraft:nether_star>, <item:mekanism:pellet_polonium>], 
    [<item:minecraft:emerald_block>, <item:mekanism:pellet_polonium>, <item:minecraft:emerald_block>]]);

craftingTable.removeByName("inventorypets:squid_pet");
craftingTable.addShaped("squid_pet", <item:inventorypets:pet_squid>, [
    [<item:inventorypets:nugget_lapis>, <item:minecraft:netherite_scrap>, <item:inventorypets:nugget_lapis>], 
    [<item:inventorypets:nugget_lapis>, <item:minecraft:diamond>, <item:inventorypets:nugget_lapis>], 
    [<item:inventorypets:nugget_lapis>, <item:minecraft:netherite_scrap>, <item:inventorypets:nugget_lapis>]]);

craftingTable.removeByName("inventorypets:anvil_pet");
craftingTable.addShaped("anvil_pet", <item:inventorypets:anvil_pet>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:diamond>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:anvil>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_block>, <item:minecraft:gold_block>, <item:minecraft:iron_block>]]);

// Disabled Pets
craftingTable.removeByName("inventorypets:lead_pet");
craftingTable.removeByName("inventorypets:nether_portal_pet");
craftingTable.removeByName("inventorypets:saddle_pet");
craftingTable.removeByName("inventorypets:flying_saddle_pet");
craftingTable.removeByName("inventorypets:end_portal_pet");
craftingTable.removeByName("inventorypets:biome_pet");
craftingTable.removeByName("inventorypets:grave_pet");
craftingTable.removeByName("inventorypets:meta_pet_zzz");
craftingTable.removeByName("inventorypets:juggernaut_pet");
craftingTable.removeByName("inventorypets:house_pet");
craftingTable.removeByName("inventorypets:moon_pet");
craftingTable.removeByName("inventorypets:black_hole_pet");