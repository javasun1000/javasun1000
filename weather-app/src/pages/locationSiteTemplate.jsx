export default ({pageContext: {coordinates}}) => {
    //pageContext must match the context being passed to this component from gatsby-node.js
    <LocationListComponent location={coordinates} />
    //not sure where we enter multiple variables - in the component or in the export default?  LEaving as one variable
    //https://christinavhastenrath.medium.com/rest-apis-in-gatsby-at-runtime-89a89dd976d7#:~:text=If%20you%20are%20new%20to,js%20file.

}

class LocationListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[],
        };
    }

    componentDidMount() {
        //eslint-disable-next-line react/destructuring/assignment
        const thisLocation = this.props.location;
        //accepting the data passed into the component

        //below, use thisLocation as a variable in the axios API call, then assign the returned data into the data[] array.

        axios.get(`https://api.weather.gov/points/${thisLocation}`).then((response) => {
            this.setState({data: response.data});
        });
        //return the state after setting it.
        //if gatsby-node calls this component multiple times, this resets the state.
        return this.state;
    }
    
}

render() {
    //for each iteration that gatsby-node is invoking this component, 
    //create a local data object within render() to accept the data stored in the state,
    //as you cannot call the data from state directly from the constructor above
    const { data } = this.state;
    const { location } = this.props;

    return (
        <div>
            <div className="blorp">
                {data.map((info) =>
                <div>
                    {info.properties.relativeLocation.properties.city}
                </div>
                )}
            </div>
            <div className="blorp">
                {location}
            </div>
        </div>
        
    )


}