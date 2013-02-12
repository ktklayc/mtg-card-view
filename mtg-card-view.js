/**
* Magic The Gathering Card View
*
* Create links to MTG cards just by their name or multiverse ID including a mouse over
* previewing an image of the card.
*
* Requirements:
*   - jQuery
*
* How to:
*   Just add links to your HTML of the following formats:
*
*   1. By name
*       <a class="mtg-card-view-link" mtg-multiverse-id="129643" href="">Multiverse ID 129643</a>
*
*   2. By multiverse ID
*       <a class="mtg-card-view-link" mtg-multiverse-id="129643" href="">Multiverse ID 129643</a>
*
*   The link location and the preview are created just by the link attributes.
*   Make sure it's the name of a valid type. After the DOM loaded just call
*   the function from the ready handler.
*/

var createMtgCardViewLinks = function() {

  // Urls to the gatherer site from wizards.
  var urlBase     = 'http://gatherer.wizards.com';
  var linkUrlName = urlBase + '/Pages/Search/Default.aspx?name=';
  var imageUrlName = urlBase + '/Handlers/Image.ashx?type=card&name=';
  var linkUrlId   = urlBase + '/Pages/Search/Default.aspx?multiverseid=';
  var imageUrlId  = urlBase + '/Handlers/Image.ashx?type=card&multiverseid=';

  // cycle through all mtg-card-view-link
  $('a.mtg-card-view-link').each( function(i) {

     // set all card links
    var self = $(this);

    var cardName = self.attr( 'mtg-card-name' );
    var cardId = self.attr( 'mtg-multiverse-id' );

    function createUrls() {
        var url = {};

        if( cardName ) {
            url.image = imageUrlName + cardName;
            url.gatherer = linkUrlName + '+[' + cardName + ']';
        } else {
            url.image = imageUrlId + cardId;
            url.gatherer = linkUrlId + cardId;
        }
        return url;
    }

    var cardUrl = createUrls();

    console.log('cardUrl: ', JSON.stringify(cardUrl));

    self.attr('href', cardUrl.gatherer);

    // add mouse over
    self.hover( function(e) {
        // display card preview
        var cardDiv = "<div id='mtg-card-view-image'><img src='"
          + cardUrl.image +
          "' /></div>";

        $('body').append(cardDiv);
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
