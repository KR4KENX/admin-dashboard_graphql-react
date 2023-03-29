import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
        <div className="card mb-3">
            <div className='card-body'>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className='card-title'>
                        {project.name}
                    </h5>
                    <a className='btn btn-light' href={`/projects/${project.id}`}>View</a>
                </div>
                <p className="small">
                    Status: <strong>{project.status}</strong>
                </p>
            </div>
        </div>
    </div>
  )
}
