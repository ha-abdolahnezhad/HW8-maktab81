let user = {};
function addProperty(property) {
    function setter(name) {
        this[property] = name;
    }
    return setter.bind(user);
}
addProperty('name')('hamed');
console.log(user);