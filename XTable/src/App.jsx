import { useState } from 'react';

const App = () => {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [tableData, setTableData] = useState(initialData);

  const sortByDate = () => {
    setTableData([...tableData].sort((a, b) => b.date.localeCompare(a.date) || b.views - a.views));
  };

  const sortByViews = () => {
    setTableData([...tableData].sort((a, b) => b.views - a.views || b.date.localeCompare(a.date)));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Date and Views Table</h1>
      <button
        onClick={sortByDate}
        style={{ margin: '10px', padding: '5px 10px', fontSize: '16px' }}
      >
        Sort by Date
      </button>
      <button
        onClick={sortByViews}
        style={{ margin: '10px', padding: '5px 10px', fontSize: '16px' }}
      >
        Sort by Views
      </button>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '25%',
          margin: '20px auto',
          border: '1px solid #ddd',
        }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Views</th>
            <th style={tableHeaderStyle}>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{row.date}</td>
              <td style={tableCellStyle}>{row.views}</td>
              <td style={tableCellStyle}>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
  fontWeight: 'bold',
  backgroundColor: '#f5f5f5',
};

const tableCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
  backgroundColor: '#fff',
};

export default App;
