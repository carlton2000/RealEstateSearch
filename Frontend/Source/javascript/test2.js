// Defines globals
const lists = {
    province: "WC,KZN,JHB".split(","),
    propertyT:   "Apartment,Cottage,Penthouse".split(","),
    rooms:  "1 Room,2 Rooms,3 Rooms,4 Rooms,5 Rooms,6 Rooms,7 Rooms,8 Rooms,9 Rooms".split(","),
    price: "R11 000, R19 000, R28 000, R45 000, R7 000, R15 000, R20 500, R25 000, R27 000, R35 350".split(","),
    bathrooms:  "1 bathrooms,2 bathrooms,3 bathrooms,4 bathrooms,5 bathrooms,6 bathrooms".split(","),
    img: `../../Public/images/CapeTown-a.jpg,.../../Public/images/CapeTown-p.jpg,../../Public/images/CapeTown-c.jpg,../../Public/images/CapeTown-a2.jpg,.../../Public/images/CapeTown-p2.jpg,
    ../../Public/images/CapeTown-c2.jpg,../../Public/images/CapeTown-a3.jpg,.../../Public/images/CapeTown-p3.jpg,../../Public/images/CapeTown-c3.jpg,../../Public/images/KwaZulu-a.jpg,
    ../../Public/images/KwaZulu-p.jpg,../../Public/images/KwaZulu-c.jpg,../../Public/images/KwaZulu-a2.jpg,
    ../../Public/images/KZN-p2.jpg,../../Public/images/KZN-c2.jpg,../../Public/images/KZN-a3.jpg,
    ../../Public/images/KZN-p3.jpg,../../Public/images/KZN-c3.jpg,../../Public/images/JHB-a.jpg,../../Public/images/JHB-p.jpg,../../Public/images/JHB-c.jpg,
    ../../Public/images/JHB-a2.jpg,../../Public/images/JHB-p2.jpg,../../Public/images/JHB-c2.jpg,../../Public/images/JHB-a3.jpg,../../Public/images/JHB-p3.jpg,../../Public/images/JHB-c3.jpg,`.split(","),
  };
  let data = [
      { id: 101, province: 'WC',   propertyT: 'Apartment', price:'R11 000', rooms: '1 Room', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-a.jpg' },
      { id: 102, province: 'KZN',    propertyT: 'Cottage', price:'R7 600', rooms: '2 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/KwaZulu-c.jpg' },
      { id: 103, province: 'JHB',   propertyT: 'Penthouse', price:'R54 000', rooms: '9 Rooms', bathrooms : '6 bathrooms', img : '../../Public/images/JHB-p.jpg'},
      { id: 104, province: 'KZN',   propertyT: 'Apartment', price:'R5 500', rooms: '1 Room', bathrooms : '1 bathrooms', img : '../../Public/images/KwaZulu-a.jpg' },
      { id: 105, province: 'JHB',    propertyT: 'Cottage', price:'R26 350', rooms: '6 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-c.jpg'},
      { id: 106, province: 'WC',   propertyT: 'Penthouse', price:'R45 900', rooms: '8 Rooms', bathrooms : '6 bathrooms', img : '../../Public/images/CapeTown-p.jpg'},
      { id: 107, province: 'JHB',   propertyT: 'Apartment', price:'R13 500', rooms: '4 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-a.jpg' },
      { id: 108, province: 'WC',    propertyT: 'Cottage', price:'R10 000', rooms: '2 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/CapeTown-c.jpg' },
      { id: 109, province: 'KZN',   propertyT: 'Penthouse', price:'R35 000', rooms: '5 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/KwaZulu-p.jpg' },
      { id: 110, province: 'JHB',   propertyT: 'Apartment', price:'R25 000', rooms: '3 Room', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-a2.jpg' },
      { id: 111, province: 'WC',    propertyT: 'Cottage', price:'R19 000', rooms: '5 Rooms', bathrooms : '5 bathrooms', img : '../../Public/images/CapeTown-c2.jpg' },
      { id: 112, province: 'KZN',   propertyT: 'Penthouse', price:'R32 800', rooms: '8 Rooms', bathrooms : '5 bathrooms', img : '../../Public/images/KZN-p2.jpg' },
      { id: 113, province: 'WC',   propertyT: 'Apartment', price:'R11 000', rooms: '3 Room', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-a2.jpg' },
      { id: 114, province: 'KZN',    propertyT: 'Cottage', price:'R13 500', rooms: '4 Rooms', bathrooms : '2 bathrooms', img : '../../Public/images/KZN-c2.jpg' },
      { id: 115, province: 'JHB',   propertyT: 'Penthouse', price:'R55 700', rooms: '9 Rooms', bathrooms : '6 bathrooms', img : '../../Public/images/JHB-p2.jpg'},
      { id: 116, province: 'KZN',   propertyT: 'Apartment', price:'R25 000', rooms: '3 Room', bathrooms : '3 bathrooms', img : '../../Public/images/KZN-a2.jpg' },
      { id: 117, province: 'JHB',    propertyT: 'Cottage', price:'R15 000', rooms: '4 Rooms', bathrooms : '2 bathrooms', img : '../../Public/images/JHB-c2.jpg'},
      { id: 118, province: 'WC',   propertyT: 'Penthouse', price:'R45 000', rooms: '7 Rooms', bathrooms : '6 bathrooms', img : '../../Public/images/CapeTown-p2.jpg'},
      
  ];

  const dropdowns = document.getElementsByClassName("filterable");
  
  // Runs the `filterData` function when the user changes something
  document.addEventListener("change", filterData);
  
  // Defines the `filterData` function
  function filterData(event){
  
    // Converts the NodeList to an Array so we can use the `.includes`,
    //   `.map`, and `.filter` methods
    const dropdownArr = Array.from(dropdowns);
  
    // Makes sure the changed element was one we care about before proceeding
    if(dropdownArr.includes(event.target)){
  
      // Makes a new array from the selected values
      const currentFilter = dropdownArr.map(dropdownArr => dropdownArr.value);
  
      // Makes a new (filtered) array by applying each element of `currentFilter`
      //   to its respective property in each element of `data`
      //   (This is the fragile bit because it assumes the order is correct.)
      const output = data.filter(item =>
        (!currentFilter[0] || currentFilter[0] == item.province) &&
        (!currentFilter[1] || currentFilter[1] == item.propertyT) &&
        (!currentFilter[2] || currentFilter[2] == item.price) &&
        (!currentFilter[3] || currentFilter[3] == item.rooms)&&
        (!currentFilter[4] || currentFilter[4] == item.bathrooms)
      );
  
      // Does something with the filtered data
      let propertyCards = "";
for ( let i=0; i<output.length; i++){
  propertyCards += `<div class='propertyCard'>
                        <div class="row"> 
                        <div class="column">  
                        <div class="card">    
                        <h1>${output[i].province}</h1>
                        <img src='${output[i].img}'/>                                             
                        <h4>${output[i].propertyT}</h4>
                        <h4>${output[i].price}</h4>
                        <h6>Rooms: ${output[i].rooms}</h6>
                        <h6>Bathrooms: ${output[i].bathrooms}</h6>
                        </div>
                        </div>
                        </div>
                   </div>`;
}
    document.getElementById("PropertyDiv").innerHTML = propertyCards;
      console.log(output.length > 0 ? output : "No matching results");
    }
  }
  
  var slideIndex = 1;
        showDivs(slideIndex);

          function plusDivs(n) {
            showDivs(slideIndex += n);
          }

          function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "block";  
          }
          // making the functionalty onclick in the js file 
          // looping through different img