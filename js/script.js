window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function addToCart(){
    alert("Added to Cart!");
}

function addToLike(){
    alert("Added to Likes!");
}

function selectVar(img)
{   
    var image = img.src;
    var altText = img.alt;
    document.getElementById('item-image').src = image;
    document.getElementById('item-code').textContent = altText;
}

function navScroll(string){
    sessionStorage.setItem('type', string);
    console.log("Key set to " + string);
}

function navStartScroll(){
    var key = sessionStorage.getItem('type');
    switch (key) {
        case 'new': smoothScroll(document.getElementById('product-new'));
        sessionStorage.setItem('type', 'none');
        console.log("Session storage updated to " + sessionStorage.getItem('type'))
        break;
        case 'sale': smoothScroll(document.getElementById('product-sale'));
        sessionStorage.setItem('type', 'none');
        console.log("Session storage updated to " + sessionStorage.getItem('type'))
        break;
        default: break;
    }
}
