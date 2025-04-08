craftingTable.removeByRegex("^createsifter:.+_mesh");

craftingTable.addShaped("string_mesh", <item:createsifter:string_mesh>, [
    [<tag:items:forge:string>, <item:minecraft:stick>, <tag:items:forge:string>], 
    [<item:minecraft:stick>, <tag:items:forge:string>, <item:minecraft:stick>], 
    [<tag:items:forge:string>, <item:minecraft:stick>, <tag:items:forge:string>]]);

craftingTable.addShaped("andesite_mesh", <item:createsifter:andesite_mesh>, [
    [<item:create:andesite_alloy>, <item:minecraft:stick>, <item:create:andesite_alloy>], 
    [<item:minecraft:stick>, <item:create:andesite_alloy>, <item:minecraft:stick>], 
    [<item:create:andesite_alloy>, <item:minecraft:stick>, <item:create:andesite_alloy>]]);

craftingTable.addShaped("zinc_mesh", <item:createsifter:zinc_mesh>, [
    [<tag:items:forge:ingots/zinc>, <item:minecraft:stick>, <tag:items:forge:ingots/zinc>], 
    [<item:minecraft:stick>, <tag:items:forge:ingots/zinc>, <item:minecraft:stick>], 
    [<tag:items:forge:ingots/zinc>, <item:minecraft:stick>, <tag:items:forge:ingots/zinc>]]);

craftingTable.addShaped("brass_mesh", <item:createsifter:brass_mesh>, [
    [<tag:items:forge:ingots/brass>, <item:minecraft:stick>, <tag:items:forge:ingots/brass>], 
    [<item:minecraft:stick>, <tag:items:forge:ingots/brass>, <item:minecraft:stick>], 
    [<tag:items:forge:ingots/brass>, <item:minecraft:stick>, <tag:items:forge:ingots/brass>]]);

craftingTable.addShaped("advanced_brass_mesh", <item:createsifter:advanced_brass_mesh>, [
    [<tag:items:forge:nuggets/brass>, <tag:items:forge:plates/brass>, <tag:items:forge:nuggets/brass>], 
    [<tag:items:forge:plates/brass>, <item:createsifter:brass_mesh>, <tag:items:forge:plates/brass>], 
    [<tag:items:forge:nuggets/brass>, <tag:items:forge:plates/brass>, <tag:items:forge:nuggets/brass>]]);