window.onload = function () {


    // ****************************************** LLamado gift BATMAN  ****************************************** 

    fetch('https://api.giphy.com/v1/stickers/search?api_key=Azmm3FyGs9gLJ3SxTBqiMHh7pBV3SgZ2&q=batman&limit=25&offset=0&rating=g&lang=en')

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

    fetch('https://api.giphy.com/v1/stickers/search?api_key=Azmm3FyGs9gLJ3SxTBqiMHh7pBV3SgZ2&q=Mulher+Maravilha&limit=25&offset=0&rating=g&lang=en')

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

    fetch('https://api.giphy.com/v1/stickers/search?api_key=Azmm3FyGs9gLJ3SxTBqiMHh7pBV3SgZ2&q=superman&limit=25&offset=0&rating=g&lang=en')

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

    fetch('https://api.giphy.com/v1/stickers/search?api_key=Azmm3FyGs9gLJ3SxTBqiMHh7pBV3SgZ2&q=harley+quinn&limit=25&offset=0&rating=g&lang=en')

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
