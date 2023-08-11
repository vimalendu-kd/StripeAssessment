let monthPlan = document.getElementById("monthPlan")
let yearPlan = document.getElementById("yearPlan")

let billingCycle="monthPlan"
let planName="mobilePlan"

monthPlan.addEventListener("click", () => {
    monthPlan.style.backgroundColor = "white";
    monthPlan.style.color = "#1e4d90";
    yearPlan.style.backgroundColor = "#1e4d90";
    yearPlan.style.color = "white";

    price1.innerHTML="₹100";
    price2.innerHTML="₹200";
    price3.innerHTML="₹500";  
    price4.innerHTML="₹700";

    billingCycle="monthPlan"
})

yearPlan.addEventListener("click", () => {
    monthPlan.style.backgroundColor = "#1e4d90";
    monthPlan.style.color = "white";
    yearPlan.style.backgroundColor = "white";
    yearPlan.style.color = "#1e4d90";
    
    price1.innerHTML="₹1000";
    price2.innerHTML="₹2000";
    price3.innerHTML="₹5000";
    price4.innerHTML="₹7000";

    billingCycle="yearPlan"
})

let mobilePlan=document.getElementById("mobilePlan");
let basicPlan=document.getElementById("basicPlan");
let standardPlan=document.getElementById("standardPlan");
let premiumPlan=document.getElementById("premiumPlan");

let class1=Array.from(document.getElementsByClassName("class1"))
let class2=Array.from(document.getElementsByClassName("class2"))
let class3=Array.from(document.getElementsByClassName("class3"))
let class4=Array.from(document.getElementsByClassName("class4"))

mobilePlan.addEventListener("click", ()=>{
    mobilePlan.style.backgroundColor="#1e4d90";
    basicPlan.style.backgroundColor="#7994bd";
    standardPlan.style.backgroundColor="#7994bd";
    premiumPlan.style.backgroundColor="#7994bd";

    class1.forEach(element => {
        element.style.color="#265394";
        element.style.fontWeight="bold";
    });
    class2.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })
    class3.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })
    class4.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })

    planName="mobilePlan"
})
basicPlan.addEventListener("click", ()=>{
    mobilePlan.style.backgroundColor="#7994bd";
    basicPlan.style.backgroundColor="#1e4d90";
    standardPlan.style.backgroundColor="#7994bd";
    premiumPlan.style.backgroundColor="#7994bd";
    
    class1.forEach(element => {
        element.style.color="black";
        element.style.fontWeight="normal";
    });
    class2.forEach(element=>{
        element.style.color="#265394";
        element.style.fontWeight="bold";
    })
    class3.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })
    class4.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })

    planName="basicPlan"
})
standardPlan.addEventListener("click", ()=>{
    mobilePlan.style.backgroundColor="#7994bd";
    basicPlan.style.backgroundColor="#7994bd";
    standardPlan.style.backgroundColor="#1e4d90";
    premiumPlan.style.backgroundColor="#7994bd";
    
    class1.forEach(element => {
        element.style.color="black";
        element.style.fontWeight="normal";
    });
    class2.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })
    class3.forEach(element=>{
        element.style.color="#265394";
        element.style.fontWeight="bold";
    })
    class4.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })

    planName="standardPlan"
})
premiumPlan.addEventListener("click", ()=>{
    mobilePlan.style.backgroundColor="#7994bd";
    basicPlan.style.backgroundColor="#7994bd";
    standardPlan.style.backgroundColor="#7994bd";
    premiumPlan.style.backgroundColor="#1e4d90";

    class1.forEach(element => {
        element.style.color="black";
        element.style.fontWeight="normal";
    });
    class2.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })
    class3.forEach(element=>{
        element.style.color="black";
        element.style.fontWeight="normal";
    })
    class4.forEach(element=>{
        element.style.color="#265394";
        element.style.fontWeight="bold";
    })

    planName="premiumPlan"
})

let clickNext=document.getElementById("next")

clickNext.addEventListener("click", ()=>{
    
})