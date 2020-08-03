=== The Events Calendar Shortcode & Block ===
Contributors: brianhogg
Tags: event, events, calendar, shortcode, modern tribe
Requires at least: 4.1
Requires PHP: 5.3
Tested up to: 5.5
Stable tag: 2.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adds shortcode and block functionality to The Events Calendar Plugin (free version) by Modern Tribe, so you can easily list your events anywhere.

== Description ==

**Get your events displayed in a customizable list wherever you need them, with The Events Calendar Shortcode and Block!** This plugin fully integrates with The Events Calendar Plugin (free version) by Modern Tribe.

This plugin adds a shortcode and a WordPress block for use with The Events Calendar WordPress Plugin (by Modern Tribe).

Display a list of your events by either adding a block in the new editor, or adding a shortcode to any post, page, or widget.

Here’s a quick video showing you what you can do:

[youtube https://www.youtube.com/watch?v=_hpfuoa6MZM]

<blockquote>
If you need extra design and functionality, <a href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme&utm_content=description">Get The Events Calendar Shortcode Pro</a>! The Pro version offers seven designs, additional filtering options, and full control over how your events display.

You get the same full integration with The Events Calendar, plus premium support, show multiple shortcodes on one page, and it works with any WordPress theme.

<a href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme&utm_content=description">Check out the Pro version today</a>
</blockquote>

Trusted by 20,000+ WordPress sites and a 4.5 star rating on WordPress.org, The Events Calendar Shortcode and Block is the solution you’ve been after :)

**How to use The Events Calendar Shortcode**

You can use the shortcode or block to add a list of your events, filtered by various options. Here’s an example of how you’d show the next 8 events in the category festival:

`[ecs-list-events cat="festival" limit="8"]`

You can also filter the shortcode to choose from the following options:

* Category: show events from specific categories.
* Number of events: choose the number of events to show.
* Event order: Order in which your events are shown (latest first or last).
* Event dates: Show or hide the date.
* Event venue: Show or hide the venue.
* Event excerpt: Show or hide the event excerpt, and set an excerpt length.
* Thumbnail: Show or hide a thumbnail image.
* View all events link: Choose whether to include a “view all events” link or not.
* Events from a specific month: show only events from specific months (including current or next month).
* Previous events: Show previous events.
* Hide started events: Hide events when their start time passes.

This gives you full control over how your events are displayed, and is perfect for non-profits, charities, businesses, conferences, and anyone with a WordPress website showing events.

You’ll find a full list of how to use these options in the shortcode below in the plugin’s FAQs.

<blockquote>
<h3>With Pro, choose your design and get even more control</h3>

<a href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme&utm_content=description">The Events Calendar Shortcode Pro</a> adds extra designs, including a true calendar view, compact and column-based designs, and advanced features like events grouped by day.

Plus, get advanced control over how your events display:

<ul>
<li><strong>Events in the next week:</strong> Show events happening in the next X days, for example tomorrow, next week, or next month.</li>
<li><strong>Only specific days:</strong> Show only events on specific days.</li>
<li><strong>Display events by location:</strong> Choose to show events by city, state, or country!</li>
<li><strong>Only featured events:</strong> Show only events you mark as featured.</li>
<li><strong>Full event description:</strong> Show the full event description, instead of just a short excerpt.</li>
<li><strong>Only show start time:</strong> Just show the start time of your event.</li>
<li><strong>Hide recurring events:</strong> Only show the first instance of a recurring event.</li>
<li><strong>Custom design:</strong> Create your own templates, or use one of the seven built-in options.</li>
<li><strong>Plus much more:</strong> <a href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme&utm_content=description">check out The Events Calendar Shortcode Pro details here</a>.</li>
</ul>

<a href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme&utm_content=description">The Events Calendar Shortcode Pro</a> is ideal for non-profits, charities, businesses, conferences, developers, and WordPress agencies who need the extra control and support straight from the plugin developer. <a href="https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme&utm_content=description">Check it out here</a>.
</blockquote>

This plugin is not developed by or affiliated with The Events Calendar WordPress plugin or Modern Tribe in any way.

== Installation ==

1. Install The Events Calendar Shortcode Plugin from the WordPress.org repository or by uploading the-events-calendar-shortcode folder to the /wp-content/plugins directory. You must also install The Event Calendar Plugin by Modern Tribe and add your events to the calendar.

2. Activate the plugin through the Plugins menu in WordPress

3. If you don't already have The Events Calendar (the calendar you add your events to) you will be prompted to install it

