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
                { item: "minecraft:air" } // Optional additive (Coal or Coal Coke)
            ],
            slag: { item: "immersiveengineering:slag" }, // Optional byproduct
            time: 400, // Processing time in ticks
            energy: 51200 // Energy cost (FE)
        });

        event.remove({id: "ad_astra:blasting/ostrum_ingot_from_blasting_raw_ostrum"})

        event.remove({id: "ad_astra:blasting/ostrum_ingot_from_blasting_deepslate_ostrum_ore"})

        event.remove({id: "ad_astra:blasting/ostrum_ingot_from_blasting_mars_ostrum_ore"})

        event.remove({id: "as_astra:smelting/ostrum_ingot_from_smelting_mars_ostrum_ore"})

        event.remove({id: "ad_astra:blasting/osturm_ingot_from_blasting_raw_ostrum"})

        event.remove({id: "thermal:furnace_324064343"})

        event.remove({id: "ad_astra:smelting/ostrum_ingot_from_smelting_mars_ostrum_ore"})

        event.remove({id: "thermal:furnace_1253146086"})

        event.remove({id: "immersiveengineering:crafting/plate_ostrum_hammering"})

        event.remove({id: "mysticalagriculture:seed/infusion/steel"})
        
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
                { item: "minecraft:air" } // Optional additive (Coal or Coal Coke)
            ],
            slag: { item: "immersiveengineering:slag" }, // Optional byproduct
            time: 400, // Processing time in ticks
            energy: 51200 // Energy cost (FE)
        });

        event.remove({id: "ad_astra:blasting/calorite_ingot_from_blasting_raw_calorite"})

        event.remove({id: "ad_astra:blasting/calorite_ingot_from_blasting_venus_calorite_ore"})

        event.remove({id: "ad_astra:blasting/calorite_ingot_from_blasting_deepslate_calorite_ore"})

        event.remove({id: "ad_astra:blasting/calorite_ingot_from_smelting_venus_calorite_ore"})

        event.remove({id: "enderio:smelting/ad_astra/smelting/calorite_ingot_from_smelting_venus_calorite_ore"})

        event.remove({id: "enderio:smelting/ad_astra/smelting/calorite_ingot_from_smelting_raw_calorite"})

        event.remove({id: "ad_astra:smelting/calorite_ingot_from_smelting_venus_calorite_ore"})

        event.remove({id: "enderio:smelting/ad_astra/smelting/calorite_ingot_from_smelting_deepslate_calorite_ore"})

        event.remove({id: "inventorypets:illuminati_pet"})

        event.remove({id: "create:crushing/compat/immersiveengineering/coal_coke"})

        event.remove({id: "createaddtion:compat/immersiveengineering/crushing/coal_coke"})

        event.remove({id: "create:crushing/compat/immersiveengineering/coke_block"})

        event.remove({id: "createaddtion:compat/immersiveengineering/crushing/coke_block"})

        event.remove({id: "immersive_aircraft:gyrodyne"})

        event.remove({id: "immersive_aircraft:propeller"})
        
        event.remove({id: "immersive_aircraft:engine"})

        event.remove({id: "inventorypets:pet_squid"})





        event.custom({
            type: "ad_astra:compressing",
            input: {
              item: "immersiveengineering:steel_ingot"
            },
            result: {
              item: "ad_astra:steel_plate",
              count: 1
            },
          })

        })
        
    
    
    


