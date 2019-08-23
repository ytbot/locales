Locales for ytbot replies

function for turning old locales into new format
```js
function generate(obj) {
    res = []
    Object.keys(obj).forEach(key=>{
        Object.keys(obj[key]).forEach(piece=>{
            res.push({
                category: key, 
                name: piece, 
                message: obj[key][piece].replace(/'/g, "\\'")
            })
           })
    })
    return JSON.stringify(res, null, 4)
        .replace(/"/gi, "'")
        .replace(/'category'/g, "category")
        .replace(/'name'/g, 'name')
        .replace(/'message'/g, "message")
        .replace(/message: '.+'/gi, "$&,")
        .replace(/\\\\/g, "\\")
}
```