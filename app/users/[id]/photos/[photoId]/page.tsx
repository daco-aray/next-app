import React from 'react'

interface Props {
    params : {
        id: number;
    }
}

const UserPhotoPage = (props: Props) => {
  return (
    <div>UserPhotoPage {props.params.id}</div>
  )
}

export default UserPhotoPage