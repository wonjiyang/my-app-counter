import Article from './Article'
import Footer from './Footer'
import Header from './Header'
import { NavMobile } from './Nav'

export default function Layout() {
    // return 내부에는 하나의 태그만 존재해야 한다.
    // 여러개의 태그를 사용하고 싶다면, <></>
    // 또는 <Fragment></Fragment>를 사용한다.
    // 한 줄 이상일 경우 ()로 감싸준다.

    const navArr = [{ title: 'm-html' }, { title: 'm-css' }, { title: 'm-js' }]
    const navD = [{ title: 'd-html' }, { title: 'd-css' }, { title: 'd-js' }]

    return (
        <div className="wrap">
            <Header logo="가을회사" nav={navD} />
            <NavMobile nav={navArr} />
            <Article title="html이란?" desc="html이란 뭐뭐다." />
            <Article title="css이란?" desc="css이란 뭐뭐다." />
            <Article title="js이란?" desc="js이란 뭐뭐다." />
            <Footer />
        </div>
    )
}

// export default Layout;
