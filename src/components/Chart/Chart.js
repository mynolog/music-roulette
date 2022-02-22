import ChartItem from './ChartItem'
import { LoaderBar, SelectBox, Button } from '..'
import styles from './Chart.module.css'

function Chart({
  charts,
  query,
  setQuery,
  isLoading,
  getCharts,
  countryCodeList,
  topLimit,
}) {
  const onChangeOption = () => {
    getCharts()
  }
  return (
    <div className={styles.chartContainer}>
      {isLoading ? (
        <LoaderBar />
      ) : (
        <>
          <div className={styles.selectBox}>
            <div className={styles.selectArea}>
              {/* setCountryCode */}
              <SelectBox
                query={query}
                setQuery={setQuery}
                options={countryCodeList}
                type="country"
              />
              {/* setLimit */}
              <SelectBox
                query={query}
                setQuery={setQuery}
                options={topLimit}
                type="limit"
              />
            </div>
            <Button onClick={onChangeOption} bgColor="EC407A" value="Apply" />
          </div>
          <h2
            className={styles.chartTitle}
          >{`${query.label}'s Top ${query.limit}`}</h2>
          {charts && (
            <ul>
              {charts.map((musicInfo, index) => (
                <li key={musicInfo.id} className={styles.chartListItem}>
                  <ChartItem musicInfo={musicInfo} index={index} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}

export default Chart
