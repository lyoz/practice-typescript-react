import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import MembersComponent, {
  MembersProps as MembersComponentProps,
} from '../components/Members';
import { GithubState } from '../reducer';
import { getMembers } from '../actions/Github';

interface DispatchProps {
  getMembersStart: (companyName: string) => void;
}

type MembersProps = MembersComponentProps &
  RouteComponentProps<{ companyName: string }>;

const MembersContainer: React.FC<MembersProps> = ({ match }) => {
  const users = useSelector((state: GithubState) => state.users);
  const isLoading = useSelector((state: GithubState) => state.isLoading);

  const dispatch = useDispatch();
  const getMembersStart = useCallback(
    (companyName: string) => dispatch(getMembers.start({ companyName })),
    [dispatch],
  );

  const { companyName } = match.params;
  useEffect(() => {
    getMembersStart(companyName);
  }, [companyName, getMembersStart]);

  return (
    <MembersComponent
      companyName={companyName}
      users={users}
      isLoading={isLoading}
    />
  );
};

export default withRouter(MembersContainer);
