
craftingTable.addShaped("steel_engine", <item:ad_astra:steel_engine>, [
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>], 
    [<item:immersiveengineering:plate_steel>, <item:ad_astra:engine_frame>, <item:immersiveengineering:plate_steel>], 
    [<item:minecraft:air>, <item:ad_astra:fan>, <item:minecraft:air>]]);
  craftingTable.addShaped("graphite_fan", <item:ad_astra:fan>, [
    [<item:immersiveengineering:ingot_hop_graphite>, <item:minecraft:air>, <item:immersiveengineering:ingot_hop_graphite>], 
    [<item:minecraft:air>, <item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0}), <item:minecraft:air>], 
    [<item:immersiveengineering:ingot_hop_graphite>, <item:minecraft:air>, <item:immersiveengineering:ingot_hop_graphite>]]);

  // Define a shapeless recipe with 5 ingredients
  craftingTable.addShapeless("steel_to_plate_hammer", <item:immersiveengineering:plate_steel>, [
      <item:immersiveengineering:hammer>,
      <item:immersiveengineering:ingot_steel>,
      <item:immersiveengineering:ingot_steel>,
      <item:immersiveengineering:ingot_steel>,
      <item:immersiveengineering:ingot_steel>
  ]);
craftingTable.addShaped("fuel_refinery", <item:ad_astra:fuel_refinery>, [
    [<item:immersiveengineering:plate_steel>, <item:immersiveengineering:plate_steel>, <item:immersiveengineering:plate_steel>], 
    [<item:ad_astra:oil_bucket>, <item:immersiveengineering:heavy_engineering>, <item:ad_astra:oil_bucket>], 
    [<item:immersiveengineering:plate_steel>, <item:immersiveengineering:plate_steel>, <item:immersiveengineering:plate_steel>]]);

craftingTable.removeByName("mysticalagriculture:essence/common/steel_ingot");

craftingTable.addShaped("bill_cipher_pet", <item:inventorypets:pet_illuminati>, [
    [<item:minecraft:air>, <item:mekanism:pellet_polonium>, <item:minecraft:air>], 
    [<item:mekanism:pellet_polonium>, <item:minecraft:nether_star>, <item:mekanism:pellet_polonium>], 
    [<item:minecraft:emerald_block>, <item:mekanism:pellet_polonium>, <item:minecraft:emerald_block>]]);

craftingTable.addShaped("engine", <item:immersive_aircraft:engine>, [
    [<item:minecraft:netherite_scrap>, <item:immersiveengineering:plate_steel>, <item:minecraft:netherite_scrap>], 
    [<item:minecraft:piston>, <item:minecraft:blast_furnace>, <item:minecraft:piston>], 
    [<item:immersiveengineering:plate_steel>, <item:immersive_aircraft:boiler>, <item:immersiveengineering:plate_steel>]]);

craftingTable.addShaped("gyrodyne", <item:immersive_aircraft:gyrodyne>, [
    [<item:immersiveengineering:plate_steel>, <item:immersive_aircraft:sail>, <item:immersiveengineering:plate_steel>], 
    [<item:immersive_aircraft:hull>, <item:immersive_aircraft:propeller>, <item:immersive_aircraft:hull>], 
    [<item:immersiveengineering:plate_steel>, <item:immersive_aircraft:sail>, <item:immersiveengineering:plate_steel>]]);

craftingTable.addShaped("propeller", <item:immersive_aircraft:propeller>, [
    [<item:immersiveengineering:plate_steel>, <item:immersiveengineering:plate_steel>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:immersiveengineering:plate_steel>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:immersiveengineering:plate_steel>, <item:immersiveengineering:plate_steel>]]);

    craftingTable.addShaped("pet_squid", <item:inventorypets:pet_squid>, [
    [<item:inventorypets:nugget_lapis>, <item:minecraft:netherite_scrap>, <item:inventorypets:nugget_lapis>], 
    [<item:inventorypets:nugget_lapis>, <item:minecraft:diamond>, <item:inventorypets:nugget_lapis>], 
    [<item:inventorypets:nugget_lapis>, <item:minecraft:netherite_scrap>, <item:inventorypets:nugget_lapis>]]);