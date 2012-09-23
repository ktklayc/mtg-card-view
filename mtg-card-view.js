/**
* Magic The Gathering Card View
*
* Create ling to MTG cards just by their name including a mouse over
* previewing an image of the card.
*
* Requirements:
*   - jQuery
*
* How to:
*   Just add links to your HTML of the follow format:
*
*     <a class="mtg-card-view-link" href="">Guardian Seraph</a>
*
*   The link location and the preview are created just by the link text.
*   Make sure it's the name of a valid type. After the DOM loaded just call
*   the function to the ready handler.
*/

var createMtgCardViewLinks = function() {

  // Urls to the gatherer site from wizards.
  var linkUrl = 'http://gatherer.wizards.com/Pages/Search/Default.aspx?name=';
  var imageUrl = 'http://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=';

  // cycle through all mtg-card-view-link
  $('a.mtg-card-view-link').each( function(i) {

     // set all card links
    var self = $(this);
    var cardName = self.text().trim();
    var cardUrl = linkUrl + '+[' + cardName + ']';
    var cardImage = imageUrl + cardName;
    self.attr('href', cardUrl);

    // add mouse over
    self.hover( function(e) {
        // display card preview
        $('body').append("<p id='mtg-card-view-image'><img src='"+ cardImage +"' /></p>");
        $('#mtg-card-view-image')
            .css('top',(e.pageY - 20) + 'px')
            .css('left',(e.pageX + 20) + 'px')
            .css('position', 'absolute');
    },
    function() {
        // remove card preview
        $('#mtg-card-view-image').remove();
    });
  });
};

/*
* ----------------------------------------------------------------------------
* "THE BEER-WARE LICENSE" (Revision 42):
* <root@aggressive-solutions.de> wrote this file. As long as you retain this
* notice you can do whatever you want with this stuff. If we meet some day,
* and you think this stuff is worth it, you can buy me a beer in return. KIM
* ----------------------------------------------------------------------------
*/
