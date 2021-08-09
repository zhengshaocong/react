import React, { Component ,Fragment} from 'react'

export default class Dome extends Component {
    render() {
        return (
            <Fragment>{/*这个标签在最后编译的时候会被移除*/}
                <p>13213</p>
                <p>1233</p>
            </Fragment>
        )
    }
}
