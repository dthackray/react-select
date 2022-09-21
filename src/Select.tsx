import React from 'react'
import styles from "./select.module.css"

type SelectOption = {
    label: string,
    value: string
}

type SelectProps = {
    value?: SelectOption,
    onChange: (value: SelectOption | undefined) => void,
    options: SelectOption[]
}

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <div className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={styles.options}>
            {options.map(option => (
                <li key={option.value} className={styles.option}>{option.label}</li>
            ))}
        </ul>
    </div>
  )
}