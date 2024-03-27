import logo from './logo.svg';
import './App.css';
// 내가 만든 컴포넌트 import
import Box from "./Box"

// React에서 component 태그 만들기
function Header(props) {
  return <header  className="BlogHeader">
          <h1 className="BlogTitle">
            <a href="/">{props.blogTitle}</a>
          </h1>
        </header>
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.num}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }
  return <nav className="BlogNav">
            {lis}
         </nav>
}

function Article(props) {
  return    <article className="Subtitle">
              <h2>{props.title} {props.body}</h2>
            </article>
}

function App() {
  const topics = [
    {num:2024, title: 'html'},
    {num:2025, title: 'css'},
    {num:2026, title: 'javascript'},
    {num:2027, title: 'React'},
  ]

  const contents = [
    {id:1, title: 'content1'},
    {id:2, title: 'content2'},
    {id:3, title: 'content3'},
    {id:4, title: 'content4'},
    {id:5, title: 'content5'},
    {id:6, title: 'content6'},
    {id:7, title: 'content7'},
    {id:8, title: 'content8'},
    {id:9, title: 'content9'},
    {id:10, title: 'content10'}
  ]

  return (
    <div className="App">
      <Header blogTitle="MyBlog"></Header>
      <Article title="welcome," body="Coding World!!"></Article>
      <Nav topics={topics}></Nav>
      <Box contents={contents}></Box>
    </div>
  );
}

export default App;
