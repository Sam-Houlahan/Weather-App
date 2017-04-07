$(document).ready(function() {
    let apiId = "7bd5de1e047858fd2ad79c85556874e1"

    $("body").hide().fadeIn('3000');


//Gets user's location and assigns latitude and longitude into a variable to use.
    $.getJSON("http://ipinfo.io/", function(location) {
        let latLon = location.loc.split(",")
        let lat = latLon[0];
        let lon = latLon[1];
        let city = location.city;
        let country = location.country;


 //api for the weather readings.
        var apiUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiId;

        $.getJSON(apiUrl, function(w) {

            let kTemp = w.main.temp;
            let weatherType = w.weather[0].main;
            let weatherDescription = w.weather[0].description;
            let weatherId = w.weather[0].id;
            let weatherIcon = w.weather[0].icon;
            let weatherIconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
            let fTemp = Math.round((kTemp) * (9 / 5) - (459.67));
            let cTemp = Math.round((kTemp) - (273));
            let weatherHumidity = w.main.humidity;
            let tempSwap = true; // variable used for the temperature conversion below.
            $("#location").html(city + ", " + country);
            $("#icon img").attr("src", weatherIconUrl)
            $("#weather").html(weatherType)
            $("#humid").html("Humidity Level : " + weatherHumidity + " %");
            $("#temp").html(cTemp + "&deg;C");


//displays the temperature in red or blue depending on the temp.
            if (cTemp < 20) {

                $('#temp').addClass("cold");
            }
            if (cTemp >= 20) {
                $('#temp').addClass("hot");
            }

//Function that swaps temperature from farenheit to celcius on click
            $('#temp').click(function() {

                    if (tempSwap === false) {

                        $("#temp").html(cTemp + "&deg;C");

                        tempSwap = true;
                    } else {
                        $('#temp').html(fTemp + "&deg;F")
                        tempSwap = false;
                    }

                }

            )
//depending on weather id display a different background ref http://openweathermap.org/weather-conditions
            if (weatherId === 801 || weatherId <= 804) {

                $('.body').css('background-image', 'url(' + "https://static.pexels.com/photos/26301/pexels-photo-26301.jpg" + ')');
            }
            if (weatherId === 200 || weatherId <= 232) {
                $('.body').css('background-image', 'url(' + "https://static.pexels.com/photos/24660/pexels-photo.jpg" + ')');

            }
            if (weatherId === 300 || weatherId <= 321) {
                $('.body').css('background-image', 'url(' + "https://static.pexels.com/photos/21492/pexels-photo.jpg" + ')');

            }
            if (weatherId === 500 || weatherId <= 531) {
                $('.body').css('background-image', 'url(' + "https://static.pexels.com/photos/69927/rain-floor-water-wet-69927.jpeg" + ')');

            }
            if (weatherId === 600 || weatherId <= 622) {
                $('.body').css('background-image', 'url(' + "https://www.pexels.com/photo/snow-in-the-city-illustration-25112/" + ')');


            }
            if (weatherId === 701 || weatherId === 741) {

                $('.body').css('background-image', 'url(' + "https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg" + ')');

            }
            if (weatherId === 800) {

                $('.body').css('background-image', 'url(' + "https://static.pexels.com/photos/197340/pexels-photo-197340.jpeg" + ')');

            }








        })

    });
})
