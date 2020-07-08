//we storage data in Json format
let models =[

    {
        name:"Audi Q7",
        image: "img/1.jpg",
        link : "https://unsplash.com/s/photos/cars"


    },
    {
        name:"Mercedes C63",
        image: "img/2.jpg",
        link : "https://unsplash.com/s/photos/cars"


    },
    {
        name:"chevrolet camaro",
        image: "img/3.jpg",
        link : "https://unsplash.com/s/photos/cars"


    },
    {
        name:"Ford Mustag",
        image: "img/4.jpg",
        link : "https://unsplash.com/s/photos/cars"


    }



];
let slaytCount = models.length;
let index = 0;
let interval;

let settings = {
    duraction: '4000',
    random: true,
}
init(settings);


//Arrows
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
index--;
showSlide(index);
console.log(index);
});
//arrows
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
    });


document.querySelectorAll('.arrows').forEach(function(item){
    item.addEventListener('mouseenter',function(){//  control of arrows 
        clearInterval(interval); // stop the interval value
    })
});
document.querySelectorAll('.arrows').forEach(function(item){
    item.addEventListener('mouseenter',function(){//  control of arrows 
        init(settings); // star  the interval 
    })
});

//
function init(settings){
    let prev;
interval = setInterval(function(){
if(settings.random){
//random index values
 do{
 index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;


}else{
//increasing index values
if(slaytCount== index+1){
    index= -1;
}
showSlide(index);
index++;
}
showSlide(index);
},settings.duraction);


}






//show slide
function showSlide(i){
// acess to elements
index = i;
if(i<0){
    index = slaytCount-1 // last element of models
}
if(i >= slaytCount){
    index = 0;
}





//we have to contrl of each index value.
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-title').textContent= models[index].name;
document.querySelector('.card-link').setAttribute('href',models[index].link);

}




