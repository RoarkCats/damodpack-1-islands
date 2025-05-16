ServerEvents.recipes(event => {

    // Mechanical Extruder
    event.remove({ id: 'create_mechanical_extruder:crafting/mechanical_extruder' });
    event.shaped('create_mechanical_extruder:mechanical_extruder', [
        ['create:andesite_alloy', 'create:shaft', 'create:andesite_alloy'],
        ['#forge:glass', 'create:mechanical_drill', '#forge:glass'],
        ['create:andesite_alloy', '#forge:glass', 'create:andesite_alloy']
    ]);

    // Stone (tweaked)
    event.remove({ id: 'create_mechanical_extruder:extruding/stone' });
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "ingredients": [
            {
                "amount": 1000,
                "fluid": "minecraft:lava"
            },
            {
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "result": {
            "item": "minecraft:stone"
        },
        "requiredBonks": 2
    });

    // Basalt (tweaked)
    event.remove({ id: 'create_mechanical_extruder:extruding/basalt' });
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "catalyst": {
            "item": "minecraft:soul_soil"
        },
        "ingredients": [
            {
                "item": "minecraft:blue_ice"
            },
            {
                "amount": 1000,
                "fluid": "minecraft:lava"
            }
        ],
        "result": {
            "item": "minecraft:basalt"
        },
        "requiredBonks": 2
    });

    // Blackstone
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "catalyst": {
            "item": "minecraft:soul_soil"
        },
        "ingredients": [
            {
                "item": "minecraft:packed_ice"
            },
            {
                "amount": 1000,
                "fluid": "minecraft:lava"
            }
        ],
        "result": {
            "item": "minecraft:blackstone"
        },
        "requiredBonks": 2
    });

    // Netherrack
    event.custom({
        "type": "create_mechanical_extruder:extruding",
        "catalyst": {
            "item": "minecraft:soul_soil"
        },
        "ingredients": [
            {
                "item": "minecraft:magma_block"
            },
            {
                "amount": 1000,
                "fluid": "minecraft:lava"
            }
        ],
        "result": {
            "item": "minecraft:netherrack"
        },
        "requiredBonks": 1
    });

    // (Cobbled) Deepslate
    for (const deepslate of ['minecraft:cobbled_deepslate', 'minecraft:deepslate']) {
        event.custom({
            "type": "create_mechanical_extruder:extruding",
            "catalyst": {
                "item": "minecraft:magma_block"
            },
            "ingredients": [
                {
                    "amount": 1000,
                    "fluid": "minecraft:lava"
                },
                {
                    "amount": 1000,
                    "fluid": "minecraft:water"
                }
            ],
            "result": {
                "item": deepslate
            },
            "requiredBonks": 2
        });
    }

    // // End Stone
    // event.custom({
    //     "type": "create_mechanical_extruder:extruding",
    //     "catalyst": {
    //         "item": "integrateddynamics:crystalized_chorus_block"
    //     },
    //     "ingredients": [
    //         {
    //             "amount": 1000,
    //             "fluid": "minecraft:lava"
    //         },
    //         {
    //             "amount": 1000,
    //             "fluid": "chemlib:mercury_fluid"
    //         }
    //     ],
    //     "result": {
    //         "item": "minecraft:end_stone"
    //     },
    //     "requiredBonks": 4
    // });
})