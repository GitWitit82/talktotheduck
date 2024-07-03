//populate table

let tourDates = [{
        'date': 'JUL 18, 2024',
        'venue': 'Rock Fest 2024',
        'location': 'Cadott, WI'
            },
    {
        'date': 'JUL 20, 2024',
        'venue': 'Hartford HealthCare Amphitheater',
        'location': 'Bridgeport, CT'
            },
    {
        'date': 'JUL 23, 2024',
        'venue': 'Leader Bank Pavilion',
        'location': 'Boston, MA'
            },
        ];



function createRow(data) {
    var table = document.getElementById('tourTable')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                            <td>${data[i].date}</td>
                             <td>${data[i].venue}</td>
                             <td>${data[i].location}</td>
                        </tr>`
        table.innerHTML += row
    }

}
window.onload = function(){
    createRow(tourDates);
};


//add to cart
document.getElementById("addtocart").addEventListener("click", function () {
    myFunction();
});

function myFunction() {
    let img = document.getElementById("image").getAttribute('src');
    const title = document.getElementById('pt1').textContent;
    const price = document.getElementById('price1').textContent;


    var table = document.getElementById("cart-table");
    var row = table.insertRow(0);
    row.innerHTML = '<td><img style="width:10%;height:10%;" src=' + img + ' class="img-thumbnail"></td><td>' + title + '</td><td>' + price + '</td>';


    let rows = document.querySelectorAll("table tr td:last-child");
    let sum = 0;
    for (let i = 0; i < rows.length - 1; i++) {
        sum += Number(rows[i].textContent);
    }

    document.getElementById("total").textContent = sum;
}



function validate() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var nameRGEX = /^[A-Za-z]{3,}$/;
    var phoneRGEX = /^\d{10}$/;
    var emailRGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var firstNameResult = nameRGEX.test(firstName);
    var lastNameResult = nameRGEX.test(lastName);
    var phoneResult = phoneRGEX.test(phone);
    var emailResult = emailRGEX.test(email);

    var firstNameInput = document.getElementById('firstName');
    var lastNameInput = document.getElementById('lastName');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');



    if (!firstNameResult) {
        firstNameInput.style.border = "2px solid red";
    } else {
        firstNameInput.style.border = "";
    }

    if (!lastNameResult) {
        lastNameInput.style.border = "2px solid red";
    } else {
        lastNameInput.style.border = "";
    }
    if (phoneResult == false) {
        phoneInput.style.border = "2px solid red";
    } else {
        phoneInput.style.border = "";
    }

    if (!emailResult) {
        emailInput.style.border = "2px solid red";
    } else {
        emailInput.style.border = "";
    }

    return phoneResult && emailResult;
}

alert("phone:" + phoneResult);
