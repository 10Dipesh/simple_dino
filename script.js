var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    console.log("jump");
    console.log(character.classList)
    if (character.classList == "animate"){
        return;
    }
    CharacterData.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate")
    },500);
}

// var chaeckDeath= setInterval (function(){
//    var characterTop = parseInt(window.getComputedStyle(character).getPropretyValue("top"));
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropretyValue("left"));
//     if(blockLeft<20 && blockLeft>0 && characterTop>=120 ){
//         block.style.animation="none";
//         block.style.display="none";
//         alert("You lose");
// }
// },10);