 //toggles languages
 $(document).ready(function() {

    $('#english').on('click', function() {
        $(".en").toggleClass('hidden');
    });
    
    $('#french').on('click', function() {
        $(".fr").toggleClass('hidden');
    });

    $('#spanish').on('click', function() {
        $(".sp").toggleClass('hidden');
    });

    $('#italian').on('click', function() {
        $(".it").toggleClass('hidden');
    });

    $('#portugeuse').on('click', function() {
        $(".po").toggleClass('hidden');
    });

    $('#german').on('click', function() {
        $(".ge").toggleClass('hidden');
    });

    $('#japanese').on('click', function() {
        $(".ja").toggleClass('hidden');
    });

    $('#chineseSimp').on('click', function() {
        $(".ch").toggleClass('hidden');
    });

// possible object to use?
var vocabData

// Making a table   

fetch('MtGTrial.json')
        .then(Response => Response.json())
        .then(data => {
     for (var i in data){
        var row =  `<tr>
                        <td class = "en">${data[i].English}</td>
                        <td class = "fr">${data[i].French}</td>
                        <td class = "sp">${data[i].Spanish}</td>
                        <td class = "it">${data[i].Italian}</td>
                        <td class = "po">${data[i].Portugeuse}</td>
                        <td class = "ge">${data[i].German}</td>
                        <td class = "ja">${data[i].Japanese}</td>
                        <td class = "ch">${data[i].SimplifiedChinese}</td>
                    </tr>`
             var table = $('#vocabBody')
             table.append(row);
    }
        });


fetch('MtGTrial.json')
        .then(Response => Response.json())
        .then(data => {
          console.log(data);
        });
//Vocabulary game?





//Makes navbar sticky

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

});
