
let movie= document.querySelector("#movie")




async function find(){
    // console.log("ram")

    let a = document.querySelector("#movname").value;
    // console.log(a)
try{


    let res = await fetch(`https://www.omdbapi.com/?apikey=a7c9e61b&s=${a}`)
    
    let data= await res.json()
    let actualdata= data.Search;
    console.log("data",actualdata)
    
    hist(actualdata)

} 
catch(err){
  console.log(err)
}
}



function hist(arr) {
    arr.forEach(function (el, i) {
      let div = document.createElement("div");
      div.innerHTML = 
      `<img src= "${el.Poster}"/>
          <h4>${el.Title}</h4>
          <h5>Year ${el.Year}
         <h6> Type ${el.Type}</h6>
          `;
          // movie.innerHTML=null;
          movie.append(div);
          
    });
    card.className= 'card-list';

  }


