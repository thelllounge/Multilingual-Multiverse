console.log('Hello');

fetch('/Javascript/MtGTrial.json')
        .then(Response => Response.json())
        .then(data => {
          console.log(data);
        });

