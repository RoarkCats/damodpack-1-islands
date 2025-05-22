ServerEvents.tags('item', event => { // removing items from tags without remaking them

    event.remove('curios:body', 'integratedterminals:terminal_storage_portable');

    event.remove('curios:belt', ["beachparty:trunks","beachparty:bikini","supplementaries:quiver"]);

    event.remove('artifacts:slot/belt', [ // this tag is added to curios:belt
        "artifacts:chorus_totem",
        "artifacts:crystal_heart",
        "artifacts:universal_attractor",
        "artifacts:antidote_vessel",
        "artifacts:obsidian_skull",
        "artifacts:cloud_in_a_bottle"
    ]);

    event.remove('curios:charm', "relics:spore_sack");

    event.remove('curios:qio', 'mekanism:portable_qio_dashboard');
})