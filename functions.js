document.addEventListener("scroll", function(){

    var w = window.innerWidth
    var limit = 0

    if(w < 1023){
        limit = 1200 - 120
    }else{
        limit = 400
    }
    
    if(document.documentElement.scrollTop > limit){
        document.getElementById('Menu').style.backgroundColor = 'rgba(10, 35, 55, .5)'
    }else{
        document.getElementById('Menu').style.backgroundColor = '#0A2337'
    }
})

document.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop > 1200 - 120){
        document.getElementById('MenuFlutuante').style.backgroundColor = 'rgba(0, 0, 0, .2)'
    }else{
        document.getElementById('MenuFlutuante').style.backgroundColor = 'rgba(255, 255, 255, .2)'
    }
})

function showMenu() {

    var currentDisplay = document.getElementById('MenuFlutuante').style.display
 
    if(currentDisplay == 'none'){
        document.getElementById('MenuFlutuante').style.display = 'flex'
    }else {
        document.getElementById('MenuFlutuante').style.display = 'none'
    }

}