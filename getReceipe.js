
const loadRecepie = async ()=>{
    try{

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
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
        result.innerHTML = data.categories.map((food)=>{
            return `
            <div class="food-item">
            <h2>${food.strCategory}</h2>
            <img src="${food.strCategoryThumb}" alt="${food.strMeal}">
            <h3 class="food-name">${food.strCategoryDescription}</h3>
            </div>`
        })

 }

loadRecepie();