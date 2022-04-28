import React from 'react'
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const {t} = useTranslation
  return (
      <footer>
    <p data-cy="app-name" id="footer">
      DGMS News - Bringing you the best local news
      {t('appName')}
      </p>
    </footer>
  )
}

export default Footer