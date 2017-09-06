

import { ProfileData, RepoData } from '../common';

export default class GithubService {
    private userApi: string = 'https://api.github.com/users';

    public async getProfile(name: string): Promise<ProfileData> {
        let response = await fetch(`${this.userApi}/${name}`);

        return response.body && await response.json();
    }

    public async getRepos(name: string): Promise<RepoData[]> {
        let response = await fetch(`${this.userApi}/${name}/repos`);

        return response.body && await response.json();
    }
}