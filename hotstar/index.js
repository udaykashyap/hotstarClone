let movies = [
    {
        name: "Aashiqana",
        des: "StarPlus.Hindi.Drama",
        des2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reprehenderit alias, quisquam facere ea odio!.",
        imges: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e"
    },
    {
        name: "Dahan: Rakan Ka Rahaysa",
        des: "StarPlus.Hindi.Drama",
        des2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reprehenderit alias, quisquam facere ea odio!.",
        imges: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1300/1351300-h-57705cab5962"
    },
    {
        name: "Babli Bouncer",
        des: "StarPlus.Hindi.Comedy",
        des2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reprehenderit alias, quisquam facere ea odio!.",
        imges: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7382/1357382-h-e8e07b3880aa"
    },
    {
        name: "House of the Dragon",
        des: "HBO.English",
        des2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reprehenderit alias, quisquam facere ea odio!.",
        imges: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218"
    },
    {
        name: "ShoorVeer",
        des: "StarPlus.Hindi.Drama",
        des2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reprehenderit alias, quisquam facere ea odio!.",
        imges: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/964/1310964-h-794bdd5d0518"
    }
];

let carouseel = document.querySelector(".carousel")

function carousel() {
    let imgel = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let slide = document.createElement("div")

    imgel.src = movies[0].imges
    h1.innerText = movies[0].name;
    p.innerText = movies[0].des;
    p2.innerText = movies[0].des2;

    content.append(h1, p, p2);
    slide.append(content, imgel)
    carouseel.append(slide);

    let i = 1;


    setInterval(function () {

        if (i == movies.length) {
            i = 1;
        }
        console.log(i);

        imgel.src = movies[i].imges
        h1.innerText = movies[i].name;
        p.innerText = movies[i].des;
        p2.innerText = movies[i].des2,
        i++
    }, 3000)

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
    p2.className = 'movie-des2';
}
carousel()


// f8557b1