/*
moveDodgerLeft()
    moves the DODGER to the left:
     ReferenceError: moveDodgerLeft is not defined
     var left = dodger.style.left
    left = parseInt(left)

    moveDodgerLeft()

    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    expect(newPosition).to.be.below(left)
*/
const dodger = document.getElementById('dodger'); //grab element by id 'dodger'

//build function to move dodger position 

function moveDodgerLeft(){
//replace() method returns a new string with some or all matches of a pattern replaced by a replacement
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10) //parseInt() parse string argument and returns integer
    if(left > 0){
        dodger.style.left = `${left - 1}px`
    }
}
//add event listener for when arrow down is pressed 
document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft'){ //add e (event)
        moveDodgerLeft();//call function stated about
    }
})

/*
moveDodgerRight()
       moves the DODGER to the right:
     ReferenceError: moveDodgerRight is not defined
implement cod eto prevent dodger from escaping off the right-hand side
     dodger is 40px wide
*/
//define moveDodgerRight()
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace('px', '');
 //parseInt, number less than 40 to ensure dodger doesn't move beyond box
    const left = parseInt(leftNumbers, 10)   
    //game div max height = 400 px, 
    if(left < 360){
    //give precedence to left side-changing style.right will be ignored  
        dodger.style.left = `${left + 1}px`
    }
}

//add event listener for moveDodgerRight()

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight'){
        moveDodgerRight()
    }
})
