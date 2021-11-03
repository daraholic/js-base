// alert('hello js')
function helloFun(){
    let spanObj = window.document.getElementById("spanID");
    spanObj.innerHTML = "Hello";
    spanObj.style.color = "black";

    let spanEndObj = window.document.getElementById("spanEndID");
    spanEndObj.style.color = "red";
    // window.document.body.innerHTML="hello world";
    // console.log('helloFun test');
    // console.log('helloFun test');
    // console.log('helloFun test');
}



function toggleMenu(){
    console.log('toggleMenu');
    let menuObject = document.getElementById('menu');
    menuObject.classList.toggle("hide");
    // 上面這行是配合<style> .hide 來做控制 比較簡潔 
    // if(menuObject.style.display=="none"){
    //     menuObject.style.display="block";
    // }else{
    //     menuObject.style.display="none";
    // }
}
