import {defineMessages} from 'react-intl';

export const LoginMessageDefine = defineMessages({

    TIPS_INPUT_PASSWORD:{
        id: 'tips.input.password',
        defaultMessage: 'Please input password!',
    },
    TIPS_INPUT_USERNAME:{
        id: 'tips.input.password',
        defaultMessage: 'Please input username or email!',
    },

    TIPS_INPUT_VALIDATION_CODE:{
        id: 'tips.input.password',
        defaultMessage: 'Please input validation code!',
    },
    LOGIN_PAGE_TITLE:{
        id: 'login.page.title',
        defaultMessage: 'Web Admin Login',
    },

    LOGIN_PAGE_SEND_VALIDATION_CODE:{
        id: 'login.page.send.validation.code',
        defaultMessage: 'Send Code',
    },

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