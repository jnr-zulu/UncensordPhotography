/*Click functions for the small web menu*/
var navLinks = document.getElementById("navLinks");
            function showMenu() {
                navLinks.style.right = "0";
            }
            function hideMenu() {
                navLinks.style.right = "-200px"
            }

/*Adding On Click Functions for Small Images*/

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementByClassName("small-img");

SmallImg[0].onClick = function()
{
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onClick = function()
{
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onClick = function()
{
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onClick = function()
{
    ProductImg.src = SmallImg[3].src;
}

/*------------------------Toggle Form--------------------*/

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

    function register () 
    {
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
    }

    function login () 
    {
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
    }