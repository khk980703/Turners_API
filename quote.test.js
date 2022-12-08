const quote = require("./quote");

const testCases = [
    {
        scenario: "Both input value being numbers, it returns monthly_premium = 27.5 and yearly_premium = 330",
        input: { "car_value": 6614, "risk_rating": 5 },
        expected: { "monthly_premium": 27.5, "yearly_premium": 330 }
    },
    {
        scenario: "Both input value being numbers (different value), it returns monthly_premium = 13.75 and yearly_premium = 165",
        input: { "car_value": 5500, "risk_rating": 3 },
        expected: { "monthly_premium": 13.75, "yearly_premium": 165 }
    },
    {
        scenario: "Both input value being string format of numbers, it returns monthly_premium = 27.5 and yearly_premium = 330",
        input: { "car_value": "6614", "risk_rating": "5" },
        expected: { "monthly_premium": 27.5, "yearly_premium": 330 }
    },
    {
        scenario: "Risk rating value being string format of number, it returns monthly_premium = 27.5 and yearly_premium = 330",
        input: { "car_value": 6614, "risk_rating": "5" },
        expected: { "monthly_premium": 27.5, "yearly_premium": 330 }
    },
    {
        scenario: "Car value being string format of number, it returns monthly_premium = 27.5 and yearly_premium = 330",
        input: { "car_value": "6614", "risk_rating": 5 },
        expected: { "monthly_premium": 27.5, "yearly_premium": 330 }
    },
    {
        scenario: "Risk rating value higher than 5, it returns an error message",
        input: { "car_value": 6614, "risk_rating": 6 },
        expected: { "error": "there is an error" }
    },
    {
        scenario: "Risk rating value lower than 1, it returns an error message",
        input: { "car_value": 6614, "risk_rating": -1 },
        expected: { "error": "there is an error" }
    },
    {
        scenario: "Car value being a negative number, it returns an error message",
        input: { "car_value": -6614, "risk_rating": 5 },
        expected: { "error": "there is an error" }
    },
    {
        scenario: "False spelling of 'car_value', it returns an error message",
        input: { "asdf": 6614, "risk_rating": 5 },
        expected: { "error": "there is an error" }
    },
    {
        scenario: "False spelling of 'risk_rating', it returns an error message",
        input: { "car_value": 6614, "asdf": 5 },
        expected: { "error": "there is an error" }
    }
];

describe("quote tests", () => {
    testCases.map(ts => {
        it(ts.scenario, () => {
            const actual = quote(ts.input);
            expect(actual).toStrictEqual(ts.expected);
        });
    });
});