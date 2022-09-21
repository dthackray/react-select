import React from 'react'

type SelectOption = {
    label: string,
    value: string
}

type SelectProps = {
    value?: SelectOption,
    onChange: (value: SelectOption | undefined) => void,
    options: SelectOption[]
}

function Select({ value, onChange, options }: SelectProps) {
  return (
    <div>Select</div>
  )
}

export default Select