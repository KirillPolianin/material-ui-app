import { GIVE_EVALUATION } from '../actions';

export default function(state = false, action) {
	switch (action.type) {
		case GIVE_EVALUATION:
			return action.payload;
		default:
			return state;
	}
}
