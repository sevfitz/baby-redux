<img src="https://user-images.githubusercontent.com/478864/29585764-2e2a863c-873d-11e7-8c68-49af939ab39b.png" 
height=30> Baby Redux
===

Create a greeter app that utilizes redux for state management. 

The app should look something like:

<img alt="app" src="https://user-images.githubusercontent.com/478864/29789843-393f383e-8bec-11e7-8a8d-c736ee1fd22a.png" height="100">

With the greeting display made up of html like:

```
<div>
  <span>{salutation}</span>
  <span>{name}</span>!
</div>
```
And an editor component with two `input` controls and a "Reset" button that
dispatch the following respective actions (`onChange` for `input`s, `onClick` for `button`):

1. Update Salutation
2. Update Name
1. Reset (clear) the Salutation and Name (from state)

## Testing

* Action Creators
* Reducer(s)

## Rubric *10pts*
- provider/store setup in index *2pt*
- reducer *2pt*
- actions *2pt*
- constants *2pts*
- containers *2pt*
