import '../sass/main.scss'
// import { icons } from 'url:../img/icons.svg'

const recipeContainer = document.querySelector('.recipe')




const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2


// 288.7
const renderSpinner = function (parentEl) {

  const markup = `
  <div class="spinner">
  <div class=""spinner-element></div>
  <svg>
    <use href="src/img/icons.svg#icon-loader"></use>
  </svg>
</div>
  `

  parentEl.innerHTML = ''
  parentEl.insertAdjacentHTML('afterbegin', markup)

}


// 287
const showRecipe = async function () {

  // 1) Loading recipe
  try {

    // 289.3 - window.location - это весь url и из него забираем hash, так как строка с id начинается с #, то мы его обрезаем
    const id = window.location.hash.slice(1)
    console.log(id);

    // 288.7
    renderSpinner(recipeContainer)

    // const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40')
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)

    const data = await res.json()

    if (!res.ok) throw new Error(`${data.message} (${res.status})`)

    let { recipe } = data.data

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    }

    // 2) rendering recipe

    // 288.2
    const markup = `
        <figure class="recipe__fig">
        <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="src/img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <div class="recipe__info-icon">
            U
          </div>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              -
            </button>
            <button class="btn--tiny btn--increase-servings">
              +
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          U
        </div>
        <button class="btn--round">
          B
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">

            ${recipe.ingredients.map(function (ing) {
      return `
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="src/img/icons.svg#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${ing.quantity}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${ing.unit}</span>
                    ${ing.description}
                  </div>
                </li>
               `
    }).join('')}
        
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `
    // 288.4
    recipeContainer.innerHTML = ''

    // 288.3
    recipeContainer.insertAdjacentHTML('afterbegin', markup)



  } catch (err) {
    alert(err)
  }

}


// showRecipe()


// 289.2 - теперь мы функцию showRecipe() запускаем не сразу а только по событию, но нам нужно забрать id рецепта из хеша
window.addEventListener('hashchange', showRecipe)