You can then add The Events Calendar Block or `[ecs-list-events]` shortcode to the page or post you want to list events on.  [Full list of options available in the documentation](https://eventcalendarnewsletter.com/events-calendar-shortcode-pro-options/?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme-install-docs&utm_content=description).

== Frequently Asked Questions ==

= What are the shortcode and block options for customizing my events? =

Here’s the full list of shortcode and block options you can use to customize how your events display:

* Basic shortcode: `[ecs-list-events]`
* cat - Show events from an event category `[ecs-list-events cat='festival']` or specify multiple categories `[ecs-list-events cat='festival, workshops']`
* limit - Total number of events to show. Default is 5. `[ecs-list-events limit='3']`
* order - Order of the events to be shown. Value can be 'ASC' or 'DESC'. Default is 'ASC'. Order is based on event date. `[ecs-list-events order='DESC']`
* date - To show or hide date. Value can be 'true' or 'false'. Default is true. `[ecs-list-events eventdetails='false']`
* venue - To show or hide the venue. Value can be 'true' or 'false'. Default is false. `[ecs-list-events venue='true']`
* excerpt - To show or hide the excerpt and set excerpt length. Default is false. `[ecs-list-events excerpt='true']` //displays excerpt with length 100
 excerpt='300' //displays excerpt with length 300
* thumb - To show or hide thumbnail image. Default is false. `[ecs-list-events thumb='true']` //displays post thumbnail in default thumbnail dimension from media settings.
* thumbsize - Specify the size of the thumbnail. `[ecs-list-events thumb='true' thumbsize='large']`
* thumbwidth / thumbheight - Customize the thumbnail size in pixels `[ecs-list-events thumb='true' thumbwidth='150' thumbheight='150']`
* message - Message to show when there are no events. Defaults to 'There are no upcoming events at this time.'
* viewall - Determines whether to show 'View all events' or not. Values can be 'true' or 'false'. Default to 'true' `[ecs-list-events cat='festival' limit='3' order='DESC' viewall='false']`
* contentorder - Manage the order of content with commas. Default to `title, thumbnail, excerpt, date, venue`. `[ecs-list-events cat='festival' limit='3' order='DESC' viewall='false' contentorder='title, thumbnail, excerpt, date, venue']`
* month - Show only specific month (in YYYY-MM format). Type `'current'` for displaying current month only or `'next'` for next month. `[ecs-list-events cat='festival' month='2015-06']`
* past - Show Outdated Events. `[ecs-list-events cat='festival' past='yes']`
* key - Hide events when the start date has passed `[ecs-list-events cat='festival' key='start date']`
* orderby - Change the ordering to the end date `[ecs-list-events orderby="enddate"]`

With [The Events Calendar Shortcode PRO](https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme-faq-options&utm_content=description) you also get the following options:

* design - Shows improved design by default. Set to 'standard' for the regular one, 'compact' for a more compact listing, 'calendar' for a monthly calendar view, 'columns' to show a horizontal/columns/photo view, or 'grouped' to group events by day
* days - Specify how many days in the future, for example `[ecs-list-events days="1"]` for one day or `[ecs-list-events days="7"]` for one week
* tag - Filter by one or more tags.  Use commas when you want to filter by multiple tags.
* id - Show a single event, useful for displaying details of the event on a blog post or page
* location (city, state/province, country) - Display events by location.  Use commas when you want to include events from multiple (ie. country='United States, Canada')
* description - Use the full description instead of the excerpt of an event in the listing
* raw_description - Avoid filtering any HTML (spacing, links, bullet points, etc) in the description
* raw_excerpt - Avoid filtering any HTML (spacing, links, etc) in the excerpt
* featured only - Show only events marked as "featured"
* date - Show only events for a specific day `[ecs-list-events date='2017-04-16']`
* year - Show only events for a specific year `[ecs-list-events year='2017']`
* date range - Show only events between certain days `[ecs-list-events fromdate='2017-05-31' todate='2017-06-15']`
* timeonly - To show just the start time of the event. `[ecs-list-events timeonly='true']`
* offset - Skip a certain number of events from the beginning, useful for using multiple shortcodes on the same page (with ads in between) or splitting into columns
* custom design - Create one or more of your own templates for use with the shortcode
* filter bar - Allow the user to filter the events shown in the full calendar design (ie. by category, state/province, country, venue, etc)
* hiderecurring - To only show the first instance of a recurring event, set to 'true'

[Get The Events Calendar Shortcode & Block PRO](https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme-faq-options-bottom&utm_content=description)

= Can I use this plugin to list my events using the new WordPress 5.0 editor (Gutenberg)? =

Yes! There is now a block to list your events anywhere in a page or post, just click "+" in the top-left and search for The Events Calendar Block (under Common).

= How do I use this shortcode in a widget? =

You can put the shortcode in a text widget (as of WordPress 4.7). If a regular text widget doesn't work, put the shortcode in a <a href="https://wordpress.org/plugins/black-studio-tinymce-widget/">Visual Editor Widget</a>.

= What are the classes for styling the list of events? =

By default the plugin does not include styling. Events are listed in ul li tags with appropriate classes for styling with a bit of CSS.

* ul class="ecs-event-list"
* li class="ecs-event" and "ecs-featured-event" (if featured)
* event title link is H4 class="entry-title summary"
* date class is time
* venue class is venue
* span .ecs-all-events
* p .ecs-excerpt

Want a better looking design without knowing any CSS?  Check out [The Events Calendar Shortcode & Block PRO](https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme-faq-design&utm_content=description)

= How do I include a list of events in a page template? =

`<?php echo do_shortcode("[ecs-list-events]"); ?>`

Put this in the template where you want the events list to display.

= How do I include a monthly calendar view instead of a list? =

The [pro version of the plugin](https://eventcalendarnewsletter.com/the-events-calendar-shortcode?utm_source=wordpress.org&utm_medium=link&utm_campaign=tecs-readme-faq-calendar&utm_content=description) has the option to put `design="calendar"` in the shortcode (or pick Calendar as the design with the block) to show a calendar view of the events you want.

== Screenshots ==

1. Show your events from The Events Calendar (by Modern Tribe) in a list, and customize specifically which events you’re displaying
2. Add a block in the page or post where you want your events to appear, and select the display options you want (new WordPress 5.0 editor or Gutenberg plugin)
3. You can also add the shortcode where you want the list of events to appear on any WordPress post, page, or widget
4. Many settings you can use in the shortcode to change what details appear in the events listing

== Upgrade Notice ==

= 2.4 =
* Updating block script dependencies

= 2.3.1 =
Adds link to full documentation

== Changelog ==

= 2.4 =
* Updating block script dependencies

= 2.3.1 =
* Adds link to full documentation and short walk-through video
* Developers: Adds additional param to the ecs_start_tag filter with the number of events

= 2.3 =
* Fix for using order='DESC' to order events in descending order by event date, with the latest version of The Events Calendar (by Modern Tribe)

= 2.2.1 =
* Adds block description

= 2.2 =
* Compatibility fixes with Divi

= 2.1 =
* Disables the new WP editor block if Cornerstone page builder is active due to incompatibilities

= 2.0.2 =
* Additional check if wp_set_script_translations exists (not with the Gutenberg plugin)

= 2.0.1 =
* Tweaks to handling of default values in the block

= 2.0 =
* Adds a block in addition to the shortcode that can be used with the new WordPress editor (as of version 5.0) or Gutenberg plugin

= 1.10.1 =
* Fixing error with very old versions of PHP

= 1.10 =
* Fix for multi-word category names not working with the "cat" option
* Option to show "powered by" link

= 1.9 =
* Adds check for minimum WordPress and PHP version
* Adds a link to a short tutorial video
* Changes first example shortcode so it's easier to copy/paste

= 1.8 =
* Adds new orderby='title' option
* Fixes resetting the WordPress global query instead of just the post data

= 1.7.3 =
* Hide the "at" when using venue='true' and an event has no venue
* Adds additional WordPress filters to hide certain events

= 1.7.2 =
* Adds the ability to use schema='false' in the shortcode to hide the schema output

= 1.7.1 =
* Fix for month option where there's an all-day event the first day of the next month
* Fix for "There are no events" string not being translated automatically into other languages

= 1.7 =
* Adds structured data to the shortcode output (great for SEO and people finding your events)

= 1.6.1 =
* Added ecs-featured-event class if event is featured
* Internal changes to filtering by one or more categories

= 1.6 =
* Changes default ordering by the start date, use orderby="enddate" for previous default ordering

= 1.5.3 =
* Fixes translation of the "View all events" link into other languages
* Adds orderby parameter to order by start date, but still show events until the end date has passed

= 1.5.2 =
* Adds 'next' option for showing the next month of events

= 1.5.1 =
* Adds thumbsize option (ie. medium, large, thumbnail, full)

= 1.5 =
* Adds ability to translate the plugin into local languages
* Additional description of options

= 1.4.2 =
* Additional filter for changing the link for an event
* Adds category CSS classes for each event, so you can format each category differently

= 1.4.1 =
* Additional filters for formatting a single event

= 1.4 =
* Checks for whether The Events Calendar is installed
* Additional filters
* Improved design of shortcode help page

= 1.3 =
* Fixes issue with "viewall" showing the events twice
* Fixes time zone issue by using current_time() instead of date()
* Hides events that are marked 'hide from listing'
* Switches to tribe_get_events() to get the events
* Removes the ... from the end of the excerpt if less than the excerpt length
* Adds date_thumb option
* Adds additional filters

= 1.2 =
* Updates author/description (Event Calendar Newsletter / Brian Hogg Consulting)

= 1.0.11 =
Add Link to Thumbnail
merge pull request from d4mation -Replaced extracted variables with $atts as using extract was deprecated
=1.0.10 =
Minor Error Change - fix  name and slug
= 1.0.9 =
Minor Error Change - Multiple Categories
= 1.0.8 =
Add options : multi-categories - Thanks to sujin2f
= 1.0.7 =
Add options : contentorder, month, past, key  - Thanks to sujin2f
= 1.0.6 =
Fix missing ul
= 1.0.5 =
* Add excerpt and thumbnail - Thanks to ankitpokhrel
= 1.0.2 =
* Add venue to shortcode - Thanks to ankitpokhrel
= 1.0.1 =
* Fix Firefox browser compatibility issue
= 1 =
* Initial Release
