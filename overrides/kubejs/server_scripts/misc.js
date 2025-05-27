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

    // Storage Drawers alt recipes (in place of every compat)
    event.shaped('1x storagedrawers:oak_full_drawers_1', [
        'WWW',
        ' C ',
        'WWW',
    ], {W:'#minecraft:planks', C:'#forge:chests/wooden'});

    event.shaped('2x storagedrawers:oak_full_drawers_2', [
        'WCW',
        'WWW',
        'WCW',
    ], {W:'#minecraft:planks', C:'#forge:chests/wooden'});

    event.shaped('4x storagedrawers:oak_full_drawers_4', [
        'CWC',
        'WWW',
        'CWC',
    ], {W:'#minecraft:planks', C:'#forge:chests/wooden'});

    event.shaped('1x storagedrawers:oak_half_drawers_1', [
        'WWW',
        ' C ',
        'WWW',
    ], {W:'#minecraft:wooden_slabs', C:'#forge:chests/wooden'});

    event.shaped('2x storagedrawers:oak_half_drawers_2', [
        'WCW',
        'WWW',
        'WCW',
    ], {W:'#minecraft:wooden_slabs', C:'#forge:chests/wooden'});

    event.shaped('4x storagedrawers:oak_half_drawers_4', [
        'CWC',
        'WWW',
        'CWC',
    ], {W:'#minecraft:wooden_slabs', C:'#forge:chests/wooden'});

    event.shaped('4x storagedrawers:oak_trim', [
        'WSW',
        'SWS',
        'WSW',
    ], {W:'#minecraft:planks', S:'#forge:rods/wooden'});

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
})

ServerEvents.tags('fluid', event => {

    // Create infinite draining
    event.add('create:no_infinite_draining', /chemlib:/);
    
    // Helium compat
    event.add('dapack:helium', ['mekanismscience:helium', 'chemlib:helium_fluid']);
})