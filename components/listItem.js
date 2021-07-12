import React,{Component} from 'react';
import ListDisplay from './listDisplay';
import { connect } from 'react-redux';
import {View} from 'react-native';
import { fetchlatest } from '../actions/index'
import PropTypes from 'prop-types'
import { bindActionCreators} from 'redux';

class ListView extends Component{

    componentDidMount() {
        this.props.fetchlatest()
         
      }
   
    render(){
        return(
            <View>
                <ListDisplay proddata={this.props.latest}></ListDisplay>
            </View> 
        ) 
    }
}

const mapStateToProps = (state => (
    
    console.log(state),
    {
    latest: state.latest.data,
    requesting: state.latest.requesting,
    error: state.latest.error,
  }));

const mapDispatchToProps = {
    fetchlatest
};

/*
function mapStateToProps(state){
    console.log("<<<",state)
    return{
        prod:state.products
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getProduct}, dispatch)
}
*/

ListView.propTypes = {

    fetchlatest: PropTypes.func.isRequired
  };
  
/*ListView.protoTypes={
    dispatch: PropTypes.func
}*/



export default connect(mapStateToProps,mapDispatchToProps)(ListView);