let cardData= [
    { name: "Chhichore",
    releaseDate:2019,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
    imb:5
    },
    { name: "MS Dhoni: The Untold Story",
    releaseDate:2016,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
    imb:7.4
    },
    { name: "Sanju",
    releaseDate:2018,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4665/64665-v",
    imb:6.5
    },
    { name: "Bhaag Milkha Bhaag",
    releaseDate:2013,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1354/1000001354/1000001354-v",
    imb:6
    },
    { name: "Super 30",
    releaseDate:2019,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v",
    imb:5
    },
    { name: "Jolly LLB 2",
    releaseDate:2017,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/5403/1770015403/1770015403-v",
    imb:6.4
    },
    { name: "Mission Mangal",
    releaseDate:2019,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
    imb:4.8
    },
    { name: "Jolly LLB",
    releaseDate:2013,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/7132/1000007132/1000007132-v",
    imb:4.8
    },
    { name: "2 States",
    releaseDate:2017,
    img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4502/1000034502/1000034502-v",
    imb:4.4
    }
];

let cardmoviesdata=[];
let pablu= document.querySelector(".card");

function ter (a){


a.forEach(function(el){
    let card= document.createElement("div");

    let poster= document.createElement("img");
        poster.src = el.img;

    let movname= document.createElement("h3");
        movname.innerText=el.name;

    let rdate= document.createElement("p");
        rdate.innerText= el.releaseDate;

    let movRate= document.createElement("h5");
        movRate.innerText="IMB-"+el.imb;

    card.append(poster,movname,rdate,movRate);
    cardmoviesdata.push(el);
    pablu.append(card);

card.className= 'card-list';
poster.className= "card-img";
movname.className= "movie-name";
rdate.className= "date";
movRate.className="imb";

})
}
ter(cardData)




function lhfun(){
    pablu.innerHTML=null;
    cardData.sort(function(a,b){
        return a.imb - b.imb;
    })
    ter(cardData);
}

function hlfun(){
    pablu.innerHTML=null;
    cardData.sort(function(a,b){
        return b.imb - a.imb;
    })
    ter(cardData);
}

console.log(cardmoviesdata)