import React from 'react'
import { StatisticLink } from '../StatisticLink'
import { Logo } from '../Logo'
import styles from './header.module.scss'
import { EIcons, Icons } from '../Icons'

export function Header() {


	return (
		<header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <StatisticLink />
            </div>
        </header>
	)
}