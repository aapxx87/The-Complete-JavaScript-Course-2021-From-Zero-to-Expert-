// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };
const showRecipe = async function() {
    try {
        const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcd07');
        const data = await res.json();
        // Step 7 - если неправильный id, то в свойстве объекта res в ok - будет false и в ошибку мы вставляем message из полученной даты
        // эта ошибка попадает в блок catch, которая выдает алерт с прописанной тут нотификацией
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        // console.log(res);
        //
        console.log(data);
        // Step 8
        // сохраняем из полученных данных сам рецепт
        // так как это объект, то можно сразу деструктурировать полученный рецепт не просто в переменную, а в объект
        let { recipe  } = data.data;
        //так как recipe у нас переменная, то переназначим ее в объект c понятными нам свойствами
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(recipe);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.26f645e3.js.map
