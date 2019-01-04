window.slowMove = function(target) {

    var destination = target;

    //moves window by 1 pixel each time
    do { //find scroll container
      //parentNode finds the node name of the parent node of the destination
      //finds where the destination is located
      //aka. the div (body)
      destination = destination.parentNode;
      console.log('Destination:');
      console.log(destination);

      //scrollTop sets the number of pixels an element's content is scrolled vertically
      destination.scrollTop += 1;
    } while (destination.scrollTop == 0);


    var distance_in_pixels = 0;

    //calls above function until it gets to destination.
    do { //find the top of target relatively to the container
        distance_in_pixels += target.offsetTop;
        //offsetTop returns a number, representing the top position of the element, in pixels
        console.log('Pixels to move:');
        console.log(distance_in_pixels);
    } while (target = target.offsetParent);
    //offsetParent returns the nearest ancestor

    function scroll(to, move1, top_div, i) {
        i++; if (i > 20){
          console.log('Variables:');
          console.log(to); //this is a directory
          console.log(move1); //by how many pixels it moves each move
          console.log(top_div); //pixels from the top to destination
          console.log(i);
          return;
        }

        //move window until we get to the number of pixels we want
        to.scrollTop = move1 + (top_div - move1) / 20 * i;

        //call function every 10 milliseconds
        setTimeout(function(){scroll(to, move1, top_div, i);} , 10);
    }
    //start scrolling
    scroll(destination, destination.scrollTop, distance_in_pixels, 0);
}
