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

// export const CountryCell = (props: GridCustomCellProps) => {
//   const { dataItem } = props

//   if (!dataItem || !dataItem.flag) {
//     return null
//   }

//   return (
//     <td {...props.tdProps}>
//       <div className="flex space-x-2">
//         <img src={dataItem.flag} width="30" height="16" alt="Flag" />
//         <span className="text-base ">{dataItem.country}</span>
//       </div>
//     </td>
//   )
// }

export const employees = [
  {
    id: 1,
    name: 'Carrying Cost',
  },
  {
    id: 2,
    name: 'Inbound Processing Cost',
  },
  {
    id: 3,
    name: 'Oppurtunity Cost',
  },
  {
    id: 4,
    name: 'Other Cost',
  },
  {
    id: 5,
    name: 'Outbound Processing Cost',
  },
  {
    id: 6,
    name: 'Production cost',
  },
  {
    id: 7,
    name: 'Profit',
  },
  {
    id: 8,
    name: 'Revenue from Customer',
  },
  {
    id: 9,
    name: 'Total Cost',
  },
  {
    id: 10,
    name: 'Transportation Cost',
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
export default function CountryBoarding() {
  const idGetter = getter('id')
  const [filteredData, setFilteredData] = React.useState(employees)
  const [currentSelectedState, setCurrentSelectedState] = React.useState<{
    [id: string]: boolean | number[]
  }>({})
  const [dataState, setDataState] = React.useState<State>(initialDataState)
  const [dataResult, setDataResult] = React.useState(
    process(filteredData, dataState)
  )

  const [data, setData] = React.useState(filteredData)

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

  const setSelectedValue = (data) => {
    return data.map((item) => ({
      ...item,
      selected: currentSelectedState[item[DATA_ITEM_KEY]],
    }))
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
        // style={{ height: '440px' }}
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
          className="text-lg"
          field="name"
          title="Finance"
          columnMenu={ColumnMenu}
          width="315px"
        />
      </Grid>
    </div>
  )
}
