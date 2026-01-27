
  $("#btns").click(() => {
      if (i == 3) {
        i = 0;
      } else i = i + 1;
      $(".boxcardtwo").css("transform", `translateX(${-i * 420}px)`);
    });
    $("#btn").click(() => {
      if (i == 0) {
        i = 3;
      } else i = i - 1;
      $(".boxcardtwo").css("transform", `translateX(${-i * 420}px)`);
    });

    let i = 0;
    var isfull = 0;
    setInterval(function () {
      if (isfull == 1) {
        i = i - 1;
        $(".boxcardtwo").css("transform", `translateX(${-i * 420}px)`);
        if (i === 0) {
          isfull = 0;
          return;
        }
      } else {
        i = i + 1;
        $(".boxcardtwo").css("transform", `translateX(${-i * 420}px)`);
        if (i === 5) {
          isfull = 1;
          return;
        }
      }
    }, 4000);

    $(document).ready(function () {
      let index = 0;
      const img = document.querySelectorAll(".card img");
      const a = document.querySelectorAll(".number ul li");

      if (img.length > 0 && a.length > 0) {
        setInterval(function () {
          a[index].classList.remove("active");
          index = (index + 1) % a.length;
          img[index].classList.add("active");
          a[index].classList.add("active");
        }, 4000);
      }
    });


   var id;
   var card,cards;
   const storageKey = "perfumes";
   function displaycardperfume(data) {
  let mid = "";
  for (let card of data) {
    mid += `
      <div class="card">
        <img src="${card.image}" alt=""/>

        <p style="text-align: center">
          <b style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            ${card.title}
          </b>
        </p>

        <div class="pimg">
          <p><b>Price:</b> <b id="p">$${card.price}</b></p>
          <div class="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
        <button class="buys">
          <a href="../page/details.html?id=${card['id']}">Order Now</a>
        </button>
      </div>
    `;
  }

  document.querySelector(".blockcard").innerHTML = mid;
}
const storageData = localStorage.getItem(storageKey);

if (storageData) {
  displaycardperfume(JSON.parse(storageData));
} else {
  fetch("../asset/API/perfume.json")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem(storageKey, JSON.stringify(data));
      displaycardperfume(data);
    })
    .catch(err => console.error(err));
}

  //   fetch("../asset/API/perfume.json")
  // .then(res => res.json())
  // .then(data => {
  //   var mid = ``;
  //   for (card of data) {
  //     mid += `
  //         <div class="card">
  //     <img
  //       src="${card['image']}" alt=""/>
  //     <p style="text-align: center">
  //       <b style="font-family: &quot;Segoe UI&quot;, Tahoma, Geneva, Verdana, sans-serif;">${card['title']}</b></p>
  //     <div class="pimg">
  //       <p><b>Price: </b> <b id="p">$${card['price']}</b></p>
  //       <div class="star-rating">
  //         <i class="fa-solid fa-star"></i>
  //         <i class="fa-solid fa-star"></i>
  //         <i class="fa-solid fa-star"></i>
  //         <i class="fa-solid fa-star"></i>
  //         <i class="fa-regular fa-star"></i>
  //       </div>
  //     </div>
  //     <button class="buys" ><a href=".././page/details.html">Order Now</a></button>
  //   </div>
  //     `;
  //   }
  //   document.querySelector(".blockcard").innerHTML = mid;
  // })
  
  const storageKeyclothe = "clothes";
  function displaycardclothes(data) {
  let midd = "";
  for (let card of data) {
    midd += `
      <div class="cardd">
        <img src="${card.images}" alt=""/>
        <p style="text-align: center">
          <b style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            ${card.titles}
          </b>
        </p>
        <div class="pimg">
          <p><b>Price:</b> <b id="p">$${card.prices}</b></p>
          <div class="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
        </div>
        <button class="buys">
          <a href="detail.html?id1=${card['id']}">Order Now</a>
        </button>
      </div>
    `;
  }
  document.querySelector(".bloockcard").innerHTML = midd;
}
const storagedataa = localStorage.getItem(storageKeyclothe);
if (storagedataa) {
  displaycardclothes(JSON.parse(storagedataa));
} else {
  fetch("../asset/API/clothes.json")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem(storageKeyclothe, JSON.stringify(data));
      displaycardclothes(data);
    })
    .catch(err => console.error(err));
}
