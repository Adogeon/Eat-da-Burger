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
})