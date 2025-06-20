ServerEvents.recipes(event => {
    // Remove Steel Recipe from Etrionic Blast Furnace
    event.remove({ id: "ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals" });

    // Remove the Etrionic Blast Furnace crafting recipe
    event.remove({ id: "ad_astra:etrionic_blast_furnace" });

    event.remove({ id: "mcore:steel_scrap" });

    event.remove({ id: "thermal:machines/smelter/smelter_alloy_steel" });

    event.remove({ id: "ad_astra:smelting/desh_ingot_from_smelting_raw_desh"});

    event.remove({ id: "ad_astra:smelting/ostrum_ingot_from_smelting_raw_ostrum"});

    event.remove({ id: "ad_astra:smelting/calorite_ingot_from_smelting_deepslate_calorite_ore"});

    event.remove({ id: "ad_astra:smelting/calorite_ingot_from_smelting_raw_calorite"});

    event.remove({ id: "ad_astra:smelting/ostrum_ingot_from_smelting_deepslate_ostrum_ore"});

    event.remove({ id: "ad_astra:smelting/desh_ingot_from_smelting_deepslate_desh_ore"})

    event.remove({ id: "immersiveengineering:crafting/raw_hammercrushing_iron"})

    event.remove({ id: "immersiveengineering:crafting/raw_hammercrushing_iron"})

    event.remove({ id: "ad_astra:fan"})

    event.remove({ id: "ad_astra:steel_engine" })

    event.remove({ id: "immersiveengineering:crafting/plate_steel_hammering"})

    event.remove({ id: "immersiveengineering:blueprint/graphite_electrode"})

    event.recipes.immersiveengineeringMetalPress("immersiveengineering:graphite_electrode", "12x immersiveengineering:ingot_hop_graphite", "immersiveengineering:mold_rod");

    event.remove({ id: "immersiveengineering:metal/press/electrode"})

    event.remove({ id: "ad_astra:fuel_refinery"})

    "event.recipes.immersiveengineeringArcFurnace('ad_astra:ostrum_ingot', '2x ad_astra:raw_ostrum')"

        event.custom({
            type: "immersiveengineering:arc_furnace",
            results: [
                { item: "ad_astra:ostrum_ingot" } // Output item (Steel Ingot)
            ],
            input: {
                tag: "ad_astra:raw_ostrum" // Input item (Iron Ingot)
            },
            additives: [
                // Optional additive (Coal or Coal Coke)
            ],
            slag: { item: "immersiveengineering:slag" }, // Optional byproduct
            time: 400, // Processing time in ticks
            energy: 204800 // Energy cost (FE)
        });

        event.remove({id: "as_astra:smelting/ostrum_ingot_from_smelting_mars_ostrum_ore"})

        event.remove({id: /ad_astra:blasting\/ostrum_ingot.*/}) // Remove all ostrum blasting recipes

        event.remove({id: /enderio:smelting\/ad_astra\/smelting\/ostrum_ingot.*/})

        event.recipes.enderio.alloy_smelting(
            "ad_astra:ostrum_ingot",
            Ingredient.of("ad_astra:raw_ostrum", 2)
        ).energy(4800).smelting();

        event.remove({id: "thermal:furnace_324064343"})

        event.remove({id: "ad_astra:smelting/ostrum_ingot_from_smelting_mars_ostrum_ore"})

        event.remove({id: "thermal:furnace_1253146086"})

        event.remove({id: "immersiveengineering:crafting/plate_ostrum_hammering"})
        
        event.remove({id: "create:pressing/compat/immersiveengineering/plate_steel"})

        event.remove({id: "create:pressing/steel_ingot"})

        event.remove({id: "createaddition:pressing/steel_ingot"})

        event.remove({id: "ad_astra:compressing/steel_plate_from_compressing_steel_blocks"})

        event.remove({id: "ad_astra:compressing/steel_plate_from_compressing_steel_ingots"})

        event.custom({
            type: "immersiveengineering:arc_furnace",
            results: [
                { item: "ad_astra:calorite_ingot" } // Output item (Steel Ingot)
            ],
            input: {
                tag: "ad_astra:raw_calorite" // Input item (Iron Ingot)
            },
            additives: [
                // Optional additive (Coal or Coal Coke)
            ],
            slag: { item: "immersiveengineering:slag" }, // Optional byproduct
            time: 400, // Processing time in ticks
            energy: 204800 // Energy cost (FE)
        });
        
        event.remove({id: "ad_astra:smelting/calorite_ingot_from_smelting_venus_calorite_ore"})

        event.remove({id: /ad_astra:blasting\/calorite_ingot.*/}) // Remove all calorite ingot blasting recipes

        event.remove({id: /enderio:smelting\/ad_astra\/smelting\/calorite_ingot.*/})

        event.recipes.enderio.alloy_smelting(
            "ad_astra:calorite_ingot",
            Ingredient.of("ad_astra:raw_calorite", 2)
        ).energy(9600).smelting();

        event.remove({id: "create:crushing/compat/immersiveengineering/coal_coke"})

        event.remove({id: "createaddtion:compat/immersiveengineering/crushing/coal_coke"})

        event.remove({id: "create:crushing/compat/immersiveengineering/coke_block"})

        event.remove({id: "createaddtion:compat/immersiveengineering/crushing/coke_block"})

        event.remove({id: "immersive_aircraft:gyrodyne"})

        event.remove({id: "immersive_aircraft:propeller"})
        
        event.remove({id: "immersive_aircraft:engine"})

        // event.remove({id: "mysticalagriculture:essence/common/steel_ingot"})
        event.shaped("2x mekanism:ingot_steel", ["EEE","E E","EEE"], {E:"mysticalagriculture:steel_essence"}) // nerf steel recipe to 2 count, dapack file still req so myst agri doesnt warn the recipe id missing (cant set here for some reason, tried ct too)

        event.custom({
            type: "ad_astra:compressing",
            cookingtime: 150,
            energy: 20,
            ingredient: {
              tag: "forge:ingots/steel"
            },
            result: {
              id: "ad_astra:steel_plate",
              count: 1
            },
          })

})
