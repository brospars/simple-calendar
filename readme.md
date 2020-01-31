# Simple Calendar
![preview](assets/simple-calendar.gif)

A simple and easy plugin to create a calendar and add events to it.

## Usage

### Including files

You need to include :
- A recent version of [JQuery](https://jquery.com/)
- The javascript file ``jquery.simple-calendar.js``
- The stylesheet ``simple-calendar.css``

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="jquery.simple-calendar.js"></script>
<link rel="stylesheet" type="text/css" href="simple-calendar.css" />
```

### Simple usage
Inside a ``$(document).ready();`` function you need to call the plugin on a container jquery element :
```javascript
$(document).ready(function(){
    $("#container").simpleCalendar();
});
```

This initialize the calendar with its default settings.

### Usage with options

To customize its settings simply overwrite them like below :

```javascript
$(document).ready(function(){
    $("#container").simpleCalendar({
        //Defaults options below
        //string of months starting from january
        months: ['january','february','march','april','may','june','july','august','september','october','november','december'],
        days: ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'],
        displayYear: true,              // Display year in header
        fixedStartDay: true,            // Week begin always by monday
        displayEvent: true,             // Display existing event
        events: [],                     // List of events
        onInit: function (calendar) {}, // Callback after first initialization
        onMonthChange: function (month, year) {}, // Callback on month change
        onDateSelect: function (date, events) {} // Callback on date selection
    });
});
```

#### Events

Events are json object that contains `startDate`, `endDate`, and `summary`
```javascript
{
    startDate: Date|timestamp|ISOstring,
    endDate: Date|timestamp|ISOstring,
    summary: string
}
```
