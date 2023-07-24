const app = require('../index');
const request = require('supertest');

describe('CRUD API tests', () => {
    let itemId;

    test('should create a new item', async () => {
        const newItem = {
            name: 'Test Item',
            description: 'This is a test item.',
        };

        const response = await request(app).post('/items').send(newItem);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(newItem.name);
        expect(response.body.description).toBe(newItem.description);

        itemId = response.body.id;
    });

    test('should retrieve all items', async () => {
        const response = await request(app).get('/items');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    test('should update an existing item', async () => {
        const updatedItem = {
            name: 'Updated Test Item',
            description: 'This item has been updated.',
        };

        const response = await request(app).put(`/items/${itemId}`).send(updatedItem);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Item updated successfully.');
    });

    test('should delete an existing item', async () => {
        const response = await request(app).delete(`/items/${itemId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Item deleted successfully.');
    });

    test('should return 404 for non-existent item on update', async () => {
        const updatedItem = {
            name: 'Updated Test Item',
            description: 'This item has been updated.',
        };

        const response = await request(app).put('/items/1342').send(updatedItem);
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe('Item not found.');
    });

    test('should return 404 for non-existent item on delete', async () => {
        const response = await request(app).delete('/items/1342');
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe('Item not found.');
    });
});
