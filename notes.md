Count component rerenders with field input. We only want it to rerender if props or state changes.

Optimize Count:

- wrap Count function in React.memo()

If we want to pass in props to count:

    add to <Count /> in App.js:

onOdd={() => {
setText('')
}}

- add to onClick in Count:

if (count % 2 === 0) {
onOdd()
}

When the count gets to odd number, it resets text but breaks the memo optimization. It checks for shallow equality so it works for stings and numbers, but doesnt work for objects and functions

To optimize onOdd function:

    - write onOdd function above return in a useCallback hook and change from function to prop.  Add setText to dep array on useCallback:

const onOdd = useCallback(() => setText(''), [setText])

onOdd={onOdd}

typing doesn't cause rerender now

If we have an object in the parent function, it breaks the memo due to the shallow equality check not passing

    - add data object to parent

const data = {
isEven: false
};

To optimize components with object:
For parent function:

    - wrap object in useMemo

const data = useMemo(() => ({ isEven: false }), []);

    - add isEven prop to <Count />

To optimize child:

    - add prop compare function to the memo function:

(prevProps, nextProps) => {
if(prevProps.data.isEven !== nextProps.data.isEven) {
return false
}
return true
}

no more unwanted rerenders
