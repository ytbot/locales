module.exports = class BaseLocale {
    constructor(info, locales) {
        this.info = info;
        this.locales = locales;
        [...new Set(
            locales.map(x=>x.category) // Only duplicates
        )].forEach(category=>{
            this[category] = function(name, ...params) {
                let msg = locales.find(x=>x.category === category && x.name === name).message;
                for(const i in params) {
                    msg = msg.replace(`{${i.toString()}}`, params[i]);
                };
                return msg;
            }
        });
    };
};