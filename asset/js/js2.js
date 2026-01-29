const params = new URLSearchParams(window.location.search);
var i = params.get("id");
fetch("../asset/API/perfume.json")
  .then((res) => res.json())
  .then((data) => {
    const card = data[i - 1];
    document.querySelector(".boxpdetail").innerHTML = `
    <div class="detailcard">
              <img src="${card["image"]}" alt="">
            <div class="detailblock">
              <p id="pdt">${card["title"]}</p>
              <div id="pas">
                <p id="dpr">Price: ${card["price"]}</p>
                <p id="stock">In Stock</p>
              </div>
              <p id="paradetail">${card["description"]}</p>
              <div class="lastdetail">
              <button id="buynow">Buy Now</button>
              <button id="backpage"><a href="index.html">Back</a></button>
            <div class="quantity">
              <button id="plus">+</button>
              <p>1</p>
              <button id="minu">-</button>
            </div>
            </div>
            </div>
          </div>
    `;
  });
const param = new URLSearchParams(window.location.search);
var j = param.get("id1");
fetch("../asset/API/clothes.json")
  .then((res) => res.json())
  .then((data) => {
    const card = data[j - 1];
    document.querySelector(".boxpdetail").innerHTML = `
    <div class="detailcard">
              <img src="${card["images"]}" alt="">
            <div class="detailblock">
              <p id="pdt">${card["titles"]}</p>
              <div id="pas">
                <p id="dpr">Price: ${card["prices"]}</p>
                <p id="stock">In Stock</p>
              </div>
              <p id="paradetail">${card["descriptions"]}</p>
              <div class="lastdetail">
              <button id="buynow">Buy Now</button>
              <button id="backpage"><a href="index.html">Back</a></button>
            <div class="quantity">
              <button id="plus">+</button>
              <p>1</p>
              <button id="minu">-</button>
            </div>
            </div>
            </div>
          </div>
    `;
  });
var k = 0;
// $(document).on("click", "#buynow", function () {
//   $("#btncardnumber").text(k++);
// });
// $(document).on("click", "#bag-icon", function () {
//   // $("#").text(k++);
// });
$(document).on("click", "#buynow", function () {
   $("#btncardnumber").text(++k);
const params = new URLSearchParams(window.location.search);
var i = params.get("id");
var j = params.get("id1");
if(i){
  fetch("../asset/API/perfume.json")
  .then((res) => res.json())
  .then((data) => {
    const card = data[i - 1];
    var mid = "";
    mid +=(``)
    $(".boxx").prepend(`
      <div class="procards">
          <div class="procarddetail">
            <img id="picbuyproduct" src="${card["image"]}" alt="">
              <p id="titlebuyproduct" >${card["title"]}</p>
              <p id="pricebuyproduct" >Price: $${card["price"]}</p>
                  <button id="deleteproduct">Delete</button>
          </div>
      </div>`);
          // document.querySelector("#picbuyproduct").src = card["images"];
});
}if(j){
  fetch("../asset/API/clothes.json")
  .then((res) => res.json())
  .then((data) => {
    const card = data[j - 1];
    var mid = "";
    mid +=(``)
    $(".boxx").prepend(`
      <div class="procards">
          <div class="procarddetail">
            <img id="picbuyproduct" src="${card["images"]}" alt="">
              <p id="titlebuyproduct" >${card["titles"]}</p>
              <p id="pricebuyproduct" >Price: $${card["prices"]}</p>
                  <button id="deleteproduct">Delete</button>
          </div>
      </div>`);
});
}
  });
$(document).on("click", "#deleteproduct", function(){
  //  var z = k 
  $("#btncardnumber").text(--k);
    $(this).parents(".procards").remove();  
    
});
// var z = k;
// $(document).on("click", "#deleteproduct", function(){
   

// });
