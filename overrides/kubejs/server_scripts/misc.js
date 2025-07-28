ServerEvents.recipes(event => {

    // Uncrafting exploit fix
    event.forEachRecipe({ id: /productivebees:hives\/advanced_.*_beehive/ }, recipe => {
        event.replaceInput({ id: recipe.getId() }, '#forge:shears', 'minecraft:shears');
    });

    // Add missing plank sawing recipes to mekanism Precision Sawmill
    function meksaw(inp, out) {
        event.custom({
            "type": "mekanism:sawing",
            "input": {
                "ingredient": {
                    "item": inp
                }
            },
            "mainOutput": {
                "count": 6,
                "item": out
            },
            "secondaryChance": 0.25,
            "secondaryOutput": {
                "item": "mekanism:sawdust"
            }
        });
    }

    event.forEachRecipe({ id: /create:cutting\/runtime_generated\/compat\/.*_planks$/ }, recipe => {
        const out = recipe.originalRecipeResult.id;
        let inp = Item.of(recipe.originalRecipeIngredients[0]).id;
        
        const inp_no_strip = inp.replaceAll('stripped_','');
        if (Item.exists(inp_no_strip)) {inp = inp_no_strip;}

        if (event.findRecipeIds({ type: 'mekanism:sawing', output: out }).length == 0) {
            meksaw(inp, out);
        }
    })
    
    meksaw('integrateddynamics:menril_log','integrateddynamics:menril_planks'); // some manual intervention
    meksaw('integrateddynamics:menril_wood','integrateddynamics:menril_planks'); // bc the auto comp stupid

    // Sulfur recipes (Mystical Agriculture)
    const sulf = 'mysticalagriculture:sulfur_essence';

    event.remove({id: 'mysticalagriculture:essence/common/sulfur'}); // overwrite default
    event.shaped('8x alexscaves:sulfur_dust', [
        [sulf,sulf,sulf],
        ['','',''],
        ['','','']
    ]).noMirror().noShrink();

    event.shaped('8x the_deep_void:sulfur_powder', [
        ['',sulf,''],
        ['',sulf,''],
        ['',sulf,'']
    ]).noMirror().noShrink();

    event.shaped('2x the_deep_void:sulfur', [
        ['','',''],
        ['',sulf,''],
        [sulf,'',sulf]
    ]).noMirror().noShrink();

    event.shaped('8x mekanism:dust_sulfur', [
        ['','',sulf],
        ['',sulf,''],
        [sulf,'','']
    ]).noMirror().noShrink();

    event.shaped('8x immersiveengineering:dust_sulfur', [
        [sulf,'',''],
        ['',sulf,''],
        ['','',sulf]
    ]).noMirror().noShrink();

    // Sulfur (not dust) dissolving
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "count": 1,
            "ingredient": {
                "item": "the_deep_void:sulfur"
            }
        },
        "output": {
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {
                            "item": "chemlib:sulfur",
                            "count": 2
                        }
                    ]
                }
            ],
            "rolls": 1,
            "weighted": true
        }
    });

    // Helium compat
    event.remove({id:'mekanismscience:rotary/helium'});
    // -- recipe in DaPack bc KubeJS oopid no work :(

    // Anchor tweak: push back in progression a bit to match Dimensional Stabilizer
    event.replaceInput({id:'mekanism:upgrade/anchor'}, '#forge:dusts/diamond', 'mekanism:dust_refined_obsidian')

    // Flint Block to Oxygen
    event.custom({
        "type": "mekanism:gas_conversion",
        "input": {
            "ingredient": {
                "item": "supplementaries:flint_block"
            }
        },
        "output": {
            "amount": 90,
            "gas": "mekanism:oxygen"
        }
    });

    // Alchemistry ingot tag recipe compats
    event.replaceInput({id:'alchemistry:reactor_casing'}, 'chemlib:platinum_ingot', '#forge:ingots/platinum');
    event.replaceInput({id:'alchemistry:reactor_casing'}, 'chemlib:osmium_ingot', '#forge:ingots/osmium');
    event.replaceInput({id:'alchemistry:fusion_core'}, 'chemlib:tungsten_ingot', '#forge:ingots/tungsten');

    // Every Compat: Chipped Glassblower clutter fix
    let chipped_glass_types = [
        "circle",
        "snowflake",
        "bared",
        "bordered",
        "diamond_bordered",
        "horizontal_lined",
        "large_diamond",
        "line_bared",
        "ornate_bared",
        "woven",
        "square",
    ];
    for (const glass of chipped_glass_types) {
        event.custom({"type":"chipped:carpenters_table","tags":[`dapack:ec_glass_${glass}`,`dapack:ec_glass_pane_${glass}`]}); // add 2 recipes for each glass type
    }

    for (const type of ['oak','spruce','birch','jungle','acacia','dark_oak','mangrove','cherry','bamboo','crimson','warped']) {
        // Storage Drawers alt recipes (in place of every compat)
        event.shaped(`1x storagedrawers:${type}_full_drawers_1`, ['WWW',' C ','WWW',], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`2x storagedrawers:${type}_full_drawers_2`, ['WCW','WWW','WCW',], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`4x storagedrawers:${type}_full_drawers_4`, ['CWC','WWW','CWC',], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`1x storagedrawers:${type}_half_drawers_1`, ['WWW',' C ','WWW',], {W:`#dapack:${type}_type_slab`, C:'#forge:chests/wooden'});

        event.shaped(`2x storagedrawers:${type}_half_drawers_2`, ['WCW','WWW','WCW',], {W:`#dapack:${type}_type_slab`, C:'#forge:chests/wooden'});

        event.shaped(`4x storagedrawers:${type}_half_drawers_4`, ['CWC','WWW','CWC',], {W:`#dapack:${type}_type_slab`, C:'#forge:chests/wooden'});

        event.shaped(`4x storagedrawers:${type}_trim`, ['WSW','SWS','WSW',], {W:`#dapack:${type}_type_planks`, S:'#forge:rods/wooden'});
        
        // Sophisticated Storage alt recipes (for continuity)
        event.shaped(Item.of('sophisticatedstorage:chest', {woodType: type}),
        ['WWW','WTW','WWW'], {W:`#dapack:${type}_type_planks`, T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:barrel', {woodType: type}),
        ['WSW','WTW','WSW'], {W:`#dapack:${type}_type_planks`, S:`#dapack:${type}_type_slab`, T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:limited_barrel_1', {woodType: type}),
        ['WSW','WTW','WWW'], {W:`#dapack:${type}_type_planks`, S:`#dapack:${type}_type_slab`, T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:limited_barrel_2', {woodType: type}),
        ['WWW','STS','WWW'], {W:`#dapack:${type}_type_planks`, S:`#dapack:${type}_type_slab`, T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:limited_barrel_3', {woodType: type}),
        ['WSW','WTW','SWS'], {W:`#dapack:${type}_type_planks`, S:`#dapack:${type}_type_slab`, T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:limited_barrel_4', {woodType: type}),
        ['SWS','WTW','SWS'], {W:`#dapack:${type}_type_planks`, S:`#dapack:${type}_type_slab`, T:'minecraft:redstone_torch'});
    }
    event.remove({id:/sophisticatedstorage:generic_/});

    // Remove extra smelting/blasting recipes from Chemlib (provided by other mods)
    for (const type of ['osmium','uranium','lead','silver','tin']) {
        event.remove({id: new RegExp(`chemlib:${type}_ingot_from_[a-z]+_${type}_dust`) });
    }

    // Ammonia compat (added back in DaPack bc KubeJS oopid)
    event.remove({id:'mekanismscience:rotary/ammonia'});

    // Rod crafting output nerf
    for (const type of ['iron','steel','aluminum']) {
        event.remove({id:`immersiveengineering:crafting/stick_${type}`});
        event.shaped(`2x immersiveengineering:stick_${type}`, ['I','I'], {I:`#forge:ingots/${type}`});

        if (type !== 'aluminum') {
            event.remove({id:`ad_astra:${type}_rod`});
            event.shaped(`2x ad_astra:${type}_rod`, ['P','P'], {P:`#forge:plates/${type}`});
        }
    }

    // Doom Rocket Launcher recipe broken?
    event.custom({
        "type": "pointblank:default",
        "ingredients": [
            {"count": 50, "item": "pointblank:doom_argent_ingot"},
            {"count": 24, "item": "pointblank:guninternals"},
            {"count": 8, "item": "pointblank:doom_argent_compound"},
            {"count": 4, "item": "minecraft:diamond"},
            {"count": 10, "tag": "forge:ingots/gold"}
        ],
        "result": {"item": "pointblank:doom_rocketlauncher"}
    });

    // Dust oxidation compat recipes
    for (const element of ['beryllium','strontium','yttrium','sodium']) {
        let amount = element === 'beryllium' ? 1000 : 100 // beryl buff
        let science = element === 'sodium' ? '' : 'science'
        event.custom({
            "type":"mekanism:oxidizing",
            "input": {"ingredient": {"tag": "forge:dusts/"+element}},
            "output": {"amount": amount, "gas": "mekanism"+science+":"+element}
        });
    }
})

ServerEvents.tags('item', event => {

    // Sulfur tag addition (The Deep Void)
    event.add('forge:dusts/sulfur', 'the_deep_void:sulfur_powder');

    // Every Compat: Chipped Glassblower clutter fix
    event.remove('chipped:glass', /everycomp:/);
    event.remove('chipped:glass_pane', /everycomp:/);
    // build tags for recipe
    let chipped_glass_types = [
        "circle",
        "snowflake",
        "bared",
        "bordered",
        "diamond_bordered",
        "horizontal_lined",
        "large_diamond",
        "line_bared",
        "ornate_bared",
        "woven",
        "square",
    ];
    for (const glass of chipped_glass_types) {
        event.add(`dapack:ec_glass_${glass}`, [
            new RegExp(`chipped:(oak_)?${glass}(_oak)?_glass$`),
            new RegExp(`everycomp:.*${glass}.*_glass$`)
        ]);
        event.add(`dapack:ec_glass_pane_${glass}`, [
            new RegExp(`chipped:(oak_)?${glass}(_oak)?_glass_pane$`),
            new RegExp(`everycomp:.*${glass}.*_glass_pane$`)
        ]);
        if (glass == 'bared') {
            event.remove(`dapack:ec_glass_${glass}`, /everycomp:.*(line_bared|ornate_bared).*_glass$/);
            event.remove(`dapack:ec_glass_pane_${glass}`, /everycomp:.*(line_bared|ornate_bared).*_glass_pane$/);
        }
        if (glass == 'bordered') {
            event.remove(`dapack:ec_glass_${glass}`, /everycomp:.*diamond_bordered.*_glass$/);
            event.remove(`dapack:ec_glass_pane_${glass}`, /everycomp:.*diamond_bordered.*_glass_pane$/);
        }
    }

    // Inv pet tag improvements
    event.add('forge:raw_fishes', [
        'aquamirae:spinefish',
        'thalassophobia:raw_glow_fish',
        'alexsmobs:cosmic_cod',
        'alexscaves:tripodfish',
        'alexscaves:lanternfish',
        'unusualprehistory:raw_scau',
        'unusualprehistory:raw_stetha',
        'cataclysm:lionfish',
    ]);
    event.add('inventorypets:raw_fishes', ['#forge:raw_fishes']);

    event.add('werewolves:cooked_fish', [
        'aquamirae:cooked_spinefish',
        'thalassophobia:cooked_glow_fish',
        'alexscaves:cooked_tripodfish',
        'alexscaves:cooked_lanternfish',
        'unusualprehistory:cooked_scau',
        'unusualprehistory:cooked_stetha',
    ]);
    event.add('inventorypets:cooked_fishes', ['#werewolves:cooked_fish']);

    event.add('inventorypets:raw_meats', ['#forge:rawmeats']); // this technically has fish too but I don't really care 

    // Wood tags for Storage Drawers / Sophisticated Chests
    for (const planks_slab of ['planks', 'slab']) {
        event.add(`dapack:oak_type_${planks_slab}`, [
            `minecraft:oak_${planks_slab}`,
            `twilightforest:twilight_oak_${planks_slab}`,
            `twilightforest:transformation_${planks_slab}`,
            `regions_unexplored:alpha_${planks_slab}`,
            `regions_unexplored:maple_${planks_slab}`,
        ]);
        event.add(`dapack:spruce_type_${planks_slab}`, [
            `minecraft:spruce_${planks_slab}`,
            `upgrade_aquatic:driftwood_${planks_slab}`,
            `twilightforest:canopy_${planks_slab}`,
            `twilightforest:time_${planks_slab}`,
            `upgrade_aquatic:river_${planks_slab}`,
            `regions_unexplored:dead_${planks_slab}`,
        ]);
        event.add(`dapack:birch_type_${planks_slab}`, [
            `minecraft:birch_${planks_slab}`,
            `ad_astra:strophar_${planks_slab}`,
            `deep_aether:sunroot_${planks_slab}`,
            `twilightforest:mangrove_${planks_slab}`,
            `twilightforest:mining_${planks_slab}`,
            `regions_unexplored:palm_${planks_slab}`,
            `regions_unexplored:willow_${planks_slab}`,
        ]);
        event.add(`dapack:jungle_type_${planks_slab}`, [
            `minecraft:jungle_${planks_slab}`,
            `deep_aether:conberry_${planks_slab}`,
            `twilightforest:dark_${planks_slab}`,
            `alexscaves:pewen_${planks_slab}`,
            `regions_unexplored:baobab_${planks_slab}`,
            `regions_unexplored:joshua_${planks_slab}`,
            `regions_unexplored:kapok_${planks_slab}`,
            `regions_unexplored:larch_${planks_slab}`,
            `regions_unexplored:pine_${planks_slab}`,
            `regions_unexplored:socotra_${planks_slab}`,
        ]);
        event.add(`dapack:acacia_type_${planks_slab}`, [
            `minecraft:acacia_${planks_slab}`,
            `unusualprehistory:ginkgo_${planks_slab}`,
            `applewood:apple_${planks_slab}`,
            `regions_unexplored:eucalyptus_${planks_slab}`,
            `regions_unexplored:redwood_${planks_slab}`,
        ]);
        event.add(`dapack:dark_oak_type_${planks_slab}`, [
            `minecraft:dark_oak_${planks_slab}`,
            `the_deep_void:rotten_${planks_slab}`,
            `iceandfire:dreadwood_${planks_slab}`,
            `vampirism:dark_spruce_${planks_slab}`,
            `twilightforest:sorting_${planks_slab}`,
            `alexscaves:thornwood_${planks_slab}`,
            `regions_unexplored:blackwood_${planks_slab}`,
            `regions_unexplored:brimwood_${planks_slab}`,
        ]);
        event.add(`dapack:mangrove_type_${planks_slab}`, [
            `minecraft:mangrove_${planks_slab}`,
            `botania:livingwood_${planks_slab}`,
            `unusualprehistory:foxxi_${planks_slab}`,
            `vinery:dark_cherry_${planks_slab}`,
            `vampirism:cursed_spruce_${planks_slab}`,
            `regions_unexplored:magnolia_${planks_slab}`,
        ]);
        event.add(`dapack:cherry_type_${planks_slab}`, [
            `minecraft:cherry_${planks_slab}`,
            `totemic:cedar_${planks_slab}`,
            `ad_astra:glacian_${planks_slab}`,
            `unusualprehistory:dryo_${planks_slab}`,
            `deep_aether:roseroot_${planks_slab}`,
            `werewolves:jacaranda_${planks_slab}`,
        ]);
        event.add(`dapack:bamboo_type_${planks_slab}`, [
            `minecraft:bamboo_${planks_slab}`,
            `beachparty:palm_${planks_slab}`,
            `regions_unexplored:cypress_${planks_slab}`,
            `aether:skyroot_${planks_slab}`,
            `regions_unexplored:yellow_bioshroom_${planks_slab}`,
        ]);
        event.add(`dapack:crimson_type_${planks_slab}`, [
            `minecraft:crimson_${planks_slab}`,
            `cataclysm:chorus_${planks_slab}`,
            `deep_aether:yagroot_${planks_slab}`,
            `deep_aether:cruderoot_${planks_slab}`,
            `regions_unexplored:mauve_${planks_slab}`,
            `regions_unexplored:pink_bioshroom_${planks_slab}`,
        ]);
        event.add(`dapack:warped_type_${planks_slab}`, [
            `minecraft:warped_${planks_slab}`,
            `botania:dreamwood_${planks_slab}`,
            `integrateddynamics:menril_${planks_slab}`,
            `ars_nouveau:archwood_${planks_slab}`,
            `ad_astra:aeronos_${planks_slab}`,
            `werewolves:magic_${planks_slab}`,
            `regions_unexplored:blue_bioshroom_${planks_slab}`,
            `regions_unexplored:cobalt_${planks_slab}`,
            `regions_unexplored:green_bioshroom_${planks_slab}`,
        ]);
    }
})

ServerEvents.tags('fluid', event => {

    // Create infinite draining
    event.add('create:no_infinite_draining', [/chemlib:/, /immersivegeology:/, /immersiveengineering:/, /pneumaticcraft:/]);
    
    // Helium compat
    event.add('dapack:helium', ['mekanismscience:helium', 'chemlib:helium_fluid']);

    // Ammonia compat
    event.add('dapack:ammonia', ['mekanismscience:ammonia', 'chemlib:ammonia_fluid', 'immersivegeology:fluid_ammoniasolution']);

    // Ethanol compat
    event.add('forge:ethanol', ['chemlib:ethanol_fluid']);
})