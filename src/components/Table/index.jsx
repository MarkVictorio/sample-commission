import { useState } from 'react'
import jsonData from '../../../csvjson.json'
import jsonDataLanding from '../../../csvjsontwo.json'

const Table = () => {
    const [selectedTable, setSelectedTable ] = useState(true)

    const displayData = jsonData.map( info => {
        return(
            <tr key={info.id} className="border-b border-gray-200 dark:border-gray-700" >
                <td className='pr-5 text-center bg-gray-200'>{info['Leads Source']}</td>
                <td className='pr-5 text-center'>{info['Job Number']}</td>
                <td className='pr-5 text-center bg-gray-200'>{info['Customer Name']}</td>
                <td className='pr-5 text-center'>{info['Job Submission Time']}</td>
                <td className='pr-5 text-center bg-gray-200'>{info['Customer Contact']}</td>
                <td className='pr-5 text-center'>{info['Address']}</td>
                <td className='pr-5 bg-gray-200'>{info['System Details & Note']}</td>
                <td className='pr-5 text-center'>{info['Contract Full Price']}</td>
                <td className='pr-5 text-center bg-gray-200'>{info['Payment Method']}</td>
                <td className='pr-5 text-center'>{info['Customer Payment']}</td>
                <td className='pr-5 text-center bg-gray-200'>{info['Cash Receiving']}</td>
                <td className='pr-5 text-center '> - </td>
            </tr>
        )
    })
    const displayDataTwo = jsonDataLanding.map( info => {
        return(
            <tr key={info.id} className="border-b border-gray-200 dark:border-gray-700" >
                <td className='pr-5'>{info['Product Combination']}</td>
                <td className='pr-5 text-center bg-gray-200'>{info['Cash Landing Price']}</td>
                <td className='pr-5 text-center'> - </td>
            </tr>
        )
    })

    const handleOnClickT1= () => {
        setSelectedTable(true)
        
    }
    const handleOnClickT2= () => {
        setSelectedTable(false)
        
    }

  return (
    <div className="relative overflow-x-auto p-4">
        <button onClick={handleOnClickT1} className='bg-green-400 text-white px-5 py-3 rounded-md mb-5'>
            Table 1
        </button>
        <button onClick={handleOnClickT2} className='bg-green-400 text-white px-5 py-3 rounded-md mb-5 ml-5'>
            Table 2
        </button>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
                { selectedTable ? 
                <tr>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-800 text-white">
                        Product Combination
                    </th>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-200 text-black">
                        Cash Landing Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-800 text-white">
                        Dropdown
                    </th>
                </tr>
                        :
                <tr>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-800 text-white ">
                    Lead Source
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-black">
                        Job #
                    </th>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-800 text-white ">
                        Customer Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-black">
                        Job Submission Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-800 text-white ">
                        Customer Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-black">
                        Address
                    </th>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-800 text-white ">
                        System Details & Note
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-black">
                        Contract Full Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-800 text-white ">
                        Payment Method
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-black">
                        Customer Payment
                    </th>
                    <th scope="col" className="px-6 py-3 text-center bg-gray-800 text-white ">
                        Cash Receiving
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-black">
                        Commssion
                    </th>
                </tr>
                }
                    
                
            </thead>
            <tbody className='text-black'>
                {selectedTable ? displayDataTwo : displayData}
            </tbody>
        </table>

        
    </div>
  )
}

export default Table