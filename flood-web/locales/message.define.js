import {defineMessages} from 'react-intl';

export const LoginMessageDefine = defineMessages({
    REMEMBER_ME: {
        id: 'login.remember.me',
        defaultMessage: 'Remember me',
    },
    USER_NAME_REQUIRED_ERROR: {
        id: 'login.error.username.empty',
        defaultMessage: 'user name is required.',
    },
    NOT_VALID_EMAIL: {
        id: 'login.error.not.valid.email',
        defaultMessage: 'not a valid email.',
    },
    PASSWORD_REQUIRED_ERROR: {
        id: 'login.error.password.empty',
        defaultMessage: 'password is required.',
    },
    NOT_VALID_PASSWORD: {
        id: 'login.error.not.valid.password',
        defaultMessage: 'not a valid password.',
    },

});