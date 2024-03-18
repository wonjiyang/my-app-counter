import Layout from './Layout'
import Sort from './Sort'
import Comments from './Comments'
import Product from './Product'
import Event from './Event'
import State from './State'
import SetNumber from './SetNumber'
import Sort2 from './Sort2'
import Switch from './Switch'

export default function Practice() {
    return (
        <>
            <Switch />
            <Sort2 />
            <hr />
            <SetNumber />
            <hr />
            <State />
            <hr />
            <Event />
            <hr />
            <Product />
            <hr />
            <Comments />
            <hr />
            <Sort />

            <hr />
            {/* 부모 컴포넌트 */}
            <Cat name="가을" age="2" />
            {/* {name: '가을', age: 2} 객체가 Cat 컴포넌트로 전달된다. */}
            <Cat name="겨울" age="3" />
            <Cat name="봄" age="4" />

            <Layout />
        </>
    )
}

// 자식 컴포넌트
const Cat = ({ name, age }) => {
    // const props = {name: '가을', age: 2}
    // const { name, age } = props;
    return (
        <>
            <div>
                {name}이는 {age}살입니다.
            </div>
        </>
    )
}

// export default App;
