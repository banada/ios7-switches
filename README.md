IOS 7 Switches
=============

![Screenshot](https://raw.githubusercontent.com/tujamaica/ios7-switches/master/screenshot.png "Screenshot")

IOS 7 toggle switches written in pure CSS. No javascript required.

There are two steps required. 
The first one is to add a switch class to the checkbox or radio input element.

The second one is to add a label right next to the input.
Note that the "for" attribute on the label tag must match the "id" attribute on the input element. If you forget that, your switches won't toggle.

```xml
<input type="checkbox" class="switch" id="cb" />
<label for="cb"></label>
```

You can also add some color to the switches. Like twitter bootstrap, you also have a switch-(warning|danger|info) class available.

```xml
<input type="checkbox" class="switch switch-warning" id="cb" />
<label for="cb"></label>
```

Hope you like it. Cheers.
