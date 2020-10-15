// Defines globals
const lists = {
    province: "Western Cape,Kwa-Zulu Natal,Johannesburg".split(","),
    propertyT:   "Apartment,Cottage,Penthouse".split(","),
    rooms:  "1 Room,2 Rooms,3 Rooms,4 Rooms,6 Rooms,8 Rooms,9 Rooms".split(","),
    // price: "5 000-R10 000, R28 000, R45 000, R7 000, R15 000, R20 500, R25 000, R27 000, R35 350".split(","),
    bathrooms:  "1 bathrooms,2 bathrooms,3 bathrooms,4 bathrooms,6 bathrooms".split(","),
    img: `../../Public/images/CapeTown-a.jpg,.../../Public/images/CapeTown-p.jpg,../../Public/images/CapeTown-c.jpg,../../Public/images/CapeTown-a2.jpg,.../../Public/images/CapeTown-p2.jpg,
    ../../Public/images/CapeTown-c2.jpg,../../Public/images/CapeTown-a3.jpg,.../../Public/images/CapeTown-p3.jpg,../../Public/images/CapeTown-c3.jpg,../../Public/images/KwaZulu-a.jpg,
    ../../Public/images/KwaZulu-p.jpg,../../Public/images/KwaZulu-c.jpg,../../Public/images/KwaZulu-a2.jpg,
    ../../Public/images/KZN-p2.jpg,../../Public/images/KZN-c2.jpg,../../Public/images/KZN-a3.jpg,
    ../../Public/images/KZN-p3.jpg,../../Public/images/KZN-c3.jpg,../../Public/images/JHB-a.jpg,../../Public/images/JHB-p.jpg,../../Public/images/JHB-c.jpg,
    ../../Public/images/JHB-a2.jpg,../../Public/images/JHB-p2.jpg,../../Public/images/JHB-c2.jpg,../../Public/images/JHB-a3.jpg,../../Public/images/JHB-p3.jpg,../../Public/images/JHB-c3.jpg,`.split(","),
  };
  let data = [
      { id: 101, province: 'Western Cape',   propertyT: 'Apartment', price:'R11 000', rooms: '1 Room', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-a.jpg' },
      { id: 102, province: 'Kwa-Zulu Natal',    propertyT: 'Cottage', price:'R7 600', rooms: '2 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/KwaZulu-c.jpg' },
      { id: 103, province: 'Johannesburg',   propertyT: 'Penthouse', price:'R54 000', rooms: '8 Rooms', bathrooms : '6 bathrooms', img : '../../Public/images/JHB-p.jpg'},
      { id: 104, province: 'Kwa-Zulu Natal',   propertyT: 'Apartment', price:'R5 500', rooms: '1 Room', bathrooms : '1 bathroom', img : '../../Public/images/KwaZulu-a.jpg' },
      { id: 105, province: 'Johannesburg',    propertyT: 'Cottage', price:'R26 350', rooms: '6 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-c.jpg'},
      { id: 106, province: 'Western Cape',   propertyT: 'Penthouse', price:'R45 900', rooms: '9 Rooms', bathrooms : '6 bathrooms', img : '../../Public/images/CapeTown-p.jpg'},
      { id: 107, province: 'Johannesburg',   propertyT: 'Apartment', price:'R13 500', rooms: '4 Rooms', bathrooms : '2 bathrooms', img : '../../Public/images/JHB-a.jpg' },
      { id: 108, province: 'Western Cape',    propertyT: 'Cottage', price:'R10 000', rooms: '2 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/CapeTown-c.jpg' },
      { id: 109, province: 'Kwa-Zulu Natal',   propertyT: 'Penthouse', price:'R35 000', rooms: '6 Rooms', bathrooms : '6 bathrooms', img : '../../Public/images/KwaZulu-p.jpg' },
      { id: 110, province: 'Johannesburg',   propertyT: 'Apartment', price:'R25 000', rooms: '3 Room', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-a2.jpg' },
      { id: 111, province: 'Western Cape',    propertyT: 'Cottage', price:'R19 000', rooms: '6 Rooms', bathrooms : '4 bathrooms', img : '../../Public/images/CapeTown-c2.jpg' },
      { id: 112, province: 'Kwa-Zulu Natal',   propertyT: 'Penthouse', price:'R32 800', rooms: '8 Rooms', bathrooms : '6 bathrooms', img : '../../Public/images/KZN-p2.jpg' },
      { id: 113, province: 'Western Cape',   propertyT: 'Apartment', price:'R12 350', rooms: '3 Rooms', bathrooms : '2 bathrooms', img : '../../Public/images/CapeTown-a2.jpg' },
      { id: 114, province: 'Kwa-Zulu Natal',    propertyT: 'Cottage', price:'R13 500', rooms: '4 Rooms', bathrooms : '2 bathrooms', img : '../../Public/images/KZN-c2.jpg' },
      { id: 115, province: 'Johannesburg',   propertyT: 'Penthouse', price:'R55 700', rooms: '9 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/JHB-p2.jpg'},
      { id: 116, province: 'Kwa-Zulu Natal',   propertyT: 'Apartment', price:'R25 000', rooms: '3 Rooms', bathrooms : '3 bathrooms', img : '../../Public/images/KZN-a2.jpg' },
      { id: 117, province: 'Johannesburg',    propertyT: 'Cottage', price:'R15 000', rooms: '4 Rooms', bathrooms : '2 bathrooms', img : '../../Public/images/JHB-c2.jpg'},
      { id: 118, province: 'Western Cape',   propertyT: 'Penthouse', price:'R45 000', rooms: '8 Rooms', bathrooms : '4 bathrooms', img : '../../Public/images/CapeTown-p2.jpg'},
      
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
        (!currentFilter[2] || currentFilter[2] == item.rooms)&&
        (!currentFilter[3] || currentFilter[3] == item.bathrooms)
      );
  
      // Does something with the filtered data
      let propertyCards = "";
for ( let i=0; i<output.length; i++){
  propertyCards += `<div class='propertyCard'>
                        <div class="row"> 
                        <div class="column">  
                        <div class="card"> 
                        <img src='${output[i].img}'/>
                        <div class="padding">
                        <h2>${output[i].province}</h2>                                             
                        <h4>${output[i].propertyT}</h4>
                        <h4>${output[i].price}</h4>
                        <h6><i class="fa fa-bed" aria-hidden="true" style="font-size:19px;"></i>&nbsp;&nbsp;Rooms: ${output[i].rooms}</h6>
                        <h6><i class="fa fa-bath" aria-hidden="true" style="font-size:19px;"></i>&nbsp;&nbsp;Bathrooms: ${output[i].bathrooms}</h6>
                        </div>
                        </div>
                        </div>
                        </div>
                   </div>`;
}
    document.getElementById("PropertyDiv").innerHTML = propertyCards;
      console.log(output.length > 0 ? output : "No matching results");
    }
  }
  