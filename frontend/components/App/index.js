import React, { Component } from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { creators as appActions }from 'actions/app';
import Classes from './style.scss';
import ProductRatingYellow from 'images/product-rating-yellow.svg';
import Icon from 'components/Icon';
import store from 'store';

@connect(
    state => ({
        isFetching: state.app.isFetching,
        greetingText: state.app.greetingText,
    }),
    (dispatch) => ({
        actions: bindActionCreators(appActions, dispatch),
    }))
class App extends Component {
    componentWillMount() {
        this.props.actions.appFetchData();
    }
    render() {
        if (this.props.isFetching) {
            return (
                <div className={Classes.loading}>Application is loading...</div>
            );
        }

        const { greetingText } = this.props;
        return (
            <div>
                <h1 className={Classes.greeting}>{greetingText}</h1>
                <div>
                    <span>Example of svg:</span>
                    <Icon glyph={ProductRatingYellow}/>
                </div>

                <div>
                    <span>Example of png:</span>
                    <span className={Classes.pngImage}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("app"),
);