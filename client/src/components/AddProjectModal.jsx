import { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { useMutation, useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQueries'

export default function AddClientModal() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [clientId, setClientId] = useState('')
    const [status, setStatus] = useState('new')

    const onSubmit = (e) => {
        e.preventDefault()
        if(name === '' || description === '' || status === ''){
            return alert('Please fill all fields')
        }

        setName('')
        setDescription('')
        setStatus('')
        setClientId('')
    }   
  return (
    <>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
    <div className="d-flex align-items-center">
        <FaList className='icon' />
        <div>New project</div>
    </div>
    </button>

    <div className="modal fade" id="addProjectModal" tabIndex="-1" role="dialog" aria-labelledby="addProjectModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="addProjectModalLabel">Add project</h5>
            <button type="button" className="close btn btn-danger" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className='form-label'>Name</label>
                    <input type="text" className="form-control" id='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label className='form-label'>Description</label>
                    <textarea className="form-control" id='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <label className='form-label'>Status</label>
                    <select id='status' className='form-select' value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value='new'>Not started</option>
                        <option value='progress'>In progress</option>
                        <option value='completed'>Completed</option>
                    </select>
                </div>
                <button type='submit' data-bs-dismiss='modal' className='btn btn-primary'>Submit</button>
            </form>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
