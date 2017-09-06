import * as React from 'react';
import { ProfileData } from '../common';

interface Props {
  profile: ProfileData;
}


export default class ProfileComponent extends React.PureComponent<Props> {

  public constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
        <div>
            <h1>{this.props.profile.name} <small>@{this.props.profile.login}</small></h1>
        </div>
    );
  }
}