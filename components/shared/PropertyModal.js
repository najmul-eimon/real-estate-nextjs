import Modal from 'react-bootstrap/Modal';

const PropertyModal = ({show, handleClose}) => {
  return (
    <Modal centered show={show} onHide={handleClose} className="property-modal">
      <Modal.Header closeButton></Modal.Header>
      <video controls>
        <source src="/video.mp4" type="video/mp4"/>
      </video>
    </Modal>
  )
}

export default PropertyModal