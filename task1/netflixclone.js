function clickradio(id1,id2){
    var element1 = document.getElementById(id1);
    var $element2 = $("#" + id2);
    console.log(element1);
    console.log($element2);
    if (element1.style.display ==='none') {
        $element2.show();
        console.log('ifexec');
    }else{
        $element2.hide();
        console.log('elseexec');
    }
}
