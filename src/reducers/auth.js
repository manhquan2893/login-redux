
  export default (state = {}, action) => {
      switch (action.type) {
        case 'update_filed_auth':
            return {
                ...state,
                [action.key]:action.value
            }
        case 'login':
            let user={username:'quan',password:'1'}
            let isValid=action.user.username===user.username && 
                        action.user.password===user.password
                return {
                    ...state,
                    success:isValid,
                    error:!isValid
                }
        default:
          return state;
      }
    };