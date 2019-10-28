import React, { Component } from 'react';

import confirm from './confirm'; 

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { msg: '' };
    }

    

    render() {
        return (
            <div>
                <div>
                    您的选择是：{this.state.msg}
                </div>
                <button onClick={
                    async ()=>{
                        let res =await confirm("确定删除吗?")  

                        if (res) {
                            this.setState({ msg: '是' })
                        } else {
                            this.setState({ msg: '否' })
                        }
                    }
                }>点我</button>
            </div>
        )
    }

    async componentDidMount() {
        let res = await confirm("确定删除吗?")
        if (res) {
            console.log("是")
            this.setState({ msg: '是' })
        } else {
            this.setState({ msg: '否' })
        }
    }
}

export default App
