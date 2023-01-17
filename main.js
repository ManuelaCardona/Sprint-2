let card_Name = document.getElementById('cardName');
let form_Name = document.getElementById('name');
let button = document.getElementById('btn');
let card_Num = document.getElementById('cardNum');
let form_Num = document.getElementById('numFront');
let date_month = document.getElementById('month');
let card_month = document.getElementById('cardMonth');
let date_year = document.getElementById('year');
let card_year = document.getElementById('cardYear');
let cvc_form = document.getElementById('cvc');
let card_cvc = document.getElementById('cardNum2');
let section = document.getElementById('thanks');
let formulario = document.getElementById('formulario');
let error_name = document.getElementById('error_cardName');
let error_num = document.getElementById('error_cardNumber');
let error_month = document.getElementById('error_cardMonth');
let error_year = document.getElementById('error_cardYear');
let error_cvc = document.getElementById('error_cardCvc');

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

function error1(input_error, error, msg_error){
    error.innerText = msg_error;
    input_error.style.borderColor = '#FF0000';
};

function error0(input_error, error){
    error.innerText = '';
    input_error.style.borderColor = 'hsl(270, 3%, 87%)';

};

function empty(input_error, error){
    if (input_error.value.length> 0){
        error0(input_error, error, "");
        return true;
    } else {
        error1(input_error, error, "Can't be blank");
        return false;
    }

};

button.addEventListener('click', event=>{
    event.preventDefault();

    if(empty(form_Name, error_name)){
       nameValidation = true; 
    }else{
        nameValidation = false;
    }


    if ( empty(form_Num, error_num) == true){
        if (form_Num.value.length == 19){
            error0(form_Num, error_num, '');
            numberValidation = true;
        }else{
            error1(form_Num, error_num, 'Wrong number');
            numberValidation = false;
        }
    }


if(empty(date_month, error_month)){
    if (parseInt(date_month.value)>0 && date_month.value<=12){
       error0(date_month, error_month, '');
       monthValidation = true;
    }else{
       error1(date_month, error_month, 'Wrong Month');
       monthValidation = false;
    }
}
    

if(empty(date_year, error_year)){
    if(parseInt(date_year.value)>23 && parseInt(date_year.value)<= 28){
        error0(date_year, error_year, '');
        yearValidation = true;
    }else{
        error1(date_year, error_year, 'Wrong Year');
        yearValidation = false;
    }
}

if(empty(cvc_form, error_cvc)){
    if(cvc_form.value.length == 3){
        error0(cvc_form, error_cvc, '');
        cvcValidation = true;
    }else{
        error1(cvc_form, error_cvc, 'Wrong CVC');
        cvcValidation = false;
    }
}

form_Name.addEventListener('input', ()=>{
    if (form_Name.value == '') {
        card_Name.innerText = 'Jane Apleeseed'
    }else{
        card_Name.innerText = form_Name.value;
    }
});

form_Num.addEventListener('input', event=>{

    let form_value = event.target.value;

    if (form_Num.value == '') {
        card_Num.innerText = '0000 0000 0000 0000'
    }else{
        card_Num.innerText = form_Num.value;
    }

    let registro = /[A-z]/g; //para buscar si hay letras en el registro, se utiliza la 'A' mayuscula y la 'z' minuscula para que busque tanto letras mayusculas como minusculas. La g es para que busque de forma global.
    if(registro.test(form_Num.value)){
        error1(form_Num, error_num, 'Wrong format, numbers only');
        //Sin la funcion quedaria: error_num.innerText = 'Wrong format, numbers only'; 
        //para que aparezca el error en caso de encontrar una letra
    }else{
        form_Num.value = form_value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim(); //el /\s/ es para que encuentre todos los espacios (si lo dejamos sin la g solo encontraria un espacio). //el string vacio es para que en vez de un espacio no aparezca nada. // El (/([0-9]{4}) es para que busque en los numeros y cada 4 numeros... //'$1 ' es para que agregue un espacio //El metodo trim() es para que me quite el espacio al final.
        error0(form_Num, error_num);
        //Sin la función es: error_num.innerText = ''; //Para quitar el error.
    }

});

date_month.addEventListener('input', ()=>{
    card_month.innerText = date_month.value;
    let registro = /[A-z]/g;
    if(registro.test(date_month.value)){
        error1(date_month, error_month, 'Wrong format, numbers only');
    }else{
        error0(date_month, error_month);
    }
    
});

date_year.addEventListener('input', event=>{
    card_year.innerText = date_year.value;
    let registro = /[A-z]/g;
    if(registro.test(date_year.value)){
        error1(date_year, error_year, 'Wrong format, numbers only');
    }else{
        error0(date_year, error_year);
    }
});

cvc_form .addEventListener('input', event=>{

    card_cvc.innerText = cvc_form.value;

    let registro = /[A-z]/g;
    if(registro.test(cvc_form.value)){
        error1(cvc_form, error_cvc, 'Wrong format, numbers only');
    }else{
        error0(cvc_form, error_cvc);
    }

});

});


button.addEventListener('click', event=>{
    if(nameValidation == true && numberValidation == true && monthValidation == true && yearValidation == true && cvcValidation == true){
        formulario.style.display = 'none';
        thanks.style.visibility = 'visible';
    } 

});