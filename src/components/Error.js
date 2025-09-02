import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>404</h1>
        <h3>page not found</h3>
        <h4>{error.status}: {error.statusText}</h4>
    </div>
  )
}

export default Error