import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Confirm extends Component {

    close(node) {
        ReactDOM.unmountComponentAtNode(node)
        document.body.removeChild(node)
    }

    render() {
        return (
            <div className='Confirm'>
                <div className='Confirm__mask'>
                </div>
                <div className='Confirm__content'>
                    <div className='Confirm__content__title'>{this.props.msg}</div>
                    <div className='Confirm__content__body'>

                        <button className="Confirm__content__body__btn" onClick={
                            () => {
                                this.close(node)
                                this.props.action(true);
                            }
                        }>是</button>

                        <button className="Confirm__content__body__btn" onClick={
                            () => {
                                this.close(node)
                                this.props.action(false);
                            }
                        }>否</button>

                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {

        // this.props.action(true)  // 完成挂载

    }
}


let node = null;

const confirm = async function (msg) {
    return new Promise(resolve => {
        node = document.createElement('div')
        document.body.appendChild(node)

        ReactDOM.render(<Confirm msg={msg} action={
            res => {
                resolve(res)
            }
        } />, node)
    })
}


export default confirm
