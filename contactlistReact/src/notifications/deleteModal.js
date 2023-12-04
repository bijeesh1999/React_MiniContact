import { useDispatch } from 'react-redux';
import { deletingDataAsync } from '../contactRedux/crudReducers/deleteReducer';
import { fetchData } from '../contactRedux/crudReducers/getReducer';
import "./notifications.css";
/*  */
const DeleteModal = ({setDeleteModal,id}) => {

    const dispatch=useDispatch();

    const deleteHandler=async (id)=>{
       await dispatch(deletingDataAsync({id}))
       await dispatch(fetchData());
        setDeleteModal(false)
    }



    return(
        <div id='confirmDeleteModal'>
            <div className='header'>
                <h3>Alert</h3>
            </div>
            <h4>do u want delete the data</h4>
            <div className='footer'>
                <button onClick={()=>setDeleteModal(false)}>Cancel</button>
                <button onClick={()=>{deleteHandler(id)}}>Delete</button>
            </div>
        </div>
    );
}


export default DeleteModal;