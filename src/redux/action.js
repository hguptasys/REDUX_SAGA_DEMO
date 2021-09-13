//FETCH DATA

export const fetchProducts = () => {
  return { type: "FETCH_PRODUCTS" };
};

export const setProducts = (products = null) => {
  if (products) {
    return {
      type: "SET_PRODUCTS",
      payload: products,
    };
  }
};

//EDIT DATA

export const Edit_Data = (action) => {
  console.log("EDIT DATA action", action);
  return { type: "EDIT_DATA", data: action };
};

export const edit = (data) => {
  console.log("EDIT DATA", data);
  //  let newTodo = prompt("Edit Your correct name", data.name);
  return {
    type: "FETCH_PRODUCTS",
    payload: data,
    id:data.id
   
    
  };
};

//DELETE

export const Deleted_Data = (action) => {
  console.log("Deleted_Data action", action);
  return { type: "DELETE_DATA", data: action };
};

export const deleteData = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
