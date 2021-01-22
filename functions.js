document.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop > 300){
        document.getElementById('Menu').style.backgroundColor = 'rgba(10, 35, 55, .5)'
    }else{
        document.getElementById('Menu').style.backgroundColor = '#0A2337'
    }
})
