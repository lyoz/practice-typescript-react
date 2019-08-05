import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Header, Image } from 'semantic-ui-react';

import { User } from '../services/github/models';
import Spinner from './Spinner';

import './Members.css';

export interface MembersProps {
  companyName: string;
  users: User[];
  isLoading?: boolean;
}

const Members: React.FC<MembersProps> = ({
  companyName = '<company name>',
  users = [],
  isLoading = false,
}) => {
  const title = `members of ${companyName}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="Members" data-test="users">
        <Header as="h2">{title}</Header>
        {isLoading ? (
          <Spinner />
        ) : (
          <Card.Group>
            {users.map(user => (
              <Card
                key={user.id}
                href={`https://github.com/${user.login}`}
                target="_blank"
              >
                <Card.Content>
                  <Image floated="right" size="mini" src={user.avatar_url} />
                  <Card.Header data-test="card-header">
                    {user.login}{' '}
                  </Card.Header>
                  <Card.Meta>GitHub ID: {user.id}</Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        )}
      </div>
    </>
  );
};

export default Members;
