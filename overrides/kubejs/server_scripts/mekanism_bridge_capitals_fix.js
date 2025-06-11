ServerEvents.recipes(event => {

    // remove recipes if loaded so no overlap
    let capital_recipes = [/*'AndesiteAloy','BrassCreate','BrassIngot','BrassNugget','Osmium','PlutoniumTeta','poloniumCompactMethod','SulfurTri','zincNugget', (NOTE: This stuff used to be removed here but was moved to DaPack to be rid of the errors message shown in Multiplayer) */ /* bad recipes now */ 'osmium1', 'plutonium2', 'uranhex', 'uranium3', 'steel', 'steel2', 'plutonium'];
    for (const rec of capital_recipes) { event.remove({id: 'mekanismbridge:'+rec}); }

    // re-add recipes
    event.remove({ id:'alchemistry:dissolver/andesite' }); // remove default
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "count": 1,
            "ingredient": {
                "item": "minecraft:andesite"
            }
        },
        "output": {
            "groups": [
                {
                    "probability": 4.0,
                    "results": [
                        {
                            "item": "chemlib:aluminum_oxide"
                        }
                    ]
                },
                {
                    "probability": 3.0,
                    "results": [
                        {
                            "item": "chemlib:iron"
                        }
                    ]
                },
                {
                    "probability": 4.0,
                    "results": [
                        {
                            "item": "chemlib:potassium_chloride"
                        }
                    ]
                },
                {
                    "probability": 10.0,
                    "results": [
                        {
                            "item": "chemlib:silicon_dioxide"
                        }
                    ]
                },
                {
                    "probability": 2.0,
                    "results": [
                        {
                            "item": "chemlib:platinum"
                        }
                    ]
                },
                {
                    "probability": 4.0,
                    "results": [
                        {
                            "item": "chemlib:calcium"
                        }
                    ]
                },
                {
                    "probability": 25.0,
                    "results": [
                        {
                            "item": "chemlib:zinc"
                        }
                    ]
                }
            ],
            "rolls": 1,
            "weighted": true
        }
    });

    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "count": 1,
            "ingredient": {
                "item": "create:brass_ingot"
            }
        },
        "output": {
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {
                            "item": "chemlib:copper",
                            "count": 16
                        },
                        {
                            "item": "chemlib:zinc",
                            "count": 16
                        }
                    ]
                }
            ],
            "rolls": 1,
            "weighted": true
        }
    });

    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
            {"count": 32,"ingredient": {"item": "chemlib:copper"}},
            {"count": 32,"ingredient": {"item": "chemlib:zinc"}}
        ],
        "result": {"item": "occultengineering:brass_dust","count": 1}
    }); // improved brass recipe (now 4x worse instead of 18x worse!)
    event.smelting('create:brass_ingot', 'occultengineering:brass_dust');
    
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "count": 1,
            "ingredient": {"item": "create:brass_nugget"}
        },
        "output": {
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {"item": "chemlib:copper","count": 1},
                        {"item": "chemlib:zinc","count": 1}
                    ]
                }
            ],
            "rolls": 1,
            "weighted": false
        }
    });
    
    // Unused tag
    // event.custom({
    //     "type": "alchemistry:dissolver",
    //     "group": "alchemistry:dissolver",
    //     "input": {
    //         "ingredient": {
    //             "tag": "forge:osmium"
    //         },
    //         "count": 1
    //     },
    //     "output": {
    //         "rolls": 1,
    //         "weighted": false,
    //         "groups": [
    //             {
    //                 "probability": 100.0,
    //                 "results": [
    //                     {
    //                         "item": "chemlib:osmium",
    //                         "count": 16
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // });
    
    // Mod not present
    // event.custom({
    //     "type": "alchemistry:dissolver",
    //     "group": "alchemistry:dissolver",
    //     "input": {
    //         "ingredient": {
    //             "item": "nuclearscience:plutoniumoxide"
    //         },
    //         "count": 1
    //     },
    //     "output": {
    //         "rolls": 1,
    //         "weighted": false,
    //         "groups": [
    //             {
    //                 "probability": 100.0,
    //                 "results": [
    //                     {
    //                         "item": "chemlib:plutonium",
    //                         "count": 8
    //                     },
    //                     {
    //                         "probability": 100.0,
    //                         "results": [
    //                             {
    //                                 "item": "chemlib:oxygen",
    //                                 "count": 16
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // });

    // Duplicate
    // event.custom({
    //     "type": "alchemistry:atomizer",
    //     "group": "alchemistry:atomizer",
    //     "input": {
    //       "fluid": "mekanism:sulfur_trioxide",
    //       "amount": "500"
    //     },
    //     "result": {
    //       "item": "chemlib:sulfur_trioxide",
    //       "count": 8
    //     }
    // });
    
    event.custom({
        "type": "alchemistry:compactor",
        "group": "alchemistry:compactor",
        "input": {
          "count": 32,
          "ingredient": {
            "item": "chemlib:polonium"
          }
        },
        "result": {
          "item": "mekanism:pellet_polonium"
        }
    });

    // Duplicate
    // event.custom({
    //     "type": "alchemistry:dissolver",
    //     "group": "alchemistry:dissolver",
    //     "input": {
    //         "ingredient": {
    //             "item": "create:zinc_nuggest"
    //         },
    //         "count": 1
    //     },
    //     "output": {
    //         "rolls": 1,
    //         "weighted": false,
    //         "groups": [
    //             {
    //                 "probability": 100.0,
    //                 "results": [
    //                     {
    //                         "item": "chemlib:zinc",
    //                         "count": 8
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // });
    
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "ingredient": {
                "tag": "forge:ingots/steel"
            },
            "count": 1
        },
        "output": {
            "rolls": 1,
            "weighted": false,
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {
                            "item": "chemlib:iron",
                            "count": 16
                        },
                        {
                            "item": "chemlib:carbon",
                            "count": 4
                        }
                    ]
                }
            ]
        }
    });

    event.custom({
        "type": "alchemistry:compactor",
        "group": "alchemistry:compactor",
        "input": {
          "count": 16,
          "ingredient": {
            "item": "chemlib:plutonium"
          }
        },
        "result": {
          "item": "mekanism:pellet_plutonium"
        }
    });
    
    // extra extra custom stuff!

    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "ingredient": {"item": "mekanism:pellet_plutonium"}
        },
        "output": {
            "rolls": 1,
            "weighted": false,
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {"item": "chemlib:plutonium","count": 16}
                    ]
                }
            ]
        }
    });
    
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "ingredient": {"item": "mekanism:pellet_polonium"}
        },
        "output": {
            "rolls": 1,
            "weighted": false,
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {"item": "chemlib:polonium","count": 32}
                    ]
                }
            ]
        }
    });

    event.remove({id: /alchemistry:.*\/ghast_tear/ });
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "ingredient": {"item": "minecraft:ghast_tear"}
        },
        "output": {
            "rolls": 1,
            "weighted": false,
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {"item": "chemlib:polonium","count": 8}
                    ]
                }
            ]
        }
    });

    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
            {
                "ingredient": {"item": "chemlib:polonium"},"count": 8
            }
        ],
        "result": {"item": "minecraft:ghast_tear"}
    });
    
    // Silicon
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "ingredient": {"item": "enderio:silicon"}
        },
        "output": {
            "rolls": 1,
            "weighted": false,
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {"item": "chemlib:silicon","count": 16}
                    ]
                }
            ]
        }
    });
    
    event.custom({
        "type": "alchemistry:compactor",
        "group": "alchemistry:compactor",
        "input": {
          "count": 16,
          "ingredient": {"item": "chemlib:silicon"}
        },
        "result": {"item": "enderio:silicon"}
    });

    // Quartz (missing combiner)
    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
            {"ingredient": {"item": "chemlib:silicon_dioxide"},"count": 32},
            {"ingredient": {"item": "chemlib:barium"},"count": 16}
        ],
        "result": {"item": "minecraft:quartz"}
    });

    // Prosperity Shard
    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
            {"ingredient": {"item": "chemlib:mullite"},"count": 16},
            {"ingredient": {"item": "chemlib:barium"},"count": 8},
            {"ingredient": {"item": "chemlib:titanium"},"count": 8},
            {"ingredient": {"item": "chemlib:gallium"},"count": 8}
        ],
        "result": {"item": "mysticalagriculture:prosperity_shard"}
    });
    
    event.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "ingredient": {"item": "mysticalagriculture:prosperity_shard"}
        },
        "output": {
            "rolls": 1,
            "weighted": false,
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {"item": "chemlib:mullite","count": 16},
                        {"item": "chemlib:barium","count": 8},
                        {"item": "chemlib:titanium","count": 8},
                        {"item": "chemlib:gallium","count": 8}
                    ]
                }
            ]
        }
    });

    // Soap
    event.custom({
        "type": "alchemistry:combiner",
        "group": "alchemistry:combiner",
        "input": [
            {"ingredient": {"item": "chemlib:protein"},"count": 1},
            {"ingredient": {"item": "chemlib:graphite"},"count": 1},
            {"ingredient": {"item": "chemlib:water"},"count": 1}
        ],
        "result": {"item": "supplementaries:soap"}
    });

})