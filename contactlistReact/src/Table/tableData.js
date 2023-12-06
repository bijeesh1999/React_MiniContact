import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../contactRedux/crudReducers/getReducer";
import Edit_Form from "../editContact/editContact";
import DeleteModal from "../notifications/deleteModal";
import "../App.css";

function TableData({ setOverlay }) {
  const dispatch = useDispatch();
  const [editmodal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState('');

  const { allData, loading, error,currentPage} = useSelector((state) => state.get);

  useEffect(() => {
    dispatch(fetchData({ page: currentPage}));
  }, [dispatch,currentPage]);

  const editId = (id) => {
    setEditModal(true);
    setId(id);
  };

  const deleteId = (id) => {
    setDeleteModal(true);
    setId(id);
  };
  // const serialNumber = (currentPage - 1) * 5 + index + 1;


  return (
    <>
      <tbody>
        {Array.isArray(allData?.contactResult) &&
          allData?.contactResult.map((item, index) => {
            const serialNumber = (currentPage - 1) * 5 + index + 1;

            return (
              <tr className="data" key={index}>
                <td>{serialNumber}</td>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phno}</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => {
                      editId(item._id);
                      setOverlay(true);
                    }}
                  />
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => {
                      deleteId(item._id);
                      setOverlay(true);
                    }}
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
      {editmodal && <Edit_Form setEditModal={setEditModal} setOverlay={setOverlay} id={id} allData={allData.contactResult} />}
      {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} id={id} setOverlay={setOverlay} />}
    </>
  );
}

export default TableData;
