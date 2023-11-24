// import React from 'react'

// function pharmacy() {
//   return (
//     <div>pharmacy</div>
//   )
// }

// export default pharmacy
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AutoComplete, Button, Input, Form, Modal } from 'antd';

const MyComponent = () => {
  const [userData, setUserData] = useState(null);
  const [userData1, setUserData1] = useState(null);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchValue1, setSearchValue1] = useState('');
  const [selectedMedicineId, setSelectedMedicineId] = useState(null);
  const [selectedGenericId, setSelectedGenericId] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [responseData1, setResponseData1] = useState(null);
  const [genericName, setGenericName] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [typeName, setTypeName] = useState('');
  const [mrp, setMRP] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
 
 
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api236.slashdr.com/template_medicine_search?search=${searchValue}`);
        setResponseData(response.data);
        setUserData(response.data.medicine_list); // Set userData to medicine_list
        console.log('Full Response:', response);
      } catch (error) {
        setError('An error occurred while fetching data.');
        console.error('Error:', error);
      }
    };
    useEffect(() => {
    fetchData();
  }, [searchValue]);
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };


  const handleSelect = (value, option) => {
    // 'option' parameter contains the selected item from the dataSource
    const selectedMedicine = userData.find(item => item.name === value);
    if (selectedMedicine) {
      setSelectedMedicineId(selectedMedicine.id);
      console.log('Selected Medicine ID:', selectedMedicine.id);
    }
  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get(`https://api236.slashdr.com/admin/generic?search=${searchValue1}`);
      setResponseData1(response.data);
      setUserData1(response.data.list); // Set userData to generic
      console.log('generic:', response);
    } catch (error) {
      setError('An error occurred while fetching data.');
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    fetchData1();
  }, [searchValue1]);

  const handleSearchChange1 = (value) => {
    setSearchValue1(value);
  };
  
  // const handleSelect1 = (value, option) => {
  //   // 'option' parameter contains the selected item from the dataSource1
  //   const selectedGeneric = userData1.find(item => item.name === value);
  //   if (selectedGeneric) {
  //     setSelectedGenericId(selectedGeneric.name);
  //     console.log('Selected Medicine ID:', selectedGeneric.id);
  //   }
  // };

  const [userData2, setUserData2] = useState(null);
  const [responseData2, setResponseData2] = useState(null);
  const [searchValue2, setSearchValue2] = useState('');
  const [selectedPharmaId, setSelectedPharmaId] = useState(null);
  const fetchData2 = async () => {
    try {
      const response = await axios.get(`https://api236.slashdr.com/admin/company?search=${searchValue2}`);
      setResponseData2(response.data);
      setUserData2(response.data.list); // Set userData to generic
      console.log('generic:', response);
    } catch (error) {
      setError('An error occurred while fetching data.');
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    fetchData2();
  }, [searchValue2]);
  

 

  

  const handleSearchChange2 = (value) => {
    setSearchValue2(value);
  };
  
  // const handleSelect2 = (value, option) => {
  //   // 'option' parameter contains the selected item from the dataSource1
  //   const selectedPharma = userData2.find(item => item.name === value);
  //   if (selectedPharma) {
  //     setSelectedPharmaId(selectedPharma.id);
  //     console.log('selectedPharma ID:', selectedPharma.id);
  //   }
  // };



  const handleSelect1 = (value, option) => {
    const selectedGeneric = dataSources.find(item => item.value === value);
    if (selectedGeneric) {
      setGenericName(selectedGeneric.value);
    }
  };
  
  const handleSelect2 = (value, option) => {
    const selectedPharma = dataSourcepharma.find(item => item.value === value);
    if (selectedPharma) {
      setCompanyName(selectedPharma.value);
    }
  };
  
  const handleSelect3 = (value, option) => {
    const selectedMedicineType = dataSourceMedicineType.find(item => item.value === value);
    if (selectedMedicineType) {
      setTypeName(selectedMedicineType.value);
    }
  };
  



  const [userData3, setUserData3] = useState(null);
  const [responseData3, setResponseData3] = useState(null);
  const [searchValue3, setSearchValue3] = useState('');
  const [selectedMedicineTypeId, setSelectedMedicineTypeId] = useState(null);
  const fetchData3 = async () => {
    try {
      const response = await axios.get(`https://api236.slashdr.com/admin/medicine_type?search=${searchValue3}`);
      setResponseData3(response.data);
      setUserData3(response.data.list); // Set userData to generic
      console.log('generic:', response);
    } catch (error) {
      setError('An error occurred while fetching data.');
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    fetchData3();
  }, [searchValue3]);
  

 

  

  const handleSearchChange3 = (value) => {
    setSearchValue3(value);
  };
  
  // const handleSelect3 = (value, option) => {
  //   // 'option' parameter contains the selected item from the dataSource1
  //   const selectedMedicineType = userData3.find(item => item.name === value);
  //   if (selectedMedicineType) {
  //     setSelectedMedicineTypeId(selectedMedicineType.id);
  //     console.log('selectedPharma ID:', selectedMedicineType.id);
  //   }
  // };


  const handleSubmit1 = () => {
    
    const postData = {
      generic_name: genericName,
      medicine_name: medicineName,
      company_name: companyName,
      type_name: typeName,
      mrp: mrp,
    };
  
    // Make a POST request with postData
    axios.post('https://api236.slashdr.com/admin/add_medicine', postData)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  // const handleSelect1 = (value, option) => {
  //   const selectedGeneric = userData1.find(item => item.name === value);
  //   if (selectedGeneric) {
  //     setSelectedGenericId(selectedGeneric.id);
  //     console.log('Selected Generic ID:', selectedGeneric.id);
  //   } else {
  //     setSelectedGenericId(value);
  //     console.log('Selected Generic Name:', value);
  //   }
  // };
  
  // const handleSelect2 = (value, option) => {
  //   const selectedPharma = userData2.find(item => item.name === value);
  //   if (selectedPharma) {
  //     setSelectedPharmaId(selectedPharma.id);
  //     console.log('Selected Pharma ID:', selectedPharma.id);
  //   } else {
  //     setSelectedPharmaId(value);
  //     console.log('Selected Pharma Name:', value);
  //   }
  // };
  
  // const handleSelect3 = (value, option) => {
  //   const selectedMedicineType = userData3.find(item => item.name === value);
  //   if (selectedMedicineType) {
  //     setSelectedMedicineTypeId(selectedMedicineType.id);
  //     console.log('Selected Medicine Type ID:', selectedMedicineType.id);
  //   } else {
  //     setSelectedMedicineTypeId(value);
  //     console.log('Selected Medicine Type Name:', value);
  //   }
  // };
  

  // const handleSelect = (value, option) => {
  //   // 'option' parameter contains the selected item from the dataSource
  //   const selectedMedicine = userData.find(item => item.name === value);
  //   if (selectedMedicine) {
  //     setSelectedMedicineId(selectedMedicine.id);
  //     console.log('Selected Medicine ID:', selectedMedicine.id);
  //   } else {
  //     setSelectedMedicineId(value);
  //     console.log('Selected Medicine Name:', value);
  //   }
  // };
  


  // const handleSelect1 = (value, option) => {
  //   setSelectedGenericId(value);
  //   console.log('Selected Generic Name:', value);
  // };
  
  // const handleSelect2 = (value, option) => {
  //   setSelectedPharmaId(value);
  //   console.log('Selected Pharma Name:', value);
  // };
  
  // const handleSelect3 = (value, option) => {
  //   setSelectedMedicineTypeId(value);
  //   console.log('Selected Medicine Type Name:', value);
  // };
  
  // const handleSelect = (value, option) => {
  //   setSelectedMedicineId(value);
  //   console.log('Selected Medicine Name:', value);
  // };
  




  const handleSubmit = () => {
    if (!genericName || !medicineName || !companyName || !typeName || !mrp) {
      // Display individual error messages for each empty field
      if (!genericName) {
        console.log("Generic Name is required.");
      }
      if (!medicineName) {
        console.log("Medicine Name is required.");
      }
      if (!companyName) {
        console.log("Company Name is required.");
      }
      if (!typeName) {
        console.log("Type Name is required.");
      }
      return; // Stop the submission process if any field is empty
    }

    const postData = {
      generic_name: genericName,
      medicine_name: medicineName,
      company_name: companyName,
      type_name: typeName,
      mrp: mrp,
    };

    // Make a POST request with postData
    axios.post('https://api236.slashdr.com/admin/add_medicine', postData)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // Clear the form fields after successful submission
      setSelectedGenericId(null);
      setSelectedMedicineId(null);
      setSelectedPharmaId(null);
      setSelectedMedicineTypeId(null);
      setMRP('');
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const showModal = () => {
     // Reset the form data when the modal is opened
     setGenericName('');
     setMedicineName('');
     setCompanyName('');
     setTypeName('');
     setMRP('');
    setIsModalVisible(true);
    setSearchValue1('');
    setSearchValue2('');
    setSearchValue3('');
  };

  const handleOk = () => {
    setIsModalVisible(false);
    handleSubmit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataSource = userData
    ? userData.map((item) => ({ value: item.name, id: item.id })) // Include ID in dataSource
    : [];

    const dataSources = userData1
    ? userData1.map((item) => ({ value: item.name, id: item.id })) // Include ID in dataSource
    : [];

    const dataSourcepharma = userData2
    ? userData2.map((item) => ({ value: item.name, id: item.id })) // Include ID in dataSource
    : [];

    const dataSourceMedicineType = userData3
    ? userData3.map((item) => ({ value: item.name, id: item.id })) // Include ID in dataSource
    : [];

  return (

   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '900px', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <h3>MEDICINE</h3>
      <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
           
          <Form.Item label="Search" style={{ position: "relative", right: "150px" }}>
  <AutoComplete
    style={{ width: 700 }}
    placeholder="Search"
    value={searchValue}
    onChange={handleSearchChange}
    onSelect={handleSelect}
    dataSource={
      dataSource.length === 0
        ? [
            {
              value: 'No results found.',
              id: null,
              isCustom: true,
            },
          ]
        : dataSource.map((item) => ({ value: item.value, id: item.id }))
    }
    optionLabelProp="value"
    dropdownRender={(menu) => (
      <div>
        {menu}
        {dataSource.length === 0 && (
          <div style={{ padding: '8px', textAlign: 'center' }}>
            <a href="#" onClick={showModal}>
              Add a new medicine
            </a>
          </div>
        )}
      </div>
    )}
    // Customize rendering of each item in the dropdown
    renderItem={(item) => {
      return item.isCustom ? (
        <div style={{ cursor: 'not-allowed' }}>{item.value}</div>
      ) : (
        <div>{item.value}</div>
      );
    }}
  >
    <Input />
  </AutoComplete>
</Form.Item>


          </Form>

          </div>
     
        <Modal
          title="Add Medicine"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
           
            <Form.Item label="Medicine Name">
              <Input value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Generic">
  <AutoComplete
    style={{ width: "315px" }}
    placeholder="Search"
    value={searchValue1}
    onChange={handleSearchChange1}
    onSelect={handleSelect1}
    dataSource={dataSources.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>
</Form.Item>

<Form.Item label="Pharma">
  <AutoComplete
    style={{ width: '250px' }}
    placeholder="Search"
    value={searchValue2}
    onChange={handleSearchChange2}
    onSelect={handleSelect2}
    dataSource={dataSourcepharma.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>
</Form.Item>

<Form.Item label="Medicine Type">
  <AutoComplete
    style={{ width: '200px' }}  // Set the width to 100%
    placeholder="Search"
    value={searchValue3}
    onChange={handleSearchChange3}
    onSelect={handleSelect3}
    dataSource={dataSourceMedicineType.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>
</Form.Item>

           
<Form.Item label="MRP">
  <Input
    value={mrp}
    onChange={(e) => setMRP(e.target.value)}
    style={{ width: '50%' }}  // Set the width to 50%
  />
</Form.Item>

          </Form>
        </Modal>
    </div>
  );
};

export default MyComponent;



 {/* <Form.Item label="Generic Name">
              <Input value={genericName} onChange={(e) => setGenericName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Company Name">
              <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Type Name">
              <Input value={typeName} onChange={(e) => setTypeName(e.target.value)} />
            </Form.Item> */}
            {/* <Form.Item label="Generic">
  <AutoComplete
    style={{ width: 200 }}
    placeholder="Search"
    value={searchValue1}
    onChange={handleSearchChange1}
    onSelect={handleSelect1}
    dataSource={dataSources.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>



</Form.Item>
<Form.Item label="Pharma">
  <AutoComplete
    style={{ width: 200 }}
    placeholder="Search"
    value={searchValue2}
    onChange={handleSearchChange2}
    onSelect={handleSelect2}
    dataSource={dataSourcepharma.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>
</Form.Item>



<Form.Item label="Medicine Type">
  <AutoComplete
    style={{ width: 200 }}
    placeholder="Search"
    value={searchValue3}
    onChange={handleSearchChange3}
    onSelect={handleSelect3}
    dataSource={dataSourceMedicineType.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>
</Form.Item> */}






            {/* <Form.Item label="Generic">
  <AutoComplete
    style={{ width: 200 }}
    placeholder="Search"
    value={searchValue1}
    onChange={handleSearchChange1}
    onSelect={handleSelect1}
    dataSource={dataSources.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>



</Form.Item>
<Form.Item label="Pharma">
  <AutoComplete
    style={{ width: 200 }}
    placeholder="Search"
    value={searchValue2}
    onChange={handleSearchChange2}
    onSelect={handleSelect2}
    dataSource={dataSourcepharma.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>
</Form.Item>



<Form.Item label="Medicine Type">
  <AutoComplete
    style={{ width: 200 }}
    placeholder="Search"
    value={searchValue3}
    onChange={handleSearchChange3}
    onSelect={handleSelect3}
    dataSource={dataSourceMedicineType.map((item) => ({ value: item.value, id: item.id }))}
  >
    <Input />
  </AutoComplete>
</Form.Item> */}
{/* <Form.Item label="MRP">
<Input value={mrp} onChange={(e) => setMRP(e.target.value)}style={{ width: '200px'}} />
            </Form.Item> */}

{/* <Button type="primary" onClick={handleSubmit1}>
  Submit
</Button> */}


 {/* <Form.Item label="Search"style={{position:"relative",right:"150px" }}>
              <AutoComplete
                style={{ width: 700}}
                placeholder="Search"
                value={searchValue}
                onChange={handleSearchChange}
                onSelect={handleSelect}
                dataSource={dataSource.map((item) => ({ value: item.value, id: item.id }))}
              >
                <Input />
              </AutoComplete>
            </Form.Item> */}



            {/* Display selected medicine ID */}
            {/* {selectedMedicineId && <p>Selected Medicine ID: {selectedMedicineId}</p>}
            {selectedGenericId && <p>Selected Medicine ID: {selectedGenericId}</p>} */}
            {/* <Button type="primary" onClick={showModal}>
          New
        </Button> */}