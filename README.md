mtg-card-view
=============

Card preview and link to The Gatherer for Magic: The Gathering cards.

### Usage

Create links to MTG cards just by their name including a mouse over
previewing an image of the card.

## Requirements
jQuery

## How To
  
Just add links to your HTML of the follow format:

```html
<a class="mtg-card-view-link" href="">Guardian Seraph</a>
```

The link location and the preview are created just by the link text.
Make sure it's the name of a valid type. After the DOM loaded just call
the function from the ready handler.

## Example

See index.html for an example.
