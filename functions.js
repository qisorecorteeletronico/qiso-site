document.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop > 400){
        document.getElementById('Menu').style.backgroundColor = 'rgba(10, 35, 55, .5)'
    }else{
        document.getElementById('Menu').style.backgroundColor = '#0A2337'
    }
})

