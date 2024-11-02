import useInputState from "../../hooks/useInputState";

const CustomHookForm = () => {
    // const [name, handleNameChange] = useInputState('');
    const emailState = useInputState('');

    const handleSubmit = e => {
        console.log('From Hook', emailState.value);
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;