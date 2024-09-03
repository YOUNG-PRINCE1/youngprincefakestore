$(document).ready(function () {
    
    $.ajax({
        type: "get",
        url: "https://fakestoreapi.com/products",
        dataType: "json",
        success: function (response) {
            $.each(response, function(index, product){
                let eachproduct = `
                <div class="mt-5 col-sm-12 col-md-4 col-lg-3">
                        <img style="height: 25vh; width: 15vw;" src="${product.image}" alt="">
                        <h6>${product.title}</h6>
                        <p>${product.price}</p>
                        <button class="btn btn-danger">add to cart</button>
                    </div >
                `
                $("#allfood").append(eachproduct)
            })       
        },

        error: function (err){
            console.log(err);
            
        }
    });
});