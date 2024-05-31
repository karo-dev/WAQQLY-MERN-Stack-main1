import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditDog = () => {
  const [WalkerName, setWalkerName] = useState('');
  const [DogName, setDogName] = useState('');
  const [DogAge, setDogAge] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/Dogs/${id}`)
    .then((response) => {
        setDogName(response.data.DogName);
        setDogAge(response.data.DogAge)
        setWalkerName(response.data.WalkerName)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditDog = () => {
    const data = {
      WalkerName,
      DogName,
      DogAge,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/Dogs/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Dog Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Dog</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>WalkerName</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setWalkerName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>DogName</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setDogName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>DogAge</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setDogAge(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditDog}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditDog