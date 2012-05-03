# Navify
Easily inactivate the current page's navigational link
## Intro
Using a styled list is the standard way to create a navigational menu. **Navify** is a simple [jQuery](http://jquery.com/) plugin that applies these styles on different pages of your site and inactivates the current page's link. This is especially useful if you're using a template system like [Jinja](http://jinja.pocoo.org/) because you no longer have to split the menu into separate blocks. A simple call to **Navify** does the work instead. 

## Getting started 
### HTML
Given a list of navigational links: 

```html
<ul id="nav_links">
  <li><a href="page1.html">First page</a></li>
  <li><a href="page2.html">Second page</a></li>
  <li><a href="page3.html">Third page</a></li>
</ul>
```

### JavaScript
On each HTML page, call **Navify** on the list, passing the current page's position in the list. For example, on the first page, call the script like this: 

```html
<script type="text/javascript">
  $(function() {
    $('#nav_links').navify(1);
  }
</script>
```

This will style the "First page" link as inactive (because this is the page you're on) and the other links as active. 

**Note that the list index starts at 1, not 0**, because we're following the convention of [jQuery's nth-child selector](http://api.jquery.com/nth-child-selector/). 

### CSS

Navigational links are styled automatically with the following classes: 

1. _nav-inactive_ - the current page's nav link, which should be inactive
2. _nav-active_ - the remaining nav links
3. _nav-highlight_ - used for mouseovers on the active links

You can override these defaults by passing a dictionary of _options_ as a second parameter: 

```html
<script type="text/javascript">
  $(function() {
    var options = {iNav: "new-inactive-class", 
                   aNav: "new-active-class", 
                   hlNav: "new-highlight-class"}
    $('#nav_links').navify(1, options);
  }
</script>
```
