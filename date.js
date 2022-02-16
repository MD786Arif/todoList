
exports.getDate = function () {
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    const today = new Date();

    return today.toLocaleDateString("en-US", options);
};
exports.getDay = function () {
    var options = {
        weekday: 'long',

    };
    const today = new Date();

    return today.toLocaleDateString("en-US", options);;
};
// console.log(module);