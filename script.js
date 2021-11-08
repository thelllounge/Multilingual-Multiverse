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
// One attempt
    // const data = fetch('./MtGTrial.json');

 
    // for (var i in data){
    //     var row =   `<tr>
    //                          <td> ${data[i].English} </td>
    //                          <td>${data[i].French}</td>
    //                          <td>${data[i].Spanish}</td>
    //                          <td>${data[i].Italian}</td>
    //                          <td>${data[i].Portuguese}</td>
    //                          <td>${data[i].German}</td>
    //                          <td>${data[i].Japanese}</td>
    //                          <td>${data[i].SimplifiedChinese}</td>
    //                      </tr>`
    //          var table = $('#vocabBody')
    //          table.append(row);
    // }

// Another attempt

    // function buildTable(data){
    //     var table = document.getElementById('vocabBody')
    //     for (var i = 0; i < data.length; i++){
    //         var row =   `<tr>
    //                         <td> ${data[i].English} </td>
    //                         <td>${data[i].French}</td>
    //                         <td>${data[i].Spanish}</td>
    //                         <td>${data[i].Italian}</td>
    //                         <td>${data[i].Portuguese}</td>
    //                         <td>${data[i].German}</td>
    //                         <td>${data[i].Japanese}</td>
    //                         <td>${data[i].SimplifiedChinese}</td>
    //                     </tr>`
    //         table.append(row);
    //     }
    // };

    // buildTable("Magic Memrise Trial.json");


});