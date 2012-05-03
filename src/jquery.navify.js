/**
 * Title:       jquery.navify.js
 * Description: jQuery plugin to easily inactivate the current page's 
 *              navigational link    
 * Author:      Matthew Norris
 */

 // Anonymous function wrap to avoid conflicts
 (function($) {
	
    /***************************************************************************
 	 * Navify
 	 **************************************************************************/
	
	/**
	 * Allows the same basic HTML for each page in a site, but with a simple 
	 * call attached to the navigational UL element, it transforms the list 
	 * into a navigation bar, using CSS to activate and deactivate links. 
	 *  
	 * Note that the nthItem parameter starts at 1, not 0.
	 * 
	 * @param {int} nthItem
	 * @param {dictionary} options
	 * 
	 * See the page below for variable notation. 
     * @see: http://www.joelonsoftware.com/articles/Wrong.html
     * 
     * c = count
     * css = CSS classname
     * a = active
     * i = inactive
     * t = text
	 */ 
	$.fn.extend({
		tabify: function(nthItem, options) {
			var defaults = {
				aNav: "nav-active", // class name for the active nav links
				iNav: "nav-inactive", // class name for the current nav link
				hlNav: "nav-highlight" // class name for mouseovers 
			}
			
			var opts = $.extend(defaults, options);
			
			return this.each(function() {
				var $list = $(this);
				
				// Deactivate the current page's list item by styling it 
				// appropriately and deactivating its link. 
				var aItem = $("li:nth-child(" + nthItem + ")", $list);
				aItem.addClass(opts.iNav).click(function() {
					return false;
				});
				
				// Activate the remaining list items, enlarge their 
				// target areas, and style them. 
				var iItems = $("li:not(." + opts.iNav + ")", $list);
				
				iItems.click(function() {
					window.location = $("a:first", this).attr("href");
				})
				.addClass(opts.aNav)
				.live("mouseover mouseout", function() {
					$(this).toggleClass(opts.hlNav);
				});
			});
		} // navify
	}); // $.fn.extend
 })(jQuery);
