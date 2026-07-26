function changeScene(current, next, delay){

    setTimeout(()=>{


        document.querySelector(current)
        .classList.add("hidden");


        setTimeout(()=>{


            document.querySelector(next)
            .classList.remove("hidden");


        },1500);


    },delay);

}


// start

confetti({
    particleCount:250,
    spread:120
});


// movie sequence

changeScene("#scene1","#scene2",4000);

changeScene("#scene2","#scene2-cookie",8000);

changeScene("#scene2-cookie","#scene3",12000);

changeScene("#scene3","#scene4",16000);

changeScene("#scene4","#scene5",21000);


// final celebration

setTimeout(()=>{

    confetti({
        particleCount:300,
        spread:180
    });

},23000);
