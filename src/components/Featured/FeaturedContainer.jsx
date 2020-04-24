import {connect} from "react-redux";
import {Featured} from "./Featured";

const mapStateToProps = state => {
    return {
        featuredRooms:state.app.featuredRooms
    }
}


const FeaturedContainer =connect(mapStateToProps,null) (Featured)


export default FeaturedContainer