const products = [
  {
  pName: 'Adicolor 2-Stripes',
  pDes: "Men's Originals",
  pGender: 2,
  pColor: ['#23ef45', '#262A56', '#B8621B'],
  pCategory: 'Sale',
  pPrice: 30000,
  pDiscount: 5,
  pRate: 4.5,
  pCode: 'M101',
  pLsize: true,
  pMsize: true,
  pSsize: false,
  pStock: 10,
  pPhoto: 'M101.jpg',
  },
  {
  pName: 'Fresh Stretch Oxford Shirt',
  pDes: "Men's Fresh Stretch Oxford Shirt",
  pGender: 1,
  pColor: ['#060047', '#B3005E', '#FF5F9E'],
  pCategory: 'New',
  pPrice: 100000,
  pDiscount: 2,
  pRate: 3.8,
  pCode: 'M102',
  pLsize: true,
  pMsize: true,
  pSsize: true,
  pStock: 14,
  pPhoto: 'M102.jpg',
  },
  {
  pName: 'Printed Tee',
  pDes: "Women's Altitude Printed Tee",
  pGender: 2,
  pColor: ['#C0EEE4', '#FFCAC8'],
  pCategory: 'Popular',
  pPrice: 25000,
  pDiscount: 7,
  pRate: 5,
  pCode: 'M103',
  pLsize: false,
  pMsize: false,
  pSsize: true,
  pStock: 20,
  pPhoto: 'M103.jpg',
    },
  {
  pName: 'BASKETBALL TREFOIL JERSEY',
  pDes: "Men's BASKETBALL TREFOIL JERSEY",
  pGender: 1,
  pColor: ['#2192FF', '#9CFF2E', '#FDFF00', '#38E54D'],
  pCategory: 'Sale',
  pPrice: 40000,
  pDiscount: 20,
  pRate: 3.5,
  pCode: 'M104',
  pLsize: false,
  pMsize: true,
  pSsize: false,
  pStock: 5,
  pPhoto: 'M104.jpg',
  },
  ];

let nthItem = 1;
let item = "item" + nthItem;
let colors;
let currentValue;
let gender;
let discountPrice;
function runWebsite(){
    for (const value of products) {
      //set discount price
      discountPrice = value.pPrice - (value.pPrice * value.pDiscount)/100;//calculate discount price

      if(value.pGender == 1){//set gender
        gender = "M";
      } 
      else {
        gender = "F"
      }
      document.getElementById("items").innerHTML +=
        `<div class="${item}">
        <div class="top">
          <img src="./pictures/${value.pPhoto}" alt="" />
          <div class="gender">${gender}</div>
        </div>
        <div class="bottom">
          <div class="container1">
            <div>
              <div>${value.pName}</div>
              <div>${value.pDes}</div>
            </div>
            <div class="category">${value.pCategory}</div>
            <div class="rating">
              <img src="./Star.png" alt="" />
              <div>${value.pRate}</div>
            </div>
          </div>
          <div class="container2">
            <div class="colors"></div>
            <div class="sizes">
              <div>L</div>
              <div>M</div>
              <div>S</div>
            </div>
            <div class="stock">${value.pStock} Left</div>
          </div>
          <div class="container3">
            <div class="previousPrice">${value.pPrice.toLocaleString()} MMK</div>
            <div class="currentPrice">${discountPrice.toLocaleString()} MMK</div>
            <div class="discountPercent">(${value.pDiscount.toLocaleString()}% off)</div>
          </div>
        </div>
      </div>`

    //set colors
    let colorsCnt = value.pColor.length;
    //add elements as many as the colors in the object
    for (let i = 0; i < colorsCnt; i++){
        document.querySelector(`.${item} .colors`).innerHTML += "<div></div>";
    }
    for (let i = 0; i< colorsCnt; i++){
        document.querySelector(`.${item} .colors div:nth-child(${i + 1})`).style.background = value.pColor[i];
        
    }

    //set Gender color
    if (value.pGender == 1){
      document.querySelector(`.${item} .gender`).style.background = "blue";
    } else {
      console.log(document.querySelector(`.${item} .gender`));
      document.querySelector(`.${item} .gender`).style.background = "rgb(228, 87, 111)";
    }

    //sizes
    if (value.pLsize == false){
      document.querySelector(`.${item} .sizes div:nth-child(1)`).style.color = "gray"
      document.querySelector(`.${item} .sizes div:nth-child(1)`).style.opacity = ".7"
    }
    if (value.pMsize == false){
      document.querySelector(`.${item} .sizes div:nth-child(2)`).style.color = "gray"
      document.querySelector(`.${item} .sizes div:nth-child(2)`).style.opacity = ".7"
    }
    if (value.pSsize == false){
      document.querySelector(`.${item} .sizes div:nth-child(3)`).style.color = "gray"
      document.querySelector(`.${item} .sizes div:nth-child(3)`).style.opacity = ".7"
    }
  nthItem++;
  item = "item" + nthItem
  }
    
}

