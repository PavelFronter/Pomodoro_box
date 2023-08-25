import i18n from "i18next";
import styles from "./locale.module.scss"
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/reducers/tasksSlice";
import { useSystemNotify } from "../../../../hooks/useSystemNotify";

export const Locale = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const { notify } = useSelector((state: RootState) => state.config);
    const { systemNotify } = useSystemNotify();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setSelectedLanguage(language);
        if (notify) {
            systemNotify('Настройки сохранены');
        }
    };
    
    return (
        <select 
            onChange={(e) => changeLanguage(e.target.value)} 
            className={styles.timeZone} 
            value={selectedLanguage}>
            <option value="en" key='en'>English</option>
            <option value="ru" key='ru'>Русский</option>
        </select>
    );
};

export default Locale;