ServerEvents.recipes(event => {

    // Uncrafting exploit fix
    event.forEachRecipe({ id: /productivebees:hives\/advanced_.*_beehive/ }, recipe => {
        event.replaceInput({ id: recipe.getId() }, '#forge:shears', 'minecraft:shears');
    });

    // Add missing plank sawing recipes to mekanism Precision Sawmill
    event.forEachRecipe({ id: /create:cutting\/runtime_generated\/compat\/.*_planks$/ }, recipe => {
        const out = recipe.originalRecipeResult.id;
        const inp = Item.of(recipe.originalRecipeIngredients[0]).id;

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
    event.shaped('4x alexscaves:sulfur_dust', [
        [sulf,sulf,sulf],
        ['','',''],
        ['','','']
    ]).noMirror().noShrink();

    event.shaped('4x the_deep_void:sulfur_powder', [
        ['',sulf,''],
        ['',sulf,''],
        ['',sulf,'']
    ]).noMirror().noShrink();

    event.shaped('1x the_deep_void:sulfur', [
        ['','',''],
        ['',sulf,''],
        [sulf,'',sulf]
    ]).noMirror().noShrink();

    event.shaped('4x mekanism:dust_sulfur', [
        ['','',sulf],
        ['',sulf,''],
        [sulf,'','']
    ]).noMirror().noShrink();

    event.shaped('4x immersiveengineering:dust_sulfur', [
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

})

ServerEvents.tags('item', event => {

    // Sulfur tag addition (The Deep Void)
    event.add('forge:dusts/sulfur', 'the_deep_void:sulfur_powder');
})