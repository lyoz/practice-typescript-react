import axios from 'axios';

import { User } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://api.github.com',
  timeout: 10000,
};

export const getMembersFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);
  const getMembers = async (organizationName: string): Promise<User[]> => {
    const response = await instance.get(`/orgs/${organizationName}/members`);
    if (response.status !== 200) {
      throw new Error('Server Error');
    }

    return response.data;
  };

  return getMembers;
};
