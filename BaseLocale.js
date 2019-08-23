module.exports = class BaseLocale {
    constructor(info, locales) {
        this.info = info;
        this.locales = locales;
        [...new Set(
            locales.map(x=>x.category) // No duplicates
        )].forEach(category=>{
            this[category] = function(name, ...params) { // Creates function for each category
                let msg = locales.find(x=>x.category === category && x.name === name).message; // Finds locale object
                for(const i in params) {
                    msg = msg.replace(`{${i.toString()}}`, params[i]); // Replaces every index of params with those provided in function
                };
                return msg;
            }
        });
    };
};