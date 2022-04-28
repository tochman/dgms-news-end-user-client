import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

const languageOptions = [
  { key: 'English', text: 'English', language: 'en', value: 'English' },
  { key: 'Swedish', text: 'Swedish',  language: 'sv',value: 'Swedish' },
]


const LanguageChoice =  () => {
   
    const handleChange = () => {i18n.changeLanguage(`${languageOptions.language}`)}
    const { i18n } = useTranslation()
   
   
return (
  <Dropdown data-cy="dropdown"
    button
    className="icon"
    floating
    labeled
    icon="world"
    options={languageOptions}
    search
    text="Select Language"
    onChange={handleChange}
    
    />  
  )

}

export default LanguageChoice