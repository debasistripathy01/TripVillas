window.addEventListener("load" , () =>{
    getd();
    DIVgetd();
   
})



let getd =async() =>{
 

    let res =await fetch("https://hidden-brook-50253.herokuapp.com/api/header");

    let data = await res.json();

    // console.log(data)

    append(data)
   
}

let append = (data) => {
    document.getElementById("con_mein").innerHTML =""

    data.forEach((el) =>{

        let box = document.createElement("div");

        let h1= document.createElement("h1");
        h1.innerText = el.h1;

        let p = document.createElement("p");

        p.setAttribute("id","para_head")

        p.innerText = el.p;

        box.append(h1,p);

        document.getElementById("con_mein").append(box)
    })


}

let DIVgetd = async() =>{

    let res = await fetch("https://hidden-brook-50253.herokuapp.com/api/divCon");

    let data = await res.json();

    console.log(data)

    divappen(data)
}

let divappen = (data) =>{

    document.getElementById("div_mein").innerHTML=""

    data.forEach((el,i) =>{

        let box = document.createElement("div");
        box.setAttribute("id","inner_app_div");

        box.addEventListener("click" , () =>{
           
            addData(el)
        })

        let img = document.createElement("img");
        img.src =el.img;

        let h3 = document.createElement("h3");
        h3.innerText = el.h3;

        let h4= document.createElement("h3");
        h4.innerText = el.h4;

        box.append(img,h3,h4);

        document.getElementById("div_mein").append(box)



    })



}


let addData =(el) =>{
    var arr = [];

    arr.push(el);

    localStorage.setItem("checkout",JSON.stringify(arr))

    window.location.href ="cartPage.html"


}
