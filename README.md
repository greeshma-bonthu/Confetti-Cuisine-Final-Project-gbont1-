# Confetti Cuisine 
___
### Return date dynamic validation
 - Front-end validation leveraging the 'min' attribute of the HTML date input type using a script to update 'min' on each change of the Departure date.
- Back-end validation using custom validator for the Vacation schema.

- The above options will do the automatic prompt to select a return date. As many air booking websites ask for a round trip enquiring the return date it is implemented here as well. This is perfomred using the custom validator in the vacation schema. Also the return date maintained to be a future date from the departure date.
___
### Authentication
- Protecting routes using a middleware to authorize requests.
- Only a logged-in user can ADD, EDIT or DELETE Vacations. Non-logged-in users are redirected to the login page if requested.
- All users can view the list of all Vacations
- It would be preferable that only an authenticated, logged-in user should be able to create a new vacation package and edit/delete an existing oneThe create, edit and delete options can be only done by the user who is provided with the authentication. While rest of the users can view the list of all the vacations but they will not be allowed to do the above mentioned options. 
___
### Weather Information
- Weather Information of the destination powered by the [OpenWeatherMap API](https://openweathermap.org/api)
- Sending API requests using 'axios' on the server.
- Add calls to some external service's API URI endpoints and integrate them into the application and its interface.
- External user call service's API is hosted on the runtime and the same is integrated into this web application. AS well as the interface is updated according to this update.
___
### Minor
- On Vacation CREATE and EDIT pages, replaces the Hero image text input with a drop down selector
- Finally an update is performed like adding a drop down selector option instead of the default Hero image text input that is created in the original provided file.
___
### Issues Faced:
- in the return date implementation the validation part was difficult but was able to understand through some online research. even after finding the right method there was some error and finally sorted it out
- the external service's API inclusion was quite challenging and that took so much of the time. While these extra credits has given a good learning around the additional concepts

