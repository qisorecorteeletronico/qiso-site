function showMenu() {
    var currentDisplay = document.getElementById('MenuFlutuante').style.display
    console.log(currentDisplay)
    if(currentDisplay == 'none'){
        document.getElementById('Menu').style.display = 'flex'
    }else {
        document.getElementById('Menu').style.display = 'none'
    }
}