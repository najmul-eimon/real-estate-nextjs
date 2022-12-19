import Modal from 'react-bootstrap/Modal';

const PropertyModal = ({show, handleClose}) => {
  return (
    <Modal centered show={show} onHide={handleClose} className="property-modal">
      <Modal.Header closeButton></Modal.Header>
      <iframe src="https://www.youtube.com/embed/KbTjl1PNCzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Modal>
  )
}

export default PropertyModal