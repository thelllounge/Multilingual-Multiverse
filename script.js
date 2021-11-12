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


// Making a table   

    let tableData = fetch('MtGTrial.json')
        .then(Response => Response.json())
        .then(json => console.log(json));
// One attempt

 
    // for (var i in tableData){
    //     var row =  `<tr>
    //                     <td>${tableData[i].English}</td>
    //                     <td>${tableData[i].French}</td>
    //                     <td>${tableData[i].Spanish}</td>
    //                     <td>${tableData[i].Italian}</td>
    //                     <td>${tableData[i].Portuguese}</td>
    //                     <td>${tableData[i].German}</td>
    //                     <td>${tableData[i].Japanese}</td>
    //                     <td>${tableData[i].SimplifiedChinese}</td>
    //                 </tr>`
    //          var table = $('#vocabBody')
    //          table.append(row);
    // }

// Another attempt

    // buildTable();

    // function buildTable(data){
    //     var table = document.getElementById('vocabBody')
    //     for (var i = 0; i < data.length; i++){
    //         var row =   `<tr>
    //                         <td>${data[i].English}</td>
    //                         <td>${data[i].French}</td>
    //                         <td>${data[i].Spanish}</td>
    //                         <td>${data[i].Italian}</td>
    //                         <td>${data[i].Portuguese}</td>
    //                         <td>${data[i].German}</td>
    //                         <td>${data[i].Japanese}</td>
    //                         <td>${data[i].SimplifiedChinese}</td>
    //                     </tr>`
    //         table.innterHTML += row;
    //     }
    // };

//Yet another attempt

    // window.onload = function(data){
    //     function buildTable(tableData){
    //         var table = document.getElementById('vocabBody')
    //         for (var i = 0; i < data.length; i++){
    //             var row =   `<tr>
    //                             <td>${data[i].English}</td>
    //                             <td>${data[i].French}</td>
    //                             <td>${data[i].Spanish}</td>
    //                             <td>${data[i].Italian}</td>
    //                             <td>${data[i].Portuguese}</td>
    //                             <td>${data[i].German}</td>
    //                             <td>${data[i].Japanese}</td>
    //                             <td>${data[i].SimplifiedChinese}</td>
    //                         </tr>`
    //             table.innterHTML += row;
    //         }
    //     };
    // };


/*A fourth attempt -- was using 
https://stackoverflow.com/questions/14643617/create-table-using-javascript
to try and figure this one out. 
*/
    // window.onload = function(data){
    //     function buildTable(data){
    //         var table = document.getElementById('vocabBody');
    //         var row = document.createElement('tr');
    //         var cell = document.createElement('td');
    //         for (var i = 0; i < data.length; i++){
    //             table.insertRow();
    //             row.appendChild(cell);
    //         }
            
    //     };
    // }

});
