# Documentation

SmartFit is a plugin for doing a best fit of text within an element. This plugin is best fit for dynamic or localized text where a given element is restricted to a given height and width.

### Dependencies
                
* jQuery 1.6
  
  
### How To Use

Live example:
http://jsfiddle.net/MYSVL/438/

First, create the element to work with. In this example, we are constrained to a 150px by 32px section of the page. We are going to work with 2 scenarios; one with just a div and the second with a div then span inside the div.
```javascript
	// Public: smartFit text within the element
	//
	// minFontPx : 14, // Smallest the font will get in px. default: 14
	// maxFontPx : 16, // Largest the font will get in px. The font guessing will begin at this size. default: 16
	// innerWrapper : 'span' // inner wrapping element type, ex. span or div.
	//
	// Returns: the jQuery elements 
	//
	// Examples
	//
	//   $('.smartfit').smartFit({maxFontPx: 44, minFontPx:12});
	//   $('.smartfit').smartFit({innerWrapper: 'div'});


	$('.ngActivityHeader�').smartFit({'maxFontPx' : 44});
```

The element can be in the following forms:

```html
	<div id="myid">the text</div>
```
OR
```html
	<div id="myid"><span>the text</span></div>
```

#### HTML

With this example the text is wrapped with just the div we want to constrain the text to. The script will automatically wrap the text with a `<span>`.
```html
    <div class="header fitin">Very long phrase goes here</div>
```

With this example the text is already wrapped with a `<span>` so the script will just do its work to fit the text.
```html
    <div class="header fitin"><span>Very long phrase already wrapped in a span</span></div>
```

#### JavaScript

```javascript
    $(window).ready(function(){
        $('.fitin').smartFit({'maxFontPx' : 44});
    });
```

#### CSS

```css
    .fitin {
		width: 150px;
		height: 32px;
		border: 1px solid black;
		overflow: hidden;
		font-size: 44px;
	}
```