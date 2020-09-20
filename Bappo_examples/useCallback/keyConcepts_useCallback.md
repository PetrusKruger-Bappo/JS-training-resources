# Key Concepts of the useCallback hook

* Predominently use when you want to create a function within a component property, but don't want a new function to be created upon each render.
* It's an addition to the `React.memo` functionality.
  * `React.memo` will check if anything has changed and only re-render upon change, but without a `useCallback` implementation, the callback function does change.
*  