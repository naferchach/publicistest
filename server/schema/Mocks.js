const faker = require('faker');
const { MockList } = require('apollo-server-express');

const mocks = {
    Query: () => ({
        users: (root, { hasNext }) => {
            if (hasNext) return new MockList(20);

            return new MockList(0);
        },
    }),
    User: () => ({
        name: () => faker.name.findName(),
        address: () => faker.address.streetAddress(true),
        email: () => faker.internet.email(),
        phone: () => faker.phone.phoneNumber(),
    }),
};

module.exports = { mocks };

2000;
