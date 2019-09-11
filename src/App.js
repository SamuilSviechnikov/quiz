import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch} from 'react-router-dom'
import Quiz from './components/Quiz/Quiz'
import QuizList from './components/QuizList/QuizList'
import Auth from './components/auth/auth'
import QuizCreator from './components/QuizCreator/QuizCreator'
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
        <Route path='/auth' component={Auth}/>
        <Route path='/quiz-creator' component={QuizCreator}/>
        <Route path='/quiz/:id' component={Quiz}/>
        <Route path='/' component={QuizList}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
