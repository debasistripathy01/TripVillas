
import {navbar, svg, getSign_upDiv,getLogin_Div, log_cancel ,sign_up_cancel ,log_inst ,signup_inst ,login_email ,login_num,sign,xyz} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

svg()   /////////////////// for sub_div od login & sign up
getSign_upDiv()  /////////////  for div of Sign-Up 
getLogin_Div()  //////////////  for div of Login
log_cancel()    //////////////  for cancel on login div

sign_up_cancel()   ///////////////  for cancel on signup div

log_inst()        //////////////// login instead from signup div

signup_inst()     /////////////////// for signup from login

login_email()    ////////////////////  login with email from login email

login_num()      /////////////////// login with number from login number  

sign()          ////////////////////  getting sign-up data
xyz()

let sliderData = [
    {place:"Goa" , type:"Vacation Rentals", image:"https://media.istockphoto.com/photos/india-goa-palolem-beach-picture-id535168027?k=20&m=535168027&s=612x612&w=0&h=L4IxMIBa6jpWytr_L9eKFwCz5Iqehlgvpmnxz1JMuC0="},
    {place: "Galle",type:"Vacation Rentals", image:"https://media.istockphoto.com/photos/sri-lanka-galle-fort-meeran-jumma-masjid-picture-id820812048?k=20&m=820812048&s=612x612&w=0&h=nVk88HQYT0X7S89L1jqpu7t7NWwdMoYbXiPyqlI4v1o="},
    {place:"Phuket",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/phiphi-island-krabi-province-thailand-picture-id526355851?k=20&m=526355851&s=612x612&w=0&h=zJeT7EvresWeYlI8vYKQkwETVDjFP3rlI3Qd1Slem1I="},
    {place:"Kandy",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/sri-dalada-maligawa-or-the-temple-of-the-sacred-tooth-relic-kandy-sri-picture-id1155021690?k=20&m=1155021690&s=612x612&w=0&h=gPjcx4wkiQ0_X1DW2Z_MPLbz4YEO6eWbmMQQaKRe-eA="},
    {place:"Koh Samui",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/angthong-national-marine-park-koh-samui-suratthani-thailand-picture-id940824162?k=20&m=940824162&s=612x612&w=0&h=Ujo0jInic2e6HXO1TImqzUvwSX-1yq0DfLKwQ7vuBUY="},
    {place:"Lonavala",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/pune-mumbai-expressway-picture-id1257999507?k=20&m=1257999507&s=612x612&w=0&h=JfLCxoX7Yx1qwIs7mdagfqctf-LI94LVBbfNw3a9zwE="},
    {place:"Kerala",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-town-picture-id1246366598?k=20&m=1246366598&s=612x612&w=0&h=XvOvw2Sg4fj-JLQwS18yMofUP9eMeWkQH1V6RcXqnKw="},
    {place:"Pattaya",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/pattaya-picture-id689879464?k=20&m=689879464&s=612x612&w=0&h=uJke_wgpEfPTITtueTVvn14W6m8qZYP8iFfYbHO3CuQ="},
    {place:"Himachal Pradesh",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/mountain-landscape-with-green-grass-meadows-scenic-camping-himalayas-picture-id1284679139?k=20&m=1284679139&s=612x612&w=0&h=NK7gt1o91oOyaSFR8G_A48B38mHz9_OaqCwrdDRMwx8="},
    {place:"Alibag",type:"Vacation Rentals",image:"https://media.istockphoto.com/photos/beautiful-sand-pattern-created-by-receding-sea-waves-at-virgin-beach-picture-id1295509800?k=20&m=1295509800&s=612x612&w=0&h=YROMcbHlXwnz-PPfSSjVdHayuqzrpiAaXYDCFItZZqA="}
]


let data=0

// for(let i=0;i<5;i++)
// {
//     document.getElementById(`img${i}`).src =sliderData[i].image
//     document.getElementById(`place${i}`).innerText=sliderData[i].place
  
// }



let bottomslider = [
    {image:"https://images.unsplash.com/photo-1560185797-06657da66ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGh1a2V0JTIwcG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",title:"Phuket's Best Pool Ideas"},
    {title:"Coorg homestays", image:"https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vcmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
    {title:"Family Trip in Lonavala", image:"https://images.unsplash.com/photo-1585626687814-213dffcdb7bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxvbmF2YWxhJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
    {title:"Bali Family Vibes",image:"https://images.unsplash.com/photo-1553902000-e036b7d05af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    {title:"Sri Lanka - Rural solitude and luxury combined",image:"https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHNyaSUyMGxhbmthfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
]

// for(let i=0;i<5;i++)
// {
//     document.getElementById(`simg${i}`).src =bottomslider[i].image
//     document.getElementById(`bottomp${i}`).innerText=bottomslider[i].title
  
// }

let asia = [
    {country:"India",destinations:"3262 holiday homes"},
    {country:"Thailand",destinations:"1284 holiday homes"},
    {country:"Sri Lanka",destinations:"646 holiday homes"},
    {country:"Indonesia",destinations:"622 holiday homes"},
    {country:"Philippines",destinations:"378 holiday homes"},
    {country:"United Arab Emirates",destinations:"146 holiday homes"},
    {country:"Georgia",destinations:"102 holiday homes"},
    {country:"Turkey",destinations:"70 holiday homes"},
    {country:"Israel",destinations:"53 holiday homes"},
    {country:"Malaysia",destinations:"49 holidat homes"},
    {country:"Japan",destinations:"46 holiday homes"},
    {country:"Viet Nam",destinations:"37 holiday homes"},
    {country:"Cambodia",destinations:"26 holiday homes"},
    {country:"Nepal",destinations:"22 holiday homes"},
    {country:"Maldives",destinations:"19 holiday homes"},
    {country:"Taiwan, Province Of China",destinations:"16 holiday homes"},
    {country:"Hong Kong Special Administrative Regiona Of China",destinations:"12 holiday homes"},
    {country:"Republic Of Korea",destinations:"12 holiday homes"},
    {country:"Oman",destinations:"7 holiday homes"},
    {country:"Bangladesh",destinations:"5 holiday homes"},
]
let europe = [
    {country:"Croatia",destinations:"15594 holiday homes"},
    {country:"Denmark",destinations:"14385 holiday homes"},
    {country:"Italy",destinations:"9268 holiday homes"},
    {country:"Spain",destinations:"4737 holiday homes"},
    {country:"France",destinations:"3791 holiday homes"},
    {country:"Switzerland",destinations:"2770 holiday homes"},
    {country:"Finland",destinations:"2086 holiday homes"},
    {country:"Germany",destinations:"1910 holiday homes"},
    {country:"Hungary",destinations:"1260 holiday homes"},
    {country:"Austria",destinations:"1193 holiday homes"},
    {country:"Greece",destinations:"941 holiday homes"},
    {country:"United Kingdom Of Great Britain And Northern Ireland",destinations:"899 holiday homes"},
    {country:"Sweden",destinations:"677 holiday homes"},
    {country:"Cyprus",destinations:"593 holiday homes"},
    {country:"Czech Republic",destinations:"585 holiday homes"},
    {country:"Portugal",destinations:"566 holiday homes"},
    {country:"Norway",destinations:"513 holiday homes"},
    {country:"Netherlands",destinations:"491 holiday homes"},
    {country:"Poland",destinations:"308 holiday homes"},
    {country:"Belgium",destinations:"270 holiday homes"},
    {country:"Slovakia",destinations:"141 holiday homes"},
    {country:"Slovenia",destinations:"119 holiday homes"},
    {country:"Ireland",destinations:"68 holiday homes"},
    {country:"Malta",destinations:"64 holiday homes"},
    {country:"Bulgaria",destinations:"63 holiday homes"},
    {country:"Ukraine",destinations:"47 holiday homes"},
    {country:"Montenegro",destinations:"39 holiday homes"},
    {country:"Albania",destinations:"34 holiday homes"},
    {country:"Bosnia and herzegovina",destinations:"25 holiday homes"},
    {country:"Romania",destinations:"17 holiday homes"},
    {country:"Luxembourg",destinations:"12 holiday homes"},
    {country:"Serbia",destinations:"7 holiday homes"},
    {country:"Iceland",destinations:"6 holiday homes"},
    {country:"Lithuania",destinations:"6 holiday homes"},
    {country:"The Former yugoslav Republic Of Macedonia",destinations:"6 holiday homes"},
    {country:"Andorra",destinations:"5 holiday homes"},

]
let northAmerica = [
    {country:"United States Of America",destinations:"3017 holiday homes"},
    {country:"Mexico",destinations:"569 holiday homes"},
    {country:"Dominician Republic",destinations:"365 holiday homes"},
    {country:"Cuba",destinations:"257 holiday homes"},
    {country:"Cananda",destinations:"164 holiday homes"},
    {country:"Costa Rica",destinations:"147 holiday homes"},
    {country:"Jamaica",destinations:"115 holiday homes"},
    {country:"Aruba",destinations:"37 holiday homes"},
    {country:"Puerto Rico",destinations:"37 holiday homes"},
    {country:"Saint Martin",destinations:"34 holiday homes"},
    {country:"Sint Maarteen",destinations:"10 holiday homes"},
    {country:"Belize",destinations:"9 holiday homes"},
    {country:"Panama",destinations:"9 holiday homes"},
    {country:"Curancao",destinations:"7 holiday homes"},
    
]
let southAmerica = [
    {country:"Colombia",destinations:"198 holiday homes"},
    {country:"Chile",destinations:"44 holiday homes"},
    {country:"Brazil",destinations:"39 holiday homes"},
    {country:"Argentina",destinations:"28 holiday homes"},
    {country:"Peru",destinations:"15 holiday homes"},
    {country:"Ecuador",destinations:"7 holiday homes"},
]
let africa = [
    {country:"Kenya",destinations:"613 holiday homes"},
    {country:"South Africa",destinations:"277 holiday homes"},
    {country:"Morocco",destinations:"197 holiday homes"},
    {country:"Uganda",destinations:"194 holiday homes"},
    {country:"Mauritius",destinations:"71 holiday homes"},
    {country:"Tanzania",destinations:"70 holiday homes"},
    {country:"Rwanda",destinations:"21 holiday homes"},
    {country:"Burundi",destinations:"19 holiday homes"},
    {country:"Madagascar",destinations:"14 holiday homes"},
    {country:"Egypt",destinations:"12 holiday homes"},
    {country:"Tunisia",destinations:"7 holiday homes"},
    {country:"Seychelles",destinations:"5 holiday homes"},
]
let Oceania = [
    {country:"Australia",destinations:"397 holiday homes"},
    {country:"New Zealand",destinations:"48 holiday homes"},
    {country:"French Polynesia",destinations:"18 holiday homes"},

]

function append(data){
        let container = document.getElementById("container")
        container.innerHTML=null;
        data.forEach(({country,destinations})=>{
         let coutries = document.createElement("h4")
         coutries.innerText=country;
         let destiny = document.createElement("p");
         destiny.innerText=destinations;

         let box = document.createElement("div")
         box.append(coutries,destiny)
         container.append(box)
        })
    }
append(asia)
function europian(){
    append(europe)
    
}
function asias(){
    append(asia)
    
}
function namerica(){
    append(northAmerica)
    
}
function samerica(){
    append(southAmerica)
    
}
function africas(){
    append(africa)
    
}
function onceanias(){
    append(Oceania)
}
document.getElementById("europe").addEventListener("click",europian)
document.getElementById("asia").addEventListener("click",asias)
document.getElementById("northamerica").addEventListener("click",namerica)
document.getElementById("southamerica").addEventListener("click",samerica)
document.getElementById("africa").addEventListener("click",africas)
document.getElementById("oceania").addEventListener("click",onceanias)

document.getElementById("midc1").addEventListener("click",()=>{
    window.location.href ="./hotellanding.html"
})
document.getElementById("midc2").addEventListener("click",()=>{
    window.location.href ="./hotellanding.html"
})
document.getElementById("midc3").addEventListener("click",()=>{
    window.location.href ="./hotellanding.html"
})
document.getElementById("midc4").addEventListener("click",()=>{
    window.location.href ="./hotellanding.html"
})
document.getElementById("midc5").addEventListener("click",()=>{
    window.location.href ="./hotellanding.html"
})
for(let i =1;i<=9;i++)
{
    document.getElementById(`centerdiv${i}`).addEventListener("click",()=>{
        window.location.href ="./hotellanding.html"
    }) 
}
for(let i =1;i<=5;i++)
{
    document.getElementById(`bottomc${i}`).addEventListener("click",()=>{
        window.location.href ="./hotellanding.html"
    }) 
}
for(let i =1;i<=2;i++)
{
    document.getElementById(`btn${i}`).addEventListener("click",()=>{
        window.location.href ="./investment.html"
    }) 
}

