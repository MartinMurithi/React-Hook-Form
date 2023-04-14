//register allows us to manage state using rhf

=>React hook form, a library tha allows users to manage form state, submit form data and enforce validations
=> register, used for managing form state.
=> register returns for methods namely: name, ref, onBlur, onChange

//This is what happens under the hood
=> const {name, ref, onChange, onBlur} = register("email);
<input type ="" id="" onChange = {onChange} onBlur={onBlur} ref={ref} name={name}>
//When you have alot of input, ou'll need to write alot of code
=>This is the simpler way
    <input type = "text", id="username" {...register("username")}>
=>To visualize how ract hook form manages our forms, we use a tool called react hook from dev tool
    npm i @hookform/devtools
=>Import it
=>Outside the form, you can call it and pass props inside for control
    //<DevTool control = {control}/>
    //control, is an pbj imported from the useForm, it registers components in rhf
=>In the top right corner, an icon will appear with the fields of our form
    Touched, indicates wheteher the field has been interacted with
    Dirty, indicates whether the field has changed

=>To submit the form, you destructure the handleDubmit method from the use form
=>Create an onSubmit function that will will be called in the onSubmit event
=><from onSubmit={handleSubmit(onSubmit)}> //this will allow the form to be submitted
