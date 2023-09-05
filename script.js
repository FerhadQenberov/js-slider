var models = [
  {
    name: 'BMW',
    img: 'img/bmw.jpg',
    link: 'https://www.turbo.az',
  },
  {
    name: 'HONDA',
    img: 'img/honda.jpg',
    link: 'https://www.turbo.az',
  },
  {
    name: 'MERCEDES',
    img: 'img/mercedes.jpg',
    link: 'https://www.turbo.az',
  },
  {
    name: 'NISSAN',
    img: 'img/nissan.jpg',
    link: 'https://www.turbo.az',
  },
]
var settings={
    duration:'1000',
    random:false

}

let index = 3
let count = models.length
let interval;


init(settings)


document .querySelector('.fa-arrow-left ').addEventListener('click', function () { 
      index--
   showSlide(index)
  

})
 

document.querySelector('.fa-arrow-right ').addEventListener('click', function () { 
    index++,
    showSlide(index)

})
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter", function(){
        clearInterval(interval)
    })
})
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave", function(){
       init(settings)
    })
})



function showSlide(i) {
  index = i
  if (i < 0) {
    index = count - 1
  }
  if (i >= count) {
    index=0
  }

  document.querySelector('.card-img-top').setAttribute('src', models[index].img)
  document.querySelector('.card-title').textContent = models[index].name
  document.querySelector('.card-text').innerHTML = models[index].name
  document.querySelector('.card-link').setAttribute('href', models[index].link)
}


function init(settings){
    let prev;
     interval=setInterval(() => {

        if (settings.random){
            do {
                index=Math.floor(Math.random()* count )
            } while (index==prev)
            prev=index;
            
            
        }else{

            if(count==index+1){
                index=-1
              
             
            }
            showSlide(index)
            index++ 

        }
        showSlide(index)
        
    }, ((settings.duration)));
}


