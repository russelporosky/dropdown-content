=== Dropdown Content ===
Contributors: russelporosky
Tags: dropdown, drop-down, select, shortcode
Requires at least: 4.0
Tested up to: 4.6.1
Stable tag: 1.0.0

Allows different content to be displayed based on the value of an author-defined drop-down box.

== Description ==

Use a shortcode to define a drop-down form field, and shortcodes to define blocks of content that will be displayed when a specific entry is selected.

== Installation ==

The plugin is simple to install:

1. Download the plugin, it will arrive as a zip file
1. Unzip it
1. Upload `dropdown-content.zip` directory to your WordPress Plugin directory
1. Go to the plugin management page and enable the plugin

== Usage ==

To add a content dropdown to a post, you can either select the Content Dropdown icon from the TinyMCE editor, or enter the shortcodes manually.

`[dropdown name="controlName" class="customClassName"]` - both `name` and `class` are optional; `name` will default to `dropdown-content`

* the `name` is used to identify which content sections are targetted by this dropdown; if there is only one dropdown on a page, it is optional; if there are multiple dropdowns on a page, each will need a unique name
* `class` can be a space-separated list of class names, or just a single class name
* only `[dropdown-option]` shortcodes may be inside this shortcode

`[dropdown-option value="someValue"]` - the `value` field is technically optional, but is required if this option is meant to make a content block visible

* must be inside a `[dropdown]` shortcode

`[dropdown-content name="controlName" value="someValue"]` - if the `name` matches a dropdown name, and the `value` matches the value of an option within that dropdown, then this content will be displayed when that specific option is selected.

* again, `name` is technically optional, but must match a `[dropdown]` name (also defaults to `dropdown-content`)
* `value` is required, and must match a `value` for a `[dropdown-option]`
* can be anywhere on the page

== Example ==

* Copy and paste the following content to see the plugin in action *

[dropdown]
[dropdown-option]Select one...[/dropdown-option]
[dropdown-option value="option1"]First option[/dropdown-option]
[dropdown-option value="option2"]Second Option[/dropdown-option]
[/dropdown]

[dropdown-content value="option1"]Content for the first option.[/dropdown-content]

[dropdown-content value="option2"]Content for the second option.[/dropdown-content]

Those were all using the default values from the plugin. Let's change it up a bit.

[dropdown]
[dropdown-option value="option1"]The First[/dropdown-option]
[dropdown-option value="option2" default=true]The Second[/dropdown-option]
[dropdown-option value="option3"]The Third[/dropdown-option]
[/dropdown]

You'll notice below that the second option will be displayed by default for you.

[dropdown-content value="option1"]Some different content for the second first option.[/dropdown-content]

[dropdown-content value="option2"]Some different content for the second second option.[/dropdown-content]

[dropdown-content value="option3"]Some different content for the second third option.[/dropdown-content]

== Change Log ==

= v1.0.0 2016/09/22 =

* First public release
