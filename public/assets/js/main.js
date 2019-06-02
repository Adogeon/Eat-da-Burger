document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".change-eat").forEach(function(ele) {
        ele.addEventListener("click",function(event) {
            event.preventDefault();
            var eatenID = this.getAttribute("data-id");
    
            fetch(`/api/eat/${eatenID}`).then(
                function() {
                    location.reload();
                }
            )
        })
    })

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        var newBurger = document.querySelector("#new-burger").value;
        console.log(newBurger);
        fetch(`/api/add`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({burger: newBurger}),
        }).then(function() {
            location.reload();
        })
    })
})