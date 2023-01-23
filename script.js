// $(function() {

//   "use strict"
  
//   var init = "No items yet!";
//   var counter = 0;

//   // Initial Cart
//   $(".counter").html(init);
  
//   // Add Items To Basket
//   function addToBasket() {
//     counter++;
//     $(".counter").html(counter).animate({
//       'opacity' : '0'
//     },300, function() {
//       $(".counter").delay(300).animate({
//         'opacity' : '1'
//       })
//     })
//   }

//   // Add To Basket Animation
//   $("button").on("click", function() {
//     addToBasket(); $(this).parent().parent().find(".product_overlay").css({
//       'transform': ' translateY(0px)',
//       'opacity': '1',
//       'transition': 'all ease-in-out .45s'
//     }).delay(1500).queue(function() {
//       $(this).css({
//         'transform': 'translateY(-500px)',
//         'opacity': '0',
//         'transition': 'all ease-in-out .45s'
//       }).dequeue();
//     });
//   });
// });


let product = [
{name:"مایع لباسشویی پورکس",
 img:'1.png',tozih:`بسیار مقرون بصرفه
تثبیت رنگ لباس 
نرم کنندگی بالا 
مناسب برای : استفاده خانگی _ هتل ها_ بیمارستان ها_خشکشویی ها و...`,
tozihmore:`مایع لباسشویی پورکس : 
غلظت : بالا 
حجم :10 لیتر
رنگ : آبی_بنفش_لیمویی_سبز_صورتی
رایحه : Nice_ گل های بهاری_ لیمو_ توت فرنگی _موز_سیب
بسیار مقرون بصرفه
تثبیت رنگ لباس 
نرم کنندگی بالا 
مناسب برای : استفاده خانگی _ هتل ها_ بیمارستان ها_خشکشویی ها و...`
,id:1
},

{name:"مایع دستشویی پورکس",
 img:'5.png'
 ,tozih:`استفاده خانگی _ هتل ها_ بیمارستان ها و...`,
tozihmore:`مایع دستشویی پورکس : 
غلظت : بالا 
حجم :10 لیتر
رنگ : آبی_بنفش_لیمویی_سبز_صورتی
رایحه : Nice_ گل های بهاری_ لیمو_ توت فرنگی _موز_سیب
بسیار مقرون بصرفه
بدون آسیب به بافت پوست
نرم کننده پوست 
مناسب برای : استفاده خانگی _ هتل ها_ بیمارستان ها و...`
,id:2
},

{name:"مایع ظرفشویی پورکس",
 img:'7.png',tozih:`مناسب برای : استفاده خانگی _ هتل ها و...
 `,
tozihmore:`مایع ظرفشویی  پورکس : 
غلظت : بالا 
حجم :10 لیتر
رنگ : آبی_بنفش_لیمویی_سبز_صورتی
رایحه : Nice_ گل های بهاری_ لیمو_ توت فرنگی _موز_سیب
بسیار مقرون بصرفه
چربی زدایی بالا
بدون آسیب به بافت پوست
نرم کننده پوست 
مناسب برای : استفاده خانگی _ هتل ها و...`
,id:3
},
{name:"پودر لباسشویی اکتیوکس",

 img:'10.png',tozih:`مناسب برای : استفاده خانگی _ هتل ها _بیمارستان ها_ خشکشویی ها و...`,
tozihmore:`پودر لباسشویی اکتیوکس:
وزن :10Kg
رنگ : سفید و آبی 
بسیار مقرون بصرفه
تثبیت رنگ لباس
مناسب برای : استفاده خانگی _ هتل ها _بیمارستان ها_ خشکشویی ها و...
07:20
`
,id:4
},

{name:"مایع لباسشویی پرسیل",
 img:'14.png',tozih:`مناسب برای : استفاده خانگی _ هتل ها _بیمارستان ها_ خشکشویی ها و...`,
tozihmore:`مایع لباسشویی پرسیل:
وزن :10Ltr
رنگ : آبی_بنفش_لیمویی_ سبز_صورتی
رایحه:Nice_گل های بهاری_لیمو_توت فرنگی_موز_ سیب 
بسیار مقرون بصرفه
تثبیت رنگ لباس
نرم کننده لباس
مناسب برای : استفاده خانگی _ هتل ها _بیمارستان ها_ خشکشویی ها و...`
,id:5
}

]
let card = document.querySelector(".row")

product.forEach(index =>{
card.innerHTML +=`
<div class='product--green'>
<div class='product_inner'>
<img src=${index.img} alt="">
  <p id="p">${index.name} </p>
  <button  onclick="buy(${index.id})">اطلاعات بیشتر</button>
</div>
<div class='product_overlay'>
  <h2>Added to basket</h2>
  <i class='fa fa-check'></i>
</div>
</div>
`


})

function buy(id){
  lis.innerHTML=""
  location.href = "buy.html?id="+id
}
let input = document.querySelector("input")
let lis = document.getElementById("lis")
input.addEventListener("keyup" , (e)=>{
  lis.innerHTML=""
  let filter = product.filter(filter=>{
    if(filter.name.includes( input.value) ){
      if(input.value == ""){
        lis.innerHTML=""

      }
      else{
        lis.innerHTML += `<li onclick="buy(${filter.id})" >${filter.name}</li>`

      }

    }
    
    else{
      return 0
    }
  })




})
let search = document.querySelector(".search")
 document.body.addEventListener("click" , ()=>{
  lis.innerHTML= ""
  input.value=""
})