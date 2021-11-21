import { ReactElement, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { GLOBALACTIONS } from '../../store/global/actions'
import { globalSelectors } from '../../store/global/selectors'
import styles from './styles.module.css'

function Property({ el, property }: { el: string | number; property: string }) {
  return (
    <>
      <span className={styles.propertytitle}>{property}</span>
      <span>{el}</span>
    </>
  )
}

function PropertiesList({
  arr,
  property
}: {
  arr: Array<string | number>
  property: string
}): ReactElement | null {
  if (!arr.length) return null

  return (
    <>
      <span className={styles.propertytitle}>{property}</span>
      <ul>
        {arr.map((el, index) => (
          <li key={`${property}-list-${index}`}>{el}</li>
        ))}
      </ul>
    </>
  )
}

export default function Detail(): ReactElement {
  const d = useDispatch()
  const params = useParams()

  const selGnome = useSelector(globalSelectors.selGnome)

  const getSelectedGnome = useCallback(() => {
    const id = Number(params.id)

    if (!isNaN(Number(id))) d(GLOBALACTIONS.SELECTGNOME(id))
  }, [d, params])

  useEffect(() => {
    getSelectedGnome()

    return () => {
      d(GLOBALACTIONS.SELECTGNOME(null))
    }
  }, [params, d, getSelectedGnome])

  if (selGnome === null)
    return (
      <div className={styles.detail_wrapper}>
        <div className={styles.notfound_wrapper}>
          <h2>Lo sentimos :(</h2>
          <h4>No hemos podido encontrar ese perfil.</h4>
        </div>
      </div>
    )

  return (
    <section className={styles.detail_wrapper}>
      <div className={styles.detail_inner_wrapper}>
        <div className={styles.image_container}>
          <img
            className={styles.avatar}
            src={selGnome.thumbnail}
            alt="Avatar"
          />
        </div>
        <div className={styles.details_container}>
          <h1>{selGnome.name}</h1>
          <hr />
          <Property property="edad" el={`${selGnome.age} años`} />
          <Property property="peso" el={`${selGnome.weight.toFixed(2)} kg`} />
          <Property property="altura" el={`${selGnome.height.toFixed(2)} cm`} />
          <Property property="color del pelo" el={selGnome.hair_color} />
          <PropertiesList property="profesiones" arr={selGnome.professions} />
          <PropertiesList property="amigos" arr={selGnome.friends} />
        </div>
      </div>
    </section>
  )
}
