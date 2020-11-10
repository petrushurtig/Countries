import React from 'react';
import { gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import './App.css';

function App() {
 const countryquery = gql`
{
  countries {
    code,
    name,
    continent {name},
  }
}`;

const { loading, error, data } = useQuery(countryquery);

if (loading) 
return "Loading...";
if (error)
return 'Error ${error.message';

return (
  <div className="App">
      <table>
        <tbody>
          <th>Code</th><th>Country</th><th>Continent</th>
          {
          data.countries.map((country, index) => 
          <tr key={country.code}>
            <td>{country.code}</td>
            <td>{country.name}</td>
            <td>{country.continent.name}</td>
            </tr>
           )
          }
        </tbody>
      </table>
  </div>
); 
} 

export default App;
