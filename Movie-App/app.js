const create = document.querySelector(".create");
const submit = document.querySelector(".submit");
const closebtn = document.getElementsByClassName("close-icon")[0];
const displayData = document.querySelector(".display");
const container = document.querySelector(".container")

const data = [];

create.addEventListener("click", () => {
    displayData.style.display = "block"
})

closebtn.addEventListener("click", () => {
    displayData.style.display = "none"
})


submit.addEventListener("click", (e) => {
    e.preventDefault();
    let movie = document.querySelector(".moviename").value;
    let actors = document.querySelector(".actorName").value;
    let director = document.querySelector(".directorName").value;
    let trailer = document.querySelector(".trailer").value;
    let imdb = document.querySelector(".imdb").value;
    let category = document.querySelector(".category").value;

    let obj = {
        Moviename: movie,
        ActorsName: actors,
        DirectorName: director,
        Trailer: trailer,
        IMDB: imdb,
        Category: category
    }

    data.push(obj)
    displayData.style.display = "none"
    show(data)
});

function show(data) {
    container.innerHTML = "";
    data.map((d) => {
        let html = `<div class="moviePopup">
        <i class="fa-solid fa-x delete-icon"></i>
        <div class="img">${d.Trailer}</div>
        <p class="para">movie: ${d.Moviename}</p>
        <p class="para">actors: ${d.ActorsName}</p>
        <p class="para">director: ${d.DirectorName}</p>
        <p class="para">rating: ${d.IMDB}</p>
        <p class="para">category: ${d.Category}</p>
        </div>`
        container.innerHTML += html;
    });

    const remove = document.getElementsByClassName("delete-icon")
    const arr = Array.from(remove)
    arr.map((element) => {
        element.addEventListener("click", (e) => {
            element.parentElement.remove()
        });
    });
}

const sort = document.querySelector(".sort")
sort.addEventListener("click", () => {
    let sortdata = data.sort(function (a, b) {
        return a.IMDB - b.IMDB
    });
    show(sortdata);
});

// const filterByActor = document.querySelector(".filterByActor")
// filterByActor.addEventListener("click", ()=>{
//     let actorFilter = data.filter((e)=>{
//         return e.Category === "actors"
//     });
//     show(actorFilter);
// });

const comedy = document.querySelector(".comedy")
comedy.addEventListener("click", () => {
    let comedyFilter = data.filter((e) => {
        return e.Category === "comedy"
    });
    show(comedyFilter);
});

const action = document.querySelector(".action")
action.addEventListener("click", () => {
    let actionFilter = data.filter((e) => {
        return e.Category === "action"
    });
    show(actionFilter);
});

const adventure = document.querySelector(".adventure")
adventure.addEventListener("click", () => {
    let adventureFilter = data.filter((e) => {
        return e.Category === "adventure"
    });
    show(adventureFilter);
});

const animation = document.querySelector(".animation")
animation.addEventListener("click", () => {
    let animationFilter = data.filter((e) => {
        return e.Category === "animation"
    });
    show(animationFilter);
});