import { createStore } from 'vuex'
import tutorsModule, { type TTutorModuleState } from '@/store/tutorsModule'
import requestsModule, { type TRequestModuleState } from '@/store/requestsModule'
import authModule, { type TAuthModelState } from '@/store/authModule'

export type RootState = {
  tutors: TTutorModuleState;
  requests: TRequestModuleState
  auth: TAuthModelState
};

const store = createStore<RootState>({
  modules: {
    tutors: tutorsModule,
    requests: requestsModule,
    auth: authModule
  }
})


export default store