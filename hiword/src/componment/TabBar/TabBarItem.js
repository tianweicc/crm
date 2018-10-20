import React, { Component } from 'react';
import {Image} from 'react-native';

export default class TabBarItem extends Component {

    static defaultProps = {
        tintColor: null,
        focused: null,
        normalImage: null,
        selectedImage: null,
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tintColor: props.tintColor,
            focused: props.focused,
            normalImage: props.normalImage,
            selectedImage: props.selectedImage,
        };
    }

    render() {

        return(
            <Image source={this.state.focused ? this.state.selectedImage : this.state.normalImage}
                   style={{
                       //tintColor: this.state.tintColor,
                       width: 24,
                       height: 24,
                       marginRight: 2,
                   }}/>
        );
    }
}
