import { AiFillCar } from 'react-icons/ai'

const Nav = ({ nav }) => {
    // console.log(props) // {nav: Array(3)}
    // console.log(props.nav) // (3) [{…}, {…}, {…}]
    // console.log(props.nav[0]) // {title: "html"}
    // console.log(props.nav[0].title) // html
    // console.log(props.nav[1]) // {title: "css"}
    // console.log(props.nav[1].title) // css
    // console.log(props.nav[2]) // {title: "js"}
    // console.log(props.nav[2].title) // js

    return (
        <nav>
            {/* 문자가 아닌 데이터를 받을 땐  {}로 감싸주어야 한다. */}
            <ul>
                {nav.map((item, index) => (
                    <li key={index}>
                        {/* /sub/title.html로 이동하는 링크. 여기서 item.title은 각 항목의 제목(html, css, js)입니다. */}
                        <a href={`/sub/${item.title}.html`}>
                            <AiFillCar />
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

        // {props.nav.map((item, index) => (
        //     // cosole.log(item); // {title: "html"}
        //     <li key={index}>
        //         {/* /sub/title.html */}
        //         <a href={'/sub/' + item.title + '.html'}>{item.title}</a>
        //     </li>
        // ))}
    )
}

export const NavMobile = (props) => {
    // const arr = [1, 2, 3]
    console.log(props) // {nav: Array(3)}
    console.log(props.nav) // (3) [{…}, {…}, {…}]
    console.log(props.nav[0]) // {title: "html"}
    console.log(props.nav[0].title) // html
    console.log(props.nav[1]) // {title: "css"}
    const list = []
    for (let i = 0; i < props.nav.length; i++) {
        list.push(
            <li key={i}>
                <a href={'/sub/' + props.nav[i].title + '.html'}>{props.nav[i].title}</a>
            </li>
        )
    }

    return (
        <nav>
            <ul>{list}</ul>
        </nav>
    )
}

export default Nav
