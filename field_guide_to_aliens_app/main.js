document.querySelector('.sunflower').addEventListener('click', apiRequest)



async function apiRequest(){
    const alienName = document.querySelector('input').value
    const url = 'https://startrek-alien-api-asd.herokuapp.com/api/'
    try{
        const response = await fetch(url + `${alienName}`)
        const data = await response.json()
        console.log(data)
        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples
        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    } catch(error) {
        console.log(error)
    }
}

document.addEventListener("touchstart", function() {},false);

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.scroll-top a').fadeIn();
    } else {
        $('.scroll-top a').fadeOut();
    }
});

$(document).ready(function() {
    $("#scroll-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});