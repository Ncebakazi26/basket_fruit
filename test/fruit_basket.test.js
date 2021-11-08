const assert = require("assert");
const FruitBasket = require("../fruit_basket");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/fruit';


const pool = new Pool({
    connectionString
});

describe('The fruit_basket function', function () {
    let basket = FruitBasket(pool)

    beforeEach(async function () {
        // clean the tables before each test run
    });
    it('should add fruit in the db', async function () {
        assert.equal("Mango is successfully inserted", await basket.addFruit("Mango", 1, 20.50))
    });
    it('should show  fruit in the db', async function () {
        assert.deepEqual([{ fruit_name: "Orange", id: 39, price: 3.00, quantity: 10 },{ fruit_name: "Orange", id: 67, price: 3.00, quantity: 10 }], await basket.show(['Orange']))
    });
    it('should update fruit in the db', async function () {
        assert.equal("updated successfully", await basket.update("Orange",))
    });
    it('should return the sum', async function () {
        assert.deepEqual( [
            {sum: 20}], await basket.sum())
    });
    it('should return the total price for Apples', async function () {
        assert.deepEqual([{sum: 18.00}], await basket.total())
    });
    after(function () {
        pool.end();
    })
});