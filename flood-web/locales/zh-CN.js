import appLocaleData from 'react-intl/locale-data/zh';
import zhMessages from '../locales/cn.json';

window.appLocale = {
    messages: Object.assign({}, zhMessages),
    antd: null,
    locale: 'zh',
    data: appLocaleData,
};