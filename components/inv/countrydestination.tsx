import * as React from 'react'
import { getter } from '@progress/kendo-react-common'
import { DataResult, process, State } from '@progress/kendo-data-query'
import { Input } from '@progress/kendo-react-inputs'
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
  GridHeaderSelectionChangeEvent,
  GridSelectionChangeEvent,
  GridColumnMenuSort,
  GridColumnMenuFilter,
  GridColumnMenuGroup,
  GridCustomCellProps,
  GridColumnMenuProps,
} from '@progress/kendo-react-grid'
import { setGroupIds, setExpandedState } from '@progress/kendo-react-data-tools'


export const ColumnMenu = (props: GridColumnMenuProps) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
      <GridColumnMenuGroup {...props} />
    </div>
  )
}


export const CountryCell = (props: GridCustomCellProps) => {
  const { dataItem } = props
  console.log(`Country: ${dataItem.country}`)

  if (!dataItem || !dataItem.flag) {
    return null
  }

  return (
    <td {...props.tdProps}>
      <div className="flex space-x-2">
        <img src={dataItem.flag} width="30" height="16" alt="Flag" />
        <span className="text-base ">{dataItem.country}</span>
      </div>
    </td>
  )
}

export const employees = [
  {
    id: 21,
    country: 'Portugal',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
  },
  {
    id: 22,
    country: 'Greece',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
  },
  {
    id: 23,
    country: 'Poland',
    flag: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
  },
  {
    id: 24,
    country: 'Turkey',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
  },
  {
    id: 25,
    country: 'Egypt',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
  },
  {
    id: 26,
    country: 'South Africa',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
  },
  {
    id: 27,
    country: 'Nigeria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
  },
  {
    id: 28,
    country: 'Kenya',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
  },
  {
    id: 29,
    country: 'Saudi Arabia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
  },
  {
    id: 30,
    country: 'United Arab Emirates',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
  },
  {
    id: 31,
    country: 'Israel',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
  },
  {
    id: 32,
    country: 'Pakistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
  },
  {
    id: 33,
    country: 'Iran',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
  },
  {
    id: 34,
    country: 'Iraq',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
  },
  {
    id: 35,
    country: 'Afghanistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg',
  },
  {
    id: 36,
    country: 'Bangladesh',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
  },
  {
    id: 37,
    country: 'Thailand',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
  },
  {
    id: 38,
    country: 'Vietnam',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
  },
  {
    id: 39,
    country: 'Indonesia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
  },
  {
    id: 40,
    country: 'Philippines',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
  },
]

const DATA_ITEM_KEY = 'id'
const SELECTED_FIELD = 'selected'

const initialDataState: State = {
  take: 20,
  skip: 0,
  group: [],
}

