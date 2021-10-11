
const loadRecepie = async ()=>{
    try{

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const data = await res.json();
        console.log(data);
        showData(data);
    }
    catch(err)
    {

    }
}

function showData(data){
    const result = document.getElementById("result");
    result.innerHTML = "";
        result.innerHTML = data.meals.map((food)=>{
            return `
            <div class="latest-item">
            <h2>${food.strCategory}</h2>
            <img src="${food.strMealThumb}" alt="${food.strMeal}">
            <h3 class="food-name">${food.strMeal}</h3>
            </div>`
        })

 }

loadRecepie();