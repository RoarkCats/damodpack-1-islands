// Feed Bag
craftingTable.removeByName("inventorypets:feed_bag");
craftingTable.addShaped("feed_bag", <item:inventorypets:feed_bag>, [
    [<tag:items:forge:leather>, <item:minecraft:string>, <tag:items:forge:leather>], 
    [<tag:items:forge:leather>, <item:minecraft:diamond>, <tag:items:forge:leather>], 
    [<tag:items:forge:leather>, <tag:items:forge:chests/wooden>, <tag:items:forge:leather>]]);


// Pets
craftingTable.removeByName("inventorypets:illuminati_pet");
craftingTable.addShaped("bill_cipher_pet", <item:inventorypets:pet_illuminati>, [
    [<item:minecraft:air>, <item:minecraft:nether_star>, <item:minecraft:air>], 
    [<item:mekanism:pellet_polonium>, <item:mekanism:pellet_antimatter>, <item:mekanism:pellet_polonium>], 
    [<item:minecraft:emerald_block>, <item:mekanism:pellet_polonium>, <item:minecraft:emerald_block>]]);

craftingTable.removeByName("inventorypets:squid_pet");
craftingTable.addShaped("squid_pet", <item:inventorypets:pet_squid>, [
    [<item:inventorypets:nugget_lapis>, <item:minecraft:netherite_scrap>, <item:inventorypets:nugget_lapis>], 
    [<item:inventorypets:nugget_lapis>, <item:minecraft:diamond>, <item:inventorypets:nugget_lapis>], 
    [<item:inventorypets:nugget_lapis>, <item:minecraft:netherite_scrap>, <item:inventorypets:nugget_lapis>]]);

craftingTable.removeByName("inventorypets:anvil_pet");
craftingTable.addShaped("anvil_pet", <item:inventorypets:pet_anvil>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:diamond>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:anvil>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_block>, <item:minecraft:gold_block>, <item:minecraft:iron_block>]]);

craftingTable.removeByName("inventorypets:slime_pet");
craftingTable.addShaped("slime_pet", <item:inventorypets:pet_slime>, [
    [<item:minecraft:emerald>, <item:minecraft:enchanted_golden_apple>, <item:minecraft:emerald>], 
    [<item:minecraft:totem_of_undying>, <item:minecraft:slime_block>, <item:minecraft:totem_of_undying>], 
    [<item:minecraft:emerald>, <item:minecraft:nether_star>, <item:minecraft:emerald>]]);

craftingTable.removeByName("inventorypets:pingot_pet");
craftingTable.addShaped("pingot_pet", <item:inventorypets:pet_pingot>, [
    [<item:minecraft:lapis_lazuli>, <item:minecraft:diamond_pickaxe>, <item:minecraft:lapis_lazuli>], 
    [<item:createaddition:capacitor>, <item:pointblank:processor>, <item:createaddition:capacitor>], 
    [<item:minecraft:lapis_lazuli>, <item:createaddition:capacitor>, <item:minecraft:lapis_lazuli>]]);

craftingTable.removeByName("inventorypets:enderman_pet");
craftingTable.addShaped("enderman_pet", <item:inventorypets:pet_enderman>, [
    [<item:minecraft:obsidian>, <item:minecraft:ender_pearl>, <item:minecraft:obsidian>], 
    [<item:minecraft:totem_of_undying>, <item:minecraft:nether_star>, <item:minecraft:totem_of_undying>], 
    [<item:minecraft:obsidian>, <item:minecraft:ender_pearl>, <item:minecraft:obsidian>]]);

craftingTable.removeByName("inventorypets:iron_golem_pet");
craftingTable.addShaped("iron_golem_pet", <item:inventorypets:pet_iron_golem>, [
    [<item:minecraft:poppy>, <item:minecraft:carved_pumpkin>, <item:minecraft:poppy>], 
    [<item:minecraft:iron_block>, <item:minecraft:golden_apple>, <item:minecraft:iron_block>], 
    [<item:minecraft:poppy>, <item:minecraft:iron_block>, <item:minecraft:poppy>]]);

// Note: destroys items, uses ForgeCaps so can't set with NBT
// import crafttweaker.api.item.IItemStack;
// (output as IItemStack, inputs as IItemStack[][]) => {return <item:inventorypets:pet_double_chest>.withTag({Inventory:{Size:54,Items: inputs[0][1].tag["Inventory"]["Items"] }});}
craftingTable.removeByName("inventorypets:double_chest_pet");
craftingTable.addShaped("double_chest_pet", <item:inventorypets:pet_double_chest>, [
    [<tag:items:minecraft:planks>, <item:inventorypets:pet_chest>, <tag:items:minecraft:planks>], 
    [<tag:items:minecraft:planks>, <item:minecraft:diamond>, <tag:items:minecraft:planks>], 
    [<tag:items:minecraft:planks>, <item:minecraft:gold_ingot>, <tag:items:minecraft:planks>]]);
