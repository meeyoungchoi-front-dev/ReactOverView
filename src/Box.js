// React는 컴포넌트 여러개를 만들어서 조립해서 가져다 쓰는 방식이다
// 이를 통해 코드의 재활용성을 높인다
// Box 라는 컴포넌트를 만들었다
import React from 'react';

// 컴포넌트에서 값을 불러와서 사용하고 싶으면 props를 사용하면 된다
function Box(props) {
    const clickMe = () => {
        alert("리액트 입문을 축하합니다!!");
    }
    return (<div className="box">
                Box{props.num} {props.name}
                <button onClick={clickMe}>클릭!</button>
            </div>)
}

export default Box