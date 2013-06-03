mtg-card-view
=============

Card preview and link to The Gatherer for Magic: The Gathering cards.

### Usage

Create links to MTG cards just by their name or multiverse ID including a mouse over
previewing an image of the card.

## Requirements
jQuery

## How To

Just add links to your HTML of the following formats:

```html
<a class="mtg-card-view-link" mtg-multiverse-id="129643" href="">Multiverse ID 129643</a>

<a class="mtg-card-view-link" href="" mtg-card-name="Guardian Seraph">Guardian Seraph</a>
```

The link location and the preview are created either from the multiverse id or from the card name.
After the DOM loaded just call the function `createMtgCardViewLinks()` from the ready handler.

## Example

See index.html for an example.
