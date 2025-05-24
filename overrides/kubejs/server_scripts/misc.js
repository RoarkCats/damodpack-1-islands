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
})

ServerEvents.tags('item', event => {

    // Sulfur tag addition (The Deep Void)
    event.add('forge:dusts/sulfur', 'the_deep_void:sulfur_powder');
})

ServerEvents.tags('fluid', event => {

    // Create infinite draining
    event.add('create:no_infinite_draining', /chemlib:/);
    
    // Helium compat
    event.add('dapack:helium', ['mekanismscience:helium', 'chemlib:helium_fluid']);
})