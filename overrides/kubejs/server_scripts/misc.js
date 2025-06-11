ServerEvents.recipes(event => {

    // Uncrafting exploit fix
    event.forEachRecipe({ id: /productivebees:hives\/advanced_.*_beehive/ }, recipe => {
        event.replaceInput({ id: recipe.getId() }, '#forge:shears', 'minecraft:shears');
    });

    // Add missing plank sawing recipes to mekanism Precision Sawmill
    event.forEachRecipe({ id: /create:cutting\/runtime_generated\/compat\/.*_planks$/ }, recipe => {
        const out = recipe.originalRecipeResult.id;
        let inp = Item.of(recipe.originalRecipeIngredients[0]).id;
        
        const inp_no_strip = inp.replaceAll('stripped_','');
        if (Item.exists(inp_no_strip)) {inp = inp_no_strip;}

        if (event.findRecipeIds({ type: 'mekanism:sawing', output: out }).length == 0) {
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
    })

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
        event.shaped(`1x storagedrawers:${type}_full_drawers_1`, [
            'WWW',
            ' C ',
            'WWW',
        ], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`2x storagedrawers:${type}_full_drawers_2`, [
            'WCW',
            'WWW',
            'WCW',
        ], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`4x storagedrawers:${type}_full_drawers_4`, [
            'CWC',
            'WWW',
            'CWC',
        ], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`1x storagedrawers:${type}_half_drawers_1`, [
            'WWW',
            ' C ',
            'WWW',
        ], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`2x storagedrawers:${type}_half_drawers_2`, [
            'WCW',
            'WWW',
            'WCW',
        ], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`4x storagedrawers:${type}_half_drawers_4`, [
            'CWC',
            'WWW',
            'CWC',
        ], {W:`#dapack:${type}_type_planks`, C:'#forge:chests/wooden'});

        event.shaped(`4x storagedrawers:${type}_trim`, [
            'WSW',
            'SWS',
            'WSW',
        ], {W:`#dapack:${type}_type_planks`, S:'#forge:rods/wooden'});
        
        // Sophisticated Storage alt recipes (for continuity)
        event.shaped(Item.of('sophisticatedstorage:chest', {woodType: type}),
        ['WWW','WTW','WWW'], {W:`#dapack:${type}_type_planks`, T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:barrel', {woodType: type}),
        ['WSW','WTW','WSW'], {W:`#dapack:${type}_type_planks`, S:'#minecraft:wooden_slabs', T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:limited_barrel_1', {woodType: type}),
        ['WSW','WTW','WWW'], {W:`#dapack:${type}_type_planks`, S:'#minecraft:wooden_slabs', T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:limited_barrel_2', {woodType: type}),
        ['WWW','STS','WWW'], {W:`#dapack:${type}_type_planks`, S:'#minecraft:wooden_slabs', T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:limited_barrel_3', {woodType: type}),
        ['WSW','WTW','SWS'], {W:`#dapack:${type}_type_planks`, S:'#minecraft:wooden_slabs', T:'minecraft:redstone_torch'});

        event.shaped(Item.of('sophisticatedstorage:limited_barrel_4', {woodType: type}),
        ['SWS','WTW','SWS'], {W:`#dapack:${type}_type_planks`, S:'#minecraft:wooden_slabs', T:'minecraft:redstone_torch'});
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
    event.add('dapack:oak_type_planks', [
        "twilightforest:twilight_oak_planks",
        "twilightforest:transformation_planks",
        "regions_unexplored:alpha_planks",
        "regions_unexplored:maple_planks",
    ]);
    event.add('dapack:spruce_type_planks', [
        "upgrade_aquatic:driftwood_planks",
        "twilightforest:canopy_planks",
        "twilightforest:time_planks",
        "upgrade_aquatic:river_planks",
        "regions_unexplored:dead_planks",
    ]);
    event.add('dapack:birch_type_planks', [
        "ad_astra:strophar_planks",
        "deep_aether:sunroot_planks",
        "twilightforest:mangrove_planks",
        "twilightforest:mining_planks",
        "regions_unexplored:palm_planks",
        "regions_unexplored:willow_planks",
    ]);
    event.add('dapack:jungle_type_planks', [
        "deep_aether:conberry_planks",
        "twilightforest:dark_planks",
        "alexscaves:pewen_planks",
        "regions_unexplored:baobab_planks",
        "regions_unexplored:joshua_planks",
        "regions_unexplored:kapok_planks",
        "regions_unexplored:larch_planks",
        "regions_unexplored:pine_planks",
        "regions_unexplored:socotra_planks",
    ]);
    event.add('dapack:acacia_type_planks', [
        "unusualprehistory:ginkgo_planks",
        "applewood:apple_planks",
        "regions_unexplored:eucalyptus_planks",
        "regions_unexplored:redwood_planks",
    ]);
    event.add('dapack:dark_oak_type_planks', [
        "the_deep_void:rotten_planks",
        "iceandfire:dreadwood_planks",
        "vampirism:dark_spruce_planks",
        "twilightforest:sorting_planks",
        "alexscaves:thornwood_planks",
        "regions_unexplored:blackwood_planks",
        "regions_unexplored:brimwood_planks",
    ]);
    event.add('dapack:mangrove_type_planks', [
        "botania:livingwood_planks",
        "unusualprehistory:foxxi_planks",
        "vinery:dark_cherry_planks",
        "vampirism:cursed_spruce_planks",
        "regions_unexplored:magnolia_planks",
    ]);
    event.add('dapack:cherry_type_planks', [
        "totemic:cedar_planks",
        "ad_astra:glacian_planks",
        "unusualprehistory:dryo_planks",
        "deep_aether:roseroot_planks",
        "werewolves:jacaranda_planks",
    ]);
    event.add('dapack:bamboo_type_planks', [
        "beachparty:palm_planks",
        "regions_unexplored:cypress_planks",
        "aether:skyroot_planks",
        "regions_unexplored:yellow_bioshroom_planks",
    ]);
    event.add('dapack:crimson_type_planks', [
        "cataclysm:chorus_planks",
        "deep_aether:yagroot_planks",
        "deep_aether:cruderoot_planks",
        "regions_unexplored:mauve_planks",
        "regions_unexplored:pink_bioshroom_planks",
    ]);
    event.add('dapack:warped_type_planks', [
        "botania:dreamwood_planks",
        "integrateddynamics:menril_planks",
        "ars_nouveau:archwood_planks",
        "ad_astra:aeronos_planks",
        "werewolves:magic_planks",
        "regions_unexplored:blue_bioshroom_planks",
        "regions_unexplored:cobalt_planks",
        "regions_unexplored:green_bioshroom_planks",
    ]);
})

ServerEvents.tags('fluid', event => {

    // Create infinite draining
    event.add('create:no_infinite_draining', [/chemlib:/, /immersivegeology:/]);
    
    // Helium compat
    event.add('dapack:helium', ['mekanismscience:helium', 'chemlib:helium_fluid']);

    // Ammonia compat
    event.add('dapack:ammonia', ['mekanismscience:ammonia', 'chemlib:ammonia_fluid', 'immersivegeology:fluid_ammoniasolution']);
})