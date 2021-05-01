import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from 'react'

/**
 * Quando acionado agenda execução do search
 * execuções previamente agendadas serão canceladas
 */
const onChange = ({
  timeOut,
  setTime,
  msForSearch,
  search,
}: {
  timeOut: NodeJS.Timeout | undefined,
  setTime: Function,
  msForSearch: number,
  search: Function
}) => (input: React.ChangeEvent<HTMLInputElement>) => {
  if (timeOut) {
    clearTimeout(timeOut)
    setTime()
  }

  setTime(setTimeout(() => {

    search(input.target.value)
  }, msForSearch))
}

/**
 * Ao clicar "Enter" com executa o search()
 * caso acha execuções agendadas estas serão canceladas
 */
const onKeyDown = ({
  timeOut,
  setTime,
  search,
}: {
  timeOut: NodeJS.Timeout | undefined,
  setTime: Function,
  search: Function
}) =>
  (press: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    if (press?.key === 'Enter') {
      if (timeOut) {
        clearTimeout(timeOut)
        setTime()
      }

      // @ts-ignore
      const value = press.target.value
      search(value)
    }
  }

const InputSearch = ({
  msForSearch,
  search,
}: {
  msForSearch: number,
  search: Function,
}) => {
  /** para gerenciar o evento de execução do search() */
  const [timeOut, setTime]: [NodeJS.Timeout | undefined, Function] = useState()

  return (
    <input
      type='text'
      onChange={onChange({ timeOut, setTime, search, msForSearch })}
      onKeyDown={onKeyDown({ timeOut, setTime, search })}
      placeholder='search'
    />
  )
}

export default InputSearch
