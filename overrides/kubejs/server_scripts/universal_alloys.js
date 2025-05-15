ServerEvents.recipes(event => {
    //-- Alloying methods:
    // enderio alloy smelter
    // immersive alloy kiln
    // immersive arc furnace
    // created heated mixing
    // mekanism infuser
    function alloy(machines, output, inputs, energy, infusion, amount) {
        // machines: '10110' (determines which machines can make the alloy)
        energy = energy || 4800;
        amount = amount || 10;

        if (machines[0]==1) {
            event.recipes.enderio.alloy_smelting(output, inputs, energy);
        }
        if (machines[1]==1) {
            event.recipes.immersiveengineering.alloy(output, inputs[0], inputs[1]);
        }
        if (machines[2]==1) {
            event.recipes.immersiveengineering.arc_furnace([output], inputs[0], inputs.slice(1)).time(100).energy(energy*10);
        }
        if (machines[3]==1) {
            event.recipes.create.mixing(output, inputs).heated();
        }
        if (infusion && machines[4]==1) {
            event.custom({
                type: 'mekanism:metallurgic_infusing',
                chemicalInput: {
                    amount: amount,
                    infuse_type: infusion
                },
                itemInput: {
                    ingredient: {
                        item: inputs[0]
                    }
                },
                output: {
                    item: output
                }
            });
        }
    }
    // example usage
    // alloy('0111','minecraft:heart_of_the_sea',['minecraft:prismarine_shard','minecraft:prismarine_crystals','#forge:ingots/gold']);
    // alloy('11101','minecraft:heart_of_the_sea',['minecraft:prismarine_shard','minecraft:prismarine_crystals'],9600,'mekanism:gold');

    
    alloy('0111', 'enderio:copper_alloy_ingot', ['#forge:ingots/copper','#forge:silicon'], 3200);
    alloy('0111', 'enderio:redstone_alloy_ingot', ['#forge:dusts/redstone','#forge:silicon'], 3200);
    alloy('0111', 'enderio:pulsating_alloy_ingot', ['#forge:ingots/iron','#forge:ender_pearls'], 4800);
    alloy('0111', 'enderio:vibrant_alloy_ingot', ['enderio:energetic_alloy_ingot','#forge:ender_pearls'], 4800);
    alloy('0011', 'enderio:energetic_alloy_ingot', ['#forge:ingots/gold','#forge:dusts/redstone','#forge:dusts/glowstone'], 4800);
    alloy('0011', 'enderio:conductive_alloy_ingot', ['enderio:copper_alloy_ingot','#forge:ingots/iron','#forge:dusts/redstone'], 4800);
    alloy('0111', 'enderio:soularium_ingot', ['#forge:ingots/gold','#minecraft:soul_fire_base_blocks'], 5600);
    alloy('0011', 'enderio:dark_steel_ingot', ['#forge:ingots/iron','#forge:dusts/coal','#forge:obsidian'], 6400);
    alloy('0011', 'enderio:end_steel_ingot', ['enderio:dark_steel_ingot','#forge:end_stones','#forge:obsidian'], 6400);
})