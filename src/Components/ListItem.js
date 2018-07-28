import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as actions from '../actions';

class ListItem extends Component{
    componentDidUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        if (this.props.expanded) {
            return (
                <CardSection>
                    <Text style={{flex:1}}>{this.props.library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render(){
        const { titleStyle } = styles;
        const { title } = this.props.library.item;

        return(
            <TouchableWithoutFeedback
                onPress = {() => {
                    this.props.selectLibrary(this.props.library.item.id)
                }}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem); 