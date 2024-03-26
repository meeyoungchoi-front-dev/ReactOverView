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
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
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
    {id:1, title: 'html'},
    {id:2, title: 'css'},
    {id:3, title: 'javascript'},
    {id:4, title: 'React'},
  ]

  return (
    <div className="App">
      <Header blogTitle="MyBlog"></Header>
      <Article title="welcome," body="Coding World!!"></Article>
      <Nav topics={topics}></Nav>
      <Box content="content1"></Box>
      <Box content="content2"></Box>
      <Box content="content3"></Box>
      <Box content="content4"></Box>
      <Box content="content5"></Box>
      <Box content="content6"></Box>
      <Box content="content7"></Box>
      <Box content="content8"></Box>
      <Box content="content9"></Box>
      <Box content="content10"></Box>
      <Box content="content11"></Box>
      <Box content="content12"></Box>

    </div>
  );
}

export default App;
