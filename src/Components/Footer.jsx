import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <p data-cy="app-name" id="footer">
        {t('appName')}
      </p>
    </footer>
  );
};

export default Footer;
