import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_CLIENT } from '../mutations/clientMutation'
import { GET_CLIENTS } from '../queries/clientQueries'

export default function AddClientModal() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: {name, email, phone},
        update(cache, {data: { deleteClient }}) {
            const { clients } = cache.readQuery({
                query: GET_CLIENTS
            })
            cache.writeQuery({
                query: GET_CLIENTS,
                data: {clients: [...clients, addClient]}
            })
        }
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if(name === '' || email === '' || phone === ''){
            return alert('Please fill all fields')
        }

        addClient(name, email, phone)

        setName('')
        setPhone('')
        setEmail('')
    }   
  return (
    <>
    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
    <div className="d-flex align-items-center">
        <FaUser className='icon' />
        <div>Add Client</div>
    </div>
    </button>

    <div className="modal fade" id="addClientModal" tabIndex="-1" role="dialog" aria-labelledby="addClientModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="addClientModalLabel">Add client</h5>
            <button type="button" className="close btn btn-danger" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className='form-label'>Name</label>
                    <input type="text" className="form-control" id='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label className='form-label'>Email</label>
                    <input type="text" className="form-control" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='form-label'>Phone</label>
                    <input type="text" className="form-control" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button type='submit' data-bs-dismiss='modal' className='btn btn-secondary'>Submit</button>
            </form>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