craftingTable.addShaped("sated_double_chest_pet", <item:inventorypets:pet_sated_double_chest>, [
    [<tag:items:minecraft:planks>, <item:inventorypets:pet_sated_chest>, <tag:items:minecraft:planks>], 
    [<tag:items:minecraft:planks>, <item:minecraft:diamond>, <tag:items:minecraft:planks>], 
    [<tag:items:minecraft:planks>, <item:minecraft:gold_ingot>, <tag:items:minecraft:planks>]]);

craftingTable.removeByName("inventorypets:brewing_stand_pet");
craftingTable.addShaped("brewing_stand_pet", <item:inventorypets:pet_brewing_stand>, [
    [<item:minecraft:diamond>, <item:minecraft:blaze_rod>, <item:minecraft:diamond>], 
    [<item:minecraft:nether_wart>, <item:minecraft:blaze_rod>, <item:minecraft:nether_wart>], 
    [<item:minecraft:brewing_stand>, <item:minecraft:cauldron>, <item:minecraft:brewing_stand>]]);

craftingTable.removeByName("inventorypets:enchanting_table_pet");
craftingTable.addShaped("enchanting_table_pet", <item:inventorypets:pet_enchanting_table>, [
    [<item:minecraft:lapis_lazuli>, <item:minecraft:diamond>, <item:minecraft:lapis_lazuli>], 
    [<tag:items:forge:bookshelves>, <item:minecraft:experience_bottle>, <tag:items:forge:bookshelves>], 
    [<tag:items:forge:bookshelves>, <item:minecraft:enchanting_table>, <tag:items:forge:bookshelves>]]);

craftingTable.removeByName("inventorypets:mickerson_pet");
craftingTable.addShaped("mickerson_pet", <item:inventorypets:pet_mickerson>, [
    [<item:minecraft:lapis_lazuli>, <item:minecraft:dragon_head>, <item:minecraft:lapis_lazuli>], 
    [<item:minecraft:netherite_ingot>, <item:minecraft:nether_star>, <item:minecraft:netherite_ingot>], 
    [<item:minecraft:lapis_lazuli>, <item:minecraft:netherite_ingot>, <item:minecraft:lapis_lazuli>]]);

craftingTable.removeByName("inventorypets:purplicious_cow_pet");
craftingTable.addShaped("purplicious_cow_pet", <item:inventorypets:pet_purplicious_cow>, [
    [<item:minecraft:popped_chorus_fruit>, <item:minecraft:ghast_tear>, <item:minecraft:popped_chorus_fruit>], 
    [<item:minecraft:ghast_tear>, <item:minecraft:nether_star>, <item:minecraft:ghast_tear>], 
    [<item:minecraft:popped_chorus_fruit>, <item:minecraft:ghast_tear>, <item:minecraft:popped_chorus_fruit>]]);

craftingTable.removeByName("inventorypets:sponge_pet");
craftingTable.addShaped("sponge_pet", <item:inventorypets:pet_sponge>, [
    [<item:minecraft:sponge>, <item:minecraft:netherite_scrap>, <item:minecraft:sponge>], 
    [<item:minecraft:netherite_scrap>, <item:minecraft:diamond>, <item:minecraft:netherite_scrap>], 
    [<item:minecraft:sponge>, <item:minecraft:netherite_scrap>, <item:minecraft:sponge>]]);

craftingTable.removeByName("inventorypets:cloud_pet");
craftingTable.addShaped("cloud_pet", <item:inventorypets:pet_cloud>, [
    [<item:minecraft:phantom_membrane>, <item:minecraft:nether_star>, <item:minecraft:phantom_membrane>], 
    [<item:minecraft:nether_star>, <item:minecraft:elytra>, <item:minecraft:nether_star>], 
    [<item:minecraft:phantom_membrane>, <item:minecraft:nether_star>, <item:minecraft:phantom_membrane>]]);

craftingTable.removeByName("inventorypets:loot_pet");
craftingTable.addShaped("loot_pet", <item:inventorypets:pet_loot>, [
    [<item:minecraft:netherite_scrap>, <item:minecraft:rabbit_foot>, <item:minecraft:netherite_scrap>], 
    [<item:minecraft:gold_block>, <item:minecraft:diamond_block>, <item:minecraft:gold_block>], 
    [<item:minecraft:netherite_scrap>, <item:minecraft:emerald_block>, <item:minecraft:netherite_scrap>]]);

craftingTable.removeByName("inventorypets:magma_cube_pet");
craftingTable.addShaped("magma_cube_pet", <item:inventorypets:pet_magma_cube>, [
    [<item:minecraft:magma_cream>, <item:minecraft:netherite_scrap>, <item:minecraft:magma_cream>], 
    [<item:alexsmobs:lava_bottle>, <item:botania:blaze_block>, <item:alexsmobs:lava_bottle>], 
    [<item:minecraft:magma_cream>, <item:minecraft:netherite_scrap>, <item:minecraft:magma_cream>]]);

// Disabled Pets
craftingTable.removeByName("inventorypets:petrifier"); // turns stuff into pets for free
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
craftingTable.removeByName("inventorypets:april_fool_pet");