/**
 * Created by iwangx on 2018/8/27.
 */

import React, {PureComponent} from "react"

import PropTypes from "prop-types"

import {
    View,
    NativeModules,
    Alert
} from "react-native"

import {
    HomeRow
} from "../components"

const {
    RNInterestQQ
}  =NativeModules;

class Home extends PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {};

    static defaultProps = {};

    componentDidMount() {

    }

    checkClientInstalled = ()=>{
        RNInterestQQ
            .checkClientInstalled()
            .then(e=>{
                Alert.alert(JSON.stringify(e));
            }).catch(e=>{
            Alert.alert(JSON.stringify(e))
        });
    }

    login = ()=>{
        RNInterestQQ
            .login()
            .then(e=>{
                Alert.alert(JSON.stringify(e));
            }).catch(e=>{
                Alert.alert(JSON.stringify(e))
        });
    };

    loginOut = ()=>{
        RNInterestQQ
            .loginOut()
            .then(e=>{
                Alert.alert(JSON.stringify(e));
            }).catch(e=>{
            Alert.alert(JSON.stringify(e))
        });
    };


    shareToQQ = ()=>{
        // RNInterestQQ.shareToQQ(
        //     "这里是分享标题",
        //     "desc",
        //     "http://text/plain",
        //     "",
        //     "appname",
        //     0
        // ).catch(e=>{
        //     console.log(e);
        // });

        RNInterestQQ.shareText("123213123",0)
    };

    render() {
        const {
            props,
            state
        } = this;

        return (
            <View>
                <HomeRow
                    text={"checkClientInstalled"}
                    onPress={this.checkClientInstalled}
                />
                <HomeRow
                    text={"Login"}
                    onPress={this.login}
                />
                <HomeRow
                    text={"LoginOut"}
                    onPress={this.loginOut}
                />
                <HomeRow
                    text={"shareToQQ"}
                    onPress={this.shareToQQ}
                />


            </View>
        )
    }
}

export default Home