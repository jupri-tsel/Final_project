let images =[
    {url: "garuda.jpg",
    type: "FIVE STARS",
    captain_name: "PLATINUM"},
    {url: "Saudi.png",
    type: "FIVE STARS",
    captain_name: "DIAMOND"},
    {url: "emirates.png",
    type: "FIVE STARS",
    captain_name: "GOLD"},
    {url: "etihad.png",
    type: "FIVE STARS",
    captain_name: "SILVER"},
    {url: "qatar.jpg",
    type: "FIVE STARS",
    captain_name: "REGULAR"},
    {url: "malaysia.png",
    type: "FIRST CLASS",
    captain_name: "REGULAR-Executive"},
    {url: "lion.png",
    type: "FIRST CLASS",
    captain_name: "REGULAR-FIRST CLASS"},
    {url: "batik.png",
    type: "FIRST CLASS",
    captain_name: "REGULAR-VIP"},
    {url: "citilink.png",
    type: "FIRST CLASS",
    captain_name: "REGULAR-ECONOMY"},
    {url: "airasia.png",
    type: "FIRST CLASS",
    captain_name: "REGULAR-VVIP"},
    {url: "kuwait.png",
    type: "FIRST CLASS",
    captain_name: "REGULAR-STANDARD"},
];

let konten_el = document.getElementById("konten-holder");

const display = (arr = images) => {
    konten_el.innerHTML = "";
  
    arr.forEach(images => {
      konten_el.innerHTML += `
        <div class="card col-md-3">
          <div class="card-body">
          <img src="images/${images.url}" class="card-img-top" alt="Profile Images">
          <h3>${images.captain_name}</h3>
          </div>
        </div>
      `
    })
  }
  display();

   function show_all() {
    display();
  }  

function show_counterparts(cType) {
    let filtered_images = images.filter(images => images.type === cType);
    // console.log(filtered_images);

    konten_el.innerHTML = "";
 
  
    display(filtered_images);
}


