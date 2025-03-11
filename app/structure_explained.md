# Structure Explained    
_______________________________________________________________________________
### Tabs

The navigation bar at the bottom of the app 
has 4 distinct screens (or tabs):

The `(tabs)` directory is how you group routes in Expo

1. The home screen of the app. `(tabs)/index.tsx` 
2. The the search screen of the app. `(tabs)/search.tsx` 
3. A bookmark screen for saving movies. `(tabs)/saved.tsx` 
4. A user profile screen. `(tabs)/profile.tsx` 

_______________________________________________________________________________
### Movie details screen

There is also a fifth screen that does not a part of the navigation bar.

This is a screen that appears when the user selects a movie.

This screen loads and displays the image and details of the movie that the
user selected.

Rather than have a route for every single movie, which will be extreamely
tedious, all of the movies will share one layout and so this is naturally
a use-case for a dynamic route.

`app/movies/[id].tsx`

All the movies will share the movies layout, and that layout will show the
image and correct details of the movie based on the movie id [id], 
which is both the file name and a variable.

_______________________________________________________________________________
