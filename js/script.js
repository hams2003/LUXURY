

var allProducts = document.querySelectorAll(".card-shop h4")
    var div1 = document.querySelector("#content")
    var btn1 = document.querySelector("#btnsend")
    var totalPrice = 0

    allProducts.forEach(function (item) {
        item.onclick = function (){
            totalPrice +=  +(item.getAttribute("price"))
            div1.innerHTML += " " + item.textContent + " "

            if (div1.innerHTML != ""){
                btn1.style.display = "block"
                btn1.style.width = "100px"
                btn1.style.height = "45px"
                btn1.style.backgroundColor = "#f3f3e9"
                btn1.style.color = "#884f27"
                btn1.style.fontSize = "15px"
                btn1.style.borderRadius = "5px"
            }
   
        }
    })

    btn1.onclick = function (){
       document.getElementById("show").innerHTML=(totalPrice)
    }
    