import Count from '../../components/Count'
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/Count/action'
// //a函数的返回值作为状态传递给了UI
// function mapStateToProps(state){
//     return {count:state}
// }

// function mapDispatchToProps(dispatch){
//     return {
//         increment:(data)=>{
//             dispatch(createIncrementAction(data))
//         },
//         decrement:(data)=>{
//             dispatch(createDecrementAction(data))
//         },
//         incrementAsync:(data,time)=>{
//             dispatch(createIncrementAsyncAction(data,time))
//         }
//     }
// }

export default connect(
    state=>({count:state}),
    //一般写法
    // dispatch=>({
    //             increment:data=>dispatch(createIncrementAction(data)),
    //             decrement:data=>dispatch(createDecrementAction(data)),
    //             incrementAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time))
    //         })
    //精简写法
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsyncAction
    }
    )(Count)