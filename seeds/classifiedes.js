'use strict';
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('classifieds').del()
        .then(function() {
            return Promise.all([
                    // Inserts seed entries
                    knex('classifieds').insert({
                        id: 1,
                        title: '2012 Cannondale Synapse Hi-Mod Dura Ace',
                        description: 'Brand new bike. less than 50 miles ridden. I am selling for my father who is buying a racier bike. This is a TOP of the LINE RACE BIKE.',
                        price: 4750,
                        item_image: 'http://www.probikeswap.com/wp-content/uploads/2013/03/164262-500x333.jpg',
                        created_at: '2016-06-26T14:26:16.000Z',
                        updated_at: '2016-06-26T14:26:16.000Z'
                    }),
                    knex('classifieds').insert({
                        id: 2,
                        title: 'Schwinn Fastback Pro XL',
                        description: 'Bike is mechanically perfect. Tires will need to be replaced soon, and the shifters show some wear. Otherwise, it’s ready to ride. ',
                        price: 800,
                        item_image: 'http://www.probikeswap.com/wp-content/uploads/2015/01/874743-500x375.jpg',
                        created_at: '2017-02-03T14:26:16.000Z',
                        updated_at: '2017-02-04T14:26:16.000Z'
                    }),
                    knex('classifieds').insert({
                        id: 3,
                        title: 'Cannondale Bad Boy – Flat Bar Race Bike',
                        description: 'Last of the Bad Boys to be built in the USA. I bought this for the frame in ’09 and before riding it replaced every component. Every one that is, but the Fatty D Head Shock.',
                        price: 2100,
                        item_image: 'http://www.probikeswap.com/wp-content/uploads/2016/04/882820-500x334.jpg',
                        created_at: '2016-12-26T14:26:16.000Z',
                        updated_at: '2017-01-26T14:26:16.000Z'
                    }),
                    knex('classifieds').insert({
                        id: 4,
                        title: 'JAPANESE SHIMURA SEIKI CO ROAD PUPPY',
                        description: 'JAPANESE SHIMURA SEIKI CO ROAD PUPPY ALL ORIGNAL EXCEPT IT WAS PAINTED SOMEWHERE ALONG THE LINE',
                        price: 500,
                        item_image: 'http://www.probikeswap.com/wp-content/uploads/2014/12/310487-500x373.jpg',
                        created_at: '2017-01-26T14:26:16.000Z',
                        updated_at: '2017-02-06T14:26:16.000Z'
                    })
                ])
                .then(() => {
                    return knex.raw("SELECT setval('classifieds_id_seq', (SELECT MAX(id) FROM classifieds))");
                });
        });
};