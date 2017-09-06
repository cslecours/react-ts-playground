import * as React from 'react';
import './App.css';
import GithubService from './services/GithubService';
import Profile from './components/ProfileComponent';
import { ProfileData, RepoData } from './common';
import RepoList from './components/RepoList';

const logo = require('./logo.svg');

interface Props {
  name: string;
}

interface State {
  profile?: ProfileData;
  repos?: RepoData[];
}

class App extends React.Component<Props, State> {

  public constructor(props: Props) {
    super(props);
    this.state = { profile: undefined };
  }

  public async componentDidMount() {
    let service = new GithubService();
    let profile = await service.getProfile(this.props.name);

    this.setState((prevState) => { return { profile: profile }; });

    let repos = await service.getRepos(this.props.name);
    this.setState({ repos: repos });
  }

  public render(): JSX.Element {

    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.state.profile && <Profile profile={this.state.profile} />}
          {this.state.repos && <RepoList repos={this.state.repos} />}
        </div>
      </div>
    );
  }
}

export default App;
