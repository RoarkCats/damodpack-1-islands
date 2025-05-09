ServerEvents.recipes(event => {

    //-- Gunmetal Ingot alloy recipes
    event.recipes.enderio.alloy_smelting(
        "pointblank:gunmetal_ingot",
        ["#forge:ingots/iron", "#forge:ingots/copper"]
    ).energy(4800);

    event.recipes.create.mixing("pointblank:gunmetal_ingot", ["#forge:ingots/iron", "#forge:ingots/copper"]).heated();

    event.recipes.immersiveengineering.alloy("pointblank:gunmetal_ingot", "#forge:ingots/iron", "#forge:ingots/copper");

    event.recipes.immersiveengineering.arc_furnace(
        ["pointblank:gunmetal_ingot"], // outputs[]
        "#forge:ingots/copper", // input
        ["#forge:ingots/iron"], // additives[]
    ).time(100).energy(102400);
    //----

    
    //-- Seq assembly helper functions
    let helperRecipesAdded = 0
    let operations = [event.recipes.createCutting, event.recipes.createPressing, event.recipes.createDeploying, event.recipes.createFilling]
    // Operations :: Cutting: 0, Pressing: 1, Deploying: 2 (+ Item), Filling: 3 (+Fluid)
    function seqAssRecipe(results, input, seq, incomplete, loops, helperRecipe) {
        loops = loops || 1 // defaults to 1 (optional inp)
        helperRecipe = helperRecipe || false
        let sequence = [] // compiled
        let op_inp = 0
        for (const s of seq) { // build compiled version
            if (!op_inp) {
                if (s <= 1) { // add operation
                    sequence.push( operations[s](incomplete, incomplete) )
                } else { op_inp = s } // unless input required
            } else { // then add operation next itr with input
                sequence.push( operations[op_inp](incomplete, [incomplete, s]) )
                op_inp = 0 // push operation with input item next in list
            }
        } // make recipe
        let rec = event.recipes.create.sequenced_assembly(
            results,
            helperRecipe ? 'minecraft:structure_void' : input, // use incomplete as initial item if helper required
            sequence
        ).transitionalItem(incomplete).loops(loops);
        //
        if (helperRecipe) { // generates a shaped recipe for the incomplete item at step 0 to deal with overlap issues
            helperRecipesAdded++
            let shape = toBin(helperRecipesAdded,8)
            shape = shape.substring(0,4) + 'I' + shape.substring(4)
            event.shaped(
                Item.of(incomplete,`{display:{Lore:['{"text":"Ammo: ${results[0].item.getDescription().getString()}","color":"gray","italic":false}']}, SequencedAssembly:{Step:0,id:"create:${rec.path}"}}`),
                [shape.substring(0,3),shape.substring(3,6),shape.substring(6,9)],
                {
                    I: input, // all uses have input as copper so no need to make more complicated
                    1: '#forge:nuggets/copper',
                    0: 'minecraft:air'
                }
            ).noMirror() // else >:(
        }
    }
    function toBin(num, leading_zeros) {
        return num.toString(2).padStart(leading_zeros,"0")
    }
    //----
    

    //-- Ammo seq assembly recipes
    let trans = "kubejs:incomplete_ammo" // transitional placeholder item used in all recipes

    event.shaped(Item.of('minecraft:structure_void',`{display:{Lore:['"Craft Incomplete Ammo instead"','"to begin making Point Blank ammos"']}}`), ['AV'], {A: trans, V: 'minecraft:structure_void'}) // jei info recipe
    // ~ EXAMPLE
    // seqAssRecipe([Item.of("pointblank:ammo9mm", 19)], "#forge:ingots/copper", [1,0,0,2,"#forge:gunpowder",2,"#forge:nuggets/lead"], trans, 1)
    // ~ This block is equivalent to the line above
    // event.recipes.create.sequenced_assembly(
    //     [Item.of("pointblank:ammo9mm", 19)], // final result
    //     "#forge:ingots/copper", // starting item
    //     [ // sequence
    //         event.recipes.createPressing(trans, trans),
    //         event.recipes.createCutting(trans, trans),
    //         event.recipes.createCutting(trans, trans),
    //         event.recipes.createDeploying(trans, [trans, "#forge:gunpowder"]),
    //         event.recipes.createDeploying(trans, [trans, "#forge:nuggets/lead"])
    //     ] // takes `trans` in and out
    // ).transitionalItem(trans).loops(1);

    let small_ammos = ["ammo9mm", "ammo45acp", "ammo57", "ammo357", "ammo50ae", "ammo46"]
    for (let i=0; i<small_ammos.length; i++) {
        seqAssRecipe(
            [Item.of("pointblank:"+small_ammos[i], 19)],
            "#forge:ingots/copper",
            [].concat( toBin(i+1, 3).split(""), [2,"#forge:gunpowder",2,"#forge:nuggets/lead"] ),
            trans, 1, true
        )
    } // 1 copper, 1 gunpowder

    let med_ammos = ["ammo545", "ammo556", "ammo68", "ammo762", "ammo12gauge", "doom_50calpistol"]
    for (let i=0; i<med_ammos.length; i++) {
        let count = 17; if (i==4) {count=10}; if (i==5) {count=16}
        seqAssRecipe(
            [Item.of("pointblank:"+med_ammos[i], count)],
            "#forge:ingots/copper",
            [].concat( [2,"#forge:ingots/copper"], toBin(i+1, 3).split(""), [2,"#forge:gunpowder",2,"#forge:nuggets/lead"] ),
            trans, 1, true
        )
    } // 2 copper, 1 gunpowder

    seqAssRecipe([Item.of("pointblank:ammo762x51", 16)], "#forge:ingots/copper", [2,"#forge:ingots/copper",2,"#forge:ingots/copper",1,0,0,2,"#forge:gunpowder",2,"#forge:nuggets/lead"], trans, 1, true) // 3 copper, 1 gunpowder
    // seqAssRecipe([Item.of("pointblank:doom_50calrifle", 16)], "#forge:ingots/copper", [2,"#forge:ingots/copper",2,"#forge:ingots/copper",1,0,1,2,"#forge:gunpowder",2,"#forge:nuggets/lead"], trans, 1, true) // 3 copper, 1 gunpowder

    seqAssRecipe([Item.of("pointblank:ammo338lapua", 10)], "#forge:ingots/copper", [2,"#forge:ingots/copper",1,0,2,"#forge:gunpowder",2,"#forge:nuggets/lead"], trans, 2, true)

    seqAssRecipe([Item.of("pointblank:ammo50bmg", 8)], "#forge:ingots/copper", [2,"#forge:ingots/copper",1,0,2,"#forge:gunpowder",2,"#forge:nuggets/lead"], trans, 3, true)
    // 4 copper, 3 gunpowder

    seqAssRecipe([Item.of("pointblank:doom_plasmacell", 13)], "#forge:ingots/copper", [2,"#forge:ingots/copper",1,2,"#forge:ingots/iron",1,0], trans, 1, true) // 2 copper, 1 iron

    seqAssRecipe([Item.of("pointblank:hl_rebar", 8)], "#forge:ingots/copper", [2,"#forge:ingots/copper",1,0,0], trans, 1, true) // 2 copper

    seqAssRecipe(["pointblank:doom_steelflechette"], "pointblank:doom_argent_ingot", [1,0,0], trans) // 1 argent ingot

    seqAssRecipe([Item.of("pointblank:ammolasercharge", 5)], "#forge:ingots/iron", [2,"#forge:ingots/copper",1,2,"#forge:dusts/redstone"], trans, 3) // 2 copper, 1 iron, 3 redstone

    // seqAssRecipe(["pointblank:grenade20mm"], "minecraft:tnt", [2,"#forge:ingots/copper",1,2,"#forge:ingots/iron",1], trans)
    seqAssRecipe(["pointblank:grenade40mm"], "minecraft:tnt", [2,"#forge:ingots/iron",1,2,"#forge:ingots/copper",1], trans)
    // 1 copper, 1 iron, 1 tnt

    seqAssRecipe(["pointblank:smaw_rocket"], "minecraft:tnt", [0,2,"pointblank:gunmetal_ingot",1], trans, 10)
    seqAssRecipe(["pointblank:at4_rocket"], "minecraft:tnt", [2,"pointblank:gunmetal_ingot",1,0], trans, 10)
    // 10 gunmetal, 1 tnt

    seqAssRecipe(["pointblank:javelin_rocket"], "pointblank:processor", [2,"pointblank:gunmetal_ingot",2,"minecraft:redstone_block",0,2,"pointblank:gunmetal_ingot",2,"#forge:gunpowder",2,"#minecraft:sand",1], trans, 4) // 10 gunmetal, 1 processor, 33 redstone, 1 tnt (8,1,36,1-)

    seqAssRecipe(["pointblank:doom_argentblastcharge"], "pointblank:doom_argent_ingot", [2,"pointblank:doom_argent_ingot",2,"#forge:gunpowder",2,"#forge:sand",2,"#forge:gunpowder",2,"pointblank:doom_argent_compound",1,2,"pointblank:doom_argent_ingot"], trans, 4) // 10 argent ingot, 4 argent, 2 tnt (9,4,2-)

    seqAssRecipe(["pointblank:doom_argentrocket"], "pointblank:doom_argent_compound", [2,"pointblank:doom_argent_ingot",2,"pointblank:doom_argent_ingot",0,2,"#forge:gunpowder",2,"#forge:sand",1], trans, 5) // 10 argent ingot, 1 argent, 1 tnt (10,1,1+)
    //----


    //-- New assembly recipes
    seqAssRecipe([Item.of("pointblank:ammocreative", 16)], "pointblank:ammocreative", [0,1,0], trans) // infinite creative ammo dupe 
    
    seqAssRecipe(["pointblank:grenade"], "minecraft:tnt", [1,2,"pointblank:gunmetal_ingot",1,2,"#forge:gunpowder",2,"minecraft:chain"], trans) // only sold for 1 emerald
    
    seqAssRecipe(["pointblank:motor"], "create:precision_mechanism", [2,"pointblank:doom_argent_ingot",0,2,"immersive_aircraft:industrial_gears",1,2,"#forge:wires/steel",2,"pointblank:doom_argent_ingot",0], trans, 8) // only sold for 64 emeralds

    seqAssRecipe(["subnautica_flow:precusor_arm_chestplate"], "minecraft:nether_star", [2,"#forge:ingots/steel",2,"subnautica_flow:precursor_spider_leg",0,2,"subnautica_flow:ion_cube",2,"#forge:ingots/steel",1], trans, 4) // uncraftable
    //----


    //-- Alt assembly recipes
    seqAssRecipe([Item.of("pointblank:guninternals", 2)], "pointblank:gunmetal_ingot", [0,2,"pointblank:gunmetal_ingot",2,"#forge:ingots/iron",1], trans, 3) // 3 gunmetal, 2 iron -> 1 (4,3 -> 2)
    
    seqAssRecipe([Item.of("pointblank:processor", 2)], "#forge:gems/diamond", [0,2,"#forge:gems/lapis",2,"#forge:ingots/copper",2,"#forge:dusts/redstone",2,"#forge:ingots/iron",1], trans, 2) // 1 diamond, 1 lapis, 1 copper, 2 redstone, 0.5 iron -> 1 (1,2,2,2,2 -> 3)
    //----


    //-- Recipe removals
    event.remove({ output: "pointblank:grenade20mm" }) // unused
    event.remove({ output: "pointblank:doom_50calrifle" }) // unused
    // removals in favor of custom recipes only
    event.remove({ id: "pointblank:processor" })
    event.remove({ id: "pointblank:guninternals" })
    // ammos
    event.remove({ id:/pointblank:ammo.*/ })
    event.remove({ id:/pointblank:grenade.*/ })
    event.remove({ id:/pointblank:.*rocket/ })
    for (let item of ["doom_50calpistol","doom_argentblastcharge","doom_argentrocket","doom_plasmacell","doom_steelflechette","hl_rebar"]) {event.remove({id:"pointblank:"+item})}
    //----
})