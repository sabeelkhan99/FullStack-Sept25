## Lifecycle Sequence in Action
**Constructor**: Initializes the state with an empty to-do list and empty new to-do item.\
**Render**: Renders the initial UI, which shows a heading, an empty list, an input box, and a button.\
**Component Did Mount**: Fetches initial to-do items after the component is mounted. After 1 second, it updates the state with the fetched to-dos.\
**Render**: Runs again due to the state change and updates the UI with the fetched to-dos.\
**Component Did Update**: Runs after the state update and logs the new to-do items.\
**Render**: Runs whenever a new to-do is added via the input box and button.\
**Component Will Unmount**: Would run when the component is about to be removed from the DOM, cleaning up any resources.

Link: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Differences and Comparison

Simplicity and Readability: Functional components are generally easier to read and write. They involve less boilerplate code and are more concise.

Hooks: Hooks provide powerful features that are not available in class components, such as useState, useEffect, useContext, etc. They allow you to reuse stateful logic without changing your component hierarchy.

Avoiding this Keyword: Functional components do not use the this keyword, which can be confusing and error-prone in class components.

Better Performance: Functional components can be more performant because they are stateless by default. With hooks, you can manage state more efficiently.

Encapsulation of Logic: Hooks allow you to encapsulate and reuse logic more easily. Custom hooks enable the extraction of complex logic into reusable functions.


## How does React use Virtual DOM?

1. React follows the observable pattern and listens for state changes.
2. In React every UI piece is a component, and each component has a state. When the state of a component changes, React updates the virtual DOM tree.
3. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”.
4. Once React knows which virtual DOM objects have changed, then React updates only those objects, in the real DOM. This makes the performance far better when compared to manipulating the real DOM directly. This makes React stand out as a high-performance JavaScript library.
5. React follows a batch update mechanism to update the real DOM.
6. Hence, leading to increased performance. This means that updates to the real DOM are sent in batches, instead of sending updates for every single change in state.

## Use of Keys

React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. 

```html
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

