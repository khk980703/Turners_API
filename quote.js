function quote(input) {
    if (input.hasOwnProperty("car_value") && input.hasOwnProperty("risk_rating")) {
        if (typeof input.car_value === "string" && typeof input.risk_rating === "string") {
            if (isNaN(input.car_value) || isNaN(input.risk_rating)) {
                return { "error": "there is an error" };
            } else if (1 > parseInt(input.risk_rating) || parseInt(input.risk_rating) > 5 || 0 > parseInt(input.car_value)) {
                return { "error": "there is an error" };
            } else {
                yearly_premium = Math.floor(parseInt(input.car_value) * parseInt(input.risk_rating) / 100);
                monthly_premium = yearly_premium / 12;
                return { "monthly_premium": monthly_premium, "yearly_premium": yearly_premium };
            }
        }

        else if (typeof input.car_value !== "string" && typeof input.risk_rating === "string") {
            if (isNaN(input.risk_rating)) {
                return { "error": "there is an error" };
            } else if (1 > parseInt(input.risk_rating) || parseInt(input.risk_rating) > 5 || 0 > input.car_value) {
                return { "error": "there is an error" };
            } else {
                yearly_premium = Math.floor(input.car_value * parseInt(input.risk_rating) / 100);
                monthly_premium = yearly_premium / 12;
                return { "monthly_premium": monthly_premium, "yearly_premium": yearly_premium };
            }
        }

        else if (typeof input.car_value === "string" && typeof input.risk_rating !== "string") {
            if (isNaN(input.car_value)) {
                return { "error": "there is an error" };
            } else if (1 > input.risk_rating || input.risk_rating > 5 || 0 > parseInt(input.car_value)) {
                return { "error": "there is an error" };
            } else {
                yearly_premium = Math.floor(parseInt(input.car_value) * input.risk_rating / 100);
                monthly_premium = yearly_premium / 12;
                return { "monthly_premium": monthly_premium, "yearly_premium": yearly_premium };
            }
        }

        else {
            if (1 > input.risk_rating || input.risk_rating > 5 || 0 > input.car_value) {
                return { "error": "there is an error" };
            } else {
                yearly_premium = Math.floor(input.car_value * input.risk_rating / 100);
                monthly_premium = yearly_premium / 12;
                return { "monthly_premium": monthly_premium, "yearly_premium": yearly_premium };
            }
        }
    } else {
        return { "error": "there is an error" };
    }
}

module.exports = quote;