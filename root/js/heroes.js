window.onload = function () {


    // ****************************************** LLamado gift BATMAN  ****************************************** 

    fetch('https://api.giphy.com/v1/gifs/search?api_key=9cnrIt4sz2frueHbX8nj5ot5GqnOcNSV&q=batman')

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (informacion) {
            console.log(informacion.data);

            for (let index = 0; index < informacion.data.length; index++) {

                let gif = "<p>" + informacion.data[index].title + "</p>"
                gif += "<img src=" + informacion.data[index].images.original.url + ">"
                document.querySelector("#ul-batman").innerHTML += "<li>" + gif + "</li>"
            }
        });


    //****************************************** LLamado gift MUJER MARAVILLA  ******************************************

    fetch('https://api.giphy.com/v1/gifs/search?api_key=9cnrIt4sz2frueHbX8nj5ot5GqnOcNSV&q=mujer+maravilla')

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (informacion) {
            console.log(informacion.data);

            for (let index = 0; index < informacion.data.length; index++) {

                let gif = "<p>" + informacion.data[index].title + "</p>"
                gif += "<img src=" + informacion.data[index].images.original.url + ">"
                document.querySelector("#ul-wonder-woman").innerHTML += "<li>" + gif + "</li>"
            }
        });


    // ****************************************** LLamado gift SUPERMAN  ******************************************

    fetch('https://api.giphy.com/v1/gifs/search?api_key=9cnrIt4sz2frueHbX8nj5ot5GqnOcNSV&q=superman')

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (informacion) {
            console.log(informacion.data);

            for (let index = 0; index < informacion.data.length; index++) {

                let gif = "<p>" + informacion.data[index].title + "</p>"
                gif += "<img src=" + informacion.data[index].images.original.url + ">"
                document.querySelector("#ul-superman").innerHTML += "<li>" + gif + "</li>"
            }
        });


    // ****************************************** LLamado gift HARLEY QUINN  ******************************************

    fetch('https://api.giphy.com/v1/gifs/search?api_key=9cnrIt4sz2frueHbX8nj5ot5GqnOcNSV&q=harley+qinn')

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (informacion) {
            console.log(informacion.data);

            for (let index = 0; index < informacion.data.length; index++) {

                let gif = "<p>" + informacion.data[index].title + "</p>"
                gif += "<img src=" + informacion.data[index].images.original.url + ">"
                document.querySelector("#ul-harley-quinn").innerHTML += "<li>" + gif + "</li>"
            }
        });

}
