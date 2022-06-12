## Reservations and Food example app in Typescript using redux toolkit 
---

This is based on a Youtube tutorial by Laith Harb [React with redux toolkit crash course](https://www.youtube.com/watch?v=jR4fagDcvrc&t=2221s).

### Approach

1. Create the app using 
    ```
    npx create-react-app reduxtoolkitexample --template typescript
    ```
1. Install both react-redux and redux toolkit using
    ```
    npm i react-redux @reduxjs/toolkit
    ```
1. Create the store in the app folder using the {createStore} import from react toolkit. Remember to export the RootState type which needs to be used in the components when useSelector is called.
1. Create the first slice in the feature folder for reservations. Export the actions and the reducer.
1. import {Provider} from react-redux and place it in the index.js.
1. Use {useSelector, useDispatch} from react to get the global reservations state. And import the actions that were exported from the slices to edit any global state. Be sure to wrap the action with the dispath variable which is earlier to be set equal to useDispatch().
1. For this for the food bit, you'll need to use uuid. npm i uuid, and to stop visual studio code from yelling at you, do npm i --save-dev @types/uuid.
