import { IUser } from '../../../utils/types/user.interface';
import { InitialState } from '../interfaces/initial-state.interface';

const initialState: InitialState<IUser> = {
  loading: false,
  error: null,
  data: {
    id: 0,
    st_id: '',
    nickname: '',
    email: '',
    is_admin: 0,
    thumbnail: '',
  },
};

const reducer = (state = initialState, action: any) => {};

export default reducer;
