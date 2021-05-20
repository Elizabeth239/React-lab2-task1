import './App.css';

function MainInfo(props) {
  return (
  <>
  <h2>{props.Title}</h2>
  <p>{props.Text}</p>
  </>
  );
 }

 function BooksInfo(props) {
  return (
  <>
  <ul>
    <li>{props.Books[0]}</li>
    <li>{props.Books[1]}</li>
  </ul>
  </>
  );
 }

function App() {

  return (
    <div className="App">
      < MainInfo  />
      < BooksInfo />
    
    </div>
  );
}

MainInfo.defaultProps = { Title: "William Shakespeare",
 Text: "английский поэт и драматург, зачастую считается величайшим англоязычным писателем и одним из лучших драматургов мира[3]. Часто именуется национальным поэтом Англии[4]. Дошедшие до нас работы, включая некоторые, написанные совместно с другими авторами, состоят из 38 пьес, 154 сонетов, 4 поэм и 3 эпитафий. Пьесы Шекспира переведены на все основные языки и ставятся чаще, чем произведения других драматургов"};
 
 BooksInfo.defaultProps={
 Books:["Ромео и Джульетта","Гамлет"]
 
};

export default App;
