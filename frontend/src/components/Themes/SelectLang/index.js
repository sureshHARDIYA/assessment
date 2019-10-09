import PropTypes from 'prop-types';
import { Icon, Menu, Dropdown } from 'antd';
import React from 'react';
import classNames from 'classnames';
import './index.scss';

const SelectLang = props => {
  const { className } = props;
  const selectedLang = 'en-US';

  const changeLang = () => {};

  const locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR'];

  const languageLabels = {
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
    'en-US': 'English',
    'pt-BR': 'Português',
  };

  const languageIcons = {
    'zh-CN': '🇨🇳',
    'zh-TW': '🇭🇰',
    'en-US': '🇬🇧',
    'pt-BR': '🇧🇷',
  };

  const langMenu = (
    <Menu className={'menu'} selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={langMenu} placement="bottomRight">
      <span className={classNames('dropDown', className)}>
        <Icon type="global" title="Language" />
      </span>
    </Dropdown>
  );
};

SelectLang.propTypes = {
  className: PropTypes.string,
};

export default SelectLang;
