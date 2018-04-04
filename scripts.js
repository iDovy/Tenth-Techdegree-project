var employee = document.getElementsByClassName("employee");
var current;
$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        dataobject = data;
        document.getElementById('img0').src = data.results[0].picture.thumbnail;
        document.getElementById('h0').textContent = data.results[0].name.first + " " + data.results[0].name.last;
        document.getElementById('email0').textContent = data.results[0].email;
        document.getElementById('city0').textContent = data.results[0].location.city;
        document.getElementById('img1').src = data.results[1].picture.thumbnail;
        document.getElementById('h1').textContent = data.results[1].name.first + " " + data.results[1].name.last;
        document.getElementById('email1').textContent = data.results[1].email;
        document.getElementById('city1').textContent = data.results[1].location.city;
        document.getElementById('img2').src = data.results[2].picture.thumbnail;
        document.getElementById('h2').textContent = data.results[2].name.first + " " + data.results[2].name.last;
        document.getElementById('email2').textContent = data.results[2].email;
        document.getElementById('city2').textContent = data.results[2].location.city;
        document.getElementById('img3').src = data.results[3].picture.thumbnail;
        document.getElementById('h3').textContent = data.results[3].name.first + " " + data.results[3].name.last;
        document.getElementById('email3').textContent = data.results[3].email;
        document.getElementById('city3').textContent = data.results[3].location.city;
        document.getElementById('img4').src = data.results[4].picture.thumbnail;
        document.getElementById('h4').textContent = data.results[4].name.first + " " + data.results[4].name.last;
        document.getElementById('email4').textContent = data.results[4].email;
        document.getElementById('city4').textContent = data.results[4].location.city;
        document.getElementById('img5').src = data.results[5].picture.thumbnail;
        document.getElementById('h5').textContent = data.results[5].name.first + " " + data.results[5].name.last;
        document.getElementById('email5').textContent = data.results[5].email;
        document.getElementById('city5').textContent = data.results[5].location.city;
        document.getElementById('img6').src = data.results[6].picture.thumbnail;
        document.getElementById('h6').textContent = data.results[6].name.first + " " + data.results[6].name.last;
        document.getElementById('email6').textContent = data.results[6].email;
        document.getElementById('city6').textContent = data.results[6].location.city;
        document.getElementById('img7').src = data.results[7].picture.thumbnail;
        document.getElementById('h7').textContent = data.results[7].name.first + " " + data.results[7].name.last;
        document.getElementById('email7').textContent = data.results[7].email;
        document.getElementById('city7').textContent = data.results[7].location.city;
        document.getElementById('img8').src = data.results[8].picture.thumbnail;
        document.getElementById('h8').textContent = data.results[8].name.first + " " + data.results[8].name.last;
        document.getElementById('email8').textContent = data.results[8].email;
        document.getElementById('city8').textContent = data.results[8].location.city;
        document.getElementById('img9').src = data.results[9].picture.thumbnail;
        document.getElementById('h9').textContent = data.results[9].name.first + " " + data.results[9].name.last;
        document.getElementById('email9').textContent = data.results[9].email;
        document.getElementById('city9').textContent = data.results[9].location.city;
        document.getElementById('img10').src = data.results[10].picture.thumbnail;
        document.getElementById('h10').textContent = data.results[10].name.first + " " + data.results[10].name.last;
        document.getElementById('email10').textContent = data.results[10].email;
        document.getElementById('city10').textContent = data.results[10].location.city;
        document.getElementById('img11').src = data.results[11].picture.thumbnail;
        document.getElementById('h11').textContent = data.results[11].name.first + " " + data.results[11].name.last;
        document.getElementById('email11').textContent = data.results[11].email;
        document.getElementById('city11').textContent = data.results[11].location.city;
        for (var i = 0; i < employee.length; i++) {
            employee[i].addEventListener('click', (e) => {
                event.stopPropagation();
                if (event.target.getAttribute("data-numb") == '0') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 0;
                    document.getElementById("Dimg").src = data.results[0].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[0].email;
                    document.getElementById("Dcity").textContent = data.results[0].location.city;
                    document.getElementById("Dphone").textContent = data.results[0].phone;
                    document.getElementById("Daddress").textContent = data.results[0].location.street + ", " + data.results[0].location.state + " " + data.results[0].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " + data.results[0].dob;
                }

                if (event.target.getAttribute("data-numb") == '1') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 1;
                    document.getElementById("Dimg").src = data.results[1].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[1].email;
                    document.getElementById("Dcity").textContent = data.results[1].location.city;
                    document.getElementById("Dphone").textContent = data.results[1].phone;
                    document.getElementById("Daddress").textContent = data.results[1].location.street + ", " + data.results[1].location.state + " " + data.results[1].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[1].dob;
                }

                if (event.target.getAttribute("data-numb") == '2') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 2;
                    document.getElementById("Dimg").src = data.results[2].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[2].email;
                    document.getElementById("Dcity").textContent = data.results[2].location.city;
                    document.getElementById("Dphone").textContent = data.results[2].phone;
                    document.getElementById("Daddress").textContent = data.results[2].location.street + ", " + data.results[2].location.state + " " + data.results[2].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[2].dob;
                }

                if (event.target.getAttribute("data-numb") == '3') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 3;
                    document.getElementById("Dimg").src = data.results[3].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[3].email;
                    document.getElementById("Dcity").textContent = data.results[3].location.city;
                    document.getElementById("Dphone").textContent = data.results[3].phone;
                    document.getElementById("Daddress").textContent = data.results[3].location.street + ", " + data.results[3].location.state + " " + data.results[3].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[3].dob;
                }

                if (event.target.getAttribute("data-numb") == '4') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 4;
                    document.getElementById("Dimg").src = data.results[4].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[4].email;
                    document.getElementById("Dcity").textContent = data.results[4].location.city;
                    document.getElementById("Dphone").textContent = data.results[4].phone;
                    document.getElementById("Daddress").textContent = data.results[4].location.street + ", " + data.results[4].location.state + " " + data.results[4].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[4].dob;
                }

                if (event.target.getAttribute("data-numb") == '5') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 5;
                    document.getElementById("Dimg").src = data.results[5].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[5].email;
                    document.getElementById("Dcity").textContent = data.results[5].location.city;
                    document.getElementById("Dphone").textContent = data.results[5].phone;
                    document.getElementById("Daddress").textContent = data.results[5].location.street + ", " + data.results[5].location.state + " " + data.results[5].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[5].dob;
                }

                if (event.target.getAttribute("data-numb") == '6') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 6;
                    document.getElementById("Dimg").src = data.results[6].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[6].email;
                    document.getElementById("Dcity").textContent = data.results[6].location.city;
                    document.getElementById("Dphone").textContent = data.results[6].phone;
                    document.getElementById("Daddress").textContent = data.results[6].location.street + ", " + data.results[6].location.state + " " + data.results[6].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[6].dob;
                }

                if (event.target.getAttribute("data-numb") == '7') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 7;
                    document.getElementById("Dimg").src = data.results[7].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[7].email;
                    document.getElementById("Dcity").textContent = data.results[7].location.city;
                    document.getElementById("Dphone").textContent = data.results[7].phone;
                    document.getElementById("Daddress").textContent = data.results[7].location.street + ", " + data.results[7].location.state + " " + data.results[7].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[7].dob;
                }

                if (event.target.getAttribute("data-numb") == '8') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 8;
                    document.getElementById("Dimg").src = data.results[8].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[8].email;
                    document.getElementById("Dcity").textContent = data.results[8].location.city;
                    document.getElementById("Dphone").textContent = data.results[8].phone;
                    document.getElementById("Daddress").textContent = data.results[8].location.street + ", " + data.results[8].location.state + " " + data.results[8].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[8].dob;
                }

                if (event.target.getAttribute("data-numb") == '9') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 9;
                    document.getElementById("Dimg").src = data.results[9].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[9].email;
                    document.getElementById("Dcity").textContent = data.results[9].location.city;
                    document.getElementById("Dphone").textContent = data.results[9].phone;
                    document.getElementById("Daddress").textContent = data.results[9].location.street + ", " + data.results[9].location.state + " " + data.results[9].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[9].dob;
                }

                if (event.target.getAttribute("data-numb") == '10') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 10;
                    document.getElementById("Dimg").src = data.results[10].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[10].email;
                    document.getElementById("Dcity").textContent = data.results[10].location.city;
                    document.getElementById("Dphone").textContent = data.results[10].phone;
                    document.getElementById("Daddress").textContent = data.results[10].location.street + ", " + data.results[10].location.state + " " + data.results[10].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[10].dob;
                }

                if (event.target.getAttribute("data-numb") == '11') {
                    document.getElementById("overlay").style.display = "inline";
                    current = 11;
                    document.getElementById("Dimg").src = data.results[11].picture.thumbnail;
                    document.getElementById("Demail").textContent = data.results[11].email;
                    document.getElementById("Dcity").textContent = data.results[11].location.city;
                    document.getElementById("Dphone").textContent = data.results[11].phone;
                    document.getElementById("Daddress").textContent = data.results[11].location.street + ", " + data.results[11].location.state + " " + data.results[11].location.postcode;
                    document.getElementById("Ddob").textContent = "Birthday: " +  data.results[11].dob;
                }
            });
        }
    }
});
document.querySelector(".x").addEventListener("click", (e) => {
    document.querySelector(".x").parentNode.parentNode.style.display = "none";
})
function search() {
    var input, filter, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    for (i = 0; i < 12; i++) {
        name = dataobject.results[i].name.first;
        if (name.toUpperCase().indexOf(filter) > -1) {
            employee[i].style.display = "";
        } else {
            employee[i].style.display = "none";
        }
    }
}
document.querySelector(".left").addEventListener("click", () => {
    current--;
    if(current == -1){
        current = 11;
    }
    document.getElementById("Dimg").src = dataobject.results[current].picture.thumbnail;
    document.getElementById("Demail").textContent = dataobject.results[current].email;
    document.getElementById("Dcity").textContent = dataobject.results[current].location.city;
    document.getElementById("Dphone").textContent = dataobject.results[current].phone;
    document.getElementById("Daddress").textContent = dataobject.results[current].location.street;
    document.getElementById("Ddob").textContent = dataobject.results[current].dob;
})
document.querySelector(".right").addEventListener("click", () => {
    current++;
    if(current == 12){
        current = 0;
    }
    document.getElementById("Dimg").src = dataobject.results[current].picture.thumbnail;
    document.getElementById("Demail").textContent = dataobject.results[current].email;
    document.getElementById("Dcity").textContent = dataobject.results[current].location.city;
    document.getElementById("Dphone").textContent = dataobject.results[current].phone;
    document.getElementById("Daddress").textContent = dataobject.results[current].location.street;
    document.getElementById("Ddob").textContent = dataobject.results[current].dob;
})
