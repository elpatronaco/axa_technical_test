import { ChangeEvent, ReactElement, useState } from 'react'
import { FaSearch, FaTimesCircle } from 'react-icons/fa'
import styles from './styles.module.css'

interface ISearchboxProps {
  placeholder?: string
  onSearch: (text: string) => unknown
}

export default function Searchbox({
  placeholder,
  onSearch
}: ISearchboxProps): ReactElement {
  const [text, setText] = useState<string>('')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setText(e.target.value)
  }

  const handleSearch = () => {
    if (text.length) onSearch(text)
  }

  const handleClear = () => {
    setText('')
    onSearch('')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={text}
          onChange={handleTextChange}
          placeholder={placeholder}
        />
        <FaTimesCircle
          className={styles.clearIcon}
          size={12}
          onClick={handleClear}
        />
      </div>
      <FaSearch
        className={styles.searchIcon}
        size={18}
        onClick={handleSearch}
      />
    </div>
  )
}
