import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component {
    renderItem(library){
        return <ListItem library={library} />
    }

    render(){
        return(
           <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library)=> library.id.toString()}
           />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};
//takes global state object and provides properties as props to LibraryList

export default connect(mapStateToProps)(LibraryList);
//Calls connect function. When connect is called, it returns another function.
//It then immediately calls that function with LibraryList as an argument. 