const faker = require('faker/locale/en')

const createFakePostTexts = () => ({
    user_id: faker.datatype.number(10),
    content: faker.random.words(20),
    desc: null,
    type: 'text',
    region_id: faker.datatype.number(40),
})

const createFakePostPhoto = () => ({
    user_id: faker.datatype.number(10),
    content: faker.random.image(),
    desc: faker.random.words(10),
    type: 'photo',
    region_id: faker.datatype.number(40),
})

exports.seed = async function (knex, Promise) {
    fakePosts = []
    desiredPosts = 60

    // Deletes ALL existing entries
    await knex('posts').del()

    for (let i = 0; i < desiredPosts / 2; i++) {
        fakePosts.push(createFakePostTexts())
    }
    for (let i = 0; i < desiredPosts / 2; i++) {
        fakePosts.push(createFakePostPhoto())
    }
    // console.log(createFakePostTexts())

    // Inserts seed entries
    await knex('posts').insert(fakePosts)
}
