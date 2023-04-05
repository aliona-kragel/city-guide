import { initReactI18next } from "react-i18next";
import TranslateIcon from '@mui/icons-material/Translate';
import i18next from "i18next";
import { translationsEn, translationsRu } from "translations";
import { ChangeEvent } from "react";
import "./index.scss";

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      ru: { translation: translationsRu },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

const LanguageSelect = () => {
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    i18next.changeLanguage(event.target.value)
  }

  return (
    <div className="select__lang">
      <TranslateIcon />
      <select name="languages" onChange={handleSelect} >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  )
}

export default LanguageSelect;