
window.addEventListener("load",()=>{
    const btn = document.getElementById("btn");
    btn.addEventListener("click",searchFood);
})

const foodData = async (foodName)=>{
    try{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      const data = await res.json();
      console.log(data);
      showData(data,foodName);
    }
    catch(err){

    }

}

const searchFood=(e)=>{
    e.preventDefault();

    const search = document.getElementById("search").value;
    foodData(search);
}

function showData(data,foodName){
   const result = document.getElementById("result");
   result.innerHTML = "";
   const content = document.getElementById("search-content");
   content.innerHTML = "";
   const h2= document.createElement("h2");
   h2.textContent = `Your Searching Meal ${foodName}`;
   h2.style.textAlign="center";
   content.append(h2);
   if(data.meals ===null)
   {
       content.innerHTML="";
       h2.textContent = `No Search Meal found for ${foodName}`;
       content.append(h2);
   }
   else{
       result.innerHTML = data.meals.map((food)=>{
           return `<div class="item">
           <img src="${food.strMealThumb}" alt="${food.strMeal}">
           <h3 class="food-name">${food.strMeal}</h3>
           </div>`
       })
   }   

}
