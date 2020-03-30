import React, { Component } from 'react';
import Virus from './components/Virus';
import data from './data/virus';

class App extends Component {
  render() {
    return <div>hello world</div>;
  }
}
// function App(props) {
//   //data = [{}{}{}]
//   //newDataSet = [{}{}{}]
//   let newDataSet = data.map(cdcdata => {
//     return (
//       <Virus
//         virus={cdcdata.virus}
//         country={cdcdata.country}
//         nums={cdcdata.numViruses}
//       />
//     );
//   });

//   return (
//     <div>
//       {newDataSet}
//       {/* <Virus
//         virus={data[0].virus}
//         country={data[0].country}
//         nums={data[0].numViruses}
//       />
//       <Virus
//         virus={data[1].virus}
//         country={data[1].country}
//         nums={data[1].numViruses}
//       />
//       <Virus
//         virus={data[2].virus}
//         country={data[2].country}
//         nums={data[2].numViruses}
//       />
//       <Virus
//         virus={data[3].virus}
//         country={data[3].country}
//         nums={data[3].numViruses}
//       />
//       <Virus
//         virus={data[4].virus}
//         country={data[4].country}
//         nums={data[4].numViruses}
//       /> */}
//     </div>
//   );
// }
export default App;
