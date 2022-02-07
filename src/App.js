import Header from "./components/header/index";
import Headline from "./components/headline/index";
import Button from "./components/button/index";
import List from "./components/button/index";
import {connect} from "react-redux";
import {fetchPosts} from "./actions/index"
import "./App.scss"

function App(props) {
  const configList = {
    title:"Click Me",
    eventEmit : () =>{ props.fetchPosts()} 
  }
  return (
    <div className="App">
      <Header/>
      <Headline heading = "Welcome to the posts!"/>
      <Button {...configList}/>
      {props.posts.posts.length>0 && props.posts.posts.map((post)=>{
       const {title,description} = post;
       const configList ={
         title:title,
         description:description
       }
        return(
          <List {...configList}/>
        )
      })}
    </div>
  );
}

const mapStateToProps =  (state) => {
  return{
    posts : state.posts
  }
  
}
export default connect(mapStateToProps,{fetchPosts})(App)
