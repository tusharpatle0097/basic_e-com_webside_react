import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const contextData = createContext(null);

const ContextStore = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [filterData, setFilterData] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Store the original data

  useEffect(() => {
    getData();
  },[]);

  useEffect(() => {
    filterDataWich();
  }, [selectedCategories]); // Update data when selectedCategories change

  const getData = () => {
    axios.get(`https://dummyjson.com/products`)
      .then(res => {
        setFetchData(res.data.products);
        setOriginalData(res.data.products); // Store the original data
      })
      .catch(err => {
        console.log(err);
      });
  }

 

  const filtermydata = fetchData.filter((item) =>
    item.title.toLowerCase().includes(filterData.toLowerCase())
  );

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filterDataWich = () => {
    if (selectedCategories.length === 0) {
      // If no categories selected, reset to the original data
      setFetchData(originalData);
    } else {
      const updatedData = originalData.filter((product) => {
        return selectedCategories.includes(product.category);
      });
      setFetchData(updatedData);
    }
  };

  const contextValues = {
    filtermydata,
    setFilterData,
    handleCategoryChange,
    selectedCategories,
  };

  return (
    <contextData.Provider value={contextValues}>
      {props.children}
    </contextData.Provider>
  );
}

export default ContextStore;
