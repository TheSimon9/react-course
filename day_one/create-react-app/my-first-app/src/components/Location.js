import changeLocation from "../store/actions/locationActions";
import {connect} from "react-redux";

function Location(props) {
  return <div onClick={() => props.changeLocation("Prova")}>{props.location}</div>
}


const mapStateToProps = ({location}) => ({
  location
});

const mapDispatchToProps = (dispatch) => ({
  changeLocation: (location) => dispatch(changeLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(Location);