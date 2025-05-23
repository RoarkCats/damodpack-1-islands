ServerEvents.tags('item', event => {

    event.add('forge:rawmeats', [
        /createfood:ground_/,
        'createfood:rabbit_cuts',
        'unusualfishmod:raw_aero_mono_stick',
        'unusualprehistory:raw_coty',
        'unusualprehistory:raw_austro',
        '#forge:raw_bat',
        'aquaculturedelight:small_turtle_meat',
        'aquamirae_delight:spinefish_slice',
        'unusual_delight:raw_mite_meat',
        'unusual_delight:silver_cube',
        'unusual_delight:spider_leg',
        'unusual_delight:raw_sniffer_meat',
        'unusual_delight:raw_zork_chop',
        'unusual_delight:zombified_bacon',
        'unusual_delight:rotten_ham',
        'minecraft:rotten_flesh',
        'unusual_delight:raw_phantom_meat',
        'unusual_delight:fish_blob',
        /cosmic_cod/,
        'unusual_delight:cut_flying_fish',
        'unusual_delight:cut_lost_tentacle',
        /dragon_chunk/,
        /dragon_flesh/,
        'unusual_delight:bone_marrow',
        'unusual_delight:raw_trilocaris_meat',
        'aquamirae:spinefish',
        'jellyfishingdelight:raw_krabby_patty_patty',
        'miners_delight:bat_wing',
        'miners_delight:arthropod',
        'miners_delight:squid',
        'miners_delight:glow_squid',
        'miners_delight:tentacles',
        'alexscaves:lanternfish',
        'alexscaves:tripodfish',
        'alexscaves:sea_pig',
        'alexscaves:vesper_wing',
        'thalassophobia:raw_fish_meat',
        'thalassophobia:raw_glow_fish',
        'thalassophobia:raw_crab',
        'thalassophobia:raw_sea_bird',
        'unusualfishmod:raw_blizzard_tuna', 
        'unusualfishmod:raw_shockcat', 
        'unusualfishmod:raw_lobster', 
        'unusualfishmod:raw_mossthorn', 
        'unusualprehistory:raw_stetha', 
        'unusualprehistory:raw_scau', 
        'unusualprehistory:golden_scau', 
        'unusualprehistory:raw_mammoth', 
    ]);

    event.add('forge:cookedmeats', [
        'minecraft:cooked_rabbit',
        'nethersdelight:hoglin_sirloin',
        '#forge:cooked_bat',
        'aquaculturedelight:cooked_small_turtle_meat',
        'aquamirae_delight:cooked_spinefish_slice',
        'unusual_delight:cooked_mite_meat',
        'unusual_delight:cooked_silver_cube',
        'unusual_delight:spider_patty',
        'unusual_delight:fried_turtle_egg',
        'unusual_delight:fried_sniffer_egg',
        'unusual_delight:cooked_sniffer_meat',
        'unusual_delight:cooked_zorkchop',
        'unusual_delight:cooked_zombified_bacon',
        'unusual_delight:cooked_rotten_ham',
        'unusual_delight:zombiezerky',
        'unusual_delight:cooked_phantom_meat',
        'unusual_delight:cooked_cut_flying_fish',
        'unusual_delight:roast_tentacle',
        'unusual_delight:fried_crocodile_egg',
        'unusual_delight:fried_deathworm_egg',
        'unusual_delight:fried_giant_deathworm_egg',
        'unusual_delight:cooked_bone_marrow',
        'unusual_delight:cooked_trilocaris_meat',
        'alexsmobs:boiled_emu_egg',
        'aquamirae:cooked_spinefish',
        'brewinandchewin:jerky',
        'jellyfishingdelight:krabby_patty_patty',
        'miners_delight:smoked_bat_wing',
        'miners_delight:cooked_arthropod',
        'miners_delight:baked_squid',
        'miners_delight:baked_tentacles',
        'alexscaves:cooked_lanternfish',
        'alexscaves:cooked_tripodfish',
        'alexscaves:cooked_mussel',
        'thalassophobia:cooked_fish_meat',
        'thalassophobia:cooked_glow_fish',
        'thalassophobia:cooked_crab',
        'thalassophobia:cooked_sea_bird',
        'the_deep_void:cooked_crawler_egg',
        'unusualfishmod:cooked_lobster', 
        'unusualprehistory:cooked_stetha', 
        'unusualprehistory:cooked_coty', 
        'unusualprehistory:cooked_scau', 
        'unusualprehistory:cooked_austro', 
        'unusualprehistory:cooked_mammoth', 
    ]);

    event.add('dapack:kinda_meat', [
        'minecraft:spider_eye',
        'aquaculturedelight:jellyfish_jelly',
        'aquamirae:esca',
        'aquamirae:fin',
        'unusual_delight:soggy_flesh',
        'unusual_delight:frozen_ham',
        'unusual_delight:frozen_flesh',
        'unusual_delight:glazed_soul',
        'unusual_delight:sculk_chunk',
        'unusual_delight:spectralegg',
        'unusual_delight:blue_cheese',
        'unusual_delight:soul_dango',
        'unusual_delight:ghast_tentacle',
        'alexsmobs:fish_oil',
        'alexsmobs:maggot',
        'alexsmobs:rainbow_jelly',
        'jellyfishingdelight:stinky_patty',
        'thalassophobia:panderodus_eye',
        'the_deep_void:eyeball',
        'the_deep_void:golden_eyeball',
    ]);

    event.add('dapack:meat_dish', [
        'minecraft:rabbit_stew',
        'unusualprehistory:meaty_buffet',
        'vampiresdelight:bat_taco',
        'vampiresdelight:fish_burger',
        'vampiresdelight:borscht',
        'alexsdelight:bison_burger',
        'alexsmobs:kangaroo_burger',
        'collectorsreap:land_and_sea_burger',
        /cheeseburger/,
        /chicken_burger/,
        /dragon_burger/,
        /:hamburger/,
        'unusual_delight:rotburger',
        'unusual_delight:snoburger',
        'farmersrespite:black_cod',
        'nethersdelight:nether_skewer',
        'nethersdelight:warped_moldy_meat',
        'nethersdelight:strider_moss_stew',
        /nethersdelight:plate_/,
        'farmersdelight:stuffed_potato',
        'farmersdelight:chicken_soup',
        /farmersdelight:.*stew/,
        /farmersdelight:bacon_/,
        /farmersdelight:pasta_with_/,
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:mutton_wrap',
        'farmersdelight:grilled_salmon',
        'aquaculturedelight:unusual_fish_soup',
        'aquaculturedelight:bass_stew',
        'aquaculturedelight:fish_chorba',
        'aquaculturedelight:halaszle',
        'aquaculturedelight:fish_and_chips',
        'aquaculturedelight:tuna_spaghetti',
        'aquaculturedelight:buckling',
        'aquaculturedelight:baked_pollock_with_carrots',
        'aquaculturedelight:halibut_with_tartar_sauce',
        'aquaculturedelight:large_fish_with_vegetables',
        'aquaculturedelight:turtle_meat_dish',
        'aquaculturedelight:rollmops',
        'aquaculturedelight:roasted_tambaqui',
        'aquaculturedelight:trout_steak',
        'aquaculturedelight:fish_roll_medley',
        'aquaculturedelight:catfish_barbecue',
        'aquaculturedelight:crispy_fried_perch',
        'aquaculturedelight:fried_perch_roll',
        'aquaculturedelight:raw_fish_fillet_roll',
        'aquamirae_delight:spinefishroll',
        'aquamirae_delight:spinefish_kelp_roll',
        'aquamirae_delight:spinefish_kelp_roll_slice',
        'aquamirae_delight:aquatic_feast',
        'aquamirae_delight:deepsea_pie_slice',
        'aquamirae_delight:fishermans_delicacy_slice',
        'aquamirae_delight:angled_kebab',
        'aquamirae_delight:glazed_grilled_spinefish',
        'aquamirae_delight:abyssal_risotto',
        'aquamirae_delight:spinefish_alfredo',
        'aquamirae_delight:esca_gelium_soup',
        'aquamirae_delight:anglers_soup',
        'unusual_delight:carrotmite',
        'unusual_delight:mitey_meal',
        'unusual_delight:mite_skewer',
        'unusual_delight:hairy_feast',
        'unusual_delight:arthropod_barbecue',
        'unusual_delight:spiderbarbecue',
        'unusual_delight:spider_mash',
        'unusual_delight:pond_in_a_bowl',
        'unusual_delight:turtle_egg_sandwich',
        'unusual_delight:sniffer_sizzle',
        'unusual_delight:steak_and_pod',
        'unusual_delight:rotten_sausage',
        'unusual_delight:gnawed_skewer',
        'unusual_delight:rot_dog',
        'unusual_delight:rotburger',
        'unusual_delight:ghoulash',
        'unusual_delight:green_bacon_and_eggs',
        'unusual_delight:bacon_and_egg',
        'unusual_delight:phantomsicle',
        'unusual_delight:salted_fish',
        'unusual_delight:spider_bun',
        'unusual_delight:tundra_skewer',
        'unusual_delight:spiked_dumpling',
        'unusual_delight:snoburger',
        'unusual_delight:sculk_pudding',
        'unusual_delight:sculk_candy',
        'unusual_delight:everwatch_ice_cream',
        'unusual_delight:sculk_and_egg',
        'unusual_delight:infected_apple',
        'unusual_delight:soul_roll',
        'unusual_delight:deep_skewer',
        'unusual_delight:sculk_cookie',
        'unusual_delight:depressionsoul',
        'unusual_delight:charged_lasagna',
        'unusual_delight:salty_strider_jerky',
        'unusual_delight:striding_stew',
        'unusual_delight:volcanic_feast',
        'unusual_delight:smoldering_steak',
        'unusual_delight:pale_pop',
        'unusual_delight:pale_biscuit',
        'unusual_delight:pale_biscuit_stack',
        'unusual_delight:pale_apple',
        'unusual_delight:pale_dumplings',
        'unusual_delight:ghast_roll',
        'unusual_delight:ghast_pudding',
        'unusual_delight:ghastew',
        'unusual_delight:ghast_cream',
        'unusual_delight:pale_mash',
        'unusual_delight:pale_breakfast',
        'unusual_delight:supreme_skewer',
        'unusual_delight:soul_parfait',
        'unusual_delight:smoldering_cheesewheel',
        'unusual_delight:everfrost_fudge',
        'unusual_delight:lightning_cheesecake',
        'unusual_delight:stir_fried_lightning_dragon',
        'unusual_delight:charging_curry',
        'unusual_delight:draco_pasta',
        'unusual_delight:dragon_loaf',
        'unusual_delight:tongue_sandwich',
        'unusual_delight:bowl_of_dragon_loaf',
        'unusual_delight:witherbone_broth',
        'unusual_delight:wing_stew',
        'unusual_delight:gorgon_steam',
        'unusual_delight:jungle_roast',
        'unusual_delight:desert_fry',
        'unusual_delight:deathworm_risotto',
        'unusual_delight:neturalized_meal',
        'unusual_delight:trilo_roll',
        'alexsmobs:shrimp_fried_rice',
        'aquamirae:sea_casserole',
        'aquamirae:sea_stew',
        'aquamirae:poseidons_breakfast',
        'brewinandchewin:horror_lasagna',
        'brewinandchewin:fiery_fondue_pot',
        'brewinandchewin:quiche_slice',
        'brewinandchewin:ham_and_cheese_sandwich',
        'brewinandchewin:kippers',
        'aetherdelight:quail_stew',
        'pneumaticcraft:cod_n_chips',
        'pneumaticcraft:salmon_tempura',
        /krabby_patty$/,
        'jellyfishingdelight:chum_bucket',
        'jellyfishingdelight:chumstick',
        'miners_delight:bat_rolls',
        'miners_delight:bat_cookie',
        'miners_delight:improvised_barbecue_stick',
        'miners_delight:bat_soup',
        'miners_delight:silverfish_eggs',
        'miners_delight:weird_caviar',
        'miners_delight:insect_sandwich',
        'miners_delight:insect_wrap',
        'miners_delight:insect_stew',
        'miners_delight:seasoned_arthropods',
        'miners_delight:squid_sandwich',
        'miners_delight:takoyaki',
        'miners_delight:bowl_of_stuffed_squid',
        'miners_delight:glow_ink_pasta',
        'miners_delight:rabbit_stew_cup',
        'miners_delight:baked_cod_stew_cup',
        'miners_delight:beef_stew_cup',
        'miners_delight:chicken_soup_cup',
        'miners_delight:fish_stew_cup',
        'miners_delight:bat_soup_cup',
        'miners_delight:insect_stew_cup',
        'alexscaves:deep_sea_sushi_roll',
        'alexscaves:vesper_stew',
        'farmersdelight:barbecue_stick',
        'farmersdelight:egg_sandwich',
        'farmersdelight:chicken_sandwich',
        'farmersdelight:salmon_roll',
        'farmersdelight:cod_roll',
        'aquaculture:turtle_soup',
        'aquaculture:sushi',
        'thalassophobia:fish_stew',
        'the_deep_void:eyeball_soup',
        'the_deep_void:crawler_omelette',
        'the_deep_void:bone_mush',
        'the_deep_void:bone_loaf',
        'the_deep_void:rotten_delight',
        'alexscaves:slam',
        'unusualfishmod:lobster_roll', 
        'unusualfishmod:odd_fishsticks', 
        'unusualfishmod:pickledish', 
        'unusualfishmod:strange_broth', 
        'unusualfishmod:unusual_sandwich', 
        'unusualfishmod:weird_goldfish', 
        'unusualprehistory:mammoth_meatball',
    ]);

    // Update werewolves tag (first two already in)
    event.add('werewolves:meat', [
        '#diet:proteins',
        '#forge:strider_meat',
        '#dapack:kinda_meat',
    ]);
    event.add('werewolves:werewolf_food', [
        '#dapack:meat_dish',
        'the_deep_void:grimberry',
    ]);
})