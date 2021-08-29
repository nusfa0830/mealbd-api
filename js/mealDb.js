const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    if (searchText == ''){
        // please write 
    }
else{
    // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

// data fetch korche  website thk 
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));
}}
// meal rtake dekhanor jnno search result take dhore anse 
const displaySearchResult = meals => {
   const searchResult= document.getElementById("search-result");
//    for clearing previous content
searchResult.innerHTML = '';
//  searchResult.textContent = '';
// error message
if (meals.length == 0){
//     const div  = document.createElement('div');
//     div.classList.add('bg-secondy');
//     div.innerHTML = `<div class="container-fluid">
//     <h3>NO meal found. search again</h3>
//   </div>`
}

   meals.forEach (meal => {
    //    console.log(meals);
       const div  = document.createElement('div');
       div.classList.add('col');

    //   dynamic vabe meal gula k id diye dhore dhore anbe 
       div.innerHTML = `
       <div onclick="loadMealDetail(${meal.idMeal})"  class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
       </div>
     </div>
       `
       searchResult.appendChild(div);
       
   });
}

//  uporer div tate click korle jate  meal gula show hoi 

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {

const mealDetails = document.getElementById("meal-details");
const div = document.createElement('div');
div.classList.add('card');
div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
     <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>
`
mealDetails.appendChild(div);

}