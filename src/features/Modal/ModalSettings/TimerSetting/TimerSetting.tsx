import { useCallback } from 'react'
import styles from './timerSetting.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers/tasksSlice';
import { useTranslation } from 'react-i18next';
import Switch from '../../../../ui/Switch/Switch';
import { 
    setAutoStartBreak, 
    setAutoStartPomodoro, 
    setDelay, setLongBreak, 
    setPomodoro, 
    setShortBreak } from '../../../../store/reducers/configSlice';
import { Field } from '../Field/Field';

export const TimerSetting = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const config = useSelector((state: RootState) => state.config);
    const {
        autoStartPomodoro, 
        autoStartBreak, 
        delay,
        pomodoro, 
        short, 
        long
    } = config;

    const minutesCalc = (seconds: number) => {
        let minutes = seconds / 60;
        return minutes;
    }

    const handleDelay = useCallback(
        (newValue: number) => {
            dispatch(setDelay(newValue));
        },
        [dispatch]
    );

    const handlePomodoro = useCallback(
        (newValue: number) => {
            const newPomodoroSeconds = newValue * 60; 
            dispatch(setPomodoro(newPomodoroSeconds));
        },
        [dispatch]
    );

    const handleShortBreak = useCallback(
        (newValue: number) => {
            const newShortBreak = newValue * 60; 
            dispatch(setShortBreak(newShortBreak));
        },
        [dispatch]
    );

    const handleLongBreak = useCallback(
        (newValue: number) => {
            const newLongBreak = newValue * 60; 
            dispatch(setLongBreak(newLongBreak));
        },
        [dispatch]
    );

    const handleAutoStartPomodoro = useCallback(
        (newValue: boolean) => {
            dispatch(setAutoStartPomodoro(newValue));
        },
        [dispatch]
    );

    const handleAutoStartBreak = useCallback(
        (newValue: boolean) => {
            dispatch(setAutoStartBreak(newValue));
        },
        [dispatch]
    );

    return (
        <>
            <div className={styles.formSettings}>
                <Field 
                    label={t("tomato")} 
                    id={'data-pomodoro'} 
                    htmlFor={'data-pomodoro'} 
                    notes={t('in_minutes')}
                    value={minutesCalc(pomodoro)}
                    action={handlePomodoro}
                />

                <Field 
                    label={t("short_break")} 
                    id={'data-short-break'} 
                    htmlFor={'data-short-break'} 
                    notes={t('in_minutes')}
                    value={minutesCalc(short)}
                    action={handleShortBreak}
                />

                <Field 
                    label={t("long_break")} 
                    id={'data-long-break'} 
                    htmlFor={'data-long-break'} 
                    notes={t('in_minutes')}
                    value={minutesCalc(long)}
                    action={handleLongBreak}
                />

                <Field 
                    label={t('long_break_delay')} 
                    id={'data-delay'} 
                    htmlFor={'data-delay'} 
                    notes={t('in_pomodoro')} 
                    value={delay}
                    action={handleDelay}
                />

                <Switch 
                    id='auto-start-pomodoro' 
                    label={t("auto_start_pomodoro")} 
                    htmlFor="auto-start-pomodoro" 
                    value={autoStartPomodoro} 
                    action={handleAutoStartPomodoro}
                />

                <Switch 
                    id='auto-start-break' 
                    label={t("auto_start_break")} 
                    htmlFor="auto-start-break" 
                    value={autoStartBreak} 
                    action={handleAutoStartBreak}
                />
            </div>
        </>
    )
}