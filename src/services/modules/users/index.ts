import { api } from '../../api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signup: build.mutation<any, any>({
      query: job => {
        const { payload, user_type } = job;
        return {
          url: `${user_type}`,
          method: 'POST',
          body: payload,
        };
      },
      // invalidatesTags: [{ type: 'getjobs', id: 'list' }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const response: any = await queryFulfilled;
          console.log('signup response', response.data)
        } catch (error) {
          console.log('signup error', error)
        }
      },
    }),
  }),
  overrideExisting: true,
});

export const { useSignupMutation } = userApi;