import { useDispatch,useSelector } from 'react-redux';
import { deletingDataAsync } from '../contactRedux/crudReducers/deleteReducer';
import { fetchData } from '../contactRedux/crudReducers/getReducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./notifications.css";
/*  */
const DeleteModal = ({setDeleteModal,id,setOverlay}) => {

    const dispatch=useDispatch();

    const {currentPage,search,allData}=useSelector((state)=>state.get);

    const deleteData=allData?.contactResult.find((data)=>data._id === id);

    const deleteHandler=async (id)=>{
       await dispatch(deletingDataAsync({id}))
       await dispatch(fetchData({page:currentPage,search}));
        setDeleteModal(false)
        toast.error('Contact delete successfully!',{
            autoClose: 1000,
            style: {
              backgroundColor: "black",
              color: "white",
              border: "1px solid red",
            }});
    }


    return(
        <div id='confirmDeleteModal'>
            <div className='header'>
                <h3 style={{width:"100%"}}>Alert</h3>
            </div>
            <h4 style={{maxWidth:"75%"}}>do u want delete {`${deleteData?.firstName} ${deleteData?.lastName}`} frome this contact</h4>
            <div className='footer'style={{width:"100%"}}>
                <button onClick={()=>{setDeleteModal(false) ; setOverlay(false)}}>Cancel</button>
                <button onClick={()=>{deleteHandler(id); setOverlay(false) }}>Delete</button>
            </div>
        </div>
    );
}


export default DeleteModal;