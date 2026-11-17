const axios = require("axios")
let newUserId;
describe("User and Wallet Controller", () => {
    require('./modules/clear')()
    test("Get /api/v1/users should get all user info", async() => {
        const response = await axios.get(`http://localhost:3000/api/v1/users`)
        expect(response.status).toBe(200)
        expect(response.data.data).toHaveProperty('users')
    })
    test("Post /api/v1/users should create a user", async() => {
        const response = await axios.post("http://localhost:3000/api/v1/users", {
            username: 'root',
            email: 'root@example.com',
            phone_number: '999 99999999'
        })
        expect(response.status).toBe(200)
        expect(response.data.data).toHaveProperty('user')
        expect(response.data.data.user.username).toBe("root")
        expect(response.data.data.user.email).toBe('root@example.com')
        newUserId = response.data.data.user._id
    })
    test("Get /api/v1/users should get user info", async() => {
        const response = await axios.get(`http://localhost:3000/api/v1/users/${newUserId}`)
        expect(response.status).toBe(200)
        expect(response.data.data).toHaveProperty('user')
        expect(response.data.data.user.username).toBe('root')
    })
    test("Get /api/v1/wallets should get wallets info", async() => {
        const response = await axios.get("http://localhost:3000/api/v1/wallets", );
        expect(response.status).toBe(200)
        expect(response.data).toHaveProperty('data')
    })
    test("Post /api/v1/wallets should create wallet", async() => {
        const response = await axios.post("http://localhost:3000/api/v1/wallets", {
            user_id: newUserId, balance: 50000
        })
        expect(response.status).toBe(200)
        expect(response.data.data).toHaveProperty('wallet')
        expect(response.data.data.wallet.user_id).toBe(newUserId)
        expect(response.data.data.wallet.balance).toBe(50000)
    })
    test("Get /api/v1/users should get user info", async() => {
        const response = await axios.get(`http://localhost:3000/api/v1/users/${newUserId}`)
        expect(response.status).toBe(200)
        expect(response.data.data).toHaveProperty('wallet')
        expect(response.data.data.wallet[0].balance).toBe(50000)
    })
})