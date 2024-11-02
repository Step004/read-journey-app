import {Toaster} from 'react-hot-toast'

export default function Layout({ children }) {
    return (
        <div className='container'>
            {children}
            <Toaster position='top-center' reverseOrder={false} />
        </div>
    )
}