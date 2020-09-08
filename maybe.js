const redux = require('redux')
//in react we would use "import react from 'react'"
//but since this is vanilla .js, we use 'require'
const createStore = redux.createStore;


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


function buyCake(){
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIceCream(){
  return {
    type: BUY_ICECREAM,
  }
}

// (previousState, action) => newState

const initialState= {
  x: 0,
  y: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      x: state.x - 1
    }

    case BUY_ICECREAM: return {
      ...state,
      y: state.y - 1
    }
    default: return state
  }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()


----------------------------------RUBY LIKELY SOLUTION
test = [
  [ 1, 0 ], [ 1, 0 ], [-1, 0]
];
array=[]
poop = test.reduce([0,0]) do |previous, current|
  x = (previous[0]+current[0])
  y = (previous[1]+current[1])
  p poop = [x, y]
  poop.each do |value|
    array << value
  end
end
p array


// ———.reduce / .inject
// result = [3, 4, 5, 6, 7].reduce(1) do |previous, current|
//   puts "the previous valuse is #{previous}"
//   puts "the current valuse is #{current}"
//   previous * current
// end
// p result




