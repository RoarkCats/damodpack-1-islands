ServerEvents.recipes(event => {

    // Uncrafting exploit fix
    event.forEachRecipe({ id: /productivebees:hives\/advanced_.*_beehive/ }, recipe => {
        event.replaceInput({ id: recipe.getId() }, '#forge:shears', 'minecraft:shears');
    });

    // Add missing plank sawing recipes to mekanism Precision Sawmill
    event.forEachRecipe({id:/create:cutting\/runtime_generated\/compat\/.*_planks$/}, recipe => {
        const out = recipe.originalRecipeResult.id ;
        const inp = Item.of(recipe.originalRecipeIngredients[0]).id ;

        if (event.findRecipeIds({type:'mekanism:sawing', output: out}).length == 0) {
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
})