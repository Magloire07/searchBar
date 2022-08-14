
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user press any key or release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; /*affect input value to userData */
    let emptyArray = []; 
    if(userData){
        emptyArray=  suggestions.filter((data)=>{ /* this function filter the array  "suggestion" relative to what is enter */
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); /* filter and caste to lower 
             and return only those which are starts with user entered word*/
        });
        emptyArray=emptyArray.map((data)=>{
            return data= '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");/*show autocomplete box*/
        showSuggestions(emptyArray);
        
        let allList =suggBox.querySelectorAll("li");
        for(let i=0; i< allList.length; i++){
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active");/*hide autocomplete box*/
    }
   
}
function select(element){
    let selectUserData = element.textContent;
     inputBox.value= selectUserData;
}
function showSuggestions(list){
    let listData;
    if(!list.length){/*si vide*/
      userValue = inputBox.value;
      listData= '<li>'+ userValue+'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML= listData;
}