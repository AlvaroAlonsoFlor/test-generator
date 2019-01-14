import React, { Component } from 'react';
import './App.css';
import XLSX from 'xlsx';
import QuestionsList from './components/QuestionsList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
     this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(event.target.files[0])
    let sheet;

    reader.onload = () => {

      const data = new Uint8Array(reader.result);
      const workbook = XLSX.read(data, {type: 'array'});
      const worksheet_name = workbook.SheetNames[0]

      sheet = workbook.Sheets[worksheet_name];
      // Transform sheet into readable format
      sheet = XLSX.utils.sheet_to_json(sheet, { header: ["num", "answer"]});

      this.setState({data: sheet})
    }
  }

  render() {

    let data = ""

    // Only render questions when file is uploaded
    if (this.state.data) {
      data = (<QuestionsList questions={this.state.data}/>)
    }

    return (
      <div className="App">
        <input type="file" id="excel-file" onChange={this.handleUpload}/>
        {data}

      </div>
    );
  }
}

export default App;
