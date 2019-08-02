import { connect } from 'react-redux';
import { add, decrement, increment } from '../actions/counter';
import { CounterState } from '../reducer';
import Counter from '../components/Counter';

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps: DispatchProps = {
  add,
  decrement,
  increment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
