


/* =====================================================
   1. MOBILE NAVIGATION
===================================================== */

// Mobile menu button
$("#menuBtn").click(function () {

    // jQuery se navigation show/hide
    $("#navLinks").toggleClass("show");

});


/* Mobile menu mein link click hone ke baad close */

$(".nav-links a").click(function () {

    $("#navLinks").removeClass("show");

});



/* =====================================================
   2. SEARCH BOX
===================================================== */

$("#searchBtn").click(function () {

    // Search box open
    $("#searchBox").addClass("open");

    // Input par automatically focus
    $("#searchInput").focus();

});


$("#searchClose").click(function () {

    // Search box close
    $("#searchBox").removeClass("open");

});



/* =====================================================
   3. SEARCH
===================================================== */

$("#searchInput").on("keyup", function () {

    // User ka search text
    let searchValue =
        $(this).val().toLowerCase();


    /*
       Products ke naam check karna.
       Agar matching product ho to show.
    */

    $(".product-card").each(function () {

        let productName =
            $(this)
            .find("h3")
            .text()
            .toLowerCase();


        if (productName.includes(searchValue)) {

            $(this).show();

        }

        else {

            $(this).hide();

        }

    });

});



/* =====================================================
   4. SCROLL REVEAL ANIMATION
===================================================== */

function revealOnScroll() {

    $(".reveal").each(function () {

        let elementTop =
            $(this).offset().top;

        let windowBottom =
            $(window).scrollTop()
            +
            $(window).height();


        /*
           Agar element screen mein aa gaya
           to show class add.
        */

        if (windowBottom > elementTop + 80) {

            $(this).addClass("show");

        }

    });

}


// Page load$(document).ready(function () {

    revealOnScroll();



// Scroll par animation
$(window).on("scroll", function () {

    revealOnScroll();

});



/* =====================================================
   5. PRODUCT IMAGE HOVER
===================================================== */

/*
   CSS already zoom effect de raha hai.

   jQuery se hum extra hover interaction
   add kar rahe hain.
*/

$(".product-card").hover(

    function () {

        $(this)
            .find(".quick-view")
            .stop()
            .animate(
                {
                    bottom: "10px"
                },
                250
            );

    },

    function () {

        $(this)
            .find(".quick-view")
            .stop()
            .animate(
                {
                    bottom: "-45px"
                },
                250
            );

    }

);



/* =====================================================
   6. HEART BUTTON
===================================================== */

$(".heart-btn").click(function () {

    /*
       Heart icon ko filled heart mein change
       karna.
    */

    $(this)
        .find("i")
        .toggleClass(
            "fa-regular fa-solid"
        );


    $(this).css(
        "color",
        "var(--gold)"
    );

});



/* =====================================================
   7. ADD TO CART
===================================================== */

let cartCount = 0;


$(".add-cart").click(function () {

    // Product name
    let productName =
        $(this).data("name");


    // Cart count increase
    cartCount++;


    // Navbar cart update
    $("#cartCount").text(cartCount);


    // Button text change
    $(this).text("Added ✓");


    // Temporary message
    alert(
        productName +
        " has been added to your cart."
    );


    // 1.5 seconds baad button wapas
    let button = $(this);

    setTimeout(function () {

        button.text("Add to Cart");

    }, 1500);

});



/* =====================================================
   8. QUICK VIEW
===================================================== */

$(".quick-view").click(function () {

    let product =
        $(this).data("product");


    alert(
        "Quick View\n\n" +
        "Product: " +
        product +
        "\n\nMore product details coming soon!"
    );

});



/* =====================================================
   9. NEWSLETTER
===================================================== */

$("#newsletterForm").submit(function (event) {

    // Form ko reload hone se rokna
    event.preventDefault();


    let email =
        $("#newsletterEmail").val();


    if (email === "") {

        alert(
            "Please enter your email address."
        );

        return;

    }


    alert(
        "Thank you for joining AlamNass! 💙"
    );


    // Input clear
    $("#newsletterEmail").val("");

});



/* =====================================================
   10. PAGE LOAD ANIMATION
===================================================== */

/* Website open hote hi hero section
   smoothly appear karega.
*/

$(window).on("load", function () {

    $(".hero .reveal").each(function (index) {

        let element = $(this);


        setTimeout(function () {

            element.addClass("show");

        }, index * 250);

    });

});