const processWithGroups = (data, dataState: State) => {
  const newDataState = process(data, dataState)

  setGroupIds({ data: newDataState.data, group: dataState.group })

  return newDataState
}
export default function CountryDestination() {
  const idGetter = getter('id')

  const [filterValue, setFilterValue] = React.useState()
  const [filteredData, setFilteredData] = React.useState(employees)
  const [currentSelectedState, setCurrentSelectedState] = React.useState<{
    [id: string]: boolean | number[]
  }>({})
  const [dataState, setDataState] = React.useState<State>(initialDataState)
  const [dataResult, setDataResult] = React.useState(
    process(filteredData, dataState)
  )

  const [data, setData] = React.useState(filteredData)

  const onFilterChange = (ev) => {
    let value = ev.value
    setFilterValue(ev.value)
    let newData = employees.filter((item) => {
      let match = false
      for (const property in item) {
        if (
          item[property]
            .toString()
            .toLocaleLowerCase()
            .indexOf(value.toLocaleLowerCase()) >= 0
        ) {
          match = true
        }

        if (
          item[property].toLocaleDateString &&
          item[property].toLocaleDateString().indexOf(value) >= 0
        ) {
          match = true
        }
      }
      return match
    })
    setFilteredData(newData)
    let clearedPagerDataState = { ...dataState, take: 8, skip: 0 }
    let processedData = process(newData, clearedPagerDataState)
    processedData.data = processedData.data.map((item) => ({
      ...item,
      selected: currentSelectedState[item[DATA_ITEM_KEY]],
    }))
    setDataResult(processedData)
    setDataState(clearedPagerDataState)
    setData(newData)
  }

  const [resultState, setResultState] = React.useState<DataResult>(
    processWithGroups(
      employees.map((item) => ({
        ...item,
        ['selected']: currentSelectedState[idGetter(item)],
      })),
      initialDataState
    )
  )

  const dataStateChange = (event) => {
    let processedData = process(filteredData, event.dataState)
    processedData.data = processedData.data.map((item) => ({
      ...item,
      selected: currentSelectedState[item[DATA_ITEM_KEY]],
    }))
    setDataResult(processedData)
    setDataState(event.dataState)
  }

  const onExpandChange = React.useCallback(
    (event) => {
      const newData = [...dataResult.data]
      const item = event.dataItem
      if (item.groupId) {
        const targetGroup = newData.find((d) => d.groupId === item.groupId)
        if (targetGroup) {
          targetGroup.expanded = event.value
          setDataResult({
            ...dataResult,
            data: newData,
          })
        }
      } else {
        item.expanded = event.value
        setDataResult({
          ...dataResult,
          data: newData,
        })
      }
    },
    [dataResult]
  )

  const setSelectedValue = (data: any[]) => {
    let newData = data.map((item) => {
      if (item.items) {
        return {
          ...item,
          items: setSelectedValue(item.items),
        }
      } else {
        return {
          ...item,
          ['selected']: currentSelectedState[idGetter(item)],
        }
      }
    })
    return newData
  }

  const newData = setExpandedState({
    data: setSelectedValue(resultState.data),
    collapsedIds: [],
  })

  const onHeaderSelectionChange = React.useCallback(
    (event: GridHeaderSelectionChangeEvent) => {
      const checkboxElement: any = event.syntheticEvent.target
      const checked = checkboxElement.checked

      const newSelectedState = {}
      data.forEach((item) => {
        newSelectedState[idGetter(item)] = checked
      })

      setCurrentSelectedState(newSelectedState)

      const newData = data.map((item) => ({
        ...item,
        [SELECTED_FIELD]: checked,
      }))

      const newDataResult = processWithGroups(newData, dataState)
      setDataResult(newDataResult)
    },
    [data, dataState]
  )

  const onSelectionChange = (event: GridSelectionChangeEvent) => {
    const selectedProductId = event.dataItem.id
    const newSelectedState = {
      ...currentSelectedState,
      [selectedProductId]: !currentSelectedState[selectedProductId],
    }
    setCurrentSelectedState(newSelectedState)

    const newData = data.map((item) => {
      return { ...item, selected: newSelectedState[idGetter(item)] }
    })
    const newDataResult = processWithGroups(newData, dataState)
    setDataResult(newDataResult)
  }

  const getNumberOfItems = (data: any[]) => {
    let count = 0
    data.forEach((item) => {
      if (item.items) {
        count = count + getNumberOfItems(item.items)
      } else {
        count++
      }
    })
    return count
  }

  const getNumberOfSelectedItems = (data: any[]) => {
    let count = 0
    data.forEach((item) => {
      if (item.items) {
        count = count + getNumberOfSelectedItems(item.items)
      } else {
        count = count + (item.selected == true ? 1 : 0)
      }
    })
    return count
  }
  const checkHeaderSelectionValue = () => {
    let selectedItems = getNumberOfSelectedItems(newData)
    return newData.length > 0 && selectedItems == getNumberOfItems(newData)
  }

  return (
    <div>
      <Grid
        style={{ height: '440px' }}
        //   pageable={{ pageSizes: true }}
        data={dataResult}
        sortable={true}
        rowHeight={50}
        total={resultState.total}
        onDataStateChange={dataStateChange}
        {...dataState}
        onExpandChange={onExpandChange}
        expandField="expanded"
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        onHeaderSelectionChange={onHeaderSelectionChange}
        onSelectionChange={onSelectionChange}
        // groupable={true}
        size={'medium'}
      >
       
        <Column
          filterable={false}
          field={SELECTED_FIELD}
          width={50}
          headerSelectionValue={checkHeaderSelectionValue()}
        />

        <Column
          field="country"
          title="Country"
          cells={{
            data: CountryCell,
          }}
          columnMenu={ColumnMenu}
          width="315px"
        />
      </Grid>
    </div>
  )
}
