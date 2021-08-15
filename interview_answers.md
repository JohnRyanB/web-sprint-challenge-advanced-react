# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component? 

A functional component does not utilize state directly, it just accepts data as props as arguments and returns a React element. You want to use functional components when state is not required to be changed for app simplicity and reusability

A stateful(Class) component utilizes state and requires a render method which returns HTML. You can also use React Lifecycle methods with stateful comopnents (componentDidMount/componentWillUpdate/componentWillUnmount) You extend React in stateful components. You want to use a stateful component when state is being utilized/changed

2. When does a componentWillMount function be called? What about a componentWillUpdate?

 componentWillMount is called before the render method is executed, meaning that setting a state here does not trigger a rerender. componentWillUpdate is invoked whenever new props are passed to the component or when the state is changed.

3. Define stateful logic.

Stateful Logic is storing values, usually user entered, and performing logic operations on those values.


4. What are the three step of creating a successful test? What is done in each phase?
Arrange, Act, Assert

When you Arrange, you are setting up the test case i.e. rendering the page and defining your variables and elements 

Act is where you manipulate the arranged elements, i.e. clicking buttons or typing in fields

Assert is where you check the results of your 'Act' phase actions to make sure you are getting the desired results. i.e. ensuring a email field throws the proper error messages if an invalid format email address is entered.