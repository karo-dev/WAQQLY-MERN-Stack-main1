import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const DogsTable = ({ Dogs }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Walker Name</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Dog Name
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Dog Age
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {Dogs.map((Dog, index) => (
          <tr key={Dog._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {Dog.WalkerName}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {Dog.DogName}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {Dog.DogAge}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/Dogs/details/${Dog._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/Dogs/edit/${Dog._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/Dogs/delete/${Dog._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DogsTable;
