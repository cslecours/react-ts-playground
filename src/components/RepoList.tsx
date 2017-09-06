import * as React from 'react';
import { RepoData } from '../common';

interface Props {
    repos: RepoData[];
}


export default class RepoList extends React.PureComponent<Props> {



    public constructor(props: Props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <ul>
                {this.props.repos.map(x => <this.Repo key={x.full_name} repo={x} />)}
            </ul>
        );
    }   

    private Repo(props: { repo: RepoData }): JSX.Element {
        return (
            <li>
                <h3>{props.repo.full_name}</h3>
                <p>{props.repo.description}</p>
            </li>);
    }

}
