let href = location.search
let url = new URLSearchParams(href)
let end = url.get("id")

let imgsliderporex = ["1.png" , '1.png' , '3.png']
let imgsliderporexdasti = ["4.png" ,"5.png" , "6.png"]
let imgsliderporexzarf = ["7.png" , "8.png" , "9.png"]
let podr = ['10.png' , "11.png","10.png"]
let persil = ["12.png" , "13.png" , "14.png"]
let indexslider = 0;

let product = [
    {name:"مایع لباسشویی پورکس",
     img:'1.png',tozih:`بسیار مقرون بصرفه
    تثبیت رنگ لباس 
    نرم کنندگی بالا 
    مناسب برای : استفاده خانگی _ هتل ها_ بیمارستان ها_خشکشویی ها و...`,
    tozihmore:`مایع لباسشویی پورکس<br>
    غلظت : بالا  <br>
    حجم :10 لیتر<br>
    رنگ : آبی_بنفش_لیمویی_سبز_صورتی<br>
    رایحه : Nice_ گل های بهاری_ لیمو_ توت فرنگی _موز_سیب <br>
    بسیار مقرون بصرفه <br>
    تثبیت رنگ لباس <br>
    نرم کنندگی بالا <br>
    مناسب برای : استفاده خانگی _ هتل ها_ بیمارستان ها_خشکشویی ها و...`
    ,id:1
    },
    
    {name:"مایع دستشویی پورکس",
     img:'5.png'
     ,tozih:`استفاده خانگی _ هتل ها_ بیمارستان ها و...`,
    tozihmore:`مایع دستشویی پورکس <br> 
    غلظت : بالا <br>
    حجم :10 لیتر<br>
    رنگ : آبی_بنفش_لیمویی_سبز_صورتی<br>
    رایحه : Nice_ گل های بهاری_ لیمو_ توت فرنگی _موز_سیب<br>
    بسیار مقرون بصرفه<br>
    بدون آسیب به بافت پوست<br>
    نرم کننده پوست <br>
    مناسب برای : استفاده خانگی _ هتل ها_ بیمارستان ها و...`
    ,id:2
    },
    
    {name:"مایع ظرفشویی پورکس",
     img:'7.png',tozih:`مناسب برای : استفاده خانگی _ هتل ها و...
     `,
    tozihmore:`مایع ظرفشویی  پورکس <br> 
    غلظت : بالا <br>
    حجم :10 لیتر<br>
    رنگ : آبی_بنفش_لیمویی_سبز_صورتی<br>
    رایحه : Nice_ گل های بهاری_ لیمو_ توت فرنگی _موز_سیب<br>
    بسیار مقرون بصرفه<br>
    چربی زدایی بالا<br>
    بدون آسیب به بافت پوست<br>
    نرم کننده پوست <br>
    مناسب برای : استفاده خانگی _ هتل ها و...`
    ,id:3
    },
    {name:"پودر لباسشویی اکتیوکس",
    
     img:'10.png',tozih:`مناسب برای : استفاده خانگی _ هتل ها _بیمارستان ها_ خشکشویی ها و...`,
    tozihmore:`پودر لباسشویی اکتیوکس <br>
    وزن :10Kg<br>
    رنگ : سفید و آبی <br>
    بسیار مقرون بصرفه<br>
    تثبیت رنگ لباس<br>
    مناسب برای : استفاده خانگی _ هتل ها _بیمارستان ها_ خشکشویی ها و...
    07:20
    `
    ,id:4
    },
    
    {name:"مایع لباسشویی پرسیل",
     img:'14.png',tozih:`مناسب برای : استفاده خانگی _ هتل ها _بیمارستان ها_ خشکشویی ها و...`,
    tozihmore:`مایع لباسشویی پرسیل<br>
    وزن :10Ltr<br>
    رنگ : آبی_بنفش_لیمویی_ سبز_صورتی<br>
    رایحه:Nice_گل های بهاری_لیمو_توت فرنگی_موز_ سیب <br>
    بسیار مقرون بصرفه<br>
    تثبیت رنگ لباس<br>
    نرم کننده لباس<br>
    مناسب برای : استفاده خانگی _ هتل ها _بیمارستان ها_ خشکشویی ها و...`
    ,id:5
    }
    
    ]
