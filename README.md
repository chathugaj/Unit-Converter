# ![ICON](./assets//favicon/favicon.ico) Unit Converter 

[LIVE LINK](https://chathugaj.github.io/unit-converter/index.html)

Unit Converter is an application that provides the user the capability of converting quantities of different measurement units to another type of measurement unit of the same type of measurement.
It contains a simple interface that can be used by any user using devices with variying screen sizes.

![Response design](./doc/responsive_site.png)

## Features
### Existing Features
#### Welcome screen
- This is the landing screen for the application. It contains the application name and a button to continue to the next screen, where the actual converter application is.
![Welcome screen](./doc/welcome_screen.png)

#### Application screen
- This screen contains the converter application. The application contains various features which are listed below with a short description.
![Application](./doc/application.png)

##### Measure type button bar

- In this four buttons bar user can choose which measure type user needs to convert, between mass,temperature,pressure and speed. Selecting a measure type will load the correct measurement units to the application screen
![Button bar](./doc/button_bar.png)

##### Converter area

- Converter area contains two sections, input section and the converted result output section
![Converter area](./doc/converter_area.png)

##### Conversion history
- Conversion history shows the latest five conversions done by a user.
![History button](./doc/history_button.png)
![History view](./doc/history_view.png)

### Features to add
- More measure types can be added
- More measuring units can be supported
- Show the conversion formula

## Testing
### Browser testing
Tested the site with the following browsers.

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### Test matrix

TODO

### Responsiveness

* Tested the responsiveness in the browsers listed above and for different sized devices.
  * Tested the site from width 200px to 2050px using developer tools.
  * Tested the site for different mobile devices with the help of developer tools. Following are the devices tested
    * Pixel 5
    * Pixel 2
    * Surface Duo
    * Apple iPad mini
    * Apple iPad Air
  * Up to width 600px the button bar layout is verticle and after 600px it switches to verticle layout.
  * Maximum width of the website is 2000px

### Problems encountered
* It was an interesting problem to solve the history of the conversions.Finding out how to display the history and how to maitain the history globally. Using W3Schools I found using a modal popup is easy to show the history. Used a global array and pushing the conversion objects to that to keep the conversion history
* Breaking the code into sensible functions was really hard. Using trial and error, figured out to use functions with parameters makes things a bit easier.

### Validator testing
Validated the HTML, CSS and Javascript using W3C Html Validator, Jigsaw Validator and JSHint
* Link to index.html validation [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchathugaj.github.io%2Funit-converter%2Findex.html)
* Link to CSS validation [style.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fchathugaj.github.io%2Funit-converter%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* Javascript validation ![JSHINT VALIDATION](./doc/jshint_validation.png)