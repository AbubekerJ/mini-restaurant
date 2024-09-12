'use client'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,

} from '@tanstack/react-query'

const queryClient = useQueryClient()

// Queries
const query = useQuery({ queryKey: ['todos'], queryFn: fetch() })

const page = () => {
  return (
    <div className='px-4 lg:px-24 w-full h-[calc(100vh-4.5rem)] overflow-y-scroll p-8'>
          <table className=' w-full  border-separate  border-spacing-3' >
    <thead className='text-left '>
        <tr>
        <th className='hidden md:block'>order id</th>
        <th>date</th>
        <th>price</th>
        <th>orderes</th>
        <th className='hidden md:block'>status</th>
        </tr>
       

    </thead >
    <tbody className=' py-4 '>
        <tr className='text-sm md:text-base py-4 odd:bg-red-200'>
            <td className='hidden md:block py-4 px-1'>1234556</td>
            <td className='py-4 px-1'>12/2025</td>
            <td className='py-4 px-1'>12ETB </td>
            <td className='py-4 px-'>PIZZA BURGER</td>
            <td className='hidden md:block py-4 px-1 animate-pulse font-bold text-red-600'>on the way...</td>
        </tr>
        <tr className='text-sm md:text-base py-4 odd:bg-gray-200'>
            <td className='hidden md:block py-4 px-1'>1234556</td>
            <td className='py-4 px-1'>12/2025</td>
            <td className='py-4 px-1'>12ETB </td>
            <td className='py-4 px-'>PIZZA BURGER</td>
            <td className='hidden md:block py-4 px-1'>complited</td>
        </tr>
        <tr className='text-sm md:text-base py-4 odd:bg-gray-200'>
            <td className='hidden md:block py-4 px-1'>1234556</td>
            <td className='py-4 px-1'>12/2025</td>
            <td className='py-4 px-1'>12ETB </td>
            <td className='py-4 px-'>PIZZA BURGER</td>
            <td className='hidden md:block py-4 px-1'>complited</td>
        </tr>
       
    </tbody>
  </table>
    </div>

  )
}

export default page
