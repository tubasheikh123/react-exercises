// Use props to set heading and slogan.

const Header = (props) => {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h3>TODO: complete this</h3>
        </div>
    )
}

const Exercise2 = () => {
    return (
        <Header heading="Baham!" />
    );
}

export default Exercise2;