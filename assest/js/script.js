// const modal=document.querySelector('#modal');
// const openModal=document.querySelector('.open-button');
// const closeModal=document.querySelector('.close-button');

// openModal.addEventListener('click',()=>
// {
//     modal.showModal();
// });
// closeModal.addEventListener('click',()=>
// {
//     modal.close();
// })
function topFunction()
{
    document.documentElement.scrollTop=0;
}

// form validation section starts



// form validation section ends

function formvalidation()
{
    var name=document.getElementById("name").value;
    if(name=="")
    {
        document.getElementById("nerr").innerHTML="Enter Name*"
        return false;
    }
    if(name.length<4 ||  name.length>16)
    {
        document.getElementById("nerr").innerHTML="Enter Name b/w 4 to 16";
       return false;
    }
    var pattern=/^[a-zA-Z}]/;
    if(!name.match(pattern))
    {
        document.getElementById("nerr").innerHTML="Enter Name only in Char"
        return false;
    }

    var mobile=document.getElementById("mobile").value;
    if(mobile=="")
    {
        document.getElementById("merr").innerHTML="Enter Mobile No*"
        return false;
    }
    if(isNaN(mobile))
    {
        document.getElementById("merr").innerHTML="Enter No only in Char*"
        return false;
    }
    if(mobile.length<10  || mobile.length>10)
    {
        document.getElementById("merr").innerHTML="NO must be in 10 digit"
        return false;
    }
    if((mobile.charAt(0)!=9) && (mobile.charAt(0)!=8) && (mobile.charAt(0)!=7) && (mobile.charAt(0)!=6))
    {
        document.getElementById("merr").innerHTML="No starts 6,7,8,9 *"
        return false;
    } 
    var city=document.getElementById("city").value;
    if(city=="")
    {
        document.getElementById("cerr").innerHTML="Enter City*"
        return false;
    }
    var pattern=/^[a-zA-Z}]/;
    if(!city.match(pattern))
    {
        document.getElementById("cerr").innerHTML="Enter city only in Char"
        return false;
    }


    var state=document.getElementById("state").value;
    if(state=="")
    {
        document.getElementById("serr").innerHTML="Enter City*"
        return false;
    }
    var pattern=/^[a-zA-Z}]/;
    if(!state.match(pattern))
    {
        document.getElementById("serr").innerHTML="Enter state only in Char"
        return false;
    }

    var pin=document.getElementById("pin").value;
    if(pin=="")
    {
        document.getElementById("perr").innerHTML="Enter Pin code *"
        return false;
    }
    if(isNaN(pin))
    {
        document.getElementById("perr").innerHTML="Enter Pin in Digit *"
        return false;
    }
}