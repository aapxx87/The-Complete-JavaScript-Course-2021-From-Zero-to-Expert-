const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const showRecipe = async function() {
    console.log('f');
    try {
        const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.430fc437.js.map
