// import * as React from 'react';
// // import { dataService } from '../services';
// import {stockData } from '~/kendo/charts/treemap/treemapData'
// import '@progress/kendo-ui';
// import { Tooltip } from '@progress/kendo-react-tooltip';

// export default function TreemapView(){
//     const fetchData = React.useCallback(async () => {
//         const newData = stockData;
//         const prizeUpItemsCollection = newData.map((item) => {
//             if (item.change_pct.indexOf('-') !== 0) {
//                 let newItem = { value: 0, name: '', change: '' }
//                 newItem.value = parseInt(item.market_cap);
//                 newItem.name = item.symbol;
//                 newItem.change = item.change_pct;
//                 return newItem
//             }
//             return null;
//         })
//         const prizeDownItemsCollection = newData.map((item) => {
//             if (item.change_pct.indexOf('-') === 0) {
//                 let newItem = { value: 0, name: '', change: '' }
//                 newItem.value = parseInt(item.market_cap);
//                 newItem.name = item.symbol;
//                 newItem.change = item.change_pct;
//                 return newItem
//             }
//             return null;
//         })
//         const prizeUpItems = prizeUpItemsCollection.filter((item) => item)
//         const prizeDownItems = prizeDownItemsCollection.filter((item) => item)
//         let TreeData = [
//             {
//                 name: 'Market capitalization', value: 1, items: [
//                     { value: 1, name: "Price up", items: prizeUpItems },
//                     { value: 1, name: "Price down", items: prizeDownItems }
//                 ]
//             }
//         ]
//         const setData = (options) => {
//             options.success(TreeData)
//         }

//         const renderItem = (props) => {
//             let title = JSON.stringify(props.dataItem)
//             return `<span title=${title}>${props.text}<br/>${props.dataItem.change}%</span>`;
//         }

//         window.$("#heatmap").kendoTreeMap({
//             template: renderItem,
//             dataSource: ({
//                 transport: {
//                     read: setData
//                 },
//                 schema: {
//                     model: {
//                         children: "items"
//                     }
//                 }
//             }),
//             valueField: "value",
//             textField: "name",
//             colors: [["#00AD51", "#00EF81"], ["#FF0000", "#FF8F8F"]]
//         })
//     }, []);
//     const nFormatter = (num) => {
//         if (num >= 1000000000) {
//             return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
//         }
//         if (num >= 1000000) {
//             return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
//         }
//         if (num >= 1000) {
//             return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
//         }
//         return num;
//     }
//     const toolTipTemplate = (props) => {
//         if (props.title !== '{"value":1,"name":"Price' && props.title !== '{"name":"Market') {
//             let item = JSON.parse(props.title)
//             return (
//                 <span>
//                     <span>Company: {item.name}</span>
//                     <br />
//                     <span>Change: {item.change}%</span>
//                     <br />
//                     <span>Market cap: {nFormatter(item.value)}</span>
//                 </span>
//             )
//         }
//     }

//     React.useEffect(() => { fetchData() }, [fetchData]);
//     return (
//         <div>
//             <Tooltip showCallout={false} content={toolTipTemplate}>
//                 <div id='heatmap' style={{ height: 600, marginBottom: 50 }}></div>
//             </Tooltip>
//         </div>
//     )
// }