let card = document.querySelector(".row")

let index = product.find(product =>{
    if(end == product.id){
        return product
    }
})


card.innerHTML =`
<div class='product--green'>
<div class='product_inner'>
<img class="img" src=${index.img} alt="">
<p id="p">${index.name} </p>
<select name="" id="">
<option value=""> استعلام قیمت</option>
<option id="t10"  value="10">  20تا 50 گالن  </option>
<option id="t20"  value="20"> 51تا 100 گالن </option>s
<option id="t30"  value="30">101 تا 250 گالن</option>
<option  id="t40" value="40">251 تا 1000 گالن </option>


</select>
<p class="price"  id="p"></p>
<p id="p">${index.tozihmore}</p>
<button  onclick="buy(${index.id})">خرید</button>
</div>
<div class='product_overlay'>
<h2>Added to basket</h2>
<i class='fa fa-check'></i>
</div>
</div>
`
let price = document.querySelector('.price')
let option = document.querySelectorAll('option')
let all = document.querySelector("select")
let img = document.querySelector(".img")


all.addEventListener("change" ,()=>{
    if(end == 1 || end == 2){
    if(all.value == 10){
            price.innerHTML = "100,000 تومان"
        }
        if(all.value == 20){
              price.innerHTML = "95,000 تومن "
          }
    if(all.value == 30){
    price.innerHTML = "90,000 تومان "
              
          }
    if(all.value == 40){
price.innerHTML = "88,000 تومان"
          }
    if(all.value == ""){
     price.innerHTML =""
    }
}

if(end == '3' || end == "5"){
            if(all.value == 10){
        price.innerHTML = "110,0000  تومان"
            }
            if(all.value == 20){
         price.innerHTML = "105,000 تومن "
            }
            if(all.value == 30){
        price.innerHTML = "100,000  تومان "
                
              }
        if(all.value == 40){
        price.innerHTML = "98,000  تومان"
        }
        if(all.value == ""){
            price.innerHTML =""
        }
    }
    if(end == "4"){
        
if(all.value == 10){
price.innerHTML = "  105,000 تومان "
                        }
        if(all.value == 20){
    price.innerHTML = "100,000 تومان "
                          }
    if(all.value == 30){
 price.innerHTML =  "95,000 تومان"
                              
                          }
    if(all.value == 40){
price.innerHTML = " 90,000 تومان"
                          }
    if(all.value == ""){
        price.innerHTML =""
                          }
         
         
         
         
         
                        }
          

        
        
    })
    
    if(end == '4'){
        option[1].innerHTML="20تا 50 گونی"
        option[2].innerHTML= "51تا 100 گونی"
        option[3].innerHTML= '101 تا 250 گونی'
        option[4].innerHTML= '101 تا 250 گونی'
    }
    
    function buy(){
        location.href = 'tel:+989219540027'
      
}
let imgset = document.querySelector('img')
setInterval(timer =>{
indexslider++
if(indexslider> imgsliderporex.length-1){
    indexslider=0
}
if(end == '1' ){
    imgset.setAttribute("src", imgsliderporex[indexslider])
    
    
}
if(end == "2"){
    imgset.setAttribute("src", imgsliderporexdasti[indexslider])

}
if(end== "3"){
    imgset.setAttribute("src", imgsliderporexzarf[indexslider])

}
if(end == "4"){
    imgset.setAttribute("src", podr[indexslider])

}
if(end == "5"){
imgset.setAttribute("src", persil[indexslider])

}
},2000)